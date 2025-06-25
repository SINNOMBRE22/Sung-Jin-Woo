import PDFDocument from 'pdfkit'

// Plugin para generar PDF limpio, sin encabezados extra y ajuste automático de texto
// Uso: .pdf <texto>

const CONFIG = {
  pdf: {
    margins: 50,
    font: 'Helvetica',
    fontSize: 12,
    lineGap: 4,
    maxWidth: 500 // ancho máximo de texto antes de ajuste
  }
}

async function createPDF(content) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: CONFIG.pdf.margins })
    const buffers = []
    doc.on('data', buffers.push.bind(buffers))
    doc.on('end', () => resolve(Buffer.concat(buffers)))
    doc.on('error', reject)

    doc.font(CONFIG.pdf.font).fontSize(CONFIG.pdf.fontSize)

    // Ajuste automático y salto de línea
    const paragraphs = content.trim().split(/\\n{2,}/)
    for (let p of paragraphs) {
      doc.text(p, {
        width: CONFIG.pdf.maxWidth,
        align: 'justify',
        lineGap: CONFIG.pdf.lineGap
      }).moveDown()
    }

    doc.end()
  })
}

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('Uso: .pdf <texto para convertir>')
  try {
    const pdfBuffer = await createPDF(text)
    await conn.sendFile(m.chat, pdfBuffer, 'resultado.pdf', '✅ PDF generado correctamente.', m)
  } catch (e) {
    console.error('[PDF ERROR]', e)
    await m.reply('❌ Error al generar el PDF: ' + e.message)
  }
}

handler.command = /^(pdf)$/i
export default handler
