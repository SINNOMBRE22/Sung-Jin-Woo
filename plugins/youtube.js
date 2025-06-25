import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const API_URL = 'https://api.colegialas.site/youtube';
const API_KEY = 'MIKEYSECRETA456';  // Tu key privada para llamar a la API
const tmpDir = './tmp';

// Asegura que la carpeta tmp exista
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

let handler = async (m, { command, text }) => {
  if (!text) return m.reply('Por favor envía el enlace o nombre para buscar.');

  try {
    let url = encodeURIComponent(text.trim());

    // Define qué tipo de respuesta pedir según el comando
    let tipo;
    if (command === 'pruebaaudio') tipo = 'audio';
    else if (command === 'pruebavideo') tipo = 'video';
    else if (command === 'pruevainfo') tipo = 'info';
    else return m.reply('Comando no soportado.');

    // Llama a la API con tipo (en la API deberías recibir esto para saber qué hacer)
    let res = await fetch(`${API_URL}?url=${url}&key=${API_KEY}&type=${tipo}`);

    if (!res.ok) {
      let err = await res.json();
      return m.reply('Error: ' + (err.error || 'Error desconocido'));
    }

    if (tipo === 'info') {
      // Si es info, asumimos que la API responde JSON con datos
      let info = await res.json();
      let infoText = `Título: ${info.title}\nDuración: ${info.duration}\nCanal: ${info.channel}\nDescripción:\n${info.description}`;
      return m.reply(infoText);
    }

    // Para audio o video, guardamos temporalmente el archivo
    let ext = tipo === 'audio' ? 'mp3' : 'mp4';
    let filePath = path.join(tmpDir, `${command}_${Date.now()}.${ext}`);
    let fileStream = fs.createWriteStream(filePath);
    await new Promise((resolve, reject) => {
      res.body.pipe(fileStream);
      res.body.on('error', reject);
      fileStream.on('finish', resolve);
    });

    // Enviar archivo según tipo
    if (tipo === 'audio') {
      await conn.sendMessage(m.chat, { audio: fs.readFileSync(filePath), mimetype: 'audio/mpeg', fileName: `audio.${ext}` }, { quoted: m });
    } else if (tipo === 'video') {
      await conn.sendMessage(m.chat, { video: fs.readFileSync(filePath), mimetype: 'video/mp4', fileName: `video.${ext}` }, { quoted: m });
    }

    // Borrar archivo temporal
    fs.unlinkSync(filePath);

  } catch (e) {
    console.error(e);
    m.reply('Error al conectar con la API o procesar la solicitud.');
  }
};

handler.help = ['pruebaaudio <url|nombre>', 'pruebavideo <url|nombre>', 'pruevainfo <url|nombre>'];
handler.tags = ['downloader'];
handler.command = /^(pruebaaudio|pruebavideo|pruevainfo)$/i;

export default handler;
