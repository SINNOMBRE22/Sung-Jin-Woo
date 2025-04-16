
let handler = async(m, { conn, usedPrefix, command }) => {
m.react('💰')
    let donat = `
≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo, gracias por tu apoyo ☺️.

▢ *PayPal*
• *Link :* https://paypal.me/sinnombre395
▢ *Transferencia en México 🇲🇽 vía SPEI*
• *Cuenta :* 646028206857414458  💳 | STP
• *Enlace:* Solicitalo con el ADM

▢ *Donadores*
• +52 797 110 2864
• +52 749 114 9377
• +52 221 567 8881
• +52 55 5564 5757
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'

conn.sendFile(m.chat, img, 'donate.jpg', donat, m);
}

handler.help = ['donar']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar', 'donaciones'] 

export default handler
