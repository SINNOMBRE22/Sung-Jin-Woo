import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const additionalText = 'descarga';

  if (command === 'descargar_audio') {
    if (!text) throw `Por favor, ingresa el nombre del video o enlace de YouTube para descargar el audio.`;
    try {
      const apisearch = await axios.get(`https://api-rin-tohsaka.vercel.app/search/ytsearch?text=${encodeURIComponent(text)}`);
      
      // Verifica si hay resultados y si el primer resultado tiene los datos esperados
      const responsev1 = apisearch.data.data && apisearch.data.data[0];
      if (!responsev1 || !responsev1.title) {
        throw 'No se encontraron resultados válidos para esa búsqueda.';
      }

      const body = `**Título**: ${responsev1.title}\n**Subido**: ${responsev1.uploaded}\n**Duración**: ${responsev1.duration}\n**Vistas**: ${responsev1.views}\n**Autor**: ${responsev1.author.name}\n**URL**: ${responsev1.url}\n\n> **Tipo**: ${responsev1.type}, **Formato**: ${additionalText}`.trim();
      conn.sendMessage(m.chat, { image: { url: responsev1.thumbnail }, caption: body }, { quoted: m });

      const apidownload = await axios.get(`https://api-rin-tohsaka.vercel.app/download/ytmp3?url=${responsev1.url}`);
      const responsev2 = await apidownload.data.data.download;

      await conn.sendMessage(m.chat, { audio: { url: responsev2 }, mimetype: 'audio/mpeg' }, { quoted: m });
    } catch (e) {
      conn.reply(m.chat, `OCURRIÓ UN FALLO AL PROCESAR TU SOLICITUD: ${e}`, m);
    }
  }

  if (command === 'descargar_video') {
    if (!text) throw `Por favor, ingresa el nombre del video o enlace de YouTube para descargar el video.`;
    try {
      const apisearch = await axios.get(`https://api-rin-tohsaka.vercel.app/search/ytsearch?text=${encodeURIComponent(text)}`);
      
      const responsev1 = apisearch.data.data && apisearch.data.data[0];
      if (!responsev1 || !responsev1.title) {
        throw 'No se encontraron resultados válidos para esa búsqueda.';
      }

      const body = `**Título**: ${responsev1.title}\n**Subido**: ${responsev1.uploaded}\n**Duración**: ${responsev1.duration}\n**Vistas**: ${responsev1.views}\n**Autor**: ${responsev1.author.name}\n**URL**: ${responsev1.url}\n\n> **Tipo**: ${responsev1.type}, **Formato**: ${additionalText}`.trim();
      conn.sendMessage(m.chat, { image: { url: responsev1.thumbnail }, caption: body }, { quoted: m });

      const apidownload = await axios.get(`https://api-rin-tohsaka.vercel.app/download/ytmp4?url=${responsev1.url}`);
      const responsev2 = await apidownload.data.data.download;

      await conn.sendMessage(m.chat, { video: { url: responsev2 }, mimetype: 'video/mp4' }, { quoted: m });
    } catch (e) {
      conn.reply(m.chat, `OCURRIÓ UN FALLO AL PROCESAR TU SOLICITUD: ${e}`, m);
    }
  }

  if (command === 'descargar_audio_doc') {
    if (!text) throw `Por favor, ingresa el nombre del video o enlace de YouTube para descargar el audio.`;
    try {
      const apisearch = await axios.get(`https://api-rin-tohsaka.vercel.app/search/ytsearch?text=${encodeURIComponent(text)}`);
      
      const responsev1 = apisearch.data.data && apisearch.data.data[0];
      if (!responsev1 || !responsev1.title) {
        throw 'No se encontraron resultados válidos para esa búsqueda.';
      }

      const body = `**Título**: ${responsev1.title}\n**Subido**: ${responsev1.uploaded}\n**Duración**: ${responsev1.duration}\n**Vistas**: ${responsev1.views}\n**Autor**: ${responsev1.author.name}\n**URL**: ${responsev1.url}\n\n> **Tipo**: ${responsev1.type}, **Formato**: ${additionalText}`.trim();
      conn.sendMessage(m.chat, { image: { url: responsev1.thumbnail }, caption: body }, { quoted: m });

      const apidownload = await axios.get(`https://api-rin-tohsaka.vercel.app/download/ytmp3?url=${responsev1.url}`);
      const responsev2 = await apidownload.data.data.download;

      await conn.sendMessage(m.chat, { document: { url: responsev2 }, mimetype: 'audio/mpeg', fileName: `${responsev1.title}.mp3` }, { quoted: m });
    } catch (e) {
      conn.reply(m.chat, `OCURRIÓ UN FALLO AL PROCESAR TU SOLICITUD: ${e}`, m);
    }
  }

  if (command === 'descargar_video_doc') {
    if (!text) throw `Por favor, ingresa el nombre del video o enlace de YouTube para descargar el video.`;
    try {
      const apisearch = await axios.get(`https://api-rin-tohsaka.vercel.app/search/ytsearch?text=${encodeURIComponent(text)}`);
      
      const responsev1 = apisearch.data.data && apisearch.data.data[0];
      if (!responsev1 || !responsev1.title) {
        throw 'No se encontraron resultados válidos para esa búsqueda.';
      }

      const body = `**Título**: ${responsev1.title}\n**Subido**: ${responsev1.uploaded}\n**Duración**: ${responsev1.duration}\n**Vistas**: ${responsev1.views}\n**Autor**: ${responsev1.author.name}\n**URL**: ${responsev1.url}\n\n> **Tipo**: ${responsev1.type}, **Formato**: ${additionalText}`.trim();
      conn.sendMessage(m.chat, { image: { url: responsev1.thumbnail }, caption: body }, { quoted: m });

      const apidownload = await axios.get(`https://api-rin-tohsaka.vercel.app/download/ytmp4?url=${responsev1.url}`);
      const responsev2 = await apidownload.data.data.download;

      await conn.sendMessage(m.chat, { document: { url: responsev2 }, mimetype: 'video/mp4', fileName: `${responsev1.title}.mp4` }, { quoted: m });
    } catch (e) {
      conn.reply(m.chat, `OCURRIÓ UN FALLO AL PROCESAR TU SOLICITUD: ${e}`, m);
    }
  }
};

handler.help = ['descargar_audio', 'descargar_video', 'descargar_audio_doc', 'descargar_video_doc'];
handler.tags = ['descargas'];
handler.command = /^(descargar_audio|descargar_video|descargar_audio_doc|descargar_video_doc)$/i;

export default handler;
