// plugins/hazmeadmin.js
const handler = async (m, { conn }) => {
  // Función para validar JID
  const formatJID = (num) => num.endsWith('@s.whatsapp.net') ? num : num + '@s.whatsapp.net';

  try {
    // Validar si el comando se usa en grupo
    if (!m.isGroup) {
      return conn.sendMessage(m.chat, { text: '⚠️ *¡Este comando solo funciona en grupos!*' }, { quoted: m });
    }

    // Obtener JID del remitente y owners
    const senderJID = formatJID(m.sender);
    const owners = global.owner.map(([num]) => formatJID(num));
    const isOwner = owners.includes(senderJID);

    // Si no es owner, rechazar
    if (!isOwner) {
      return conn.sendMessage(m.chat, { text: '❌ *¡SOLO MI CREADOR PUEDE USAR ESTE COMANDO!*' }, { quoted: m });
    }

    // Verificar si el bot es admin
    const groupData = await conn.groupMetadata(m.chat);
    const botAdmin = groupData.participants.find(p => p.id === conn.user.jid)?.admin;
    if (!botAdmin) {
      return conn.sendMessage(m.chat, { text: '⚠️ *¡PRIMERO DEBO SER ADMINISTRADOR DEL GRUPO!' }, { quoted: m });
    }

    // Verificar si el usuario ya es admin
    const userAdmin = groupData.participants.find(p => p.id === senderJID)?.admin;
    if (userAdmin) {
      return conn.sendMessage(m.chat, { text: '⚠️ *¡YA ERES ADMINISTRADOR AQUÍ!*' }, { quoted: m });
    }

    // Promover a admin
    await conn.groupParticipantsUpdate(m.chat, [senderJID], 'promote');
    conn.sendMessage(m.chat, { text: '✅ *¡LISTO, EL ARQUITECTO! AHORA ERES ADMINISTRADOR.*' }, { quoted: m });

  } catch (e) {
    console.error('Error en comando monarca:', e);
    conn.sendMessage(m.chat, { 
      text: `❌ *ERROR:* ${e.message || 'Falló la promoción. Revisa los logs.'}` 
    }, { quoted: m });
  }
};

// Configuración
handler.command = ['hazmeadmin', 'monarca'];
handler.group = true;
handler.botAdmin = true;
handler.owner = true;

export default handler;
