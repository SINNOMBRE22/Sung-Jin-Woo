const a0_0x2f01c5=a0_0x4f8a;(function(_0x14d037,_0x54ca4c){const _0x5d4283=a0_0x4f8a,_0x24b025=_0x14d037();while(!![]){try{const _0x53084c=-parseInt(_0x5d4283(0x14c))/0x1*(parseInt(_0x5d4283(0x144))/0x2)+parseInt(_0x5d4283(0x150))/0x3*(-parseInt(_0x5d4283(0x157))/0x4)+-parseInt(_0x5d4283(0x152))/0x5+parseInt(_0x5d4283(0x137))/0x6*(parseInt(_0x5d4283(0x130))/0x7)+-parseInt(_0x5d4283(0x156))/0x8*(-parseInt(_0x5d4283(0x158))/0x9)+parseInt(_0x5d4283(0x145))/0xa+-parseInt(_0x5d4283(0x13a))/0xb;if(_0x53084c===_0x54ca4c)break;else _0x24b025['push'](_0x24b025['shift']());}catch(_0x3fd337){_0x24b025['push'](_0x24b025['shift']());}}}(a0_0x3249,0x262ab));import a0_0x2283dc from'axios';import a0_0x511e4d from'cheerio';function a0_0x4f8a(_0x5d8a6f,_0x2f1c93){const _0x3249f9=a0_0x3249();return a0_0x4f8a=function(_0x4f8a57,_0x3836fc){_0x4f8a57=_0x4f8a57-0x130;let _0x456d99=_0x3249f9[_0x4f8a57];return _0x456d99;},a0_0x4f8a(_0x5d8a6f,_0x2f1c93);}let handler=async(_0x19bede,{conn:_0x2ce57a,text:_0x5542aa,usedPrefix:_0x2908c8,command:_0x1a4f4e})=>{const _0x36f98a=a0_0x4f8a;if(!_0x5542aa||!/^https?:\/\//i[_0x36f98a(0x159)](_0x5542aa[_0x36f98a(0x132)]()))throw'⚠️\x20[Error]\x20Proporciona\x20un\x20enlace\x20válido.\x0aEjemplo:\x20'+(_0x2908c8+_0x1a4f4e)+_0x36f98a(0x15a);try{const _0x275a07=await resolvePinterestLink(_0x5542aa[_0x36f98a(0x132)]());if(!_0x275a07['includes'](_0x36f98a(0x134)))throw'❗\x20Enlace\x20no\x20válido\x20de\x20Pinterest.';const {data:_0x4dfcdc}=await a0_0x2283dc[_0x36f98a(0x13c)](_0x275a07,{'headers':{'User-Agent':_0x36f98a(0x143),'Accept':_0x36f98a(0x147),'Referer':'https://www.pinterest.com/','Cookie':_0x36f98a(0x131)}}),_0x49aebb=extractMediaUrl(_0x4dfcdc);if(!_0x49aebb)throw _0x36f98a(0x15c);const _0xebd26e=/\.(mp4|mov|webm)/i[_0x36f98a(0x159)](_0x49aebb);await _0x2ce57a[_0x36f98a(0x15b)](_0x19bede[_0x36f98a(0x14e)],_0x49aebb,'','✅\x20Pinterest\x20-\x20'+(_0xebd26e?_0x36f98a(0x153):_0x36f98a(0x135)),_0x19bede,![],{'asDocument':![]});}catch(_0x3553bf){console['error'](_0x36f98a(0x141),_0x3553bf),_0x2ce57a[_0x36f98a(0x13b)](_0x19bede[_0x36f98a(0x14e)],_0x36f98a(0x15d),_0x19bede);}};const resolvePinterestLink=async _0x4c4e12=>{const _0x27e48f=a0_0x4f8a;try{const {request:_0x3be191}=await a0_0x2283dc[_0x27e48f(0x13c)](_0x4c4e12,{'maxRedirects':0x5});return _0x3be191['res'][_0x27e48f(0x155)]||_0x4c4e12;}catch{return _0x4c4e12;}},extractMediaUrl=_0x39b413=>{const _0x6dbd38=a0_0x4f8a,_0x3ea5c9=a0_0x511e4d[_0x6dbd38(0x133)](_0x39b413),_0x5aefc8=_0x3ea5c9(_0x6dbd38(0x136))[_0x6dbd38(0x142)](_0x6dbd38(0x14d));if(_0x5aefc8)return _0x5aefc8;const _0x138459=_0x3ea5c9(_0x6dbd38(0x149))[_0x6dbd38(0x148)]();if(_0x138459)try{const _0x10c794=JSON['parse'](_0x138459),_0x28b582=_0x10c794?.[_0x6dbd38(0x151)]?.[_0x6dbd38(0x138)]?.[_0x6dbd38(0x13d)]?.[_0x6dbd38(0x14a)]?.[Object['keys'](_0x10c794[_0x6dbd38(0x151)]['initialReduxState'][_0x6dbd38(0x13d)][_0x6dbd38(0x14a)])[0x0]]?.['images']?.['orig']?.[_0x6dbd38(0x14f)];if(_0x28b582)return _0x28b582;}catch(_0x2e364d){console[_0x6dbd38(0x139)]('Error\x20parsing\x20JSON:',_0x2e364d);}return _0x3ea5c9(_0x6dbd38(0x140))['attr'](_0x6dbd38(0x13e))||_0x3ea5c9(_0x6dbd38(0x13f))[_0x6dbd38(0x142)](_0x6dbd38(0x13e));};handler['help']=[a0_0x2f01c5(0x154)]['map'](_0x2939a0=>_0x2939a0+'\x20[enlace\x20pinterest]'),handler[a0_0x2f01c5(0x14b)]=['downloader'],handler[a0_0x2f01c5(0x146)]=/^(pint(erest)?|pin)$/i,handler['limit']=!![];export default handler;function a0_0x3249(){const _0xd8a26a=['❗\x20Error\x20al\x20procesar.\x20Asegúrate\x20de\x20usar\x20un\x20enlace\x20directo\x20a\x20un\x20pin.','826742BgdvOU','sessioninfo=...','trim','load','pinterest.com','Imagen','video\x20source','12KlwXWg','initialReduxState','error','900372JFSTNm','reply','get','resources','content','meta[property=\x22og:image\x22]','meta[property=\x22og:video:secure_url\x22]','Error:','attr','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/120.0.0.0\x20Safari/537.36','17446zNGvqB','2076710TTaMrw','command','text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8','html','script[type=\x22application/json\x22]','data','tags','20WftfVu','src','chat','url','484017yYRHou','props','545905KwoALY','Video','pint','responseUrl','192zmdpoy','4VCyFSP','89730yaAVrb','test','\x20https://pin.it/ejemplo','sendFile','❗\x20No\x20se\x20encontró\x20contenido\x20multimedia.'];a0_0x3249=function(){return _0xd8a26a;};return a0_0x3249();}