import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let tags = {
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

const more = String.fromCharCode(8206)
const readMore = more.repeat(5000)

const defaultMenu = {
  before: `
╔══════✦❘༻༺❘✦══════╗
ㅤ *🜲SYSTEM OF SHADOWS🜲*

*🜲 Usuario:* ▹ *%name* ◃
*⛩ Nivel:* ▹ %level ◃
*🎭 Rango:* ▹ %totalreg ◃
*⏳ Tiempo activo:* ▹ %muptime ◃

╚══════✦❘༻༺❘✦══════╝
「 *CONTACTO DEL MONARCA* 」
» @SinNombre: https://wa.me/5215629885039

◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
        *🜲 CATEGORÍAS DISPONIBLES 🜲*
${readMore}
`.trimStart(),
  header: '┌───『 ➢ %category  』',
  body: '│ ➢ .%command',
  footer: '└──────────✦\n',
  after: `
◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
*« El débil no tiene derecho a elegir cómo morirá »*
`.trim(),
}

let handler = async (m, { conn, __dirname }) => {
  try {
    let name = await conn.getName(m.sender)
    let totalreg = Object.keys(global.db.data.users).length
    let muptime = formatUptime(process.uptime())
    let { level } = global.db.data.users[m.sender]

    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => ({
      help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
    }))

    // Limpia espacios extra antes de procesar el comando
    let args = m.text.trim().replace(/^\s+|\s+$/g, '').split(/\s+/)
    let category = args[1] ? args[1].toLowerCase() : null

    if (!category) {
      let categoriesList = Object.keys(tags).map(tag => `┌───『  ${tags[tag].toUpperCase()}  』\n│ ➢ .menu ${tag}\n└───⮞───────✦`).join('\n')

      let text = [
        defaultMenu.before.replace('%name', name)
                          .replace('%level', level)
                          .replace('%totalreg', totalreg)
                          .replace('%muptime', muptime),
        categoriesList,
        defaultMenu.after
      ].join('\n')

      // 🔹 CORRECCIÓN: Se envía el GIF correctamente en WhatsApp
      return conn.sendMessage(m.chat, { 
        video: { url: './src/MenuJin-wo.gif' }, 
        gifPlayback: true, 
        caption: text.trim() 
      }, { quoted: m })
    }

    if (tags[category]) {
      let commandsList = help.filter(plugin => plugin.tags.includes(category)).map(plugin => plugin.help.map(cmd => `│ ➢ .${cmd}`).join('\n')).join('\n')

      let text = [
        defaultMenu.header.replace('%category', tags[category].toUpperCase()),
        commandsList,
        defaultMenu.footer
      ].join('\n')

      return conn.sendFile(m.chat, './src/comandos.png', 'comandos.png', text.trim(), m)
    }

  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}

// Función para formatear el uptime del bot
function formatUptime(seconds) {
  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds % 3600) / 60)
  let secs = Math.floor(seconds % 60)
  return `${hours}h ${minutes}m ${secs}s`
}

// Comandos aceptados (permite espacios antes del comando)
handler.help = ['arise']
handler.command = /^menu|menú|arise|despertar/i
handler.register = false
handler.rowner = false

export default handler
