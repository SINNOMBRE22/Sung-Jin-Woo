const a0_0x155e9a=a0_0x596e;(function(_0x2b8bd8,_0x48126b){const _0xa292a9=a0_0x596e,_0x3cb331=_0x2b8bd8();while(!![]){try{const _0x4470a9=-parseInt(_0xa292a9(0x16a))/0x1+-parseInt(_0xa292a9(0x177))/0x2+-parseInt(_0xa292a9(0x169))/0x3*(-parseInt(_0xa292a9(0x160))/0x4)+parseInt(_0xa292a9(0x16c))/0x5*(parseInt(_0xa292a9(0x181))/0x6)+-parseInt(_0xa292a9(0x174))/0x7*(parseInt(_0xa292a9(0x176))/0x8)+parseInt(_0xa292a9(0x17c))/0x9+-parseInt(_0xa292a9(0x17d))/0xa*(parseInt(_0xa292a9(0x165))/0xb);if(_0x4470a9===_0x48126b)break;else _0x3cb331['push'](_0x3cb331['shift']());}catch(_0x5c214e){_0x3cb331['push'](_0x3cb331['shift']());}}}(a0_0x44cf,0x9bd96));function a0_0x44cf(){const _0x362722=['isArray','readFileSync','split','5103364ppwgov','texto1','owner_join','filter','sendMessage','210342gCuJmt','parse','help','texto2','3zLVqDQ','195283mMUVQe','titulowm2','5895260UBzeTK','owner','@s.whatsapp.net','users','.json','plugins','match','language','7EWgCwN','sender','1552368MXdPnF','914184iyURwE','chat','private','texto3','texto5','1250658nLzgsU','580yUFDvB','join\x20[chat.whatsapp.com]','\x0a*—◉\x20Link\x20del\x20grupo:*\x20','command','6AkAxil','groupAcceptInvite'];a0_0x44cf=function(){return _0x362722;};return a0_0x44cf();}const linkRegex=/chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;let enviando;const handler=async(_0x305ad1,{conn:_0x3efa98,text:_0x11df7f,isMods:_0x59e013,isOwner:_0x300fbe,isPrems:_0x1c3859})=>{const _0x2701a8=a0_0x596e,_0x36e5a7=global,_0x281e75=_0x36e5a7['db']['data'][_0x2701a8(0x16f)][_0x305ad1[_0x2701a8(0x175)]][_0x2701a8(0x173)],_0x3bedda=JSON[_0x2701a8(0x166)](fs[_0x2701a8(0x15e)]('./language/'+_0x281e75+_0x2701a8(0x170))),_0x33e1a8=_0x3bedda[_0x2701a8(0x171)][_0x2701a8(0x162)];if(enviando)return;enviando=!![];try{const _0x42eb0a=_0x11df7f;if(!_0x42eb0a||!_0x42eb0a[_0x2701a8(0x172)](linkRegex))throw _0x33e1a8[_0x2701a8(0x161)];const [_0xcdb66e,_0x5869a8]=_0x42eb0a[_0x2701a8(0x172)](linkRegex)||[];if(_0x1c3859||_0x59e013||_0x300fbe||_0x305ad1['fromMe']){const _0x5dba6d=await _0x3efa98[_0x2701a8(0x182)](_0x5869a8);await _0x3efa98[_0x2701a8(0x164)](_0x305ad1[_0x2701a8(0x178)],{'text':_0x33e1a8[_0x2701a8(0x168)]},{'quoted':_0x305ad1}),enviando=![];}else{_0x3efa98[_0x2701a8(0x164)](_0x305ad1['chat'],{'text':_0x33e1a8[_0x2701a8(0x17a)]},{'quoted':_0x305ad1});const _0x737b41=global[_0x2701a8(0x16d)][_0x2701a8(0x163)](([_0x38329e])=>_0x38329e)[0x0],_0x6288ee=Array[_0x2701a8(0x183)](_0x737b41)?_0x737b41:[_0x737b41];for(const _0x5c7273 of _0x6288ee)await _0x3efa98[_0x2701a8(0x164)](_0x5c7273+_0x2701a8(0x16e),{'text':_0x33e1a8['texto4']+'@'+_0x305ad1[_0x2701a8(0x175)][_0x2701a8(0x15f)]('@')[0x0]+_0x2701a8(0x17f)+_0x42eb0a,'mentions':[_0x305ad1[_0x2701a8(0x175)]],'contextInfo':{'forwardingScore':0x98967f,'isForwarded':!![],'mentionedJid':[_0x305ad1[_0x2701a8(0x175)]],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'renderLargerThumbnail':!![],'title':global[_0x2701a8(0x16b)],'containsAutoReply':!![],'mediaType':0x1,'thumbnail':imagen6,'mediaUrl':''+_0x42eb0a,'sourceUrl':''+_0x42eb0a}}},{'quoted':_0x305ad1});enviando=![];}}catch{enviando=![];throw _0x33e1a8[_0x2701a8(0x17b)];}};handler[a0_0x155e9a(0x167)]=[a0_0x155e9a(0x17e)],handler['tags']=[a0_0x155e9a(0x16d)],handler[a0_0x155e9a(0x180)]=/^join|nuevogrupo$/i,handler[a0_0x155e9a(0x179)]=!![];function a0_0x596e(_0x3a8f67,_0x4a1fd1){const _0x44cf18=a0_0x44cf();return a0_0x596e=function(_0x596eb5,_0x50bed9){_0x596eb5=_0x596eb5-0x15e;let _0x5e6ed1=_0x44cf18[_0x596eb5];return _0x5e6ed1;},a0_0x596e(_0x3a8f67,_0x4a1fd1);}export default handler;