const linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;

export async function before(m, { conn, isAdmin, isBotAdmin }) {
  // Ignorar mensajes del bot y mensajes que no son de grupos
  if (m.fromMe) return true;
  if (!m.isGroup) return false;

  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.test(m.text);
  
  // Verificar si es administrador o el antiLink está desactivado
  if (isAdmin || !chat.antiLink) return true;

  const warningMsg = `━━━━━━✦❘༻༺❘✦━━━━━━\n⚠️ *${user}, está prohibido enviar enlaces de grupos.*\n━━━━━━✦❘༻༺❘✦━━━━━━`;

  if (isGroupLink) {
    // Verificar si es enlace del grupo actual
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return true;
    }

    // Eliminar mensaje primero
    await conn.sendMessage(m.chat, { 
      delete: { 
        remoteJid: m.chat, 
        fromMe: false, 
        id: m.key.id, 
        participant: m.key.participant 
      }
    });

    // Enviar advertencia
    await conn.sendMessage(m.chat, { 
      text: warningMsg, 
      mentions: [m.sender] 
    }, { quoted: m });

    // Eliminar del grupo si está activada la restricción
    if (isBotAdmin && bot.restrict) {
      await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    }
  }
  return true;
}
