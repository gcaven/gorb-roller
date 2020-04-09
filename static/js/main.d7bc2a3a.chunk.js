(this["webpackJsonpderbis-roller"]=this["webpackJsonpderbis-roller"]||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),c=n.n(r),u=(n(17),n(2)),i=n(1),o=n(3);function s(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #afa;\n  padding-top: 15px;\n  margin-top: 15px;\n"]);return s=function(){return e},e}function b(){var e=Object(u.a)(["\n  font-size: 14px;\n  padding: 2px 5px;\n  border-radius: 4px;\n  border: 1px solid #afa;\n  background-color: #1e1e1e;\n  color: white;\n  width: 35px;\n  margin-left: 5px;\n  margin-right: 5px;\n"]);return b=function(){return e},e}function d(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 25px;\n  padding: 0 15px;\n"]);return d=function(){return e},e}function m(){var e=Object(u.a)(["\n  border-bottom: 1px solid #afa;\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n"]);return m=function(){return e},e}function E(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n"]);return E=function(){return e},e}function p(){var e=Object(u.a)(["\n  width: 100%;\n  margin: 0;\n  padding: 15px 0 20px;\n  text-align: center;\n"]);return p=function(){return e},e}function f(e){var t=e.BAB,n=e.DEX,r=e.bonus,c=e.setBAB,u=e.setDEX,o=e.setBonus,s=Object(a.useState)(!1),b=Object(i.a)(s,2),d=b[0];b[1];function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t[2];c([parseInt(e),parseInt(n),parseInt(a)])}return l.a.createElement(l.a.Fragment,null,!d&&l.a.createElement(O,null,l.a.createElement(x,null,l.a.createElement("label",null,"Base Attack Bonus:"),l.a.createElement(h,{type:"number",value:t[0],onChange:function(e){return m(e.target.value)}}),l.a.createElement("span",null,"/"),l.a.createElement(h,{type:"number",value:t[1],onChange:function(e){return m(t[0],e.target.value)}}),l.a.createElement("span",null,"/"),l.a.createElement(h,{type:"number",value:t[2],onChange:function(e){return m(t[0],t[1],e.target.value)}})),l.a.createElement(x,null,l.a.createElement("label",null,"Dex Mod:"),l.a.createElement(h,{type:"number",value:n,onChange:function(e){return u(parseInt(e.target.value))}})),l.a.createElement(x,null,l.a.createElement("label",null,"Bonus/Malus:"),l.a.createElement(h,{type:"number",value:r,onChange:function(e){return o(parseInt(e.target.value))}}))))}function g(e){var t=e.enabled,n=e.label,a=e.setEnabled,r=e.disabled;return l.a.createElement(x,null,l.a.createElement("input",{type:"checkbox",checked:t,onChange:function(){a(!t)},disabled:r}),l.a.createElement("label",null,n))}var v=o.a.h3(p()),j=o.a.div(E()),O=Object(o.a)(j)(m()),x=o.a.div(d()),h=o.a.input(b()),S=o.a.div(s()),k=function(){var e=Object(a.useState)([11,6,1]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(8),u=Object(i.a)(c,2),o=u[0],s=u[1],b=Object(a.useState)(0),d=Object(i.a)(b,2),m=d[0],E=d[1],p=Object(a.useState)(!1),O=Object(i.a)(p,2),x=O[0],h=O[1],k=Object(a.useState)(!1),A=Object(i.a)(k,2),B=A[0],y=A[1],R=Object(a.useState)(!1),C=Object(i.a)(R,2),D=C[0],I=C[1],w=Object(a.useState)(!1),F=Object(i.a)(w,2),X=F[0],J=F[1],K=Object(a.useState)(!1),M=Object(i.a)(K,2),W=M[0],z=M[1],G=Object(a.useState)(!1),H=Object(i.a)(G,2),N=H[0],T=H[1],q=Object(a.useState)(!1),L=Object(i.a)(q,2),P=L[0],Q=L[1],U=Object(a.useState)(!1),V=Object(i.a)(U,2),Y=V[0],Z=V[1],$=Object(a.useState)(!1),_=Object(i.a)($,2),ee=_[0],te=_[1],ne=Object(a.useState)(!1),ae=Object(i.a)(ne,2),le=ae[0],re=ae[1],ce=[{label:"Target Within 30ft",enabled:ee,setEnabled:te},{label:"Whiskers Haste",enabled:D,setEnabled:I},{label:"Spend Extra Ki",enabled:x,setEnabled:h},{label:"Sneak Attack",enabled:X,setEnabled:J},{label:"Inari Buffing",enabled:W,setEnabled:z},{label:" - Inari Elemental Rage",enabled:W&&N,setEnabled:T,disabled:!W},{label:" - Charge Elemental Rage (Swift Action)",enabled:W&&N&&P,setEnabled:Q,disabled:!W},{label:"Full Attack",enabled:B,setEnabled:y},{label:" - Rapid Shot",enabled:Y&&B,setEnabled:Z,disabled:!B},{label:" - Flurry of Stars",enabled:le&&B,setEnabled:re,disabled:!B}];function ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=1,a=n[e];return t+=a,t+=o,W&&(t+=1),D&&(t+=1),ee&&(t+=1),Y&&(t-=2),le&&(t-=2),t+=m}function ie(){var e=0,t="";X&&(t+="8d6"),W&&(e+=1,t+="".concat(X?" + ":"",P?" 3d6 elemental":N?" 2d6 elemental":" 1d6 elemental")),ee&&(e+=1),D&&(e+=1);var n="11";return e>0&&(n+=" + ".concat(e)),t.length>0&&(n+=" + ".concat(t)),0!==m&&(e+=m),n}return l.a.createElement("div",{className:"App"},l.a.createElement(v,null,"Gorb Roller 1.6"),l.a.createElement(f,{BAB:n,DEX:o,bonus:m,setBAB:r,setDEX:s,setBonus:E}),l.a.createElement(j,null,ce.map((function(e){return l.a.createElement(g,e)}))),l.a.createElement(S,null,l.a.createElement("div",null,function(){var e=1;return x&&(e+=1),D&&B&&(e+=1),Y&&B&&(e+=1),le&&B&&(e+=2),e}()," Attacks @"),l.a.createElement("div",null,l.a.createElement("span",null,"Attack Roll:"),l.a.createElement("span",null,"1d20 + ",ue())),l.a.createElement("div",null,l.a.createElement("span",null,"Damage Roll:"),l.a.createElement("span",null,ie()))),B&&l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null,l.a.createElement("div",null,"1 Attack @"),l.a.createElement("div",null,l.a.createElement("span",null,"Attack Roll:"),l.a.createElement("span",null,"1d20 + ",ue(1))),l.a.createElement("div",null,l.a.createElement("span",null,"Damage Roll:"),l.a.createElement("span",null,ie()))),l.a.createElement(S,null,l.a.createElement("div",null,"1 Attack @"),l.a.createElement("div",null,l.a.createElement("span",null,"Attack Roll:"),l.a.createElement("span",null,"1d20 + ",ue(2))),l.a.createElement("div",null,l.a.createElement("span",null,"Damage Roll:"),l.a.createElement("span",null,ie())))),l.a.createElement(S,null,l.a.createElement("span",null,"Ki Cost: ",function(){var e=0;return x&&e++,le&&e++,e}())))};c.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d7bc2a3a.chunk.js.map