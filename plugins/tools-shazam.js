import axios from 'axios'
import FormData from 'form-data'

let handler = async (m, { conn, usedPrefix, command }) => {
  m.react('🎙️')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  if (/video|audio/.test(mime)) {
    let buffer = await q.download()
    conn.reply(m.chat, global.wait, m)
    
    // Preparar la solicitud a la API de AudD
    let formData = new FormData()
    formData.append('api_token', 'ee77dc63a716a76e5226f5b676a811d6')
    formData.append('file', buffer, { filename: 'audio.mp3' })
    
    let response = await axios.post('https://api.audd.io/', formData, {
      headers: formData.getHeaders()
    })
    if (response.data.status !== 'success') throw response.data.error
    let result = response.data.result || {}
    let title = result.title || 'Desconocido'
    let artist = result.artist || 'Desconocido'
    let album = result.album || 'Desconocido'
    let release_date = result.release_date || 'Desconocido'
    
    let txt = `━━━━ ✦ ❘༻༺❘ ✦ ━━━━\n`
    txt += `\t\t\t*∙ 🔍 Análisis de Audio 🔍 ∙*\n\n`
    txt += `*• Título:* ${title}\n`
    txt += `*• Artista:* ${artist}\n`
    txt += `*• Álbum:* ${album}\n`
    txt += `*• Fecha de lanzamiento:* ${release_date}\n`
    txt += `━━━━ ✦ ❘༻༺❘ ✦ ━━━━`
    
    conn.reply(m.chat, txt, m)
  } else {
    throw `🏷️ Etiqueta un audio o video corto con el comando *${usedPrefix + command}* para analizarlo.`
  }
}

handler.help = ['analizar']
handler.tags = ['tools']
handler.command = /^(analizar)$/i
handler.group = true
handler.diamond = true
export default handler
