import fs from 'fs'
import path from 'path'
import simpleGit from 'simple-git'
import crypto from 'crypto'

const git = simpleGit()

let handler = async (m, { conn }) => {
  const repoUrl = 'https://github.com/usuario/repositorio.git' // <- Reemplaza por tu repo
  const tmpFolder = './.tmp_update'
  const excludedPaths = ['config.json', 'settings.json', 'proyectos/', 'plugins/custom/']

  const hashFile = file => {
    try {
      const content = fs.readFileSync(file)
      return crypto.createHash('sha1').update(content).digest('hex')
    } catch {
      return null
    }
  }

  const copyRecursive = (src, dest) => {
    const changedFiles = []
    const totalFiles = []

    const walk = (srcDir, destDir) => {
      fs.readdirSync(srcDir).forEach(file => {
        const srcFile = path.join(srcDir, file)
        const destFile = path.join(destDir, file)
        const relative = destFile.replace('./', '')

        const shouldSkip = excludedPaths.some(ex => relative.startsWith(ex))
        if (shouldSkip) return

        if (fs.statSync(srcFile).isDirectory()) {
          if (!fs.existsSync(destFile)) fs.mkdirSync(destFile)
          walk(srcFile, destFile)
        } else {
          totalFiles.push(relative)

          const srcHash = hashFile(srcFile)
          const destHash = hashFile(destFile)

          if (srcHash !== destHash) {
            fs.copyFileSync(srcFile, destFile)
            changedFiles.push(relative)
          }
        }
      })
    }

    walk(src, dest)
    return { changedFiles, totalFiles }
  }

  const sleep = ms => new Promise(res => setTimeout(res, ms))
  const progressBar = percent => {
    const blocks = Math.round(percent / 10)
    return '➫ ' + '▰'.repeat(blocks).padEnd(10, '▱') + ` ${percent}%`
  }

  let msg = await conn.reply(m.chat,
`╭── *Actualización disponible* ♾️
├◉ *Versión actual:* 1.2.0
├◉ *Nueva versión:* 1.3.0
╰────────────────`, m)

  try {
    await git.clone(repoUrl, tmpFolder)

    const { changedFiles, totalFiles } = copyRecursive(tmpFolder, './')

    for (let i = 1; i <= 10; i++) {
      await sleep(300)
      await conn.sendMessage(m.chat, {
        edit: msg.key,
        text:
`╭── *Actualizando...* ♾️
├◉ *Versión actual:* 1.2.0
├◉ *Nueva versión:* 1.3.0
╰────────────────
╭── Progreso de actualización ──╮
${progressBar(i * 10)}`
      })
    }

    fs.rmSync(tmpFolder, { recursive: true, force: true })

    await conn.sendMessage(m.chat, {
      edit: msg.key,
      text:
`╭── *Actualización completada* ✅
├◉ *Archivos actualizados:* ${changedFiles.length}
├◉ *Ignorados:* ${totalFiles.length - changedFiles.length}
╰────────────────`
    })
  } catch (err) {
    await conn.sendMessage(m.chat, {
      edit: msg.key,
      text: `⚠️ Error durante la actualización:\n${err.message}`
    })
  }
}

handler.help = ['actualizar']
handler.tags = ['owner']
handler.command = /^actualizar$/i
handler.register = false

export default handler
