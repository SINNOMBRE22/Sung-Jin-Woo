/*//////////////////////////////////////////////

        [ ❗ ] CREADOR - NO BORRAR [ ❗ ]

            Código hecho por @SinNombre
        Github: https://github.com/SinNombre

        Nota: Los efectos están solo en inglés,
        así que los textos en otros idiomas
        pueden sonar extraños.

//////////////////////////////////////////////*/

import axios from 'axios';
import fetch from 'node-fetch';
import fs from 'fs';

const handler = async (m, { conn, usedPrefix, command, text, args }) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language;
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`));
  const tradutor = _translate.plugins.convertidor_tts2;

  const [efecto, ...textoArray] = text.split(" ");
  const texto = textoArray.join(" ");

  if (!efecto) {
    let voiceList = await getVoiceList(tradutor);
    let responseText = `*${tradutor.texto1}*\n`;

    for (let i = 0, count = 0; count < 100 && i < voiceList.resultado.length; i++) {
      const entry = voiceList.resultado[i];
      // Verifica que exista entry.ID antes de acceder a su longitud
      if (entry.ID && entry.ID.length <= 20) {
        responseText += `*◉ ${usedPrefix + command} ${entry.ID} ${tradutor.texto2}*\n`;
        count++;
      }
    }

    return conn.sendMessage(m.chat, { text: responseText.trim() }, { quoted: m });
  }

  let efectoValido = false;
  let voiceList = await getVoiceList(tradutor);
  for (const entry of voiceList.resultado) {
    if (entry.ID === efecto) {
      efectoValido = true;
      break;
    }
  }

  if (!efectoValido)
    return conn.sendMessage(
      m.chat,
      { text: `*${tradutor.texto3[0]} ${usedPrefix + command} ${tradutor.texto3[1]}*` },
      { quoted: m }
    );

  if (!texto)
    return conn.sendMessage(
      m.chat,
      { text: `*${tradutor.texto4[0]}*\n*◉ ${usedPrefix + command} ${efecto} ${tradutor.texto4[1]}*` },
      { quoted: m }
    );

  let masivo = await makeTTSRequest(texto, efecto, tradutor);
  conn.sendMessage(
    m.chat,
    { audio: { url: masivo.resultado }, fileName: 'voz.mp3', mimetype: 'audio/mpeg', ptt: true },
    { quoted: m }
  );
};

handler.help = ['gtts2'];
handler.tags = ['convertidores'];
handler.command = /^(g?tts2)$/i;
export default handler;

const secretKey = 'fe2ee40099494579af0ecf871b5af266';
const userId = 'SrgwcKcLzSY63IdsAxd1PzscFjL2';

async function getVoiceList(tradutor) {
  const url = 'https://play.ht/api/v2/voices';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      AUTHORIZATION: `Bearer ${secretKey}`,
      'X-USER-ID': userId
    }
  };
  try {
    const response = await fetch(url, options);
    const responseData = await response.json(); 
    const uniqueData = responseData.reduce((acc, current) => {
      if (!acc.some(item => item.id === current.id)) {
        acc.push(current);
      }
      return acc;
    }, []);
    const simplifiedList = uniqueData.map(entry => ({
      ID: entry.id,
      name: entry.name,
      lenguaje: entry.language  
    }));
    // Devuelve la lista simplificada, o un array vacío si no hay datos
    return { resultado: simplifiedList.length ? simplifiedList : [] };
  } catch (error) {
    console.error('Error:', error);
    return { resultado: [] };
  }
}

async function makeTTSRequest(texto, efecto, tradutor) {
  const requestData = { text: texto, voice: efecto };
  const headers = {
    'Authorization': `Bearer ${secretKey}`,
    'X-User-Id': userId,
    'accept': 'text/event-stream',
    'content-type': 'application/json'
  };
  try {
    const response = await axios.post('https://play.ht/api/v2/tts', requestData, { headers });
    const events = response.data.split('\r\n\r\n');
    const eventData = events.find(event => event.includes('"stage":"complete"'));
    const urlMatch = eventData.match(/"url":"([^"]+)"/);
    const url = urlMatch ? urlMatch[1] : null;
    return { resultado: url ? url : `${tradutor.texto7}` };
  } catch (error) {
    console.error('Error:', error);
    return { resultado: '[❗] Error, no se obtuvo respuesta de la API.' };
  }
}
