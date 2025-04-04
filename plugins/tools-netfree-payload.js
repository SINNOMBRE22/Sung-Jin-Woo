let handler = async (m, { args, conn }) => {
  // Mostrar menú de ayuda si no se proporciona host
// Mostrar menú de ayuda si no se proporciona host
if (!args[0]) {
  return m.reply(`╭━〔 *Generador de Payloads V1.0* 〕━╮  

🔹 *Proporciona un host para generar el payload.*  
🔹 *Ejemplo:* \`.payload example.com\`  

━━━━━━━━━━━━━━━━━━━━━━  
📌 *MÉTODOS DE SOLICITUD DISPONIBLES:*  
━━━━━━━━━━━━━━━━━━━━━━  

🔹 \`.payload example.com|get\` — *GET* 📥 (Obtiene datos del servidor).  
🔹 \`.payload example.com|connect\` — *CONNECT* 🔗 (Establece un túnel HTTP).  
🔹 \`.payload example.com|post\` — *POST* 📤 (Envía datos al servidor).  
🔹 \`.payload example.com|head\` — *HEAD* 🧾 (Similar a GET, sin cuerpo de respuesta).  
🔹 \`.payload example.com|move\` — *MOVE* 🚚 (Mueve un recurso a otra ubicación).  
🔹 \`.payload example.com|options\` — *OPTIONS* ⚙️ (Consulta métodos soportados).  
🔹 \`.payload example.com|put\` — *PUT* 📂 (Sube o reemplaza un recurso).  
🔹 \`.payload example.com|delete\` — *DELETE* ❌ (Elimina un recurso).  
🔹 \`.payload example.com|trace\` — *TRACE* 🔍 (Devuelve la solicitud recibida).  
🔹 \`.payload example.com|patch\` — *PATCH* 🛠️ (Modifica parcialmente un recurso).  

━━━━━━━━━━━━━━━━━━━━━━  
🔥 *MODO MASIVO:*  
━━━━━━━━━━━━━━━━━━━━━━  
🔹 \`.payload example.com\` — *Genera todos los payloads disponibles.*  

⚠️ *Usa este comando en chat privado para evitar spam.*`);
}
  let input = args.join(" ");
  if (args.length > 1 && !input.includes("|")) {
    return m.reply("❌ Uso incorrecto. Por favor, utiliza el separador '|' para especificar el método.\nEjemplo: .payload example.com|get");
  }
  let parts = input.split("|");
  let host = parts[0].trim();
  let methodFilter = parts[1] ? parts[1].trim().toLowerCase() : null;

  // -------------------------------
  // Payloads originales (31 payloads, sin modificar)
  let originalPayloads = [
    `CONNECT free.facebook.com;${host};internet.org;c.whatsapp.net@[host_port] [protocol][crlf][delay_split]GET http://free.facebook.com;${host};internet.org;c.whatsapp.net/ HTTP/1.1[crlf]Host: free.facebook.com;${host};internet.org;c.whatsapp.net[crlf]X-Online-Host: free.facebook.com;${host};internet.org;c.whatsapp.net[crlf]X-Forward-Host: free.facebook.com;${host};internet.org;c.whatsapp.net[crlf]X-Forwarded-For: free.facebook.com;${host};internet.org;c.whatsapp.net[crlf]Connection: Keep-Alive[crlf][crlf]`,
    `GET http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]User-Agent: Yes[crlf]Accept-Encoding: gzip,deflate[crlf]Accept-Charset: ISO-8859-1,utf-8;q=0.7,;q=0.7[crlf]Connection: Basic[crlf]Referer: ${host}[crlf]Cookie: ${host} [crlf]Proxy-Connection: Keep-Alive[crlf][crlf][netData][crlf][crlf][crlf]`,
    `GET http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]X-Online-Host: ${host}[crlf]X-Forward-Host: ${host}[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf][delay_split]CONNECT [host_port] [protocol][crlf][crlf]`,
    `GET http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]X-Online-Host: ${host}[crlf]X-Forward-Host: ${host}[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf]`,
    `CONNECT [host_port] [protocol][crlf]Host: ${host}[crlf]X-Online-Host: ${host}[crlf]X-Forward-Host: ${host}[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf]`,
    `GET http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]X-Online-Host: ${host}[crlf]X-Forward-Host: ${host}[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf][delay_split]CONNECT [host_port] [protocol][crlf][crlf]`,
    `CONNECT ${host}@[host_port] [protocol][crlf][delay_split]HEAD http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]X-Online-Host: ${host}[crlf]X-Forward-Host: ${host}[crlf]X-Forwarded-For: ${host}[crlf]Connection: Keep-Alive[crlf][crlf]`,
    `GET http://free.facebook.com;${host};internet.org;c.whatsapp.net/ HTTP/1.1[crlf]Host: free.facebook.com;${host};internet.org;c.whatsapp.net[crlf]X-Online-Host: free.facebook.com;${host};internet.org;c.whatsapp.net[crlf]X-Forward-Host: free.facebook.com;${host};internet.org;c.whatsapp.net[crlf]X-Forwarded-For: free.facebook.com;${host};internet.org;c.whatsapp.net[crlf]Connection: Keep-Alive[crlf][crlf]`,
    `CONNECT [host_port]@${host} [protocol][crlf][delay_split]GET http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]X-Online-Host: ${host}[crlf]X-Forward-Host: ${host}[crlf]X-Forwarded-For: ${host}[crlf]Connection: Keep-Alive[crlf][crlf]`,
    `GET http://${host}/ HTTP/1.1[crlf][crlf]Host: ${host}[crlf]Connection: Keep-Alive[crlf]Content-Type: text[crlf]Cache-Control: no-cache[crlf]Connection: close[crlf]Content-Lenght: 20624[crlf][crlf][realData][crlf][crlf]`,
    `[method] ${host}:443 HTTP/1.1[lf]CONNECT [host_port] [protocol][lf][lf]GET http://${host}/ HTTP/1.1\nHost: ${host}\nConnection: close\nConnection: close\nUser-Agent:[ua][lf]Proxy-Connection: Keep-Alive[lf][host][crlf][lf][delay_split]CONNECT [host_port] [protocol][lf][lf]CONNECT [host_port] [protocol][crlf][realData][crlf][crlf]`,
    `[immutable][method][host_port][delay_split]GET http://${host} HTTP/1.1[netData][crlf]HTTP:mip:80[crlf]X-GreenArrow-MtaID: smtp1-1[split]GET ${host}/[crlf][crlf]: Cache-Control:no-store,no-cache,must-revalidate,post-check=0,pre-check=0[crlf]Connection:close[crlf]CONNECT [host_port]?[split]GET http://${host}:/[crlf][crlf]POST [host_port]?[split]GET ${host}:/[crlf]Content-Length: 999999999\r\n\r\n`,
    `GET http://${host}/ HTTP/1.1[lf]Host: ${host} User-Agent: Yes Connection: close Proxy-Connection: Keep-Alive [crlf][crlf]CONNECT [host_port][protocol][crlf][crlf][immutable]`,
    `GET http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf] Access-Control-Allow-Credentials: true, true[lf] Access-Control-Allow-Headers: X-Requested-With,Content-Type, X-Requested-With,Content-Type[lf] Access-Control-Allow-Methods: GET,PUT,OPTIONS,POST,DELETE, GET,PUT,OPTIONS,POST,DELETE[lf] Age: 8, 8[lf] Cache-Control: max-age=86400[lf] public[lf] Connection: keep-alive[lf] Content-Type: text/html; charset=UTF-8[crlf]Content-Length: 9999999999999[crlf]UseDNS: Yes[crlf]Vary: Accept-Encoding[crlf][raw][crlf][crlf][crlf]`,
    `GET http://${host}/ HTTP/1.1 Host: ${host}/ User-Agent: Yes Connection: close Proxy-Connection: update [crlf][crlf][netData][crlf][crlf][crlf]`,
    `GET http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]Content-Type: text/html; charset=iso-8859-1[crlf]Connection: close[crlf][crlf][crlf]User-Agent: [ua][crlf][crlf]Referer: ${host}[crlf]Cookie: ${host}[crlf]Proxy-Connection: Keep-Alive [crlf][crlf]CONNECT [host_port] [protocol][crlf][crlf][crlf]`,
    `GET http://${host}/ HTTP/1.1 Host: ${host} Upgrade-Insecure-Requests: 1 User-Agent: Mozilla/5.0 (Linux; Android 5.1; LG-X220 Build/LMY47I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.83 Mobile Safari/537.36 Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8 Referer: http://${host} Accept-Encoding: gzip, deflate, sdch Accept-Language: pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4 Cookie: _ga=GA1.2.2045323091.1494102805; _gid=GA1.2.1482137697.1494102805; tfp=80bcf53934df3482b37b54c954bd53ab; tpctmp=1494102806975; pnahc=0; _parsely_visitor={"id":"719d5f49-e168-4c56-b7c7-afdce6daef18","session_count":1,"last_session_ts":1494102810109}; sc_is_visitor_unique=rx10046506.1494105143.4F070B22E5E94FC564C94CB6DE2D8F78.1.1.1.1.1.1.1.1.1 Connection: close Proxy-Connection: Keep-Alive [crlf][netData][crlf][crlf][crlf]`,
    `GET http://${host}[crlf] HTTP/1.1[crlf]Host: ${host}[crlf]User-Agent: [ua][crlf]Connection: close [crlf] Referer:http://${host}[crlf] Content-Type: text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5[crlf][raw][crlf][crlf]`,
    `GET https://${host}/ HTTP/1.1 Host: ${host}[crlf]User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 Accept-Language: en-us,en;q=0.5 Accept-Encoding: gzip,deflate Accept-Charset: ISO-8859-1,utf-8;q=0.7,;q=0.7 Keep-Alive: 115 Connection: keep-alive Referer: ${host} Cookie: ${host} Proxy-Connection: Keep-Alive [crlf][crlf][netData][crlf] [crlf][crlf]`,
    `GET [host_port]@${host} HTTP/1.1[crlf]X-Real-IP:mip[crlf]X-Forwarded-For:http://${host}/ http://${host}/[crlf]X-Forwarded-Port:${host}[crlf]X-Forwarded-Proto:http[crlf]Connection:Keep-Alive[crlf][crlf][instant_split]CONNECT [ssh]HTTP/1.0[crlf][crlf]`,
    `GET http://${host}/[host_port][method]HTTP/1.1[crlf]${host}[lf]HEAD http://${host}[protocol][crlf]Host: ${host} [crlf]`,
    `CONNECT http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]X-Online-Host: ${host}[crlf]Proxy-Connection: keep-alive[crlf]Connection: keep-alive[crlf][crlf][method] [host_port] [protocol][crlf]Proxy-Authorization: [auth][crlf]Proxy-Connection: keep-alive[crlf]Connection: keep-alive[crlf][crlf]`,
    `[method] [host_port] [protocol][crlf]Proxy-Connection: keep-alive[crlf]Connection: keep-alive[crlf][crlf][split_delay]MOVE http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]X-Online-Host: ${host}[crlf]Proxy-Connection: keep-alive[crlf]Connection: keep-alive[crlf][crlf]`,
    `[method] [host_port] [protocol][crlf]Proxy-Authorization: [auth][crlf]Proxy-Connection: keep-alive[crlf]Connection: keep-alive[crlf][crlf]`,
    `MOVE http://${host}/ HTTP/1.0[crlf]Host: ${host}[crlf]X-Online-Host: ${host}[crlf]Proxy-Connection: keep-alive[crlf]Connection: keep-alive[crlf][crlf][method] [host_port] [protocol][crlf]Proxy-Authorization: [auth][crlf]Proxy-Connection: keep-alive[crlf]Connection: keep-alive[crlf][crlf]`,
    `GET /datos-por-demanda/ HTTP/1.1 9999999999\r\n\r\nConnection: Keep-Alive[auth]\r\n\r\nHost: ${host}:80\r\n\r\nConnection: Keep-Alive[auth]Content-Length: 999999999\r\n\r\nHost: ${host}:80[crlf][crlf]Accept-Encoding: gzip[crlf][crlf]Content-Length: 999999999[crlf][crlf]`,
    `GET http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]User-Agent: [ua][lf][host]@${host} [protocol][lf][lf]`,
    `CONNECT [host_port]HTTP/1.0[host][lf][cr]
GET ${host} HTTP/1.1
Connection: Close keep-alive
Content-Length: 9999999999
[crlf][crlf][netData][crlf] [host_port]GET http://${host} HTTP/1.0[lf]`,
    `GET http://${host}[crlf] HTTP/1.1[crlf]Host: ${host}[crlf]User-Agent: [ua][crlf]Connection: close [crlf] kkReferer:http://${host}[crlf] Content-Type: text/html; charset=iso-8859-1[crlf]Content-Length:0[crlf]Accept: text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5[crlf][raw][crlf] [crlf]`,
    `CONNECT [host_port][protocol][crlf][delay_split]GET http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]Connection: Keep-Alive[crlf]x-amz-id-2: +bnliBcDYxWL++PEO8kRY18ng+fHsuiIINYg/e8YrGUJLYLK3RJ6ko7OUiYCMNIiWMzHPmTYUrE=[crlf]User-Agent: [ua][crlf][crlf][split][raw]`,
    `CONNECT [host_port]@${host} [protocol][crlf]Host: ${host}[crlf]X-Online-Host: ${host}[crlf]X-Forward-Host: ${host}[crlf]X-Forwarded-For: ${host}[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf]CONNECT [host_port] [protocol][crlf][crlf]`
  ];

  // -------------------------------
  // Nuevos payloads para métodos adicionales (5 payloads cada uno)
  let newPayloads = {
    options: [
      `OPTIONS http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]User-Agent: Custom[crlf]Connection: close[crlf][crlf]`,
      `OPTIONS http://${host}/ HTTP/1.0[crlf]Host: ${host}[crlf]Accept: */*[crlf]Connection: Keep-Alive[crlf][crlf]`,
      `OPTIONS http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]Accept: text/html[crlf]Connection: close[crlf][crlf]`,
      `OPTIONS http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]User-Agent: Mozilla/5.0[crlf]Connection: keep-alive[crlf][crlf]`,
      `OPTIONS http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]Cache-Control: no-cache[crlf]Connection: close[crlf][crlf]`
    ],
    put: [
      `PUT http://${host}/upload HTTP/1.1[crlf]Host: ${host}[crlf]Content-Length: 0[crlf]Connection: close[crlf][crlf]`,
      `PUT http://${host}/resource HTTP/1.1[crlf]Host: ${host}[crlf]User-Agent: CustomPUT[crlf]Connection: Keep-Alive[crlf][crlf]`,
      `PUT http://${host}/data HTTP/1.1[crlf]Host: ${host}[crlf]Content-Type: application/json[crlf]Content-Length: 15[crlf][crlf]{"key":"value"}`,
      `PUT http://${host}/ HTTP/1.0[crlf]Host: ${host}[crlf]Accept: */*[crlf]Connection: close[crlf][crlf]`,
      `PUT http://${host}/update HTTP/1.1[crlf]Host: ${host}[crlf]Cache-Control: no-cache[crlf]Connection: close[crlf][crlf]`
    ],
    delete: [
      `DELETE http://${host}/resource HTTP/1.1[crlf]Host: ${host}[crlf]Connection: close[crlf][crlf]`,
      `DELETE http://${host}/item HTTP/1.1[crlf]Host: ${host}[crlf]User-Agent: CustomDELETE[crlf]Connection: Keep-Alive[crlf][crlf]`,
      `DELETE http://${host}/data HTTP/1.0[crlf]Host: ${host}[crlf]Accept: */*[crlf]Connection: close[crlf][crlf]`,
      `DELETE http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]Cache-Control: no-cache[crlf]Connection: close[crlf][crlf]`,
      `DELETE http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]User-Agent: Mozilla/5.0[crlf]Connection: Keep-Alive[crlf][crlf]`
    ],
    trace: [
      `TRACE http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]Connection: close[crlf][crlf]`,
      `TRACE http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]User-Agent: CustomTRACE[crlf]Connection: Keep-Alive[crlf][crlf]`,
      `TRACE http://${host}/ HTTP/1.0[crlf]Host: ${host}[crlf]Accept: */*[crlf]Connection: close[crlf][crlf]`,
      `TRACE http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]Cache-Control: no-cache[crlf]Connection: close[crlf][crlf]`,
      `TRACE http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]X-Extra-Header: Test[crlf]Connection: Keep-Alive[crlf][crlf]`
    ],
    patch: [
      `PATCH http://${host}/ HTTP/1.1[crlf]Host: ${host}[crlf]Content-Type: application/json[crlf]Content-Length: 15[crlf][crlf]{"patch":"data"}`,
      `PATCH http://${host}/update HTTP/1.1[crlf]Host: ${host}[crlf]User-Agent: CustomPATCH[crlf]Connection: close[crlf][crlf]`,
      `PATCH http://${host}/ HTTP/1.0[crlf]Host: ${host}[crlf]Accept: */*[crlf]Connection: close[crlf][crlf]`,
      `PATCH http://${host}/resource HTTP/1.1[crlf]Host: ${host}[crlf]Cache-Control: no-cache[crlf]Connection: Keep-Alive[crlf][crlf]`,
      `PATCH http://${host}/data HTTP/1.1[crlf]Host: ${host}[crlf]User-Agent: Mozilla/5.0[crlf]Connection: close[crlf][crlf]`
    ]
  };

  let finalPayloads = [];
  if (methodFilter) {
    // Filtrar los payloads originales que empiecen EXACTAMENTE con el método indicado
    let filteredOriginal = originalPayloads.filter(p => p.trim().toLowerCase().startsWith(methodFilter));
    finalPayloads = finalPayloads.concat(filteredOriginal);
    if (newPayloads[methodFilter]) {
      finalPayloads = finalPayloads.concat(newPayloads[methodFilter]);
    }
    if (finalPayloads.length === 0) {
      return m.reply(`❌ No se encontraron payloads para el método "${methodFilter.toUpperCase()}".`);
    }
  } else {
    finalPayloads = originalPayloads.slice();
    for (let key in newPayloads) {
      finalPayloads = finalPayloads.concat(newPayloads[key]);
    }
  }

  // Enviar cada payload con retardo de 2 segundos sin mensaje citado adicional
  for (let i = 0; i < finalPayloads.length; i++) {
    await conn.reply(m.chat, finalPayloads[i], m);
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
};

handler.help = ['payload [host]|[método]'];
handler.tags = ['netfree'];
handler.command = /^(payload)(\s+\S+)?$/i;

export default handler;
