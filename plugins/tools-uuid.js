import cp from 'child_process';
import { promisify } from 'util';
import fs from 'fs';

let exec = promisify(cp.exec).bind(cp);

let handler = async (m, { conn }) => {
  global.db.data.users[m.sender].comandos = (global.db.data.users[m.sender].comandos || 0) + 1;

  // ========== [INICIO DE MODIFICACIÓN] ========== //
  const isOwner = m.sender === global.owner[0][0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  
  if (!isOwner) {
    let cooldown = 3 * 24 * 60 * 60 * 1000;
    let lastUsage = global.db.data.users[m.sender].lastusuario || 0;
    let now = Date.now();
    
    if (now - lastUsage < cooldown) {
      let remaining = cooldown - (now - lastUsage);
      throw `*⏳ Aún no estás listo. Vuelve en ${msToTime(remaining)} para usar este poder otra vez.*`;
    }
    global.db.data.users[m.sender].lastusuario = now;
  }
  // ========== [FIN DE MODIFICACIÓN] ========== //

  let who = (m.mentionedJid && m.mentionedJid[0])
    ? m.mentionedJid[0]
    : (m.fromMe ? conn.user.jid : m.sender);
  let name = conn.getName(who);

  await m.reply("⚙️ *Invocando una cuenta V2Ray...*");

  let o;
  try {
    o = await exec('/usr/local/bin/v2rays');
  } catch (e) {
    o = e;
  }

  let { stdout } = o;

  let textoGrupo = `✅ *𝗜𝗻𝘃𝗼𝗰𝗮𝗰𝗶𝗼́𝗻 𝗘𝘅𝗶𝘁𝗼𝘀𝗮*

➤ 𝗨𝗻 𝗻𝘂𝗲𝘃𝗼 𝘂𝘀𝘂𝗮𝗿𝗶𝗼 𝗵𝗮 𝘀𝗶𝗱𝗼 𝗴𝗲𝗻𝗲𝗿𝗮𝗱𝗼 𝗲𝘅𝗶𝘁𝗼𝘀𝗮𝗺𝗲𝗻𝘁𝗲.  
➤ 𝗟𝗼𝘀 𝗱𝗲𝘁𝗮𝗹𝗹𝗲𝘀 𝗵𝗮𝗻 𝘀𝗶𝗱𝗼 𝗲𝗻𝘃𝗶𝗮𝗱𝗼𝘀 𝗱𝗲 𝗳𝗼𝗿𝗺𝗮 𝗽𝗿𝗶𝘃𝗮𝗱𝗮.

➤ *𝗥𝗲𝗰𝘂𝗲𝗿𝗱𝗮:* Puedes apoyar este proyecto usando el comando: *.donar*`;

  let imageBufferFinal = fs.readFileSync('src/Usuario-demo2.png');
  await conn.sendFile(
    m.chat,
    imageBufferFinal,
    'Usuario-demo2.png',
    textoGrupo,
    m
  );

  await conn.sendMessage(
    `${who}@s.whatsapp.net`,
    { text: stdout },
    { quoted: m }
  );
};

handler.help = ['v2user', 'v2ray'];
handler.tags = ['netfree'];
handler.command = /^(v2user|v2ray)$/i;
handler.group = true;
export default handler;

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
      days = Math.floor(duration / (1000 * 60 * 60 * 24));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
