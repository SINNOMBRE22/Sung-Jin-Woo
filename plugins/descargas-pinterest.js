import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text || !/^https?:\/\//i.test(text.trim())) {
    throw `⚠️ [Error] Proporciona un enlace válido.\nEjemplo: ${usedPrefix + command} https://pin.it/ejemplo`;
  }

  try {
    const finalUrl = await resolvePinterestLink(text.trim());
    if (!finalUrl.includes('pinterest.com')) throw `❗ Enlace no válido de Pinterest.`;

    // Usar GET en lugar de HEAD para mejores resultados
    const { data } = await axios.get(finalUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Referer': 'https://www.pinterest.com/',
        'Cookie': 'sessioninfo=...' // Agrega cookies si es necesario
      }
    });

    const mediaUrl = extractMediaUrl(data);
    if (!mediaUrl) throw '❗ No se encontró contenido multimedia.';

    // Determinar tipo de contenido correctamente
    const isVideo = /\.(mp4|mov|webm)/i.test(mediaUrl);
    
    // Enviar como vista previa multimedia
    await conn.sendFile(
      m.chat,
      mediaUrl,
      '',
      `✅ Pinterest - ${isVideo ? 'Video' : 'Imagen'}`,
      m,
      false,
      { asDocument: false }
    );

  } catch (e) {
    console.error('Error:', e);
    conn.reply(m.chat, '❗ Error al procesar. Asegúrate de usar un enlace directo a un pin.', m);
  }
};

const resolvePinterestLink = async (url) => {
  try {
    const { request } = await axios.get(url, { maxRedirects: 5 });
    return request.res.responseUrl || url;
  } catch {
    return url;
  }
};

const extractMediaUrl = (html) => {
  const $ = cheerio.load(html);
  
  // Nueva forma de obtener URLs en Pinterest
  const videoSrc = $('video source').attr('src');
  if (videoSrc) return videoSrc;

  // Buscar en scripts dinámicos
  const scriptData = $('script[type="application/json"]').html();
  if (scriptData) {
    try {
      const jsonData = JSON.parse(scriptData);
      const resourceUrl = jsonData?.props?.initialReduxState?.resources?.data?.[Object.keys(jsonData.props.initialReduxState.resources.data)[0]]?.images?.orig?.url;
      if (resourceUrl) return resourceUrl;
    } catch (e) {
      console.error('Error parsing JSON:', e);
    }
  }

  // Último recurso: meta tags
  return $('meta[property="og:video:secure_url"]').attr('content') 
      || $('meta[property="og:image"]').attr('content');
};

handler.help = ['pint'].map(v => v + ' [enlace pinterest]');
handler.tags = ['downloader'];
handler.command = /^(pint(erest)?|pin)$/i;
handler.limit = true;

export default handler;
