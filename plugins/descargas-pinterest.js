const a0_0x305a45=a0_0x447d;(function(_0x1baf19,_0x4d0189){const _0x29080d=a0_0x447d,_0x32867a=_0x1baf19();while(!![]){try{const _0x294b42=parseInt(_0x29080d(0x118))/0x1*(parseInt(_0x29080d(0x132))/0x2)+parseInt(_0x29080d(0x12f))/0x3+parseInt(_0x29080d(0x126))/0x4+parseInt(_0x29080d(0x117))/0x5+parseInt(_0x29080d(0x11b))/0x6+-parseInt(_0x29080d(0x13f))/0x7*(-parseInt(_0x29080d(0x11d))/0x8)+-parseInt(_0x29080d(0x128))/0x9;if(_0x294b42===_0x4d0189)break;else _0x32867a['push'](_0x32867a['shift']());}catch(_0x4c3b73){_0x32867a['push'](_0x32867a['shift']());}}}(a0_0x3176,0x9f210));import a0_0x464eca from'axios';function a0_0x447d(_0x32a95d,_0xc37822){const _0x317641=a0_0x3176();return a0_0x447d=function(_0x447df7,_0x174a6f){_0x447df7=_0x447df7-0x115;let _0x39e9ee=_0x317641[_0x447df7];return _0x39e9ee;},a0_0x447d(_0x32a95d,_0xc37822);}import a0_0x3712a3 from'cheerio';let handler=async(_0xfeb3f7,{conn:_0x350c78,text:_0x6fee62,usedPrefix:_0x270e36,command:_0x1ccba0})=>{const _0x42983b=a0_0x447d;if(!_0x6fee62||!/^https?:\/\//i[_0x42983b(0x140)](_0x6fee62['trim']()))throw _0x42983b(0x11e)+(_0x270e36+_0x1ccba0)+'\x20https://pin.it/ejemplo';try{const _0x3b8337=await resolvePinterestLink(_0x6fee62['trim']());if(!_0x3b8337['includes'](_0x42983b(0x141)))throw'❗\x20Enlace\x20no\x20válido\x20de\x20Pinterest.';const {data:_0xae3bfe}=await a0_0x464eca[_0x42983b(0x11f)](_0x3b8337,{'headers':{'User-Agent':_0x42983b(0x144),'Accept':_0x42983b(0x122),'Referer':_0x42983b(0x13e),'Cookie':'sessioninfo=...'}}),_0x187f2c=extractMediaUrl(_0xae3bfe);if(!_0x187f2c)throw'❗\x20No\x20se\x20encontró\x20contenido\x20multimedia.';const _0x2581cb=/\.(mp4|mov|webm)/i['test'](_0x187f2c);await _0x350c78[_0x42983b(0x13b)](_0xfeb3f7['chat'],_0x187f2c,'',_0x42983b(0x12d)+(_0x2581cb?_0x42983b(0x136):_0x42983b(0x12b)),_0xfeb3f7,![],{'asDocument':![]});}catch(_0x3dd909){console['error'](_0x42983b(0x130),_0x3dd909),_0x350c78[_0x42983b(0x115)](_0xfeb3f7['chat'],_0x42983b(0x129),_0xfeb3f7);}};function a0_0x3176(){const _0x52dd5c=['4911036yETqyS','help','17000CFAHDc','⚠️\x20[Error]\x20Proporciona\x20un\x20enlace\x20válido.\x0aEjemplo:\x20','get','Error\x20parsing\x20JSON:','meta[property=\x22og:image\x22]','text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8','command','parse','meta[property=\x22og:video:secure_url\x22]','685020uujMVk','orig','37774440YHBZGZ','❗\x20Error\x20al\x20procesar.\x20Asegúrate\x20de\x20usar\x20un\x20enlace\x20directo\x20a\x20un\x20pin.','html','Imagen','initialReduxState','✅\x20Pinterest\x20-\x20','pint','2935458afKGHX','Error:','data','57084yOUque','tags','resources','props','Video','src','responseUrl','downloader','load','sendFile','\x20[enlace\x20pinterest]','url','https://www.pinterest.com/','3458UAhGSZ','test','pinterest.com','video\x20source','map','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/120.0.0.0\x20Safari/537.36','content','reply','images','4017215IAaehy','36nIeZyh','keys','attr'];a0_0x3176=function(){return _0x52dd5c;};return a0_0x3176();}const resolvePinterestLink=async _0x48f1a1=>{const _0x3509fb=a0_0x447d;try{const {request:_0x4e02e7}=await a0_0x464eca[_0x3509fb(0x11f)](_0x48f1a1,{'maxRedirects':0x5});return _0x4e02e7['res'][_0x3509fb(0x138)]||_0x48f1a1;}catch{return _0x48f1a1;}},extractMediaUrl=_0x1cb7e4=>{const _0x10cf0c=a0_0x447d,_0x2e17c1=a0_0x3712a3[_0x10cf0c(0x13a)](_0x1cb7e4),_0x20df7d=_0x2e17c1(_0x10cf0c(0x142))[_0x10cf0c(0x11a)](_0x10cf0c(0x137));if(_0x20df7d)return _0x20df7d;const _0x414c76=_0x2e17c1('script[type=\x22application/json\x22]')[_0x10cf0c(0x12a)]();if(_0x414c76)try{const _0x1200c7=JSON[_0x10cf0c(0x124)](_0x414c76),_0xa041b3=_0x1200c7?.[_0x10cf0c(0x135)]?.['initialReduxState']?.['resources']?.[_0x10cf0c(0x131)]?.[Object[_0x10cf0c(0x119)](_0x1200c7[_0x10cf0c(0x135)][_0x10cf0c(0x12c)][_0x10cf0c(0x134)]['data'])[0x0]]?.[_0x10cf0c(0x116)]?.[_0x10cf0c(0x127)]?.[_0x10cf0c(0x13d)];if(_0xa041b3)return _0xa041b3;}catch(_0x3cb98e){console['error'](_0x10cf0c(0x120),_0x3cb98e);}return _0x2e17c1(_0x10cf0c(0x125))[_0x10cf0c(0x11a)](_0x10cf0c(0x145))||_0x2e17c1(_0x10cf0c(0x121))[_0x10cf0c(0x11a)](_0x10cf0c(0x145));};handler[a0_0x305a45(0x11c)]=[a0_0x305a45(0x12e)][a0_0x305a45(0x143)](_0x2b4de4=>_0x2b4de4+a0_0x305a45(0x13c)),handler[a0_0x305a45(0x133)]=[a0_0x305a45(0x139)],handler[a0_0x305a45(0x123)]=/^(pint(erest)?|pin)$/i,handler['limit']=!![];export default handler;