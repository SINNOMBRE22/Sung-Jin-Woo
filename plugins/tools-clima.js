import axios from 'axios';
import fs from 'fs';

const API_KEY = process.env.OPENWEATHER_API_KEY || '060a6bcfa19809c2cd4d97a212b19273';

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

    const name = res.name;
    const country = res.sys.country;
    const flagEmoji = getFlagEmoji(country);
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

    const message = 
`╭────────────────────
├◉ *${tradutor.titulo || 'CLIMA ACTUAL'}*
├────────────────────
├◉ *Ciudad:* ${name}
├────────────────────
├◉ *País:* ${flagEmoji} ${country}
├────────────────────
├◉ *Condición:* ${weatherDesc}
├────────────────────
├◉ *Temperatura:* ${temperature}
├────────────────────
├◉ *Sensación térmica:* ${feelsLike}
├────────────────────
├◉ *Mínima:* ${tempMin}
├────────────────────
├◉ *Máxima:* ${tempMax}
├────────────────────
├◉ *Humedad:* ${humidity}
├────────────────────
${tradutor.presion ? `├◉ *Presión:* ${pressure}\n├────────────────────\n` : ''}├◉ *Viento:* ${wind}
├────────────────────
├◉ *Amanecer:* ${sunrise}
├────────────────────
├◉ *Atardecer:* ${sunset}
╰────────────────────`;

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
