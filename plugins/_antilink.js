(function(_0x4c0555,_0x26b192){const _0x16694a=a0_0x43fd,_0x2d0b7d=_0x4c0555();while(!![]){try{const _0x319a48=parseInt(_0x16694a(0x18a))/0x1*(parseInt(_0x16694a(0x17c))/0x2)+parseInt(_0x16694a(0x181))/0x3+parseInt(_0x16694a(0x182))/0x4*(parseInt(_0x16694a(0x177))/0x5)+parseInt(_0x16694a(0x180))/0x6+-parseInt(_0x16694a(0x170))/0x7*(parseInt(_0x16694a(0x178))/0x8)+parseInt(_0x16694a(0x188))/0x9+-parseInt(_0x16694a(0x189))/0xa;if(_0x319a48===_0x26b192)break;else _0x2d0b7d['push'](_0x2d0b7d['shift']());}catch(_0x156b2b){_0x2d0b7d['push'](_0x2d0b7d['shift']());}}}(a0_0x53df,0x6d96f));const linkRegex=/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;export async function before(_0x113576,{conn:_0x2ad802,isAdmin:_0x181cb7,isBotAdmin:_0x141112}){const _0xaa51f0=a0_0x43fd;if(_0x113576['fromMe'])return!![];if(!_0x113576['isGroup'])return![];const _0x50970f=global['db'][_0xaa51f0(0x184)][_0xaa51f0(0x17b)][_0x113576[_0xaa51f0(0x175)]],_0x44927d=global['db'][_0xaa51f0(0x184)][_0xaa51f0(0x17d)][this[_0xaa51f0(0x179)]['jid']]||{},_0x68adfe='@'+_0x113576[_0xaa51f0(0x183)][_0xaa51f0(0x186)]`@`[0x0],_0x623422=linkRegex[_0xaa51f0(0x17a)](_0x113576[_0xaa51f0(0x176)]);if(_0x181cb7||!_0x50970f[_0xaa51f0(0x16e)])return!![];const _0x311cef=_0xaa51f0(0x187)+_0x68adfe+_0xaa51f0(0x171);if(_0x623422){if(_0x141112){const _0x2f6215='https://chat.whatsapp.com/'+await _0x2ad802[_0xaa51f0(0x172)](_0x113576['chat']);if(_0x113576[_0xaa51f0(0x176)][_0xaa51f0(0x17e)](_0x2f6215))return!![];}await _0x2ad802['sendMessage'](_0x113576[_0xaa51f0(0x175)],{'delete':{'remoteJid':_0x113576['chat'],'fromMe':![],'id':_0x113576[_0xaa51f0(0x173)]['id'],'participant':_0x113576[_0xaa51f0(0x173)][_0xaa51f0(0x185)]}}),await _0x2ad802[_0xaa51f0(0x16f)](_0x113576[_0xaa51f0(0x175)],{'text':_0x311cef,'mentions':[_0x113576[_0xaa51f0(0x183)]]},{'quoted':_0x113576}),_0x141112&&_0x44927d['restrict']&&await _0x2ad802[_0xaa51f0(0x174)](_0x113576[_0xaa51f0(0x175)],[_0x113576['sender']],_0xaa51f0(0x17f));}return!![];}function a0_0x43fd(_0x471ee5,_0x427d0a){const _0x53dfbe=a0_0x53df();return a0_0x43fd=function(_0x43fd27,_0x4edb69){_0x43fd27=_0x43fd27-0x16e;let _0x1e1be5=_0x53dfbe[_0x43fd27];return _0x1e1be5;},a0_0x43fd(_0x471ee5,_0x427d0a);}function a0_0x53df(){const _0x1d5c39=['includes','remove','2335320pSpRRq','2653602FydeRm','1060836yDOCxw','sender','data','participant','split','━━━━━━✦❘༻༺❘✦━━━━━━\x0a⚠️\x20*','4835790uLsRrM','20113810xAicDR','12531yAJZsX','antiLink','sendMessage','7dKWAuH',',\x20está\x20prohibido\x20enviar\x20enlaces\x20de\x20grupos.*\x0a━━━━━━✦❘༻༺❘✦━━━━━━','groupInviteCode','key','groupParticipantsUpdate','chat','text','15YLIvNo','4178888DZbjHQ','user','test','chats','60wIdtVM','settings'];a0_0x53df=function(){return _0x1d5c39;};return a0_0x53df();}