let handler = async (m, { conn, isPrems }) => {
	global.db.data.users[m.sender].comandos += 1;
    let limit = global.db.data.users[m.sender];
    let diamondReward = Math.floor(Math.random() * 3) + 1; // Generar un número aleatorio entre 1 y 3
    let hasil = Math.floor(Math.random() * 30000) + diamondReward; // Sumar el número aleatorio a hasil
    let time = global.db.data.users[m.sender].lastmiming + 600000;

    if (new Date() - global.db.data.users[m.sender].lastmiming < 600000) throw `*[ ⏲️ ] 𝙴𝚜𝚙𝚎𝚛𝚊 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 𝚖𝚒𝚗𝚊𝚛*`;

    m.reply(`*[ 🎉 ] 𝙶𝚎𝚗𝚒𝚊𝚕, 𝚖𝚒𝚗𝚊𝚜𝚝𝚎 ${hasil} 𝚇𝙿 y ${diamondReward} 💎*`);
    global.db.data.users[m.sender].lastmiming = new Date() * 1;
}

handler.help = ['minar'];
handler.tags = ['econ']
handler.command = ['minar', 'miming', 'mine'];
handler.group = true;
handler.exp = 0;

export default handler;

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return minutes + " m y " + seconds + " s ";
}
