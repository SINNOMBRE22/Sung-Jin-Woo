export async function handler(m, { text, command }) {
  if (!text) {
    return m.reply(
      '❌ *Uso incorrecto.*\n🔹 Escribe: *.diccionario palabra*\n📖 Ejemplo: *.diccionario inteligencia*'
    );
  }

  // Base de datos interna del diccionario
  const diccionario = {
    "inteligencia": {
      definicion: "Capacidad de aprender, entender, razonar y tomar decisiones.",
      categoria: "Ciencia y Psicología"
    },
    "amor": {
      definicion: "Sentimiento de afecto intenso hacia una persona, animal o cosa.",
      categoria: "Sentimientos y Emociones"
    },
    "programación": {
      definicion: "Proceso de escribir, probar y mantener código para computadoras.",
      categoria: "Tecnología y Desarrollo"
    },
    "algoritmo": {
      definicion: "Conjunto de pasos organizados para realizar una tarea específica.",
      categoria: "Matemáticas y Computación"
    },
    "bot": {
      definicion: "Programa automatizado que realiza tareas específicas de forma autónoma.",
      categoria: "Tecnología e Inteligencia Artificial"
    },
    "javascript": {
      definicion: "Lenguaje de programación utilizado en desarrollo web y aplicaciones.",
      categoria: "Lenguajes de Programación"
    },
    "linux": {
      definicion: "Sistema operativo de código abierto basado en Unix.",
      categoria: "Sistemas Operativos"
    },
    "ubuntu": {
      definicion: "Distribución de Linux basada en Debian, popular por su facilidad de uso.",
      categoria: "Sistemas Operativos"
    },
    "servidor": {
      definicion: "Computadora o software que proporciona servicios a otros dispositivos en una red.",
      categoria: "Redes y Servidores"
    },
    "base de datos": {
      definicion: "Sistema organizado para almacenar, gestionar y recuperar información.",
      categoria: "Computación y Datos"
    },
    "código": {
      definicion: "Conjunto de instrucciones escritas en un lenguaje de programación.",
      categoria: "Lenguajes de Programación"
    },
    "hacker": {
      definicion: "Persona experta en informática que explora y modifica sistemas para mejorarlos o explotarlos.",
      categoria: "Ciberseguridad"
    }
  };

  // Convertir a minúsculas para evitar errores de capitalización
  const palabra = text.toLowerCase();

  // Buscar la palabra en el diccionario interno
  if (diccionario[palabra]) {
    const { definicion, categoria } = diccionario[palabra];
    return m.reply(
      `📖 *Definición de ${palabra}:*\n${definicion}\n\n🗂 *Categoría:* ${categoria}`
    );
  } else {
    // Si no se encuentra, se consulta la API de dictionaryapi.dev
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/es/${palabra}`
      );
      if (!res.ok) {
        // Si la respuesta no es correcta, asumimos que no existen datos en español
        throw new Error(
          "La API no dispone de definiciones para palabras en español"
        );
      }
      const data = await res.json();
      const definicionEnLinea =
        data[0]?.meanings?.[0]?.definitions?.[0]?.definition;
      const categoriaEnLinea =
        data[0]?.meanings?.[0]?.partOfSpeech || "No especificado";
      if (definicionEnLinea) {
        return m.reply(
          `📖 *Definición de ${palabra}:*\n${definicionEnLinea}\n\n🗂 *Categoría:* ${categoriaEnLinea}`
        );
      } else {
        return m.reply(
          `❌ No se encontró la definición de *${palabra}* en el diccionario en línea.`
        );
      }
    } catch (error) {
      return m.reply(`❌ Error al buscar la palabra en línea: ${error.message}`);
    }
  }
}

// Configuración del comando
handler.command = ["diccionario", "definir"];
handler.help = ["diccionario [palabra]"];
handler.tags = ["tools"];
export default handler;
