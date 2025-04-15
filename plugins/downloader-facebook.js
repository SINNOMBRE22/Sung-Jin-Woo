import { igdl } from 'ruhend-scraper';

// Creado por SinNombre - 5629885039

async function showProgress(conn, m, msg, totalSteps = 9) {
    const clockAnimation = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙'];
    const progress = [
        "▰▱▱▱▱▱▱▱▱ 𝟏𝟎%",
        "▰▰▱▱▱▱▱▱▱ 𝟐𝟬%",
        "▰▰▰▱▱▱▱▱▱ 𝟑𝟬%",
        "▰▰▰▰▱▱▱▱▱ 𝟒𝟬%",
        "▰▰▰▰▰▱▱▱▱ 𝟓𝟬%",
        "▰▰▰▰▰▰▱▱▱ 𝟔𝟬%",
        "▰▰▰▰▰▰▰▱▱ 𝟕𝟬%",
        "▰▰▰▰▰▰▰▰▱ 𝟖𝟬%",
        "▰▰▰▰▰▰▰▰▰ 𝟗𝟬%",
        "▰▰▰▰▰▰▰▰▰ 𝟏𝟬𝟬%"
    ];

    for (let i = 0; i <= totalSteps; i++) {  
        await new Promise(resolve => setTimeout(resolve, 1500));  
        const frame = `\n${clockAnimation[i % clockAnimation.length]} ${progress[i]}`;  

        await conn.sendMessage(m.chat, {  
            text: `╔══════✦❘༻༺❘✦══════╗\n📥 *𝗣𝗿𝗼𝗴𝗿𝗲𝘀𝗼 𝗱𝗲 𝗲𝘅𝘁𝗿𝗮𝗰𝗰𝗶𝗼́𝗻...*\n${frame}\n╚══════✦❘༻༺❘✦══════╝`,  
            edit: msg.key,  
            mentions: conn.parseMention(m.sender)  
        });  
    }
}

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
    try {
        if (!args[0]) {
            await conn.sendMessage(m.chat, {
                text: `╔══════✦❘༻༺❘✦══════╗\n🚫 *𝙀𝙧𝙧𝙤𝙧:* ¡𝙊𝙡𝙫𝙞𝙙𝙖𝙨𝙩𝙚 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚!\n╚══════✦❘༻༺❘✦══════╝`,
                mentions: conn.parseMention(m.sender)
            }, { quoted: m });
            return;
        }

        if (!/https?:\/\/(www\.)?(facebook|fb)\.com\/.*/i.test(args[0])) {  
            await conn.sendMessage(m.chat, {  
                text: `╔══════✦❘༻༺❘✦══════╗\n🔗 *𝙀𝙣𝙡𝙖𝙘𝙚 𝙞𝙣𝙫𝙖́𝙡𝙞𝙙𝙤:* ¡𝙎𝙤𝙡𝙤 𝙨𝙚 𝙖𝙘𝙚𝙥𝙩𝙖𝙣 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠!\n╚══════✦❘༻༺❘✦══════╝`,  
                mentions: conn.parseMention(m.sender)  
            }, { quoted: m });  
            return;  
        }  

        await m.react('⏳');  
        const startTime = Date.now();  

        const msg = await conn.sendMessage(m.chat, {  
            text: `╔══════✦❘༻༺❘✦══════╗\n🖤 *𝗜𝗻𝗶𝗰𝗶𝗮𝗻𝗱𝗼 𝗲𝘅𝘁𝗿𝗮𝗰𝗰𝗶𝗼́𝗻...*\n▱▱▱▱▱▱▱▱▱ 𝟎%\n╚══════✦❘༻༺❘✦══════╝`,
            mentions: conn.parseMention(m.sender)  
        }, { quoted: m });  

        const res = await igdl(args[0]);  
        if (!res?.data?.length) throw new Error('No se encontró contenido');  

        const resolutions = ['720p (HD)', '480p (SD)', '360p (SD)', 'HD', 'SD'];  
        const data = resolutions.map(r => res.data.find(i => i.resolution.includes(r))).find(Boolean);  

        if (!data?.url) throw new Error('No se encontró versión descargable');  

        await showProgress(conn, m, msg);  

        // 🔥 **Se elimina el mensaje de progreso antes de enviar el video**
        await conn.sendMessage(m.chat, { delete: msg.key });

        // 📩 **Se envía el video con el cuadro final**
        await conn.sendMessage(m.chat, {  
            video: { url: data.url },  
            caption: `╔══════✦❘༻༺❘✦══════╗\n☠️ *¡𝗘𝘅𝘁𝗿𝗮𝗰𝗰𝗶𝗼́𝗻 𝗰𝗼𝗺𝗽𝗹𝗲𝘁𝗮𝗱𝗮!*\n✅ *𝘝𝘪́𝘥𝘦𝘰 𝘦𝘹𝘵𝘳𝘢𝘪́𝘥𝘰 𝘤𝘰𝘯 𝘦́𝘹𝘪𝘵𝘰*\n⏱️ *𝘛𝘪𝘦𝘮𝘱𝘰:* ${((Date.now() - startTime)/1000).toFixed(1)}𝘴\n📹 *𝘙𝘦𝘴𝘰𝘭𝘶𝘤𝘪𝘰́𝘯:* ${data.resolution} | 🔽 *𝘛𝘢𝘮𝘢𝘯̃𝘰:* ${data.size}\n╚══════✦❘༻༺❘✦══════╝`,  
            fileName: 'facebook_video.mp4',  
            mentions: conn.parseMention(m.sender)  
        });  

        await m.react('✅');  

    } catch (error) {  
        console.error('Error:', error);  
        await conn.sendMessage(m.chat, {  
            text: `╔══════✦❘༻༺❘✦══════╗\n❌ *Error:* ${error.message || 'Ocurrió un error inesperado'}\n╚══════✦❘༻༺❘✦══════╝`,  
            mentions: conn.parseMention(m.sender)  
        }, { quoted: m });  
        await m.react('❌');  
    }
};

handler.help = ['fb'];
handler.tags = ['downloader'];
handler.command = /^(fb|facebook)$/i;
handler.group = true;

export default handler;
