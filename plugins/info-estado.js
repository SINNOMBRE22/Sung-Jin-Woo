import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";

const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const used = process.memoryUsage();
  const old = performance.now();
  const neww = performance.now();
  const rtime = (neww - old).toFixed(7);
  const wm = 'Sung Jin-Woo';
  const info = `
Tiempo de respuesta: ${rtime}
Tiempo activo: ${uptime}
Prefijo usado: ${usedPrefix}`;

  // Enviar solo el ping
  conn.reply(m.chat, info, m);
};
handler.help = ['status']
handler.command = /^(ping|info|status|estado|infobot)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
