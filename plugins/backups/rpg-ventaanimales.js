import fs from 'fs';
import path from 'path';

const handler = async (m, { conn }) => {
  global.db.data.users[m.sender].comandos += 1;

  const user = global.db.data.users[m.sender];

  const animalCount = {
    '🐂 Toro': 'banteng',
    '🐅 Tigre': 'harimau',
    '🐘 Elefante': 'gajah',
    '🐐 Cabra': 'kambing',
    '🐖 Panda': 'panda',
    '🐊 Cocodrilo': 'buaya',
    '🐃 Bufalo': 'kerbau',
    '🐮 Vaca': 'sapi',
    '🐒 Mono': 'monyet',
    '🐗 Jabali': 'babihutan',
    '🐖 Cerdo': 'babi',
    '🐓 Pollo': 'ayam',
  };

  let totalVendido = 0;

  for (const animal in animalCount) {
    const propertyName = animalCount[animal];
    const count = user[propertyName];
    if (count > 0) {
      const costoAleatorio = Math.floor(Math.random() * 1000) + 1;
      totalVendido += count * costoAleatorio;
      user.exp += count * costoAleatorio;
      user[propertyName] = 0;
    }
  }

  const message = totalVendido > 0
    ? `Has vendido todos tus animales por un total de ${totalVendido} de experiencia.`
    : 'No tienes animales para vender.';

  const granjaImagePath = './granja.jpg'; // Ruta de la imagen de la granja

  // Cargar la imagen en un Buffer
  const granjaImageBuffer = fs.readFileSync(path.resolve(granjaImagePath));

  conn.sendFile(m.chat, granjaImageBuffer, 'granja.jpg', message, m);
};

handler.help = ['venderanimales'];
handler.tags = ['econ'];
handler.command = /^venderanimales$/i;
handler.group = true;

export default handler;
