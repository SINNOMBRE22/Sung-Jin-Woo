import axios from 'axios';
import fs from 'fs';

// 1) Comprueba un host igual que tu Python: HTTPS → HTTP, luego busca texto “Please check…”
async function checkHost(user) {
  const opts = { timeout: 10000, validateStatus: () => true };
  let res;
  try {
    res = await axios.get(`https://${user}`, opts);
  } catch {
    try {
      res = await axios.get(`http://${user}`, opts);
    } catch {
      // Ninguno respondió: error
      return { host: user, result: 'error' };
    }
  }
  const html = typeof res.data === 'string' ? res.data : '';
  const found = html.includes('Please check that this domain has been added to a service');
  return { host: user, result: found ? 'yes' : 'no' };
}

// 2) Extrae subdominios de crt.sh (JSON + scraping HTML)  
async function fetchCrtsh(domain) {
  try {
    const r = await axios.get(
      `https://crt.sh/?q=%.${domain}&output=json`,
      { headers: { Accept: 'application/json' }, timeout: 15000 }
    );
    if (Array.isArray(r.data) && r.data.length) {
      return r.data
        .flatMap(e => e.name_value.split('\n'))
        .map(s => s.replace(/^\*\./, '').trim())
        .filter(Boolean);
    }
  } catch {}
  const html = (await axios.get(`https://crt.sh/?q=%.${domain}`, { timeout:15000 })).data;
  return Array.from(new Set(
    [...html.matchAll(/<TD>([0-9A-Za-z._-]+)<\/TD>/g)]
      .map(m => m[1].replace(/^\*\./, ''))
  ));
}

// 3) Obtiene subdominios de OmniSINT (Project Sonar)
async function fetchSonar(domain) {
  try {
    const r = await axios.get(`https://sonar.omnisint.io/subdomains/${domain}`, { timeout:10000 });
    if (Array.isArray(r.data)) return r.data;
  } catch {}
  return [];
}

// 4) Wordlist ligera para brute-force
function makeBrute(domain) {
  return ['www','api','help','status','mobile','dev','admin']
    .map(w => `${w}.${domain}`);
}

let handler = async (m, { conn, text }) => {
  if (!text) {
    return m.reply('⚔️ *Error:* Debes ingresar un dominio, por ejemplo `proscan example.com`');
  }

  const domain = text.trim();
  const pm = await m.reply('🕰️ Recolectando subdominios…');
  await m.react('🕰️');

  try {
    // 1) juntamos fuentes y bruce-force
    const [a,b] = await Promise.all([fetchCrtsh(domain), fetchSonar(domain)]);
    const subs = Array.from(new Set([...a, ...b, ...makeBrute(domain)]));

    if (!subs.length) {
      await m.reply(`❌ No se encontraron subdominios para ${domain}.`);
      return;
    }

    // 2) chequeamos cada uno con la misma lógica textual de tu Python
    const results = await Promise.all(subs.map(checkHost));

    // 3) formateamos igual: “host: yes/no/error” y añadimos emoji
    const lines = results.map(r => {
      if (r.result === 'yes') return `${r.host} (si) ✅`;
      if (r.result === 'no')  return `${r.host} (no) ⚠️`;
      return `${r.host} (error) ❌`;
    });

    // 4) guardamos y enviamos SOLO el archivo .txt
    const fn = `subdoms_${domain}.txt`;
    fs.writeFileSync(fn, lines.join('\n'), 'utf8');
    await conn.sendMessage(
      m.chat,
      { document: fs.readFileSync(fn), fileName: fn, mimetype:'text/plain' },
      { quoted: m }
    );
    fs.unlinkSync(fn);

  } catch (e) {
    console.error(e);
    await m.reply('⚠️ Ocurrió un error interno. Intenta más tarde.');
  } finally {
    await pm.delete();
  }
};

handler.help = ['proscan <domain>'];
handler.tags = ['netfree'];
handler.command = /^(scan2|proscan)$/i;

export default handler;
