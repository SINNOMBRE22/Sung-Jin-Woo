import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const handler = async (m, { conn, command, args }) => {
  if (!args[0]) return conn.sendMessage(m.chat, { text: '━━━✦❘༻༺❘✦━━━\n⚠️ *El Sistema requiere un enlace de YouTube para continuar.*\n━━━✦❘༻༺❘✦━━━' }, { quoted: m });

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

    // Mensaje inicial de animación con decoración
    let progressMsg = await conn.sendMessage(m.chat, { text: `━━━✦❘༻༺❘✦━━━\n${extractingText}\n${animation[0]}\n━━━✦❘༻༺❘✦━━━` });

    // Simulación de la barra de carga
    for (let i = 1; i < animation.length; i++) {
      await new Promise((res) => setTimeout(res, 700));
      await conn.sendMessage(m.chat, { edit: progressMsg.key, text: `━━━✦❘༻༺❘✦━━━\n${extractingText}\n${animation[i]}\n━━━✦❘༻༺❘✦━━━` });
    }

    // Obtener enlace de descarga
    const response = await axios.get(`https://bk9.fun/download/alldownload?url=${encodeURIComponent(youtubeURL)}`);
    if (!response.data.status) throw new Error('No se pudo procesar el enlace.');

    const mediaUrl = isAudio ? response.data.BK9.low : response.data.BK9.high;
    const extension = isAudio ? 'mp3' : 'mp4';
    const fileName = `${response.data.BK9.title}.${extension}`;
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, fileName);

    // Descargar archivo
    const mediaResponse = await axios({
      url: mediaUrl,
      method: 'GET',
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(filePath);
    mediaResponse.data.pipe(writer);

    writer.on('finish', async () => {
      // Eliminar la animación antes de enviar el archivo
      await conn.sendMessage(m.chat, { delete: progressMsg.key });

      // Información + archivo con decoración
      const infoText = `━━━✦❘༻༺❘✦━━━\n📜 *Título:* ${response.data.BK9.title}\n⏳ *Duración:* ${response.data.BK9.time}\n🔗 *Enlace:* ${youtubeURL}\n━━━✦❘༻༺❘✦━━━`;
      const sendOptions = isAudio
        ? { audio: { url: filePath }, mimetype: 'audio/mpeg', fileName, caption: infoText }
        : { video: { url: filePath }, mimetype: 'video/mp4', fileName, caption: infoText };

      await conn.sendMessage(m.chat, sendOptions, { quoted: m });

      // Eliminar archivo temporal
      fs.unlinkSync(filePath);
    });

    writer.on('error', async (err) => {
      console.error('Error al guardar el archivo:', err);
      await conn.sendMessage(m.chat, { text: '❌ *Error:* No se pudo procesar el archivo.' }, { quoted: m });
    });

  } catch (error) {
    console.error(error);
    await conn.sendMessage(m.chat, { text: '❌ *Error:* No se pudo procesar tu solicitud.' }, { quoted: m });
  }
};

// Configuración de comandos
handler.help = ['ytaudio', 'ytvideo'];
handler.tags = ['downloader'];
handler.command = /^(ytaudio|ytvideo)$/i;
handler.group = true;

export default handler;
