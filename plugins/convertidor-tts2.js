const a0_0x101365=a0_0xd0f8;(function(_0x3207ba,_0x284c44){const _0x5a8995=a0_0xd0f8,_0x3ac9b8=_0x3207ba();while(!![]){try{const _0x3f1f6b=-parseInt(_0x5a8995(0x1f0))/0x1+-parseInt(_0x5a8995(0x1e0))/0x2*(-parseInt(_0x5a8995(0x206))/0x3)+-parseInt(_0x5a8995(0x1eb))/0x4*(-parseInt(_0x5a8995(0x1ec))/0x5)+-parseInt(_0x5a8995(0x1f2))/0x6+parseInt(_0x5a8995(0x1e7))/0x7*(parseInt(_0x5a8995(0x1ed))/0x8)+parseInt(_0x5a8995(0x1fb))/0x9+parseInt(_0x5a8995(0x1fd))/0xa*(-parseInt(_0x5a8995(0x1e9))/0xb);if(_0x3f1f6b===_0x284c44)break;else _0x3ac9b8['push'](_0x3ac9b8['shift']());}catch(_0x4b34c4){_0x3ac9b8['push'](_0x3ac9b8['shift']());}}}(a0_0x4526,0x4a38b));import a0_0x106f8c from'axios';import a0_0x28d6a5 from'node-fetch';import a0_0x4c8ee6 from'fs';const handler=async(_0x26ee40,{conn:_0x2ea22c,usedPrefix:_0x23eac2,command:_0x4eda06,text:_0xb543f1,args:_0x283039})=>{const _0x2c251b=a0_0xd0f8,_0x55ede9=global,_0xb387c5=_0x55ede9['db'][_0x2c251b(0x1f7)][_0x2c251b(0x1e3)][_0x26ee40[_0x2c251b(0x209)]]['language'],_0x13e405=JSON['parse'](a0_0x4c8ee6['readFileSync'](_0x2c251b(0x1fa)+_0xb387c5+_0x2c251b(0x1e1))),_0x3ba61f=_0x13e405['plugins']['convertidor_tts2'],[_0x231f18,..._0x314466]=_0xb543f1[_0x2c251b(0x1f5)]('\x20'),_0x208ea6=_0x314466[_0x2c251b(0x20c)]('\x20');if(!_0x231f18){let _0x169eae=await getVoiceList(_0x3ba61f),_0x423d21='*'+_0x3ba61f[_0x2c251b(0x1e2)]+'*\x0a';for(let _0x17c969=0x0,_0xeedd2=0x0;_0xeedd2<0x64&&_0x17c969<_0x169eae[_0x2c251b(0x1e8)][_0x2c251b(0x1ea)];_0x17c969++){const _0x36d836=_0x169eae['resultado'][_0x17c969];_0x36d836['ID']&&_0x36d836['ID'][_0x2c251b(0x1ea)]<=0x14&&(_0x423d21+=_0x2c251b(0x20d)+(_0x23eac2+_0x4eda06)+'\x20'+_0x36d836['ID']+'\x20'+_0x3ba61f['texto2']+'*\x0a',_0xeedd2++);}return _0x2ea22c[_0x2c251b(0x1f1)](_0x26ee40[_0x2c251b(0x1f3)],{'text':_0x423d21['trim']()},{'quoted':_0x26ee40});}let _0x57af44=![],_0x5af10c=await getVoiceList(_0x3ba61f);for(const _0x3fa3f9 of _0x5af10c[_0x2c251b(0x1e8)]){if(_0x3fa3f9['ID']===_0x231f18){_0x57af44=!![];break;}}if(!_0x57af44)return _0x2ea22c[_0x2c251b(0x1f1)](_0x26ee40[_0x2c251b(0x1f3)],{'text':'*'+_0x3ba61f[_0x2c251b(0x208)][0x0]+'\x20'+(_0x23eac2+_0x4eda06)+'\x20'+_0x3ba61f['texto3'][0x1]+'*'},{'quoted':_0x26ee40});if(!_0x208ea6)return _0x2ea22c[_0x2c251b(0x1f1)](_0x26ee40[_0x2c251b(0x1f3)],{'text':'*'+_0x3ba61f['texto4'][0x0]+'*\x0a*◉\x20'+(_0x23eac2+_0x4eda06)+'\x20'+_0x231f18+'\x20'+_0x3ba61f[_0x2c251b(0x1ef)][0x1]+'*'},{'quoted':_0x26ee40});let _0xf46485=await makeTTSRequest(_0x208ea6,_0x231f18,_0x3ba61f);_0x2ea22c[_0x2c251b(0x1f1)](_0x26ee40[_0x2c251b(0x1f3)],{'audio':{'url':_0xf46485[_0x2c251b(0x1e8)]},'fileName':'voz.mp3','mimetype':_0x2c251b(0x201),'ptt':!![]},{'quoted':_0x26ee40});};function a0_0x4526(){const _0x2698f8=['audio/mpeg','error','some','Bearer\x20','map','95892YlHBQe','\x0d\x0a\x0d\x0a','texto3','sender','json','fe2ee40099494579af0ecf871b5af266','join','*◉\x20','command','16qNVgaU','.json','texto1','users','convertidores','texto7','application/json','3731133wVmTtW','resultado','7416629epzQah','length','4cObLHl','2504265xkmEzs','8IxkJnf','language','texto4','573782rEGAZc','sendMessage','109746otyUyI','chat','includes','split','[❗]\x20Error,\x20no\x20se\x20obtuvo\x20respuesta\x20de\x20la\x20API.','data','find','push','./language/','2526651RBVTjs','gtts2','10CqeMAr','tags','Error:','https://play.ht/api/v2/tts'];a0_0x4526=function(){return _0x2698f8;};return a0_0x4526();}handler['help']=[a0_0x101365(0x1fc)],handler[a0_0x101365(0x1fe)]=[a0_0x101365(0x1e4)],handler[a0_0x101365(0x1df)]=/^(g?tts2)$/i;export default handler;const secretKey=a0_0x101365(0x20b),userId='SrgwcKcLzSY63IdsAxd1PzscFjL2';function a0_0xd0f8(_0x3038c8,_0x4b83a7){const _0x4526b6=a0_0x4526();return a0_0xd0f8=function(_0xd0f830,_0x2af0e0){_0xd0f830=_0xd0f830-0x1df;let _0x46b7ac=_0x4526b6[_0xd0f830];return _0x46b7ac;},a0_0xd0f8(_0x3038c8,_0x4b83a7);}async function getVoiceList(_0x5bbfcd){const _0x4e08e3=a0_0x101365,_0x5ec9f9='https://play.ht/api/v2/voices',_0x54d672={'method':'GET','headers':{'accept':'application/json','AUTHORIZATION':'Bearer\x20'+secretKey,'X-USER-ID':userId}};try{const _0x18f0df=await a0_0x28d6a5(_0x5ec9f9,_0x54d672),_0x3106f7=await _0x18f0df[_0x4e08e3(0x20a)](),_0x58e861=_0x3106f7['reduce']((_0x5db3fe,_0x2587f4)=>{const _0x1a552f=_0x4e08e3;return!_0x5db3fe[_0x1a552f(0x203)](_0x4b9825=>_0x4b9825['id']===_0x2587f4['id'])&&_0x5db3fe[_0x1a552f(0x1f9)](_0x2587f4),_0x5db3fe;},[]),_0x116d03=_0x58e861[_0x4e08e3(0x205)](_0x156276=>({'ID':_0x156276['id'],'name':_0x156276['name'],'lenguaje':_0x156276[_0x4e08e3(0x1ee)]}));return{'resultado':_0x116d03[_0x4e08e3(0x1ea)]?_0x116d03:[]};}catch(_0x45eac3){return console[_0x4e08e3(0x202)](_0x4e08e3(0x1ff),_0x45eac3),{'resultado':[]};}}async function makeTTSRequest(_0x5e0d28,_0x38be4d,_0x2bd20e){const _0x5eaaec=a0_0x101365,_0x4dc83a={'text':_0x5e0d28,'voice':_0x38be4d},_0x47a944={'Authorization':_0x5eaaec(0x204)+secretKey,'X-User-Id':userId,'accept':'text/event-stream','content-type':_0x5eaaec(0x1e6)};try{const _0x450fc6=await a0_0x106f8c['post'](_0x5eaaec(0x200),_0x4dc83a,{'headers':_0x47a944}),_0x4b44b5=_0x450fc6[_0x5eaaec(0x1f7)][_0x5eaaec(0x1f5)](_0x5eaaec(0x207)),_0xe86c6b=_0x4b44b5[_0x5eaaec(0x1f8)](_0x3057ce=>_0x3057ce[_0x5eaaec(0x1f4)]('\x22stage\x22:\x22complete\x22')),_0x142c3e=_0xe86c6b['match'](/"url":"([^"]+)"/),_0x43489e=_0x142c3e?_0x142c3e[0x1]:null;return{'resultado':_0x43489e?_0x43489e:''+_0x2bd20e[_0x5eaaec(0x1e5)]};}catch(_0x26d69c){return console['error'](_0x5eaaec(0x1ff),_0x26d69c),{'resultado':_0x5eaaec(0x1f6)};}}