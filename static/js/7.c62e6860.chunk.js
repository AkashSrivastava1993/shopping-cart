(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[7],{51:function(e,t,c){"use strict";c.r(t);var n=c(46),s=c(38),r=c(18),i=c(20),o=c(0),a=c(2),l=c(17),d=c(3);function j(e){var t=Object(a.f)();return console.log("From Header",t),Object(d.jsxs)("header",{className:"block row center",children:[Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("h1",{children:"Shopping Cart"})})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("a",{href:"#/cart",children:["Cart"," ",e.countCartItems?Object(d.jsx)("button",{className:"badge",children:e.countCartItems}):""]}),t.location.state?"Hello ".concat(t.location.state.user):Object(d.jsx)(l.b,{to:"/signIn",children:"Sign In"})]})]})}var u=Object(o.memo)(j);function b(e){var t=e.product,c=e.onAdd;return Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"small",src:t.image,alt:t.name}),Object(d.jsx)("h3",{children:t.name}),Object(d.jsxs)("div",{children:["\u20b9",t.price]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return c(t)},children:"Add To Cart"})})]})}function h(e){var t=e.products,c=e.onAdd,n=Object(o.useState)(!1),s=Object(r.a)(n,2),i=s[0],a=s[1],l=Object(o.useState)([]),j=Object(r.a)(l,2),u=j[0],h=j[1],O=u.length?u.map((function(e){return Object(d.jsx)(b,{product:e,onAdd:c},e.id)})):t.map((function(e){return Object(d.jsx)(b,{product:e,onAdd:c},e.id)}));return Object(d.jsxs)("main",{className:"block col-2",children:[Object(d.jsx)("h2",{children:"Products"}),Object(d.jsx)("input",{type:"text",id:"myInput",onChange:function(t){return function(e,t){console.log(e.target.value,"From Dahboard");var c=t.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.target.value.toLowerCase())}));c.length?(a(!1),h(c)):a(!0),""===e.target.value&&(a(!1),h(c))}(t,e.products)},placeholder:"Search for products..."}),Object(d.jsx)("div",{className:"row",children:i?Object(d.jsx)("div",{children:"No items found"}):O})]})}function O(e){var t=Object(a.f)(),c=e.cartItems,n=e.onAdd,s=e.onRemove,r=c.reduce((function(e,t){return e+t.qty*t.price}),0),i=.14*r,l=r>2e3?0:20,j=Object(o.useMemo)((function(){return console.log("useMEMO"),r+i+l}),[r,i,l]);return Object(d.jsxs)("aside",{className:"block col-1",children:[Object(d.jsx)("h2",{children:"Cart Items"}),Object(d.jsxs)("div",{children:[0===c.length&&Object(d.jsx)("div",{children:"Cart is empty"}),c.map((function(e){return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-2",children:e.name}),Object(d.jsxs)("div",{className:"col-2",children:[Object(d.jsx)("button",{onClick:function(){return s(e)},className:"remove",children:"-"})," ",Object(d.jsx)("button",{onClick:function(){return n(e)},className:"add",children:"+"})]}),Object(d.jsxs)("div",{className:"col-2 text-right",children:[e.qty," x \u20b9",e.price.toFixed(2)]})]},e.id)})),0!==c.length&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-2",children:"Items Price"}),Object(d.jsxs)("div",{className:"col-1 text-right",children:["\u20b9",r.toFixed(2)]})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-2",children:"Tax Price"}),Object(d.jsxs)("div",{className:"col-1 text-right",children:["\u20b9",i.toFixed(2)]})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-2",children:"Shipping Price"}),Object(d.jsxs)("div",{className:"col-1 text-right",children:["\u20b9",l.toFixed(2)]})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-2",children:Object(d.jsx)("strong",{children:"Total Price"})}),Object(d.jsx)("div",{className:"col-1 text-right",children:Object(d.jsxs)("strong",{children:["\u20b9",j.toFixed(2)]})})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("button",{onClick:function(){!0===window.confirm("Are you sure you want to place the orders")&&t.push("/ordered")},children:"Place Order"})})]})]})]})}function m(e){return console.log("from ContactUs"),Object(d.jsx)("footer",{children:e.info()})}var x=Object(o.memo)(m),f=c(10),p=c.n(f);function v(){return p.a.createPortal(Object(d.jsx)("footer",{children:"Copyright \xa9 2021 Shoping Cart"}),document.getElementById("portal-root"))}var g=c(39),N=c.n(g),C=(c(44),c(45)),T=c(35),y=c(36),w=c(34),k=new(function(){function e(){Object(T.a)(this,e),this.mobxTheme="blue",this.mobxTitle=document.title,this.logDetails=function(){},Object(w.f)(this,{mobxTheme:w.g,mobxTitle:w.g,updateTitle:w.b,updateTheme:w.b}),Object(w.c)(this.logDetails)}return Object(y.a)(e,[{key:"updateTheme",value:function(e){return this.mobxTheme=e}},{key:"updateTitle",value:function(e){return this.mobxTitle=e}}]),e}());t.default=Object(i.b)((function(e){return{theme:e.theme}}),(function(e){return{setTheme:function(t){return e({type:"THEME CHANGED",payload:t})}}}))(Object(C.a)((function(e){Object(o.useEffect)((function(){document.title=k.mobxTitle}),[k.mobxTitle]),Object(o.useEffect)((function(){document.body.style.backgroundColor=e.theme,fetch("products.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){m(e.products)}))}),[e.theme]);var t=Object(o.useState)([]),c=Object(r.a)(t,2),i=c[0],a=c[1],l=Object(o.useState)([]),j=Object(r.a)(l,2),b=j[0],m=j[1],f=Object(o.useState)(""),p=Object(r.a)(f,2),g=p[0],C=p[1];Object(o.useLayoutEffect)((function(){0===b.length?C("LOADING...\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03"):C("")}),[b.length]);var T="Contact us on 9140271427",y=Object(o.useCallback)((function(){return T}),[T]),w=function(e){var t=i.find((function(t){return t.id===e.id}));console.log(t,"Exist"),a(t?i.map((function(c){return c.id===e.id?Object(s.a)(Object(s.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(n.a)(i),[Object(s.a)(Object(s.a)({},e),{},{qty:1})]))};return Object(d.jsxs)("div",{children:[g,Object(d.jsx)(u,{countCartItems:i.length}),Object(d.jsx)("label",{htmlFor:"cheese-status",children:"Select Theme:"}),Object(d.jsx)(N.a,{id:"cheese-status",defaultChecked:e.theme,onChange:function(){"white"===e.theme?e.setTheme("brown"):e.setTheme("white")}}),Object(d.jsx)("label",{htmlFor:"cheese-status",children:"Title of the App: ".concat(k.mobxTitle)}),Object(d.jsx)(N.a,{id:"cheese-status",defaultChecked:!0,onChange:function(){"React Redux App"===k.mobxTitle?k.updateTitle("React Mobx App"):k.updateTitle("React Redux App")}}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(h,{products:b,onAdd:w}),Object(d.jsx)(o.Profiler,{id:"BasketComp",onRender:function(e,t,c,n,s,r,i){console.log(e,t,c,n,s,r,i,"basket profile")},children:Object(d.jsx)(O,{cartItems:i,onAdd:w,onRemove:function(e){var t=i.find((function(t){return t.id===e.id}));1===t.qty?a(i.filter((function(t){return t.id!==e.id}))):a(i.map((function(c){return c.id===e.id?Object(s.a)(Object(s.a)({},t),{},{qty:t.qty-1}):c})))}})})]}),Object(d.jsx)(x,{info:y}),Object(d.jsx)(v,{})]})})))}}]);
//# sourceMappingURL=7.c62e6860.chunk.js.map