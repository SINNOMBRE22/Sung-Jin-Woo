import MessageType from '@whiskeysockets/baileys'
let gemas = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙰 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙲𝙾𝙽 𝙴𝙻 @𝚝𝚊𝚐*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙳𝙴 CREDITOS 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙽̃𝙰𝙳𝙸𝚁*'
if (isNaN(txt)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙸𝙼𝙱𝙾𝙻𝙾 𝙽𝙾 𝙰𝙳𝙼𝙸𝚃𝙸𝙳𝙾, 𝚂𝙾𝙻𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂!*'
let dmt = parseInt(txt)
let vipcoins = dmt
let pjk = Math.ceil(dmt * gemas)
vipcoins += pjk
if (vipcoins < 1) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙼𝙸𝙽𝙸𝙼𝙾 𝙳𝙴 CREDITOS 𝙿𝙰𝚁𝙰 𝙰𝙽̃𝙰𝙳𝙸𝚁 𝙴𝚂 𝟷*'
let users = global.db.data.users
users[who].vipcoins += dmt
m.reply(`≡ *𝑪𝑹𝑬𝑫𝑰𝑻𝑶 𝑨𝑵̃𝑨𝑫𝑰𝑫𝑶*
┌──────────────
▢ *𝚃𝚘𝚝𝚊𝚕:* ${dmt}
└──────────────`)
}
handler.help = ['añadircreditosvip'];
handler.tags = ['owner'];
handler.command = ['añadircreditosvip','addv','addcreditosvip','darcreditosvip'] 
handler.rowner = true
export default handler
