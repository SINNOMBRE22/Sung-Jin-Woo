const a0_0x42e65a=a0_0x47c3;function a0_0x47c3(_0x4405b0,_0x73706){const _0x3c1a10=a0_0x3c1a();return a0_0x47c3=function(_0x47c384,_0x2e913c){_0x47c384=_0x47c384-0x1ce;let _0x4bc2ee=_0x3c1a10[_0x47c384];return _0x4bc2ee;},a0_0x47c3(_0x4405b0,_0x73706);}(function(_0x436fad,_0x306b81){const _0x3bb1d3=a0_0x47c3,_0x21dbf4=_0x436fad();while(!![]){try{const _0x619719=parseInt(_0x3bb1d3(0x1d8))/0x1+-parseInt(_0x3bb1d3(0x1d3))/0x2*(-parseInt(_0x3bb1d3(0x1d5))/0x3)+-parseInt(_0x3bb1d3(0x1d0))/0x4+parseInt(_0x3bb1d3(0x1e0))/0x5*(parseInt(_0x3bb1d3(0x1df))/0x6)+-parseInt(_0x3bb1d3(0x1d7))/0x7*(parseInt(_0x3bb1d3(0x1e4))/0x8)+-parseInt(_0x3bb1d3(0x1de))/0x9*(parseInt(_0x3bb1d3(0x1d4))/0xa)+parseInt(_0x3bb1d3(0x1d6))/0xb*(parseInt(_0x3bb1d3(0x1f1))/0xc);if(_0x619719===_0x306b81)break;else _0x21dbf4['push'](_0x21dbf4['shift']());}catch(_0x33a721){_0x21dbf4['push'](_0x21dbf4['shift']());}}}(a0_0x3c1a,0x91ee4));import{toAudio}from'../lib/converter.js';function a0_0x3c1a(){const _0x572ec4=['convertidores','quoted','chat','msg','data','readFileSync','texto1','5028tyRMNY','tomp3','./language/','4630684nWaQyq','.json','toaudio','2UrcwcB','10DdwWMJ','734838uUNZZP','68057JmGvcP','371fWQZtL','330146gHxXKc','sender','tags','parse','plugins','sendMessage','7248411NjEtoj','48702roClgr','150uQlvBF','mediaType','command','language','128328rsjjow','mimetype','texto3','users','test','texto2'];a0_0x3c1a=function(){return _0x572ec4;};return a0_0x3c1a();}const handler=async(_0x2d1470,{conn:_0x20979a,usedPrefix:_0xfde895,command:_0x48235d})=>{const _0x1096ad=a0_0x47c3,_0x35d845=global,_0x5b439c=_0x35d845['db']['data'][_0x1096ad(0x1e7)][_0x2d1470[_0x1096ad(0x1d9)]][_0x1096ad(0x1e3)],_0x49afdd=JSON[_0x1096ad(0x1db)](fs[_0x1096ad(0x1ef)](_0x1096ad(0x1cf)+_0x5b439c+_0x1096ad(0x1d1))),_0x4ca8dd=_0x49afdd[_0x1096ad(0x1dc)]['convertidor_tomp3'],_0x4fa4fc=_0x2d1470[_0x1096ad(0x1eb)]?_0x2d1470['quoted']:_0x2d1470,_0xd8876b=(_0x4fa4fc||_0x4fa4fc[_0x1096ad(0x1ed)])[_0x1096ad(0x1e5)]||_0x4fa4fc[_0x1096ad(0x1e1)]||'';if(!/video|audio/[_0x1096ad(0x1e8)](_0xd8876b))throw'*'+_0x4ca8dd[_0x1096ad(0x1f0)]+'*';const _0x56947c=await _0x4fa4fc['download']();if(!_0x56947c)throw'*'+_0x4ca8dd[_0x1096ad(0x1e9)]+'*';const _0x432ce8=await toAudio(_0x56947c,'mp4');if(!_0x432ce8['data'])throw'*'+_0x4ca8dd[_0x1096ad(0x1e6)]+'*';_0x20979a[_0x1096ad(0x1dd)](_0x2d1470[_0x1096ad(0x1ec)],{'audio':_0x432ce8[_0x1096ad(0x1ee)],'mimetype':'audio/mpeg'},{'quoted':_0x2d1470});};handler['help']=[a0_0x42e65a(0x1ce)],handler[a0_0x42e65a(0x1da)]=[a0_0x42e65a(0x1ea)],handler['alias']=['tomp3',a0_0x42e65a(0x1d2)],handler[a0_0x42e65a(0x1e2)]=/^to(mp3|audio)$/i;export default handler;