const fetch = require("node-fetch");

const handler = async (msg, { conn, args, usedPrefix, command }) => {
  if (!args.length) {
    return conn.sendMessage(msg.key.remoteJid, {
      text: `⚠️ *Uso incorrecto*\n📌 Ejemplo: *${usedPrefix + command} ¿Cuál es la capital de Japón?*`,
      mentions: [msg.sender]
    }, { quoted: msg });
  }

  const pregunta = args.join(" ");
  const geminiUrl = `https://api.dorratz.com/ai/gemini?prompt=${encodeURIComponent(pregunta)}`;
  const user = msg.key.remoteJid.endsWith('@s.whatsapp.net') ? msg.key.remoteJid : msg.participant;

  await conn.sendMessage(msg.key.remoteJid, {
    react: { text: "⏳", key: msg.key }
  });

  try {
    const response = await fetch(geminiUrl);
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data?.message?.trim()) {
      throw new Error("La API devolvió una respuesta vacía");
    }

    const respuesta = data.message.trim();
    const usuario = user.split('@')[0];

    await conn.sendMessage(msg.key.remoteJid, {
      text: `✨ *Respuesta para @${usuario}:*\n\n${respuesta}\n\n🔹 *Powered by Azura Ultra Subbot* 🤖`,
      mentions: [user]
    }, { quoted: msg });

    await conn.sendMessage(msg.key.remoteJid, {
      react: { text: "✅", key: msg.key }
    });

  } catch (error) {
    console.error(`Error en comando ${command}:`, error);
    
    await conn.sendMessage(msg.key.remoteJid, {
      text: `❌ *Error en la solicitud:*\n_${error.message}_`,
      mentions: [user]
    }, { quoted: msg });

    await conn.sendMessage(msg.key.remoteJid, {
      react: { text: "❌", key: msg.key }
    });
  }
};

handler.help = ['gemini <pregunta>'];
handler.tags = ['tools'];
handler.command = /^(gemini|geminis|ia)$/i;

module.exports = handler;
