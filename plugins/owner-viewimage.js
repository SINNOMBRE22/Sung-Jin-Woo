import fs from 'fs';
import fetch from 'node-fetch'; // Opcional: si usas fetch en otras partes, pero no es necesario para este thumbnail

let handler = async (m, { text }) => {
  try {
    const datas = global;
    const idioma = datas.db?.data?.users[m.sender]?.language || 'default';
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`, 'utf-8'));
    const tradutor = _translate.plugins.owner_viewimage;

    if (!text) throw tradutor.texto1;

    let ext = text.split('.').pop();
    let path = `./${text}`;

    if (!fs.existsSync(path)) throw tradutor.texto2;

    // Lee el archivo de imagen como buffer
    let media = fs.readFileSync(path);
    let mimeType = `image/${ext}`;

    // En lugar de usar fetch para crear un thumbnail a partir de un data URI,
    // utilizamos directamente el buffer de la imagen.
    let thumbnailBuffer = media;

    m.reply(media, null, { thumbnail: thumbnailBuffer });
  } catch (error) {
    console.error(error);
    m.reply("Ocurrió un error al procesar la imagen.");
  }
};

handler.help = ['viewimage <nombre>'];
handler.tags = ['owner'];
handler.command = /^(viewimage|vi)$/i;
handler.owner = true;

export default handler;
