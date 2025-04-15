import MessageType from '@whiskeysockets/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*\n\n𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙏𝘼𝙂 𝙏𝙃𝙀 𝙐𝙎𝙀𝙍 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙇𝘼 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀 𝙈𝙊𝙉𝙀𝘿𝘼𝙎 𝙑𝙄𝙋`
if (isNaN(txt)) throw `${mg}𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎`
let dmt = parseInt(txt)
let exphero = dmt
let pjk = Math.ceil(dmt * pajak)
exphero -= pjk
if (exphero < 1) throw `${mg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝙋𝘼𝙍𝘼 𝙈𝙊𝙉𝙀𝘿𝘼𝙎 𝙑𝙄𝙋 𝙀𝙎 *1*`
let users = global.db.data.users
users[who].exphero -= dmt
m.reply(`╭[ MONEDAS VIP 🪙 ]⬣\n┃\n┃ღ *PARA:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *REMOVIDOS*\n┃ღ *${dmt} Monedas(s)* 🪙\n┃\n╰━━━━━━━━━━━━━━⬣`)}
handler.help = ['delcoinsvip <@user>']
handler.tags = ['owner']
handler.command = ['delcoinsvip'] 
handler.group = true
handler.rowner = true
export default handler 
