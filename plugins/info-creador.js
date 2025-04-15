let handler = async (m, { conn, usedPrefix }) => {
  let caption = `
≡ —◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 ADMINISTRADOR 𝙴𝚂:
🔰 wa.me/5215629885039

𝑪𝒂𝒏𝒂𝒍 𝒀𝒐𝒖𝒕𝒖𝒃𝒆:
⏯️ https://youtube.com/@sinnombre-port443?si=sVlu_AAPNt3pxQbb
  `.trim()

  // Enviar la imagen con su respectivo caption
  await conn.sendFile(m.chat, './src/creador2.png', 'creador2.png', caption, m)

  // Enviar el audio como nota de voz con sendMessage
  await conn.sendMessage(m.chat, {
    audio: { url: './media/creador.mp3' }, // Asegúrate de que la ruta sea correcta
    mimetype: 'audio/mpeg',                // O 'audio/ogg; codecs=opus' si lo prefieres
    ptt: true,                             // Indica que es nota de voz
    contextInfo: {
      externalAdReply: {
        title: 'Creador',
        body: 'SinNombre 🔥',
        thumbnailUrl: 'https://tinyurl.com/SinNombre23'
      }
    }
  }, { quoted: m })
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
handler.owner = false
export default handler
