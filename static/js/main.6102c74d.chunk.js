(this.webpackJsonpperfectorium=this.webpackJsonpperfectorium||[]).push([[0],{34:function(e,n,t){e.exports=t(48)},39:function(e,n,t){},44:function(e,n,t){},45:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(11),i=t.n(r),o=(t(39),t(40),t(25)),l=t(9),s=t(4),m=t(71),u=t(3),p=t(77),g=t(73),d=t(76),E=t(72),b=t(75),f=t(70);Object(s.a)((function(e){return{root:{color:e.palette.getContrastText(f.a[200]),backgroundColor:f.a[200],"&:hover":{backgroundColor:f.a[400]}}}}))(b.a),Object(m.a)((function(e){return{margin:{margin:e.spacing(1),width:"40%",color:"white"}}}));var _=t(74),v=(t(44),Object(s.a)({alternativeLabel:{top:16,width:"90%",marginLeft:"-5px"},active:{"& $line":{backgroundColor:"#22c1c6"}},completed:{"& $line":{backgroundColor:"#22c1c6"}},line:{height:3,border:0,backgroundColor:"#eaeaf0",borderRadius:1}})(E.a)),N=Object(m.a)({root:{backgroundColor:"#ccc",zIndex:1,color:"#fff",width:33,height:33,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"},active:{backgroundColor:"white",border:"2px solid #00b7bd",boxSizing:"border-box",color:"#00b7bd"},completed:{backgroundColor:"#00b7bd"}});function h(e){var n,t=N(),a=e.active,r=e.completed,i={1:c.a.createElement("img",{alt:"icon",src:"../icons/step1.png"}),2:c.a.createElement("img",{alt:"icon",src:"../icons/step2.png"}),3:c.a.createElement("img",{alt:"icon",src:"../icons/step3.png"}),4:c.a.createElement("img",{alt:"icon",src:"../icons/step4.png"})},o={1:c.a.createElement("img",{alt:"icon",src:"../icons/step1b.png"}),2:c.a.createElement("img",{alt:"icon",src:"../icons/step2b.png"}),3:c.a.createElement("img",{alt:"icon",src:"../icons/step3b.png"}),4:c.a.createElement("img",{alt:"icon",src:"../icons/step4b.png"})};return c.a.createElement("div",{className:Object(u.a)(t.root,(n={},Object(l.a)(n,t.active,a),Object(l.a)(n,t.completed,r),n))},e.active?o[String(e.icon)]:i[String(e.icon)])}var k=Object(m.a)((function(e){return{root:{width:"100%",color:"green",marginLeft:"7%"},button:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));function w(e){e.preventDefault()}function C(){var e=k(),n=c.a.useState(1),t=Object(o.a)(n,2),a=t[0],r=t[1],i=["Step 1","Step 2","Step 3","Step 4"];return c.a.createElement("div",{className:e.root+" steps"},c.a.createElement(p.a,{alternativeLabel:!0,activeStep:a,connector:c.a.createElement(v,null)},c.a.createElement("div",{className:"first-line"}),i.map((function(e){return c.a.createElement(g.a,{key:e},c.a.createElement(d.a,{StepIconComponent:h},c.a.createElement("div",{className:"label"},e)))}))),a===i.length?c.a.createElement("div",null,c.a.createElement(_.a,{className:e.instructions},"All steps completed!"),c.a.createElement(b.a,{onClick:function(){r(0)},className:e.button},"Reset")):c.a.createElement("div",null,c.a.createElement(_.a,{className:e.instructions},function(e){switch(e){case 0:return"Step1. Recieving user information 1";case 1:return"Step2. Information 1 recieved. Recieving user information 2";case 2:return"Step3. Information 1 & 2 recieved. Recieving user information 3";case 3:return"Step4. Information 1 & 2 & 3 recieved. Recieving user information 4";default:return"Unknown step"}}(a)),c.a.createElement("div",null,c.a.createElement(b.a,{disabled:0===a,onClick:function(){r((function(e){return e-1}))},className:e.button},"Back"),c.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){r((function(e){return e+1}))},className:e.button},a===i.length-1?"Finish":"Next"))),c.a.createElement("form",{className:"form",onSubmit:w},c.a.createElement("input",{type:"checkbox"}),c.a.createElement("label",null,"I agree to the ",c.a.createElement("a",{href:"http://google.com"},"Terms and Conditions")),c.a.createElement("br",null),c.a.createElement("button",{className:"form__dispatch",type:"submit"},"DISPATCH")))}t(45);var S=function(){return c.a.createElement("div",{className:"bottom"})},j=t(22),O=t(13),x=t(23),y=t(24),I=t(26),R=(t(46),function(e){function n(){var e,t;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=Object(x.a)(this,(e=Object(y.a)(n)).call.apply(e,[this].concat(c)))).state={collapse:!1},t.clickHandle=function(){t.setState((function(e){return{collapse:!e.collapse}}))},t}return Object(I.a)(n,e),Object(O.a)(n,[{key:"render",value:function(){var e=this.state.collapse,n=e?"menu__points":"menu__points-disabled";return c.a.createElement("div",{className:"menu"},c.a.createElement("img",{onClick:this.clickHandle,className:e?"menu__icon menu__collapse-button":"menu__icon menu__collapse-button menu__scaled",alt:"menu icon",src:"../icons/collapse.png"}),c.a.createElement("div",{className:e?"menu__collapse":"menu__collapse menu__collapse-collapsed"},c.a.createElement("div",{className:"menu__icons-wrap"},c.a.createElement("div",{className:e?"menu__icon-wrapper-collapsed":"menu__icon-wrapper"},c.a.createElement("img",{className:"menu__icon",alt:"menu icon",src:"../icons/1.png"})),c.a.createElement("div",{className:"menu__icon-wrapper"},c.a.createElement("img",{className:"menu__icon",alt:"menu icon",src:"../icons/2g.png"})),c.a.createElement("div",{className:"menu__icon-wrapper"},c.a.createElement("img",{className:"menu__icon",alt:"menu icon",src:"../icons/3g.png"})),c.a.createElement("div",{className:"menu__icon-wrapper"},c.a.createElement("img",{className:"menu__icon",alt:"menu icon",src:"../icons/4g.png"})),c.a.createElement("div",{className:"menu__icon-wrapper"},c.a.createElement("img",{className:"menu__icon",alt:"menu icon",src:"../icons/5g.png"})),c.a.createElement("div",{className:"menu__icon-wrapper"},c.a.createElement("img",{className:"menu__icon",alt:"menu icon",src:"../icons/6g.png"}))),c.a.createElement("div",{className:"menu__points-wrap"},c.a.createElement("p",{className:n},"Point 1"),c.a.createElement("p",{className:n},"Point 2"),c.a.createElement("p",{className:n},"Point 3"),c.a.createElement("p",{className:n},"Point 4"),c.a.createElement("p",{className:n},"Point 5"),c.a.createElement("p",{className:n},"Point 6"))))}}]),n}(a.Component)),P=(t(47),function(){return c.a.createElement("div",{className:"main"},c.a.createElement("div",null,"Main block"))});var A=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(C,null),c.a.createElement(P,null),c.a.createElement(S,null),c.a.createElement(R,null))};i.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6102c74d.chunk.js.map