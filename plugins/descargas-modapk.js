import { search, download } from 'aptoide-scraper';

const handler = async (m, { conn, text }) => {
  if (!text) throw 'Por favor, escribe el nombre de la aplicación que deseas buscar.';

  try {
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);

    let response = `📱 Nombre: ${data5.name}\n📦 Paquete: ${data5.package}\n🕐 Última actualización: ${data5.lastup}\n📂 Tamaño: ${data5.size}`;
    await conn.sendMessage(m.chat, { image: { url: data5.icon }, caption: response }, { quoted: m });

    if (data5.size.includes('GB') || parseFloat(data5.size.replace(' MB', '')) > 999) {
      return await conn.sendMessage(m.chat, { text: 'El archivo es demasiado grande para enviar.' }, { quoted: m });
    }

    await conn.sendMessage(m.chat, {
      document: { url: data5.dllink },
      mimetype: 'application/vnd.android.package-archive',
      fileName: data5.name + '.apk',
    }, { quoted: m });

  } catch {
    throw 'No se pudo encontrar o descargar la aplicación.';
  }
};

handler.help = ['apk (nombre)'];
handler.tags = ['downloader'];
handler.command = /^apk$/i;
export default handler;
