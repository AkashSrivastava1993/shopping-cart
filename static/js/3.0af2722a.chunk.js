(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[3],{33:function(e,t,c){"use strict";function n(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function r(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function o(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?r(Object(c),!0).forEach((function(t){n(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):r(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}c.d(t,"a",(function(){return o}))},38:function(e,t,c){"use strict";c.r(t);var n=c(11);var r=c(18);function o(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=c(33),s=c(15),a=c(0),j=c(1),l=c(2);function d(e){var t=Object(j.f)();return console.log("From Header",t),Object(l.jsxs)("header",{className:"block row center",children:[Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"#/",children:Object(l.jsx)("h1",{children:"Shopping Cart"})})}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("a",{href:"#/cart",children:["Cart"," ",e.countCartItems?Object(l.jsx)("button",{className:"badge",children:e.countCartItems}):""]}),t.location.state?"Hello Admin":Object(l.jsx)("a",{href:"/signIn",children:"Sign In"})]})]})}var b=Object(a.memo)(d);function u(e){var t=e.product,c=e.onAdd;return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:"small",src:t.image,alt:t.name}),Object(l.jsx)("h3",{children:t.name}),Object(l.jsxs)("div",{children:["\u20b9",t.price]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){return c(t)},children:"Add To Cart"})})]})}function O(e){var t=e.products,c=e.onAdd,n=Object(a.useState)(!1),r=Object(s.a)(n,2),o=r[0],i=r[1],j=Object(a.useState)([]),d=Object(s.a)(j,2),b=d[0],O=d[1],h=b.length?b.map((function(e){return Object(l.jsx)(u,{product:e,onAdd:c},e.id)})):t.map((function(e){return Object(l.jsx)(u,{product:e,onAdd:c},e.id)}));return Object(l.jsxs)("main",{className:"block col-2",children:[Object(l.jsx)("h2",{children:"Products"}),Object(l.jsx)("input",{type:"text",id:"myInput",onChange:function(t){return function(e,t){console.log(e.target.value,"From Dahboard");var c=t.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.target.value.toLowerCase())}));c.length?(i(!1),O(c)):i(!0),""===e.target.value&&(i(!1),O(c))}(t,e.products)},placeholder:"Search for products..."}),Object(l.jsx)("div",{className:"row",children:o?Object(l.jsx)("div",{children:"No items found"}):h})]})}var h=c(14);function f(e){var t=e.cartItems,c=e.onAdd,n=e.onRemove,r=t.reduce((function(e,t){return e+t.qty*t.price}),0),o=.14*r,i=r>2e3?0:20,s=Object(a.useMemo)((function(){return console.log("useMEMO"),r+o+i}),[r,o,i]);return Object(l.jsxs)("aside",{className:"block col-1",children:[Object(l.jsx)("h2",{children:"Cart Items"}),Object(l.jsxs)("div",{children:[0===t.length&&Object(l.jsx)("div",{children:"Cart is empty"}),t.map((function(e){return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:e.name}),Object(l.jsxs)("div",{className:"col-2",children:[Object(l.jsx)("button",{onClick:function(){return n(e)},className:"remove",children:"-"})," ",Object(l.jsx)("button",{onClick:function(){return c(e)},className:"add",children:"+"})]}),Object(l.jsxs)("div",{className:"col-2 text-right",children:[e.qty," x \u20b9",e.price.toFixed(2)]})]},e.id)})),0!==t.length&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:"Items Price"}),Object(l.jsxs)("div",{className:"col-1 text-right",children:["\u20b9",r.toFixed(2)]})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:"Tax Price"}),Object(l.jsxs)("div",{className:"col-1 text-right",children:["\u20b9",o.toFixed(2)]})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:"Shipping Price"}),Object(l.jsxs)("div",{className:"col-1 text-right",children:["\u20b9",i.toFixed(2)]})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("strong",{children:"Total Price"})}),Object(l.jsx)("div",{className:"col-1 text-right",children:Object(l.jsxs)("strong",{children:["\u20b9",s.toFixed(2)]})})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)(h.b,{to:"/ordered",children:"Place Order"})})]})]})]})}function m(e){return console.log("from ContactUs"),Object(l.jsx)("footer",{children:e.info()})}var x=Object(a.memo)(m),p=c(16),v=c.n(p);function g(){return v.a.createPortal(Object(l.jsx)("footer",{children:"Copyright \xa9 2021 Shoping Cart"}),document.getElementById("portal-root"))}t.default=function(){Object(a.useEffect)((function(){fetch("products.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){u(e.products)}))}),[]);var e=Object(a.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),j=Object(s.a)(r,2),d=j[0],u=j[1],h=Object(a.useState)(""),m=Object(s.a)(h,2),p=m[0],v=m[1];Object(a.useLayoutEffect)((function(){0===d.length?v("LOADING...\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03\ud83d\ude03"):v("")}),[d.length]);var y="Contact us on 9140271427",N=Object(a.useCallback)((function(){return y}),[y]),w=function(e){var t=c.find((function(t){return t.id===e.id}));console.log(t,"Exist"),n(t?c.map((function(c){return c.id===e.id?Object(i.a)(Object(i.a)({},t),{},{qty:t.qty+1}):c})):[].concat(o(c),[Object(i.a)(Object(i.a)({},e),{},{qty:1})]))};return Object(l.jsxs)("div",{children:[p,Object(l.jsx)(b,{countCartItems:c.length}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(O,{products:d,onAdd:w}),Object(l.jsx)(a.Profiler,{id:"BasketComp",onRender:function(e,t,c,n,r,o,i){console.log(e,t,c,n,r,o,i,"basket profile")},children:Object(l.jsx)(f,{cartItems:c,onAdd:w,onRemove:function(e){var t=c.find((function(t){return t.id===e.id}));1===t.qty?n(c.filter((function(t){return t.id!==e.id}))):n(c.map((function(c){return c.id===e.id?Object(i.a)(Object(i.a)({},t),{},{qty:t.qty-1}):c})))}})})]}),Object(l.jsx)(x,{info:N}),Object(l.jsx)(g,{})]})}}}]);
//# sourceMappingURL=3.0af2722a.chunk.js.map