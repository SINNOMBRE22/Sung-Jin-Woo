const a0_0x78ed27=a0_0x126e;function a0_0x126e(_0xc7262b,_0x263bc8){const _0x56f2ae=a0_0x56f2();return a0_0x126e=function(_0x126e8c,_0xf358df){_0x126e8c=_0x126e8c-0xeb;let _0x58a87f=_0x56f2ae[_0x126e8c];return _0x58a87f;},a0_0x126e(_0xc7262b,_0x263bc8);}function a0_0x56f2(){const _0x256efb=['9753024BftSCc','WebMessageInfo','participant','89PusXnH','sticker','14388525dXMBrI','fromObject','10QVMYAR','data','21862VMlbMr','sender','key','63960700szzIZz','2849716CEZKUf','chat','fakeObj','quoted','append','isBaileys','isGroup','fileSha256','773697jWoDAj','default','msg','user','9346855BHVBeK','pushName','base64','from','8sBvNtU'];a0_0x56f2=function(){return _0x256efb;};return a0_0x56f2();}(function(_0x301d2e,_0x26eb06){const _0x2e4ed3=a0_0x126e,_0x2d7ae1=_0x301d2e();while(!![]){try{const _0x65fa2f=-parseInt(_0x2e4ed3(0xfd))/0x1*(-parseInt(_0x2e4ed3(0x103))/0x2)+parseInt(_0x2e4ed3(0xf1))/0x3+-parseInt(_0x2e4ed3(0x107))/0x4*(-parseInt(_0x2e4ed3(0x101))/0x5)+parseInt(_0x2e4ed3(0xfa))/0x6+parseInt(_0x2e4ed3(0xf5))/0x7+-parseInt(_0x2e4ed3(0xf9))/0x8*(-parseInt(_0x2e4ed3(0xff))/0x9)+-parseInt(_0x2e4ed3(0x106))/0xa;if(_0x65fa2f===_0x26eb06)break;else _0x2d7ae1['push'](_0x2d7ae1['shift']());}catch(_0x5dbe6f){_0x2d7ae1['push'](_0x2d7ae1['shift']());}}}(a0_0x56f2,0xc7f60));const {proto,generateWAMessage,areJidsSameUser}=(await import('@whiskeysockets/baileys'))[a0_0x78ed27(0xf2)];export async function all(_0x4ffe92,_0x56d285){const _0x42962f=a0_0x78ed27;if(_0x4ffe92[_0x42962f(0xee)])return;if(!_0x4ffe92['message'])return;if(!_0x4ffe92[_0x42962f(0xf3)][_0x42962f(0xf0)])return;if(!(Buffer['from'](_0x4ffe92[_0x42962f(0xf3)][_0x42962f(0xf0)])['toString'](_0x42962f(0xf7))in global['db'][_0x42962f(0x102)][_0x42962f(0xfe)]))return;const _0x2ec720=global['db'][_0x42962f(0x102)][_0x42962f(0xfe)][Buffer[_0x42962f(0xf8)](_0x4ffe92[_0x42962f(0xf3)][_0x42962f(0xf0)])['toString'](_0x42962f(0xf7))],{text:_0x326055,mentionedJid:_0xb8c2b}=_0x2ec720,_0x87979c=await generateWAMessage(_0x4ffe92[_0x42962f(0x108)],{'text':_0x326055,'mentions':_0xb8c2b},{'userJid':this[_0x42962f(0xf4)]['id'],'quoted':_0x4ffe92[_0x42962f(0xec)]&&_0x4ffe92[_0x42962f(0xec)][_0x42962f(0xeb)]});_0x87979c[_0x42962f(0x105)]['fromMe']=areJidsSameUser(_0x4ffe92[_0x42962f(0x104)],this[_0x42962f(0xf4)]['id']),_0x87979c[_0x42962f(0x105)]['id']=_0x4ffe92[_0x42962f(0x105)]['id'],_0x87979c[_0x42962f(0xf6)]=_0x4ffe92[_0x42962f(0xf6)];if(_0x4ffe92[_0x42962f(0xef)])_0x87979c[_0x42962f(0xfc)]=_0x4ffe92[_0x42962f(0x104)];const _0x4d18d7={..._0x56d285,'messages':[proto[_0x42962f(0xfb)][_0x42962f(0x100)](_0x87979c)],'type':_0x42962f(0xed)};this['ev']['emit']('messages.upsert',_0x4d18d7);}