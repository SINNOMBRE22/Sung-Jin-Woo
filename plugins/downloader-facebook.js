import { igdl } from 'ruhend-scraper';

// Creado por SinNombre - 5629885039

async function showProgress(conn, m, msg, totalSteps = 9) {
    const clockAnimation = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙'];
    const progress = [
        "▰▱▱▱▱▱▱▱▱ 10%",
        "▰▰▱▱▱▱▱▱▱ 20%",
        "▰▰▰▱▱▱▱▱▱ 30%",
        "▰▰▰▰▱▱▱▱▱ 40%",
        "▰▰▰▰▰▱▱▱▱ 50%",
        "▰▰▰▰▰▰▱▱▱ 60%",
        "▰▰▰▰▰▰▰▱▱ 70%",
        "▰▰▰▰▰▰▰▰▱ 80%",
        "▰▰▰▰▰▰▰▰▰ 90%",
        "▰▰▰▰▰▰▰▰▰▰ 100%"
    ];

    for (let i = 0; i <= totalSteps; i++) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const frame = `${clockAnimation[i % clockAnimation.length]} ${progress[i]}`;

        await conn.sendMessage(m.chat, {
            text:
`╭── Progreso de descarga ──╮
➫ ${frame}`,
            edit: msg.key,
            mentions: conn.parseMention(m.sender)
        });
    }
}

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
    try {
        if (!args[0]) {
            await conn.sendMessage(m.chat, {
                text:
`╭────────────────
├◉ *Error:* Debes proporcionar un enlace de Facebook.
╰────────────────`,
                mentions: conn.parseMention(m.sender)
            }, { quoted: m });
            return;
        }

        if (!/https?:\/\/(www\.)?(facebook|fb)\.com\/.*/i.test(args[0])) {
            await conn.sendMessage(m.chat, {
                text:
`╭────────────────
├◉ *Enlace inválido:* Solo se aceptan enlaces de Facebook.
╰────────────────`,
                mentions: conn.parseMention(m.sender)
            }, { quoted: m });
            return;
        }

        await m.react('⏳');
        const startTime = Date.now();

        const msg = await conn.sendMessage(m.chat, {
            text:
`╭── Progreso de descarga ──╮
➫ ▱▱▱▱▱▱▱▱▱ 0%`,
            mentions: conn.parseMention(m.sender)
        }, { quoted: m });

        const res = await igdl(args[0]);
        if (!res?.data?.length) throw new Error('No se encontró contenido');

        const resolutions = ['720p (HD)', '480p (SD)', '360p (SD)', 'HD', 'SD'];
        const data = resolutions.map(r => res.data.find(i => i.resolution.includes(r))).find(Boolean);

        if (!data?.url) throw new Error('No se encontró versión descargable');

        await showProgress(conn, m, msg);

        await conn.sendMessage(m.chat, { delete: msg.key });

        await conn.sendMessage(m.chat, {
            video: { url: data.url },
            caption:
`╭────────────────
├◉ *¡Extracción completada!*
├◉ *Resolución:* ${data.resolution}
├◉ *Tamaño:* ${data.size}
├◉ *Tiempo:* ${((Date.now() - startTime) / 1000).toFixed(1)}s
╰────────────────`,
            fileName: 'facebook_video.mp4',
            mentions: conn.parseMention(m.sender)
        });

        await m.react('✅');

    } catch (error) {
        console.error('Error:', error);
        await conn.sendMessage(m.chat, {
            text:
`╭────────────────
├◉ *Error:* ${error.message || 'Ocurrió un error inesperado'}
╰────────────────`,
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
