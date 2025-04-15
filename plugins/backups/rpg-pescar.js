// rpg-pescar.js

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  ms %= 3600000;
  const m = Math.floor(ms / 60000);
  ms %= 60000;
  const s = Math.floor(ms / 1000);
  return `${h} horas ${m} minutos ${s} segundos`;
}

const handler = async (m, { conn }) => {
	global.db.data.users[m.sender].comandos += 1;
    const user = global.db.data.users[m.sender];
    const ikan = Math.floor(Math.random() * 5);
    const lele = Math.floor(Math.random() * 5);
    const nila = Math.floor(Math.random() * 5);
    const bawal = Math.floor(Math.random() * 5);
    const buntal = Math.floor(Math.random() * 5);
    const udang = Math.floor(Math.random() * 5);
    const paus = Math.floor(Math.random() * 5);
    const kepiting = Math.floor(Math.random() * 5);

    const pezPlateadoProbabilidad = 0.01;
    const pezDoradoProbabilidad = 0.01;
    const tiburonProbabilidad = 0.5; // Aumento de la probabilidad de tiburón al 50%

    let carnadaUser = user.umpan || 100;
    let canaDePescar = user.pancing || 0;
    let worm = user.worm || 0;

    const maxCarnada = 100;
    const gastoCarnada = Math.floor(Math.random() * 101);

    const maxCanaDePescar = 6;

    if (carnadaUser < gastoCarnada) {
      if (worm <= 0) {
        return conn.reply(m.chat, `No tienes suficiente carnada. Puedes comprar más usando */carnada*`, m);
      }
      worm = Math.max(0, worm - 10);
      carnadaUser = maxCarnada;
    } else {
      carnadaUser = Math.max(0, carnadaUser - gastoCarnada);
    }

    const expGain = Math.floor(Math.random() * 1901) + 1000;

    const fishesCaught = 1 + canaDePescar;

    global.db.data.users[m.sender].ikan += (ikan * fishesCaught * 0.5); // Reducción de ganancias al 50%
    global.db.data.users[m.sender].lele += (lele * fishesCaught * 0.5);
    global.db.data.users[m.sender].nila += (nila * fishesCaught * 0.5);
    global.db.data.users[m.sender].bawal += (bawal * fishesCaught * 0.5);
    global.db.data.users[m.sender].buntal += (buntal * fishesCaught * 0.5);
    global.db.data.users[m.sender].udang += (udang * fishesCaught * 0.5);
    global.db.data.users[m.sender].paus += (paus * fishesCaught * 0.5);
    global.db.data.users[m.sender].kepiting += (kepiting * fishesCaught * 0.5);
    global.db.data.users[m.sender].umpan = carnadaUser;
    global.db.data.users[m.sender].pancing = canaDePescar;
    global.db.data.users[m.sender].exp = (user.exp || 0) + expGain;
    global.db.data.users[m.sender].worm = worm;

    const time = user.lastFishing + 3600000;
    if (new Date - user.lastFishing < 3600000) {
      return conn.reply(m.chat, `Por favor espera un momento antes de pescar de nuevo.\n\n⫹⫺ Tiempo restante: ${clockString(time - new Date())}`, m);
    }

    let specialFishResult = '';
    if (pezPlateadoProbabilidad <= Math.random()) {
      specialFishResult = '🌊🐠🌊 Que suerte!!! Pez Plateado : Silver Fish » 1 ';
    } else if (pezDoradoProbabilidad <= Math.random()) {
      specialFishResult = '🌊🐠🌊 Que suerte!!! Un Pez Dorado : Golden Fish » 1 ';
    } else if (tiburonProbabilidad <= Math.random()) {
      specialFishResult = '🌊🦈🌊 Ya valiste!!! Te salió un Tiburón : Shark » -8000 Exp';
    }

    const fishResults = `
*🎣 Resultados de la pesca de ${conn.getName(m.sender)} 🎣*

${specialFishResult}
🌊🐟🌊 Pez : Fish » ${ikan} x${fishesCaught}
🌊🐟🌊 Super Pez : Fish Super » ${lele} x${fishesCaught}
🌊🦭🌊 Foca : Sea Lion » ${nila} x${fishesCaught}
🌊🐡🌊 Pez Globo : Blowfish » ${bawal} x${fishesCaught}
🌊🐡🌊 Super Pez Globo : Blowfish Super » ${buntal} x${fishesCaught}
🌊🦐🌊 Camarón : Shrimp » ${udang} x${fishesCaught}
🌊🐳🌊 Ballena : Whale » ${paus} x${fishesCaught}
🌊🦀🌊 Cangrejo : Crab » ${kepiting} x${fishesCaught}

Carnada restante: ${carnadaUser}%
Nivel de caña de pescar: ${canaDePescar}/${maxCanaDePescar}
Experiencia ganada: ${expGain} Exp`.trim();

    setTimeout(() => {
      conn.reply(m.chat, fishResults, m);
    }, 2000);

    setTimeout(() => {
      conn.reply(m.chat, `@${m.sender.split('@s.whatsapp.net')[0]} *${['Prepárate para recoger los peces!', 'Equipo de pesca listo! 🎣', 'Hora de pescar 🌊', '¡Pez en el anzuelo!'].getRandom()}*`, null, { mentions: [m.sender] });
    }, 1500);

    setTimeout(() => {
      conn.reply(m.chat, `@${m.sender.split('@s.whatsapp.net')[0]} *${['Lanzando la línea...', 'Colocando el cebo...', 'Buscando el lugar perfecto para pescar...', 'Preparando el equipo de pesca...'].getRandom()}*`, m, m.mentionedJid ? { mentions: [m.sender] } : {});
    }, 0);

    user.lastFishing = new Date() * 1;

};

handler.help = ['fish'];
handler.tags = ['econ'];
handler.command = /^(fish|fishing|pescar)$/i;
handler.group = true;
export default handler;
