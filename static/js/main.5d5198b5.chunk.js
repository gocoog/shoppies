(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n(0),a=n.n(o),i=n(21),s=n.n(i),r=(n(73),n(74),n(52)),j=n(129),l=n(133),h=n(131),u=n(130),b=n(134),d=n(132),m=n(127),p=Object(m.a)({root:{maxWidth:250,maxHeight:"auto",margin:"30px"}}),x=function(e){var t=p(),n=e.movie;return Object(c.jsxs)("div",{className:"flex-card",children:[console.log(n.Title),Object(c.jsxs)(j.a,{className:t.root,children:[Object(c.jsx)(u.a,{component:"img",alt:n.Title,image:n.Poster,title:n.Title}),Object(c.jsxs)(h.a,{children:[Object(c.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n.Title}),Object(c.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:n.Year})]}),Object(c.jsx)(l.a,{children:Object(c.jsx)(b.a,{size:"small",color:"primary",children:"Nominate"})})]})]})},O=n(63),f=n.n(O),v=function(){var e=Object(o.useState)(null),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)(""),s=Object(r.a)(i,2),j=s[0],l=s[1],h=function(e){fetch("https://www.omdbapi.com/?s=".concat(e,"&type=movie&apikey=").concat("c5a80da5")).then((function(e){return e.json()})).then((function(e){"False"===e.Response?console.log(e.Response):(a(e.Search),l(""))}))};return Object(o.useEffect)((function(){h(j)}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"searchbar",children:Object(c.jsx)(f.a,{autofocus:!0,value:j,onChange:function(e){return l(e)},onRequestSearch:function(){h(j)}})}),Object(c.jsx)("div",{className:"flex-container",children:null!==n?n.map((function(e){return Object(c.jsx)(x,{movie:e})})):Object(c.jsx)("h1",{children:"Type in the search bar and nominate your favorite movies!"})})]})};var g=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"title",children:"The Shoppies"}),Object(c.jsx)(v,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),y()},73:function(e,t,n){},74:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.5d5198b5.chunk.js.map