import axios from 'axios';
import dns from 'dns';

let detectProvider = async (ip) => {
    try {
        let { data } = await axios.get(`http://ip-api.com/json/${ip}?fields=isp,org,as`);
        return data.as || data.org || data.isp || 'Desconocido';
    } catch (err) {
        return 'Desconocido';
    }
};

let resolveIPs = async (domain) => {
    return new Promise((resolve) => {
        dns.resolve4(domain, async (err, addresses) => {
            if (err) return resolve([]);
            let results = [];
            for (let ip of addresses) {
                let provider = await detectProvider(ip);
                results.push({ ip, provider });
            }
            resolve(results);
        });
    });
};

let getSubdomains = async (domain) => {
    try {
        let { data } = await axios.get(`https://api.hackertarget.com/hostsearch/?q=${domain}`);
        return data.split('\n').map(line => line.split(',')[0]);
    } catch (err) {
        return [];
    }
};

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `⚔️ *Error:* Debes ingresar un dominio.\n\n✦ *Ejemplo:* \n- *${usedPrefix + command} example.com*`;

    try {
        await m.react('⏳');
        let msg = await conn.sendMessage(m.chat, { text: `🔍 *Buscando información de dominio...*` }, { quoted: m });

        let subdomains = await getSubdomains(text);
        if (!subdomains.length) throw "⚠️ No se encontraron subdominios.";

        let results = [];
        for (let subdomain of subdomains) {
            let ips = await resolveIPs(subdomain);
            if (ips.length === 0) continue;

            let info = `🌍 *Hostname:* ${subdomain}\n${ips.map(ip => `==> ${ip.ip} (${ip.provider})`).join('\n')}`;
            results.push(info);
        }

        let response = results.length ? results.join('\n\n') : "⚠️ No se encontraron IPs asociadas.";
        await conn.sendMessage(m.chat, { text: response }, { quoted: m });
        await m.react('✅');

    } catch (e) {
        await m.react('❌');
        await m.reply(`❌ *Error:* No se pudo obtener información. ${e.message || e}`);
        console.error(e);
    }
};

handler.help = ['scan'];
handler.tags = ['netfree'];
handler.command = ['scan'];

export default handler;

