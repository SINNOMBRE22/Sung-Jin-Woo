(function(_0xf7c3d6,_0x4cbfb5){const _0x1ac749=a0_0x6a20,_0x270bfb=_0xf7c3d6();while(!![]){try{const _0x19e637=parseInt(_0x1ac749(0x105))/0x1*(-parseInt(_0x1ac749(0x112))/0x2)+-parseInt(_0x1ac749(0x10b))/0x3*(-parseInt(_0x1ac749(0x125))/0x4)+-parseInt(_0x1ac749(0x120))/0x5*(parseInt(_0x1ac749(0x10f))/0x6)+parseInt(_0x1ac749(0x108))/0x7+parseInt(_0x1ac749(0x118))/0x8*(-parseInt(_0x1ac749(0x11f))/0x9)+-parseInt(_0x1ac749(0xec))/0xa*(parseInt(_0x1ac749(0x110))/0xb)+-parseInt(_0x1ac749(0x115))/0xc*(-parseInt(_0x1ac749(0x11b))/0xd);if(_0x19e637===_0x4cbfb5)break;else _0x270bfb['push'](_0x270bfb['shift']());}catch(_0x2f15fd){_0x270bfb['push'](_0x270bfb['shift']());}}}(a0_0x5cc4,0x41441));import a0_0x5c3eff from'axios';import a0_0x2755af from'node-fetch';import a0_0x325048 from'yt-search';let handler=async(_0x4d5888,{conn:_0x2a7e01,text:_0x2b9ddd,usedPrefix:_0x5064f4,command:_0xcb8de2})=>{const _0x396e67=a0_0x6a20;if(!_0x2b9ddd)throw _0x396e67(0x122)+(_0x5064f4+_0xcb8de2)+_0x396e67(0x101);const _0x3d19f7=await a0_0x2755af(apis+_0x396e67(0x11a)+encodeURIComponent(_0x2b9ddd)),_0x269345=await _0x3d19f7[_0x396e67(0x100)]();if(!_0x269345[_0x396e67(0xfa)]||_0x269345[_0x396e67(0xfa)][_0x396e67(0x10c)]===0x0)throw'⚠️\x20No\x20results\x20found\x20for\x20that\x20query.';const _0x57a767=_0x269345['data'][0x0];let _0x453cee=_0x396e67(0xf6)+_0x57a767[_0x396e67(0x11d)]+_0x396e67(0x103)+_0x57a767['artist']+_0x396e67(0x121)+_0x57a767[_0x396e67(0x11c)]+_0x396e67(0x109)+_0x57a767[_0x396e67(0xf1)]+_0x396e67(0x10e)+_0x57a767[_0x396e67(0xef)]+_0x396e67(0x124);await _0x2a7e01[_0x396e67(0x114)](_0x4d5888[_0x396e67(0x11e)],{'text':_0x453cee,'contextInfo':{'forwardingScore':0x1,'isForwarded':!![],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'renderLargerThumbnail':!![],'title':_0x57a767[_0x396e67(0x11d)],'body':'Spotify\x20Downloader','mediaType':0x1,'thumbnailUrl':_0x57a767['image'],'mediaUrl':_0x57a767[_0x396e67(0xef)],'sourceUrl':_0x57a767[_0x396e67(0xef)]}}},{'quoted':_0x4d5888}),_0x4d5888[_0x396e67(0x106)]('⌛️');try{const _0x669189=await a0_0x2755af(_0x396e67(0xf4)+_0x57a767[_0x396e67(0xef)]),_0x8ecdf3=await _0x669189[_0x396e67(0x100)]();await _0x2a7e01[_0x396e67(0x114)](_0x4d5888['chat'],{'audio':{'url':_0x8ecdf3[_0x396e67(0xfa)][_0x396e67(0xf9)]},'fileName':_0x57a767[_0x396e67(0x11d)]+_0x396e67(0x107),'mimetype':_0x396e67(0xf7)},{'quoted':_0x4d5888}),_0x4d5888[_0x396e67(0x106)]('✅️');}catch{try{const _0x413b63=await a0_0x2755af(apis+_0x396e67(0xfc)+_0x57a767[_0x396e67(0xef)]),_0x2b6d09=await _0x413b63[_0x396e67(0x100)]();await _0x2a7e01[_0x396e67(0x114)](_0x4d5888[_0x396e67(0x11e)],{'audio':{'url':_0x2b6d09[_0x396e67(0xfa)][_0x396e67(0xef)]},'fileName':_0x57a767['title']+'.mp3','mimetype':_0x396e67(0xf7)},{'quoted':_0x4d5888}),_0x4d5888['react']('✅️');}catch{try{let _0x247382=await spotifyxv(_0x2b9ddd);if(!_0x247382[_0x396e67(0x10c)])throw'❌\x20No\x20results\x20found,\x20please\x20try\x20again.';const _0x53f737=await a0_0x2755af(_0x396e67(0x10a)+_0x57a767[_0x396e67(0xef)]),_0x4d4434=await _0x53f737[_0x396e67(0x100)]();await _0x2a7e01[_0x396e67(0x114)](_0x4d5888[_0x396e67(0x11e)],{'audio':{'url':_0x4d4434[_0x396e67(0x111)]['data']['download']},'fileName':_0x4d4434[_0x396e67(0x111)][_0x396e67(0xfa)]['title']+_0x396e67(0x107),'mimetype':'audio/mpeg'},{'quoted':_0x4d5888}),_0x4d5888[_0x396e67(0x106)]('✅️');}catch(_0x5bb912){_0x4d5888[_0x396e67(0x106)]('❌'),console[_0x396e67(0xfb)](_0x5bb912);}}}};handler['command']=['music'];export default handler;async function spotifyxv(_0x404fa2){const _0x27432a=a0_0x6a20;let _0x326912=await tokens();try{let _0x4daad1=await a0_0x5c3eff({'method':_0x27432a(0xf2),'url':_0x27432a(0xee)+encodeURIComponent(_0x404fa2)+'&type=track','headers':{'Authorization':'Bearer\x20'+_0x326912}});const _0x11c73f=_0x4daad1[_0x27432a(0xfa)][_0x27432a(0x117)][_0x27432a(0x102)],_0x1a9f24=_0x11c73f[_0x27432a(0x119)](_0x3bf61f=>({'name':_0x3bf61f['name'],'artist':_0x3bf61f[_0x27432a(0xfe)][_0x27432a(0x119)](_0x6fd5dc=>_0x6fd5dc[_0x27432a(0xed)])['join'](',\x20'),'album':_0x3bf61f[_0x27432a(0x11c)][_0x27432a(0xed)],'duration':timestamp(_0x3bf61f['duration_ms']),'url':_0x3bf61f[_0x27432a(0xf8)][_0x27432a(0x123)],'image':_0x3bf61f[_0x27432a(0x11c)]['images'][_0x27432a(0x10c)]?_0x3bf61f['album'][_0x27432a(0x104)][0x0][_0x27432a(0xef)]:''}));return _0x1a9f24;}catch(_0x5eacbc){return console[_0x27432a(0xfb)](_0x27432a(0x10d)+_0x5eacbc),[];}}async function tokens(){const _0x502549=a0_0x6a20;try{const _0x15aacd=await a0_0x5c3eff({'method':'post','url':_0x502549(0xf5),'headers':{'Content-Type':_0x502549(0xfd),'Authorization':'Basic\x20'+Buffer['from'](_0x502549(0xf0))['toString'](_0x502549(0x113))},'data':_0x502549(0x116)});return _0x15aacd[_0x502549(0xfa)][_0x502549(0xf3)];}catch(_0x46e5d1){console[_0x502549(0xfb)]('Error\x20in\x20tokens:\x20'+_0x46e5d1);throw new Error('Could\x20not\x20obtain\x20access\x20token');}}function a0_0x5cc4(){const _0x3619db=['\x0aAlbum:\x20','Usage:\x20','spotify','\x0a\x20\x20','292BHqtkc','26740DyZhbG','name','https://api.spotify.com/v1/search?q=','url','acc6302297e040aeb6e4ac1fbdfd62c3:0e8439a1280a43aba9a5bc0a16f3f009','duration','get','access_token','https://api.siputzx.my.id/api/d/spotify?url=','https://accounts.spotify.com/api/token','\x0aTitle:\x20','audio/mpeg','external_urls','download','data','error','/download/spotifydl?url=','application/x-www-form-urlencoded','artists','floor','json','\x20<search\x20query>','items','\x0aArtist:\x20','images','134503xENdfJ','react','.mp3','2041858Jyrnax','\x0aDuration:\x20','https://archive-ui.tanakadomp.biz.id/download/spotify?url=','36sTOnLF','length','Error\x20in\x20spotifyxv:\x20','\x0aLink:\x20','5046qKKndQ','935DpMbgU','result','4YROHSs','base64','sendMessage','1344epUjcU','grant_type=client_credentials','tracks','1093672rlkBGp','map','/search/spotify?q=','131066zPJdAL','album','title','chat','9xGRUWk','3100dVjmma'];a0_0x5cc4=function(){return _0x3619db;};return a0_0x5cc4();}function a0_0x6a20(_0x3c1a43,_0x472228){const _0x5cc44f=a0_0x5cc4();return a0_0x6a20=function(_0x6a20ab,_0x5aa156){_0x6a20ab=_0x6a20ab-0xec;let _0x1a157a=_0x5cc44f[_0x6a20ab];return _0x1a157a;},a0_0x6a20(_0x3c1a43,_0x472228);}function timestamp(_0x34cb3b){const _0x150128=a0_0x6a20,_0x584c2b=Math['floor'](_0x34cb3b/0xea60),_0x5e1584=Math[_0x150128(0xff)](_0x34cb3b%0xea60/0x3e8);return _0x584c2b+':'+(_0x5e1584<0xa?'0':'')+_0x5e1584;}