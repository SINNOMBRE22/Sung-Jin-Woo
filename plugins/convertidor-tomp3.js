const a0_0x5603d7=a0_0x3234;(function(_0x4ed079,_0x16cbc0){const _0x800245=a0_0x3234,_0x35db30=_0x4ed079();while(!![]){try{const _0x4453c5=-parseInt(_0x800245(0x1a5))/0x1+parseInt(_0x800245(0x193))/0x2*(-parseInt(_0x800245(0x1ab))/0x3)+parseInt(_0x800245(0x19e))/0x4+parseInt(_0x800245(0x196))/0x5*(-parseInt(_0x800245(0x194))/0x6)+parseInt(_0x800245(0x19c))/0x7*(parseInt(_0x800245(0x1aa))/0x8)+parseInt(_0x800245(0x1af))/0x9*(parseInt(_0x800245(0x19f))/0xa)+parseInt(_0x800245(0x1ac))/0xb*(-parseInt(_0x800245(0x1a8))/0xc);if(_0x4453c5===_0x16cbc0)break;else _0x35db30['push'](_0x35db30['shift']());}catch(_0x197219){_0x35db30['push'](_0x35db30['shift']());}}}(a0_0x33c4,0x3e6d3));function a0_0x33c4(){const _0x209c1e=['1410804TbUldt','tomp3','1234096ubCoIT','3nlkBkt','22pJjByM','chat','mediaType','711YrGwyn','tags','data','test','57526xWVwwI','390lvYcwq','download','945hkWlVJ','audio/mpeg','language','toaudio','quoted','users','14cYFyIK','convertidor_tomp3','1814536JXIOoQ','14260bkUOIt','texto2','sendMessage','command','parse','.json','342931UtDpRz','texto1','mp4'];a0_0x33c4=function(){return _0x209c1e;};return a0_0x33c4();}import{toAudio}from'../lib/converter.js';function a0_0x3234(_0xded7e8,_0x3e8c74){const _0x33c47a=a0_0x33c4();return a0_0x3234=function(_0x3234b9,_0x1a95f1){_0x3234b9=_0x3234b9-0x191;let _0x2faf83=_0x33c47a[_0x3234b9];return _0x2faf83;},a0_0x3234(_0xded7e8,_0x3e8c74);}const handler=async(_0x5c0a5c,{conn:_0x42621d,usedPrefix:_0x769d48,command:_0xd3e56f})=>{const _0xc8ed6a=a0_0x3234,_0x1028a3=global,_0x97c8e4=_0x1028a3['db'][_0xc8ed6a(0x191)][_0xc8ed6a(0x19b)][_0x5c0a5c['sender']][_0xc8ed6a(0x198)],_0x66ddaa=JSON[_0xc8ed6a(0x1a3)](fs['readFileSync']('./language/'+_0x97c8e4+_0xc8ed6a(0x1a4))),_0xc583ab=_0x66ddaa['plugins'][_0xc8ed6a(0x19d)],_0x5c4ef0=_0x5c0a5c[_0xc8ed6a(0x19a)]?_0x5c0a5c['quoted']:_0x5c0a5c,_0x59084b=(_0x5c4ef0||_0x5c4ef0['msg'])['mimetype']||_0x5c4ef0[_0xc8ed6a(0x1ae)]||'';if(!/video|audio/[_0xc8ed6a(0x192)](_0x59084b))throw'*'+_0xc583ab[_0xc8ed6a(0x1a6)]+'*';const _0xabeaf=await _0x5c4ef0[_0xc8ed6a(0x195)]();if(!_0xabeaf)throw'*'+_0xc583ab[_0xc8ed6a(0x1a0)]+'*';const _0x52ca31=await toAudio(_0xabeaf,_0xc8ed6a(0x1a7));if(!_0x52ca31[_0xc8ed6a(0x191)])throw'*'+_0xc583ab['texto3']+'*';_0x42621d[_0xc8ed6a(0x1a1)](_0x5c0a5c[_0xc8ed6a(0x1ad)],{'audio':_0x52ca31[_0xc8ed6a(0x191)],'mimetype':_0xc8ed6a(0x197)},{'quoted':_0x5c0a5c});};handler['help']=[a0_0x5603d7(0x1a9)],handler[a0_0x5603d7(0x1b0)]=['convertidores'],handler['alias']=[a0_0x5603d7(0x1a9),a0_0x5603d7(0x199)],handler[a0_0x5603d7(0x1a2)]=/^to(mp3|audio)$/i;export default handler;