import fs from 'fs';
import path from 'path';

let handler = async (m, { text }) => {
  // Verifica que se haya proporcionado un nombre para el archivo
  if (!text) throw `
━━━━━━✦❘༻༺❘✦━━━━━━
❌ **Error:** *proporciona un*
          *nombre para el audio.*
━━━━━━✦❘༻༺❘✦━━━━━━`;

  // Verifica que el mensaje citado sea un archivo de audio
  if (!m.quoted || !m.quoted.fileSha256) throw `
━━━━━━✦❘༻༺❘✦━━━━━━
❌ **Error:** *debes responder a un*
          *archivo de audio para guardarlo.*
━━━━━━✦❘༻༺❘✦━━━━━━`;
  if (!m.quoted.mimetype || !m.quoted.mimetype.startsWith('audio/')) throw `
━━━━━━✦❘༻༺❘✦━━━━━━
⚠️ **Advertencia:** *responde a un archivo*
          *de audio para guardarlo.*
━━━━━━✦❘༻༺❘✦━━━━━━`;

  let media = await m.quoted.download();  // Descarga el archivo de audio
  const dirPath = 'media';  // Carpeta donde se guardarán los audios
  
  // Asegura que si el nombre no tiene extensión, se agregue .mp3
  let fileName = text.endsWith('.mp3') ? text : `${text}.mp3`;
  
  const filePath = path.join(dirPath, fileName);  // Define el nombre del archivo

  // Crea la carpeta si no existe
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.writeFileSync(filePath, media);  // Guarda el archivo de audio
  m.reply(`
━━━━━━✦❘༻༺❘✦━━━━━━
✅ **Éxito:** *Audio guardado como:*
          *${filePath}*
━━━━━━✦❘༻༺❘✦━━━━━━`);  // Responde con el mensaje de confirmación
};

handler.help = ['saveaudio <nombre>'];
handler.tags = ['owner'];
handler.command = /^(saveaudio|sa)$/i;
handler.owner = true;

export default handler;
