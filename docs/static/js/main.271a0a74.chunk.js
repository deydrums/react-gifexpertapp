(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,placeholder:"Buscar...",onChange:function(e){o(e.target.value)}})})},j=n(10),l=n(6),d=n.n(l),b=n(8),h=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=rabMybUsDF3yxKx6viMjjcRhAIEXcUe5"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("a",{className:"imagen-port",href:n,target:"_blank",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsxs)("div",{className:"hover-galeria",children:[Object(u.jsx)("img",{src:"./images/icono1.png"}),Object(u.jsx)("p",{children:"Abrir"})]})]})},f=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){h(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("section",{className:"portafolio",children:Object(u.jsxs)("div",{className:"contenedor",children:[Object(u.jsx)("h2",{className:"titulo animate__animated animate__fadeIn",children:t}),Object(u.jsxs)("div",{className:"galeria-port",children:[r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),c.map((function(e){return Object(u.jsx)(p,Object(j.a)({},e),e.id)}))]})]})})]})},m=function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{className:"textos-header",children:[Object(u.jsx)("h1",{children:"GifExpertApp"}),Object(u.jsx)("h2",{children:"Busca cualquier gif en nuestra web"}),Object(u.jsx)(o,{setCategories:c})]}),n.map((function(e){return Object(u.jsx)(f,{category:e},e)}))]})};n(17);r.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.271a0a74.chunk.js.map