(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[6],{639:function(e,t,r){e.exports={formControl:"FormControls_formControl__2bn39",error:"FormControls_error__2E7D-",formSummaryError:"FormControls_formSummaryError__2gQrs"}},640:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return c}));var n=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},641:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var n=r(4),c=r(649),a=r(2),o=(r(1),r(639)),i=r.n(o),s=function(e){var t=e.meta,r=t.touched,n=t.error,c=e.children,o=r&&n;return Object(a.jsxs)("div",{className:i.a.formControl+" "+(o?i.a.error:""),children:[Object(a.jsx)("div",{children:c}),o&&Object(a.jsx)("span",{children:n})]})},l=function(e){var t=e.input,r=(e.meta,Object(c.a)(e,["input","meta"]));return Object(a.jsx)(s,Object(n.a)(Object(n.a)({},e),{},{children:Object(a.jsx)("input",Object(n.a)(Object(n.a)({},t),r))}))},u=function(e){var t=e.input,r=(e.meta,Object(c.a)(e,["input","meta"]));return Object(a.jsx)(s,Object(n.a)(Object(n.a)({},e),{},{children:Object(a.jsx)("textarea",Object(n.a)(Object(n.a)({},t),r))}))}},708:function(e,t,r){e.exports={loginPage:"Login_loginPage__9__K7",input:"Login_input__3gKN8",checkbox:"Login_checkbox__Z4r1x",signIn:"Login_signIn__3n74Q"}},709:function(e,t,r){"use strict";r.r(t);var n=r(2),c=(r(1),r(24)),a=r(8),o=r(230),i=r(231),s=r(57),l=r(640),u=r(641),b=r(639),j=r.n(b),m=r(708),h=r.n(m),d=Object(i.a)({form:"login"})((function(e){var t=e.handleSubmit,r=e.error,c=e.captchaUrl;return Object(n.jsxs)("form",{onSubmit:t,children:[Object(n.jsx)("div",{children:Object(n.jsx)(o.a,{className:h.a.input,validate:[l.b],name:"email",component:u.a,type:"text",placeholder:"email"})}),Object(n.jsx)("div",{children:Object(n.jsx)(o.a,{className:h.a.input,name:"password",validate:[l.b],component:u.a,type:"password",placeholder:"password"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(o.a,{name:"rememberMe",component:"input",type:"checkbox",id:"remember"}),Object(n.jsx)("label",{className:h.a.checkbox,htmlFor:"remember",children:"RememberMe"})]}),c&&Object(n.jsx)("img",{src:c}),c&&Object(n.jsx)(o.a,{className:h.a.input,name:"captcha",validate:[l.b],component:u.a,type:"text"}),r&&Object(n.jsx)("div",{className:j.a.formSummaryError,children:r}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:h.a.signIn,children:"Sign In"})})]})}));t.default=Object(c.b)((function(e){var t=e.auth;return{isAuth:t.isAuth,captchaUrl:t.captchaUrl}}),{loginThunkCreator:s.c})((function(e){var t=e.loginThunkCreator,r=e.isAuth,c=e.captchaUrl;return r?Object(n.jsx)(a.a,{to:"/profile"}):Object(n.jsxs)("div",{className:h.a.loginPage,children:[Object(n.jsx)("h1",{children:"Login"}),Object(n.jsx)(d,{captchaUrl:c,onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)}})]})}))}}]);
//# sourceMappingURL=6.706f0c68.chunk.js.map