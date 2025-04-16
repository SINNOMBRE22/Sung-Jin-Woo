let handler = async (m, { conn, isAdmin, isBotAdmin }) => {
	
	let delet = m.key.participant
    let bang = m.key.id

    if (!isBotAdmin) {
        return m.reply('Necesito ser administrador para poder eliminar mensajes.')
    }
	await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove') 
	await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
	m.reply(`⛔ Usuario y mensaje eliminados por SPAM.`) 
	
}

handler.customPrefix = /mujeresdebienestar\.com\/registro/i
handler.command = new RegExp
handler.group = true

export default handler
