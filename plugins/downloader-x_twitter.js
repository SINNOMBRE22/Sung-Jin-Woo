const a0_0x48521a=a0_0x5ee2;(function(_0x53d3fe,_0xf72035){const _0x4854fc=a0_0x5ee2,_0x24f451=_0x53d3fe();while(!![]){try{const _0x1ed937=-parseInt(_0x4854fc(0x1b0))/0x1+parseInt(_0x4854fc(0x1d7))/0x2*(parseInt(_0x4854fc(0x1d8))/0x3)+-parseInt(_0x4854fc(0x1eb))/0x4+-parseInt(_0x4854fc(0x1de))/0x5+-parseInt(_0x4854fc(0x1e2))/0x6+parseInt(_0x4854fc(0x1e3))/0x7+parseInt(_0x4854fc(0x1c9))/0x8;if(_0x1ed937===_0xf72035)break;else _0x24f451['push'](_0x24f451['shift']());}catch(_0x49ab92){_0x24f451['push'](_0x24f451['shift']());}}}(a0_0x2cfc,0x1f908));import a0_0x3c9338 from'axios';let enviando=![];const handler=async(_0x21c06a,{conn:_0x2dbffe,text:_0x3130ef,usedPrefix:_0x5c7661,command:_0x29c75e})=>{const _0x374ef1=a0_0x5ee2,_0x790f48=global,_0x5cf003=_0x790f48['db'][_0x374ef1(0x1d3)][_0x374ef1(0x1cf)][_0x21c06a[_0x374ef1(0x1e7)]][_0x374ef1(0x1b9)],_0x51c49e=JSON[_0x374ef1(0x1dc)](fs[_0x374ef1(0x1e6)](_0x374ef1(0x1d1)+_0x5cf003+'.json')),_0x302d99=_0x51c49e[_0x374ef1(0x1b5)]['downloader_x_twitter'];if(!_0x3130ef)throw _0x302d99['texto1']+'\x20'+(_0x5c7661+_0x29c75e)+_0x374ef1(0x1b6);if(enviando)return;enviando=!![];try{await _0x2dbffe[_0x374ef1(0x1b2)](_0x21c06a[_0x374ef1(0x1d2)],{'text':global[_0x374ef1(0x1ba)]},{'quoted':_0x21c06a});const _0x38fc8e=await TwitterDL(_0x3130ef);if(_0x38fc8e?.['result'][_0x374ef1(0x1d4)]==_0x374ef1(0x1e1)){const _0x5c7940=_0x38fc8e?.[_0x374ef1(0x1d9)][_0x374ef1(0x1e9)]?_0x38fc8e[_0x374ef1(0x1d9)][_0x374ef1(0x1e9)]:_0x302d99[_0x374ef1(0x1b3)];for(let _0x15aa09=0x0;_0x15aa09<_0x38fc8e[_0x374ef1(0x1d9)][_0x374ef1(0x1c4)][_0x374ef1(0x1bd)];_0x15aa09++){await _0x2dbffe['sendMessage'](_0x21c06a[_0x374ef1(0x1d2)],{'video':{'url':_0x38fc8e[_0x374ef1(0x1d9)][_0x374ef1(0x1c4)][_0x15aa09][_0x374ef1(0x1d9)][0x0][_0x374ef1(0x1cc)]},'caption':_0x5c7940},{'quoted':_0x21c06a});};enviando=![];return;}else{if(_0x38fc8e?.['result'][_0x374ef1(0x1d4)]==_0x374ef1(0x1bb)){const _0x441577=_0x38fc8e?.[_0x374ef1(0x1d9)]['caption']?_0x38fc8e['result'][_0x374ef1(0x1e9)]:_0x302d99['texto2'];for(let _0x313899=0x0;_0x313899<_0x38fc8e[_0x374ef1(0x1d9)]['media'][_0x374ef1(0x1bd)];_0x313899++){await _0x2dbffe[_0x374ef1(0x1b2)](_0x21c06a[_0x374ef1(0x1d2)],{'image':{'url':_0x38fc8e[_0x374ef1(0x1d9)]['media'][_0x313899][_0x374ef1(0x1cc)]},'caption':_0x441577},{'quoted':_0x21c06a});};enviando=![];return;}}}catch{enviando=![];throw _0x302d99[_0x374ef1(0x1af)];return;}};function a0_0x2cfc(){const _0x380011=['433248oVktot','help','default','https://info.tweeload.site/status/','texto3','216249AKPXUN','.json','sendMessage','texto2','bitrate','plugins','*\x20https://twitter.com/auronplay/status/1586487664274206720?s=20&t=3snvkvwGUIez5iWYQAehpw','premium','likes','language','wait','photo','forEach','length','thumbnail_url','banner_url','texto4','videos','created_at','replies','media','GET','command','author','name','2905368CahkzW','video_urls','content_type','url','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_15_3)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/80.0.3987.132\x20Safari/537.36','push','users','tweet','./language/','chat','data','type','retweets','duration','6162bIiTqA','147TirqHw','result','https://pastebin.com/raw/SnCfd4ru','possibly_sensitive','parse','group','798120nYLULh','avatar_url','match','video','304104JmZRwb','1050119sGKsvW','code','texto5','readFileSync','sender','error','caption','tags'];a0_0x2cfc=function(){return _0x380011;};return a0_0x2cfc();}handler[a0_0x48521a(0x1ec)]=['twitter'],handler[a0_0x48521a(0x1ea)]=['downloader'],handler[a0_0x48521a(0x1c6)]=/^((x|xdl|dlx|twdl|tw|twt|twitter)(dl)?)$/i,handler[a0_0x48521a(0x1b7)]=!![],handler[a0_0x48521a(0x1dd)]=!![];function a0_0x5ee2(_0x4fc9ce,_0x19d161){const _0x2cfcc5=a0_0x2cfc();return a0_0x5ee2=function(_0x5ee24c,_0x1d34c9){_0x5ee24c=_0x5ee24c-0x1ae;let _0x5575f2=_0x2cfcc5[_0x5ee24c];return _0x5575f2;},a0_0x5ee2(_0x4fc9ce,_0x19d161);}export default handler;const _twitterapi=_0x2dc3d0=>a0_0x48521a(0x1ae)+_0x2dc3d0+a0_0x48521a(0x1b1),getAuthorization=async()=>{const _0x24d780=a0_0x48521a,{data:_0x3beb52}=await a0_0x3c9338[_0x24d780(0x1ed)]['get'](_0x24d780(0x1da));return _0x3beb52;},TwitterDL=async _0x8c9052=>{return new Promise(async(_0x3fed2e,_0x359c68)=>{const _0x1151e2=a0_0x5ee2,_0x3a186d=_0x8c9052['match'](/\/([\d]+)/);if(!_0x3a186d)return _0x3fed2e({'status':_0x1151e2(0x1e8),'message':tradutor[_0x1151e2(0x1c0)]});const _0x99f818=await a0_0x3c9338['default'](_twitterapi(_0x3a186d[0x1]),{'method':_0x1151e2(0x1c5),'headers':{'Authorization':await getAuthorization(),'user-agent':_0x1151e2(0x1cd)}});if(_0x99f818['data'][_0x1151e2(0x1e4)]!==0xc8)return _0x3fed2e({'status':_0x1151e2(0x1e8),'message':tradutor[_0x1151e2(0x1e5)]});const _0x28a512={'id':_0x99f818[_0x1151e2(0x1d3)]['tweet'][_0x1151e2(0x1c7)]['id'],'name':_0x99f818['data'][_0x1151e2(0x1d0)][_0x1151e2(0x1c7)][_0x1151e2(0x1c8)],'username':_0x99f818[_0x1151e2(0x1d3)][_0x1151e2(0x1d0)][_0x1151e2(0x1c7)]['screen_name'],'avatar_url':_0x99f818[_0x1151e2(0x1d3)][_0x1151e2(0x1d0)][_0x1151e2(0x1c7)][_0x1151e2(0x1df)],'banner_url':_0x99f818[_0x1151e2(0x1d3)]['tweet'][_0x1151e2(0x1c7)][_0x1151e2(0x1bf)]};let _0x5704e2=[],_0x232fab;_0x99f818[_0x1151e2(0x1d3)][_0x1151e2(0x1d0)]?.[_0x1151e2(0x1c4)]?.[_0x1151e2(0x1c1)]?(_0x232fab=_0x1151e2(0x1e1),_0x99f818[_0x1151e2(0x1d3)][_0x1151e2(0x1d0)][_0x1151e2(0x1c4)][_0x1151e2(0x1c1)]['forEach'](_0x305387=>{const _0x119029=_0x1151e2,_0x4552cb=[];_0x305387[_0x119029(0x1ca)][_0x119029(0x1bc)](_0x18cf1b=>{const _0x8780a=_0x119029;_0x4552cb[_0x8780a(0x1ce)]({'bitrate':_0x18cf1b[_0x8780a(0x1b4)],'content_type':_0x18cf1b[_0x8780a(0x1cb)],'resolution':_0x18cf1b[_0x8780a(0x1cc)][_0x8780a(0x1e0)](/([\d ]{2,5}[x][\d ]{2,5})/)[0x0],'url':_0x18cf1b[_0x8780a(0x1cc)]});}),_0x4552cb['length']!==0x0&&_0x5704e2[_0x119029(0x1ce)]({'type':_0x305387[_0x119029(0x1d4)],'duration':_0x305387[_0x119029(0x1d6)],'thumbnail_url':_0x305387[_0x119029(0x1be)],'result':_0x305387[_0x119029(0x1d4)]===_0x119029(0x1e1)?_0x4552cb:_0x305387['url']});})):(_0x232fab=_0x1151e2(0x1bb),_0x99f818[_0x1151e2(0x1d3)][_0x1151e2(0x1d0)][_0x1151e2(0x1c4)]['photos'][_0x1151e2(0x1bc)](_0x58f7bc=>{_0x5704e2['push'](_0x58f7bc);})),_0x3fed2e({'status':'success','result':{'id':_0x99f818[_0x1151e2(0x1d3)][_0x1151e2(0x1d0)]['id'],'caption':_0x99f818[_0x1151e2(0x1d3)][_0x1151e2(0x1d0)]['text'],'created_at':_0x99f818[_0x1151e2(0x1d3)]['tweet'][_0x1151e2(0x1c2)],'created_timestamp':_0x99f818[_0x1151e2(0x1d3)][_0x1151e2(0x1d0)]['created_timestamp'],'replies':_0x99f818['data']['tweet'][_0x1151e2(0x1c3)],'retweets':_0x99f818[_0x1151e2(0x1d3)][_0x1151e2(0x1d0)][_0x1151e2(0x1d5)],'likes':_0x99f818[_0x1151e2(0x1d3)][_0x1151e2(0x1d0)][_0x1151e2(0x1b8)],'url':_0x99f818['data'][_0x1151e2(0x1d0)][_0x1151e2(0x1cc)],'possibly_sensitive':_0x99f818[_0x1151e2(0x1d3)][_0x1151e2(0x1d0)][_0x1151e2(0x1db)],'author':_0x28a512,'type':_0x232fab,'media':_0x5704e2[_0x1151e2(0x1bd)]!==0x0?_0x5704e2:null}});});};