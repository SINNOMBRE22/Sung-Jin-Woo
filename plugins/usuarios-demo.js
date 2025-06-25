import cp from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import axios from 'axios';

let exec = promisify(cp.exec).bind(cp);

let handler = async (m, command) => {
  global.db.data.users[m.sender].comandos += 1;

  const ownerNumber = global.owner[0][0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  const isOwner = m.sender === ownerNumber;

  if (!isOwner) {
    let time = global.db.data.users[m.sender].lastusuario + 259200000;
    if (new Date() - global.db.data.users[m.sender].lastusuario < 259200000) {
      throw `*⏱️¡Hey! Espera ${msToTime(time - new Date())} para volver a crear un usuario*`;
    }
    global.db.data.users[m.sender].lastusuario = new Date() * 1;
  }

  let who = m.mentionedJid && m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.fromMe
    ? conn.user.jid
    : m.sender;

  let name = conn.getName(who);

  await m.reply("💻 𝙎𝙚 𝙘𝙧𝙚𝙖𝙧𝙖́ 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙧𝙖𝙣𝙙𝙤𝙢, 𝙚𝙨𝙥𝙚𝙧𝙖...");

  let o;
  try {
    o = await exec('userbot');
    console.log(o);
  } catch (e) {
    o = e;
  } finally {
    let { stdout } = o;

    let textoFinal = `𝑵𝒐 𝒐𝒍𝒗𝒊𝒅𝒆𝒔 𝒒𝒖𝒆 𝒑𝒖𝒆𝒅𝒆𝒔 𝒉𝒂𝒄𝒆𝒓 𝒕𝒖 𝒅𝒐𝒏𝒂𝒄𝒊𝒐𝒏, 𝒄𝒐𝒏 𝒍𝒂 𝒄𝒖𝒂𝒍 𝒎𝒂𝒏𝒕𝒆𝒏𝒆𝒎𝒐𝒔 𝒆𝒍 𝒃𝒐𝒕 𝒚 𝒔𝒆𝒓𝒗𝒊𝒅𝒐𝒓𝒆𝒔 𝒂𝒄𝒕𝒊𝒗𝒐𝒔. 𝑷𝒂𝒓𝒂 𝒎𝒂́𝒔 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐́𝒏 /𝒅𝒐𝒏𝒂𝒓`;

    // 🟢 Imagen local como miniatura para GRUPO
    const imageBufferGroup = fs.readFileSync('src/Usuario-demo2.png');

    await conn.sendMessage(m.chat, {
      text: textoFinal.trim(),
      contextInfo: {
        externalAdReply: {
          title: '✅ Cuenta generada',
          body: '🎉 Datos enviados en privado',
          thumbnail: imageBufferGroup,
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: false,
        }
      }
    }, { quoted: m });

    // 🟣 Imagen desde link como miniatura buffer para PRIVADO
    const imageURL = 'https://i.postimg.cc/k4qywZcP/IMG-20250608-WA0040.jpg';
    const imageBufferPrivate = await axios.get(imageURL, {
      responseType: 'arraybuffer',
      timeout: 5000
    });

    let teks = `${stdout}`;
    await conn.sendMessage(
      who + '@s.whatsapp.net',
      {
        text: m.quoted ? teks + m.quoted.text : teks,
        contextInfo: {
          externalAdReply: {
            title: '🔐 Datos Privados',
            body: 'Tu Cuenta Ha Sido Crada',
            thumbnail: imageBufferPrivate.data,
            mediaType: 1,
            renderLargerThumbnail: true,
            showAdAttribution: false,
          }
        }
      }
    );
  }
};

handler.help = ['user'];
handler.tags = ['netfree'];
handler.command = /^(usuario|user)$/i;
handler.group = true;
handler.rowner = true;

export default handler;

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
      days = Math.floor(duration / (1000 * 60 * 60 * 24));

  days = (days < 10) ? "0" + days : days;
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return days + " día(s) " + hours + " hora(s) " + minutes + " minuto(s)";
}
