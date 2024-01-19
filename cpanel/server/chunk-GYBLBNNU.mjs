import './polyfills.server.mjs';
import{A as F,B as D,C as S,F as N,L as k,a as m,b as l,c as f,d as M,e as b,f as c,g as w,h as _,i as d,j as s,k as u,l as I,m as O,n as h,o as a,p as x,q as P,r as v,z as T}from"./chunk-JWAW4WKG.mjs";var A=[],E=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=f({type:t}),t.\u0275inj=m({imports:[k.forRoot(A),k]});let e=t;return e})();var C=class{constructor(){this.name="Riya Riya",this.studentNumber="991680658",this.login="Riya",this.email="riya33@shernet.sheridan.ca",this.campus="Davis",this.assignmentTitle="Assignment A1"}},p=class{constructor(t,i,n,o){this.make=t,this.model=i,this.bodyType=n,this.color=o}};var V=(()=>{let t=class t{constructor(){this.userInfo=new C}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["app-header"]],decls:2,vars:3,template:function(o,r){o&1&&(d(0,"header"),a(1),s()),o&2&&(c(),v(" ",r.userInfo.assignmentTitle," / ",r.userInfo.studentNumber," / ",r.userInfo.name,`
`))},styles:["header[_ngcontent-%COMP%]{background:#007bff;color:#fff;padding:10px 0;text-align:center}"]});let e=t;return e})();var R=(()=>{let t=class t{constructor(){this.userInfo=new C}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["app-footer"]],decls:2,vars:3,template:function(o,r){o&1&&(d(0,"footer"),a(1),s()),o&2&&(c(),v(" ",r.userInfo.login," / ",r.userInfo.email," / ",r.userInfo.campus,`
`))},styles:["footer[_ngcontent-%COMP%]{background:#007bff;color:#fff;padding:10px 0;text-align:center}"]});let e=t;return e})();function $(e,t){if(e&1){let i=I();d(0,"div",5)(1,"div"),a(2),s(),d(3,"button",6),O("click",function(){let r=M(i).$implicit,H=h();return b(H.selectCar(r))}),a(4,"View Details"),s()()}if(e&2){let i=t.$implicit;c(2),P("",i.make," ",i.model,"")}}function U(e,t){if(e&1){let i=I();d(0,"div",7)(1,"div",8)(2,"span",9),O("click",function(){M(i);let o=h();return b(o.closeModal())}),a(3,"\xD7"),s(),d(4,"h3"),a(5,"Details"),s(),a(6),u(7,"br"),a(8),u(9,"br"),a(10),u(11,"br"),a(12),s()()}if(e&2){let i=h();c(6),x(" Make: ",i.selectedCar.make,""),c(2),x(" Model: ",i.selectedCar.model,""),c(2),x(" Body Type: ",i.selectedCar.bodyType,""),c(2),x(" Color: ",i.selectedCar.color," ")}}var j=(()=>{let t=class t{constructor(){this.cars=[new p("Toyota","Camry","Sedan","Silver"),new p("Ford","Mustang","Coupe","Red"),new p("Tesla","Model X","SUV","Black"),new p("BMW","3 Series","Sedan","Blue"),new p("Honda","Civic","Hatchback","White")],this.selectedCar=null}selectCar(n){this.selectedCar=n}closeModal(){this.selectedCar=null}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["app-content"]],decls:5,vars:2,consts:[[1,"container"],[1,"sectionA"],[1,"card-container"],["class","card",4,"ngFor","ngForOf"],["class","modal",4,"ngIf"],[1,"card"],["type","button",3,"click"],[1,"modal"],[1,"modal-content"],[1,"close",3,"click"]],template:function(o,r){o&1&&(d(0,"div",0)(1,"div",1)(2,"div",2),w(3,$,5,2,"div",3),s()()(),w(4,U,13,4,"div",4)),o&2&&(c(3),_("ngForOf",r.cars),c(),_("ngIf",r.selectedCar))},dependencies:[T,F],styles:[".sectionA[_ngcontent-%COMP%]{padding:10px}.card-container[_ngcontent-%COMP%]{display:flex}.card[_ngcontent-%COMP%]{flex:0 0 auto;margin-right:20px;padding:20px;box-shadow:0 2px 5px #00000026;text-align:center}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;padding:10px;outline:none;border-radius:10px;text-decoration:none;background-color:#007bff;color:#fff;cursor:pointer}.card[_ngcontent-%COMP%]:hover{transform:scale(1.05);background-color:#e3f2fd}.sectionB[_ngcontent-%COMP%]{padding:10px;clear:both}.detail-card[_ngcontent-%COMP%]{margin-top:20px}.modal[_ngcontent-%COMP%]{display:block;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#0006}.modal-content[_ngcontent-%COMP%]{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%}.close[_ngcontent-%COMP%]{color:#aaa;float:right;font-size:28px;font-weight:700}.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus{color:#000;text-decoration:none;cursor:pointer}@media only screen and (max-width: 768px){.card-container[_ngcontent-%COMP%]{flex-direction:column}.card[_ngcontent-%COMP%]{margin-bottom:20px}}"]});let e=t;return e})();var y=(()=>{let t=class t{constructor(){this.title="RiyaA1"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["app-root"]],decls:3,vars:0,template:function(o,r){o&1&&u(0,"app-header")(1,"app-content")(2,"app-footer")},dependencies:[V,R,j]});let e=t;return e})();var B=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=f({type:t,bootstrap:[y]}),t.\u0275inj=m({providers:[S()],imports:[D,E]});let e=t;return e})();var q=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=f({type:t,bootstrap:[y]}),t.\u0275inj=m({imports:[B,N]});let e=t;return e})();export{q as a};