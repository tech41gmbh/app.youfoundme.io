(this["webpackJsonpyoufoundme.io"]=this["webpackJsonpyoufoundme.io"]||[]).push([[0],{1008:function(e,t){},1010:function(e,t){},1025:function(e,t){},1058:function(e,t){},1059:function(e,t){},1127:function(e,t){},1129:function(e,t){},1134:function(e,t){},1136:function(e,t){},1143:function(e,t){},1155:function(e,t){},1158:function(e,t){},1163:function(e,t){},1238:function(e,t){},1279:function(e,t){},1281:function(e,t){},1294:function(e,t){},1295:function(e,t){},1318:function(e,t){},1427:function(e,t){},1516:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(19),a=c(102),s=c(27),j=c(96),i=c(69),b=c(623),l=c(625),o=c(78),u=c(2);function O(){var e=Object(j.b)(),t=e.isAuthenticated,c=e.isAuthenticating,O=(e.authError,e.authenticate),h=(e.login,e.logout),d=e.user,x=Object(n.useState)(""),f=Object(r.a)(x,2),p=f[0],m=f[1],g=Object(i.c)(p);g.hasCopied,g.onCopy;Object(n.useEffect)((function(){t&&m(d.get("ethAddress"))}));var v="https://testnet.snowtrace.io/address/"+p;return Object(u.jsxs)("div",{style:{marginTop:"px"},children:[Object(u.jsx)("span",{style:{left:"10px",position:"absolute"},children:Object(u.jsx)(b.c,{fontSize:"3xl",children:"youfoundme.io"})}),Object(u.jsxs)("center",{children:[Object(u.jsxs)("nav",{style:{borderBottom:"solid 1px",paddingBottom:"1rem"},children:[Object(u.jsx)(a.b,{to:"/show",children:Object(u.jsx)(l.a,{children:"My DID"})}),"\xa0",Object(u.jsx)(a.b,{to:"/editor",children:Object(u.jsx)(l.a,{children:"Edit DID"})}),"\xa0",Object(u.jsx)(a.b,{to:"/search",children:Object(u.jsx)(l.a,{children:"Search"})}),"\xa0\xa0\xa0",Object(u.jsx)("span",{style:{right:"10px",position:"absolute"},children:t?Object(u.jsx)(l.a,{onClick:function(){return h()},children:"disconnet"}):Object(u.jsx)(l.a,{isLoading:c,onClick:function(){return O()},children:"connect wallet"})}),t&&Object(u.jsx)("span",{style:{top:"40px",right:"10px",position:"absolute"},children:Object(u.jsx)(b.d,{href:v,isExternal:!0,children:Object(u.jsxs)(b.b,{children:[Object(u.jsx)(o.d,{fontSize:"xs"}),Object(u.jsx)(b.e,{fontSize:"xs",children:p})]})})}),Object(u.jsx)("span",{style:{top:"60px",right:"10px",position:"absolute"},children:Object(u.jsxs)(b.b,{children:[Object(u.jsx)(o.d,{color:"blue.500"}),Object(u.jsx)(b.e,{fontSize:"xs",children:Object(u.jsx)(b.d,{color:"blue.500",href:"https://testnet.snowtrace.io/block/0x3b9197c2e27818ab344d1c567917e8c569850b5901926f1e777c0e505547a84e",isExternal:!0,children:"Contract Fuji"})})]})})]}),Object(u.jsx)(s.a,{})]})]})}var h=c(145),d=c(235),x=c(200),f=c.n(x),p=c(634),m=c(635),g=c(4),v=c.n(g),S=c(7);function y(e){return C.apply(this,arguments)}function C(){return(C=Object(S.a)(v.a.mark((function e(t){var c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.tech41.de/yfm/v0/person/get/",c="https://api.tech41.de/yfm/v0/person/get/"+t,e.next=4,f.a.get(c);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return w.apply(this,arguments)}function w(){return(w=Object(S.a)(v.a.mark((function e(t){var c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.tech41.de/yfm/v0/person/search/",c="https://api.tech41.de/yfm/v0/person/search/"+t,e.next=4,f.a.get(c);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return E.apply(this,arguments)}function E(){return(E=Object(S.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://api.tech41.de/yfm/v0/person/post/",f.a.post("https://api.tech41.de/yfm/v0/person/post/",{person:t}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=c(133),L=A.c.model({searchfield:"",isConnected:!1,isLoaded:!1}).actions((function(e){return{set:function(t,c){switch(t){case"searchfield":e.searchfield=c;case"isConnected":e.isConnected=c;case"isLoaded":e.isLoaded=c}}}})),D=A.c.model({did:"",pubkey:"",contract:"",username:"",jobtitle:"",teaser:"",img:"",avatar:"",tags:"",ref0:"",ref1:"",ref2:"",metaverse:"",lat:"",long:"",status:"",email:"",mobile:"",gname:"",sname:""}).actions((function(e){return{set:function(t){e.did=t.did,e.pubkey=t.pubkey,e.contract=t.contract,e.username=t.username,e.jobtitle=t.jobtitle,e.avatar=t.avatar,e.teaser=t.teaser,e.img=t.img,e.tags=t.tags,e.ref0=t.ref0,e.ref1=t.ref1,e.ref2=t.ref2,e.metaverse=t.metaverse,e.lat=t.lat,e.long=t.long,e.status=t.status,e.email=t.email,e.mobile=t.mobile,e.gname=t.gname,e.sname=t.sname}}})),I=D.create(),F=L.create(),B=A.c.model({me:A.c.map(D),appState:A.c.map(L)}).create({});function M(){return Object(A.a)(I)}function P(){return Object(A.a)(F)}function J(){return(J=Object(S.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:c=e.sent,I.set(c.person);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(S.a)(v.a.mark((function e(t,c){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F.set(t,c),e.abrupt("return",F);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return W.apply(this,arguments)}function W(){return(W=Object(S.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I.set(t),k(t),e.abrupt("return",I);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){var e=Object(j.b)(),t=e.isAuthenticated,c=(e.isAuthenticating,e.authError,e.authenticate,e.login,e.logout,e.user),a=Object(s.g)();t||a("/home"),P().isLoaded||(function(e){J.apply(this,arguments)}(c.get("ethAddress")),function(e,t){K.apply(this,arguments)}("isLoaded",!0)),Object(n.useEffect)((function(){var e=M();d(e.did),g(e.pubkey),y(e.contract),k(e.username),D(e.jobtitle),U(e.teaser),V(e.img),Y(e.avatar),X(e.tags),te(e.ref0),ae(e.ref1),be(e.ref2),Oe(e.metaverse),xe(e.lat),me(e.long),ye(e.status),ke(e.email),De(e.mobile),Me(e.gname),qe(e.sname)}));var l=Object(n.useState)(""),O=Object(r.a)(l,2),h=O[0],d=O[1],x=Object(n.useState)(""),f=Object(r.a)(x,2),g=(f[0],f[1]),v=Object(n.useState)(""),S=Object(r.a)(v,2),y=(S[0],S[1]),C=Object(n.useState)(""),z=Object(r.a)(C,2),w=z[0],k=z[1],E=Object(n.useState)(""),A=Object(r.a)(E,2),L=A[0],D=A[1],I=Object(n.useState)(""),F=Object(r.a)(I,2),B=F[0],U=F[1],W=Object(n.useState)(""),q=Object(r.a)(W,2),T=q[0],V=q[1],Z=Object(n.useState)(""),N=Object(r.a)(Z,2),R=N[0],Y=N[1],G=Object(n.useState)(""),H=Object(r.a)(G,2),Q=H[0],X=H[1],$=Object(n.useState)(""),_=Object(r.a)($,2),ee=_[0],te=_[1],ce=Object(n.useState)(""),ne=Object(r.a)(ce,2),re=ne[0],ae=ne[1],se=Object(n.useState)(""),je=Object(r.a)(se,2),ie=je[0],be=je[1],le=Object(n.useState)(""),oe=Object(r.a)(le,2),ue=oe[0],Oe=oe[1],he=Object(n.useState)(""),de=Object(r.a)(he,2),xe=(de[0],de[1]),fe=Object(n.useState)(""),pe=Object(r.a)(fe,2),me=(pe[0],pe[1]),ge=Object(n.useState)(""),ve=Object(r.a)(ge,2),Se=ve[0],ye=ve[1],Ce=Object(n.useState)(""),ze=Object(r.a)(Ce,2),we=ze[0],ke=ze[1],Ee=Object(n.useState)(""),Ae=Object(r.a)(Ee,2),Le=Ae[0],De=Ae[1],Ie=Object(n.useState)(""),Fe=Object(r.a)(Ie,2),Be=Fe[0],Me=Fe[1],Pe=Object(n.useState)(!1),Je=Object(r.a)(Pe,2),Ke=(Je[0],Je[1],Object(n.useState)("")),Ue=Object(r.a)(Ke,2),We=Ue[0],qe=Ue[1],Te="avatar.html?url="+R,Ve=function(e){return e.startsWith("https")&&(e=e.substring(8)),e.startsWith("http")&&(e=e.substring(7)),e.length>50&&(e=e.substring(0,50)+"..."),e},Ze=Object(i.c)(h),Ne=(Ze.hasCopied,Ze.onCopy);return Object(u.jsx)("main",{style:{padding:"1rem 0"},children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(b.d,{onClick:Ne,children:Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{fontSize:"sm",children:h}),Object(u.jsx)(o.a,{})]})}),Object(u.jsx)("br",{}),Object(u.jsx)(b.c,{children:w}),Object(u.jsx)("br",{}),T.length>0&&Object(u.jsx)(p.a,{boxSize:"200px",src:T,objectFit:"cover",alt:w}),R.length>0&&Object(u.jsx)(b.d,{color:"teal.500",href:Te,isExternal:!0,children:"Show Avatar"}),Object(u.jsx)("br",{}),Object(u.jsx)(b.c,{children:L}),Object(u.jsx)(b.e,{fontSize:"1xl",children:B}),Object(u.jsx)("br",{}),Object(u.jsxs)(m.a,{variant:"simple",children:[Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.b,{children:Object(u.jsx)(b.d,{href:ee,isExternal:!0,children:Object(u.jsx)(o.d,{color:"blue.500"})})}),Object(u.jsx)(m.b,{children:Object(u.jsx)(b.d,{href:ee,isExternal:!0,children:Object(u.jsx)(b.e,{fontSize:"1xl",children:Ve(ee)})})})]}),Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.b,{children:Object(u.jsx)(b.d,{href:re,isExternal:!0,children:Object(u.jsx)(o.d,{color:"blue.500"})})}),Object(u.jsx)(m.b,{children:Object(u.jsx)(b.d,{href:re,isExternal:!0,children:Object(u.jsx)(b.e,{fontSize:"1xl",children:Ve(re)})})})]}),Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.b,{children:Object(u.jsx)(b.d,{href:ie,isExternal:!0,children:Object(u.jsx)(o.d,{color:"blue.500"})})}),Object(u.jsx)(m.b,{children:Object(u.jsx)(b.d,{href:ie,isExternal:!0,children:Object(u.jsx)(b.e,{fontSize:"1xl",children:Ve(ie)})})})]}),Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.b,{children:Object(u.jsx)(b.d,{href:ue,isExternal:!0,children:Object(u.jsx)(o.i,{color:"blue.500"})})}),Object(u.jsx)(m.b,{children:Object(u.jsx)(b.d,{href:ue,isExternal:!0,children:Object(u.jsx)(b.e,{fontSize:"1xl",children:Ve(ue)})})})]}),Object(u.jsxs)(m.c,{children:[Object(u.jsxs)(m.b,{children:[Object(u.jsx)(o.h,{color:"blue.500"})," "]}),Object(u.jsx)(m.b,{children:Object(u.jsx)(b.e,{fontSize:"1xl",children:Se})})]}),Object(u.jsx)(m.c,{children:Object(u.jsx)(m.b,{colSpan:"2",children:Object(u.jsx)(b.e,{fontSize:"1xl",color:"teal.500",children:"+ details, only visible to contacts confirmed by you"})})}),Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.b,{children:Object(u.jsx)(o.e,{color:"blue.500"})}),Object(u.jsx)(m.b,{children:Object(u.jsxs)(b.e,{fontSize:"1xl",color:"teal.500",children:[Be," ",We]})})]}),Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.b,{children:Object(u.jsx)(o.c,{color:"blue.500"})}),Object(u.jsx)(m.b,{children:Object(u.jsx)(b.e,{fontSize:"1xl",color:"teal.500",children:we})})]}),Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.b,{children:Object(u.jsx)(o.f,{color:"blue.500"})}),Object(u.jsx)(m.b,{children:Object(u.jsx)(b.e,{fontSize:"1xl",color:"teal.500",children:Le})})]}),Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.b,{children:Object(u.jsx)(o.g,{color:"blue.500"})}),Object(u.jsx)(m.b,{children:Object(u.jsx)(b.e,{color:"teal.500",fontSize:"1xl",children:Q})})]}),Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.b,{children:Object(u.jsx)(o.b,{color:"blue.500"})}),Object(u.jsx)(m.b,{children:"VCF card | VCF card+"})]})]})]})})}Object(A.b)(B,(function(e){console.dir(e)}));var T=c(636);function V(){var e=Object(j.b)(),t=e.isAuthenticated,c=(e.isAuthenticating,e.authError,e.authenticate,e.login,e.logout,e.user,Object(s.g)());t||c("/home"),Object(n.useEffect)((function(){if(""==O){var e=M();h(e.did),p(e.pubkey),C(e.contract),E(e.username),I(e.jobtitle),J(e.teaser),V(e.img),Y(e.avatar),X(e.tags),te(e.ref0),ae(e.ref1),be(e.ref2),Oe(e.metaverse),fe(e.lat),ve(e.long),ze(e.status),Ae(e.email),Fe(e.mobile),Je(e.gname),qe(e.sname)}}));var a=function(){var e=Object(S.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(c={}).did=O,c.pubkey=f.toLowerCase(),c.contract=y.toLowerCase(),c.username=k,c.jobtitle=D,c.teaser=P,c.img=q,c.avatar=R,c.tags=Q,c.ref0=ee,c.ref1=re,c.ref2=ie,c.metaverse=ue,c.lat=xe,c.long=ge,c.status=Ce,c.email=Ee,c.mobile=Ie,c.gname=Pe,c.sname=We,U(c);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=Object(n.useState)(""),o=Object(r.a)(i,2),O=o[0],h=o[1],d=Object(n.useState)(""),x=Object(r.a)(d,2),f=x[0],p=x[1],m=Object(n.useState)(""),g=Object(r.a)(m,2),y=g[0],C=g[1],z=Object(n.useState)(""),w=Object(r.a)(z,2),k=w[0],E=w[1],A=Object(n.useState)(""),L=Object(r.a)(A,2),D=L[0],I=L[1],F=Object(n.useState)(""),B=Object(r.a)(F,2),P=B[0],J=B[1],K=Object(n.useState)(""),W=Object(r.a)(K,2),q=W[0],V=W[1],Z=Object(n.useState)(""),N=Object(r.a)(Z,2),R=N[0],Y=N[1],G=Object(n.useState)(""),H=Object(r.a)(G,2),Q=H[0],X=H[1],$=Object(n.useState)(""),_=Object(r.a)($,2),ee=_[0],te=_[1],ce=Object(n.useState)(""),ne=Object(r.a)(ce,2),re=ne[0],ae=ne[1],se=Object(n.useState)(""),je=Object(r.a)(se,2),ie=je[0],be=je[1],le=Object(n.useState)(""),oe=Object(r.a)(le,2),ue=oe[0],Oe=oe[1],he=Object(n.useState)(""),de=Object(r.a)(he,2),xe=de[0],fe=de[1],pe=Object(n.useState)(""),me=Object(r.a)(pe,2),ge=me[0],ve=me[1],Se=Object(n.useState)(""),ye=Object(r.a)(Se,2),Ce=ye[0],ze=ye[1],we=Object(n.useState)(""),ke=Object(r.a)(we,2),Ee=ke[0],Ae=ke[1],Le=Object(n.useState)(""),De=Object(r.a)(Le,2),Ie=De[0],Fe=De[1],Be=Object(n.useState)(""),Me=Object(r.a)(Be,2),Pe=Me[0],Je=Me[1],Ke=Object(n.useState)(""),Ue=Object(r.a)(Ke,2),We=Ue[0],qe=Ue[1];return Object(u.jsx)("main",{style:{padding:"1rem 0"},children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(b.c,{children:"Profile Editor"}),Object(u.jsx)("br",{}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"DID: "}),Object(u.jsx)(b.e,{fontSize:"sm",children:O})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"Your public key: "}),Object(u.jsxs)(b.e,{fontSize:"sm",children:[f," "]})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"contract: "}),Object(u.jsxs)(b.e,{fontSize:"sm",children:[y," - Avalanche FUJI"]})]}),Object(u.jsx)(l.a,{onClick:a,children:"Save"}),Object(u.jsx)(b.c,{children:"Public"}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"username: "}),Object(u.jsx)(T.a,{placeholder:"username",fontSize:"1xl",value:k,onChange:function(e){return E(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"jobtitle: "}),Object(u.jsx)(T.a,{placeholder:"jobtitle",fontSize:"1xl",value:D,onChange:function(e){return I(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"teaser: "}),Object(u.jsx)(T.a,{placeholder:"teaser",fontSize:"1xl",value:P,onChange:function(e){return J(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"img: "}),Object(u.jsx)(T.a,{placeholder:"img",fontSize:"1xl",value:q,onChange:function(e){return V(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"avatar: "}),Object(u.jsx)(T.a,{placeholder:"avatar",fontSize:"1xl",value:R,onChange:function(e){return Y(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"tags: "}),Object(u.jsx)(T.a,{placeholder:"tags",fontSize:"1xl",value:Q,onChange:function(e){return X(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"ref0: "}),Object(u.jsx)(T.a,{placeholder:"ref0",fontSize:"1xl",value:ee,onChange:function(e){return te(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"ref1: "}),Object(u.jsx)(T.a,{placeholder:"ref1 ",fontSize:"1xl",value:re,onChange:function(e){return ae(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"ref2: "}),Object(u.jsx)(T.a,{placeholder:"ref2 ",fontSize:"1xl",value:ie,onChange:function(e){return be(e.target.value)}})]}),Object(u.jsx)(b.c,{children:"Status"}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"metaverse: "}),Object(u.jsx)(T.a,{placeholder:"metaverse",fontSize:"1xl",value:ue,onChange:function(e){return Oe(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"lat: "}),Object(u.jsx)(T.a,{placeholder:"lattidtude",fontSize:"1xl",value:xe,onChange:function(e){return fe(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"long: "}),Object(u.jsx)(T.a,{placeholder:"longitude",fontSize:"1xl",value:ge,onChange:function(e){return ve(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"status: "}),Object(u.jsx)(T.a,{placeholder:"status",fontSize:"1xl",value:Ce,onChange:function(e){return ze(e.target.value)}})]}),Object(u.jsx)(b.c,{children:"Private"}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"email: "}),Object(u.jsx)(T.a,{placeholder:"email",fontSize:"1xl",value:Ee,onChange:function(e){return Ae(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"mobile: "}),Object(u.jsx)(T.a,{placeholder:"mobile",fontSize:"1xl",value:Ie,onChange:function(e){return Fe(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"gname: "}),Object(u.jsx)(T.a,{placeholder:"first name",fontSize:"1xl",value:Pe,onChange:function(e){return Je(e.target.value)}})]}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:"sname: "}),Object(u.jsx)(T.a,{placeholder:"last name",fontSize:"1xl",value:We,onChange:function(e){return qe(e.target.value)}})]})]})})}var Z=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),o=Object(r.a)(i,2),O=o[0],h=o[1];Object(n.useEffect)((function(){}));var d=Object(j.b)(),x=d.isAuthenticated,f=(d.isAuthenticating,d.authError,d.authenticate,d.login,d.logout,d.user,Object(s.g)());x||f("/home");P();var p=function(){var e=Object(S.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(O);case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(S.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h("0x345879b60bf5ccddd06bc91e49a6ebc4e93cfdaa"),f("/search");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("main",{style:{padding:"1rem 0"},children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(b.c,{children:"Search"}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(T.a,{onChange:function(e){var t=e.target.value;h(t)},value:O}),Object(u.jsx)(l.a,{onClick:p,children:"go"}),Object(u.jsx)(l.a,{onClick:g,children:"default"})]}),Object(u.jsx)(b.e,{fontSize:"xs",children:"name or DID"}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),Object(u.jsx)(m.a,{children:Object.keys(c).map((function(e,t){var n=c[e];return Object(u.jsxs)(m.c,{onClick:function(){return n.did,void f("/show")},children:[Object(u.jsx)(m.b,{children:n.did}),Object(u.jsx)(m.b,{children:n.username})]},t)}))})]})})};function N(){var e=Object(j.b)(),t=e.isAuthenticated,c=(e.isAuthenticating,e.authError,e.authenticate,e.login,e.logout,e.user,Object(s.g)());return t&&c("/show"),Object(u.jsxs)(b.a,{children:[Object(u.jsx)(b.c,{children:"Welcome to youfoundme"}),"Please connect your"," ",Object(u.jsx)(b.d,{href:"https://metamask.io/",isExternal:!0,children:"Metamask"})," ","wallet"]})}var R=c(651);c.n(R).a.init("jyphy1/youfindme");var Y=Object(h.b)({config:{initialColorMode:"dark"}}),G=document.getElementById("root");Object(d.render)(Object(u.jsx)(h.a,{theme:Y,children:Object(u.jsx)(a.a,{children:Object(u.jsx)(j.a,{appId:"EKKcMCLp0U2o6l5xCNbuvZmmjCKkyRThrBqzEj9Z",serverUrl:"https://xhuajeqb4esg.usemoralis.com:2053/server",children:Object(u.jsx)(s.d,{children:Object(u.jsxs)(s.b,{path:"/",element:Object(u.jsx)(O,{}),children:[Object(u.jsx)(s.b,{path:"home",element:Object(u.jsx)(N,{})}),Object(u.jsx)(s.b,{index:!0,element:Object(u.jsx)(N,{})}),Object(u.jsx)(s.b,{path:"show",element:Object(u.jsx)(q,{})}),Object(u.jsx)(s.b,{path:"editor",element:Object(u.jsx)(V,{})}),Object(u.jsx)(s.b,{path:"search",element:Object(u.jsx)(Z,{})})]})})})})}),G)},952:function(e,t){},954:function(e,t){},958:function(e,t){},959:function(e,t){},985:function(e,t){},987:function(e,t){},997:function(e,t){},999:function(e,t){}},[[1516,1,2]]]);
//# sourceMappingURL=main.814a0284.chunk.js.map