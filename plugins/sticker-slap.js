const a0_0x12c0bc=a0_0x1aba;(function(_0x51fbb6,_0x4ecc55){const _0x23d3e9=a0_0x1aba,_0x23cda1=_0x51fbb6();while(!![]){try{const _0x4db7e1=-parseInt(_0x23d3e9(0x164))/0x1+parseInt(_0x23d3e9(0x160))/0x2*(parseInt(_0x23d3e9(0x156))/0x3)+-parseInt(_0x23d3e9(0x152))/0x4*(-parseInt(_0x23d3e9(0x14c))/0x5)+-parseInt(_0x23d3e9(0x15f))/0x6+parseInt(_0x23d3e9(0x168))/0x7+-parseInt(_0x23d3e9(0x166))/0x8*(parseInt(_0x23d3e9(0x162))/0x9)+parseInt(_0x23d3e9(0x14a))/0xa;if(_0x4db7e1===_0x4ecc55)break;else _0x23cda1['push'](_0x23cda1['shift']());}catch(_0x37a34e){_0x23cda1['push'](_0x23cda1['shift']());}}}(a0_0x3519,0x71405));function a0_0x1aba(_0x580af0,_0xff33d3){const _0x351934=a0_0x3519();return a0_0x1aba=function(_0x1abaf8,_0x33ec01){_0x1abaf8=_0x1abaf8-0x14a;let _0x575356=_0x351934[_0x1abaf8];return _0x575356;},a0_0x1aba(_0x580af0,_0xff33d3);}import{sticker}from'../lib/sticker.js';import a0_0x6381c9 from'node-fetch';function a0_0x3519(){const _0x519738=['24VgBYav','data','2901822erKHxU','https://api.waifu.pics/sfw/slap','sender','5188770ifeyYi','reply','5fMIUtx','mentionedJid','tags','texto1','.json','isGroup','1870712CqMDOI','getName','\x20le\x20dio\x20una\x20bofetada\x20a\x20','./language/','3ClLVzl','json','chat','users','\x0a◉\x20','plugins','sticker_slap','language','texto2','3770148HpXkSl','1501268ZzPLQM','quoted','893124NjjLOx','command','761792PKazhL','suittag'];a0_0x3519=function(){return _0x519738;};return a0_0x3519();}const handler=async(_0x589af8,{conn:_0x4c3794,args:_0x7d4703,usedPrefix:_0x301ca5,command:_0x157337})=>{const _0x51f161=a0_0x1aba,_0x2eb9b5=global,_0xbb39a4=_0x2eb9b5['db'][_0x51f161(0x167)][_0x51f161(0x159)][_0x589af8['sender']][_0x51f161(0x15d)],_0x1c3f50=JSON['parse'](fs['readFileSync'](_0x51f161(0x155)+_0xbb39a4+_0x51f161(0x150))),_0x314536=_0x1c3f50[_0x51f161(0x15b)][_0x51f161(0x15c)];let _0x2d8e13;_0x589af8['isGroup']?_0x2d8e13=_0x589af8[_0x51f161(0x14d)][0x0]?_0x589af8['mentionedJid'][0x0]:_0x589af8['quoted']?_0x589af8[_0x51f161(0x161)]['sender']:![]:_0x2d8e13=_0x589af8[_0x51f161(0x158)];const _0x360e14=_0x314536[_0x51f161(0x14f)]+_0x51f161(0x15a)+(_0x301ca5+_0x157337)+'\x20@'+global[_0x51f161(0x165)];if(_0x2d8e13===_0x589af8[_0x51f161(0x158)]&&_0x589af8[_0x51f161(0x151)]||!_0x2d8e13&&_0x589af8[_0x51f161(0x151)])return _0x589af8[_0x51f161(0x14b)](_0x360e14,_0x589af8['chat'],{'mentions':_0x4c3794['parseMention'](_0x360e14)});try{let _0x4e7536;_0x2d8e13===_0x589af8[_0x51f161(0x158)]?_0x4e7536='Sung\x20Jin-Woo':_0x4e7536=_0x4c3794[_0x51f161(0x153)](_0x2d8e13);let _0x2a2ad1=_0x4c3794['getName'](_0x589af8[_0x51f161(0x16a)]),_0x5a758f=await a0_0x6381c9(_0x51f161(0x169)),_0x208ac3=await _0x5a758f[_0x51f161(0x157)](),{url:_0x36d73b}=_0x208ac3,_0x486a7e=await sticker(null,_0x36d73b,_0x2a2ad1+_0x51f161(0x154)+_0x4e7536,null);_0x4c3794['sendFile'](_0x589af8['chat'],_0x486a7e,null,{'asSticker':!![]},_0x589af8,!![],{'contextInfo':{'forwardingScore':0xc8,'isForwarded':!![]}},{'quoted':_0x589af8});}catch{throw _0x314536[_0x51f161(0x15e)];};};handler['help']=['slap'],handler[a0_0x12c0bc(0x14e)]=['sticker'],handler[a0_0x12c0bc(0x163)]=/^(slap|bofetada)$/i;export default handler;