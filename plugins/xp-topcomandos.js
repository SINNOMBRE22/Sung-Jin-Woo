let handler = async (m, { conn, args, participants }) => {
  global.db.data.users[m.sender].comandos += 1;
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return { ...value, jid: key };
  });

  let sortedComandos = users.map(toNumber('comandos')).sort(sort('comandos'));
  let usersComandos = sortedComandos.map(enumGetKey);

  let len = args[0] && args[0].length > 0 ? Math.min(10, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedComandos.length);

  let text = `
*< TOP USUARIOS CON MÁS COMANDOS USADOS💻 />*

▢ *TOP ${len} USUARIOS CON MÁS COMANDOS USADOS* •
Tú : *${usersComandos.indexOf(m.sender) + 1}* de *${usersComandos.length}*

${sortedComandos.slice(0, len).map(({ jid, comandos }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${comandos} Comandos*`).join('\n')}
`.trim();

  m.reply(text, null, { mentions: conn.parseMention(text) });
};

handler.help = ['topcomandos'];
handler.tags = ['xp'];
handler.command = ['topcomandos'];

handler.fail = null;
handler.exp = 0;

export default handler;

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) {
    return (a, i, b) => {
      return { ...b[i], [property]: a[property] === undefined ? _default : a[property] };
    };
  } else {
    return a => a === undefined ? _default : a;
  }
}

function enumGetKey(a) {
  return a.jid;
}
