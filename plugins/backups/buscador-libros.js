import cheerio from 'cheerio'

let handler = async (m, { text, conn }) => {
  if (!text) return m.reply('Por favor, ingresa el título o tema del libro a buscar.')

  let query = text
  let searchUrl = `https://www.gutenberg.org/ebooks/search/?query=${encodeURIComponent(query)}`

  try {
    // Buscar el libro en Project Gutenberg
    let res = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    })

    if (!res.ok) {
      return m.reply(`Error en la búsqueda: ${res.statusText}`)
    }

    let html = await res.text()
    let $ = cheerio.load(html)
    let results = []

    $('li.booklink').each((i, el) => {
      let title = $(el).find('span.title').text().trim()
      let author = $(el).find('span.subtitle').text().trim()
      let link = 'https://www.gutenberg.org' + $(el).find('a').attr('href')
      results.push({ title, author, link })
    })

    if (results.length === 0) {
      return m.reply('No se encontraron libros para esa búsqueda.')
    }

    // Seleccionar el primer resultado encontrado
    let book = results[0]
    m.reply(`Encontrado: ${book.title}${book.author ? ' - ' + book.author : ''}\nDescargando...`)

    // Obtener la página del libro
    let bookRes = await fetch(book.link, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    })
    if (!bookRes.ok) {
      return m.reply(`Error al obtener la página del libro: ${bookRes.statusText}`)
    }
    let bookHtml = await bookRes.text()
    let $$ = cheerio.load(bookHtml)

    // Intentar encontrar un enlace a la versión en texto plano
    let downloadLink = $$('a[type="text/plain"]').attr('href')
    if (!downloadLink) {
      downloadLink = $$('a[href$=".txt"]').attr('href')
    }

    if (!downloadLink) {
      return m.reply('No se encontró una versión en texto plano para descargar.')
    }

    // Asegurar que el enlace sea absoluto
    if (downloadLink.startsWith('/')) {
      downloadLink = 'https://www.gutenberg.org' + downloadLink
    }

    // Descargar el archivo de texto
    let fileRes = await fetch(downloadLink, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    })
    if (!fileRes.ok) {
      return m.reply(`Error al descargar el libro: ${fileRes.statusText}`)
    }

    let buffer = await fileRes.arrayBuffer()
    let fileBuffer = Buffer.from(buffer)

    // Enviar el archivo al chat (se asume que conn.sendFile existe)
    await conn.sendFile(m.chat, fileBuffer, `${book.title}.txt`, `Aquí tienes el libro: ${book.title}`, m)
  } catch (e) {
    console.error(e)
    m.reply('Ocurrió un error al buscar o descargar el libro. Intenta nuevamente.')
  }
}

handler.help = ['libro <título>']
handler.tags = ['buscador']
handler.command = /^libro$/i

export default handler
