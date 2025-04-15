import axios from 'axios';
import fs from 'fs';

const API_KEY = process.env.OPENWEATHER_API_KEY || '060a6bcfa19809c2cd4d97a212b19273';

// Función para convertir el código de país en emoji de bandera
function getFlagEmoji(countryCode) {
  return countryCode
    .toUpperCase()
    .split('')
    .map(letter => String.fromCodePoint(127397 + letter.charCodeAt()))
    .join('');
}

const handler = async (m, { args }) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language;
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`));
  const tradutor = _translate.plugins.herramientas_clima;

  if (!args[0]) throw tradutor.errorNoCiudad || 'Por favor ingresa el nombre de una ciudad o país.';

  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: args.join(' '),
        units: 'metric',
        appid: API_KEY,
        lang: idioma
      }
    });
    const res = response.data;
    
    // Extraer datos
    const name = res.name;
    const country = res.sys.country;
    const flagEmoji = getFlagEmoji(country); // Generar la bandera dinámica
    const weatherDesc = res.weather[0].description;
    const temperature = res.main.temp + '°C';
    const feelsLike = res.main.feels_like + '°C';
    const tempMin = res.main.temp_min + '°C';
    const tempMax = res.main.temp_max + '°C';
    const humidity = res.main.humidity + '%';
    const pressure = res.main.pressure + ' hPa';
    const wind = res.wind.speed + ' km/h';
    const sunrise = new Date(res.sys.sunrise * 1000).toLocaleTimeString('es-ES', { timeStyle: 'short' });
    const sunset = new Date(res.sys.sunset * 1000).toLocaleTimeString('es-ES', { timeStyle: 'short' });
    
    // Definir separador decorativo
    const separator = "\n────────────\n\n";
    
    // Construir mensaje formateado con separadores decorativos
    const message = 
      `✦ *${tradutor.titulo || 'Clima Actual'} en ${name}* ✦` + separator +
      `${flagEmoji} *${tradutor.pais || 'País'}:* ${country}` + separator +
      `🌤 *${tradutor.condicion || 'Condición'}:* ${weatherDesc}` + separator +
      `🌡 *${tradutor.temperatura || 'Temperatura'}:* ${temperature} (${tradutor.sensacion || 'Sensación'}: ${feelsLike})` + separator +
      `❄️ *${tradutor.minima || 'Mínima'}:* ${tempMin}   🔥 *${tradutor.maxima || 'Máxima'}:* ${tempMax}` + separator +
      `💧 *${tradutor.humedad || 'Humedad'}:* ${humidity}` + separator +
      `${tradutor.presion ? `📈 *${tradutor.presion}:* ${pressure}` + separator : ''}` +
      `💨 *${tradutor.viento || 'Viento'}:* ${wind}` + separator +
      `🌅 *${tradutor.amanecer || 'Amanecer'}:* ${sunrise}` + separator +
      `🌇 *${tradutor.atardecer || 'Atardecer'}:* ${sunset}`;

    m.reply(message);
  } catch (error) {
    console.error(error);
    throw tradutor.errorBusqueda || 'No se pudo obtener la información del clima. Verifica el nombre de la ciudad o país.';
  }
};

handler.help = ['clima *<ciudad/país>*'];
handler.tags = ['tools'];
handler.command = /^(clima|tiempo)$/i;
export default handler;
