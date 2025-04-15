import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  const API_KEY = 'AIzaSyC9aYO5gSiGELAQ81oGlVKsITVj1u5KokA';
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `Responde en español: ${text}` }]
        }]
      })
    });

    if (!response.ok) {
      return conn.reply(m.chat, '❌ *Ocurrió un error al conectar con la API.*', m);
    }

    const data = await response.json();

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts[0]) {
      return conn.reply(m.chat, '❌ *Ocurrió un error:* No se recibió una respuesta válida de Gemini.', m);
    }

    const respuesta = data.candidates[0].content.parts[0].text;
    await conn.reply(m.chat, `🤖 *Gemini responde:*\n\n${respuesta}`, m);
    
  } catch (error) {
    console.error(error);
    return conn.reply(m.chat, '❌ *Ocurrió un error inesperado.*', m);
  }
};

handler.help = ['gemini <texto>'];
handler.command = /^(gemini|ia)$/i;
handler.tags = ['tools'];
export default handler;
