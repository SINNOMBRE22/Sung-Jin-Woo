/* Generar error de prueba */
const handler = async (m, { conn, command }) => {
  throw new Error('Error de prueba lanzado por el comando handerror');
};

handler.command = /^(handerror)$/i;
handler.owner = true;

export default handler;
