function a0_0x106e(_0x5f32c8,_0x363ce7){const _0xc384d5=a0_0xc384();return a0_0x106e=function(_0x106e22,_0x2f5da2){_0x106e22=_0x106e22-0x19d;let _0x26ea90=_0xc384d5[_0x106e22];return _0x26ea90;},a0_0x106e(_0x5f32c8,_0x363ce7);}(function(_0x2a42d6,_0x596dc9){const _0x2dd80c=a0_0x106e,_0x41aec4=_0x2a42d6();while(!![]){try{const _0x57f207=-parseInt(_0x2dd80c(0x1a4))/0x1+parseInt(_0x2dd80c(0x1b6))/0x2*(-parseInt(_0x2dd80c(0x1bf))/0x3)+parseInt(_0x2dd80c(0x1ae))/0x4*(parseInt(_0x2dd80c(0x1b4))/0x5)+parseInt(_0x2dd80c(0x1c0))/0x6+-parseInt(_0x2dd80c(0x1b7))/0x7+-parseInt(_0x2dd80c(0x1a6))/0x8*(-parseInt(_0x2dd80c(0x1a3))/0x9)+parseInt(_0x2dd80c(0x1b9))/0xa;if(_0x57f207===_0x596dc9)break;else _0x41aec4['push'](_0x41aec4['shift']());}catch(_0x337ad8){_0x41aec4['push'](_0x41aec4['shift']());}}}(a0_0xc384,0xdb3f0));const linkRegex=/https:/i;function a0_0xc384(){const _0x39bb5e=['isBaileys','groupInviteCode','https://www.youtube.com/','9SNiCWp','1354186NMvmfA','chat','1946248vupdSx','sendMessage','reply','plugins','includes','key','.json','antiLink2','8mOQBny','_antilink2','users','split','chats','remove','3834280CIMEvW','data','4112SOquKS','3847760hoyotg','settings','23642560oAYLXV','user','sender','text','texto2','status','2388BYqhAM','1783350CjifMv','https://youtu.be/','participant','restrict','isGroup'];a0_0xc384=function(){return _0x39bb5e;};return a0_0xc384();}export async function before(_0x24a2b5,{conn:_0x232126,isAdmin:_0x10b371,isBotAdmin:_0x4d6c04,text:_0x4836df}){const _0x787094=a0_0x106e,_0x47b9a7=global,_0x416ea9=_0x47b9a7['db'][_0x787094(0x1b5)][_0x787094(0x1b0)][_0x24a2b5[_0x787094(0x1bb)]]['language'],_0x3790ea=JSON['parse'](fs['readFileSync']('./language/'+_0x416ea9+_0x787094(0x1ac))),_0x18d0ba=_0x3790ea[_0x787094(0x1a9)][_0x787094(0x1af)];if(_0x24a2b5[_0x787094(0x1a0)]&&_0x24a2b5['fromMe'])return!0x0;if(!_0x24a2b5[_0x787094(0x19f)])return!0x1;const _0x428ba5=global['db']['data'][_0x787094(0x1b2)][_0x24a2b5[_0x787094(0x1a5)]],_0xcf3ca6=_0x24a2b5[_0x787094(0x1ab)][_0x787094(0x19d)],_0x586e5e=_0x24a2b5[_0x787094(0x1ab)]['id'],_0x2fcf36=global['db'][_0x787094(0x1b5)][_0x787094(0x1b8)][this[_0x787094(0x1ba)]['jid']]||{},_0x2b65e7='@'+_0x24a2b5[_0x787094(0x1bb)][_0x787094(0x1b1)]`@`[0x0],_0x894b8=linkRegex['exec'](_0x24a2b5['text']);if(_0x428ba5[_0x787094(0x1ad)]&&_0x894b8&&!_0x10b371){if(_0x4d6c04){const _0x434b91='https://chat.whatsapp.com/'+await this[_0x787094(0x1a1)](_0x24a2b5[_0x787094(0x1a5)]),_0x2e5ecb=_0x787094(0x1a2),_0x1459fb=_0x787094(0x1c1);if(_0x24a2b5[_0x787094(0x1bc)][_0x787094(0x1aa)](_0x434b91))return!0x0;if(_0x24a2b5[_0x787094(0x1bc)][_0x787094(0x1aa)](_0x2e5ecb))return!0x0;if(_0x24a2b5['text'][_0x787094(0x1aa)](_0x1459fb))return!0x0;}await this[_0x787094(0x1a7)](_0x24a2b5[_0x787094(0x1a5)],{'text':_0x18d0ba['texto1'],'mentions':[_0x24a2b5[_0x787094(0x1bb)]]},{'quoted':_0x24a2b5});if(!_0x4d6c04)return _0x24a2b5[_0x787094(0x1a8)](_0x18d0ba[_0x787094(0x1bd)]);if(_0x4d6c04&&_0x2fcf36[_0x787094(0x19e)]){await _0x232126[_0x787094(0x1a7)](_0x24a2b5[_0x787094(0x1a5)],{'delete':{'remoteJid':_0x24a2b5[_0x787094(0x1a5)],'fromMe':![],'id':_0x586e5e,'participant':_0xcf3ca6}});const _0x2b91d6=await _0x232126['groupParticipantsUpdate'](_0x24a2b5[_0x787094(0x1a5)],[_0x24a2b5['sender']],_0x787094(0x1b3));if(_0x2b91d6[0x0][_0x787094(0x1be)]==='404')return;}else{if(!_0x2fcf36['restrict'])return _0x24a2b5['reply'](_0x18d0ba['texto3']);}}return!0x0;}