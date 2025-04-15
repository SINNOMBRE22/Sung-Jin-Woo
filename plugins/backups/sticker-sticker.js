import {sticker} from '../lib/sticker.js';
import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import {webp2png} from '../lib/webp2mp4.js';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  let stiker = false;
  const user = db.data.users[m.sender];
  const nombre = conn.getName(m.sender)
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/webp|image|video/g.test(mime)) {
      const img = await q.download?.();
      if (!img) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾, 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙲𝙸𝙾́𝙽 .𝚓𝚙𝚐 𝙴𝙻 𝙲𝚄𝙰𝙻 𝚂𝙴𝚁𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾 𝙴𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁, 𝙳𝙴𝙱𝙴 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙾 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command}*`;
      let out;
      try {
        stiker = await sticker(img, false, `  ★━━━━━━━━
	├ ʙᴏᴛ     : 
	├ ᴀᴜᴛᴏʀ:
	├ ɢʀᴜᴘᴏ:
	├ ғᴇᴄʜᴀ ᴄʀᴇᴀᴄɪᴏɴ:
	★━━━━━━━━
		`, `   ★━━━━━━━━
	⌬ 𝐴𝑟𝑐𝑎𝑛𝑒
	⌬ 𝑃𝑜𝑤𝑒𝑟𝑀𝑋
	⌬ 𝑆𝑡𝑖𝑐𝑘𝑒𝑟𝑙𝑎𝑛𝑑𝑖𝑎
	⌬ ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}
	★━━━━━━━━
	
	
	
	ᶜʳᵉᵃᵈᵒ ᵖᵒʳ
	${nombre}
	
	
	
	
	`);
      } catch (e) {
        console.error(e);
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img);
          else if (/image/g.test(mime)) out = await uploadImage(img);
          else if (/video/g.test(mime)) out = await uploadFile(img);
          if (typeof out !== 'string') out = await uploadImage(img);
          stiker = await sticker(false, out,  `   ★━━━━━━━━
	⌬ Sung Jin-Woo
	⌬ SinNombre
	⌬ Cibermarian
	⌬ ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}
	★━━━━━━━━
	
	
	
	ᶜʳᵉᵃᵈᵒ ᵖᵒʳ
	${nombre}
	
	
	
	
	`);
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author);
      else return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 / 𝚄𝚁𝙻 / 𝙻𝙸𝙽𝙺 𝙽𝙾 𝙴𝚂 𝚅𝙰𝙻𝙸𝙳𝙰, 𝙻𝙰 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 / 𝚄𝚁𝙻 / 𝙻𝙸𝙽𝙺 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 .𝚓𝚙𝚐, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix}s https://telegra.ph/file/0dc687c61410765e98de2.jpg*');
    }
  } catch (e) {
    console.error(e);
    if (!stiker) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    else throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝚁𝙽𝚃𝙰𝚁𝙻𝙾. 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾, 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙲𝙸𝙾́𝙽 .𝚓𝚙𝚐 𝙴𝙻 𝙲𝚄𝙰𝙻 𝚂𝙴𝚁𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾 𝙴𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁*';
  }
};
handler.help = ['spro'];
handler.tags = ['sticker'];
handler.command = /^(spro)$/i
handler.group = true
export default handler;

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'));
};
