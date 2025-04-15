const handler = async (m, { conn }) => {
    const variablesToReset = [
        'wait',
		'herolastclaim',
        'lastclaim',
        'lastcoins',
        'lastcofre',
        'lasthourly',
        'lasthunt',
        'lastadventure',
        'lastmining',
        'lastberburu',
        'lastpotionclaim',
        'lastFishing',
        'lastmiming',
        'lastrob',
        'lastdiamantes',
        'lastRouletteTime',
		'lastusuario',
		'lastusuariov2',
        'lastwork'
    ];

    let who;
    if (m.isGroup) {
        who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    } else {
        who = m.chat;
    }

    if (!who) {
        throw `*[❗] Etiqueta a alguien para resetear los tiempos.*`;
    }

    if (!(who in global.db.data.users)) {
        throw `*[❗] El usuario no se encuentra en mi base de datos.*`;
    }

    for (const variable of variablesToReset) {
        global.db.data.users[who][variable] = 0;
    }

    m.reply(`*‣ Se han reseteado los tiempos de @${who.split`@`[0]}*`, null, { mentions: [who] });
}
handler.help = ['resettiempos'];
handler.tags = ['economy'];
handler.command = /^(resettiempos|timereset)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
