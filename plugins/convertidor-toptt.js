const a0_0x1267b7=a0_0x1324;(function(_0x3abc86,_0x4eab05){const _0x4c7080=a0_0x1324,_0x5af48f=_0x3abc86();while(!![]){try{const _0x45183a=parseInt(_0x4c7080(0x1e3))/0x1+-parseInt(_0x4c7080(0x1d9))/0x2+-parseInt(_0x4c7080(0x1ec))/0x3+parseInt(_0x4c7080(0x1d0))/0x4+parseInt(_0x4c7080(0x1d2))/0x5*(-parseInt(_0x4c7080(0x1d4))/0x6)+-parseInt(_0x4c7080(0x1e1))/0x7+parseInt(_0x4c7080(0x1da))/0x8;if(_0x45183a===_0x4eab05)break;else _0x5af48f['push'](_0x5af48f['shift']());}catch(_0x5b419b){_0x5af48f['push'](_0x5af48f['shift']());}}}(a0_0x1fe1,0xa6a2a));function a0_0x1324(_0x5f5614,_0x110093){const _0x1fe178=a0_0x1fe1();return a0_0x1324=function(_0x13242b,_0x5e0612){_0x13242b=_0x13242b-0x1ce;let _0x53d5e3=_0x1fe178[_0x13242b];return _0x53d5e3;},a0_0x1324(_0x5f5614,_0x110093);}import{toPTT}from'../lib/converter.js';function a0_0x1fe1(){const _0x1e8f5f=['1228158agnIpH','18011808URFKge','chat','audio/mpeg','./language/','texto4','mp4','sender','5696334yHkgvK','data','1038353QBgBgC','texto3','mimetype','tags','toptt\x20(reply)','users','error.mp3','sendMessage','parse','3430992QlHIgF','language','readFileSync','sendFile','texto5','5177484eqhPrp','quoted','6650785FUlhGc','test','6cntuIy','command','.json','texto1','plugins'];a0_0x1fe1=function(){return _0x1e8f5f;};return a0_0x1fe1();}const handler=async(_0x28a8ae,{conn:_0x110e0d,usedPrefix:_0xc3e6d,command:_0x3d8caf})=>{const _0x341c5d=a0_0x1324,_0x5602dd=global,_0x14123d=_0x5602dd['db'][_0x341c5d(0x1e2)][_0x341c5d(0x1e8)][_0x28a8ae[_0x341c5d(0x1e0)]][_0x341c5d(0x1ed)],_0x277ccc=JSON[_0x341c5d(0x1eb)](fs[_0x341c5d(0x1ee)](_0x341c5d(0x1dd)+_0x14123d+_0x341c5d(0x1d6))),_0x3321b1=_0x277ccc[_0x341c5d(0x1d8)]['convertidor_toptt'],_0x281308=_0x28a8ae[_0x341c5d(0x1d1)]?_0x28a8ae['quoted']:_0x28a8ae,_0x1afda9=(_0x28a8ae[_0x341c5d(0x1d1)]?_0x28a8ae[_0x341c5d(0x1d1)]:_0x28a8ae['msg'])[_0x341c5d(0x1e5)]||'';if(!/video|audio/[_0x341c5d(0x1d3)](_0x1afda9))throw'*'+_0x3321b1[_0x341c5d(0x1d7)]+'*';const _0x507575=await _0x281308['download']?.();if(!_0x507575&&!/video/[_0x341c5d(0x1d3)](_0x1afda9))throw'*'+_0x3321b1['texto2']+'*';if(!_0x507575&&!/audio/['test'](_0x1afda9))throw'*'+_0x3321b1[_0x341c5d(0x1e4)]+'*';const _0x57bbde=await toPTT(_0x507575,_0x341c5d(0x1df));if(!_0x57bbde[_0x341c5d(0x1e2)]&&!/audio/[_0x341c5d(0x1d3)](_0x1afda9))throw'*'+_0x3321b1[_0x341c5d(0x1de)]+'*';if(!_0x57bbde[_0x341c5d(0x1e2)]&&!/video/[_0x341c5d(0x1d3)](_0x1afda9))throw'*'+_0x3321b1[_0x341c5d(0x1cf)]+'*';const _0x5c9a82=_0x110e0d[_0x341c5d(0x1ce)](_0x28a8ae[_0x341c5d(0x1db)],_0x57bbde['data'],'error.mp3','',_0x28a8ae,!![],{'mimetype':_0x341c5d(0x1dc)});if(!_0x5c9a82)return _0x110e0d[_0x341c5d(0x1ea)](_0x28a8ae[_0x341c5d(0x1db)],{'audio':{'url':_0x507575},'fileName':_0x341c5d(0x1e9),'mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x28a8ae});};handler['help']=[a0_0x1267b7(0x1e7)],handler[a0_0x1267b7(0x1e6)]=['convertidores'],handler[a0_0x1267b7(0x1d5)]=/^to(vn|(ptt)?)$/i;export default handler;