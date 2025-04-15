import ping from 'ping';
import axios from 'axios';
import tls from 'tls';
import https from 'https';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { lookup } from 'dns';

// Función para testear el host con ping
async function testHost(host) {
    try {
        return await ping.promise.probe(host);
    } catch (error) {
        console.error("Error al testear el host:", error);
        return null;
    }
}

// Función para obtener todas las IPs y su ASN
async function getHostIPs(host) {
    return new Promise((resolve) => {
        lookup(host, { all: true }, async (err, addresses) => {
            if (err) {
                console.error("Error al obtener las IPs:", err);
                resolve(["No disponible"]);
                return;
            }
            let ipInfo = await Promise.all(
                addresses.map(async (addr) => {
                    try {
                        let { data } = await axios.get(`https://ipinfo.io/${addr.address}/json`);
                        return `IP: ${addr.address} (${data.org})`;
                    } catch {
                        return `IP: ${addr.address} (ASN desconocido)`;
                    }
                })
            );
            resolve(ipInfo);
        });
    });
}

// Función para obtener el código HTTP y headers, incluyendo `101 Switching Protocols`
async function getHTTPStatus(host, proxy = null) {
    return new Promise((resolve) => {
        const agent = proxy
            ? new HttpsProxyAgent(`http://${proxy.host}:${proxy.port}`)
            : new https.Agent({ rejectUnauthorized: false });

        const options = {
            method: "GET",
            timeout: 5000,
            host: host,
            port: 443,
            path: "/",
            headers: {
                "Connection": "Upgrade",
                "Upgrade": "websocket"
            },
            agent: agent
        };

        const req = https.request(options, (res) => {
            let data = `HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}\n`;
            for (let header in res.headers) {
                data += `${header}: ${res.headers[header]}\n`;
            }
            resolve(data);
        });

        req.on("error", (error) => resolve(`Error: ${error.message}`));
        req.end();
    });
}

// Función para obtener información TLS del proxy
async function getTLSInfo(proxy) {
    return new Promise((resolve) => {
        if (!proxy) {
            resolve("No disponible");
            return;
        }
        const socket = tls.connect(
            {
                host: proxy.host,
                port: parseInt(proxy.port),
                rejectUnauthorized: false,
            },
            () => {
                const cipher = socket.getCipher();
                const protocol = socket.getProtocol();
                const cert = socket.getPeerCertificate();
                let result = `CipherSuite: ${cipher.name}\nProtocol: ${protocol}\nPeerPrincipalCN=${cert.subject && cert.subject.CN ? cert.subject.CN : "Desconocido"}`;
                resolve(result);
                socket.end();
            }
        );
        socket.on("error", (error) => resolve(`No disponible (${error.message})`));
    });
}

let handler = async (m, { args }) => {
    if (!args[0]) {
        return m.reply('⚠️ *Uso Incorrecto* ⚠️\n\n📌 *Ejemplo:* `.testhost example.com` o `.testh example.com | sinnombre.ovh:443`');
    }

    // Separar host y proxy si se proporciona
    const input = args.join(" ");
    const parts = input.split("|").map(part => part.trim());
    const host = parts[0];
    let proxy = null;
    if (parts.length > 1 && parts[1] !== "") {
        const proxyParts = parts[1].split(":").map(x => x.trim());
        if (proxyParts.length >= 2) {
            proxy = { host: proxyParts[0], port: proxyParts[1] };
        } else {
            return m.reply("⚠️ *Formato de proxy incorrecto.*\nUse: `proxy:puerto`");
        }
    }

    await m.reply(`⏳ *Probando host:* ${host}${proxy ? ' usando proxy ' + proxy.host + ':' + proxy.port : ''}...`);

    // Obtener la información detallada
    const pingResult = await testHost(host);
    const ipInfo = await getHostIPs(host);
    const httpStatus = await getHTTPStatus(host, proxy);
    const tlsInfo = await getTLSInfo(proxy);

    // Formatear la respuesta con el estilo solicitado
    let reply = `━━━━ ✦ ❘༻༺❘ ✦ ━━━━\n`;
    reply += `🎯 *TARGET:* https://${host}\n`;
    reply += `🚀 *PROXY:* ${proxy ? proxy.host + ":" + proxy.port : "No utilizado"}\n`;
    reply += `${ipInfo.join("\n")}\n`;
    reply += `🔒 ${tlsInfo}\n`;
    reply += `📶 *Estado Ping:* ${pingResult && pingResult.alive ? "🟢 Activo" : "🔴 Inactivo"}\n`;
    reply += `⚡ *Latencia:* ${pingResult ? pingResult.time + " ms" : "No disponible"}\n`;
    reply += `📉 *Pérdida de paquetes:* ${pingResult ? pingResult.packetLoss + "%" : "No disponible"}\n`;
    reply += `🟢 *HTTP Status & Headers:*\n${httpStatus}\n`;
    reply += `━━━━ ✦ ❘༻༺❘ ✦ ━━━━`;

    m.reply(reply);
};

handler.help = ['testhost'];
handler.tags = ['netfree'];
handler.command = /^(testhost)$/i;

export default handler;
