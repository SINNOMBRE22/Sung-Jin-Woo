(function(_0x1fb5bb,_0x3e3931){const _0x319c16=a0_0x1997,_0x5e6560=_0x1fb5bb();while(!![]){try{const _0x1b7248=parseInt(_0x319c16(0x1ae))/0x1+-parseInt(_0x319c16(0x1b2))/0x2+-parseInt(_0x319c16(0x1b5))/0x3*(parseInt(_0x319c16(0x1b1))/0x4)+-parseInt(_0x319c16(0x1b8))/0x5*(-parseInt(_0x319c16(0x1b4))/0x6)+parseInt(_0x319c16(0x1ba))/0x7+-parseInt(_0x319c16(0x1ac))/0x8*(parseInt(_0x319c16(0x1b3))/0x9)+parseInt(_0x319c16(0x1b9))/0xa;if(_0x1b7248===_0x3e3931)break;else _0x5e6560['push'](_0x5e6560['shift']());}catch(_0x30a022){_0x5e6560['push'](_0x5e6560['shift']());}}}(a0_0x2203,0xa954b));const INACTIVITY_TIMEOUT_MS=0x1e*0x3c*0x3e8;async function deleteInactiveUserData(_0x114026){const _0x36b321=a0_0x1997,_0xdbca10=global[_0x36b321(0x1b7)][_0x36b321(0x1ad)][_0x36b321(0x1af)][_0x114026[_0x36b321(0x1b0)]];if(!_0xdbca10)return;const _0x11f4fa=_0xdbca10[_0x36b321(0x1b6)]||0x0,_0x3fe88c=new Date()['getTime']();_0x3fe88c-_0x11f4fa>INACTIVITY_TIMEOUT_MS&&delete global[_0x36b321(0x1b7)][_0x36b321(0x1ad)][_0x36b321(0x1af)][_0x114026[_0x36b321(0x1b0)]];}function a0_0x1997(_0xd4712d,_0x2328d0){const _0x2203e8=a0_0x2203();return a0_0x1997=function(_0x1997b9,_0x7b9904){_0x1997b9=_0x1997b9-0x1ac;let _0x1d247d=_0x2203e8[_0x1997b9];return _0x1d247d;},a0_0x1997(_0xd4712d,_0x2328d0);}function a0_0x2203(){const _0x566a97=['95VWCmjo','24776270XFAscr','5834710COozOM','398056JPgeEM','data','143093hlzXVW','users','sender','10896doFBFL','2021218ygZXbw','225cVVCdt','112854tVDhUp','951YAfrIS','lastUpdate','chatgpt'];a0_0x2203=function(){return _0x566a97;};return a0_0x2203();}export async function all(_0x420dff){const _0x28fd1c=a0_0x1997,_0x2055e7=global[_0x28fd1c(0x1b7)][_0x28fd1c(0x1ad)][_0x28fd1c(0x1af)][_0x420dff[_0x28fd1c(0x1b0)]];if(_0x2055e7)_0x2055e7[_0x28fd1c(0x1b6)]=new Date()['getTime'](),global[_0x28fd1c(0x1b7)]['data']['users'][_0x420dff[_0x28fd1c(0x1b0)]]=_0x2055e7;else return;setTimeout(()=>deleteInactiveUserData(_0x420dff),INACTIVITY_TIMEOUT_MS);}