
import axios from 'axios';

let handler = async (m, { conn, text }) => {
  try {
    const response = await axios.get('https://www.uuidtools.com/api/generate/v4');
    const uuid = response.data[0];

    if (uuid) {
		const message = `UUID V4 Generado:
		
*${uuid}*`;
      conn.reply(m.chat, message, m);
    } else {
      conn.reply(m.chat, 'No se pudo obtener el UUID', m);
    }
  } catch (error) {
    conn.reply(m.chat, 'Ocurrió un error al obtener el UUID', m);
  }
};

handler.help = ['uuid'];
handler.tags = ['netfree'];
handler.command = /^(uuid|uid)$/i;

export default handler;
