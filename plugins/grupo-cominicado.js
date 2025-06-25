import fs from 'fs';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  // Verificación de permisos (si se ejecuta en grupo, se determina si el emisor es admin, aunque en este comando se usa en privado)
  let isAdmin = false;
  if (m.isGroup) {
    const groupMetadata = await conn.groupMetadata(m.chat);
    isAdmin = groupMetadata.participants.some(p =>
      p.id === m.sender && (p.admin === 'admin' || p.admin === 'superadmin')
    );
  }

  // El comando bcgc2 es exclusivo del dueño (la verificación adicional se realiza en la configuración del handler)
  if (/^bcgc2$/i.test(command)) {
    // No se requiere validación adicional aquí, ya que handler.owner = true
  }

  // Obtener el mensaje a enviar (desde mensaje citado o argumento)
  const pesan = m.quoted?.text || text;
  if (!pesan) throw "⚠️ *Error:* Debes ingresar un mensaje.";

  // Cargar la imagen del comunicado: desde disco o desde mensaje citado
  let imageBuffer;
  const imagePath = './src/comunicados.png';
  if (fs.existsSync(imagePath)) {
    imageBuffer = fs.readFileSync(imagePath);
  } else if (m.quoted && m.quoted.mimetype && m.quoted.mimetype.startsWith("image/")) {
    imageBuffer = await conn.downloadMediaMessage(m.quoted);
  } else {
    throw "⚠️ *Error:* No se encontró la imagen del comunicado. Responde a la imagen que deseas guardar.";
  }

  // Definir la decoración del comunicado
  const divider = "══════✦❘༻༺❘✦══════";
  const header = `${divider}\n     📢 *COMUNICADO OFICIAL*\n${divider}`;
  const footer = `\n🤖 *Sung Jin-Woo*`;

  if (/^bcgc2$/i.test(command)) {
    // Comando "bcgc2": se envía el comunicado a todos los grupos
    const broadcastMessage = `${header}\n\n${pesan}\n${divider}\n${footer}`;
    const groupsData = await conn.groupFetchAllParticipating();
    const groups = Object.values(groupsData).map(group => group.id);

    if (groups.length === 0) {
      return m.reply("⚠️ *No hay grupos disponibles para enviar el mensaje.*");
    }

    // Función de retardo para evitar saturar la API (500 ms entre cada envío)
    const delay = ms => new Promise(res => setTimeout(res, ms));
    let count = 0;
    for (const groupId of groups) {
      try {
        // Se obtienen los participantes para enviarlos en "mentions"
        const groupMetadata = await conn.groupMetadata(groupId);
        const participants = groupMetadata.participants.map(user => user.id);
        await conn.sendMessage(groupId, {
          image: imageBuffer,
          caption: broadcastMessage,
          mentions: participants
        });
        count++;
        await delay(500);
      } catch (e) {
        console.error(`❌ Error enviando a ${groupId}:`, e);
      }
    }
    m.reply(`✅ *Mensaje enviado a ${count} grupo(s).*`);
  }
};

// Configuración del handler
handler.help = ['bcgc2 <mensaje>'];
handler.tags = ['owner', 'group'];
handler.command = /^(bcgc2)$/i;
handler.owner = true; // Solo el dueño puede usar este comando
handler.admin = false;

export default handler;
