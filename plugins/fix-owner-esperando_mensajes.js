const a0_0x2d6037=a0_0x16de;(function(_0x576233,_0xd5a626){const _0x2960c8=a0_0x16de,_0x574189=_0x576233();while(!![]){try{const _0x35327e=-parseInt(_0x2960c8(0x141))/0x1+parseInt(_0x2960c8(0x13f))/0x2*(-parseInt(_0x2960c8(0x13a))/0x3)+-parseInt(_0x2960c8(0x128))/0x4*(-parseInt(_0x2960c8(0x146))/0x5)+-parseInt(_0x2960c8(0x126))/0x6+parseInt(_0x2960c8(0x124))/0x7+parseInt(_0x2960c8(0x139))/0x8+parseInt(_0x2960c8(0x132))/0x9*(parseInt(_0x2960c8(0x13e))/0xa);if(_0x35327e===_0xd5a626)break;else _0x574189['push'](_0x574189['shift']());}catch(_0x3ad0b9){_0x574189['push'](_0x574189['shift']());}}}(a0_0x359e,0x88455));import{readdirSync,unlinkSync,existsSync,promises as a0_0x37061c,rmSync,readFileSync}from'fs';import a0_0x31ee31 from'path';const handler=async(_0x12b820,{conn:_0x3a2753,usedPrefix:_0x22516e})=>{const _0x22dde0=a0_0x16de,_0x5e66cc=global,_0x51d467=_0x5e66cc['db'][_0x22dde0(0x12a)][_0x22dde0(0x127)][_0x12b820['sender']][_0x22dde0(0x13d)],_0x145075=JSON[_0x22dde0(0x144)](readFileSync('./language/'+_0x51d467+_0x22dde0(0x13c))),_0x5795b9=_0x145075[_0x22dde0(0x135)][_0x22dde0(0x131)];if(global[_0x22dde0(0x140)][_0x22dde0(0x138)][_0x22dde0(0x12f)]!==_0x3a2753['user'][_0x22dde0(0x12f)])return _0x3a2753['sendMessage'](_0x12b820[_0x22dde0(0x136)],{'text':_0x5795b9[_0x22dde0(0x129)]},{'quoted':_0x12b820});await _0x3a2753['sendMessage'](_0x12b820[_0x22dde0(0x136)],{'text':_0x5795b9[_0x22dde0(0x125)]},{'quoted':_0x12b820});const _0xf2e938=_0x22dde0(0x13b);try{if(!existsSync(_0xf2e938))return await _0x3a2753['sendMessage'](_0x12b820['chat'],{'text':_0x5795b9[_0x22dde0(0x12e)]},{'quoted':_0x12b820});const _0x53b7aa=await a0_0x37061c['readdir'](_0xf2e938);let _0x3ba117=0x0;for(const _0x3993d9 of _0x53b7aa){_0x3993d9!==_0x22dde0(0x143)&&(await a0_0x37061c[_0x22dde0(0x12c)](a0_0x31ee31[_0x22dde0(0x148)](_0xf2e938,_0x3993d9)),_0x3ba117++);}_0x3ba117===0x0?await _0x3a2753[_0x22dde0(0x137)](_0x12b820[_0x22dde0(0x136)],{'text':_0x5795b9[_0x22dde0(0x133)]},{'quoted':_0x12b820}):await _0x3a2753['sendMessage'](_0x12b820['chat'],{'text':_0x5795b9[_0x22dde0(0x147)][0x0]+'\x20'+_0x3ba117+'\x20'+_0x5795b9[_0x22dde0(0x147)][0x1]},{'quoted':_0x12b820});}catch(_0x36b2d8){console['error'](_0x22dde0(0x145),_0x36b2d8),await _0x3a2753[_0x22dde0(0x137)](_0x12b820[_0x22dde0(0x136)],{'text':_0x5795b9[_0x22dde0(0x142)]},{'quoted':_0x12b820});}await _0x3a2753[_0x22dde0(0x137)](_0x12b820[_0x22dde0(0x136)],{'text':_0x5795b9['texto7']+'\x0a'+_0x22516e+'s\x0a'+_0x22516e+'s\x0a'+_0x22516e+'s'},{'quoted':_0x12b820});};function a0_0x359e(){const _0x15a477=['./Jinwoosesion/','.json','language','53320SGgIJk','18QboxYx','conn','594357kSbhxy','texto6','creds.json','parse','Error\x20al\x20leer\x20la\x20carpeta\x20o\x20los\x20archivos\x20de\x20sesión:','41350cQulhJ','texto5','join','1816472bCUcjc','texto2','4993692ORjdsK','users','168UEeeMJ','texto1','data','command','unlink','owner','texto3','jid','help','fix_owner_esperando_mensajes','2268VqLFeL','texto4','tags','plugins','chat','sendMessage','user','1359904vDIqIG','45228zVbDjP'];a0_0x359e=function(){return _0x15a477;};return a0_0x359e();}handler[a0_0x2d6037(0x130)]=['dsowner'],handler[a0_0x2d6037(0x134)]=[a0_0x2d6037(0x12d)],handler[a0_0x2d6037(0x12b)]=/^(del_reg_in_session_owner|dsowner|clearallsession)$/i,handler['rowner']=!![];function a0_0x16de(_0x5cf0a9,_0x3b0709){const _0x359e3c=a0_0x359e();return a0_0x16de=function(_0x16de3e,_0xf51b1){_0x16de3e=_0x16de3e-0x124;let _0x47ebc6=_0x359e3c[_0x16de3e];return _0x47ebc6;},a0_0x16de(_0x5cf0a9,_0x3b0709);}export default handler;