const a0_0x59e8c8=a0_0x12fe;function a0_0x12fe(_0x523a90,_0x31d138){const _0x381d43=a0_0x381d();return a0_0x12fe=function(_0x12fe9f,_0x51ee08){_0x12fe9f=_0x12fe9f-0x126;let _0x3aee82=_0x381d43[_0x12fe9f];return _0x3aee82;},a0_0x12fe(_0x523a90,_0x31d138);}(function(_0x5dbaab,_0x5cab7a){const _0x2737a8=a0_0x12fe,_0x1f15c8=_0x5dbaab();while(!![]){try{const _0x5c2d41=parseInt(_0x2737a8(0x12d))/0x1*(parseInt(_0x2737a8(0x12e))/0x2)+-parseInt(_0x2737a8(0x13e))/0x3+-parseInt(_0x2737a8(0x145))/0x4*(-parseInt(_0x2737a8(0x155))/0x5)+parseInt(_0x2737a8(0x137))/0x6*(parseInt(_0x2737a8(0x144))/0x7)+parseInt(_0x2737a8(0x157))/0x8*(parseInt(_0x2737a8(0x14d))/0x9)+parseInt(_0x2737a8(0x156))/0xa*(parseInt(_0x2737a8(0x148))/0xb)+-parseInt(_0x2737a8(0x139))/0xc;if(_0x5c2d41===_0x5cab7a)break;else _0x1f15c8['push'](_0x1f15c8['shift']());}catch(_0x256bc1){_0x1f15c8['push'](_0x1f15c8['shift']());}}}(a0_0x381d,0x4aba8));import a0_0x520fd0 from'axios';import a0_0x57f380 from'node-fetch';import a0_0x596620 from'cheerio';import a0_0x2d4dcc from'fs';async function wikipedia(_0xea9527){const _0x324c20=a0_0x12fe;try{const _0x1768a8=await a0_0x520fd0['get'](_0x324c20(0x130)+_0xea9527),_0x39e012=a0_0x596620[_0x324c20(0x154)](_0x1768a8[_0x324c20(0x12c)]),_0x44717a=_0x39e012(_0x324c20(0x14f))['text']()[_0x324c20(0x135)](),_0x5c4fa4=_0x39e012('#mw-content-text')[_0x324c20(0x142)](_0x324c20(0x126))['attr']('src')||_0x324c20(0x151),_0x533cdd=[];return _0x39e012(_0x324c20(0x134))[_0x324c20(0x146)]((_0x13f195,_0x53e4aa)=>{const _0x3289d3=_0x324c20,_0x267c03=_0x39e012(_0x53e4aa)[_0x3289d3(0x132)]()[_0x3289d3(0x135)]();if(_0x267c03)_0x533cdd[_0x3289d3(0x128)](_0x267c03);}),{'status':_0x1768a8['status'],'result':{'titulo':_0x44717a,'thumb':_0x324c20(0x153)+_0x5c4fa4,'contenido':_0x533cdd[_0x324c20(0x136)]('\x0a\x0a')}};}catch(_0x5ce894){return{'status':0x194,'mensaje':_0x324c20(0x143)};}}const handler=async(_0x3ee80c,{conn:_0x31a2ae,text:_0x187881,usedPrefix:_0x1b1a7d,command:_0x32c8dd})=>{const _0x114e9e=a0_0x12fe;if(!_0x187881)throw _0x114e9e(0x13c)+(_0x1b1a7d+_0x32c8dd)+_0x114e9e(0x14c);try{const _0x26a21e=global?.['db']?.['data']?.[_0x114e9e(0x138)]?.[_0x3ee80c[_0x114e9e(0x133)]],_0x393bb9=_0x26a21e?.[_0x114e9e(0x13b)]||'es',_0xa17cbc=JSON['parse'](a0_0x2d4dcc[_0x114e9e(0x141)](_0x114e9e(0x14a)+_0x393bb9+_0x114e9e(0x150),'utf8')),_0x2fc23a=_0xa17cbc?.[_0x114e9e(0x127)]?.[_0x114e9e(0x129)]||{},_0x5b6831=await wikipedia(_0x187881);_0x5b6831[_0x114e9e(0x12b)]===0x194?_0x3ee80c['reply'](_0x2fc23a[_0x114e9e(0x147)]||_0x114e9e(0x13f)):_0x3ee80c[_0x114e9e(0x158)]('*'+(_0x2fc23a[_0x114e9e(0x14b)]||'Resultado')+_0x114e9e(0x152)+_0x5b6831[_0x114e9e(0x14e)][_0x114e9e(0x12a)]);}catch(_0x3b642c){_0x3ee80c[_0x114e9e(0x158)](_0x114e9e(0x140));}};handler['help']=[a0_0x59e8c8(0x149)][a0_0x59e8c8(0x131)](_0x34b36e=>_0x34b36e+a0_0x59e8c8(0x13d)),handler[a0_0x59e8c8(0x13a)]=['search'],handler[a0_0x59e8c8(0x12f)]=/^(wiki|wikipedia)$/i;export default handler;function a0_0x381d(){const _0x570f0f=['https://es.wikipedia.org/wiki/','map','text','sender','#mw-content-text\x20>\x20div.mw-parser-output\x20p','trim','join','2304wkdisO','users','4651620PpdoEF','tags','language','Uso:\x20','\x20<término>','605484hccnmn','No\x20se\x20encontró\x20información.','Hubo\x20un\x20error\x20en\x20la\x20búsqueda.','readFileSync','find','No\x20se\x20encontró\x20información\x20en\x20Wikipedia.','2394OBtZLt','1763332mWotwL','each','texto3','88ktAoYV','wikipedia','./language/','texto2','\x20<término\x20de\x20búsqueda>','27KzPxLQ','result','#firstHeading','.json','//i.ibb.co/nzqPBpC/http-error-404-not-found.png','*\x0a\x0a','https:','load','5PeHlqI','65170oafWGq','26696GqBknV','reply','div.mw-parser-output\x20>\x20div:nth-child(1)\x20>\x20table\x20>\x20tbody\x20>\x20tr:nth-child(2)\x20>\x20td\x20>\x20a\x20>\x20img','plugins','push','buscador_wikipedia','contenido','status','data','9mPmiil','58054wohKeC','command'];a0_0x381d=function(){return _0x570f0f;};return a0_0x381d();}