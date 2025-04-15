const handler = async (m, { conn, text, usedPrefix, command }) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;

  const textpremERROR = `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝙰𝙻𝙶𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝙰 𝙻𝙾𝚂 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*◉ ${usedPrefix + command} @${m.sender.split`@`[0]} 1d*\n*◉ ${usedPrefix + command} @${m.sender.split`@`[0]} 1w*`;
  if (!who) return m.reply(textpremERROR, null, { mentions: conn.parseMention(textpremERROR) });

  const user = global.db.data.users[who];
  const txt = text.replace('@' + who.split`@`[0], '').trim();

  const ERROR = `*[❗] 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 ${'@' + who.split`@`[0]} 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰 𝙴𝙽 𝙼𝙸 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂*`;
  if (!user) return m.reply(ERROR, null, { mentions: conn.parseMention(ERROR) });

  const now = Date.now();
  let duration = 0;
  const match = txt.match(/(\d+)([dhw])/);

  if (match) {
    const amount = parseInt(match[1]);
    const unit = match[2];

    if (unit === 'd') {
      duration = amount * 24 * 60 * 60 * 1000; // días a milisegundos
    } else if (unit === 'h') {
      duration = amount * 60 * 60 * 1000; // horas a milisegundos
    } else if (unit === 'w') {
      duration = amount * 7 * 24 * 60 * 60 * 1000; // semanas a milisegundos
    }
  } else {
    return m.reply(`*[❗] Formato de tiempo incorrecto. Usa d para días, h para horas, o w para semanas.*`, null, { mentions: conn.parseMention(`@${m.sender.split`@`[0]}`) });
  }

  if (command == 'addprem') {
    if (now < user.premiumTime) user.premiumTime += duration;
    else user.premiumTime = now + duration;
    user.premium = true;
    const timeLeft = (user.premiumTime - now) / 1000; // tiempo restante en segundos
    const textprem = `*🎟️ 𝙽𝚄𝙴𝚅𝙾 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼!!!*\n\n*✨ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: @${who.split`@`[0]}*\n*🕐 𝚃𝙸𝙴𝙼𝙿𝙾: ${txt}*\n*📉 𝚁𝙴𝚂𝚃𝙰𝙽𝚃𝙴: ${timeLeft} segundos*`;
    m.reply(textprem, null, { mentions: conn.parseMention(textprem) });
  }
};

handler.help = ['addprem [@user] <time>'];
handler.tags = ['owner'];
handler.command = ['addprem'];
handler.group = true;
handler.rowner = true;

export default handler;

async function formatTime(ms) {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  let timeString = '';
  if (days) {
    timeString += `${days} día${days > 1 ? 's' : ''} `;
  }
  if (hours) {
    timeString += `${hours} hora${hours > 1 ? 's' : ''} `;
  }
  if (minutes) {
    timeString += `${minutes} minuto${minutes > 1 ? 's' : ''} `;
  }
  if (seconds) {
    timeString += `${seconds} segundo${seconds > 1 ? 's' : ''} `;
  }
  return timeString.trim();
}
