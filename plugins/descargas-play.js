import fetch from 'node-fetch';
import axios from 'axios';
import yts from 'yt-search';
import { ogmp3 } from '../src/libraries/youtubedl.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { ytmp3, ytmp4 } = require('@hiudyy/ytdl');

// Frames de animación (barra de progreso)
const PROGRESS_FRAMES = [
  '▱▱▱▱▱▱▱▱▱▱ 0%',
  '▰▱▱▱▱▱▱▱▱▱ 10%',
  '▰▰▱▱▱▱▱▱▱▱ 20%',
  '▰▰▰▱▱▱▱▱▱▱ 30%',
  '▰▰▰▰▱▱▱▱▱▱ 40%',
  '▰▰▰▰▰▱▱▱▱▱ 50%',
  '▰▰▰▰▰▰▱▱▱▱ 60%',
  '▰▰▰▰▰▰▰▱▱▱ 70%',
  '▰▰▰▰▰▰▰▰▱▱ 80%',
  '▰▰▰▰▰▰▰▰▰▱ 90%',
  '▰▰▰▰▰▰▰▰▰▰ 100%'
];

function milesNumber(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function secondString(sec) {
  sec = Number(sec);
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return `${h ? h + 'h ' : ''}${m ? m + 'm ' : ''}${s}s`;
}

async function searchYouTube(query) {
  const r = await yts({ query, hl: 'es', gl: 'ES' });
  return r.videos;
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Uso: ${usedPrefix + command} <título o enlace de youtube>`;

  // Buscar vídeo
  const videos = await searchYouTube(text);
  if (!videos.length) throw 'No se encontró ningún resultado.';
  const info = videos[0];

  // Formato de información según especificación del usuario
  const infoBlock = [
    '╭────────────────',
    `├◉ *Título:* ${info.title}`,
    '├────────────────',
    `├◉ *Autor:* ${info.author.name}`,
    `├◉ *Publicado:* ${info.ago}`,
    `├◉ *Duración:* ${secondString(info.duration.seconds)}`,
    `├◉ *Vistas:* ${milesNumber(info.views)}`,
    '╰────────────────'
  ].join('\n');

  // Enviar mensaje inicial con detalles y 0%
  const animMsg = await conn.sendMessage(m.chat, {
    text: `${infoBlock}\n╭── Progreso de descarga ──╮\n➫ ${PROGRESS_FRAMES[0]}`
  }, { quoted: m });
  await m.react('🕐');

  const contextInfo = {
    externalAdReply: {
      title: info.title,
      body: info.author.name,
      thumbnailUrl: info.thumbnail,
      sourceUrl: info.url.replace('youtube.com', 'api.music.sinnombre.ovh'),
      mediaType: 2,
      showAdAttribution: false
    }
  };

  // Función para actualizar la barra de progreso
  const updateProgress = async (frame) => {
    await conn.sendMessage(m.chat, {
      text: `${infoBlock}\n╭── Progreso de descarga ──╮\n➫ ${frame}`,
      edit: animMsg.key
    });
  };

  if (command === 'play') {
    // Descarga de audio (ytmp3 o ogmp3)
    const downloadAudio = async () => {
      try {
        return await ytmp3(info.url);
      } catch {
        const r = await ogmp3.download(info.url, '320', 'audio');
        return { url: r.result.download };
      }
    };
    const data = await downloadAudio();

    // Barra de progreso animada
    for (let i = 1; i < PROGRESS_FRAMES.length; i++) {
      await delay(500);
      await updateProgress(PROGRESS_FRAMES[i]);
    }

    // Enviar audio
    await conn.sendMessage(m.chat, {
      audio: data.url ? { url: data.url } : data,
      mimetype: 'audio/mpeg',
      fileName: `${info.title}.mp3`,
      caption: infoBlock,
      contextInfo
    }, { quoted: m });
    await m.react('✅');

  } else if (command === 'yt') {
    // Descarga de vídeo con fallback
    let data;
    try {
      data = await ytmp4(info.url);
    } catch (error) {
      const res = await axios.get(`https://api.akuari.my.id/downloader/youtube?link=${encodeURIComponent(info.url)}`);
      data = { url: res.data.mp4.url };
    }

    // Barra de progreso animada
    for (let i = 1; i < PROGRESS_FRAMES.length; i++) {
      await delay(500);
      await updateProgress(PROGRESS_FRAMES[i]);
    }

    // Enviar vídeo
    const videoPayload = data.url ? { video: { url: data.url } } : { video: data };
    await conn.sendMessage(m.chat, {
      ...videoPayload,
      fileName: `${info.title}.mp4`,
      mimetype: 'video/mp4',
      caption: info.title,
      contextInfo
    }, { quoted: m });
    await m.react('✅');

  } else {
    throw 'Comando no reconocido.';
  }
};

handler.help = ['play (texto)', 'yt (texto)'];
handler.tags = ['downloader'];
handler.command = ['play', 'yt'];
handler.group = true;

export default handler;
