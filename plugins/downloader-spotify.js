const a0_0x1f2fa8=a0_0x2856;(function(_0x2cda8b,_0x74e638){const _0x2c759e=a0_0x2856,_0x2878e9=_0x2cda8b();while(!![]){try{const _0x3aaea6=-parseInt(_0x2c759e(0x201))/0x1*(parseInt(_0x2c759e(0x22e))/0x2)+-parseInt(_0x2c759e(0x1ff))/0x3*(-parseInt(_0x2c759e(0x223))/0x4)+parseInt(_0x2c759e(0x1d7))/0x5+-parseInt(_0x2c759e(0x20d))/0x6*(-parseInt(_0x2c759e(0x230))/0x7)+-parseInt(_0x2c759e(0x1ea))/0x8*(-parseInt(_0x2c759e(0x219))/0x9)+-parseInt(_0x2c759e(0x1f0))/0xa*(parseInt(_0x2c759e(0x1d1))/0xb)+-parseInt(_0x2c759e(0x217))/0xc*(parseInt(_0x2c759e(0x218))/0xd);if(_0x3aaea6===_0x74e638)break;else _0x2878e9['push'](_0x2878e9['shift']());}catch(_0x1bccf3){_0x2878e9['push'](_0x2878e9['shift']());}}}(a0_0x28ba,0xf36bb));import a0_0x93d50e from'axios';import a0_0x8a00a6 from'node-fetch';function a0_0x2856(_0x1fe1f9,_0x25aae7){const _0x28ba17=a0_0x28ba();return a0_0x2856=function(_0x285648,_0xffabdf){_0x285648=_0x285648-0x1ce;let _0x1549ba=_0x28ba17[_0x285648];return _0x1549ba;},a0_0x2856(_0x1fe1f9,_0x25aae7);}let spotifyTokenCache={'token':null,'expiresAt':0x0};async function getSpotifyToken(){const _0x28e3b6=a0_0x2856,_0x2211c8=Date[_0x28e3b6(0x226)]();if(spotifyTokenCache[_0x28e3b6(0x1dd)]&&spotifyTokenCache[_0x28e3b6(0x222)]>_0x2211c8)return spotifyTokenCache[_0x28e3b6(0x1dd)];const _0x50200a=await a0_0x93d50e({'method':_0x28e3b6(0x1e5),'url':'https://accounts.spotify.com/api/token','headers':{'Content-Type':_0x28e3b6(0x1da),'Authorization':_0x28e3b6(0x1d4)+Buffer['from'](_0x28e3b6(0x1e7))[_0x28e3b6(0x1db)]('base64')},'data':_0x28e3b6(0x204)}),_0x1455ff=_0x50200a[_0x28e3b6(0x21b)][_0x28e3b6(0x1df)];return spotifyTokenCache[_0x28e3b6(0x1dd)]=_0x1455ff,spotifyTokenCache['expiresAt']=_0x2211c8+_0x50200a[_0x28e3b6(0x21b)][_0x28e3b6(0x21c)]*0x3e8-0xea60,_0x1455ff;}async function getBuffer(_0x2bf147){const _0x3f070d=a0_0x2856,_0x2d1372=await a0_0x8a00a6(_0x2bf147);if(!_0x2d1372['ok'])throw new Error(_0x3f070d(0x207)+_0x2d1372['statusText']);return await _0x2d1372[_0x3f070d(0x1e1)]();}function formatExtractionMessage(_0x40f2b5,_0x3b5d75,_0x29b145){const _0x533bb4=a0_0x2856;return _0x533bb4(0x21f)+_0x40f2b5+'\x0a🛠️\x20Intento:\x20'+_0x3b5d75+_0x533bb4(0x20b)+_0x29b145+_0x533bb4(0x1d5);}async function progressWithSync(_0x142c05,_0x381f3e,_0x2493c5,_0x5d6bd8,{objective:_0x38c095,attempt:_0x1e0129,failedTrack:failedTrack=null}){const _0x3c4d83=a0_0x2856;let _0x590ed0=![];const _0x5d0ff0=['▱▱▱▱▱▱▱▱▱▱\x200%','▰▱▱▱▱▱▱▱▱▱\x2010%',_0x3c4d83(0x1f8),'▰▰▰▱▱▱▱▱▱▱\x2030%',_0x3c4d83(0x229),_0x3c4d83(0x1d3),_0x3c4d83(0x1e9),'▰▰▰▰▰▰▰▱▱▱\x2070%',_0x3c4d83(0x1f9),_0x3c4d83(0x21a)];let _0x4c5dbc=0x0;const _0xbc7724=0x12c,_0x48904c=setInterval(async()=>{const _0x75fead=_0x3c4d83;if(_0x4c5dbc<_0x5d0ff0[_0x75fead(0x213)]){const _0x467bf4=formatExtractionMessage(_0x38c095,_0x1e0129,_0x5d0ff0[_0x4c5dbc]);await _0x142c05[_0x75fead(0x208)](_0x381f3e[_0x75fead(0x1ec)],{'text':_0x467bf4,'edit':_0x2493c5[_0x75fead(0x1e3)]}),_0x4c5dbc++;}},_0xbc7724);try{await _0x5d6bd8;}catch(_0x417a9c){_0x590ed0=!![];}clearInterval(_0x48904c);const _0x34bc08=_0x590ed0&&failedTrack?_0x3c4d83(0x202)+failedTrack:'▰▰▰▰▰▰▰▰▰▰\x20100%\x20-\x20¡Descargado!',_0x452776=formatExtractionMessage(_0x38c095,_0x1e0129,_0x34bc08);await _0x142c05[_0x3c4d83(0x208)](_0x381f3e[_0x3c4d83(0x1ec)],{'text':_0x452776,'edit':_0x2493c5[_0x3c4d83(0x1e3)]});}async function downloadWithRetries(_0x1e4fbb,_0x549140,_0x386cf9,_0x420196,_0x1935e6){const _0x4decd7=a0_0x2856;let _0x19c030=null;for(let _0x4ba9c5=0x1;_0x4ba9c5<=0x3;_0x4ba9c5++){try{const _0x5ca997=a0_0x8a00a6('https://apis-starlights-team.koyeb.app/starlight/spotifydl?url='+_0x1e4fbb[_0x4decd7(0x1f7)])[_0x4decd7(0x228)](_0x51a3d1=>_0x51a3d1['json']());await progressWithSync(_0x549140,_0x386cf9,_0x420196,_0x5ca997,{'objective':_0x1935e6,'attempt':_0x4ba9c5,'failedTrack':_0x4ba9c5===0x3?_0x1e4fbb[_0x4decd7(0x1fc)]:null}),_0x19c030=await _0x5ca997;if(!_0x19c030||!_0x19c030[_0x4decd7(0x1e2)])throw new Error('No\x20se\x20pudo\x20obtener\x20el\x20enlace\x20de\x20descarga\x20para\x20'+_0x1e4fbb[_0x4decd7(0x1fc)]);return _0x19c030;}catch(_0x231f24){if(_0x4ba9c5===0x3)return null;await new Promise(_0x35314f=>setTimeout(_0x35314f,0x3e8));}}return null;}let handler=async(_0x3967f0,{conn:_0xa5030e,text:_0x545103,usedPrefix:_0x2384fd,command:_0xbfb1a9})=>{const _0x4cacc8=a0_0x2856;if(!_0x545103)throw _0x4cacc8(0x216)+(_0x2384fd+_0xbfb1a9)+'\x20Bellyache\x0a•\x20'+(_0x2384fd+_0xbfb1a9)+_0x4cacc8(0x1fb)+(_0x2384fd+_0xbfb1a9)+'\x20https://open.spotify.com/album/...\x0a•\x20'+(_0x2384fd+_0xbfb1a9)+'\x20https://open.spotify.com/playlist/...\x0a•\x20'+(_0x2384fd+_0xbfb1a9)+_0x4cacc8(0x210);try{await _0x3967f0[_0x4cacc8(0x215)]('⏳');let _0x1318ba=![],_0x3b1494=![],_0x1fd2c9=![],_0x2481d4;if(_0x545103['includes'](_0x4cacc8(0x1ed))){_0x1318ba=!![],_0x2481d4=await spotifyAlbum(_0x545103);if(!_0x2481d4?.['tracks']?.['length'])throw _0x4cacc8(0x235);}else{if(_0x545103[_0x4cacc8(0x1d9)](_0x4cacc8(0x1d8))){_0x3b1494=!![],_0x2481d4=await spotifyPlaylist(_0x545103);if(!_0x2481d4?.[_0x4cacc8(0x225)]?.['length'])throw _0x4cacc8(0x1dc);}else{if(_0x545103[_0x4cacc8(0x1d9)]('open.spotify.com/artist')||_0x545103['includes']('spotify.com/artist')){_0x1318ba=!![],_0x1fd2c9=!![],_0x2481d4=await spotifyArtist(_0x545103);if(!_0x2481d4?.[_0x4cacc8(0x225)]?.[_0x4cacc8(0x213)])throw _0x4cacc8(0x227);}else{if(_0x545103[_0x4cacc8(0x1d9)](_0x4cacc8(0x220)))_0x2481d4={'tracks':[await spotifyTrack(_0x545103)]};else{if(_0x545103[_0x4cacc8(0x21e)]()[_0x4cacc8(0x1d9)]('album')){_0x1318ba=!![],_0x2481d4=await spotifyAlbumSearch(_0x545103);if(!_0x2481d4?.['tracks']?.[_0x4cacc8(0x213)])throw'⚠️\x20No\x20se\x20encontraron\x20canciones\x20en\x20el\x20álbum.';}else{const _0x50684b=await spotifyxv(_0x545103);if(!_0x50684b[_0x4cacc8(0x213)]||!_0x50684b[0x0][_0x4cacc8(0x1f7)])throw _0x4cacc8(0x1eb);_0x2481d4={'tracks':[_0x50684b[0x0]]};}}}}}if(_0x1318ba||_0x3b1494){let _0x5d1f64=[];for(let _0x136a53=0x0;_0x136a53<_0x2481d4['tracks'][_0x4cacc8(0x213)];_0x136a53++){const _0x856465=_0x2481d4['tracks'][_0x136a53],_0x259fe8=_0x856465[_0x4cacc8(0x1fc)]+'\x20('+(_0x136a53+0x1)+'/'+_0x2481d4[_0x4cacc8(0x225)][_0x4cacc8(0x213)]+')',_0x5f12f4=formatExtractionMessage(_0x259fe8,0x1,_0x4cacc8(0x1e4)),_0x6b2cd2=await _0xa5030e[_0x4cacc8(0x208)](_0x3967f0[_0x4cacc8(0x1ec)],{'text':_0x5f12f4}),_0x1ce25b=await downloadWithRetries(_0x856465,_0xa5030e,_0x3967f0,_0x6b2cd2,_0x259fe8);_0x1ce25b?(await _0xa5030e['sendMessage'](_0x3967f0[_0x4cacc8(0x1ec)],{'delete':_0x6b2cd2[_0x4cacc8(0x1e3)]}),await _0xa5030e['sendMessage'](_0x3967f0[_0x4cacc8(0x1ec)],{'audio':{'url':_0x1ce25b['music']},'fileName':_0x1ce25b['title']+_0x4cacc8(0x1f4),'mimetype':'audio/mpeg','contextInfo':{'externalAdReply':{'showAdAttribution':![],'title':''+_0x1ce25b['title'],'body':_0x4cacc8(0x233)+_0x1ce25b['artist'],'description':_0x4cacc8(0x22d)+_0x1ce25b[_0x4cacc8(0x214)],'thumbnailUrl':_0x1ce25b['thumbnail']}}}),await new Promise(_0x4b7ae0=>setTimeout(_0x4b7ae0,0x7d0))):_0x5d1f64['push'](_0x856465);}if(_0x5d1f64[_0x4cacc8(0x213)]>0x0){let _0x4b6f9e=_0x5d1f64[_0x4cacc8(0x1f1)](_0x5d3160=>_0x5d3160[_0x4cacc8(0x1fc)])[_0x4cacc8(0x1fe)]('\x0a');await _0xa5030e[_0x4cacc8(0x208)](_0x3967f0[_0x4cacc8(0x1ec)],{'text':_0x4cacc8(0x221)+_0x4b6f9e});let _0x94ad17=[];for(let _0x4bf6c8 of _0x5d1f64){const _0x39e991=_0x4bf6c8[_0x4cacc8(0x1fc)]+'\x20(Reintento)',_0x89decd=formatExtractionMessage(_0x39e991,0x1,_0x4cacc8(0x1e4)),_0xbb6890=await _0xa5030e['sendMessage'](_0x3967f0['chat'],{'text':_0x89decd}),_0x815213=await downloadWithRetries(_0x4bf6c8,_0xa5030e,_0x3967f0,_0xbb6890,_0x39e991);_0x815213?(await _0xa5030e[_0x4cacc8(0x208)](_0x3967f0['chat'],{'delete':_0xbb6890[_0x4cacc8(0x1e3)]}),await _0xa5030e[_0x4cacc8(0x208)](_0x3967f0[_0x4cacc8(0x1ec)],{'audio':{'url':_0x815213[_0x4cacc8(0x1e2)]},'fileName':_0x815213[_0x4cacc8(0x22f)]+_0x4cacc8(0x1f4),'mimetype':_0x4cacc8(0x232),'contextInfo':{'externalAdReply':{'showAdAttribution':![],'title':''+_0x815213['title'],'body':_0x4cacc8(0x233)+_0x815213[_0x4cacc8(0x1e8)],'description':_0x4cacc8(0x22d)+_0x815213['album'],'thumbnailUrl':_0x815213[_0x4cacc8(0x209)]}}}),await new Promise(_0x3856a1=>setTimeout(_0x3856a1,0x7d0))):_0x94ad17[_0x4cacc8(0x20c)](_0x4bf6c8);}if(_0x94ad17[_0x4cacc8(0x213)]>0x0){let _0x10b4b2=_0x94ad17[_0x4cacc8(0x1f1)](_0x4f6270=>_0x4f6270[_0x4cacc8(0x1fc)])[_0x4cacc8(0x1fe)]('\x0a');await _0xa5030e[_0x4cacc8(0x208)](_0x3967f0[_0x4cacc8(0x1ec)],{'text':'No\x20se\x20pudieron\x20extraer\x20las\x20siguientes\x20sombras:\x0a'+_0x10b4b2});}}}else{const _0x3a8968=_0x2481d4['tracks'][0x0],_0x3f8964=_0x3a8968['name']+'\x20(1/1)',_0x15e441=formatExtractionMessage(_0x3f8964,0x1,_0x4cacc8(0x1e4)),_0x4cad53=await _0xa5030e[_0x4cacc8(0x208)](_0x3967f0['chat'],{'text':_0x15e441}),_0x1c4f4a=await downloadWithRetries(_0x3a8968,_0xa5030e,_0x3967f0,_0x4cad53,_0x3f8964);if(!_0x1c4f4a){await _0xa5030e['sendMessage'](_0x3967f0[_0x4cacc8(0x1ec)],{'text':_0x4cacc8(0x221)+_0x3a8968[_0x4cacc8(0x1fc)]});const _0x4cf03b=formatExtractionMessage(_0x3f8964+_0x4cacc8(0x1ef),0x1,'▱▱▱▱▱▱▱▱▱▱\x200%'),_0x147707=await _0xa5030e[_0x4cacc8(0x208)](_0x3967f0[_0x4cacc8(0x1ec)],{'text':_0x4cf03b}),_0x572bb2=await downloadWithRetries(_0x3a8968,_0xa5030e,_0x3967f0,_0x147707,_0x3f8964+_0x4cacc8(0x1ef));!_0x572bb2?await _0xa5030e['sendMessage'](_0x3967f0[_0x4cacc8(0x1ec)],{'text':_0x4cacc8(0x22c)+_0x3a8968['name']}):(await _0xa5030e[_0x4cacc8(0x208)](_0x3967f0['chat'],{'delete':_0x147707[_0x4cacc8(0x1e3)]}),await _0xa5030e[_0x4cacc8(0x208)](_0x3967f0[_0x4cacc8(0x1ec)],{'audio':{'url':_0x572bb2[_0x4cacc8(0x1e2)]},'fileName':_0x572bb2[_0x4cacc8(0x22f)]+'.mp3','mimetype':_0x4cacc8(0x232),'contextInfo':{'externalAdReply':{'showAdAttribution':![],'title':''+_0x572bb2['title'],'body':'Artista:\x20'+_0x572bb2[_0x4cacc8(0x1e8)],'description':_0x4cacc8(0x22d)+_0x572bb2['album'],'thumbnailUrl':_0x572bb2[_0x4cacc8(0x209)]}}}),await new Promise(_0x1dbfa7=>setTimeout(_0x1dbfa7,0x7d0)));}else await _0xa5030e[_0x4cacc8(0x208)](_0x3967f0[_0x4cacc8(0x1ec)],{'delete':_0x4cad53[_0x4cacc8(0x1e3)]}),await _0xa5030e['sendMessage'](_0x3967f0['chat'],{'audio':{'url':_0x1c4f4a[_0x4cacc8(0x1e2)]},'fileName':_0x1c4f4a[_0x4cacc8(0x22f)]+_0x4cacc8(0x1f4),'mimetype':_0x4cacc8(0x232),'contextInfo':{'externalAdReply':{'showAdAttribution':![],'title':''+_0x1c4f4a[_0x4cacc8(0x22f)],'body':_0x4cacc8(0x233)+_0x1c4f4a[_0x4cacc8(0x1e8)],'description':_0x4cacc8(0x22d)+_0x1c4f4a[_0x4cacc8(0x214)],'thumbnailUrl':_0x1c4f4a[_0x4cacc8(0x209)]}}}),await _0x3967f0['react']('✅');}}catch(_0x21dbdf){await _0x3967f0['react']('❌'),await _0x3967f0['reply'](_0x4cacc8(0x1d2)+(_0x21dbdf[_0x4cacc8(0x1ee)]||_0x21dbdf)),console['error'](_0x21dbdf);}};handler[a0_0x1f2fa8(0x231)]=['spotify',a0_0x1f2fa8(0x205)],handler[a0_0x1f2fa8(0x21d)]=[a0_0x1f2fa8(0x1cf)],handler[a0_0x1f2fa8(0x200)]=[a0_0x1f2fa8(0x1f5),a0_0x1f2fa8(0x205)],handler[a0_0x1f2fa8(0x1d0)]=![];function a0_0x28ba(){const _0x3b9b4a=['open.spotify.com/album','message','\x20(Reintento)','90XKszVT','map','items','https://api.spotify.com/v1/search?q=','.mp3','spotify','No\x20se\x20pudo\x20extraer\x20el\x20ID\x20del\x20álbum.','url','▰▰▱▱▱▱▱▱▱▱\x2020%','▰▰▰▰▰▰▰▰▱▱\x2080%','floor','\x20https://open.spotify.com/track/...\x0a•\x20','name','artists','join','762417IkTKCw','command','284916ZFbfAy','▰▰▰▰▰▰▰▰▰▰\x20100%\x20-\x20Falló\x20la\x20extracción\x20de:\x20','https://api.spotify.com/v1/albums/','grant_type=client_credentials','play','track','Error\x20al\x20obtener\x20la\x20imagen:\x20','sendMessage','thumbnail','indexOf','\x0a💠\x20Progreso:\x20','push','5250396dUBWJr','&type=album','Bearer\x20','\x20https://open.spotify.com/artist/...','https://api.spotify.com/v1/playlists/','No\x20se\x20pudo\x20extraer\x20el\x20ID\x20del\x20track.','length','album','react','⚔️\x20Error:\x20No\x20ingresaste\x20ninguna\x20búsqueda\x20o\x20enlace.\x0a\x0aEjemplo:\x0a•\x20','24UMMdrH','2511925SDgOqo','16744347nNrDkG','▰▰▰▰▰▰▰▰▰▱\x2090%','data','expires_in','tags','toLowerCase','━━━━━━━━━━━━━━━━━━\x0a⚔️\x20Extracción\x20en\x20Curso\x0a🌟\x20Objetivo:\x20','spotify.com/track','Igris\x20intentará\x20obtener\x20de\x20nuevo\x20las\x20sombras\x20de:\x0a','expiresAt','20UGbEQx','images','tracks','now','⚠️\x20No\x20se\x20encontraron\x20canciones\x20para\x20el\x20artista.','then','▰▰▰▰▱▱▱▱▱▱\x2040%','Top\x20Tracks','get','No\x20se\x20pudo\x20extraer\x20la\x20sombra\x20de:\x20','Álbum:\x20','8UmwEUv','title','7lJBbRV','help','audio/mpeg','Artista:\x20','&type=track','⚠️\x20No\x20se\x20encontraron\x20canciones\x20en\x20el\x20álbum.','/top-tracks?market=US','downloader','group','2101979cPsAOZ','❌\x20*Error:*\x20','▰▰▰▰▰▱▱▱▱▱\x2050%','Basic\x20','\x0a━━━━━━━━━━━━━━━━━━','https://api.spotify.com/v1/tracks/','1183610UKxFSO','open.spotify.com/playlist','includes','application/x-www-form-urlencoded','toString','⚠️\x20No\x20se\x20encontraron\x20canciones\x20en\x20la\x20playlist.','token','external_urls','access_token','split','buffer','music','key','▱▱▱▱▱▱▱▱▱▱\x200%','post','duration_ms','acc6302297e040aeb6e4ac1fbdfd62c3:0e8439a1280a43aba9a5bc0a16f3f009','artist','▰▰▰▰▰▰▱▱▱▱\x2060%','8cNLWWo','❌\x20*Error:*\x20No\x20se\x20encontraron\x20resultados.','chat'];a0_0x28ba=function(){return _0x3b9b4a;};return a0_0x28ba();}export default handler;async function spotifyxv(_0x2a9fcb){const _0x41367f=a0_0x1f2fa8,_0x42f56c=await getSpotifyToken();try{let _0xc49768=await a0_0x93d50e({'method':_0x41367f(0x22b),'url':_0x41367f(0x1f3)+encodeURIComponent(_0x2a9fcb)+_0x41367f(0x234),'headers':{'Authorization':_0x41367f(0x20f)+_0x42f56c}});const _0x49c167=_0xc49768[_0x41367f(0x21b)][_0x41367f(0x225)][_0x41367f(0x1f2)];return _0x49c167['map'](_0x354951=>({'name':_0x354951['name'],'artist':_0x354951['artists'][_0x41367f(0x1f1)](_0x460467=>_0x460467[_0x41367f(0x1fc)])[_0x41367f(0x1fe)](',\x20'),'album':_0x354951[_0x41367f(0x214)][_0x41367f(0x1fc)],'duration':timestamp(_0x354951[_0x41367f(0x1e6)]),'url':_0x354951['external_urls'][_0x41367f(0x1f5)],'thumbnail':_0x354951[_0x41367f(0x214)][_0x41367f(0x224)][0x0]?.[_0x41367f(0x1f7)]||''}));}catch(_0x2b8322){return console['error'](_0x2b8322),[];}}async function spotifyAlbum(_0x244683){const _0x44e004=a0_0x1f2fa8;let _0x25b01b;try{const _0x2493c2=_0x244683[_0x44e004(0x1e0)]('/');_0x25b01b=_0x2493c2[_0x2493c2[_0x44e004(0x20a)](_0x44e004(0x214))+0x1][_0x44e004(0x1e0)]('?')[0x0];}catch(_0x161e88){throw new Error(_0x44e004(0x1f6));}const _0x159a73=await getSpotifyToken();let _0x4d0fda=await a0_0x93d50e({'method':'get','url':_0x44e004(0x203)+_0x25b01b,'headers':{'Authorization':_0x44e004(0x20f)+_0x159a73}});const _0x5156e7=_0x4d0fda['data'],_0x701879=_0x5156e7[_0x44e004(0x225)]['items'][_0x44e004(0x1f1)](_0x1912cb=>({'name':_0x1912cb[_0x44e004(0x1fc)],'artist':_0x1912cb[_0x44e004(0x1fd)][_0x44e004(0x1f1)](_0x4ae4e1=>_0x4ae4e1[_0x44e004(0x1fc)])['join'](',\x20'),'album':_0x5156e7[_0x44e004(0x1fc)],'url':_0x1912cb[_0x44e004(0x1de)][_0x44e004(0x1f5)],'thumbnail':_0x5156e7[_0x44e004(0x224)][0x0]?.[_0x44e004(0x1f7)]||''}));return{'album':_0x5156e7,'tracks':_0x701879};}async function spotifyAlbumSearch(_0x3a28d0){const _0x23d121=a0_0x1f2fa8,_0x361bd7=await getSpotifyToken();let _0x4ce070=await a0_0x93d50e({'method':_0x23d121(0x22b),'url':_0x23d121(0x1f3)+encodeURIComponent(_0x3a28d0)+_0x23d121(0x20e),'headers':{'Authorization':_0x23d121(0x20f)+_0x361bd7}});const _0x20119f=_0x4ce070[_0x23d121(0x21b)]['albums']['items'];if(!_0x20119f[_0x23d121(0x213)])return null;const _0x5478df=_0x20119f[0x0]['id'];let _0x562f1d=await a0_0x93d50e({'method':_0x23d121(0x22b),'url':'https://api.spotify.com/v1/albums/'+_0x5478df,'headers':{'Authorization':_0x23d121(0x20f)+_0x361bd7}});const _0x4522f7=_0x562f1d[_0x23d121(0x21b)],_0x47306f=_0x4522f7[_0x23d121(0x225)][_0x23d121(0x1f2)][_0x23d121(0x1f1)](_0x4ee83b=>({'name':_0x4ee83b['name'],'artist':_0x4ee83b[_0x23d121(0x1fd)]['map'](_0x7411ac=>_0x7411ac[_0x23d121(0x1fc)])['join'](',\x20'),'album':_0x4522f7[_0x23d121(0x1fc)],'url':_0x4ee83b[_0x23d121(0x1de)]['spotify'],'thumbnail':_0x4522f7[_0x23d121(0x224)][0x0]?.['url']||''}));return{'album':_0x4522f7,'tracks':_0x47306f};}async function spotifyPlaylist(_0x1fdd3c){const _0x1f9cc5=a0_0x1f2fa8;let _0x463c56;try{const _0x3e6959=_0x1fdd3c[_0x1f9cc5(0x1e0)]('/');_0x463c56=_0x3e6959[_0x3e6959[_0x1f9cc5(0x20a)]('playlist')+0x1]['split']('?')[0x0];}catch(_0x36b5f1){throw new Error('No\x20se\x20pudo\x20extraer\x20el\x20ID\x20de\x20la\x20playlist.');}const _0x539d55=await getSpotifyToken();let _0x1dcac7=await a0_0x93d50e({'method':'get','url':_0x1f9cc5(0x211)+_0x463c56,'headers':{'Authorization':_0x1f9cc5(0x20f)+_0x539d55}});const _0x428af1=_0x1dcac7[_0x1f9cc5(0x21b)],_0x1abfb9=_0x428af1[_0x1f9cc5(0x225)][_0x1f9cc5(0x1f2)][_0x1f9cc5(0x1f1)](_0x26d2e7=>{const _0xe6f772=_0x1f9cc5,_0x334a83=_0x26d2e7[_0xe6f772(0x206)];return{'name':_0x334a83['name'],'artist':_0x334a83[_0xe6f772(0x1fd)][_0xe6f772(0x1f1)](_0x420d49=>_0x420d49[_0xe6f772(0x1fc)])[_0xe6f772(0x1fe)](',\x20'),'album':_0x428af1['name'],'url':_0x334a83['external_urls']['spotify'],'thumbnail':_0x334a83[_0xe6f772(0x214)][_0xe6f772(0x224)][0x0]?.['url']||''};});return{'album':{'name':_0x428af1[_0x1f9cc5(0x1fc)]},'tracks':_0x1abfb9};}async function spotifyArtist(_0x72bd64){const _0x52326d=a0_0x1f2fa8;let _0x297b6d;try{const _0xac0149=_0x72bd64['split']('/');_0x297b6d=_0xac0149[_0xac0149[_0x52326d(0x20a)](_0x52326d(0x1e8))+0x1][_0x52326d(0x1e0)]('?')[0x0];}catch(_0x1c891e){throw new Error('No\x20se\x20pudo\x20extraer\x20el\x20ID\x20del\x20artista.');}const _0x51f1b9=await getSpotifyToken();let _0x2935cb=await a0_0x93d50e({'method':_0x52326d(0x22b),'url':'https://api.spotify.com/v1/artists/'+_0x297b6d+_0x52326d(0x1ce),'headers':{'Authorization':_0x52326d(0x20f)+_0x51f1b9}});const _0x395dd5=_0x2935cb[_0x52326d(0x21b)],_0x16d3f1=_0x395dd5[_0x52326d(0x225)][_0x52326d(0x1f1)](_0x205c15=>({'name':_0x205c15[_0x52326d(0x1fc)],'artist':_0x205c15[_0x52326d(0x1fd)][_0x52326d(0x1f1)](_0x1e8b5f=>_0x1e8b5f[_0x52326d(0x1fc)])[_0x52326d(0x1fe)](',\x20'),'album':_0x52326d(0x22a),'url':_0x205c15[_0x52326d(0x1de)][_0x52326d(0x1f5)],'thumbnail':_0x205c15[_0x52326d(0x214)][_0x52326d(0x224)][0x0]?.['url']||''}));return{'album':{'name':_0x52326d(0x22a)},'tracks':_0x16d3f1};}async function spotifyTrack(_0x3c5280){const _0x1cbccb=a0_0x1f2fa8;let _0x14d13d;try{const _0x1d225a=_0x3c5280['split']('/');_0x14d13d=_0x1d225a[_0x1d225a[_0x1cbccb(0x20a)](_0x1cbccb(0x206))+0x1]['split']('?')[0x0];}catch(_0x1559aa){throw new Error(_0x1cbccb(0x212));}const _0x3e75de=await getSpotifyToken();let _0x289f4e=await a0_0x93d50e({'method':'get','url':_0x1cbccb(0x1d6)+_0x14d13d,'headers':{'Authorization':'Bearer\x20'+_0x3e75de}});const _0x40b7ea=_0x289f4e['data'];return{'name':_0x40b7ea[_0x1cbccb(0x1fc)],'artist':_0x40b7ea[_0x1cbccb(0x1fd)][_0x1cbccb(0x1f1)](_0x5aa7ed=>_0x5aa7ed[_0x1cbccb(0x1fc)])[_0x1cbccb(0x1fe)](',\x20'),'album':_0x40b7ea[_0x1cbccb(0x214)][_0x1cbccb(0x1fc)],'url':_0x40b7ea[_0x1cbccb(0x1de)][_0x1cbccb(0x1f5)],'thumbnail':_0x40b7ea[_0x1cbccb(0x214)][_0x1cbccb(0x224)][0x0]?.[_0x1cbccb(0x1f7)]||''};}function timestamp(_0x2e3453){const _0x46469d=a0_0x1f2fa8,_0x11b440=Math[_0x46469d(0x1fa)](_0x2e3453/0xea60),_0x5188c2=Math[_0x46469d(0x1fa)](_0x2e3453%0xea60/0x3e8);return _0x11b440+':'+(_0x5188c2<0xa?'0':'')+_0x5188c2;}