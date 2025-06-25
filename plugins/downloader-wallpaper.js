import { wallpaper } from '@bochilteam/scraper';
import fs from 'fs';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  const globalData = global;
  const idioma = globalData.db.data.users[m.sender].language;
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`));
  const tradutor = _translate.plugins.downloader_wallpaper;

  if (!text) throw `${tradutor.texto1} ${usedPrefix + command} Minecraft`;

  // Si la consulta no incluye "wallpaper", se añade para mejorar la búsqueda
  if (!text.toLowerCase().includes("wallpaper")) {
    text = `${text} wallpaper`;
  }

  const results = await wallpaper(text);
  if (!results || results.length === 0) {
    throw "No se encontraron wallpapers para esa búsqueda.";
  }

  // Selecciona el primer resultado, suponiendo que es el más relevante
  const selected = results[0];
  const imageUrl = selected.url || selected;

  // Extrae el nombre del archivo de la URL para que tenga un nombre representativo
  const fileName = imageUrl.split('/').pop().split('?')[0];

  conn.sendFile(m.chat, imageUrl, fileName, `${tradutor.texto2} ${text}*`, m);
};

handler.help = ['wallpaper <query>'];
handler.tags = ['downloader'];
handler.command = /^(wallpaper)$/i;
export default handler;
