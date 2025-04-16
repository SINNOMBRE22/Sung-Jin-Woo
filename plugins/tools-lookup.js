import fetch from 'node-fetch'

// Función para generar el menú con el diseño decorado
const decoratedBox = (domain, dnsResult, commandsCount) => {
  // Formatea cada línea del resultado para mantener la indentación
  const dnsLines = dnsResult.split('\n').map(line => `   ${line}`).join('\n');
  return (
`━━━━ ✦ ❘༻༺❘ ✦ ━━━━
Dominio: ${domain}
Comandos Ejecutados: ${commandsCount}
━━━━ ✦ ❘༻༺❘ ✦ ━━━━
Resultados de DNS:
${dnsLines}
━━━━ ✦ ❘༻༺❘ ✦ ━━━━`
  );
};

let handler = async (m, { text, usedPrefix, command }) => {
  // Incrementa el contador de comandos del usuario
  global.db.data.users[m.sender].comandos += 1;
  
  // Validación de entrada
  if (!text)
    throw `Ingrese Dominio/Subdominio!\n\n*Ejemplo:* example.com`;
  if (text.includes('https://') || text.includes('http://'))
    throw `Por favor ingrese el dominio/subdominio sin protocolo. Ejemplo: powermx.org`;

  try {
    // Llamada a la API principal (api-ninjas)
    const api_key = 'E4/gdcfciJHSQdy4+9+Ryw==JHciNFemGqOVIbyv';
    let response = await fetch(`https://api.api-ninjas.com/v1/dnslookup?domain=${text}`, {
      headers: { 'X-Api-Key': api_key },
      contentType: 'application/json'
    });
    let dnsResult = await response.text();

    if (!response.ok) throw new Error('Error en la API Ninjas');

    // Envía el menú formateado al usuario
    m.reply(decoratedBox(text, dnsResult, global.db.data.users[m.sender].comandos));
    console.log(dnsResult);
  } catch (error) {
    console.error('Error con api:', error);
    // Fallback: utiliza la API de hackertarget.com
    try {
      let fallbackResponse = await fetch(`https://api.hackertarget.com/dnslookup/?q=${text}`);
      let fallbackData = await fallbackResponse.text();
      m.reply(decoratedBox(text, fallbackData, global.db.data.users[m.sender].comandos));
      console.log(fallbackData);
    } catch (fallbackError) {
      console.error('Error en fallback:', fallbackError);
      m.reply(
`━━━━ ✦ ❘༻༺❘ ✦ ━━━━
⚠️ ERROR: No se puede procesar la solicitud de búsqueda de DNS
━━━━ ✦ ❘༻༺❘ ✦ ━━━━`
      );
    }
  }
};

handler.help = ['lookup'];
handler.tags = ['netfree'];
handler.command = /^(lookup)$/i;

export default handler;
