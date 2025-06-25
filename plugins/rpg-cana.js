// rpg-cana.js

const handler = async (m, { conn }) => {
  global.db.data.users[m.sender].comandos += 1;
  const user = global.db.data.users[m.sender];

  const maxCanaDePescar = 6;
  const baseCostPerLevel = 5000;

  if (user.pancing >= maxCanaDePescar) {
    return conn.reply(m.chat, `🎣 Ya tienes el nivel máximo de caña de pescar (${maxCanaDePescar}). \n\n¡No puedes comprar más!`, m);
  }

  const costPerLevel = baseCostPerLevel * (user.pancing + 1);

  if (user.exp < 0 || user.exp < costPerLevel) {
    return conn.reply(m.chat, `No tienes suficiente experiencia para comprar un nivel de caña de pescar. Necesitas ${costPerLevel} puntos de experiencia.`, m);
  }

  global.db.data.users[m.sender].pancing = (user.pancing || 0) + 1;
  global.db.data.users[m.sender].exp -= costPerLevel;

  conn.reply(m.chat, `🎣 Has comprado un nivel de caña de pescar. \n\nAhora tienes ${user.pancing + 1}/${maxCanaDePescar} niveles de caña de pescar. \n\nGastaste ${costPerLevel} puntos de experiencia.`, m);
};

handler.help = ['comprarcana'];
handler.tags = ['econ'];
handler.command = /^(cana|buyfishingrod|caña)$/i;
handler.group = true;
handler.admin = false;
handler.botAdmin = false;
handler.exp = 0;
handler.premium = false;
export default handler;
