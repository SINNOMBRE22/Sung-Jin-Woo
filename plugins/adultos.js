// plugins/nsfw.js
import axios from 'axios'
import fetch from 'node-fetch'

/**
 * Plugin independiente que muestra imágenes NSFW sin dependencias de idioma.
 */
const handler = async (m, { command, conn }) => {
  // Sólo en grupos con modo NSFW activado
  if (!db.data.chats[m.chat].modohorny && m.isGroup) 
    throw '❌ El modo NSFW está desactivado en este chat. Usa *#enable nsfw* para activarlo.'

  let res, url, arr

  switch (command) {
    case 'nsfwloli':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwloli.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'nsfwfoot':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfoot.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'nsfwass':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwass.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'nsfwbdsm':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwbdsm.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'nsfwcum':
      url = `${global.MyApiRestBaseUrl}/api/nsfw/nsfwcum&apikey=${global.MyApiRestApikey}`
      break

    case 'nsfwero':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwero.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'nsfwfemdom':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfemdom.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'nsfwglass':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwglass.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'nsfworgy':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfworgy.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'hentai':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/hentai.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'tetas':
      // Usa API externa, si falla recurre al JSON
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json')).data
      try {
        res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/boobs?apikey=fg-dylux`)
        url = res.data || arr[Math.floor(Math.random() * arr.length)]
      } catch {
        url = arr[Math.floor(Math.random() * arr.length)]
      }
      break

    case 'booty':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json')).data
      try {
        res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/ass?apikey=fg-dylux`)
        url = res.data || arr[Math.floor(Math.random() * arr.length)]
      } catch {
        url = arr[Math.floor(Math.random() * arr.length)]
      }
      break

    case 'ecchi':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/ecchi.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'furro':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/furro.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'trapito':
      res = await fetch('https://api.waifu.pics/nsfw/trap')
      url = (await res.json()).url
      break

    case 'imagenlesbians':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json')).data
      try {
        res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=fg-dylux`)
        url = res.data || arr[Math.floor(Math.random() * arr.length)]
      } catch {
        url = arr[Math.floor(Math.random() * arr.length)]
      }
      break

    case 'panties':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'pene':
      url = `${global.MyApiRestBaseUrl}/api/adult/pene?apikey=${global.MyApiRestApikey}`
      break

    case 'porno':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'randomxxx':
      {
        const sources = [
          'tetas', 'booty', 'imagenlesbians', 'panties', 'porno'
        ]
        const choice = sources[Math.floor(Math.random() * sources.length)]
        return handler(m, { command: choice, conn })
      }

    case 'pechos':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pechos.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'yaoi':
      res = await fetch('https://nekobot.xyz/api/image?type=yaoi')
      url = (await res.json()).message
      break

    case 'yaoi2':
      res = await fetch('https://purrbot.site/api/img/nsfw/yaoi/gif')
      url = (await res.json()).link
      break

    case 'yuri':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json')).data
      url = arr[Math.floor(Math.random() * arr.length)]
      break

    case 'yuri2':
      arr = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json')).data
      res = await fetch('https://purrbot.site/api/img/nsfw/yuri/gif')
      url = (await res.json()).link || arr[Math.floor(Math.random() * arr.length)]
      break

    default:
      return
  }

  // Envía la imagen
  conn.sendMessage(
    m.chat,
    { image: { url }, caption: `_${command}_` },
    { quoted: m }
  )
}

handler.help = [
  'nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom',
  'nsfwglass', 'nsfworgy', 'hentai', 'tetas', 'booty', 'ecchi', 'furro', 'trapito',
  'imagenlesbians', 'panties', 'pene', 'porno', 'randomxxx', 'pechos', 'yaoi', 'yaoi2',
  'yuri', 'yuri2'
]
handler.tags = ['adultos']
handler.command = [
  'nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom',
  'nsfwglass', 'nsfworgy', 'hentai', 'tetas', 'booty', 'ecchi', 'furro', 'trapito',
  'imagenlesbians', 'panties', 'pene', 'porno', 'randomxxx', 'pechos', 'yaoi', 'yaoi2',
  'yuri', 'yuri2'
]
export default handler
