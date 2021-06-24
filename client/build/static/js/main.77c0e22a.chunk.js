(this["webpackJsonpgoogle-books-search"]=this["webpackJsonpgoogle-books-search"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(27),s=c.n(i),j=(c(33),c(34),c(12)),a=c(2),o=c(0);var l=function(){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:"Google Books Search"})})},b=c(9);function d(e){var t=e.fluid,c=e.children;return Object(o.jsx)("div",{className:"container".concat(t?"-fluid":""),children:c})}function u(e){var t=e.fluid,c=e.children;return Object(o.jsx)("div",{className:"row".concat(t?"-fluid":""),children:c})}function h(e){var t=e.size,c=e.children;return Object(o.jsx)("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" "),children:c})}var O=function(e){var t=e.children;return Object(o.jsx)("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron",children:t})},x=c(5);c(36);var f=function(e){return Object(o.jsx)("span",Object(x.a)(Object(x.a)({className:"delete-btn"},e),{},{role:"button",tabIndex:"0",children:"\u2717"}))},m=c(13),v=c.n(m),g=function(){return v.a.get("/api/books")},p=function(e){return v.a.get("/api/books/"+e)},k=function(e){return v.a.delete("/api/books/"+e)};var N=function(e){var t=Object(n.useState)({}),c=Object(b.a)(t,2),r=c[0],i=c[1],s=Object(a.f)().id;return Object(n.useEffect)((function(){p(s).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsxs)(d,{fluid:!0,children:[Object(o.jsxs)(u,{children:[Object(o.jsx)(h,{size:"md-9",children:Object(o.jsx)(O,{children:Object(o.jsxs)("h1",{children:[r.title," by ",r.author]})})}),Object(o.jsxs)(h,{size:"md-3",children:[Object(o.jsx)(j.b,{to:r.link,children:"View"}),Object(o.jsx)(f,{onClick:function(){return function(e){k(e).catch((function(e){return console.log(e)}))}(r._id)}})]})]}),Object(o.jsxs)(u,{children:[Object(o.jsx)(h,{size:"md-4 sm-12",children:Object(o.jsx)("img",{src:r.image,alt:r.title})}),Object(o.jsx)(h,{size:"md-8 md-offset-1",children:Object(o.jsxs)("article",{children:[Object(o.jsx)("h1",{children:"Description"}),Object(o.jsx)("p",{children:r.description})]})})]})]})},S=c(11);c(63);function y(e){var t=e.children;return Object(o.jsx)("div",{className:"list-overflow-container",children:Object(o.jsx)("ul",{className:"list-group",children:t})})}function z(e){var t=e.children;return Object(o.jsx)("li",{className:"list-group-item",children:t})}function C(e){return Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",Object(x.a)({className:"form-control"},e))})}function B(e){return Object(o.jsx)("button",Object(x.a)(Object(x.a)({},e),{},{style:{float:"right",marginBottom:10},className:"btn btn-success",children:e.children}))}var _=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)({}),s=Object(b.a)(i,2),j=(s[0],s[1],Object(n.useState)({search:""})),a=Object(b.a)(j,2),l=a[0],m=a[1];return Object(n.useEffect)((function(){g().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsx)(d,{fluid:!0,children:Object(o.jsxs)(u,{children:[Object(o.jsxs)(h,{size:"md-12",children:[Object(o.jsx)(O,{children:Object(o.jsx)("h1",{children:"Book Search"})}),Object(o.jsxs)("form",{children:[Object(o.jsx)(C,{onChange:function(e){var t=e.target,c=t.name,n=t.value;m(Object(x.a)(Object(x.a)({},l),{},Object(S.a)({},c,n)))},name:"search",placeholder:"Search"}),Object(o.jsx)(B,{disabled:!l.search,onClick:function(){},children:"Search"})]})]}),Object(o.jsxs)(h,{size:"md-12",children:[Object(o.jsx)(O,{children:Object(o.jsx)("h1",{children:"Results"})}),c.length?Object(o.jsx)(y,{children:c.map((function(e){return Object(o.jsxs)(z,{children:[Object(o.jsx)("a",{href:"/books/"+e._id,children:Object(o.jsxs)("strong",{children:[e.title," by ",e.author]})}),Object(o.jsx)(f,{onClick:function(){}})]},e._id)}))}):Object(o.jsx)("h3",{children:"No Results to Display"})]})]})})};var w=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)({}),s=Object(b.a)(i,2);function a(){g().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}return s[0],s[1],Object(n.useEffect)((function(){a()}),[]),Object(o.jsx)(d,{fluid:!0,children:Object(o.jsx)(u,{children:Object(o.jsxs)(h,{size:"md-12",children:[Object(o.jsx)(O,{children:Object(o.jsx)("h1",{children:"Saved Books"})}),c.length?Object(o.jsx)(y,{children:c.map((function(e){return Object(o.jsxs)(z,{children:[Object(o.jsx)(j.b,{to:"/books/"+e._id,children:Object(o.jsxs)("strong",{children:[e.title," by ",e.author]})}),Object(o.jsx)(f,{onClick:function(){return t=e._id,void k(t).then((function(e){return a()})).catch((function(e){return console.log(e)}));var t}})]},e._id)}))}):Object(o.jsx)("h3",{children:"No Results to Display"})]})})})};var D=function(){return Object(o.jsx)(j.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{exact:!0,path:["/","/search"],children:Object(o.jsx)(_,{})}),Object(o.jsx)(a.a,{exact:!0,path:"/saved",children:Object(o.jsx)(w,{})}),Object(o.jsx)(a.a,{exact:!0,path:"/books/:id",children:Object(o.jsx)(N,{})})]})]})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root")),E()}},[[64,1,2]]]);
//# sourceMappingURL=main.77c0e22a.chunk.js.map