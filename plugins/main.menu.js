import { xpRange } from '../lib/levelling.js'
import axios from 'axios'

const nsfwCategories = ['adultos', 'videos']
const invisible = '\u200B'.repeat(1500)

const handler = async (m, { conn }) => {
  try {
    console.time('menu_total')

    // Datos del usuario y sistema
    console.time('menu_datos')
    const name = await conn.getName(m.sender)
    const totalreg = Object.keys(global.db.data.users || {}).length
    const muptime = formatUptime(process.uptime())
    const { level = 0 } = global.db.data.users[m.sender] || {}

    // Inicializar chatData si no existe
    if (!global.db.data.chats[m.chat]) {
      global.db.data.chats[m.chat] = { modohorny: false }
    }

    const chatData = global.db.data.chats[m.chat]

    // Asegurar que modohorny esté definido
    if (typeof chatData.modohorny !== 'boolean') {
      chatData.modohorny = false
    }

    const isNSFW = chatData.modohorny === true
    console.timeEnd('menu_datos')

    // Categorías del menú
    const tags = {
      'main': '🜲 ACERCA DE',
      'info': '📜 INFO',
      'game': '🎮 JUEGOS',
      'downloader': '📥 DESCARGAS',
      'econ': '💰 ECONOMIA',
      'sticker': '🖼 STICKER',
      'audio': '🎧 AUDIO',
      'search': '🔍 BUSQUEDA',
      'convertidores': '🔄 CONVERTIDORES',
      'group': '👥 GRUPO',
      'tools': '🛠 TOOLS',
      'fun': '🎉 FUN',
      'database': '🗄 DATABASE',
      'xp': '⚔️ NIVEL',
      'owner': '👑 OWNER',
      'netfree': '🌐 TOOLS NETFREE',
    }

    if (isNSFW) {
      tags.adultos = '🔞 ADULTOS'
      tags.videos = '🔞 VIDEOS +18'
    }

    // Agrupar comandos por categoría
    console.time('menu_plugins')
    const availableCommands = Object.values(global.plugins)
      .filter(p => {
        if (p.disabled || !p.help || !p.tags) return false
        if (!isNSFW && p.tags.some(tag => nsfwCategories.includes(tag))) return false
        return true
      })
      .reduce((acc, plugin) => {
        try {
          const helps = Array.isArray(plugin.help) ? plugin.help : [plugin.help]
          const tagsArr = Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags]
          tagsArr.forEach(tag => {
            if (!acc[tag]) acc[tag] = []
            acc[tag].push(...helps.filter(Boolean))
          })
        } catch (err) {
          console.error('Error procesando plugin:', err)
        }
        return acc
      }, {})
    console.timeEnd('menu_plugins')

    // Construir el menú
    let menuText = `
╭━━━━━━༺༻━━━━━━╮
${toBold('Nivel:')} ▹ ${level} ◃
${toBold('Rango:')} ▹ ${totalreg} ◃
${toBold('Activo:')} ▹ ${muptime} ◃
╰━━━━━━༺༻━━━━━━╯
╭━━━━━━༺༻━━━━━━╮
「 *EL ARQUITECTO* 」
» https://wa.me/5215629885039
╰━━━━━━༺༻━━━━━━╯
        *🜲 COMANDOS DISPONIBLES 🜲*\n${invisible}`

    for (const [tag, label] of Object.entries(tags)) {
      const cmds = availableCommands[tag] || []
      if (cmds.length === 0) continue

      menuText += `\n┌───『 ${label} 』\n`
      menuText += cmds.map(cmd => `│ ➤ .${cmd}`).join('\n')
      menuText += `\n└────────────✦\n`
    }

    menuText += `\n*« El débil no tiene derecho a elegir cómo morirá »*`

    // Descargar imagen
    console.time('menu_imagen')
    const thumb = await axios.get('https://i.postimg.cc/zD6LSDZr/IMG-20250509-WA0013.jpg', {
      responseType: 'arraybuffer',
      timeout: 5000
    })
    console.timeEnd('menu_imagen')

    // Enviar mensaje con imagen y botón enriquecido
    await conn.sendMessage(m.chat, {
      text: menuText.trim(),
      contextInfo: {
        externalAdReply: {
          title: 'ㅤㅤㅤ🜲 SYSTEM OF SHADOWS 🜲',
          body: `ㅤㅤㅤㅤㅤUsuario: ${toBoldUnicode(name)}`,
          thumbnail: thumb.data,
          mediaType: 1,
          renderLargerThumbnail: true,
        }
      }
    }, { quoted: m })

    console.timeEnd('menu_total')

  } catch (e) {
    console.error('Error en el menú:', e)
    conn.reply(m.chat, '❎ Error crítico al generar el menú', m)
  }
}

// Funciones auxiliares
const toBold = text => `*${text}*`

const toBoldUnicode = text => text.split('').map(c =>
  ({
    A: '𝗔', a: '𝗮', B: '𝗕', b: '𝗯', C: '𝗖', c: '𝗰',
    D: '𝗗', d: '𝗱', E: '𝗘', e: '𝗲', F: '𝗙', f: '𝗳',
    G: '𝗚', g: '𝗴', H: '𝗛', h: '𝗵', I: '𝗜', i: '𝗶',
    J: '𝗝', j: '𝗷', K: '𝗞', k: '𝗸', L: '𝗟', l: '𝗹',
    M: '𝗠', m: '𝗺', N: '𝗡', n: '𝗻', O: '𝗢', o: '𝗼',
    P: '𝗣', p: '𝗽', Q: '𝗤', q: '𝗾', R: '𝗥', r: '𝗿',
    S: '𝗦', s: '𝘀', T: '𝗧', t: '𝘁', U: '𝗨', u: '𝘂',
    V: '𝗩', v: '𝘃', W: '𝗪', w: '𝘄', X: '𝗫', x: '𝘅',
    Y: '𝗬', y: '𝘆', Z: '𝗭', z: '𝘇',
    0: '𝟬', 1: '𝟭', 2: '𝟮', 3: '𝟯', 4: '𝟰',
    5: '𝟱', 6: '𝟲', 7: '𝟳', 8: '𝟴', 9: '𝟵'
  }[c] || c)).join('')

const formatUptime = seconds => {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  return `${h}h ${m}m ${s}s`
}

// Configuración del comando
handler.help = ['menu']
handler.command = /^menu|menú|arise|despertar$/i
handler.register = false

export default handler
