let handler = async (m, { conn, command, text, isAdmin, isBotAdmin }) => {
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let delet = m.key.participant
    let bang = m.key.id
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove') 
    await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
    m.reply(`⛔ Usuario y Mensaje Eliminado`) 
}

handler.customPrefix = /https:\/\/corona\.com@androidlnk\.cc\/CKokRxuQ\/\?hieleras-cervezas-corona-dia-del-padre\.html/i
handler.command = new RegExp
handler.group = true

export default handler
