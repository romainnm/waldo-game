(this["webpackJsonpwaldo-project"]=this["webpackJsonpwaldo-project"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(12),i=a.n(r),s=(a(19),a(14)),o=a(3),l=(a(20),a(9)),d=a(11),j=a(4),u=[{id:"level1",name:"Level 1",image:"./images/level1.jpg",leaderboard:[{name:"Moki",time:29246},{name:"Bobby",time:98006},{name:"Park",time:107030}],characters:[{id:0,name:"Waldo",image:"./images/characters/waldo-avatar.png",xChar:Math.round(968/1200*100),yChar:Math.round(40/675*100),found:!1},{id:1,name:"Wenda",image:"./images/characters/wenda-avatar.png",xChar:Math.round(1066/1200*100),yChar:Math.round(192/675*100),found:!1},{id:2,name:"Odlaw",image:"./images/characters/odlaw-avatar.png",xChar:Math.round(59/1200*100),yChar:Math.round(80),found:!1}]},{id:"level2",name:"Level 2",image:"./images/level2.png",leaderboard:[{name:"Tim",time:89246},{name:"Tammy",time:98006},{name:"Tomato",time:107030}],characters:[{id:3,name:"Waldo",image:"./images/characters/waldo-avatar.png",xChar:Math.round(560/1840*100),yChar:Math.round(1081/1300*100),found:!1},{id:4,name:"Wenda",image:"./images/characters/wenda-avatar.png",xChar:Math.round(1446/1840*100),yChar:Math.round(380/1300*100),found:!1},{id:5,name:"Odlaw",image:"./images/characters/odlaw-avatar.png",xChar:Math.round(1040/1840*100),yChar:Math.round(938/1300*100),found:!1}]}],h=a(1),b=c.a.createContext(),m=function(e){var t=e.children,a=Object(n.useState)(1),c=Object(j.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)([]),o=Object(j.a)(s,2),m=o[0],O=o[1],f=Object(n.useState)(!1),v=Object(j.a)(f,2),x=v[0],g=v[1],p=Object(n.useState)({show:!1,type:"",msgAlert:""}),w=Object(j.a)(p,2),y=w[0],C=w[1],S=Object(n.useState)(!1),N=Object(j.a)(S,2),k=N[0],T=N[1],E=Object(n.useState)(0),M=Object(j.a)(E,2),L=M[0],W=M[1],_=Object(n.useState)(0),I=Object(j.a)(_,2),G=I[0],A=I[1],D=Object(n.useState)(!0),F=Object(j.a)(D,2),P=F[0],R=F[1],Y=Object(n.useState)(!1),z=Object(j.a)(Y,2),B=z[0],H=z[1],J=Object(n.useState)(!1),q=Object(j.a)(J,2),X=q[0],K=q[1],Q=Object(n.useState)(!1),U=Object(j.a)(Q,2),V=U[0],Z=U[1],$=Object(n.useState)(!0),ee=Object(j.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)([]),ce=Object(j.a)(ne,2),re=ce[0],ie=ce[1],se=Object(n.useState)(!1),oe=Object(j.a)(se,2),le=oe[0],de=oe[1],je=Object(n.useState)(null),ue=Object(j.a)(je,2),he=ue[0],be=ue[1],me=Object(n.useState)({left:0,top:0}),Oe=Object(j.a)(me,2),fe=Oe[0],ve=Oe[1],xe=Object(n.useRef)(null),ge=Object(n.useState)({width:void 0,height:void 0}),pe=Object(j.a)(ge,2),we=(pe[0],pe[1]);Object(n.useEffect)((function(){var e=function(){we({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(n.useEffect)((function(){B&&O(u[r-1].characters)}),[B]),Object(n.useEffect)((function(){ae(!0),ie(u.map((function(e){return e&&ie([].concat(Object(d.a)(re),[e.leaderboard])),e.leaderboard}))),ae(!1)}),[]);var ye=function(e,t,a){C({show:e,type:t,msgAlert:a})};Object(n.useEffect)((function(){if(y.show){var e=setTimeout((function(){Te(),C(Object(l.a)(Object(l.a)({},y),{},{show:!1}))}),1e3);return function(){return clearTimeout(e)}}}),[y]);var Ce=function(){Z(!1),R(!1),K(!1),de(!1),H(!0),T(!0)};Object(n.useEffect)((function(){if(k){var e=setInterval((function(){A((function(e){return e+10}))}),10);return function(){return clearInterval(e)}}}),[k]);Object(n.useEffect)((function(){P||m.every((function(e){return!0===e.found}))&&(H(!1),K(!0),W(G),Ne(G),T(!1),A(0),ye(!0,"success","Good job, you found everyone!"))}),[m]);var Se=function(e){var t;return null===(t=re[e-1])||void 0===t?void 0:t.sort((function(e,t){return e.time-t.time})).slice(0,10)},Ne=function(e){var t=Se(r);t[9]||de(!0),t[9]&&e<t[9].time&&de(!0)},ke=function(){g(!0)},Te=function(){g(!1)},Ee=function(e,t,a,n){"left"===e&&(t.current.style.right="unset",t.current.style.left="".concat(a),t.current.style.top="".concat(n)),"right"===e&&(t.current.style.left="unset",t.current.style.right="".concat(a),t.current.style.top="".concat(n))};Object(n.useEffect)((function(){fe.left<50&&x&&Ee("left",xe,fe.left+2+"%",fe.top-5+"%"),fe.left>50&&x&&(Ee("right",xe,100-fe.left+2+"%",fe.top-5+"%"),console.log(100-fe.left))}),[fe]);var Me=function(){var e=he.xChar,t=he.yChar,a=fe.left,n=fe.top;return a-5<e&&e<a+5&&(n-5<t&&t<n+5)};return Object(n.useEffect)((function(){null!==he&&(Me()&&(he.found?ye(!0,"success","Already found!"):ye(!0,"success","You found ".concat(he.name,"!")),O(m.map((function(e){return e.id===he.id?Object(l.a)(Object(l.a)({},e),{},{found:!0}):e})))),Me()||(he.found?ye(!0,"danger","".concat(he.name," was already found!")):ye(!0,"danger","That's not ".concat(he.name,"!")),be(null)))}),[he]),Object(h.jsx)(b.Provider,{value:{characters:m,alert:y,showDropdown:x,dropdownContainer:xe,waitStartGame:P,gameOver:X,gameTimer:G,finalTime:L,nextLevel:function(){var e=r+1;e>2?(Z(!0),H(!1),R(!1),K(!1)):(i(e),Ce())},levelSelected:r,handleGameStart:Ce,handleCharacterSelection:function(e){!function(e){var t=m.find((function(t){return t.name===e}));be(t)}(e.value)},handleImageClick:function(e){var t=function(e){return{xClickCoord:e.nativeEvent.offsetX/e.nativeEvent.target.offsetWidth*100,yClickCoord:e.nativeEvent.offsetY/e.nativeEvent.target.offsetHeight*100}}(e);!function(e){var t=e.xClickCoord,a=e.yClickCoord;ve({left:t,top:a})}(t),ke()},leaderboards:re,playAgain:function(){i(r),Ce()},restart:function(){i(1),R(!0)},comingSoon:V,loading:te,topTen:le,addLeaderboard:function(e,t,a){e.preventDefault();var n={name:t,time:a},c=re[r-1];ie(re.map((function(e){return e===c?[].concat(Object(d.a)(e),[n]):e}))),de(!1)},getTopTen:Se,closeDropdown:Te},children:t})},O=function(){return Object(n.useContext)(b)},f=a(7),v=function(){var e=O().characters;return Object(h.jsx)("header",{children:Object(h.jsxs)("div",{className:"top-header",children:[Object(h.jsx)("h1",{children:"Waldo Project"}),Object(h.jsxs)("div",{className:"remaining-characters__container",children:[Object(h.jsx)("h4",{className:"remaining-characters__title",children:"Remaining characters"}),Object(h.jsx)("div",{className:"remaining-characters__images",children:e.map((function(e){var t=e.id,a=e.name,n=e.image,c=e.found;return Object(h.jsx)("img",{src:n,alt:a,className:"".concat(c&&"remaining-characters-found")},t)}))})]})]})})};var x=function(){var e=O().alert;return Object(h.jsx)("div",{className:"alert alert-".concat(e.type),children:Object(h.jsx)("p",{children:e.msgAlert})})},g=a(13);var p=function(e){var t=e.handleCharacterSelection,a=O(),n=a.characters,c=a.dropdownContainer,r=a.alert,i=a.closeDropdown;return Object(h.jsxs)("div",{className:"characters-dropdown",ref:c,children:[r.show&&Object(h.jsx)(x,{}),Object(h.jsx)("button",{type:"button",className:"close-btn",onClick:i,children:Object(h.jsx)(g.a,{})}),Object(h.jsx)("h4",{children:"Select a character"}),Object(h.jsx)("form",{className:"characters-selection",children:n.map((function(e){var a=e.id,n=e.name,c=e.image;return Object(h.jsxs)("label",{className:"character-label",children:[Object(h.jsx)("input",{type:"radio",name:"character-label",value:n,onChange:function(e){return t(e)}}),Object(h.jsx)("img",{src:c,alt:n}),Object(h.jsx)("p",{children:n})]},a)}))})]})},w=function(e){var t=e.timer;return Object(h.jsxs)(h.Fragment,{children:[("0"+Math.floor(t/6e4%60)).slice(-2),":",("0"+Math.floor(t/1e3%60)).slice(-2),":",("0"+t/10%100).slice(-2)]})},y=function(){var e=O(),t=e.showDropdown,a=e.levelSelected,n=e.handleCharacterSelection,c=e.handleImageClick,r=e.gameTimer;return Object(h.jsxs)("main",{children:[Object(h.jsx)(v,{}),Object(h.jsxs)("section",{className:"game__container",children:[Object(h.jsxs)("div",{className:"game__header",children:[Object(h.jsx)("h2",{children:u[a-1].name}),Object(h.jsxs)("div",{className:"timer",children:[Object(h.jsx)(f.a,{}),Object(h.jsx)("h3",{className:"timer",children:Object(h.jsx)(w,{timer:r})})]})]}),Object(h.jsxs)("div",{className:"game-image__container",children:[Object(h.jsx)("img",{src:u[a-1].image,alt:u[a-1].name,onClick:function(e){return c(e)}}),t&&Object(h.jsx)(p,{handleCharacterSelection:function(e){return n(e.target)}})]})]})]})},C=function(e){var t=e.level,a=O(),n=a.loading,c=(0,a.getTopTen)(t);return n?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h1",{children:"Loading..."})}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:["Level ",t]}),Object(h.jsx)("ol",{children:c.map((function(e,t){var a=e.name,n=e.time;return Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"center",children:[Object(h.jsxs)("span",{className:"bold",children:[a,"~"]}),Object(h.jsx)(w,{timer:parseInt(n)}),Object(h.jsx)(f.a,{})]})},t)})).slice(0,10)})]})};var S=function(){var e=O(),t=e.finalTime,a=e.nextLevel,c=e.levelSelected,r=e.playAgain,i=e.topTen,s=e.addLeaderboard,o=Object(n.useState)(""),l=Object(j.a)(o,2),d=l[0],u=l[1];return Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"modal gameover-modal",children:[Object(h.jsxs)("h2",{children:["Level ",c," clear !"]}),Object(h.jsxs)("div",{className:"clear-time",children:[Object(h.jsx)("p",{children:"CLEARING TIME"}),Object(h.jsxs)("h3",{children:[Object(h.jsx)(f.a,{})," ",Object(h.jsx)(w,{timer:parseInt(t)})]}),i&&Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{className:"form-topten",onSubmit:function(e){return s(e,d,t)},children:[Object(h.jsx)("h3",{className:"form-title",children:"You made it to the top 10!"}),Object(h.jsx)("p",{children:"Would you like to enter your name to enter the leaderboard?"}),Object(h.jsx)("input",{type:"text",value:d,onChange:function(e){return u(e.target.value)},className:"input-leaderboard",placeholder:"Enter name"}),Object(h.jsx)("button",{type:"submit",className:"btn-leaderboard",children:"submit"})]})})]}),Object(h.jsxs)("div",{className:"button-container",children:[Object(h.jsx)("button",{type:"button",onClick:r,children:"Play Again"}),Object(h.jsx)("button",{type:"button",className:"btn-next",onClick:a,children:"Next Level"})]}),Object(h.jsx)("h1",{className:"title-top",children:"Top 10 players"}),Object(h.jsx)("div",{className:"leaderboard",children:Object(h.jsx)(C,{level:c})})]})})};var N=function(){var e=O().handleGameStart;return Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"modal",children:[Object(h.jsx)("h2",{children:"Welcome to the Waldo project"}),Object(h.jsx)("h3",{children:"Instructions"}),Object(h.jsx)("p",{children:"Waldo, Wenda and Oddlaw are hiding again! Find them as quickly as possible"}),Object(h.jsx)("button",{onClick:e,children:"Start Game"}),Object(h.jsx)("h1",{className:"title-top",children:"Top 10 players"}),Object(h.jsxs)("div",{className:"leaderboards-container",children:[Object(h.jsx)("div",{className:"leaderboard",children:Object(h.jsx)(C,{level:1})}),Object(h.jsx)("div",{className:"leaderboard",children:Object(h.jsx)(C,{level:2})})]})]})})};var k=function(){var e=O().restart;return Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"modal",children:[Object(h.jsx)("h2",{children:"Coming Soon!"}),Object(h.jsx)("h3",{children:"We are currently working on the next levels!"}),Object(h.jsx)("button",{type:"button",onClick:e,children:"Restart"})]})})};function T(){var e=O(),t=e.waitStartGame,a=e.gameOver,n=e.handleGameStart,c=e.comingSoon;return t?Object(h.jsx)(N,{handleGameStart:n}):a?Object(h.jsx)(S,{}):c?Object(h.jsx)(k,{}):Object(h.jsx)(y,{})}var E=function(){return Object(h.jsx)(s.a,{children:Object(h.jsx)(o.c,{children:Object(h.jsx)(o.a,{exact:!0,path:"/waldo-game",element:Object(h.jsx)(T,{})})})})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{children:Object(h.jsx)(E,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.da66a4d9.chunk.js.map