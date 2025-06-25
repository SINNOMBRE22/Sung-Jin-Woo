// Código mejorado por: CrisCode

import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text) {
    return m.reply(`*[❗] INGRESA EL TÍTULO DE UN MÓDULO O COMPLEMENTO DE LA PLATAFORMA NPMJS*\n\n*Ejemplo:*\n${usedPrefix + command} axios`);
  }

  try {
    let res = await fetch(`https://registry.npmjs.com/-/v1/search?text=${encodeURIComponent(text)}&size=5`);
    let json = await res.json();
    let { objects } = json;

    if (!objects.length) {
      return m.reply(`*[❗] No se encontraron resultados para:* "${text}"`);
    }

    let npmpp = './src/npm.png'; // Ruta local de tu imagen
    let resultText = `*[ 📦 Resultados de búsqueda en NPMJS ]*\n\n`;

    for (let { package: pkg } of objects) {
      resultText += `🔹 *Nombre:* ${pkg.name}\n`;
      resultText += `🔹 *Versión:* ${pkg.version || 'Desconocida'}\n`;
      resultText += `🔹 *Descripción:* ${pkg.description || 'Sin información'}\n`;
      resultText += `🔹 *Enlace:* ${pkg.links.npm}\n`;
      resultText += `────────────────────\n`;
    }

    await conn.sendMessage(m.chat, { image: { url: npmpp }, caption: resultText }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('[❗] Ocurrió un error al buscar en NPMJS. Inténtalo más tarde.');
  }
};

handler.help = ['npmjs <paquete>'];
handler.tags = ['search'];
handler.command = /^npmjs$/i;

export default handler;
