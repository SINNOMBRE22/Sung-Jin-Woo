const a0_0x22757e=a0_0x3f4d;(function(_0x313a67,_0x13751d){const _0x5a1b72=a0_0x3f4d,_0x2cd24a=_0x313a67();while(!![]){try{const _0x234d5a=parseInt(_0x5a1b72(0x1e9))/0x1+-parseInt(_0x5a1b72(0x1fd))/0x2+parseInt(_0x5a1b72(0x1f1))/0x3+parseInt(_0x5a1b72(0x1f4))/0x4+parseInt(_0x5a1b72(0x1f6))/0x5+-parseInt(_0x5a1b72(0x1f3))/0x6+-parseInt(_0x5a1b72(0x1ec))/0x7;if(_0x234d5a===_0x13751d)break;else _0x2cd24a['push'](_0x2cd24a['shift']());}catch(_0x3d1802){_0x2cd24a['push'](_0x2cd24a['shift']());}}}(a0_0x2985,0x23a12));function a0_0x3f4d(_0x2d7c77,_0x315814){const _0x298515=a0_0x2985();return a0_0x3f4d=function(_0x3f4d39,_0x4b362a){_0x3f4d39=_0x3f4d39-0x1e3;let _0x33e19f=_0x298515[_0x3f4d39];return _0x33e19f;},a0_0x3f4d(_0x2d7c77,_0x315814);}import{toAudio}from'../lib/converter.js';const handler=async(_0x4547ba,{conn:_0x241e6c,usedPrefix:_0x14738f,command:_0x413d93})=>{const _0x481635=a0_0x3f4d,_0x1e004e=global,_0x3acaf2=_0x1e004e['db'][_0x481635(0x1fc)]['users'][_0x4547ba[_0x481635(0x1eb)]][_0x481635(0x1ef)],_0x30a3e9=JSON['parse'](fs['readFileSync'](_0x481635(0x1f9)+_0x3acaf2+_0x481635(0x1f5))),_0x4bff05=_0x30a3e9['plugins']['convertidor_tomp3'],_0x46a980=_0x4547ba[_0x481635(0x1f7)]?_0x4547ba[_0x481635(0x1f7)]:_0x4547ba,_0x568466=(_0x46a980||_0x46a980[_0x481635(0x1e3)])[_0x481635(0x1ed)]||_0x46a980[_0x481635(0x1e5)]||'';if(!/video|audio/[_0x481635(0x1ee)](_0x568466))throw'*'+_0x4bff05['texto1']+'*';const _0x2df28a=await _0x46a980[_0x481635(0x1ea)]();if(!_0x2df28a)throw'*'+_0x4bff05[_0x481635(0x1f8)]+'*';const _0x22eb8f=await toAudio(_0x2df28a,_0x481635(0x1e8));if(!_0x22eb8f[_0x481635(0x1fc)])throw'*'+_0x4bff05[_0x481635(0x1fb)]+'*';_0x241e6c['sendMessage'](_0x4547ba['chat'],{'audio':_0x22eb8f['data'],'mimetype':_0x481635(0x1e6)},{'quoted':_0x4547ba});};handler[a0_0x22757e(0x1e4)]=[a0_0x22757e(0x1f2)],handler[a0_0x22757e(0x1f0)]=[a0_0x22757e(0x1fa)],handler[a0_0x22757e(0x1e7)]=[a0_0x22757e(0x1f2),'toaudio'],handler['command']=/^to(mp3|audio)$/i;function a0_0x2985(){const _0x4739a0=['mimetype','test','language','tags','859665eEDiTg','tomp3','663264DtkotA','1055556xJKPsQ','.json','387685dwhQTs','quoted','texto2','./language/','convertidores','texto3','data','335674efhcoZ','msg','help','mediaType','audio/mpeg','alias','mp4','140033wJRszS','download','sender','2405865gpDnoG'];a0_0x2985=function(){return _0x4739a0;};return a0_0x2985();}export default handler;