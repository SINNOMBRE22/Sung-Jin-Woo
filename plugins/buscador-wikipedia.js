import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import fs from 'fs';

async function wikipedia(query) {
  try {
    const link = await axios.get(`https://es.wikipedia.org/wiki/${query}`);
    const $ = cheerio.load(link.data);
    const titulo = $('#firstHeading').text().trim();
    const thumb = $('#mw-content-text')
      .find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img')
      .attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
    
    const contenido = [];
    $('#mw-content-text > div.mw-parser-output p').each((i, elem) => {
      const texto = $(elem).text().trim();
      if (texto) contenido.push(texto);
    });

    return {
      status: link.status,
      result: {
        titulo,
        thumb: 'https:' + thumb,
        contenido: contenido.join('\n\n')
      }
    };
  } catch (err) {
    return {
      status: 404,
      mensaje: "No se encontró información en Wikipedia."
    };
  }
}

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Uso: ${usedPrefix + command} <término de búsqueda>`;

  try {
    const userData = global?.db?.data?.users?.[m.sender];
    const idioma = userData?.language || 'es';
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`, 'utf8'));
    const tradutor = _translate?.plugins?.buscador_wikipedia || {};

    const res = await wikipedia(text);
    if (res.status === 404) {
      m.reply(tradutor.texto3 || "No se encontró información.");
    } else {
      m.reply(`*${tradutor.texto2 || "Resultado"}*\n\n${res.result.contenido}`);
    }
  } catch (error) {
    m.reply("Hubo un error en la búsqueda.");
  }
};

handler.help = ['wikipedia'].map((v) => v + ' <término>');
handler.tags = ['search'];
handler.command = /^(wiki|wikipedia)$/i;

export default handler;
