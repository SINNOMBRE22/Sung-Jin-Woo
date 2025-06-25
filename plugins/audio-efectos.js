//creado por sinnombre +5215629885039
import { unlinkSync, existsSync, writeFileSync, readFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

// Corrige __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Asegura el directorio temporal
const tmpDir = join(__dirname, '../tmp/');
if (!existsSync(tmpDir)) {
  mkdirSync(tmpDir, { recursive: true });
}

let handler = async (m, { conn, usedPrefix, command }) => {
  try {
    await m.react('⏳');

    // Se Obtén el mensaje citado o el actual
    const q = m.quoted || m;
    const mime = (q.msg || q).mimetype || '';
    if (!mime.startsWith('audio/')) {
      await m.react('❌');
      return conn.reply(
        m.chat,
        `*🚩 Responde a un audio o nota de voz.*\n\nEjemplo: *${usedPrefix + command}*`,
        m
      );
    }

    // Aqui Se define el filtro de audio según el comando
    let filter = '';
    switch (command.toLowerCase()) {
      case 'bass':
        filter = '-af equalizer=f=94:width_type=o:width=2:g=30';
        break;
      case 'blown':
        filter = '-af acrusher=.1:1:64:0:log';
        break;
      case 'deep':
        filter = '-af atempo=4/4,asetrate=44500*2/3';
        break;
      case 'earrape':
        filter = '-af volume=12';
        break;
      case 'fast':
        filter = '-filter:a atempo=1.63,asetrate=44100';
        break;
      case 'fat':
        filter = '-filter:a atempo=1.6,asetrate=22100';
        break;
      case 'nightcore':
        filter = '-filter:a atempo=1.06,asetrate=44100*1.25';
        break;
      case 'reverse':
        filter = '-filter_complex areverse';
        break;
      case 'robot':
        filter = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
        break;
      case 'slow':
        filter = '-filter:a atempo=0.7,asetrate=44100';
        break;
      case 'tupai':
      case 'squirrel':
      case 'chipmunk':
        filter = '-filter:a atempo=0.5,asetrate=65100';
        break;
      default:
        await m.react('❌');
        return conn.reply(m.chat, '⚠️ Filtro no reconocido', m);
    }

    // Nombres de archivo usando un timestamp
    const timestamp = Date.now();
    const inputExt = mime.includes('ogg') ? 'ogg' : 'mp3';
    const inputPath = join(tmpDir, `${timestamp}_input.${inputExt}`);
    // Forzamos la salida a ogg (voice note)
    const outputPath = join(tmpDir, `${timestamp}_output.ogg`);

    // Descarga y guarda el audio recibido
    const buffer = await q.download();
    writeFileSync(inputPath, buffer);

    // Ejecuta FFmpeg para aplicar el filtro y convertir a ogg con libopus
    const ffmpegCmd = `ffmpeg -i "${inputPath}" ${filter} -c:a libopus -b:a 64k -vbr on -y "${outputPath}"`;
    await new Promise((resolve, reject) => {
      exec(ffmpegCmd, (err, stdout, stderr) => {
        // Elimina el archivo de entrada
        if (existsSync(inputPath)) unlinkSync(inputPath);
        if (err) {
          console.error('Error en FFmpeg:', stderr);
          m.react('❌').catch(() => {});
          return reject(new Error('Error al procesar el audio'));
        }
        resolve();
      });
    });

    // Verifica que se haya generado el archivo de salida
    if (!existsSync(outputPath)) {
      await m.react('❌');
      return conn.reply(m.chat, '*Error: No se generó el archivo de audio.*', m);
    }

    // Lee el archivo procesado y elimínalo
    const outputBuffer = readFileSync(outputPath);
    unlinkSync(outputPath);

    // Envía el audio usando el método sendMessage actualizado
    await conn.sendMessage(
      m.chat,
      { audio: outputBuffer, mimetype: 'audio/ogg; codecs=opus', ptt: true },
      { quoted: m }
    );
    await m.react('✅');
  } catch (error) {
    console.error(error);
    await m.react('❌');
    conn.reply(m.chat, `*Error crítico:*\n${error.message}`, m);
  }
};

handler.help = ['bass', 'blown', 'deep', 'earrape', 'fast', 'fat', 'nightcore', 'reverse', 'robot', 'slow', 'tupai'].map(v => v + ' <audio>');
handler.tags = ['audio'];
handler.command = /^(bass|blown|deep|earrape|fas?t|nightcore|reverse|robot|slow|tupai|squirrel|chipmunk)$/i;
export default handler;

