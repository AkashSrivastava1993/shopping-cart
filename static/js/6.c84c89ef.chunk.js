(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[6],{33:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"a",(function(){return c}))},38:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));var n=r(15),a=r(33),c=r(0),o=r(1),s=r(2);function i(){var e=Object(c.useRef)(),t=Object(o.f)(),r=Object(c.useReducer)((function(r,n){switch(console.log(n.payload,"action.payload"),n.type){case"INPUT NAME":return Object(a.a)(Object(a.a)({},r),{},{userName:n.payload});case"INPUT PASSWORD":return Object(a.a)(Object(a.a)({},r),{},{password:n.payload});case"CLICK":return console.log(r,"STATE"),"admin"===r.userName&&"admin"===r.password?(t.push("./","admin"),Object(a.a)({},r)):(e.current.focus(),Object(a.a)(Object(a.a)({},r),{},{valid:!1}));default:throw new Error("what's going on?")}}),{userName:"",password:"",valid:!0}),i=Object(n.a)(r,2),u=i[0],b=i[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"fname",children:"Username:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",ref:e,id:"fname",name:"fname",onChange:function(e){return b({type:"INPUT NAME",payload:e.target.value})}}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",id:"password",name:"password",onChange:function(e){return b({type:"INPUT PASSWORD",payload:e.target.value})}}),Object(s.jsx)("br",{}),u.valid?"":"Please enter correct credentials",Object(s.jsx)("button",{onClick:function(){return b({type:"CLICK"})},children:"Submit"})]})}}}]);
//# sourceMappingURL=6.c84c89ef.chunk.js.map