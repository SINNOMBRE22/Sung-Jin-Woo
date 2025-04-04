import cp from 'child_process';
import { promisify } from 'util';
import fs from 'fs';

let exec = promisify(cp.exec).bind(cp);

let handler = async (m, command) => {
    global.db.data.users[m.sender].comandos += 1;

    let time = global.db.data.users[m.sender].lastusuario + 30;
    if (new Date() - global.db.data.users[m.sender].lastusuario < 30) {
        throw `*⏱️¡Hey! Espera ${msToTime(time - new Date())} para volver a crear un usuario*`;
    }

    global.db.data.users[m.sender].comandos += 1;

    let who = m.mentionedJid && m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.fromMe
        ? conn.user.jid
        : m.sender;

    let name = conn.getName(who);

    // Mensaje inicial sin imagen
    await m.reply("💻 𝙎𝙚 𝙘𝙧𝙚𝙖𝙧𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙍𝙖𝙣𝙙𝙤𝙢, 𝙚𝙨𝙥𝙚𝙧𝙖...");

    global.db.data.users[m.sender].lastusuario = new Date() * 1;

    let o;
    try {
        o = await exec('userbot');
        console.log(o);
    } catch (e) {
        o = e;
    } finally {
        let { stdout, stderr } = o;

        // Enviar imagen en el grupo con mensaje final
        let textoFinal = `✅ 𝑪𝑼𝑬𝑵𝑻𝑨 𝑮𝑬𝑵𝑬𝑹𝑨𝑫𝑨
𝑫𝒂𝒕𝒐𝒔 𝒆𝒏𝒗𝒊𝒂𝒅𝒐 𝒆𝒏 𝒑𝒓𝒊𝒗𝒂𝒅𝒐

𝑵𝒐 𝒐𝒍𝒗𝒊𝒅𝒆𝒔 𝒒𝒖𝒆 𝒑𝒖𝒆𝒅𝒆𝒔 𝒉𝒂𝒄𝒆𝒓 𝒕𝒖 𝒅𝒐𝒏𝒂𝒄𝒊𝒐𝒏, 𝒄𝒐𝒏 𝒍𝒂 𝒄𝒖𝒂𝒍 𝒎𝒂𝒏𝒕𝒆𝒏𝒆𝒎𝒐𝒔 𝒆𝒍 𝒃𝒐𝒕 𝒚 𝒔𝒆𝒓𝒗𝒊𝒅𝒐𝒓𝒆𝒔 𝒂𝒄𝒕𝒊𝒗𝒐𝒔. 𝑷𝒂𝒓𝒂 𝒎𝒂́𝒔 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐́𝒏 /𝒅𝒐𝒏𝒂𝒓`;

        let imageBufferFinal = fs.readFileSync('src/Usuario-demo2.png');
        await conn.sendFile(
            m.chat,
            imageBufferFinal,
            'Usuario-demo2.png',
            textoFinal,
            m
        );

        // Enviar imagen privada con datos generados
        let teks = `${stdout}`;
        let imageBufferPrivate = fs.readFileSync('src/usuarios-demo.png');
        await conn.sendFile(
            who + '@s.whatsapp.net',
            imageBufferPrivate,
            'Usuario-demo.png',
            m.quoted ? teks + m.quoted.text : teks,
            null
        );
    }
};

handler.help = ['user'];
handler.tags = ['netfree'];
handler.command = /^(usuario|user)$/i;
handler.group = true;
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
