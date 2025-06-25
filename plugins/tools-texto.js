import axios from 'axios'

let handler = async (m, { conn, args, text, command, usedPrefix }) => {
  global.db.data.users[m.sender].comandos += 1;

  if (!text) throw `Formato: ${usedPrefix}${command} <texto>`;

  m.reply('Generado, Espere... ⏳');

  try {
    let url = await axios.get(`https://api.lolhuman.xyz/api/attp?apikey=b77e9bc815d5515582a15a2a&text=${encodeURIComponent(text)}`, { responseType: 'arraybuffer' });
    let data = url.data;

    await conn.sendFile(m.chat, data, 'texto.webp', '✅ TEXTO', m);
  } catch (error) {
    console.error(error);
    m.reply('❌ Ocurrió un error al generar la imagen.');
  }
}

handler.help = ['ttp'];
handler.tags = ['sticker'];
handler.command = ['ttp'];
handler.group = true;

export default handler;
