import fs from 'fs';
import path from 'path';

const saludos = [
  'buenos días', 'buenas tardes', 'buenas noches',
  'buen día', 'buen dia', 'feliz día', 'feliz dia',
  'hola buen día', 'hola buenos días', 'buenas'
];

// Ruta donde almacenamos el estado (chatId → "YYYY-MM-DD")
const STATE_FILE = path.resolve('./saludoState.json');

// Cargamos (o inicializamos) el estado
let saludoState = {};
try {
  saludoState = JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
} catch (e) {
  saludoState = {};
}

const handler = async (m, { conn }) => {
  if (!m.text || m.isBaileys || m.fromMe) return;

  // Normalizamos texto
  const texto = m.text.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zñ ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // ¿Es un saludo?
  const coincide = saludos.some(frase => {
    const f = frase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return texto.includes(f);
  });
  if (!coincide) return;

  const chatId = m.chat;
  // Fecha de hoy en formato ISO corto
  const hoy = new Date().toISOString().slice(0, 10);

  // Si ya respondimos hoy en este chat, no hacemos nada
  if (saludoState[chatId] === hoy) return;

  // Si no, enviamos el audio y actualizamos el estado
  try {
    const audioPath = path.resolve('./media/buenosdias2.mp3');
    if (!fs.existsSync(audioPath)) throw new Error('El archivo de audio no existe');
    const audioBuffer = fs.readFileSync(audioPath);

    await conn.sendMessage(chatId, {
      audio: audioBuffer,
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: m });

    // Marcamos que respondimos hoy en este chat
    saludoState[chatId] = hoy;
    fs.writeFileSync(STATE_FILE, JSON.stringify(saludoState, null, 2), 'utf-8');

  } catch (e) {
    console.error('Error al enviar el audio o actualizar estado:', e);
  }
};

handler.before = handler;
export default handler;
