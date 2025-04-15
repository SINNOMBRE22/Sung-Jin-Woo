// rpg-carnada.js

const handler = async (m, { conn }) => {
  global.db.data.users[m.sender].comandos += 1;
  const user = global.db.data.users[m.sender];

  const maxWorm = 100;
  const costPerWorm = 2500;
  const umpanLevel = user.umpan / 25; 

  if (user.umpan >= maxWorm) {
    return conn.reply(m.chat, `🪱 Ya tienes la cantidad máxima de carnada (${maxWorm}%). ¡No puedes comprar más!`, m);
  }

  const requiredExp = costPerWorm * (umpanLevel + 1); 
  if (user.exp < requiredExp || user.exp < 0) {
    return conn.reply(m.chat, `No tienes suficiente experiencia para comprar carnada. Necesitas ${requiredExp} puntos de experiencia para comprar ${25}% de carnada.`, m);
  }

  global.db.data.users[m.sender].umpan = Math.min(user.umpan + 25, maxWorm);
  global.db.data.users[m.sender].exp -= requiredExp; 

  conn.reply(m.chat, `🪱 Has comprado carnada. Ahora tienes ${user.umpan}% de carnada. \n\nGastaste ${requiredExp} puntos de experiencia.`, m);
};

handler.help = ['comprarcarnada'];
handler.tags = ['econ'];
handler.command = /^(buyworm|carnada)$/i;
handler.group = true;
handler.admin = false;
handler.botAdmin = false;
handler.exp = 0;
export default handler;
