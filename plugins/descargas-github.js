import fetch from 'node-fetch';

const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;

let handler = async (m, { args, usedPrefix, command, conn }) => {
    console.log('Ejecutando gitclone con argumentos:', args);

    if (!args[0]) {
        return m.reply(`Uso incorrecto. Prueba: *${usedPrefix + command} <URL del repositorio>*`);
    }

    if (!regex.test(args[0])) {
        return m.reply('⚠️ Enlace inválido. Asegúrate de proporcionar una URL de GitHub válida.');
    }

    try {
        let [_, user, repo] = args[0].match(regex) || [];
        repo = repo.replace(/.git$/, '');
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`;

        let response = await fetch(url, { method: 'HEAD' });
        if (!response.ok) {
            throw new Error('El repositorio no existe o no se pudo acceder.');
        }

        let contentDisposition = response.headers.get('content-disposition');
        let filename = contentDisposition ? contentDisposition.match(/attachment; filename=(.*)/)[1] : `${repo}.zip`;

        await m.reply('📥 Descargando repositorio, espera un momento...');
        await conn.sendFile(m.chat, url, filename, 'Aquí está tu archivo.', m);

    } catch (e) {
        console.error(`Error en ${command}:`, e);
        return m.reply('❌ Ocurrió un error al intentar descargar el repositorio.');
    }
};

handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = /^(gitclone|clonarepo|clonarrepo|repoclonar)$/i;

export default handler;
