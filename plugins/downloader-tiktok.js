import axios from 'axios';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import { tiktok } from '@xct007/frieren-scraper';
import { tiktokdl } from '@bochilteam/scraper';

const handler = async (m, { conn, args }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '━━━✦❘༻༺❘✦━━━\n⚠️ *El Sistema requiere un enlace de TikTok para continuar.*\n━━━✦❘༻༺❘✦━━━', m);
  }

  const url = args[0];

  // Reaccionamos al mensaje original con ⚔️
  m.react('⚔️');

  // Mensaje inicial con reloj de arena y tema Solo Leveling
  let msg = await conn.sendMessage(m.chat, { 
    text: '━━━✦❘༻༺❘✦━━━\n⌛ *Extrayendo Video...* 🕐\n▱▱▱▱▱▱▱▱▱ 𝟎%\n━━━✦❘༻༺❘✦━━━', 
    mentions: conn.parseMention(m.sender),
    quoted: m 
  });

  const progress = [
    "▰▱▱▱▱▱▱▱▱ 𝟏𝟓%",
    "▰▰▱▱▱▱▱▱▱ 𝟑𝟎%",
    "▰▰▰▱▱▱▱▱▱ 𝟓𝟎%",
    "▰▰▰▰▱▱▱▱▱ 𝟳𝟎%",
    "▰▰▰▰▰▱▱▱▱ 𝟖𝟱%",
    "▰▰▰▰▰▰▰▰▰ 𝟏𝟎𝟎%"
  ];

  const clockAnimation = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘'];
  const interval = 1200;

  for (let i = 0; i < progress.length; i++) {
    await new Promise(resolve => setTimeout(resolve, interval));

    let clockSymbol = clockAnimation[i % clockAnimation.length];

    if (i === progress.length - 1) {
      await conn.sendMessage(m.chat, {
        text: `━━━✦❘༻༺❘✦━━━\n✅ *Video extraído con éxito.*\n▰▰▰▰▰▰▰▰▰ 𝟏𝟎𝟎%\n━━━✦❘༻༺❘✦━━━`,
        edit: msg.key,
        mentions: conn.parseMention(m.sender)
      });
    } else {
      await conn.sendMessage(m.chat, {
        text: `━━━✦❘༻༺❘✦━━━\n⌛ *Extrayendo Video...* ${clockSymbol}\n${progress[i]}\n━━━✦❘༻༺❘✦━━━`,
        edit: msg.key,
        mentions: conn.parseMention(m.sender)
      });
    }
  }

  try {
    const dataF = await tiktok.v1(url);
    if (dataF && dataF.play) {
      await conn.sendMessage(m.chat, { delete: msg.key }); // Elimina la animación
      return conn.sendFile(m.chat, dataF.play, 'tiktok.mp4', '━━━✦❘༻༺❘✦━━━\n🎬 *¡Video de TikTok descargado exitosamente!*\n━━━✦❘༻༺❘✦━━━', m);
    }
  } catch (e1) {
    console.error('Error en frieren-scraper:', e1);
  }

  try {
    const tiktokData = await tiktokdl(url);
    if (tiktokData && tiktokData.video && tiktokData.video.no_watermark) {
      await conn.sendMessage(m.chat, { delete: msg.key });
      return conn.sendFile(m.chat, tiktokData.video.no_watermark, 'tiktok.mp4', '━━━✦❘༻༺❘✦━━━\n🎬 *¡Video de TikTok descargado exitosamente!*\n━━━✦❘༻༺❘✦━━━', m);
    }
  } catch (e2) {
    console.error('Error en bochilteam scraper:', e2);
  }

  try {
    const response = await axios.get("https://tikdown.org/id");
    const $ = cheerio.load(response.data);
    const token = $("#download-form > input[type=hidden]:nth-child(2)").attr("value");
    const param = { url, _token: token };
    const { data } = await axios.post("https://tikdown.org/getAjax?", new URLSearchParams(param), {
      headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
    });
    const videoUrl = cheerio.load(data.html)("div.download-links > div:nth-child(1) > a").attr("href");
    if (videoUrl) {
      await conn.sendMessage(m.chat, { delete: msg.key });
      return conn.sendFile(m.chat, videoUrl, 'tiktok.mp4', '━━━✦❘༻༺❘✦━━━\n🎬 *¡Video de TikTok descargado exitosamente!*\n━━━✦❘༻༺❘✦━━━', m);
    }
  } catch (e3) {
    console.error('Error en TikDown.org:', e3);
  }

  try {
    const response = await fetch(`https://deliriussapi-oficial.vercel.app/download/tiktok?url=${encodeURIComponent(url)}`);
    const dataR = await response.json();
    const videoUrl = dataR.data.meta.media[0].org;
    if (videoUrl) {
      await conn.sendMessage(m.chat, { delete: msg.key });
      return conn.sendFile(m.chat, videoUrl, 'tiktok.mp4', '━━━✦❘༻༺❘✦━━━\n🎬 *¡Video de TikTok descargado exitosamente!*\n━━━✦❘༻༺❘✦━━━', m);
    }
  } catch (e4) {
    console.error('Error en API pública:', e4);
  }

  await conn.reply(m.chat, '❌ *Error:* No se pudo procesar la descarga. Verifica el enlace de TikTok.', m);
};

handler.help = ['tiktok'];
handler.tags = ['downloader'];
handler.command = /^(tiktok)?$/i;

export default handler;
