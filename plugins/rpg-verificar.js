import { createHash } from 'crypto';

const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;

const handler = async function (m, { conn, text, usedPrefix, command }) {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language;
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`));
  const tradutor = _translate.plugins.rpg_verificar;

  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);

  if (user.registered === true) throw `${tradutor.texto1[0]}\n*${usedPrefix}unreg* ${tradutor.texto1[1]}`;
  if (!Reg.test(text)) throw `${tradutor.texto2[0]} : ${usedPrefix + command} ${tradutor.texto2[1]} ${usedPrefix + command} Shadow.18*`;

  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw tradutor.texto3;
  if (!age) throw tradutor.texto5;
  if (name.length >= 30) throw tradutor.texto6;
  age = parseInt(age);
  if (age > 100) throw tradutor.texto6;
  if (age < 5) throw tradutor.texto7;

  user.name = name.trim();
  user.age = age;
  user.regTime = +new Date();
  user.registered = true;

  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `${tradutor.texto8[0]}
${tradutor.texto8[1]}」
${tradutor.texto8[2]}
${tradutor.texto8[3]} ${name}
${tradutor.texto8[4]} ${age} ${tradutor.texto8[5]}
${tradutor.texto8[6]} 
┃ ${sn}
${tradutor.texto8[7]}
${tradutor.texto8[8]} 
${tradutor.texto8[9]}
${tradutor.texto8[10]}
${tradutor.texto8[11]}`;

  // Eliminando el envío de imagen (lo he quitado completamente)
  // await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);

  // Envía un mensaje con la información (sin foto)
  await conn.sendMessage(m.chat, { text: caption });

  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};

handler.help = ['registrar'];
handler.tags = ['main'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;

export default handler;
