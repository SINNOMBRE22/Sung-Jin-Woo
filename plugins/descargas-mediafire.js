import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw "⚠️ *Debes proporcionar un enlace de MediaFire.*";

  m.react("⚡");

  // Primer intento: usar API principal
  try {
    const res = await fetch(`https://api.agatz.xyz/api/mediafire?url=${args[0]}`);
    const data = await res.json();

    if (data.data && data.data.link) {
      await sendMediafireFile(m, conn, data.data.nama, data.data.size, data.data.mime, data.data.link);
      return;
    } else {
      throw new Error("No se recibió información válida desde la API principal.");
    }
  } catch (error) {
    console.error("Error en API principal:", error);
  }

  // Segundo intento: usar la función interna
  try {
    let res = await mediafireDl(args[0]);
    let { name, size, mime, link } = res;
    await sendMediafireFile(m, conn, name, size, mime, link);
  } catch (e) {
    console.error("Error en descarga interna:", e);
    await conn.reply(m.chat, `❗ Error al descargar el archivo.`, m);
    m.react("❌");
  }
};

async function sendMediafireFile(m, conn, name, size, mime, link) {
  let caption = `🔥 *[Descarga Completa]* 🔥
  
📂 *Archivo:* ${name}
📏 *Tamaño:* ${size}
📝 *Tipo:* ${mime}

🚀 *Enviando archivo...*`;
  
  await conn.sendFile(m.chat, link, name, caption, m, null, { mimetype: mime, asDocument: true });
  m.react("✅");
}

handler.help = ['mediafire <url>'];
handler.tags = ['downloader'];
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
export default handler;

async function mediafireDl(url) {
  // Se transforma la URL para omitir posibles restricciones
  const transformedUrl = url.replace('https://www.mediafire.com/', '');
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${transformedUrl}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);

  const link = $('#downloadButton').attr('href');
  if (!link) throw new Error("No se pudo obtener el enlace de descarga.");

  const nameRaw = $('div.promoDownloadName.notranslate > div').attr('title');
  if (!nameRaw) throw new Error("No se pudo obtener el nombre del archivo.");
  const name = nameRaw.trim();

  const sizeRaw = $('#downloadButton').text();
  const size = sizeRaw.replace('Download', '').replace(/||\n/g, '').trim();

  let mime = '';
  try {
    const headRes = await axios.head(link);
    mime = headRes.headers['content-type'] || 'application/octet-stream';
  } catch (err) {
    mime = 'application/octet-stream';
  }
  
  return { name, size, mime, link };
}
