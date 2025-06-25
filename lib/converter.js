import { promises } from 'fs';
import { join, dirname } from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));

function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
  return new Promise(async (resolve, reject) => {
    try {
      const tmpDir = join(__dirname, '../tmp');
      await promises.mkdir(tmpDir, { recursive: true });

      const id = crypto.randomUUID();
      const tmp = join(tmpDir, id + '.' + ext);
      const out = tmp + '.' + ext2;

      await promises.writeFile(tmp, buffer);

      const process = spawn('ffmpeg', ['-y', '-i', tmp, ...args, out]);

      process.on('error', reject);
      process.on('close', async (code) => {
        try {
          await promises.unlink(tmp);
          if (code !== 0) return reject(new Error(`ffmpeg exited with code ${code}`));
          resolve({
            data: await promises.readFile(out),
            filename: out,
            delete() {
              return promises.unlink(out);
            },
          });
        } catch (e) {
          reject(e);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

function toPTT(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-ac', '1',          // Mono audio (importante para WhatsApp)
    '-ar', '48000',      // Sample rate de 48 kHz (compatible con WhatsApp)
    '-c:a', 'libopus',   // Codec opus
    '-b:a', '64k',       // Bitrate
    '-vbr', 'on',         // Variable bitrate (opcional)
    '-compression_level', '10', // Compresión adicional
    '-f', 'opus'         // Fuerza el formato .opus (para WhatsApp)
  ], ext, 'ogg'); // Genera un archivo .ogg empaquetado con Opus
}

function toAudio(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-c:a', 'libopus',
    '-b:a', '128k',
    '-vbr', 'on',
    '-compression_level', '10',
  ], ext, 'opus');
}

function toVideo(buffer, ext) {
  return ffmpeg(buffer, [
    '-c:v', 'libx264',
    '-c:a', 'aac',
    '-ab', '128k',
    '-ar', '44100',
    '-crf', '32',
    '-preset', 'slow',
  ], ext, 'mp4');
}

export {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
};
