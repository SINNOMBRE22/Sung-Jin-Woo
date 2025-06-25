import fs from 'fs';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  // Verificar que se ejecute solo en grupos
  if (!m.isGroup) {
    throw "*Error:* Este comando solo se puede usar en grupos.";
  }

  // Verificación de permisos: solo administradores pueden usarlo
  const groupMetadata = await conn.groupMetadata(m.chat);
  const isAdmin = groupMetadata.participants.some(p =>
    p.id === m.sender && (p.admin === 'admin' || p.admin === 'superadmin')
  );
  if (!isAdmin) {
    throw "*Error:* Solo los administradores pueden usar este comando en grupos.";
  }

  // Obtener el mensaje a enviar (desde mensaje citado o argumento)
  const pesan = m.quoted?.text || text?.trim(); // .trim() elimina espacios antes de la validación
  if (!pesan) throw "*Error:* Debes ingresar un mensaje.";

  // Cargar la imagen del comunicado: desde disco o mensaje citado
  let imageBuffer;
  const imagePath = './src/comunicados.png';
  if (fs.existsSync(imagePath)) {
    imageBuffer = fs.readFileSync(imagePath);
  } else if (m.quoted && m.quoted.mimetype && m.quoted.mimetype.startsWith("image/")) {
    imageBuffer = await conn.downloadMediaMessage(m.quoted);
  } else {
    throw "*Error:* No se encontró la imagen del comunicado. Responde a la imagen que deseas guardar.";
  }

  // Definir la decoración del comunicado
  const divider = "══════✦❘༻༺❘✦══════";
  const header = `${divider}\n     📢 *COMUNICADO*\n${divider}`;
  const footer = `\n🤖 *Sung Jin-Woo*`;

  // Comando "invocar": se envía el comunicado en el chat actual y se invoca a todos los participantes
  const senderName = await conn.getName(m.sender);
  const invokerInfo = `${divider}\n_Invoqué por: ${senderName}_\n${divider}`;
  const broadcastMessage = `${header}\n\n${pesan}\n\n${invokerInfo}${footer}`;

  // Obtener los IDs de todos los participantes para mencionarlos
  const allParticipants = groupMetadata.participants.map(p => p.id);

  // Envía el comunicado mencionando a todos los participantes
  await conn.sendMessage(m.chat, {
    image: imageBuffer,
    caption: broadcastMessage,
    mentions: allParticipants
  }, { quoted: m });

  // Borra el mensaje original que invoca el comando
  try {
    await conn.sendMessage(m.chat, { delete: m.key });
  } catch (e) {
    console.error("Error al borrar el mensaje original:", e);
  }
};

// Configuración del handler
handler.help = ['invocar'];
handler.tags = ['group'];
handler.command = /^(invocar)$/i;
handler.owner = false;  // Deshabilita la verificación de owner
handler.admin = true;   // Solo los administradores pueden usar este comando

export default handler;
