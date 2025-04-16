let handler = async (m, { conn, args, participants }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
	  
    return {...value, jid: key}
  });

  let sortedRobos = users.map(toNumber('robo')).sort(sort('robo'));
  let usersRobos = sortedRobos.map(enumGetKey);

  let len = args[0] && args[0].length > 0 ? Math.min(10, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedRobos.length);

  let text = `
*< TABLA DE CLASIFICACION - TOP RATEROS 🐭 />*
    
▢ *TOP ${len} ROBOS* •
Tú : *${usersRobos.indexOf(m.sender) + 1}* de *${usersRobos.length}*

${sortedRobos.slice(0, len).map(({ jid, robo }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${robo} Robos*`).join('\n')}
`.trim();

  m.reply(text, null, { mentions: conn.parseMention(text) });

};

handler.help = ['toprobos'];
handler.tags = ['xp']
handler.command = ['rateros'];

handler.fail = null;
handler.exp = 0;

export default handler;

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]};
  }
  else return a => a === undefined ? _default : a;
}

function enumGetKey(a) {
  return a.jid;
}
