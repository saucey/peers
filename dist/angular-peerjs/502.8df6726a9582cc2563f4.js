"use strict";(self.webpackChunkangular_peerjs=self.webpackChunkangular_peerjs||[]).push([[502],{3502:(T,a,n)=>{n.r(a),n.d(a,{SenderModule:()=>A});var d=n(8583),v=n(522),s=n(5435),c=n(7568),e=n(3018),m=n(2238),u=n(1095);const p=["localVideo"],h=["remoteVideo"],S=[{path:"",component:(()=>{class o{constructor(t,l){this.dialog=t,this.callService=l,this.isCallStarted$=this.callService.isCallStarted$,this.peerId=this.callService.initPeer2(),this.serverPeerId="xyz123"}ngOnInit(){this.callService.localStream$.pipe((0,s.h)(t=>!!t)).subscribe(t=>this.localVideo.nativeElement.srcObject=t),this.callService.remoteStream$.pipe((0,s.h)(t=>!!t)).subscribe(t=>this.remoteVideo.nativeElement.srcObject=t)}ngOnDestroy(){this.callService.destroyPeer()}makeCall(){this.callService.establishMediaCall(this.serverPeerId)}endCall(){this.callService.closeMediaCall()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.uw),e.Y36(c.M))},o.\u0275cmp=e.Xpm({type:o,selectors:[["sender"]],viewQuery:function(t,l){if(1&t&&(e.Gf(p,5),e.Gf(h,5)),2&t){let r;e.iGM(r=e.CRH())&&(l.localVideo=r.first),e.iGM(r=e.CRH())&&(l.remoteVideo=r.first)}},features:[e._Bn([c.M])],decls:14,vars:4,consts:[[1,"container"],["mat-raised-button","","color","primary",1,"m-2",3,"click"],["mat-raised-button","","color","warn",1,"m-2",3,"disabled","click"],[1,"row"],[1,"col","text-center"],["id","video-wrapper"],["id","remote-video","autoplay","","playsinline",""],["remoteVideo",""],["id","local-video","autoplay","","playsinline","",3,"muted"],["localVideo",""]],template:function(t,l){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"button",1),e.NdJ("click",function(){return l.makeCall()}),e._uU(3,"Start Call"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return l.endCall()}),e.ALo(5,"async"),e._uU(6,"End Call"),e.qZA(),e.qZA(),e.TgZ(7,"div",3),e.TgZ(8,"div",4),e.TgZ(9,"div",5),e._UZ(10,"video",6,7),e._UZ(12,"video",8,9),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("disabled",!e.lcZ(5,2,l.isCallStarted$)),e.xp6(8),e.Q6J("muted",!0))},directives:[u.lW],pipes:[d.Ov],styles:["#video-wrapper[_ngcontent-%COMP%]{text-align:center;background-color:#343434;border-radius:4px}#remote-video[_ngcontent-%COMP%]{max-width:100%;max-height:90vh;border-radius:4px}#local-video[_ngcontent-%COMP%]{z-index:1;position:absolute;right:10px;bottom:10px;width:100%;height:10vw;max-width:10rem;max-height:10rem;border:4px solid white}"]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.ez,v.Bz.forChild(S)]]}),o})();var C=n(665),g=n(8295),y=n(9983),Z=n(4785),M=n(6458),b=n(894),x=n(1841);let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[],imports:[[f,C.u5,u.ot,m.Is,g.lN,y.c,Z.Iq,M.ZX,b.B,d.ez,x.JF]]}),o})()}}]);