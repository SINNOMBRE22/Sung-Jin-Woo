// registerinfo.js – Plugin exclusivo para el owner del bot

/**
 * Genera datos de registro: correo temporal, tarjeta de prueba,
 * dirección en EE.UU. y datos de pago.
 * Solo el owner puede usar este comando.
 */
const handler = async (m, { conn, isOwner }) => {
  if (!isOwner) throw 'Este comando es solo para el propietario del bot.';

  // Generamos todos los datos
  const correo = generarCorreo();
  const tarjeta = generarTarjeta();
  const { mes, ano } = generarExpiracion();
  const cvv = generarCVV();
  const direccion = generarDireccionUSA();

  // Construimos la respuesta
  const resp =
    `✅ *Datos de Registro:*\n\n` +
    `📧 Correo: ${correo}\n` +
    `🏠 Dirección:\n` +
    `   ${direccion.street}\n` +
    `   ${direccion.city}, ${direccion.state} ${direccion.zip}\n\n` +
    `💳 Tarjeta: ${tarjeta}\n` +
    `📅 Expira: ${mes}/${ano}\n` +
    `🔒 CVV: ${cvv}\n\n` +
    `_Con estos datos puedes completar tu registro en Spotify._`;

  await conn.reply(m.chat, resp, m);
};

// Función para correo temporal
function generarCorreo() {
  const user = Math.random().toString(36).substring(2, 10);
  const domains = ['tempmail.lol', 'mailtemp.top', 'fakeinbox.info'];
  return `${user}@${domains[Math.floor(Math.random() * domains.length)]}`;
}

// Función para número de tarjeta (Visa ejemplo)
function generarTarjeta() {
  const bin = '4' + generarNumeros(5);     // Inicia con 4 (Visa)
  const body = bin + generarNumeros(9);    // Completa 15 dígitos
  const check = calcularLuhn(body);
  return `${body}${check}`;
}

// Genera n dígitos aleatorios
function generarNumeros(n) {
  let s = '';
  for (let i = 0; i < n; i++) s += Math.floor(Math.random() * 10);
  return s;
}

// Calcula dígito de control Luhn
function calcularLuhn(numero) {
  const arr = numero.split('').map(d => parseInt(d, 10)).reverse();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (i % 2 === 0) {
      val *= 2;
      if (val > 9) val -= 9;
    }
    sum += val;
  }
  return (10 - (sum % 10)) % 10;
}

// Genera mes/año de expiración (en los próximos 3 años)
function generarExpiracion() {
  const ahora = new Date();
  const year = ahora.getFullYear() + Math.floor(Math.random() * 3) + 1;
  const month = ('0' + (Math.floor(Math.random() * 12) + 1)).slice(-2);
  return { mes: month, ano: year.toString().slice(-2) };
}

// Genera CVV de 3 dígitos
function generarCVV() {
  return generarNumeros(3);
}

// Genera dirección en EE.UU.
function generarDireccionUSA() {
  const streets = [
    'Elm Street', 'Maple Avenue', 'Oak Street', 'Pine Lane',
    'Cedar Court', 'Walnut Drive', 'Sunset Boulevard', 'Main Street'
  ];
  const cities = [
    'Springfield', 'Riverton', 'Fairview', 'Greenville',
    'Oakwood', 'Lakewood', 'Madison', 'Franklin'
  ];
  const states = {
    'AL': 'Alabama','CA': 'California','TX': 'Texas','NY': 'New York',
    'FL': 'Florida','IL': 'Illinois','PA': 'Pennsylvania','OH': 'Ohio'
  };
  const streetNum = Math.floor(Math.random() * 9000) + 100;
  const street = `${streetNum} ${streets[Math.floor(Math.random() * streets.length)]}`;
  const city = cities[Math.floor(Math.random() * cities.length)];
  const stateKeys = Object.keys(states);
  const state = stateKeys[Math.floor(Math.random() * stateKeys.length)];
  const zip = ('' + (Math.floor(Math.random() * 90000) + 10000));
  return { street, city, state, zip };
}

// Configuración del handler
handler.help = ['reginfo'];
handler.tags = ['owner'];
handler.command = /^reginfo$/i;
handler.owner = true;

export default handler;
