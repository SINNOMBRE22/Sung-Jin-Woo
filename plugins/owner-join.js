const a0_0x77384d=a0_0x3b52;(function(_0x146acf,_0x18524f){const _0x522ae3=a0_0x3b52,_0x12d3a2=_0x146acf();while(!![]){try{const _0x20419c=-parseInt(_0x522ae3(0x19f))/0x1*(-parseInt(_0x522ae3(0x190))/0x2)+-parseInt(_0x522ae3(0x187))/0x3*(-parseInt(_0x522ae3(0x198))/0x4)+-parseInt(_0x522ae3(0x17e))/0x5+parseInt(_0x522ae3(0x196))/0x6+-parseInt(_0x522ae3(0x192))/0x7*(-parseInt(_0x522ae3(0x19d))/0x8)+parseInt(_0x522ae3(0x188))/0x9+-parseInt(_0x522ae3(0x186))/0xa*(parseInt(_0x522ae3(0x18e))/0xb);if(_0x20419c===_0x18524f)break;else _0x12d3a2['push'](_0x12d3a2['shift']());}catch(_0xedfc87){_0x12d3a2['push'](_0x12d3a2['shift']());}}}(a0_0x1573,0x3cd3b));const linkRegex=/chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;function a0_0x3b52(_0x1c841e,_0x2122f1){const _0x1573ff=a0_0x1573();return a0_0x3b52=function(_0x3b5298,_0x156245){_0x3b5298=_0x3b5298-0x17d;let _0xf85b1c=_0x1573ff[_0x3b5298];return _0xf85b1c;},a0_0x3b52(_0x1c841e,_0x2122f1);}let enviando;const handler=async(_0xda7e06,{conn:_0x57afd7,text:_0xb5a5e2,isMods:_0x44b339,isOwner:_0x85fedd,isPrems:_0x231e32})=>{const _0xed11b6=a0_0x3b52,_0x344f9c=global,_0x4239bd=_0x344f9c['db'][_0xed11b6(0x184)]['users'][_0xda7e06[_0xed11b6(0x19b)]][_0xed11b6(0x19a)],_0x4d2349=JSON[_0xed11b6(0x18c)](fs[_0xed11b6(0x191)](_0xed11b6(0x18d)+_0x4239bd+_0xed11b6(0x181))),_0x39cf11=_0x4d2349[_0xed11b6(0x1a0)][_0xed11b6(0x19e)];if(enviando)return;enviando=!![];try{const _0x11e19d=_0xb5a5e2;if(!_0x11e19d||!_0x11e19d[_0xed11b6(0x197)](linkRegex))throw _0x39cf11['texto1'];const [_0x1121d9,_0x1c95f8]=_0x11e19d['match'](linkRegex)||[];if(_0x231e32||_0x44b339||_0x85fedd||_0xda7e06[_0xed11b6(0x185)]){const _0x29b417=await _0x57afd7[_0xed11b6(0x189)](_0x1c95f8);await _0x57afd7['sendMessage'](_0xda7e06[_0xed11b6(0x18b)],{'text':_0x39cf11[_0xed11b6(0x1a1)]},{'quoted':_0xda7e06}),enviando=![];}else{_0x57afd7[_0xed11b6(0x19c)](_0xda7e06[_0xed11b6(0x18b)],{'text':_0x39cf11['texto3']},{'quoted':_0xda7e06});const _0x5b9931=global[_0xed11b6(0x17f)][_0xed11b6(0x195)](([_0x3e9113])=>_0x3e9113)[0x0],_0x9ffdfb=Array[_0xed11b6(0x182)](_0x5b9931)?_0x5b9931:[_0x5b9931];for(const _0x35a499 of _0x9ffdfb)await _0x57afd7[_0xed11b6(0x19c)](_0x35a499+'@s.whatsapp.net',{'text':_0x39cf11[_0xed11b6(0x180)]+'@'+_0xda7e06[_0xed11b6(0x19b)]['split']('@')[0x0]+_0xed11b6(0x18a)+_0x11e19d,'mentions':[_0xda7e06['sender']],'contextInfo':{'forwardingScore':0x98967f,'isForwarded':!![],'mentionedJid':[_0xda7e06[_0xed11b6(0x19b)]],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'renderLargerThumbnail':!![],'title':global[_0xed11b6(0x199)],'containsAutoReply':!![],'mediaType':0x1,'thumbnail':imagen6,'mediaUrl':''+_0x11e19d,'sourceUrl':''+_0x11e19d}}},{'quoted':_0xda7e06});enviando=![];}}catch{enviando=![];throw _0x39cf11[_0xed11b6(0x194)];}};function a0_0x1573(){const _0x3861ef=['sendMessage','43896YUuEDu','owner_join','26191qVrSGf','plugins','texto2','tags','677785FbAdfN','owner','texto4','.json','isArray','command','data','fromMe','20exVfHR','51rRiXzC','1471446NbwfyL','groupAcceptInvite','\x0a*—◉\x20Link\x20del\x20grupo:*\x20','chat','parse','./language/','5358694wCoHXa','private','28kZlnWh','readFileSync','539qTHVzv','join\x20[chat.whatsapp.com]','texto5','filter','1464582pNwKIr','match','38176eNhfvk','titulowm2','language','sender'];a0_0x1573=function(){return _0x3861ef;};return a0_0x1573();}handler['help']=[a0_0x77384d(0x193)],handler[a0_0x77384d(0x17d)]=[a0_0x77384d(0x17f)],handler[a0_0x77384d(0x183)]=/^join|nuevogrupo$/i,handler[a0_0x77384d(0x18f)]=!![];export default handler;