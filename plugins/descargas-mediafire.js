import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw "⚠️ *Debes proporcionar un enlace de MediaFire.*";

  m.react("⚡");

  // Primer intento con API
  try {
    const res = await fetch(`https://api.agatz.xyz/api/mediafire?url=${args[0]}`);
    const data = await res.json();

    if (data.data && data.data.link && data.data.link.startsWith('http')) {
      await sendMediafireFile(m, conn, data.data.nama, data.data.size, data.data.mime, data.data.link);
      return;
    }
  } catch (error) {
    console.error("API Agatz falló:", error.message);
  }

  // Segundo intento scraping
  try {
    let res = await mediafireDl(args[0]);
    let { name, size, mime, link } = res;

    if (!link || !link.startsWith('http')) throw new Error("No se pudo obtener un enlace válido de descarga.");

    await sendMediafireFile(m, conn, name, size, mime, link);
  } catch (e) {
    console.error("Scraping falló:", e.message);
    await conn.reply(m.chat, `❗ *Error al procesar el enlace:* ${e.message}`, m);
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
  const transformedUrl = url.replace('https://www.mediafire.com/', '');
  const page = await axios.get(`https://www-mediafire-com.translate.goog/${transformedUrl}?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(page.data);

  const link = $('#downloadButton').attr('href');
  if (!link || !link.startsWith('http')) throw new Error("No se encontró el enlace de descarga.");

  const name = $('div.promoDownloadName.notranslate > div').attr('title')?.trim() || 'archivo_desconocido';
  const sizeRaw = $('#downloadButton').text();
  const size = sizeRaw.replace('Download', '').replace(/\n|/g, '').trim();

  let mime = 'application/octet-stream';
  try {
    const head = await axios.head(link);
    mime = head.headers['content-type'] || mime;
  } catch {}

  return { name, size, mime, link };
}
