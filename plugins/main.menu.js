const a0_0x1fb368=a0_0xeb59;(function(_0x1eb37b,_0x42189e){const _0x185e4e=a0_0xeb59,_0x49e50c=_0x1eb37b();while(!![]){try{const _0x2b86d4=-parseInt(_0x185e4e(0x1aa))/0x1+parseInt(_0x185e4e(0x1cf))/0x2+parseInt(_0x185e4e(0x1b4))/0x3*(-parseInt(_0x185e4e(0x1ce))/0x4)+-parseInt(_0x185e4e(0x1af))/0x5+parseInt(_0x185e4e(0x19f))/0x6*(-parseInt(_0x185e4e(0x1df))/0x7)+parseInt(_0x185e4e(0x1ad))/0x8+parseInt(_0x185e4e(0x1c2))/0x9;if(_0x2b86d4===_0x42189e)break;else _0x49e50c['push'](_0x49e50c['shift']());}catch(_0x56b5ec){_0x49e50c['push'](_0x49e50c['shift']());}}}(a0_0x562c,0x781c5));import{promises}from'fs';import{join}from'path';import{xpRange}from'../lib/levelling.js';function a0_0xeb59(_0x1e7058,_0x16a03a){const _0x562c66=a0_0x562c();return a0_0xeb59=function(_0xeb59d0,_0x10dfde){_0xeb59d0=_0xeb59d0-0x19d;let _0x114b10=_0x562c66[_0xeb59d0];return _0x114b10;},a0_0xeb59(_0x1e7058,_0x16a03a);}let tags={'main':'🜲\x20ACERCA\x20DE','info':'📜\x20INFO','game':a0_0x1fb368(0x1d0),'downloader':'📥\x20DESCARGAS','econ':a0_0x1fb368(0x1c5),'sticker':a0_0x1fb368(0x1a4),'audio':'🎧\x20AUDIO','search':a0_0x1fb368(0x1b1),'convertidores':a0_0x1fb368(0x1c6),'group':a0_0x1fb368(0x1cc),'tools':a0_0x1fb368(0x1a2),'fun':a0_0x1fb368(0x1d9),'database':'🗄\x20DATABASE','xp':a0_0x1fb368(0x1a7),'owner':a0_0x1fb368(0x19e),'netfree':a0_0x1fb368(0x1ac)};const more=String['fromCharCode'](0x200e),readMore=more[a0_0x1fb368(0x1b8)](0x1388),defaultMenu={'before':('\x0a╔══════✦❘༻༺❘✦══════╗\x0aㅤ\x20*🜲SYSTEM\x20OF\x20SHADOWS🜲*\x0a\x0a*🜲\x20Usuario:*\x20▹\x20*%name*\x20◃\x0a*⛩\x20Nivel:*\x20▹\x20%level\x20◃\x0a*🎭\x20Rango:*\x20▹\x20%totalreg\x20◃\x0a*⏳\x20Tiempo\x20activo:*\x20▹\x20%muptime\x20◃\x0a\x0a╚══════✦❘༻༺❘✦══════╝\x0a「\x20*CONTACTO\x20DEL\x20MONARCA*\x20」\x0a»\x20@SinNombre:\x20https://wa.me/5215629885039\x0a\x0a◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈\x0a\x20\x20\x20\x20\x20\x20\x20\x20*🜲\x20CATEGORÍAS\x20DISPONIBLES\x20🜲*\x0a'+readMore+'\x0a')[a0_0x1fb368(0x1bc)](),'header':'┌───『\x20➢\x20%category\x20\x20』','body':a0_0x1fb368(0x1c8),'footer':a0_0x1fb368(0x1a0),'after':a0_0x1fb368(0x1c4)['trim']()};let handler=async(_0xc17585,{conn:_0x177489,__dirname:_0x39e211})=>{const _0x5111f7=a0_0x1fb368;try{let _0x381ba4=await _0x177489[_0x5111f7(0x1d2)](_0xc17585[_0x5111f7(0x1b0)]),_0x3d3acf=Object[_0x5111f7(0x1c3)](global['db'][_0x5111f7(0x1bd)][_0x5111f7(0x1d1)])['length'],_0x11eb3b=formatUptime(process[_0x5111f7(0x1bb)]()),{level:_0xb93cc3}=global['db'][_0x5111f7(0x1bd)][_0x5111f7(0x1d1)][_0xc17585[_0x5111f7(0x1b0)]],_0x8dffa=Object[_0x5111f7(0x1a8)](global['plugins'])['filter'](_0x195bb9=>!_0x195bb9[_0x5111f7(0x1a9)])['map'](_0x406c94=>({'help':Array['isArray'](_0x406c94['help'])?_0x406c94[_0x5111f7(0x1c0)]:[_0x406c94[_0x5111f7(0x1c0)]],'tags':Array[_0x5111f7(0x1a3)](_0x406c94[_0x5111f7(0x1d7)])?_0x406c94[_0x5111f7(0x1d7)]:[_0x406c94['tags']]})),_0x13e7f8=_0xc17585[_0x5111f7(0x1b5)][_0x5111f7(0x1db)]()[_0x5111f7(0x1c7)](/^\s+|\s+$/g,'')[_0x5111f7(0x1be)](/\s+/),_0x57a451=_0x13e7f8[0x1]?_0x13e7f8[0x1][_0x5111f7(0x1a5)]():null;if(!_0x57a451){let _0x3433a2=Object[_0x5111f7(0x1c3)](tags)[_0x5111f7(0x1b2)](_0x1b03a2=>_0x5111f7(0x1b7)+tags[_0x1b03a2][_0x5111f7(0x1d6)]()+_0x5111f7(0x1cd)+_0x1b03a2+'\x0a└───⮞───────✦')['join']('\x0a'),_0x1fcf6c=[defaultMenu[_0x5111f7(0x1c1)][_0x5111f7(0x1c7)](_0x5111f7(0x1dc),_0x381ba4)[_0x5111f7(0x1c7)](_0x5111f7(0x1a6),_0xb93cc3)[_0x5111f7(0x1c7)](_0x5111f7(0x1bf),_0x3d3acf)[_0x5111f7(0x1c7)](_0x5111f7(0x1ca),_0x11eb3b),_0x3433a2,defaultMenu[_0x5111f7(0x1cb)]][_0x5111f7(0x1d5)]('\x0a');return _0x177489[_0x5111f7(0x1b3)](_0xc17585[_0x5111f7(0x1b9)],{'video':{'url':_0x5111f7(0x1e0)},'gifPlayback':!![],'caption':_0x1fcf6c[_0x5111f7(0x1db)]()},{'quoted':_0xc17585});}if(tags[_0x57a451]){let _0x303c55=_0x8dffa['filter'](_0x30f2df=>_0x30f2df[_0x5111f7(0x1d7)][_0x5111f7(0x1ae)](_0x57a451))[_0x5111f7(0x1b2)](_0x3ae2b9=>_0x3ae2b9['help']['map'](_0x28223e=>_0x5111f7(0x1da)+_0x28223e)[_0x5111f7(0x1d5)]('\x0a'))[_0x5111f7(0x1d5)]('\x0a'),_0x3c9e5d=[defaultMenu[_0x5111f7(0x19d)]['replace'](_0x5111f7(0x1ab),tags[_0x57a451][_0x5111f7(0x1d6)]()),_0x303c55,defaultMenu[_0x5111f7(0x1d8)]]['join']('\x0a');return _0x177489['sendFile'](_0xc17585[_0x5111f7(0x1b9)],_0x5111f7(0x1dd),_0x5111f7(0x1a1),_0x3c9e5d['trim'](),_0xc17585);}}catch(_0x44c646){_0x177489['reply'](_0xc17585['chat'],_0x5111f7(0x1ba),_0xc17585);throw _0x44c646;}};function formatUptime(_0x5e4336){const _0x140ac2=a0_0x1fb368;let _0x30c2fc=Math[_0x140ac2(0x1de)](_0x5e4336/0xe10),_0x462a75=Math[_0x140ac2(0x1de)](_0x5e4336%0xe10/0x3c),_0x4d13b0=Math['floor'](_0x5e4336%0x3c);return _0x30c2fc+'h\x20'+_0x462a75+'m\x20'+_0x4d13b0+'s';}handler['help']=[a0_0x1fb368(0x1c9)],handler[a0_0x1fb368(0x1b6)]=/^menu|menú|arise|despertar/i,handler[a0_0x1fb368(0x1d3)]=![],handler[a0_0x1fb368(0x1d4)]=![];export default handler;function a0_0x562c(){const _0xcf133d=['4493320ZfzFHP','sender','🔍\x20BUSQUEDA','map','sendMessage','6EAYsXT','text','command','┌───『\x20\x20','repeat','chat','❎\x20Lo\x20sentimos,\x20el\x20menú\x20tiene\x20un\x20error','uptime','trimStart','data','split','%totalreg','help','before','6146433nyPhWH','keys','\x0a◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈\x0a*«\x20El\x20débil\x20no\x20tiene\x20derecho\x20a\x20elegir\x20cómo\x20morirá\x20»*\x0a','💰\x20ECONOMIA','🔄\x20CONVERTIDORES','replace','│\x20➢\x20.%command','arise','%muptime','after','👥\x20GRUPO','\x20\x20』\x0a│\x20➢\x20.menu\x20','648696jLWTxm','1520416Cukbsp','🎮\x20JUEGOS','users','getName','register','rowner','join','toUpperCase','tags','footer','🎉\x20FUN','│\x20➢\x20.','trim','%name','./src/comandos.png','floor','49NHVtLY','./src/MenuJin-wo.gif','header','👑\x20OWNER','147276GePpCI','└──────────✦\x0a','comandos.png','🛠\x20TOOLS','isArray','🖼\x20STICKER','toLowerCase','%level','⚔️\x20NIVEL','values','disabled','87960kQMJmY','%category','🌐\x20TOOLS\x20NETFREE','4252976RrTusY','includes'];a0_0x562c=function(){return _0xcf133d;};return a0_0x562c();}