import fs from 'fs'
import acrcloud from 'acrcloud'
import axios from 'axios'

let acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (/audio|video/.test(mime)) {
    if ((q.msg || q).seconds > 20) return m.reply('[❗𝐈𝐍𝐅𝐎❗]\n\nEl archivo es muy grande, recorta a 10-20 segundos.')

    let media = await q.download()
    let ext = mime.split('/')[1]
    let filename = `./tmp/${m.sender}.${ext}`
    fs.writeFileSync(filename, media)

    try {
      let res = await acr.identify(fs.readFileSync(filename))
      let { code, msg } = res.status
      if (code !== 0) throw msg

      let { title, artists, album, genres, release_date } = res.metadata.music[0]
      let txt = `
𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴 𝙻𝙰 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰 (ACRCloud)

• 📌 𝚃𝙸𝚃𝚄𝙻𝙾: ${title}
• 👨‍🎤 𝙰𝚁𝚃𝙸𝚂𝚃𝙰: ${artists?.map(v => v.name).join(', ') || 'No encontrado'}
• 💾 𝙰𝙻𝙱𝚄𝙼: ${album?.name || 'No encontrado'}
• 🌐 𝙶𝙴𝙽𝙴𝚁𝙾: ${genres?.map(v => v.name).join(', ') || 'No encontrado'}
• 📆 𝙵𝙴𝙲𝙷𝙰 𝙳𝙴 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾: ${release_date || 'No encontrado'}
`.trim()

      m.reply(txt)
    } catch (e) {
      // Fallback a Shazam si falla ACRCloud
      m.reply('[❗𝐈𝐍𝐅𝐎❗]\nNo se pudo identificar con ACRCloud, intentando con Shazam...')

      try {
        const audioBuffer = fs.readFileSync(filename)
        const base64Audio = audioBuffer.toString('base64')

        let shazamRes = await axios.post(
          'https://shazam.p.rapidapi.com/songs/detect',
          { audio: base64Audio },
          {
            headers: {
              'Content-Type': 'application/json',
              'X-RapidAPI-Key': '8de872d0emshb893427c1833d64p10138jsn93f00555f',
              'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
          }
        )

        let track = shazamRes.data.track
        if (!track) throw 'No se encontró resultado con Shazam.'

        let txt = `
𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝚂𝙷𝙰𝚉𝙰𝙼

• 📌 𝚃𝙸𝚃𝚄𝙻𝙾: ${track.title}
• 👨‍🎤 𝙰𝚁𝚃𝙸𝚂𝚃𝙰: ${track.subtitle || 'No encontrado'}
• 💿 𝙶𝙴𝙽𝙴𝚁𝙾: ${track.genres?.primary || 'No encontrado'}
• 🔗 𝙴𝙽𝙻𝙰𝙲𝙴: ${track.url || 'No disponible'}
`.trim()

        m.reply(txt)
      } catch (err) {
        console.error(err)
        m.reply('No se pudo identificar la canción con ACRCloud ni con Shazam.')
      }
    } finally {
      fs.unlinkSync(filename)
    }

  } else throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾*'
}
handler.command = /^quemusica|quemusicaes|whatmusic$/i
export default handler
