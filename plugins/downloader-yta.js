import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const handler = async (m, { conn, command, args }) => {
  if (!args[0]) return conn.sendMessage(m.chat, { text: '⚠️ *Debes proporcionar un enlace de YouTube.*' }, { quoted: m });

  const youtubeURL = args[0];
  const isAudio = command === 'ytaudio';
  const mediaType = isAudio ? 'audio' : 'video';
  const extractingText = isAudio ? '🎵 *Extrayendo Audio...*' : '🎬 *Extrayendo Video...*';

  const animation = [
    "▱▱▱▱▱▱▱▱▱ 𝟎%",
    "▰▱▱▱▱▱▱▱▱ 𝟏𝟓%",
    "▰▰▱▱▱▱▱▱▱ 𝟑𝟎%",
    "▰▰▰▱▱▱▱▱▱ 𝟓𝟎%",
    "▰▰▰▰▱▱▱▱▱ 𝟳𝟎%",
    "▰▰▰▰▰▱▱▱▱ 𝟖𝟱%",
    "▰▰▰▰▰▰▰▰▰ 𝟏𝟎𝟎%"
  ];

  try {
    await m.react('⚔️');

    // Animación inicial
    let progressMsg = await conn.sendMessage(m.chat, { text: `${extractingText}\n${animation[0]}` });

    for (let i = 1; i < animation.length; i++) {
      await new Promise(res => setTimeout(res, 700));
      await conn.sendMessage(m.chat, { edit: progressMsg.key, text: `${extractingText}\n${animation[i]}` });
    }

    // Llamada a tu API
    const apiUrl = `http://api.colegialas.site/youtube?url=${encodeURIComponent(youtubeURL)}&key=MIKEYSECRETA456`;
    const response = await axios.get(apiUrl);

    if (!response.data.status) throw new Error('No se pudo obtener el contenido.');

    const info = response.data;
    const mediaUrl = isAudio ? info.low : info.high;
    const extension = isAudio ? 'mp3' : 'mp4';
    const fileName = `${info.title}.${extension}`;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, fileName);

    const mediaStream = await axios({
      url: mediaUrl,
      method: 'GET',
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(filePath);
    mediaStream.data.pipe(writer);

    writer.on('finish', async () => {
      await conn.sendMessage(m.chat, { delete: progressMsg.key });

      const infoText = `📜 *Título:* ${info.title}\n⏳ *Duración:* ${info.time}\n🔗 *Enlace:* ${youtubeURL}`;

      const sendOptions = isAudio
        ? { audio: { url: filePath }, mimetype: 'audio/mpeg', fileName, caption: infoText }
        : { video: { url: filePath }, mimetype: 'video/mp4', fileName, caption: infoText };

      await conn.sendMessage(m.chat, sendOptions, { quoted: m });
      fs.unlinkSync(filePath);
    });

    writer.on('error', async () => {
      await conn.sendMessage(m.chat, { text: '❌ *Error:* No se pudo guardar el archivo.' }, { quoted: m });
    });

  } catch (error) {
    console.error(error);
    await conn.sendMessage(m.chat, { text: '❌ *Error:* No se pudo procesar tu solicitud.' }, { quoted: m });
  }
};

handler.help = ['ytaudio', 'ytvideo'];
handler.tags = ['downloader'];
handler.command = /^(ytaudio|ytvideo)$/i;
handler.group = false;

export default handler;
