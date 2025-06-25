import fs from 'fs';
import path from 'path';
import ffmpegPath from 'ffmpeg-static';
import ffmpeg from 'fluent-ffmpeg';

ffmpeg.setFfmpegPath(ffmpegPath);

const handler = async (m, { conn }) => {
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';

  if (!/audio|video/.test(mime)) throw '🚨 Responde a un audio o video para convertirlo en nota de voz.';

  const media = await q.download?.();
  if (!media) throw '🚨 No pude descargar el archivo.';

  const tmpDir = path.join(process.cwd(), 'tmp');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

  const inputPath = path.join(tmpDir, `in-${Date.now()}.${mime.split('/')[1] || 'mp4'}`);
  const outputPath = path.join(tmpDir, `out-${Date.now()}.mp3`); // Cambiado a MP3

  await fs.promises.writeFile(inputPath, media);

  try {
    await new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .noVideo()
        .audioChannels(1)
        .audioFrequency(16000) // Frecuencia específica para WhatsApp
        .audioBitrate('32k')
        .outputOptions([
          '-codec:a libmp3lame', // Usar MP3 como códec
          '-ar 16000', // Tasa de muestreo
          '-ac 1', // Canales mono
          '-vn' // Sin video
        ])
        .on('error', reject)
        .on('end', resolve)
        .save(outputPath);
    });

    const pttBuffer = await fs.promises.readFile(outputPath);
    
    await conn.sendMessage(m.chat, {
      audio: pttBuffer,
      mimetype: 'audio/mpeg', // MIME type para MP3
      ptt: true,
      waveform: [100, 0, 100, 0, 100, 0, 100] // Formato de onda requerido
    }, { quoted: m });

  } catch (error) {
    console.error('Error:', error);
    throw '🚨 Error al procesar el audio. Asegúrate de que el archivo no esté corrupto.';
  } finally {
    [inputPath, outputPath].forEach(async p => {
      try { await fs.promises.unlink(p) } catch {}
    });
  }
};

handler.help = ['toptt'];
handler.tags = ['tools'];
handler.command = /^to(ptt|vn)$/i;

export default handler;
