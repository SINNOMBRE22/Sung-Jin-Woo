import { exec } from 'child_process';
import fs from 'fs';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

const handler = async (m, { conn, args }) => {
  const url = args[0];

  if (!url) {
    return conn.reply(m.chat, 'Por favor, proporciona un enlace para descargar.', m);
  }

  const filename = path.basename(url.split('?')[0]) || 'archivo_descargado';
  await conn.reply(m.chat, `Descargando *${filename}*...`, m);

  try {
    await execPromise(`wget -O "${filename}" "${url}"`);

    if (fs.existsSync(filename)) {
      const fileBuffer = fs.readFileSync(filename);
      await conn.sendFile(m.chat, fileBuffer, filename, null, m);
      fs.unlinkSync(filename);
    } else {
      conn.reply(m.chat, 'No se encontró el archivo descargado.', m);
    }
  } catch (error) {
    console.error('Error en la descarga o envío:', error);
    conn.reply(m.chat, 'Ocurrió un error al procesar la descarga.', m);
  }
};

handler.help = ['apk <url>'];
handler.tags = ['downloader'];
handler.command = /^apk$/i;

export default handler;
