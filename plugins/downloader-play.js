const a0_0x1f5b8c=a0_0x33d3;(function(_0x1b2c87,_0x5d7990){const _0x58a1b3=a0_0x33d3,_0x525c9c=_0x1b2c87();while(!![]){try{const _0x65231c=parseInt(_0x58a1b3(0xb5))/0x1*(parseInt(_0x58a1b3(0xc8))/0x2)+-parseInt(_0x58a1b3(0xb4))/0x3+parseInt(_0x58a1b3(0xb1))/0x4+parseInt(_0x58a1b3(0xae))/0x5*(-parseInt(_0x58a1b3(0xab))/0x6)+-parseInt(_0x58a1b3(0xcc))/0x7*(parseInt(_0x58a1b3(0xbb))/0x8)+parseInt(_0x58a1b3(0xa6))/0x9*(-parseInt(_0x58a1b3(0xb3))/0xa)+parseInt(_0x58a1b3(0xd0))/0xb;if(_0x65231c===_0x5d7990)break;else _0x525c9c['push'](_0x525c9c['shift']());}catch(_0x415985){_0x525c9c['push'](_0x525c9c['shift']());}}}(a0_0x3071,0xa6ea6));import a0_0x488cdf from'axios';let handler=async(_0x41ae20,{conn:_0x43f67f,text:_0x9ee45b,usedPrefix:_0x4ffc1b,command:_0x1e1085})=>{const _0x163b9d=a0_0x33d3,_0x1862ce=_0x163b9d(0xa1);if(_0x1e1085===_0x163b9d(0xc3)){if(!_0x9ee45b)throw _0x163b9d(0xa2);try{const _0x2c2ff0=await a0_0x488cdf[_0x163b9d(0xa9)](_0x163b9d(0xb7)+encodeURIComponent(_0x9ee45b)),_0x5e49d6=_0x2c2ff0[_0x163b9d(0xbc)][_0x163b9d(0xbc)]&&_0x2c2ff0['data'][_0x163b9d(0xbc)][0x0];if(!_0x5e49d6||!_0x5e49d6[_0x163b9d(0xaa)])throw'No\x20se\x20encontraron\x20resultados\x20válidos\x20para\x20esa\x20búsqueda.';const _0x541056=(_0x163b9d(0xb9)+_0x5e49d6[_0x163b9d(0xaa)]+_0x163b9d(0xc0)+_0x5e49d6['uploaded']+'\x0a**Duración**:\x20'+_0x5e49d6[_0x163b9d(0xaf)]+_0x163b9d(0xa4)+_0x5e49d6[_0x163b9d(0xcf)]+_0x163b9d(0xb0)+_0x5e49d6[_0x163b9d(0xc5)][_0x163b9d(0xcd)]+_0x163b9d(0xbf)+_0x5e49d6[_0x163b9d(0xa5)]+_0x163b9d(0xba)+_0x5e49d6[_0x163b9d(0xc2)]+_0x163b9d(0xca)+_0x1862ce)[_0x163b9d(0xb2)]();_0x43f67f['sendMessage'](_0x41ae20['chat'],{'image':{'url':_0x5e49d6[_0x163b9d(0xd4)]},'caption':_0x541056},{'quoted':_0x41ae20});const _0x460730=await a0_0x488cdf[_0x163b9d(0xa9)](_0x163b9d(0xa8)+_0x5e49d6[_0x163b9d(0xa5)]),_0x350dcb=await _0x460730[_0x163b9d(0xbc)][_0x163b9d(0xbc)][_0x163b9d(0xa3)];await _0x43f67f[_0x163b9d(0xd3)](_0x41ae20['chat'],{'audio':{'url':_0x350dcb},'mimetype':_0x163b9d(0xb6)},{'quoted':_0x41ae20});}catch(_0x46026d){_0x43f67f['reply'](_0x41ae20[_0x163b9d(0xd2)],_0x163b9d(0xbe)+_0x46026d,_0x41ae20);}}if(_0x1e1085==='descargar_video'){if(!_0x9ee45b)throw _0x163b9d(0xad);try{const _0x25cefc=await a0_0x488cdf[_0x163b9d(0xa9)](_0x163b9d(0xb7)+encodeURIComponent(_0x9ee45b)),_0x376ad4=_0x25cefc[_0x163b9d(0xbc)][_0x163b9d(0xbc)]&&_0x25cefc[_0x163b9d(0xbc)]['data'][0x0];if(!_0x376ad4||!_0x376ad4[_0x163b9d(0xaa)])throw _0x163b9d(0xb8);const _0x4c337=(_0x163b9d(0xb9)+_0x376ad4[_0x163b9d(0xaa)]+'\x0a**Subido**:\x20'+_0x376ad4[_0x163b9d(0xcb)]+'\x0a**Duración**:\x20'+_0x376ad4[_0x163b9d(0xaf)]+_0x163b9d(0xa4)+_0x376ad4['views']+_0x163b9d(0xb0)+_0x376ad4['author'][_0x163b9d(0xcd)]+_0x163b9d(0xbf)+_0x376ad4['url']+_0x163b9d(0xba)+_0x376ad4[_0x163b9d(0xc2)]+_0x163b9d(0xca)+_0x1862ce)[_0x163b9d(0xb2)]();_0x43f67f['sendMessage'](_0x41ae20[_0x163b9d(0xd2)],{'image':{'url':_0x376ad4['thumbnail']},'caption':_0x4c337},{'quoted':_0x41ae20});const _0x594024=await a0_0x488cdf[_0x163b9d(0xa9)]('https://api-rin-tohsaka.vercel.app/download/ytmp4?url='+_0x376ad4['url']),_0x3b694f=await _0x594024['data'][_0x163b9d(0xbc)][_0x163b9d(0xa3)];await _0x43f67f[_0x163b9d(0xd3)](_0x41ae20[_0x163b9d(0xd2)],{'video':{'url':_0x3b694f},'mimetype':_0x163b9d(0xc9)},{'quoted':_0x41ae20});}catch(_0x3e0509){_0x43f67f['reply'](_0x41ae20[_0x163b9d(0xd2)],_0x163b9d(0xbe)+_0x3e0509,_0x41ae20);}}if(_0x1e1085==='descargar_audio_doc'){if(!_0x9ee45b)throw _0x163b9d(0xa2);try{const _0x217642=await a0_0x488cdf[_0x163b9d(0xa9)](_0x163b9d(0xb7)+encodeURIComponent(_0x9ee45b)),_0x27e432=_0x217642['data'][_0x163b9d(0xbc)]&&_0x217642[_0x163b9d(0xbc)][_0x163b9d(0xbc)][0x0];if(!_0x27e432||!_0x27e432['title'])throw _0x163b9d(0xb8);const _0x10e10c=('**Título**:\x20'+_0x27e432[_0x163b9d(0xaa)]+_0x163b9d(0xc0)+_0x27e432[_0x163b9d(0xcb)]+_0x163b9d(0xc1)+_0x27e432[_0x163b9d(0xaf)]+_0x163b9d(0xa4)+_0x27e432['views']+'\x0a**Autor**:\x20'+_0x27e432[_0x163b9d(0xc5)]['name']+_0x163b9d(0xbf)+_0x27e432[_0x163b9d(0xa5)]+_0x163b9d(0xba)+_0x27e432[_0x163b9d(0xc2)]+_0x163b9d(0xca)+_0x1862ce)[_0x163b9d(0xb2)]();_0x43f67f[_0x163b9d(0xd3)](_0x41ae20['chat'],{'image':{'url':_0x27e432[_0x163b9d(0xd4)]},'caption':_0x10e10c},{'quoted':_0x41ae20});const _0x16c27f=await a0_0x488cdf[_0x163b9d(0xa9)]('https://api-rin-tohsaka.vercel.app/download/ytmp3?url='+_0x27e432[_0x163b9d(0xa5)]),_0x7bfe41=await _0x16c27f[_0x163b9d(0xbc)]['data']['download'];await _0x43f67f[_0x163b9d(0xd3)](_0x41ae20[_0x163b9d(0xd2)],{'document':{'url':_0x7bfe41},'mimetype':_0x163b9d(0xb6),'fileName':_0x27e432[_0x163b9d(0xaa)]+_0x163b9d(0xc4)},{'quoted':_0x41ae20});}catch(_0x51a105){_0x43f67f[_0x163b9d(0xa7)](_0x41ae20[_0x163b9d(0xd2)],_0x163b9d(0xbe)+_0x51a105,_0x41ae20);}}if(_0x1e1085===_0x163b9d(0xce)){if(!_0x9ee45b)throw _0x163b9d(0xad);try{const _0xe64237=await a0_0x488cdf[_0x163b9d(0xa9)]('https://api-rin-tohsaka.vercel.app/search/ytsearch?text='+encodeURIComponent(_0x9ee45b)),_0x3abc75=_0xe64237[_0x163b9d(0xbc)]['data']&&_0xe64237['data'][_0x163b9d(0xbc)][0x0];if(!_0x3abc75||!_0x3abc75[_0x163b9d(0xaa)])throw _0x163b9d(0xb8);const _0x19629a=(_0x163b9d(0xb9)+_0x3abc75[_0x163b9d(0xaa)]+'\x0a**Subido**:\x20'+_0x3abc75['uploaded']+_0x163b9d(0xc1)+_0x3abc75[_0x163b9d(0xaf)]+'\x0a**Vistas**:\x20'+_0x3abc75[_0x163b9d(0xcf)]+_0x163b9d(0xb0)+_0x3abc75[_0x163b9d(0xc5)]['name']+_0x163b9d(0xbf)+_0x3abc75['url']+_0x163b9d(0xba)+_0x3abc75[_0x163b9d(0xc2)]+_0x163b9d(0xca)+_0x1862ce)['trim']();_0x43f67f[_0x163b9d(0xd3)](_0x41ae20[_0x163b9d(0xd2)],{'image':{'url':_0x3abc75['thumbnail']},'caption':_0x19629a},{'quoted':_0x41ae20});const _0x51cde7=await a0_0x488cdf[_0x163b9d(0xa9)](_0x163b9d(0xac)+_0x3abc75[_0x163b9d(0xa5)]),_0x176b9a=await _0x51cde7[_0x163b9d(0xbc)][_0x163b9d(0xbc)]['download'];await _0x43f67f[_0x163b9d(0xd3)](_0x41ae20[_0x163b9d(0xd2)],{'document':{'url':_0x176b9a},'mimetype':'video/mp4','fileName':_0x3abc75[_0x163b9d(0xaa)]+_0x163b9d(0xc6)},{'quoted':_0x41ae20});}catch(_0x4f4289){_0x43f67f['reply'](_0x41ae20['chat'],_0x163b9d(0xbe)+_0x4f4289,_0x41ae20);}}};function a0_0x3071(){const _0x4026b6=['command','OCURRIÓ\x20UN\x20FALLO\x20AL\x20PROCESAR\x20TU\x20SOLICITUD:\x20','\x0a**URL**:\x20','\x0a**Subido**:\x20','\x0a**Duración**:\x20','type','descargar_audio','.mp3','author','.mp4','tags','2564hXuils','video/mp4',',\x20**Formato**:\x20','uploaded','4228TFhDGp','name','descargar_video_doc','views','39044940MTEvzy','help','chat','sendMessage','thumbnail','descarga','Por\x20favor,\x20ingresa\x20el\x20nombre\x20del\x20video\x20o\x20enlace\x20de\x20YouTube\x20para\x20descargar\x20el\x20audio.','download','\x0a**Vistas**:\x20','url','639OIsjFA','reply','https://api-rin-tohsaka.vercel.app/download/ytmp3?url=','get','title','1722EKDJBZ','https://api-rin-tohsaka.vercel.app/download/ytmp4?url=','Por\x20favor,\x20ingresa\x20el\x20nombre\x20del\x20video\x20o\x20enlace\x20de\x20YouTube\x20para\x20descargar\x20el\x20video.','8365YlbblC','duration','\x0a**Autor**:\x20','1928264VaBFCK','trim','167930bDPxnZ','2997600XqICTt','411BUsMHs','audio/mpeg','https://api-rin-tohsaka.vercel.app/search/ytsearch?text=','No\x20se\x20encontraron\x20resultados\x20válidos\x20para\x20esa\x20búsqueda.','**Título**:\x20','\x0a\x0a>\x20**Tipo**:\x20','15936OdHZGV','data'];a0_0x3071=function(){return _0x4026b6;};return a0_0x3071();}handler[a0_0x1f5b8c(0xd1)]=[a0_0x1f5b8c(0xc3),'descargar_video','descargar_audio_doc',a0_0x1f5b8c(0xce)],handler[a0_0x1f5b8c(0xc7)]=['descargas'],handler[a0_0x1f5b8c(0xbd)]=/^(descargar_audio|descargar_video|descargar_audio_doc|descargar_video_doc)$/i;function a0_0x33d3(_0x1aef21,_0x412990){const _0x3071d8=a0_0x3071();return a0_0x33d3=function(_0x33d398,_0x29f971){_0x33d398=_0x33d398-0xa1;let _0x23acb2=_0x3071d8[_0x33d398];return _0x23acb2;},a0_0x33d3(_0x1aef21,_0x412990);}export default handler;