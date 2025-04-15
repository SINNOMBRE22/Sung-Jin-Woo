let handler = async (m, { conn, text, usedPrefix, command, args }) => {
	global.db.data.users[m.sender].comandos += 1;
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'	
let template = (args[0] || '').toLowerCase() 
if (/comprarpremium|prem1/i.test(command)) {
var tiempoPremium = 1440 * text //tiempo total 
var tiempoDecretado = 1440 * 1 //tiempo decretado 
const gata = 30
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈*\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('limit')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘾𝙀𝙋𝙏𝘼 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.limit < gata) return conn.reply(m.chat, `${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 *${rpgshop.emoticon('limit')}* 𝙋𝘼𝙍𝘼 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 🎟️ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘾𝙊𝙈𝙋𝙍𝙀 ${rpgshopp.emoticon('limit')} 𝙀𝙉 𝙇𝘼 𝙏𝙄𝙀𝙉𝘿𝘼 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}buy* `, fkontak, m)
user.limit -= gata * text

var tiempo = 86400000 * text //180000 3min | 300000 5 min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];
//let imgpre = 'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg' 

await conn.reply(m.chat, `${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙏𝙀𝙉𝙄𝘼 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tiempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, fkontak, { mentions: [aa,] })}


	

if (command) {
switch (template) {		
case 'premium':
case 'prem':
case 'pass':
case 'pase':
await conn.reply(m.chat, `${htki} *🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🎟️* ${htka}\n\n🌟 𝗖𝗢𝗠𝗣𝗥𝗔 𝗨𝗡 𝗧𝗜𝗣𝗢 𝗗𝗘 𝗣𝗔𝗦𝗘 𝗣𝗔𝗥𝗔 𝗦𝗘𝗥 𝗨𝗡 𝗨𝗦𝗨𝗔𝗥𝗜𝗢(𝗔) 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!!!\n\n𝗕𝗨𝗬 𝗔 𝗧𝗬𝗣𝗘 𝗢𝗙 𝗣𝗔𝗦𝗦 𝗧𝗢 𝗕𝗘𝗖𝗢𝗠𝗘 𝗔 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗨𝗦𝗘𝗥!!!\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓵ : 𝗣𝗔𝗦𝗦 ⓵\n✪${usedPrefix}prem1 1\n✪ 𝗣𝗮𝘀𝗲 𝗕𝗮𝘀𝗶𝗰𝗼 : 𝗕𝗮𝘀𝗶𝗰 𝗣𝗮𝘀𝘀\n✪ 10 ${rpgshop.emoticon('limit')} ➟ 5 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n🌀 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓶ : 𝗣𝗔𝗦𝗦 ⓶\n✪${usedPrefix}prem2 1\n✪ 𝗣𝗮𝘀𝗲 𝗧𝗼𝗿𝗿𝗲 𝗱𝗲 𝗘𝗻𝗰𝗮𝗻𝘁𝗼 : 𝗖𝗵𝗮𝗿𝗺 𝗣𝗮𝘀𝘀\n✪ 10 ${rpgshop.emoticon('kyubi')} ➟ 1 dia 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n💚 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓷ : 𝗣𝗔𝗦𝗦 ⓷\n✪${usedPrefix}prem3 1\n✪ 𝗣𝗮𝘀𝗲 𝗩𝗲𝗿𝗱𝘂𝘇𝗰𝗼 : 𝗚𝗿𝗲𝗲𝗻𝗶𝘀𝗵 𝗣𝗮𝘀𝘀\n✪ 25 ${rpgshop.emoticon('emerald')} ➟ 30 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n🗑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓸ : 𝗣𝗔𝗦𝗦 ⓸\n✪${usedPrefix}prem4 1\n✪ 𝗣𝗮𝘀𝗲 𝗥𝗲𝘀𝗶𝗱𝘂𝗼𝘀 𝗘𝗖𝗢 : 𝗘𝗖𝗢 𝗪𝗮𝘀𝘁𝗲 𝗣𝗮𝘀𝘀\n✪ 50 ${rpgshop.emoticon('trash')} ➟ 1 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n♦️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓹ : 𝗣𝗔𝗦𝗦 ⓹\n${usedPrefix}prem5 1\n✪ 𝗣𝗮𝘀𝗲 𝗖𝗮𝘇𝗮 𝗕𝗿𝗶𝗹𝗹𝗮𝗻𝘁𝗲 : 𝗕𝗿𝗶𝗹𝗹𝗶𝗮𝗻𝘁 𝗛𝘂𝗻𝘁 𝗣𝗮𝘀𝘀\n✪ 40 ${rpgshop.emoticon('berlian')} ➟ 3 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n🪙 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓺ : 𝗣𝗔𝗦𝗦 ⓺\n${usedPrefix}prem6 1\n✪ 𝗣𝗮𝘀𝗲 𝗔𝗺𝗼 𝗱𝗲𝗹 𝗖𝗿𝗶𝗽𝘁𝗼 : 𝗖𝗿𝘆𝗽𝘁𝗼 𝗠𝗮𝘀𝘁𝗲𝗿 𝗣𝗮𝘀𝘀\n✪ 70 ${rpgshop.emoticon('joincount')} ➟ 7 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n💎+ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓻ : 𝗣𝗔𝗦𝗦 ⓻\n${usedPrefix}prem7 1\n 𝗣𝗮𝘀𝗲 𝗚𝗲𝗺𝗮 𝗣𝗹𝘂𝘀 : 𝗚𝗲𝗺 𝗣𝗹𝘂𝘀 𝗣𝗮𝘀𝘀\n✪ 65 ${rpgshop.emoticon('diamond')} ➟ 24 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n👑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓼ : 𝗣𝗔𝗦𝗦 ⓼\n${usedPrefix}prem8 1\n✪ 𝗣𝗮𝘀𝗲 𝗧𝗶𝗲𝗺𝗽𝗼 𝗱𝗲 𝗢𝗿𝗼 : 𝗚𝗼𝗹𝗱𝗲𝗻 𝗧𝗶𝗺𝗲 𝗣𝗮𝘀𝘀\n✪ 80 ${rpgshop.emoticon('gold')} ➟ 3 d 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n${wm}`, fkontak, { mentions: [aa,] })

break	
		
}}}
handler.help = ['pass [@user] <dias>']
handler.tags = ['econ']
handler.command = /^(prem1|prem2|prem3|prem4|prem5|prem6|prem7|prem8|pass|comprarpremium|pase)$/i

export default handler
