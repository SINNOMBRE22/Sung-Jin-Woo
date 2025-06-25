const handler = async (m, { conn }) => {
	global.db.data.users[m.sender].comandos += 1;
  const user = global.db.data.users[m.sender];

  const ikan = user.ikan || 0;
  const lele = user.lele || 0;
  const nila = user.nila || 0;
  const bawal = user.bawal || 0;
  const buntal = user.buntal || 0;
  const udang = user.udang || 0;
  const paus = user.paus || 0;
  const kepiting = user.kepiting || 0;
  let exp = user.exp || 0;
  let totalventa = user.totalventa || 0; // Agregar el campo totalventa

  const totalPeces = ikan + lele + nila + bawal + buntal + udang + paus + kepiting;
  const puntosExpPorPez = 200;
  const expGanada = totalPeces * puntosExpPorPez;

  if (totalPeces > 0) {
    totalventa += expGanada; // Suma la experiencia ganada al campo totalventa
    exp += expGanada;
    user.ikan = 0;
    user.lele = 0;
    user.nila = 0;
    user.bawal = 0;
    user.buntal = 0;
    user.udang = 0;
    user.paus = 0;
    user.kepiting = 0;
    user.exp = exp;
    user.totalventa = totalventa; // Actualiza el campo totalventa

    const img = './pescados.jpg';
    const text = `🤑Vendiste ${totalPeces} peces 🐟 y ganaste ${expGanada} puntos de experiencia.⭐ \n\nTu experiencia total ahora es: ${exp}`;

    await conn.sendFile(m.chat, img, 'peces.png', text, m);
	m.react('🎄')
  } else {
    await conn.reply(m.chat, '🥺 No tienes peces para vender. 🐠, recuerda usar el comando /pescar frecuentemente.', m);
  }
};

handler.help = ['venderpeces'];
handler.tags = ['econ'];
handler.command = /^(venderpeces|venderpescado)$/i;
handler.group = true;

export default handler;
