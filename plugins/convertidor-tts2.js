const a0_0x1d1deb=a0_0x2411;(function(_0x39109a,_0x352fdf){const _0x4f59dd=a0_0x2411,_0x3fc5ec=_0x39109a();while(!![]){try{const _0x55b7c5=parseInt(_0x4f59dd(0x8c))/0x1+-parseInt(_0x4f59dd(0x86))/0x2+-parseInt(_0x4f59dd(0xa3))/0x3*(-parseInt(_0x4f59dd(0xb6))/0x4)+-parseInt(_0x4f59dd(0xaf))/0x5*(parseInt(_0x4f59dd(0x89))/0x6)+parseInt(_0x4f59dd(0x95))/0x7*(parseInt(_0x4f59dd(0xa4))/0x8)+parseInt(_0x4f59dd(0xa6))/0x9*(-parseInt(_0x4f59dd(0x91))/0xa)+-parseInt(_0x4f59dd(0xb0))/0xb*(-parseInt(_0x4f59dd(0xba))/0xc);if(_0x55b7c5===_0x352fdf)break;else _0x3fc5ec['push'](_0x3fc5ec['shift']());}catch(_0x31bc90){_0x3fc5ec['push'](_0x3fc5ec['shift']());}}}(a0_0x59a4,0x1b04f));import a0_0x135dc7 from'axios';import a0_0x48d618 from'node-fetch';import a0_0x309ac9 from'fs';const handler=async(_0x35db66,{conn:_0x1c3ab3,usedPrefix:_0x1dba9b,command:_0x112b3b,text:_0x445134,args:_0x3a0b51})=>{const _0x54c700=a0_0x2411,_0x3353f1=global,_0x39afa7=_0x3353f1['db'][_0x54c700(0xaa)][_0x54c700(0xb7)][_0x35db66[_0x54c700(0xb4)]]['language'],_0x38f002=JSON['parse'](a0_0x309ac9[_0x54c700(0x9e)](_0x54c700(0xb3)+_0x39afa7+'.json')),_0x42a91d=_0x38f002[_0x54c700(0xa0)][_0x54c700(0xac)],[_0xf7c419,..._0x2fb242]=_0x445134['split']('\x20'),_0x4b4231=_0x2fb242[_0x54c700(0x88)]('\x20');if(!_0xf7c419){let _0x1d7aa0=await getVoiceList(_0x42a91d),_0x1f87c9='*'+_0x42a91d[_0x54c700(0x8b)]+'*\x0a';for(let _0x518335=0x0,_0x32da4d=0x0;_0x32da4d<0x64&&_0x518335<_0x1d7aa0['resultado']['length'];_0x518335++){const _0x4471a5=_0x1d7aa0['resultado'][_0x518335];_0x4471a5['ID']&&_0x4471a5['ID'][_0x54c700(0x9a)]<=0x14&&(_0x1f87c9+='*◉\x20'+(_0x1dba9b+_0x112b3b)+'\x20'+_0x4471a5['ID']+'\x20'+_0x42a91d[_0x54c700(0x87)]+'*\x0a',_0x32da4d++);}return _0x1c3ab3[_0x54c700(0x99)](_0x35db66[_0x54c700(0x9f)],{'text':_0x1f87c9[_0x54c700(0x98)]()},{'quoted':_0x35db66});}let _0x294f00=![],_0x2f7134=await getVoiceList(_0x42a91d);for(const _0x35bfe8 of _0x2f7134['resultado']){if(_0x35bfe8['ID']===_0xf7c419){_0x294f00=!![];break;}}if(!_0x294f00)return _0x1c3ab3['sendMessage'](_0x35db66[_0x54c700(0x9f)],{'text':'*'+_0x42a91d[_0x54c700(0xa5)][0x0]+'\x20'+(_0x1dba9b+_0x112b3b)+'\x20'+_0x42a91d[_0x54c700(0xa5)][0x1]+'*'},{'quoted':_0x35db66});if(!_0x4b4231)return _0x1c3ab3[_0x54c700(0x99)](_0x35db66[_0x54c700(0x9f)],{'text':'*'+_0x42a91d[_0x54c700(0xab)][0x0]+_0x54c700(0xa1)+(_0x1dba9b+_0x112b3b)+'\x20'+_0xf7c419+'\x20'+_0x42a91d[_0x54c700(0xab)][0x1]+'*'},{'quoted':_0x35db66});let _0x3fedee=await makeTTSRequest(_0x4b4231,_0xf7c419,_0x42a91d);_0x1c3ab3[_0x54c700(0x99)](_0x35db66[_0x54c700(0x9f)],{'audio':{'url':_0x3fedee['resultado']},'fileName':_0x54c700(0xb1),'mimetype':_0x54c700(0xa9),'ptt':!![]},{'quoted':_0x35db66});};handler['help']=[a0_0x1d1deb(0x96)],handler['tags']=['convertidores'],handler[a0_0x1d1deb(0x8f)]=/^(g?tts2)$/i;function a0_0x59a4(){const _0x18f638=['join','384fhWMFN','texto7','texto1','80880nEaATT','map','includes','command','fe2ee40099494579af0ecf871b5af266','1444750ZQJRUm','push','find','name','17605wQMIZx','gtts2','json','trim','sendMessage','length','SrgwcKcLzSY63IdsAxd1PzscFjL2','Error:','https://play.ht/api/v2/voices','readFileSync','chat','plugins','*\x0a*◉\x20','\x0d\x0a\x0d\x0a','214233fxVofE','136vsgggz','texto3','9ycZHoa','reduce','post','audio/mpeg','data','texto4','convertidor_tts2','text/event-stream','application/json','16355mdSjlW','66PjtVXu','voz.mp3','match','./language/','sender','language','4ZmlgQB','users','error','\x22stage\x22:\x22complete\x22','576036EpdFlk','37148LGRyDH','texto2'];a0_0x59a4=function(){return _0x18f638;};return a0_0x59a4();}export default handler;const secretKey=a0_0x1d1deb(0x90),userId=a0_0x1d1deb(0x9b);function a0_0x2411(_0x4508e4,_0xc49f0e){const _0x59a41a=a0_0x59a4();return a0_0x2411=function(_0x241114,_0x7ee305){_0x241114=_0x241114-0x86;let _0x6e5358=_0x59a41a[_0x241114];return _0x6e5358;},a0_0x2411(_0x4508e4,_0xc49f0e);}async function getVoiceList(_0x4c551a){const _0x54ce79=a0_0x1d1deb,_0x4e71a1=_0x54ce79(0x9d),_0x3b2f81={'method':'GET','headers':{'accept':'application/json','AUTHORIZATION':'Bearer\x20'+secretKey,'X-USER-ID':userId}};try{const _0x54268b=await a0_0x48d618(_0x4e71a1,_0x3b2f81),_0x32d3e0=await _0x54268b[_0x54ce79(0x97)](),_0x519e87=_0x32d3e0[_0x54ce79(0xa7)]((_0x12d01b,_0x23dbd1)=>{const _0x594af9=_0x54ce79;return!_0x12d01b['some'](_0x12076f=>_0x12076f['id']===_0x23dbd1['id'])&&_0x12d01b[_0x594af9(0x92)](_0x23dbd1),_0x12d01b;},[]),_0x310ad4=_0x519e87[_0x54ce79(0x8d)](_0x4111b5=>({'ID':_0x4111b5['id'],'name':_0x4111b5[_0x54ce79(0x94)],'lenguaje':_0x4111b5[_0x54ce79(0xb5)]}));return{'resultado':_0x310ad4[_0x54ce79(0x9a)]?_0x310ad4:[]};}catch(_0x223aea){return console[_0x54ce79(0xb8)]('Error:',_0x223aea),{'resultado':[]};}}async function makeTTSRequest(_0x3397d0,_0x2e0f13,_0x3ed2f3){const _0xb78b71=a0_0x1d1deb,_0x468b0e={'text':_0x3397d0,'voice':_0x2e0f13},_0x10a90c={'Authorization':'Bearer\x20'+secretKey,'X-User-Id':userId,'accept':_0xb78b71(0xad),'content-type':_0xb78b71(0xae)};try{const _0x4b6dc8=await a0_0x135dc7[_0xb78b71(0xa8)]('https://play.ht/api/v2/tts',_0x468b0e,{'headers':_0x10a90c}),_0x478a66=_0x4b6dc8['data']['split'](_0xb78b71(0xa2)),_0x546247=_0x478a66[_0xb78b71(0x93)](_0x10373f=>_0x10373f[_0xb78b71(0x8e)](_0xb78b71(0xb9))),_0x4c8cf3=_0x546247[_0xb78b71(0xb2)](/"url":"([^"]+)"/),_0x8c35d7=_0x4c8cf3?_0x4c8cf3[0x1]:null;return{'resultado':_0x8c35d7?_0x8c35d7:''+_0x3ed2f3[_0xb78b71(0x8a)]};}catch(_0x599928){return console[_0xb78b71(0xb8)](_0xb78b71(0x9c),_0x599928),{'resultado':'[❗]\x20Error,\x20no\x20se\x20obtuvo\x20respuesta\x20de\x20la\x20API.'};}}