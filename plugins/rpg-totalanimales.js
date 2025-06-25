import fs from 'fs'
import path from 'path'

const handler = async (m, { conn }) => {
  global.db.data.users[m.sender].comandos += 1;

  const user = global.db.data.users[m.sender];

  const animalCount = {
    '🐂 Toro': user.banteng,
    '🐅 Tigre': user.harimau,
    '🐘 Elefante': user.gajah,
    '🐐 Cabra': user.kambing,
    '🐖 Panda': user.panda,
    '🐊 Cocodrilo': user.buaya,
    '🐃 Bufalo': user.kerbau,
    '🐮 Vaca': user.sapi,
    '🐒 Mono': user.monyet,
    '🐗 Jabali': user.babihutan,
    '🐖 Cerdo': user.babi,
    '🐓 Pollo': user.ayam,
  };

  let totalanimales = 0;

  let message = "Tienes los siguientes animales:\n\n";

  for (const animal in animalCount) {
    const count = animalCount[animal];
    if (count > 0) {
      message += `${animal}: ${count}\n`;
      totalanimales += count;
    }
  }

  message += `\nTotal de animales: ${totalanimales}`;

  const granjaImagePath = './granja.jpg'; // Ruta de la imagen de la granja

  // Cargar la imagen en un Buffer
  const granjaImageBuffer = fs.readFileSync(path.resolve(granjaImagePath));

  conn.sendFile(m.chat, granjaImageBuffer, 'granja.jpg', message, m);
};

handler.help = ['animales'];
handler.tags = ['econ'];
handler.command = /^(animales|granja|misanimales)$/i;
handler.group = true;

export default handler;
