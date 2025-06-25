let handler = async (m, { conn, usedPrefix }) => {
  let caption = `
≡ —◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 ADMINISTRADOR 𝙴𝚂:
🔰 wa.me/5215629885039

𝑪𝒂𝒏𝒂𝒍 𝒀𝒐𝒖𝒕𝒖𝒃𝒆:
⏯️ https://youtube.com/@sinnombre-port443?si=sVlu_AAPNt3pxQbb
`.trim()

  // Enviar el mensaje con miniatura estilo menú
  await conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
      externalAdReply: {
        title: 'ㅤㅤㅤ🜲 CREADOR DEL BOT 🜲',
        body: 'ㅤㅤㅤㅤSinNombre 🔥',
        thumbnailUrl: 'https://i.postimg.cc/hvVMb77h/IMG-20250509-WA0006.jpg',
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })

  // Enviar el audio como nota de voz con miniatura original
  await conn.sendMessage(m.chat, {
    audio: { url: './media/creador.mp3' },
    mimetype: 'audio/mpeg',
    ptt: true,
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
