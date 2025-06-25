import { createHash } from 'crypto';

const handler = async function (m, { conn, text, usedPrefix, command }) {
  const datas = global;
  const user = global.db.data.users[m.sender];

  // Definir los mensajes propios directamente en el código
  const mensajes = {
    texto1: "*[❗INFO❗] Por favor, registrese antes de solicitar el número de serie.*",
    texto2: "*[❗INFO❗] Su número de serie es:* "
  };

  // Verificar si el usuario está registrado
  if (!user.registered) {
    // Si no está registrado, muestra el mensaje propio de no registrado
    throw `${mensajes.texto1}`;
  }

  // Recuperar el número de serie del usuario (md5 generado desde m.sender)
  const sn = createHash('md5').update(m.sender).digest('hex');
  
  // Mensaje de respuesta con el número de serie utilizando mensajes propios
  const caption = `${mensajes.texto2} ${sn}`;

  // Enviar el mensaje con el número de serie
  await conn.sendMessage(m.chat, { text: caption });

  // Aquí podrías incluir recompensas si lo deseas
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};

handler.help = ['myns'];  // Comando que activa la función
handler.tags = ['main'];
handler.command = /^(myns)$/i;  // El comando #myns

export default handler;
