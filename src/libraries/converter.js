function a0_0x49a3(_0x1ed0d3,_0x38e158){const _0x1c46b6=a0_0x1c46();return a0_0x49a3=function(_0x49a32e,_0x50d402){_0x49a32e=_0x49a32e-0xf6;let _0x535081=_0x1c46b6[_0x49a32e];return _0x535081;},a0_0x49a3(_0x1ed0d3,_0x38e158);}(function(_0x4b8834,_0x5aad4f){const _0x21f638=a0_0x49a3,_0x4464f0=_0x4b8834();while(!![]){try{const _0x426e8e=-parseInt(_0x21f638(0x105))/0x1+parseInt(_0x21f638(0x107))/0x2*(parseInt(_0x21f638(0xf6))/0x3)+parseInt(_0x21f638(0xf8))/0x4+-parseInt(_0x21f638(0x10a))/0x5+-parseInt(_0x21f638(0x100))/0x6*(parseInt(_0x21f638(0x113))/0x7)+parseInt(_0x21f638(0x106))/0x8+parseInt(_0x21f638(0x112))/0x9*(-parseInt(_0x21f638(0x108))/0xa);if(_0x426e8e===_0x5aad4f)break;else _0x4464f0['push'](_0x4464f0['shift']());}catch(_0xb0311){_0x4464f0['push'](_0x4464f0['shift']());}}}(a0_0x1c46,0x5e64d));function a0_0x1c46(){const _0x43c116=['opus','libopus','-crf','readFile','libx264','738189vZJBMt','528353gPRVmQ','error','-compression_level','../tmp','46335jjEnAW','writeFile','349700mavfmT','-vn','-ar','-preset','url','close','-ab','-vbr','6ZgOhuA','-c:a','aac','128k','ogg','63436InxaUt','4443832QjtLoI','58oYMqlG','60NIDVXg','-b:a','365655XWcNJs','ffmpeg','__dirname'];a0_0x1c46=function(){return _0x43c116;};return a0_0x1c46();}import{promises}from'fs';import{join}from'path';import{spawn}from'child_process';function ffmpeg(_0x48b779,_0x3856e0=[],_0x4dc0e9='',_0x77c31=''){return new Promise(async(_0x437222,_0x445caa)=>{const _0x5ef7b5=a0_0x49a3;try{const _0x1da2de=join(global[_0x5ef7b5(0x10c)](import.meta[_0x5ef7b5(0xfc)]),_0x5ef7b5(0x116),+new Date()+'.'+_0x4dc0e9),_0x145c54=_0x1da2de+'.'+_0x77c31;await promises[_0x5ef7b5(0xf7)](_0x1da2de,_0x48b779),spawn(_0x5ef7b5(0x10b),['-y','-i',_0x1da2de,..._0x3856e0,_0x145c54])['on'](_0x5ef7b5(0x114),_0x445caa)['on'](_0x5ef7b5(0xfd),async _0x4fbc28=>{const _0x487a6a=_0x5ef7b5;try{await promises['unlink'](_0x1da2de);if(_0x4fbc28!==0x0)return _0x445caa(_0x4fbc28);_0x437222({'data':await promises[_0x487a6a(0x110)](_0x145c54),'filename':_0x145c54,'delete'(){return promises['unlink'](_0x145c54);}});}catch(_0x3b36a1){_0x445caa(_0x3b36a1);}});}catch(_0x564dd1){_0x445caa(_0x564dd1);}});}function toPTT(_0x5d3b53,_0x13c63b){const _0x2fabda=a0_0x49a3;return ffmpeg(_0x5d3b53,[_0x2fabda(0xf9),'-c:a',_0x2fabda(0x10e),_0x2fabda(0x109),'128k',_0x2fabda(0xff),'on'],_0x13c63b,_0x2fabda(0x104));}function toAudio(_0x453b61,_0x5535bc){const _0x5f144a=a0_0x49a3;return ffmpeg(_0x453b61,['-vn',_0x5f144a(0x101),_0x5f144a(0x10e),_0x5f144a(0x109),_0x5f144a(0x103),_0x5f144a(0xff),'on',_0x5f144a(0x115),'10'],_0x5535bc,_0x5f144a(0x10d));}function toVideo(_0xd1b30a,_0x295cc8){const _0x8551d6=a0_0x49a3;return ffmpeg(_0xd1b30a,['-c:v',_0x8551d6(0x111),_0x8551d6(0x101),_0x8551d6(0x102),_0x8551d6(0xfe),_0x8551d6(0x103),_0x8551d6(0xfa),'44100',_0x8551d6(0x10f),'32',_0x8551d6(0xfb),'slow'],_0x295cc8,'mp4');}export{toAudio,toPTT,toVideo,ffmpeg};