const a0_0x5a3b7f=a0_0x36d6;function a0_0x201c(){const _0x3beb0a=['1684lRweOv','pushName','fakeObj','4278270dUPxpY','@whiskeysockets/baileys','231474RnRTRS','msg','participant','isBaileys','fromMe','chat','user','40AcpNPJ','message','sticker','from','8348692JOiuwj','base64','data','key','2295NJzvYe','1pkVibF','default','isGroup','3376952OGPbjs','1081606fBxLcb','sender','append','fromObject','984195EQaulO','quoted','12pQVkLm','fileSha256','7ZvcilB'];a0_0x201c=function(){return _0x3beb0a;};return a0_0x201c();}function a0_0x36d6(_0x267f70,_0x1ef202){const _0x201c40=a0_0x201c();return a0_0x36d6=function(_0x36d65d,_0x357bfa){_0x36d65d=_0x36d65d-0x176;let _0x44878a=_0x201c40[_0x36d65d];return _0x44878a;},a0_0x36d6(_0x267f70,_0x1ef202);}(function(_0xb52880,_0x4682ee){const _0x2cfcbc=a0_0x36d6,_0xc413a0=_0xb52880();while(!![]){try{const _0x414c9b=parseInt(_0x2cfcbc(0x186))/0x1*(parseInt(_0x2cfcbc(0x18a))/0x2)+parseInt(_0x2cfcbc(0x185))/0x3*(parseInt(_0x2cfcbc(0x193))/0x4)+-parseInt(_0x2cfcbc(0x17d))/0x5*(-parseInt(_0x2cfcbc(0x176))/0x6)+-parseInt(_0x2cfcbc(0x192))/0x7*(parseInt(_0x2cfcbc(0x189))/0x8)+-parseInt(_0x2cfcbc(0x18e))/0x9+parseInt(_0x2cfcbc(0x196))/0xa+parseInt(_0x2cfcbc(0x181))/0xb*(-parseInt(_0x2cfcbc(0x190))/0xc);if(_0x414c9b===_0x4682ee)break;else _0xc413a0['push'](_0xc413a0['shift']());}catch(_0x320bf4){_0xc413a0['push'](_0xc413a0['shift']());}}}(a0_0x201c,0x4b691));const {proto,generateWAMessage,areJidsSameUser}=(await import(a0_0x5a3b7f(0x197)))[a0_0x5a3b7f(0x187)];export async function all(_0x39293e,_0x2d1d87){const _0x9e089b=a0_0x5a3b7f;if(_0x39293e[_0x9e089b(0x179)])return;if(!_0x39293e[_0x9e089b(0x17e)])return;if(!_0x39293e[_0x9e089b(0x177)][_0x9e089b(0x191)])return;if(!(Buffer[_0x9e089b(0x180)](_0x39293e[_0x9e089b(0x177)][_0x9e089b(0x191)])['toString'](_0x9e089b(0x182))in global['db']['data'][_0x9e089b(0x17f)]))return;const _0x5d5f03=global['db'][_0x9e089b(0x183)][_0x9e089b(0x17f)][Buffer[_0x9e089b(0x180)](_0x39293e[_0x9e089b(0x177)]['fileSha256'])['toString'](_0x9e089b(0x182))],{text:_0x11d65a,mentionedJid:_0x2aed5a}=_0x5d5f03,_0x225254=await generateWAMessage(_0x39293e[_0x9e089b(0x17b)],{'text':_0x11d65a,'mentions':_0x2aed5a},{'userJid':this[_0x9e089b(0x17c)]['id'],'quoted':_0x39293e['quoted']&&_0x39293e[_0x9e089b(0x18f)][_0x9e089b(0x195)]});_0x225254[_0x9e089b(0x184)][_0x9e089b(0x17a)]=areJidsSameUser(_0x39293e[_0x9e089b(0x18b)],this[_0x9e089b(0x17c)]['id']),_0x225254[_0x9e089b(0x184)]['id']=_0x39293e[_0x9e089b(0x184)]['id'],_0x225254[_0x9e089b(0x194)]=_0x39293e[_0x9e089b(0x194)];if(_0x39293e[_0x9e089b(0x188)])_0x225254[_0x9e089b(0x178)]=_0x39293e[_0x9e089b(0x18b)];const _0x4403f0={..._0x2d1d87,'messages':[proto['WebMessageInfo'][_0x9e089b(0x18d)](_0x225254)],'type':_0x9e089b(0x18c)};this['ev']['emit']('messages.upsert',_0x4403f0);}