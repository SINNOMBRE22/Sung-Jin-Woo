const a0_0x576c87=a0_0x14c6;(function(_0x426ed9,_0x3ddece){const _0x4c722e=a0_0x14c6,_0xab274e=_0x426ed9();while(!![]){try{const _0x55f26c=parseInt(_0x4c722e(0x204))/0x1+-parseInt(_0x4c722e(0x1fb))/0x2*(-parseInt(_0x4c722e(0x1f3))/0x3)+parseInt(_0x4c722e(0x200))/0x4+parseInt(_0x4c722e(0x1ef))/0x5*(parseInt(_0x4c722e(0x1e0))/0x6)+-parseInt(_0x4c722e(0x1ea))/0x7*(parseInt(_0x4c722e(0x1e2))/0x8)+-parseInt(_0x4c722e(0x1e1))/0x9*(parseInt(_0x4c722e(0x1eb))/0xa)+-parseInt(_0x4c722e(0x1fa))/0xb;if(_0x55f26c===_0x3ddece)break;else _0xab274e['push'](_0xab274e['shift']());}catch(_0x1d1c26){_0xab274e['push'](_0xab274e['shift']());}}}(a0_0x5583,0x5e0ea));import a0_0x2751ac from'axios';import a0_0x44bca9 from'dns';let detectProvider=async _0x5d5100=>{const _0x4e15d9=a0_0x14c6;try{let {data:_0x2a881b}=await a0_0x2751ac[_0x4e15d9(0x1f6)]('http://ip-api.com/json/'+_0x5d5100+_0x4e15d9(0x1e5));return _0x2a881b['as']||_0x2a881b[_0x4e15d9(0x203)]||_0x2a881b[_0x4e15d9(0x1f5)]||'Desconocido';}catch(_0x4a169b){return'Desconocido';}},resolveIPs=async _0x41f5ed=>{return new Promise(_0x7a6028=>{const _0x392ec9=a0_0x14c6;a0_0x44bca9[_0x392ec9(0x1e3)](_0x41f5ed,async(_0x37d42f,_0xfda254)=>{const _0x522f7d=_0x392ec9;if(_0x37d42f)return _0x7a6028([]);let _0x1b7935=[];for(let _0x1d68c of _0xfda254){let _0x1d8885=await detectProvider(_0x1d68c);_0x1b7935[_0x522f7d(0x1f0)]({'ip':_0x1d68c,'provider':_0x1d8885});}_0x7a6028(_0x1b7935);});});},getSubdomains=async _0x1d0790=>{const _0x5a9721=a0_0x14c6;try{let {data:_0x5bfaa6}=await a0_0x2751ac[_0x5a9721(0x1f6)](_0x5a9721(0x1e6)+_0x1d0790);return _0x5bfaa6[_0x5a9721(0x1e8)]('\x0a')['map'](_0x102013=>_0x102013[_0x5a9721(0x1e8)](',')[0x0]);}catch(_0x4e922a){return[];}},handler=async(_0x406a6b,{conn:_0xcfbfb7,text:_0xbbb27f,usedPrefix:_0x55a77b,command:_0x3a237})=>{const _0x576f59=a0_0x14c6;if(!_0xbbb27f)throw _0x576f59(0x1df)+(_0x55a77b+_0x3a237)+_0x576f59(0x1fd);try{await _0x406a6b[_0x576f59(0x1ec)]('⏳');let _0x1b02ec=await _0xcfbfb7[_0x576f59(0x1fc)](_0x406a6b['chat'],{'text':_0x576f59(0x201)},{'quoted':_0x406a6b}),_0x40c46c=await getSubdomains(_0xbbb27f);if(!_0x40c46c[_0x576f59(0x1f7)])throw _0x576f59(0x1ed);let _0x1b11ab=[];for(let _0x2b425a of _0x40c46c){let _0x4a7377=await resolveIPs(_0x2b425a);if(_0x4a7377[_0x576f59(0x1f7)]===0x0)continue;let _0x1c3928=_0x576f59(0x1e7)+_0x2b425a+'\x0a'+_0x4a7377[_0x576f59(0x202)](_0x1eb8bd=>_0x576f59(0x1fe)+_0x1eb8bd['ip']+'\x20('+_0x1eb8bd[_0x576f59(0x1f9)]+')')[_0x576f59(0x1f8)]('\x0a');_0x1b11ab[_0x576f59(0x1f0)](_0x1c3928);}let _0x49fb58=_0x1b11ab[_0x576f59(0x1f7)]?_0x1b11ab['join']('\x0a\x0a'):_0x576f59(0x1e9);await _0xcfbfb7[_0x576f59(0x1fc)](_0x406a6b[_0x576f59(0x1f1)],{'text':_0x49fb58},{'quoted':_0x406a6b}),await _0x406a6b[_0x576f59(0x1ec)]('✅');}catch(_0x4bd40c){await _0x406a6b['react']('❌'),await _0x406a6b[_0x576f59(0x1f2)](_0x576f59(0x1ff)+(_0x4bd40c['message']||_0x4bd40c)),console[_0x576f59(0x1f4)](_0x4bd40c);}};handler['help']=[a0_0x576c87(0x1ee)],handler['tags']=[a0_0x576c87(0x205)],handler[a0_0x576c87(0x1e4)]=[a0_0x576c87(0x1ee)];function a0_0x5583(){const _0x142481=['https://api.hackertarget.com/hostsearch/?q=','🌍\x20*Hostname:*\x20','split','⚠️\x20No\x20se\x20encontraron\x20IPs\x20asociadas.','273uVFUwX','100dDAktI','react','⚠️\x20No\x20se\x20encontraron\x20subdominios.','scan','1875365MZGZFY','push','chat','reply','51CBEiaS','error','isp','get','length','join','provider','9538617TFTsNI','68168LzzFww','sendMessage','\x20example.com*','==>\x20','❌\x20*Error:*\x20No\x20se\x20pudo\x20obtener\x20información.\x20','2480020vVWeji','🔍\x20*Buscando\x20información\x20de\x20dominio...*','map','org','999gNDwsO','netfree','⚔️\x20*Error:*\x20Debes\x20ingresar\x20un\x20dominio.\x0a\x0a✦\x20*Ejemplo:*\x20\x0a-\x20*','12BRTOnq','95292sWgQTL','121496Opmhdg','resolve4','command','?fields=isp,org,as'];a0_0x5583=function(){return _0x142481;};return a0_0x5583();}function a0_0x14c6(_0x41eb0e,_0x42c148){const _0x5583c9=a0_0x5583();return a0_0x14c6=function(_0x14c698,_0x30d9d7){_0x14c698=_0x14c698-0x1df;let _0x45a9a2=_0x5583c9[_0x14c698];return _0x45a9a2;},a0_0x14c6(_0x41eb0e,_0x42c148);}export default handler;