/* import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	global.db.data.users[m.sender].comandos += 1;
	m.react('😎')
    const notStickerMessage = `✳️ Responde a un sticker con :\n\n *${usedPrefix + command}*`
    if (!m.quoted) throw notStickerMessage
    const q = m.quoted || m
    let mime = q.mediaType || ''
    if (!/sticker/.test(mime)) throw notStickerMessage
    let media = await q.download()
    let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
    await conn.sendFile(m.chat, out, 'out.png', '*✅ Aquí tienes*', m)
}
handler.help = ['toimg <sticker>']
handler.tags = ['sticker']
handler.command = ['toimg', 'jpg', 'aimg'] 
handler.diamond = true
export default handler */
import uploadFile from '../lib/uploadFile.js';

let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `Sticker *${usedPrefix + command}*`;
  let mime = m.quoted.mimetype || '';
  if (!/webp/.test(mime)) throw `Sticker *${usedPrefix + command}*`;
  let media = await m.quoted.download();
  let out = Buffer.alloc(0);
  if (/webp/.test(mime)) {
    out = await uploadImage(media);
  }
  await conn.sendMessage(m.chat, { image: { url: out }, caption: '*DONE*' }, { quoted: m });
}

handler.help = ['toimg (reply)'];
handler.tags = ['sticker'];
handler.command = ['toimg'];

export default handler;
