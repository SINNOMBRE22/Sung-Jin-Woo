const a0_0x18a9e3=a0_0x2466;(function(_0x3a1262,_0x2a3328){const _0xa874c1=a0_0x2466,_0x1eadcb=_0x3a1262();while(!![]){try{const _0x4b2cf8=-parseInt(_0xa874c1(0xbb))/0x1*(parseInt(_0xa874c1(0x76))/0x2)+-parseInt(_0xa874c1(0xb7))/0x3*(parseInt(_0xa874c1(0x87))/0x4)+-parseInt(_0xa874c1(0xc0))/0x5+-parseInt(_0xa874c1(0x8b))/0x6*(parseInt(_0xa874c1(0x7b))/0x7)+-parseInt(_0xa874c1(0xd0))/0x8+-parseInt(_0xa874c1(0xa6))/0x9+-parseInt(_0xa874c1(0xac))/0xa*(-parseInt(_0xa874c1(0x85))/0xb);if(_0x4b2cf8===_0x2a3328)break;else _0x1eadcb['push'](_0x1eadcb['shift']());}catch(_0x202e1d){_0x1eadcb['push'](_0x1eadcb['shift']());}}}(a0_0x4a91,0xdb48c));import a0_0x2f6d60 from'axios';import a0_0x22650c from'node-fetch';let spotifyTokenCache={'token':null,'expiresAt':0x0};async function getSpotifyToken(){const _0x113425=a0_0x2466,_0x54dac5=Date['now']();if(spotifyTokenCache[_0x113425(0x97)]&&spotifyTokenCache[_0x113425(0x72)]>_0x54dac5)return spotifyTokenCache[_0x113425(0x97)];const _0x1fcf04=await a0_0x2f6d60({'method':_0x113425(0x92),'url':'https://accounts.spotify.com/api/token','headers':{'Content-Type':_0x113425(0xc8),'Authorization':'Basic\x20'+Buffer[_0x113425(0x9e)]('acc6302297e040aeb6e4ac1fbdfd62c3:0e8439a1280a43aba9a5bc0a16f3f009')[_0x113425(0x88)](_0x113425(0xc4))},'data':'grant_type=client_credentials'}),_0x568d8c=_0x1fcf04[_0x113425(0xaf)][_0x113425(0xc9)];return spotifyTokenCache[_0x113425(0x97)]=_0x568d8c,spotifyTokenCache[_0x113425(0x72)]=_0x54dac5+_0x1fcf04[_0x113425(0xaf)][_0x113425(0xa5)]*0x3e8-0xea60,_0x568d8c;}async function getBuffer(_0x59905d){const _0x455292=a0_0x2466,_0x5af299=await a0_0x22650c(_0x59905d);if(!_0x5af299['ok'])throw new Error(_0x455292(0xbc)+_0x5af299[_0x455292(0xc7)]);return await _0x5af299['buffer']();}function formatExtractionMessage(_0x24d4be,_0x10a08d,_0x392f18){const _0x40307d=a0_0x2466;return _0x40307d(0xa1)+_0x24d4be+_0x40307d(0x86)+_0x10a08d+_0x40307d(0x78)+_0x392f18+'\x0a━━━━━━━━━━━━━━━━━━';}async function progressWithSync(_0x5af1e6,_0x3035bf,_0x394a9a,_0x55e30b,{objective:_0x7e4fd8,attempt:_0x5eea6c,failedTrack:failedTrack=null}){const _0x38a15a=a0_0x2466;let _0x2cf30e=![];const _0x28e843=[_0x38a15a(0x90),_0x38a15a(0x68),_0x38a15a(0x82),_0x38a15a(0xaa),_0x38a15a(0x7e),_0x38a15a(0xc2),'▰▰▰▰▰▰▱▱▱▱\x2060%',_0x38a15a(0xb0),_0x38a15a(0x91),_0x38a15a(0x99)];let _0x44102d=0x0;const _0x182250=0x12c,_0x3db469=setInterval(async()=>{const _0xf7a7b3=_0x38a15a;if(_0x44102d<_0x28e843[_0xf7a7b3(0x69)]){const _0x30902d=formatExtractionMessage(_0x7e4fd8,_0x5eea6c,_0x28e843[_0x44102d]);await _0x5af1e6[_0xf7a7b3(0xa9)](_0x3035bf[_0xf7a7b3(0x71)],{'text':_0x30902d,'edit':_0x394a9a['key']}),_0x44102d++;}},_0x182250);try{await _0x55e30b;}catch(_0x6a91fe){_0x2cf30e=!![];}clearInterval(_0x3db469);const _0x375716=_0x2cf30e&&failedTrack?_0x38a15a(0x65)+failedTrack:_0x38a15a(0x84),_0x1e62a3=formatExtractionMessage(_0x7e4fd8,_0x5eea6c,_0x375716);await _0x5af1e6['sendMessage'](_0x3035bf['chat'],{'text':_0x1e62a3,'edit':_0x394a9a[_0x38a15a(0x8e)]});}async function downloadWithRetries(_0x3815b5,_0x62f62c,_0x345c1e,_0x239e15,_0x2a97b9){const _0x26e1f2=a0_0x2466;let _0x377d16=null;for(let _0x5510fd=0x1;_0x5510fd<=0x3;_0x5510fd++){try{const _0x524f56=a0_0x22650c('https://apis-starlights-team.koyeb.app/starlight/spotifydl?url='+_0x3815b5[_0x26e1f2(0x7a)])[_0x26e1f2(0xa0)](_0x1a7c20=>_0x1a7c20[_0x26e1f2(0x94)]());await progressWithSync(_0x62f62c,_0x345c1e,_0x239e15,_0x524f56,{'objective':_0x2a97b9,'attempt':_0x5510fd,'failedTrack':_0x5510fd===0x3?_0x3815b5[_0x26e1f2(0x98)]:null}),_0x377d16=await _0x524f56;if(!_0x377d16||!_0x377d16['music'])throw new Error(_0x26e1f2(0x6f)+_0x3815b5[_0x26e1f2(0x98)]);return _0x377d16;}catch(_0x5d4729){if(_0x5510fd===0x3)return null;await new Promise(_0x44c1a1=>setTimeout(_0x44c1a1,0x3e8));}}return null;}let handler=async(_0x34400e,{conn:_0x10d9c2,text:_0x50ced2,usedPrefix:_0x29d017,command:_0x2fc1f4})=>{const _0x244c64=a0_0x2466;if(!_0x50ced2)throw _0x244c64(0x8c)+(_0x29d017+_0x2fc1f4)+_0x244c64(0xbf)+(_0x29d017+_0x2fc1f4)+_0x244c64(0xca)+(_0x29d017+_0x2fc1f4)+'\x20https://open.spotify.com/album/...\x0a•\x20'+(_0x29d017+_0x2fc1f4)+'\x20https://open.spotify.com/playlist/...\x0a•\x20'+(_0x29d017+_0x2fc1f4)+_0x244c64(0xa2);try{await _0x34400e['react']('⏳');let _0x467b0d=![],_0x17eff5=![],_0x45572b=![],_0x17a2a4;if(_0x50ced2[_0x244c64(0x75)](_0x244c64(0xa3))){_0x467b0d=!![],_0x17a2a4=await spotifyAlbum(_0x50ced2);if(!_0x17a2a4?.[_0x244c64(0x7d)]?.[_0x244c64(0x69)])throw'⚠️\x20No\x20se\x20encontraron\x20canciones\x20en\x20el\x20álbum.';}else{if(_0x50ced2[_0x244c64(0x75)](_0x244c64(0xa7))){_0x17eff5=!![],_0x17a2a4=await spotifyPlaylist(_0x50ced2);if(!_0x17a2a4?.[_0x244c64(0x7d)]?.[_0x244c64(0x69)])throw'⚠️\x20No\x20se\x20encontraron\x20canciones\x20en\x20la\x20playlist.';}else{if(_0x50ced2[_0x244c64(0x75)](_0x244c64(0xcc))||_0x50ced2[_0x244c64(0x75)](_0x244c64(0xb3))){_0x467b0d=!![],_0x45572b=!![],_0x17a2a4=await spotifyArtist(_0x50ced2);if(!_0x17a2a4?.[_0x244c64(0x7d)]?.[_0x244c64(0x69)])throw _0x244c64(0xa4);}else{if(_0x50ced2[_0x244c64(0x75)](_0x244c64(0xc3)))_0x17a2a4={'tracks':[await spotifyTrack(_0x50ced2)]};else{if(_0x50ced2[_0x244c64(0xc1)]()['includes'](_0x244c64(0x95))){_0x467b0d=!![],_0x17a2a4=await spotifyAlbumSearch(_0x50ced2);if(!_0x17a2a4?.[_0x244c64(0x7d)]?.[_0x244c64(0x69)])throw'⚠️\x20No\x20se\x20encontraron\x20canciones\x20en\x20el\x20álbum.';}else{const _0x485408=await spotifyxv(_0x50ced2);if(!_0x485408['length']||!_0x485408[0x0]['url'])throw _0x244c64(0xc6);_0x17a2a4={'tracks':[_0x485408[0x0]]};}}}}}if(_0x467b0d||_0x17eff5){let _0x5a9046=[];for(let _0x2aea79=0x0;_0x2aea79<_0x17a2a4[_0x244c64(0x7d)]['length'];_0x2aea79++){const _0x39a21c=_0x17a2a4[_0x244c64(0x7d)][_0x2aea79],_0x3dc40d=_0x39a21c['name']+'\x20('+(_0x2aea79+0x1)+'/'+_0x17a2a4[_0x244c64(0x7d)][_0x244c64(0x69)]+')',_0x28caf1=formatExtractionMessage(_0x3dc40d,0x1,_0x244c64(0x90)),_0x158ffa=await _0x10d9c2[_0x244c64(0xa9)](_0x34400e['chat'],{'text':_0x28caf1}),_0x4dbdb3=await downloadWithRetries(_0x39a21c,_0x10d9c2,_0x34400e,_0x158ffa,_0x3dc40d);_0x4dbdb3?(await _0x10d9c2[_0x244c64(0xa9)](_0x34400e['chat'],{'delete':_0x158ffa[_0x244c64(0x8e)]}),await _0x10d9c2[_0x244c64(0xa9)](_0x34400e[_0x244c64(0x71)],{'audio':{'url':_0x4dbdb3[_0x244c64(0x6e)]},'fileName':_0x4dbdb3[_0x244c64(0xba)]+_0x244c64(0x9a),'mimetype':_0x244c64(0xae),'contextInfo':{'externalAdReply':{'showAdAttribution':![],'title':''+_0x4dbdb3['title'],'body':_0x244c64(0x73)+_0x4dbdb3['artist'],'description':_0x244c64(0x66)+_0x4dbdb3[_0x244c64(0x95)],'thumbnailUrl':_0x4dbdb3['thumbnail']}}}),await new Promise(_0x3f395b=>setTimeout(_0x3f395b,0x7d0))):_0x5a9046[_0x244c64(0xab)](_0x39a21c);}if(_0x5a9046[_0x244c64(0x69)]>0x0){let _0x31892e=_0x5a9046[_0x244c64(0x77)](_0x584820=>_0x584820[_0x244c64(0x98)])[_0x244c64(0x8a)]('\x0a');await _0x10d9c2['sendMessage'](_0x34400e[_0x244c64(0x71)],{'text':_0x244c64(0xcb)+_0x31892e});let _0x2fb02a=[];for(let _0x1782b0 of _0x5a9046){const _0x5128e9=_0x1782b0[_0x244c64(0x98)]+_0x244c64(0x89),_0x12cc65=formatExtractionMessage(_0x5128e9,0x1,_0x244c64(0x90)),_0x41b5a0=await _0x10d9c2[_0x244c64(0xa9)](_0x34400e[_0x244c64(0x71)],{'text':_0x12cc65}),_0x4cb1f4=await downloadWithRetries(_0x1782b0,_0x10d9c2,_0x34400e,_0x41b5a0,_0x5128e9);_0x4cb1f4?(await _0x10d9c2['sendMessage'](_0x34400e[_0x244c64(0x71)],{'delete':_0x41b5a0[_0x244c64(0x8e)]}),await _0x10d9c2[_0x244c64(0xa9)](_0x34400e[_0x244c64(0x71)],{'audio':{'url':_0x4cb1f4[_0x244c64(0x6e)]},'fileName':_0x4cb1f4['title']+'.mp3','mimetype':_0x244c64(0xae),'contextInfo':{'externalAdReply':{'showAdAttribution':![],'title':''+_0x4cb1f4[_0x244c64(0xba)],'body':_0x244c64(0x73)+_0x4cb1f4[_0x244c64(0xb9)],'description':'Álbum:\x20'+_0x4cb1f4[_0x244c64(0x95)],'thumbnailUrl':_0x4cb1f4[_0x244c64(0xb6)]}}}),await new Promise(_0x11f5b6=>setTimeout(_0x11f5b6,0x7d0))):_0x2fb02a[_0x244c64(0xab)](_0x1782b0);}if(_0x2fb02a[_0x244c64(0x69)]>0x0){let _0x208364=_0x2fb02a[_0x244c64(0x77)](_0x1fb69f=>_0x1fb69f[_0x244c64(0x98)])[_0x244c64(0x8a)]('\x0a');await _0x10d9c2['sendMessage'](_0x34400e['chat'],{'text':'No\x20se\x20pudieron\x20extraer\x20las\x20siguientes\x20sombras:\x0a'+_0x208364});}}}else{const _0x2f9081=_0x17a2a4[_0x244c64(0x7d)][0x0],_0x4c9297=_0x2f9081[_0x244c64(0x98)]+_0x244c64(0xcd),_0x385e4b=formatExtractionMessage(_0x4c9297,0x1,_0x244c64(0x90)),_0x48c584=await _0x10d9c2[_0x244c64(0xa9)](_0x34400e[_0x244c64(0x71)],{'text':_0x385e4b}),_0x248ed9=await downloadWithRetries(_0x2f9081,_0x10d9c2,_0x34400e,_0x48c584,_0x4c9297);if(!_0x248ed9){await _0x10d9c2['sendMessage'](_0x34400e['chat'],{'text':_0x244c64(0xcb)+_0x2f9081['name']});const _0x4c22d2=formatExtractionMessage(_0x4c9297+_0x244c64(0x89),0x1,_0x244c64(0x90)),_0x156d02=await _0x10d9c2[_0x244c64(0xa9)](_0x34400e[_0x244c64(0x71)],{'text':_0x4c22d2}),_0x555113=await downloadWithRetries(_0x2f9081,_0x10d9c2,_0x34400e,_0x156d02,_0x4c9297+_0x244c64(0x89));!_0x555113?await _0x10d9c2[_0x244c64(0xa9)](_0x34400e[_0x244c64(0x71)],{'text':_0x244c64(0x9c)+_0x2f9081[_0x244c64(0x98)]}):(await _0x10d9c2[_0x244c64(0xa9)](_0x34400e[_0x244c64(0x71)],{'delete':_0x156d02[_0x244c64(0x8e)]}),await _0x10d9c2[_0x244c64(0xa9)](_0x34400e[_0x244c64(0x71)],{'audio':{'url':_0x555113['music']},'fileName':_0x555113['title']+_0x244c64(0x9a),'mimetype':_0x244c64(0xae),'contextInfo':{'externalAdReply':{'showAdAttribution':![],'title':''+_0x555113[_0x244c64(0xba)],'body':_0x244c64(0x73)+_0x555113[_0x244c64(0xb9)],'description':_0x244c64(0x66)+_0x555113[_0x244c64(0x95)],'thumbnailUrl':_0x555113[_0x244c64(0xb6)]}}}),await new Promise(_0x2646a7=>setTimeout(_0x2646a7,0x7d0)));}else await _0x10d9c2[_0x244c64(0xa9)](_0x34400e[_0x244c64(0x71)],{'delete':_0x48c584['key']}),await _0x10d9c2[_0x244c64(0xa9)](_0x34400e['chat'],{'audio':{'url':_0x248ed9['music']},'fileName':_0x248ed9[_0x244c64(0xba)]+_0x244c64(0x9a),'mimetype':_0x244c64(0xae),'contextInfo':{'externalAdReply':{'showAdAttribution':![],'title':''+_0x248ed9['title'],'body':'Artista:\x20'+_0x248ed9[_0x244c64(0xb9)],'description':_0x244c64(0x66)+_0x248ed9['album'],'thumbnailUrl':_0x248ed9[_0x244c64(0xb6)]}}}),await _0x34400e['react']('✅');}}catch(_0x91918a){await _0x34400e[_0x244c64(0xb1)]('❌'),await _0x34400e['reply'](_0x244c64(0xb5)+(_0x91918a[_0x244c64(0x6d)]||_0x91918a)),console[_0x244c64(0x6c)](_0x91918a);}};handler[a0_0x18a9e3(0x6b)]=[a0_0x18a9e3(0x9f),a0_0x18a9e3(0x6e)],handler[a0_0x18a9e3(0xce)]=[a0_0x18a9e3(0xb8)],handler['command']=[a0_0x18a9e3(0x9f),a0_0x18a9e3(0x6e)],handler[a0_0x18a9e3(0xd2)]=![];function a0_0x2466(_0x2d8459,_0xc514ad){const _0x4a919f=a0_0x4a91();return a0_0x2466=function(_0x246668,_0x247055){_0x246668=_0x246668-0x65;let _0x5ccf5d=_0x4a919f[_0x246668];return _0x5ccf5d;},a0_0x2466(_0x2d8459,_0xc514ad);}function a0_0x4a91(){const _0x5bdf8c=['audio/mpeg','data','▰▰▰▰▰▰▰▱▱▱\x2070%','react','https://api.spotify.com/v1/playlists/','spotify.com/artist','track','❌\x20*Error:*\x20','thumbnail','15354zFjXBe','downloader','artist','title','61eOpKmQ','Error\x20al\x20obtener\x20la\x20imagen:\x20','floor','Top\x20Tracks','\x20Bellyache\x0a•\x20','8053390BenxCK','toLowerCase','▰▰▰▰▰▱▱▱▱▱\x2050%','spotify.com/track','base64','split','❌\x20*Error:*\x20No\x20se\x20encontraron\x20resultados.','statusText','application/x-www-form-urlencoded','access_token','\x20https://open.spotify.com/track/...\x0a•\x20','Igris\x20intentará\x20obtener\x20de\x20nuevo\x20las\x20sombras\x20de:\x0a','open.spotify.com/artist','\x20(1/1)','tags','https://api.spotify.com/v1/tracks/','2931536mwYUsn','No\x20se\x20pudo\x20extraer\x20el\x20ID\x20del\x20artista.','group','albums','▰▰▰▰▰▰▰▰▰▰\x20100%\x20-\x20Falló\x20la\x20extracción\x20de:\x20','Álbum:\x20','https://api.spotify.com/v1/search?q=','▰▱▱▱▱▱▱▱▱▱\x2010%','length','duration_ms','help','error','message','music','No\x20se\x20pudo\x20obtener\x20el\x20enlace\x20de\x20descarga\x20para\x20','images','chat','expiresAt','Artista:\x20','artists','includes','43706tTpqaS','map','\x0a💠\x20Progreso:\x20','Bearer\x20','url','1977577aCXusY','&type=album','tracks','▰▰▰▰▱▱▱▱▱▱\x2040%','playlist','indexOf','https://api.spotify.com/v1/artists/','▰▰▱▱▱▱▱▱▱▱\x2020%','No\x20se\x20pudo\x20extraer\x20el\x20ID\x20de\x20la\x20playlist.','▰▰▰▰▰▰▰▰▰▰\x20100%\x20-\x20¡Descargado!','33990506nOOqzk','\x0a🛠️\x20Intento:\x20','712jEOYyD','toString','\x20(Reintento)','join','18ysKkvo','⚔️\x20Error:\x20No\x20ingresaste\x20ninguna\x20búsqueda\x20o\x20enlace.\x0a\x0aEjemplo:\x0a•\x20','items','key','No\x20se\x20pudo\x20extraer\x20el\x20ID\x20del\x20álbum.','▱▱▱▱▱▱▱▱▱▱\x200%','▰▰▰▰▰▰▰▰▱▱\x2080%','post','get','json','album','external_urls','token','name','▰▰▰▰▰▰▰▰▰▱\x2090%','.mp3','&type=track','No\x20se\x20pudo\x20extraer\x20la\x20sombra\x20de:\x20','https://api.spotify.com/v1/albums/','from','spotify','then','━━━━━━━━━━━━━━━━━━\x0a⚔️\x20Extracción\x20en\x20Curso\x0a🌟\x20Objetivo:\x20','\x20https://open.spotify.com/artist/...','open.spotify.com/album','⚠️\x20No\x20se\x20encontraron\x20canciones\x20para\x20el\x20artista.','expires_in','1918926jbmEIw','open.spotify.com/playlist','No\x20se\x20pudo\x20extraer\x20el\x20ID\x20del\x20track.','sendMessage','▰▰▰▱▱▱▱▱▱▱\x2030%','push','20yAPlLz','/top-tracks?market=US'];a0_0x4a91=function(){return _0x5bdf8c;};return a0_0x4a91();}export default handler;async function spotifyxv(_0x866d71){const _0x1d97cf=a0_0x18a9e3,_0x130e06=await getSpotifyToken();try{let _0x2822cd=await a0_0x2f6d60({'method':_0x1d97cf(0x93),'url':_0x1d97cf(0x67)+encodeURIComponent(_0x866d71)+_0x1d97cf(0x9b),'headers':{'Authorization':_0x1d97cf(0x79)+_0x130e06}});const _0x4ec176=_0x2822cd[_0x1d97cf(0xaf)]['tracks']['items'];return _0x4ec176[_0x1d97cf(0x77)](_0x58f832=>({'name':_0x58f832['name'],'artist':_0x58f832[_0x1d97cf(0x74)]['map'](_0x2912b6=>_0x2912b6[_0x1d97cf(0x98)])[_0x1d97cf(0x8a)](',\x20'),'album':_0x58f832[_0x1d97cf(0x95)][_0x1d97cf(0x98)],'duration':timestamp(_0x58f832[_0x1d97cf(0x6a)]),'url':_0x58f832[_0x1d97cf(0x96)][_0x1d97cf(0x9f)],'thumbnail':_0x58f832['album'][_0x1d97cf(0x70)][0x0]?.[_0x1d97cf(0x7a)]||''}));}catch(_0x3eaca8){return console[_0x1d97cf(0x6c)](_0x3eaca8),[];}}async function spotifyAlbum(_0x488976){const _0x29209c=a0_0x18a9e3;let _0x536327;try{const _0x234cab=_0x488976['split']('/');_0x536327=_0x234cab[_0x234cab['indexOf'](_0x29209c(0x95))+0x1][_0x29209c(0xc5)]('?')[0x0];}catch(_0x196162){throw new Error(_0x29209c(0x8f));}const _0x592c42=await getSpotifyToken();let _0x45c677=await a0_0x2f6d60({'method':_0x29209c(0x93),'url':_0x29209c(0x9d)+_0x536327,'headers':{'Authorization':_0x29209c(0x79)+_0x592c42}});const _0x2d8bc2=_0x45c677[_0x29209c(0xaf)],_0x31e4c6=_0x2d8bc2[_0x29209c(0x7d)]['items'][_0x29209c(0x77)](_0x433b6b=>({'name':_0x433b6b['name'],'artist':_0x433b6b[_0x29209c(0x74)][_0x29209c(0x77)](_0x3133e0=>_0x3133e0['name'])[_0x29209c(0x8a)](',\x20'),'album':_0x2d8bc2[_0x29209c(0x98)],'url':_0x433b6b[_0x29209c(0x96)][_0x29209c(0x9f)],'thumbnail':_0x2d8bc2[_0x29209c(0x70)][0x0]?.[_0x29209c(0x7a)]||''}));return{'album':_0x2d8bc2,'tracks':_0x31e4c6};}async function spotifyAlbumSearch(_0x58437a){const _0x1a2ff7=a0_0x18a9e3,_0x5561f7=await getSpotifyToken();let _0x138959=await a0_0x2f6d60({'method':_0x1a2ff7(0x93),'url':_0x1a2ff7(0x67)+encodeURIComponent(_0x58437a)+_0x1a2ff7(0x7c),'headers':{'Authorization':_0x1a2ff7(0x79)+_0x5561f7}});const _0x2270b7=_0x138959['data'][_0x1a2ff7(0xd3)][_0x1a2ff7(0x8d)];if(!_0x2270b7[_0x1a2ff7(0x69)])return null;const _0x1f1894=_0x2270b7[0x0]['id'];let _0x21bcbc=await a0_0x2f6d60({'method':_0x1a2ff7(0x93),'url':_0x1a2ff7(0x9d)+_0x1f1894,'headers':{'Authorization':_0x1a2ff7(0x79)+_0x5561f7}});const _0x48830e=_0x21bcbc[_0x1a2ff7(0xaf)],_0x2b6dfb=_0x48830e[_0x1a2ff7(0x7d)][_0x1a2ff7(0x8d)][_0x1a2ff7(0x77)](_0x3f49b1=>({'name':_0x3f49b1[_0x1a2ff7(0x98)],'artist':_0x3f49b1['artists'][_0x1a2ff7(0x77)](_0x35a96b=>_0x35a96b[_0x1a2ff7(0x98)])['join'](',\x20'),'album':_0x48830e[_0x1a2ff7(0x98)],'url':_0x3f49b1['external_urls'][_0x1a2ff7(0x9f)],'thumbnail':_0x48830e[_0x1a2ff7(0x70)][0x0]?.[_0x1a2ff7(0x7a)]||''}));return{'album':_0x48830e,'tracks':_0x2b6dfb};}async function spotifyPlaylist(_0xd63e52){const _0x590335=a0_0x18a9e3;let _0x5a73e4;try{const _0x425792=_0xd63e52[_0x590335(0xc5)]('/');_0x5a73e4=_0x425792[_0x425792[_0x590335(0x80)](_0x590335(0x7f))+0x1][_0x590335(0xc5)]('?')[0x0];}catch(_0x182ea3){throw new Error(_0x590335(0x83));}const _0x4aeb68=await getSpotifyToken();let _0x43c70a=await a0_0x2f6d60({'method':_0x590335(0x93),'url':_0x590335(0xb2)+_0x5a73e4,'headers':{'Authorization':'Bearer\x20'+_0x4aeb68}});const _0x180886=_0x43c70a[_0x590335(0xaf)],_0x4da232=_0x180886[_0x590335(0x7d)][_0x590335(0x8d)][_0x590335(0x77)](_0x13b182=>{const _0x432938=_0x590335,_0x589cc8=_0x13b182[_0x432938(0xb4)];return{'name':_0x589cc8[_0x432938(0x98)],'artist':_0x589cc8[_0x432938(0x74)]['map'](_0x2f3faf=>_0x2f3faf['name'])[_0x432938(0x8a)](',\x20'),'album':_0x180886[_0x432938(0x98)],'url':_0x589cc8[_0x432938(0x96)][_0x432938(0x9f)],'thumbnail':_0x589cc8[_0x432938(0x95)][_0x432938(0x70)][0x0]?.[_0x432938(0x7a)]||''};});return{'album':{'name':_0x180886['name']},'tracks':_0x4da232};}async function spotifyArtist(_0xaeca87){const _0x37ec2f=a0_0x18a9e3;let _0x5f57d0;try{const _0x5f3633=_0xaeca87[_0x37ec2f(0xc5)]('/');_0x5f57d0=_0x5f3633[_0x5f3633['indexOf'](_0x37ec2f(0xb9))+0x1][_0x37ec2f(0xc5)]('?')[0x0];}catch(_0xacfef1){throw new Error(_0x37ec2f(0xd1));}const _0x2fbee5=await getSpotifyToken();let _0x26b164=await a0_0x2f6d60({'method':_0x37ec2f(0x93),'url':_0x37ec2f(0x81)+_0x5f57d0+_0x37ec2f(0xad),'headers':{'Authorization':_0x37ec2f(0x79)+_0x2fbee5}});const _0x25d384=_0x26b164[_0x37ec2f(0xaf)],_0x774ada=_0x25d384[_0x37ec2f(0x7d)]['map'](_0x6dd9ff=>({'name':_0x6dd9ff[_0x37ec2f(0x98)],'artist':_0x6dd9ff[_0x37ec2f(0x74)][_0x37ec2f(0x77)](_0x1c78fb=>_0x1c78fb[_0x37ec2f(0x98)])[_0x37ec2f(0x8a)](',\x20'),'album':_0x37ec2f(0xbe),'url':_0x6dd9ff[_0x37ec2f(0x96)]['spotify'],'thumbnail':_0x6dd9ff[_0x37ec2f(0x95)][_0x37ec2f(0x70)][0x0]?.[_0x37ec2f(0x7a)]||''}));return{'album':{'name':'Top\x20Tracks'},'tracks':_0x774ada};}async function spotifyTrack(_0x33b1aa){const _0x3ce864=a0_0x18a9e3;let _0x1ae201;try{const _0x201145=_0x33b1aa['split']('/');_0x1ae201=_0x201145[_0x201145['indexOf'](_0x3ce864(0xb4))+0x1][_0x3ce864(0xc5)]('?')[0x0];}catch(_0x30d63a){throw new Error(_0x3ce864(0xa8));}const _0x4e7cdc=await getSpotifyToken();let _0x419a7a=await a0_0x2f6d60({'method':_0x3ce864(0x93),'url':_0x3ce864(0xcf)+_0x1ae201,'headers':{'Authorization':_0x3ce864(0x79)+_0x4e7cdc}});const _0x4979f8=_0x419a7a[_0x3ce864(0xaf)];return{'name':_0x4979f8['name'],'artist':_0x4979f8['artists']['map'](_0x60851c=>_0x60851c[_0x3ce864(0x98)])['join'](',\x20'),'album':_0x4979f8[_0x3ce864(0x95)][_0x3ce864(0x98)],'url':_0x4979f8[_0x3ce864(0x96)]['spotify'],'thumbnail':_0x4979f8[_0x3ce864(0x95)]['images'][0x0]?.[_0x3ce864(0x7a)]||''};}function timestamp(_0x537c0e){const _0x2beb04=a0_0x18a9e3,_0x5011ee=Math[_0x2beb04(0xbd)](_0x537c0e/0xea60),_0x576478=Math[_0x2beb04(0xbd)](_0x537c0e%0xea60/0x3e8);return _0x5011ee+':'+(_0x576478<0xa?'0':'')+_0x576478;}