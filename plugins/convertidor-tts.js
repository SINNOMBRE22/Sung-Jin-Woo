const a0_0x45bbc8=a0_0x5195;(function(_0x3be708,_0x29ecc3){const _0x3493be=a0_0x5195,_0x4f39b3=_0x3be708();while(!![]){try{const _0x2d252b=parseInt(_0x3493be(0x1e5))/0x1*(-parseInt(_0x3493be(0x1d0))/0x2)+parseInt(_0x3493be(0x1e1))/0x3*(-parseInt(_0x3493be(0x1c8))/0x4)+-parseInt(_0x3493be(0x1d8))/0x5*(-parseInt(_0x3493be(0x1e8))/0x6)+-parseInt(_0x3493be(0x1e0))/0x7+parseInt(_0x3493be(0x1ca))/0x8+parseInt(_0x3493be(0x1c9))/0x9+parseInt(_0x3493be(0x1d3))/0xa;if(_0x2d252b===_0x29ecc3)break;else _0x4f39b3['push'](_0x4f39b3['shift']());}catch(_0x36cb7d){_0x4f39b3['push'](_0x4f39b3['shift']());}}}(a0_0x230e,0x7a98b));import*as a0_0x52bfc7 from'@sefinek/google-tts-api';import{readFileSync,unlinkSync}from'fs';import{join}from'path';const defaultLang='es',handler=async(_0xa597da,{conn:_0x3b581a,args:_0x285eb5,usedPrefix:_0x75ff0c,command:_0x23c580})=>{const _0x5035d1=a0_0x5195,_0x402a6d=global,_0x3f0e11=_0x402a6d['db'][_0x5035d1(0x1df)]['users'][_0xa597da['sender']][_0x5035d1(0x1e4)],_0x45d96c=JSON['parse'](fs[_0x5035d1(0x1da)]('./language/'+_0x3f0e11+'.json')),_0x332e46=_0x45d96c['plugins']['convertidor_tts'];let _0x2a5efd=_0x285eb5[0x0],_0x3254b3=_0x285eb5[_0x5035d1(0x1e3)](0x1)[_0x5035d1(0x1cd)]('\x20');(_0x285eb5[0x0]||'')[_0x5035d1(0x1d2)]!==0x2&&(_0x2a5efd=defaultLang,_0x3254b3=_0x285eb5[_0x5035d1(0x1cd)]('\x20'));if(!_0x3254b3&&_0xa597da['quoted']?.[_0x5035d1(0x1ce)])_0x3254b3=_0xa597da[_0x5035d1(0x1cf)][_0x5035d1(0x1ce)];let _0x3f8482;try{_0x3f8482=a0_0x52bfc7['getAudioUrl'](_0x3254b3,{'lang':_0x2a5efd||'es','slow':![],'host':_0x5035d1(0x1de)});}catch(_0x5bc69a){_0xa597da[_0x5035d1(0x1d4)](_0x5bc69a+''),_0x3254b3=_0x285eb5[_0x5035d1(0x1cd)]('\x20');if(!_0x3254b3)throw'*'+_0x332e46[_0x5035d1(0x1d7)][0x0]+'\x20'+(_0x75ff0c+_0x23c580)+'\x20'+_0x332e46[_0x5035d1(0x1d7)][0x1]+'*';_0x3f8482=await tts(_0x3254b3,defaultLang);}finally{_0x3f8482&&(_0x3b581a['sendPresenceUpdate'](_0x5035d1(0x1d1),_0xa597da[_0x5035d1(0x1dd)]),_0x3b581a[_0x5035d1(0x1dc)](_0xa597da[_0x5035d1(0x1dd)],{'audio':{'url':_0x3f8482},'fileName':_0x5035d1(0x1d5),'mimetype':_0x5035d1(0x1cb),'ptt':!![]},{'quoted':_0xa597da}));}};handler[a0_0x45bbc8(0x1e6)]=[a0_0x45bbc8(0x1e2)],handler[a0_0x45bbc8(0x1db)]=['convertidores'],handler[a0_0x45bbc8(0x1d6)]=/^voz$/i;export default handler;function a0_0x230e(){const _0x1cd509=['chat','https://translate.google.com','data','5676034VflEkb','408453Pgrisi','voz\x20<idioma>\x20<texto>','slice','language','430277IjeSUx','help','../tmp','3456588RbWdOj','16nrjbyn','8813925BbLJdS','2069048rwWpAC','audio/mpeg','save','join','text','quoted','4KpOwfS','recording','length','9041210fYNuWt','reply','tts.mp3','command','texto1','5VjJuzZ','__dirname','readFileSync','tags','sendMessage'];a0_0x230e=function(){return _0x1cd509;};return a0_0x230e();}function a0_0x5195(_0x56c1af,_0x2b0df7){const _0x230e4f=a0_0x230e();return a0_0x5195=function(_0x5195a1,_0x313367){_0x5195a1=_0x5195a1-0x1c8;let _0x1ce5c4=_0x230e4f[_0x5195a1];return _0x1ce5c4;},a0_0x5195(_0x56c1af,_0x2b0df7);}function tts(_0x172198,_0x81c91a='es'){return new Promise((_0x3e74e8,_0x36e789)=>{const _0x37c6d5=a0_0x5195;try{const _0x35824d=gtts(_0x81c91a),_0xe0649c=join(global[_0x37c6d5(0x1d9)](import.meta['url']),_0x37c6d5(0x1e7),0x1*new Date()+'.wav');_0x35824d[_0x37c6d5(0x1cc)](_0xe0649c,_0x172198,()=>{_0x3e74e8(readFileSync(_0xe0649c)),unlinkSync(_0xe0649c);});}catch(_0x551121){_0x36e789(_0x551121);}});}