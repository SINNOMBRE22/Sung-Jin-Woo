import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1', {
    method: 'POST',
    headers: { 
      'Authorization': 'Bearer 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', // Consíguelo en: https://huggingface.co/settings/tokens
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      inputs: `<s>[INST] Responde en español: ${text} [/INST]`
    })
  });

  const data = await response.json();
  const respuesta = data[0].generated_text.split('[/INST]')[1].trim();
  await conn.reply(m.chat, `🦙 *Mixtral:*\n\n${respuesta}`, m);
};

handler.command = /^(mixtral|ia2)$/i;
export default handler;
