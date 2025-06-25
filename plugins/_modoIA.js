/**
 * plugin_modoia_debug.js
 * Categoría: tools
 * Comando: modoia (hook before)
 * 
 * Plugin revisado con debugging detallado de errores de OpenAI.
 */
import fetch from 'node-fetch'

// ——— Configuración de la IA ———
const OPENAI_API_KEY = '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'
const OPENAI_URL     = 'https://api.openai.com/v1/chat/completions'
const MODEL_NAME     = 'gpt-3.5-turbo'

const handler = m => m

handler.before = async function (m, { conn }) {
  // Evita grupos, mensajes del bot y texto vacío
  if (m.isGroup || m.fromMe || !m.text?.trim()) return true

  // Carga configuración y comprueba modo IA
  global.db.data.settings = global.db.data.settings || {}
  const botSettings = global.db.data.settings[conn.user.jid] || {}
  if (!botSettings.modoia) return true

  // Informa debug en consola
  console.log('[modoia] Mensaje entrante:', m.chat, m.text)

  try {
    // Prompt de sistema
    const systemPrompt = `
Tu nombre es Sung-Jin-Woo. Eres un asistente inteligente creado por el usuario conocido como SinNombre.

Responde en texto plano, sin símbolos complejos, sin LaTeX, sin \\ o ^. Para exponentes usa caracteres como ² o ³. Para fracciones usa "1/2", "3/4", etc.

Cuando te pregunten matemáticas, responde paso a paso, numerado así:

1. x² = 16
2. x = ±√16
3. x = ±4

Nunca digas que eres un modelo de lenguaje, un chatbot, ni menciones a ChatGPT, OpenAI ni a tu creador.`.trim()

    // Llamada a la API
    console.log('[modoia] Llamando a OpenAI...')
    const iaResponse = await callOpenAI([
      { role: 'system', content: systemPrompt },
      { role: 'user',   content: m.text.trim() }
    ])
    console.log('[modoia] Respuesta IA:', iaResponse)

    // Envía la respuesta
    await conn.sendMessage(m.chat, { text: iaResponse })
  } catch (err) {
    // Log completo de error
    console.error('[modoia] Error en IA ➟', err)
    // Intenta obtener detalle de error HTTP
    let detail = err.message
    try {
      const jsonError = JSON.parse(err.message.split(':').slice(-1)[0])
      detail = jsonError.error?.message || detail
    } catch {}
    // Envía al usuario el detalle (transparencia para debugging)
    await conn.sendMessage(m.chat, { text: `❌ Error IA: ${detail}` })
  }

  // Detén el flujo normal
  return false
}

async function callOpenAI(messages) {
  const res = await fetch(OPENAI_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type':  'application/json'
    },
    body: JSON.stringify({ model: MODEL_NAME, messages })
  })
  const text = await res.text()
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}: ${text}`)
  }
  let json
  try { json = JSON.parse(text) } catch {
    throw new Error(`JSON parse error: ${text}`)
  }
  return json.choices?.[0]?.message?.content.trim() || 'No pude responder.'
}

export default handler
