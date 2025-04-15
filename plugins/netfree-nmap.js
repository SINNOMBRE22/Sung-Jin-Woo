import cp from 'child_process';
import { promisify } from 'util';

const exec = promisify(cp.exec).bind(cp);

let handler = async (m, { text }) => {
    if (!text) return m.reply(`━━━━━━✦❘༻༺❘✦━━━━━━\n⚠️ *Debes ingresar una IP o dominio para escanear.*\n━━━━━━✦❘༻༺❘✦━━━━━━`);

    let msg = await m.reply(`━━━━━━✦❘༻༺❘✦━━━━━━\n🔍 *Escaneando...*\n━━━━━━✦❘༻༺❘✦━━━━━━`);

    try {
        let { stdout, stderr } = await exec(`nmap ${text}`);
        let resultado = stdout.trim() || `⚠️ *Error:* ${stderr.trim()}`;

        await conn.sendMessage(m.chat, { 
            edit: msg.key, 
            text: `━━━━━━✦❘༻༺❘✦━━━━━━\n📡 *Resultados del escaneo:*\n\n${resultado}\n━━━━━━✦❘༻༺❘✦━━━━━━`
        });
    } catch (e) {
        await conn.sendMessage(m.chat, { 
            edit: msg.key, 
            text: `⚠️ *Error al ejecutar el escaneo.*`
        });
    }
};

handler.help = ['portscan'];
handler.tags = ['netfree'];
handler.command = /^(portscan|nmap)$/i;
handler.group = true;

export default handler;
