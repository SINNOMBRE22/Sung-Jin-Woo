const a0_0x308d36=a0_0x3c55;(function(_0x4091bc,_0x2e405d){const _0x4a20c3=a0_0x3c55,_0x45d4df=_0x4091bc();while(!![]){try{const _0x2eb16d=-parseInt(_0x4a20c3(0x1ca))/0x1*(-parseInt(_0x4a20c3(0x1d8))/0x2)+parseInt(_0x4a20c3(0x1c9))/0x3*(-parseInt(_0x4a20c3(0x1cd))/0x4)+parseInt(_0x4a20c3(0x1d9))/0x5*(-parseInt(_0x4a20c3(0x1c8))/0x6)+-parseInt(_0x4a20c3(0x1c7))/0x7+parseInt(_0x4a20c3(0x1d5))/0x8+-parseInt(_0x4a20c3(0x1d6))/0x9+parseInt(_0x4a20c3(0x1cc))/0xa;if(_0x2eb16d===_0x2e405d)break;else _0x45d4df['push'](_0x45d4df['shift']());}catch(_0x2963f3){_0x45d4df['push'](_0x45d4df['shift']());}}}(a0_0x73f5,0x6c3c2));function a0_0x73f5(){const _0x3ce29a=['json','command','chat','application/json','Bearer\x20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','trim','reply','1564984eIipXH','5315337OFtOzl','🦙\x20*Mixtral:*\x0a\x0a','2jHZavR','3270HpRpXh','[/INST]','<s>[INST]\x20Responde\x20en\x20español:\x20','https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1','stringify','tools','4959878boWidf','5268ZHmpGS','3FfyPyC','220555mxcXAs','split','27131680jhZzNN','3250628hQBcvH'];a0_0x73f5=function(){return _0x3ce29a;};return a0_0x73f5();}function a0_0x3c55(_0x75f150,_0x16559c){const _0x73f59a=a0_0x73f5();return a0_0x3c55=function(_0x3c55cf,_0x272e39){_0x3c55cf=_0x3c55cf-0x1c6;let _0x35de88=_0x73f59a[_0x3c55cf];return _0x35de88;},a0_0x3c55(_0x75f150,_0x16559c);}import a0_0x37c176 from'node-fetch';const handler=async(_0x1bd4bb,{conn:_0xba9f11,text:_0x4478aa})=>{const _0x455e66=a0_0x3c55,_0x1ff2d6=await a0_0x37c176(_0x455e66(0x1dc),{'method':'POST','headers':{'Authorization':_0x455e66(0x1d2),'Content-Type':_0x455e66(0x1d1)},'body':JSON[_0x455e66(0x1dd)]({'inputs':_0x455e66(0x1db)+_0x4478aa+'\x20[/INST]'})}),_0x5f0780=await _0x1ff2d6[_0x455e66(0x1ce)](),_0x2da46b=_0x5f0780[0x0]['generated_text'][_0x455e66(0x1cb)](_0x455e66(0x1da))[0x1][_0x455e66(0x1d3)]();await _0xba9f11[_0x455e66(0x1d4)](_0x1bd4bb[_0x455e66(0x1d0)],_0x455e66(0x1d7)+_0x2da46b,_0x1bd4bb);};handler['help']=['ia\x20<texto>'],handler[a0_0x308d36(0x1cf)]=/^ia$/i,handler['tags']=[a0_0x308d36(0x1c6)];export default handler;