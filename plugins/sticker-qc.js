const a0_0x43185d=a0_0x1178;(function(_0x5ae3f1,_0x115cb7){const _0x2a5fb6=a0_0x1178,_0x27096a=_0x5ae3f1();while(!![]){try{const _0x55e49a=-parseInt(_0x2a5fb6(0x1d7))/0x1*(parseInt(_0x2a5fb6(0x1fe))/0x2)+-parseInt(_0x2a5fb6(0x204))/0x3*(-parseInt(_0x2a5fb6(0x1ef))/0x4)+parseInt(_0x2a5fb6(0x1db))/0x5+parseInt(_0x2a5fb6(0x1f7))/0x6+parseInt(_0x2a5fb6(0x1fa))/0x7+-parseInt(_0x2a5fb6(0x205))/0x8+-parseInt(_0x2a5fb6(0x1de))/0x9;if(_0x55e49a===_0x115cb7)break;else _0x27096a['push'](_0x27096a['shift']());}catch(_0x46a507){_0x27096a['push'](_0x27096a['shift']());}}}(a0_0xc00b,0xf1fd8));function a0_0xc00b(){const _0x128ea1=['language','packname','result','3270qIjJmb','length','application/json','.json','error.webp','data','174297hEaalx','11858000euyecq','https://bot.lyo.su/quote/generate','text','users','parse','slice','295TdKbLv','profilePictureUrl','\x5cs*','post','1576415OqswIY','sticker_qc','\x5c$&','10511145yRvWrf','fromMe','base64','./language/','replace','getName','reply','catch','sendFile','author','mentionedJid','from','texto2','texto3','quoted','user','png','52lQiLWZ','quote','help','tags','readFileSync','name','texto1','command','7572612xFNqmj','join','sender','12537000MqQqDG'];a0_0xc00b=function(){return _0x128ea1;};return a0_0xc00b();}import{sticker}from'../lib/sticker.js';import a0_0xe7d263 from'axios';const handler=async(_0x19a165,{conn:_0x4e9a71,args:_0x3c8b59,usedPrefix:_0xf0c0bf,command:_0x2b9e07})=>{const _0x4bd35f=a0_0x1178,_0x4af229=global,_0x2853eb=_0x4af229['db'][_0x4bd35f(0x203)][_0x4bd35f(0x208)][_0x19a165[_0x4bd35f(0x1f9)]][_0x4bd35f(0x1fb)],_0x53f627=JSON[_0x4bd35f(0x209)](fs[_0x4bd35f(0x1f3)](_0x4bd35f(0x1e1)+_0x2853eb+_0x4bd35f(0x201))),_0x243d80=_0x53f627['plugins'][_0x4bd35f(0x1dc)];let _0x43be66;if(_0x3c8b59[_0x4bd35f(0x1ff)]>=0x1)_0x43be66=_0x3c8b59[_0x4bd35f(0x20a)](0x0)[_0x4bd35f(0x1f8)]('\x20');else{if(_0x19a165['quoted']&&_0x19a165[_0x4bd35f(0x1ec)][_0x4bd35f(0x207)])_0x43be66=_0x19a165[_0x4bd35f(0x1ec)][_0x4bd35f(0x207)];else throw _0x243d80[_0x4bd35f(0x1f5)];}if(!_0x43be66)return _0x19a165[_0x4bd35f(0x1e4)](_0x243d80[_0x4bd35f(0x1ea)]);const _0x118fb0=_0x19a165[_0x4bd35f(0x1e8)]&&_0x19a165[_0x4bd35f(0x1e8)][0x0]?_0x19a165[_0x4bd35f(0x1e8)][0x0]:_0x19a165[_0x4bd35f(0x1df)]?_0x4e9a71[_0x4bd35f(0x1ed)]['jid']:_0x19a165['sender'],_0x16e6f9=new RegExp('@'+_0x118fb0['split']('@')[0x0][_0x4bd35f(0x1e2)](/[.*+?^${}()|[\]\\]/g,_0x4bd35f(0x1dd))+_0x4bd35f(0x1d9),'g'),_0x5528c3=_0x43be66[_0x4bd35f(0x1e2)](_0x16e6f9,'');if(_0x5528c3['length']>0x1e)return _0x19a165[_0x4bd35f(0x1e4)](_0x243d80[_0x4bd35f(0x1eb)]);const _0x20bc10=await _0x4e9a71[_0x4bd35f(0x1d8)](_0x118fb0)[_0x4bd35f(0x1e5)](_0x13235c=>'https://telegra.ph/file/24fa902ead26340f3df2c.png'),_0x45c31a=await _0x4e9a71[_0x4bd35f(0x1e3)](_0x118fb0),_0x2bf87a={'type':_0x4bd35f(0x1f0),'format':_0x4bd35f(0x1ee),'backgroundColor':'#000000','width':0x200,'height':0x300,'scale':0x2,'messages':[{'entities':[],'avatar':!![],'from':{'id':0x1,'name':''+(_0x118fb0?.[_0x4bd35f(0x1f4)]||_0x45c31a),'photo':{'url':''+_0x20bc10}},'text':_0x5528c3,'replyMessage':{}}]},_0x24e496=await a0_0xe7d263[_0x4bd35f(0x1da)](_0x4bd35f(0x206),_0x2bf87a,{'headers':{'Content-Type':_0x4bd35f(0x200)}}),_0x57cd08=Buffer[_0x4bd35f(0x1e9)](_0x24e496[_0x4bd35f(0x203)][_0x4bd35f(0x1fd)]['image'],_0x4bd35f(0x1e0));let _0x39b3c1=await sticker(_0x57cd08,![],global[_0x4bd35f(0x1fc)],global[_0x4bd35f(0x1e7)]);if(_0x39b3c1)return _0x4e9a71[_0x4bd35f(0x1e6)](_0x19a165['chat'],_0x39b3c1,_0x4bd35f(0x202),'',_0x19a165);};handler[a0_0x43185d(0x1f1)]=['qc'],handler[a0_0x43185d(0x1f2)]=['sticker'],handler[a0_0x43185d(0x1f6)]=/^(qc)$/i;function a0_0x1178(_0x983bf5,_0x5baeaa){const _0xc00bb5=a0_0xc00b();return a0_0x1178=function(_0x1178ef,_0x20834f){_0x1178ef=_0x1178ef-0x1d7;let _0x54bd75=_0xc00bb5[_0x1178ef];return _0x54bd75;},a0_0x1178(_0x983bf5,_0x5baeaa);}export default handler;