const a0_0x437b9a=a0_0x3a92;(function(_0x59700f,_0x46497b){const _0x33dadc=a0_0x3a92,_0x269cee=_0x59700f();while(!![]){try{const _0x48784e=-parseInt(_0x33dadc(0xf5))/0x1+parseInt(_0x33dadc(0x10f))/0x2+-parseInt(_0x33dadc(0xfc))/0x3*(-parseInt(_0x33dadc(0x113))/0x4)+-parseInt(_0x33dadc(0x107))/0x5*(-parseInt(_0x33dadc(0x109))/0x6)+-parseInt(_0x33dadc(0xf7))/0x7+parseInt(_0x33dadc(0xf3))/0x8*(parseInt(_0x33dadc(0x10b))/0x9)+-parseInt(_0x33dadc(0xf9))/0xa;if(_0x48784e===_0x46497b)break;else _0x269cee['push'](_0x269cee['shift']());}catch(_0x3de683){_0x269cee['push'](_0x269cee['shift']());}}}(a0_0x3e29,0x213cd));import*as a0_0x5c8d42 from'@sefinek/google-tts-api';import{readFileSync,unlinkSync}from'fs';function a0_0x3a92(_0x2526f9,_0x200b82){const _0x3e2985=a0_0x3e29();return a0_0x3a92=function(_0x3a923e,_0x2a3c68){_0x3a923e=_0x3a923e-0xf2;let _0xd50d0c=_0x3e2985[_0x3a923e];return _0xd50d0c;},a0_0x3a92(_0x2526f9,_0x200b82);}import{join}from'path';function a0_0x3e29(){const _0xc53101=['2483640EScsKB','plugins','./language/','6nFFRwE','language','parse','sendPresenceUpdate','texto1','length','reply','__dirname','recording','text','convertidor_tts','930WAhjBV','save','474HcQfnb','.wav','27AFdhdi','quoted','getAudioUrl','join','414754jYjBvU','tags','sender','help','441252vbBDKn','url','users','convertidores','699792sVxCYo','chat','219643hGdlNF','../tmp','706797REiPWN','.json'];a0_0x3e29=function(){return _0xc53101;};return a0_0x3e29();}const defaultLang='es',handler=async(_0x32a1da,{conn:_0x240cbb,args:_0x9a9c91,usedPrefix:_0xe6b8e5,command:_0x225e0b})=>{const _0x1125af=a0_0x3a92,_0x3f9eff=global,_0x320ae0=_0x3f9eff['db']['data'][_0x1125af(0x115)][_0x32a1da[_0x1125af(0x111)]][_0x1125af(0xfd)],_0x1109d7=JSON[_0x1125af(0xfe)](fs['readFileSync'](_0x1125af(0xfb)+_0x320ae0+_0x1125af(0xf8))),_0x26f0f3=_0x1109d7[_0x1125af(0xfa)][_0x1125af(0x106)];let _0x19b9dd=_0x9a9c91[0x0],_0x4a94a1=_0x9a9c91['slice'](0x1)[_0x1125af(0x10e)]('\x20');(_0x9a9c91[0x0]||'')[_0x1125af(0x101)]!==0x2&&(_0x19b9dd=defaultLang,_0x4a94a1=_0x9a9c91[_0x1125af(0x10e)]('\x20'));if(!_0x4a94a1&&_0x32a1da[_0x1125af(0x10c)]?.['text'])_0x4a94a1=_0x32a1da['quoted'][_0x1125af(0x105)];let _0x5e6b0d;try{_0x5e6b0d=a0_0x5c8d42[_0x1125af(0x10d)](_0x4a94a1,{'lang':_0x19b9dd||'es','slow':![],'host':'https://translate.google.com'});}catch(_0x52f70a){_0x32a1da[_0x1125af(0x102)](_0x52f70a+''),_0x4a94a1=_0x9a9c91[_0x1125af(0x10e)]('\x20');if(!_0x4a94a1)throw'*'+_0x26f0f3[_0x1125af(0x100)][0x0]+'\x20'+(_0xe6b8e5+_0x225e0b)+'\x20'+_0x26f0f3[_0x1125af(0x100)][0x1]+'*';_0x5e6b0d=await tts(_0x4a94a1,defaultLang);}finally{_0x5e6b0d&&(_0x240cbb[_0x1125af(0xff)](_0x1125af(0x104),_0x32a1da[_0x1125af(0xf4)]),_0x240cbb['sendMessage'](_0x32a1da['chat'],{'audio':{'url':_0x5e6b0d},'fileName':'tts.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x32a1da}));}};handler[a0_0x437b9a(0x112)]=['voz\x20<idioma>\x20<texto>'],handler[a0_0x437b9a(0x110)]=[a0_0x437b9a(0xf2)],handler['command']=/^voz$/i;export default handler;function tts(_0x5bc40c,_0x25cddb='es'){return new Promise((_0x331ce4,_0x50faec)=>{const _0x33dd15=a0_0x3a92;try{const _0x42f56a=gtts(_0x25cddb),_0x3663e2=join(global[_0x33dd15(0x103)](import.meta[_0x33dd15(0x114)]),_0x33dd15(0xf6),0x1*new Date()+_0x33dd15(0x10a));_0x42f56a[_0x33dd15(0x108)](_0x3663e2,_0x5bc40c,()=>{_0x331ce4(readFileSync(_0x3663e2)),unlinkSync(_0x3663e2);});}catch(_0x5dfdc5){_0x50faec(_0x5dfdc5);}});}