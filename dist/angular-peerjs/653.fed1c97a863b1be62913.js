"use strict";(self.webpackChunkangular_peerjs=self.webpackChunkangular_peerjs||[]).push([[653],{653:(x,s,i)=>{i.r(s),i.d(s,{RecieverModule:()=>k});var n=i(8583),h=i(522),a=i(5435),d=i(442),e=i(3018),v=i(2238);let u=(()=>{class o{openWebSocketWithPeerID(t){this.webSocket=new WebSocket("ws://localhost:8889"),this.webSocket.onopen=c=>{this.webSocket.send(t)},this.webSocket.onmessage=c=>{},this.webSocket.onclose=c=>{console.log("Close",c)}}sendPeerID(t){this.webSocket.send(JSON.stringify(t))}closeWebSocket(){this.webSocket.close()}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var m=i(1095);const p=["localVideo"],S=["remoteVideo"],f=[{path:"",component:(()=>{class o{constructor(t,c,r){this.dialog=t,this.callService=c,this.webSocketService=r,this.isCallStarted$=this.callService.isCallStarted$,this.peerId=this.callService.initPeer(),this.callService.setPeerID(this.peerId),this.callService.enableCallAnswer()}ngOnInit(){this.callService.localStream$.pipe((0,a.h)(t=>!!t)).subscribe(t=>this.localVideo.nativeElement.srcObject=t),this.callService.remoteStream$.pipe((0,a.h)(t=>!!t)).subscribe(t=>this.remoteVideo.nativeElement.srcObject=t)}ngOnDestroy(){this.callService.destroyPeer(),this.webSocketService.closeWebSocket()}endCall(){this.callService.closeMediaCall()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v.uw),e.Y36(d.M),e.Y36(u))},o.\u0275cmp=e.Xpm({type:o,selectors:[["reciever"]],viewQuery:function(t,c){if(1&t&&(e.Gf(p,5),e.Gf(S,5)),2&t){let r;e.iGM(r=e.CRH())&&(c.localVideo=r.first),e.iGM(r=e.CRH())&&(c.remoteVideo=r.first)}},features:[e._Bn([d.M])],decls:12,vars:4,consts:[[1,"container"],["mat-raised-button","","color","warn",1,"m-2",3,"disabled","click"],[1,"row"],[1,"col","text-center"],["id","video-wrapper"],["id","remote-video","autoplay","","playsinline",""],["remoteVideo",""],["id","local-video","autoplay","","playsinline","",3,"muted"],["localVideo",""]],template:function(t,c){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"button",1),e.NdJ("click",function(){return c.endCall()}),e.ALo(3,"async"),e._uU(4,"End Call"),e.qZA(),e.qZA(),e.TgZ(5,"div",2),e.TgZ(6,"div",3),e.TgZ(7,"div",4),e._UZ(8,"video",5,6),e._UZ(10,"video",7,8),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("disabled",!e.lcZ(3,2,c.isCallStarted$)),e.xp6(8),e.Q6J("muted",!0))},directives:[m.lW],pipes:[n.Ov],styles:["#video-wrapper[_ngcontent-%COMP%]{text-align:center;background-color:#343434;border-radius:4px}#remote-video[_ngcontent-%COMP%]{max-width:100%;max-height:90vh;border-radius:4px}#local-video[_ngcontent-%COMP%]{z-index:1;position:absolute;right:10px;bottom:10px;width:100%;height:10vw;max-width:10rem;max-height:10rem;border:4px solid white}"]}),o})()}];let g=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[n.ez,h.Bz.forChild(f)]]}),o})();var b=i(665),C=i(8295),R=i(9983),y=i(4785),Z=i(6458),M=i(894),w=i(1841);let k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[],imports:[[g,b.u5,m.ot,v.Is,C.lN,R.c,y.Iq,Z.ZX,M.B,n.ez,w.JF]]}),o})()}}]);