(this["webpackJsonpfin-project-front"]=this["webpackJsonpfin-project-front"]||[]).push([[5],{106:function(t,n,e){},107:function(t,n,e){},112:function(t,n,e){"use strict";e.r(n);var c=e(0),a=e.n(c),r=e(26),s=e.n(r),i=(e(59),e(8)),o=e(11),u=e(18),l=e(39),j=e.n(l),b=e(21),d=e(30),f=e(1),O=["component","redirectTo","children"];function h(t){t.component;var n=t.redirectTo,e=t.children,c=Object(d.a)(t,O),a=Object(o.c)(u.c.getIsLoggedIn)&&c.restricted;return Object(f.jsx)(i.b,Object(b.a)(Object(b.a)({},c),{},{children:a?Object(f.jsx)(i.a,{to:n}):e}))}var m=["children","redirectTo"];function p(t){var n=t.children,e=t.redirectTo,c=Object(d.a)(t,m),a=Object(o.c)(u.c.getIsLoggedIn);return Object(f.jsx)(i.b,Object(b.a)(Object(b.a)({},c),{},{children:a?n:Object(f.jsx)(i.a,{to:e})}))}e(106),e(54);var _=Object(c.lazy)((function(){return Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,209))})),g=Object(c.lazy)((function(){return Promise.all([e.e(0),e.e(2),e.e(1),e.e(11)]).then(e.bind(null,206))})),x=Object(c.lazy)((function(){return Promise.all([e.e(0),e.e(2),e.e(1),e.e(10)]).then(e.bind(null,207))})),v=Object(c.lazy)((function(){return e.e(4).then(e.bind(null,210))})),y=Object(c.lazy)((function(){return e.e(3).then(e.bind(null,211))}));function N(){var t=Object(o.b)(),n=Object(o.c)(u.c.getIsLoggedIn),e=Object(o.c)(u.c.getUserName);return console.log(n),console.log(e),Object(c.useEffect)((function(){t(u.a.getCurrentUser())}),[t]),Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(c.Suspense,{fallback:Object(f.jsx)(j.a,{type:"ThreeDots",color:"brown",height:80,width:80}),children:Object(f.jsxs)(i.d,{children:[Object(f.jsx)(h,{exact:!0,path:"/fin-project-front/registration",redirectTo:"/fin-project-front/home",children:Object(f.jsx)(v,{})}),Object(f.jsx)(h,{path:"/fin-project-front/login",restricted:!0,redirectTo:"/fin-project-front/home",children:Object(f.jsx)(y,{})}),Object(f.jsx)(p,{path:"/fin-project-front/home",redirectTo:"/fin-project-front/login",children:Object(f.jsx)(_,{})}),Object(f.jsx)(p,{path:"/fin-project-front/statistics",redirectTo:"/fin-project-front/login",children:Object(f.jsx)(g,{})}),Object(f.jsx)(p,{path:"/fin-project-front/currency",redirectTo:"/fin-project-front/login",children:Object(f.jsx)(x,{})}),Object(f.jsx)(h,{children:Object(f.jsx)(i.a,{to:"/fin-project-front/registration"})})]})})})}var T=e(22),k=e(52),w=e(23),S=e(2),C=e(29),E=(e(108),e(19)),I=e(53),q=e.n(I),A=Object(w.a)(Object(S.d)({serializableCheck:{ignoredActions:[E.a,E.f,E.b,E.c,E.d,E.e]}})),L={key:"auth",storage:q.a,whitelist:["token"]},R=Object(S.a)({reducer:{auth:Object(E.g)(L,u.b),transactions:C.a},middleware:A,devTools:!1}),U=Object(E.h)(R);e(111);s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(o.a,{store:R,children:Object(f.jsx)(k.a,{loading:Object(f.jsx)("h3",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"}),persistor:U,children:Object(f.jsx)(T.a,{children:Object(f.jsx)(N,{})})})})}),document.getElementById("root"))},18:function(t,n,e){"use strict";e.d(n,"a",(function(){return i.a})),e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return _}));var c,a,r,s,i=e(37),o={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUserName:function(t){return t.auth.user.name},getUserEmail:function(t){return t.auth.user.email},getToken:function(t){return t.auth.token}},u=e(4),l=e(9),j=e(2),b=e(3),d={user:{name:null,email:null}},f=Object(j.c)(d,(c={},Object(u.a)(c,b.l,(function(t,n){return n.payload.data})),Object(u.a)(c,b.f,(function(t,n){return n.payload.data.user})),Object(u.a)(c,b.h,(function(){return d})),Object(u.a)(c,b.c,(function(t,n){return n.payload.data.data.user})),c)),O=Object(j.c)(null,(a={},Object(u.a)(a,b.l,(function(t,n){return n.payload.data.token})),Object(u.a)(a,b.f,(function(t,n){return n.payload.data.token})),Object(u.a)(a,b.i,(function(){return null})),Object(u.a)(a,b.h,(function(){return null})),a)),h=Object(j.c)(!1,(r={},Object(u.a)(r,b.l,(function(){return!1})),Object(u.a)(r,b.f,(function(){return!0})),Object(u.a)(r,b.c,(function(){return!0})),Object(u.a)(r,b.i,(function(){return!1})),Object(u.a)(r,b.h,(function(){return!1})),Object(u.a)(r,b.j,!1),Object(u.a)(r,b.d,!1),Object(u.a)(r,b.a,!1),r)),m=function(t,n){return n.payload},p=Object(j.c)(null,(s={},Object(u.a)(s,b.j,m),Object(u.a)(s,b.d,m),Object(u.a)(s,b.g,m),Object(u.a)(s,b.a,m),s)),_=Object(l.b)({user:f,token:O,isLoggedIn:h,error:p})},29:function(t,n,e){"use strict";var c,a,r=e(23),s=e(4),i=e(9),o=e(2),u=e(7),l=Object(o.c)(!1,(c={},Object(s.a)(c,u.n,(function(){return!0})),Object(s.a)(c,u.d,(function(){return!1})),c)),j=Object(o.c)([],(a={},Object(s.a)(a,u.c,(function(t,n){var e=n.payload;return[].concat(Object(r.a)(t),[e])})),Object(s.a)(a,u.g,(function(t,n){return n.payload})),a)),b=Object(o.c)([],Object(s.a)({},u.j,(function(t,n){return n.payload}))),d=Object(o.c)([],Object(s.a)({},u.m,(function(t,n){var e=n.payload;return Object(r.a)(e)})));n.a=Object(i.b)({modalTransaction:l,allTransactions:j,queryStatistics:b,transactionCategories:d})},3:function(t,n,e){"use strict";e.d(n,"k",(function(){return a})),e.d(n,"l",(function(){return r})),e.d(n,"j",(function(){return s})),e.d(n,"e",(function(){return i})),e.d(n,"f",(function(){return o})),e.d(n,"d",(function(){return u})),e.d(n,"h",(function(){return l})),e.d(n,"i",(function(){return j})),e.d(n,"g",(function(){return b})),e.d(n,"b",(function(){return d})),e.d(n,"c",(function(){return f})),e.d(n,"a",(function(){return O}));var c=e(2),a=Object(c.b)("auth/registrationRequest"),r=Object(c.b)("auth/registrationSuccess"),s=Object(c.b)("auth/registrationrError"),i=Object(c.b)("auth/loginRequest"),o=Object(c.b)("auth/loginSuccess"),u=Object(c.b)("auth/loginError"),l=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),b=Object(c.b)("auth/logoutError"),d=Object(c.b)("auth/getCurrentUserRequest"),f=Object(c.b)("auth/getCurrentUserSuccess"),O=Object(c.b)("auth/getCurrentUserError")},33:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return f}));var c={};e.r(c),e.d(c,"fetchTransactions",(function(){return l})),e.d(c,"addTransaction",(function(){return j})),e.d(c,"getQueryStatistics",(function(){return b})),e.d(c,"getCategories",(function(){return d}));var a=e(7),r=e(16),s=e.n(r),i=e(20),o=e(14),u=e.n(o),l=function(){return function(){var t=Object(i.a)(s.a.mark((function t(n){var e,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(a.f)()),t.prev=1,t.next=4,u.a.get("/transactions");case 4:e=t.sent,c=e.data,n(Object(a.g)(c.data.transactions)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(Object(a.e)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(n){return t.apply(this,arguments)}}()},j=function(t){return function(){var n=Object(i.a)(s.a.mark((function n(e){var c,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(Object(a.b)()),n.prev=1,n.next=4,u.a.post("/transactions",t);case 4:c=n.sent,r=c.data,console.log("data",r.data.result),e(Object(a.c)(r.data.result)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),e(Object(a.a)(n.t0.message));case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(t){return n.apply(this,arguments)}}()},b=function(t){var n=t.month,e=t.year;return function(){var t=Object(i.a)(s.a.mark((function t(c){var r,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(Object(a.i)()),t.prev=1,t.next=4,u.a.get("/transactions/statistics?month=".concat(n,"&year=").concat(e));case 4:r=t.sent,i=r.data,c(Object(a.j)(i)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),c(Object(a.h)(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(n){return t.apply(this,arguments)}}()},d=function(){return function(){var t=Object(i.a)(s.a.mark((function t(n){var e,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(a.l)()),t.prev=1,t.next=4,u.a.get("/transactions/categories");case 4:e=t.sent,c=e.data,n(Object(a.m)(c.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(Object(a.k)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(n){return t.apply(this,arguments)}}()},f=(e(29),e(40))},37:function(t,n,e){"use strict";var c=e(16),a=e.n(c),r=e(20),s=e(14),i=e.n(s),o=e(3);i.a.defaults.baseURL="https://fin-project-group4.herokuapp.com/api";var u=function(t){i.a.defaults.headers.common.Authorization="".concat(t)},l=function(t){i.a.defaults.headers.common.Authorization=""},j={registration:function(t){var n=t.email,e=t.password,c=t.name;return function(t){t(o.k()),i.a.post("/auth/signup",{email:n,password:e,name:c}).then((function(n){u(n.token),t(o.l(n))})).catch((function(n){t(o.j(n.message))}))}},login:function(t){var n=t.email,e=t.password;return function(t){t(o.e()),i.a.post("/auth/login",{email:n,password:e}).then((function(n){u(n.token),t(o.f(n))})).catch((function(n){t(o.d(n.message))}))}},logout:function(){return function(t){t(o.h()),i.a.get("/auth/logout").then((function(){l(),t(o.i())})).catch((function(n){t(o.g(n.message))}))}},getCurrentUser:function(){return function(){var t=Object(r.a)(a.a.mark((function t(n,e){var c,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=e(),r=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return u(r),t.next=6,n(o.b());case 6:i.a.get("/auth/current").then((function(t){n(o.c(t))})).catch((function(t){n(o.b(t.message))}));case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()}};n.a=j},40:function(t,n,e){"use strict";e.r(n),e.d(n,"getAllTransactions",(function(){return c})),e.d(n,"getAddTransactions",(function(){return a})),e.d(n,"getAllQueryStatistics",(function(){return r})),e.d(n,"getIsModalAddTransactionOpen",(function(){return s})),e.d(n,"getTransactionCategories",(function(){return i}));var c=function(t){return t.transactions.allTransactions},a=function(t){return t.transactions.addTransactions},r=function(t){return t.transactions.queryStatistics},s=function(t){return t.transactions.modalTransaction},i=function(t){return t.transactions.transactionCategories}},54:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var c=e(0),a=(e(107),e(11)),r=e(33),s=e(1);function i(){var t=Object(a.b)();Object(c.useEffect)((function(){t(r.a.fetchTransactions())}),[t]);var n=Object(a.c)(r.b.getAllTransactions);return!n.length&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{style:{padding:"20px"},children:"Welcome to your wallet! Here would be shown your transactios"}),Object(s.jsx)("h2",{style:{color:"LightSeaGreen"},children:' Click "+" to add one '})]})||n.length&&Object(s.jsx)("div",{className:"transactionscContainer",style:{display:"flex",justifyContent:"center"},children:window.matchMedia("( max-width:767px)").matches?Object(s.jsx)("ul",{style:{paddingLeft:0,paddingTop:0,margin:0},children:n.map((function(t){return Object(s.jsxs)("ul",{className:"transactions__list__mobile transactions__list__mobile"+t.type,id:t._id,children:[Object(s.jsxs)("li",{className:"transactions__item__mobile",children:[Object(s.jsx)("span",{className:"transactions__menu-item",children:"\u0414\u0430\u0442\u0430"}),Object(s.jsx)("span",{className:"",children:t.date})]}),Object(s.jsxs)("li",{className:"transactions__item__mobile",children:[Object(s.jsx)("span",{className:"transactions__menu-item",children:"\u0422\u0438\u043f"}),Object(s.jsx)("span",{className:"transactions__item__mobile__data",children:"expense"===t.type?"-":"+"})]}),Object(s.jsxs)("li",{className:"transactions__item__mobile",children:[Object(s.jsx)("span",{className:"transactions__menu-item",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),Object(s.jsx)("span",{className:"transactions__item__mobile__data",children:t.category})]}),Object(s.jsxs)("li",{className:"transactions__item__mobile",children:[Object(s.jsx)("span",{className:"transactions__menu-item",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),Object(s.jsx)("span",{className:"transactions__item__mobile__data",children:t.comment})]}),Object(s.jsxs)("li",{className:"transactions__item__mobile",children:[Object(s.jsx)("span",{className:"transactions__menu-item",children:"\u0421\u0443\u043c\u043c\u0430"}),Object(s.jsx)("span",{className:"transactions__item__mobile__data__"+t.type,children:t.sum})]}),Object(s.jsxs)("li",{className:"transactions__item__mobile",children:[Object(s.jsx)("span",{className:"transactions__menu-item",children:"\u0411\u0430\u043b\u0430\u043d\u0441"}),Object(s.jsx)("span",{className:"transactions__item__mobile__data",children:t.balance})]})]})}))}):Object(s.jsxs)("ul",{className:"transactions list",children:[Object(s.jsxs)("li",{className:"transactions__menu",children:[Object(s.jsx)("span",{className:"transactions__menu-item",children:"\u0414\u0430\u0442\u0430"}),Object(s.jsx)("span",{className:"transactions__menu-item",children:"\u0422\u0438\u043f"}),Object(s.jsx)("span",{className:"transactions__menu-item",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),Object(s.jsx)("span",{className:"transactions__menu-item",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),Object(s.jsx)("span",{className:"transactions__menu-item",children:"\u0421\u0443\u043c\u043c\u0430"}),Object(s.jsx)("span",{className:"transactions__menu-item",children:"\u0411\u0430\u043b\u0430\u043d\u0441"})]}),n.map((function(t){return Object(s.jsxs)("li",{className:"transactions__item",id:t._id,children:[Object(s.jsx)("span",{className:"transactions__costs",children:t.date}),Object(s.jsx)("span",{className:"transactions__costs",children:"expense"===t.type?"-":"+"}),Object(s.jsx)("span",{className:"transactions__costs",children:t.category}),Object(s.jsx)("span",{className:"transactions__costs",children:t.comment}),Object(s.jsx)("span",{className:"transactions__costs__"+t.type,children:t.sum}),Object(s.jsx)("span",{className:"transactions__costs",children:t.balance})]})}))]})})}},59:function(t,n,e){},7:function(t,n,e){"use strict";e.d(n,"n",(function(){return a})),e.d(n,"d",(function(){return r})),e.d(n,"f",(function(){return s})),e.d(n,"g",(function(){return i})),e.d(n,"e",(function(){return o})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return l})),e.d(n,"a",(function(){return j})),e.d(n,"i",(function(){return b})),e.d(n,"j",(function(){return d})),e.d(n,"h",(function(){return f})),e.d(n,"l",(function(){return O})),e.d(n,"m",(function(){return h})),e.d(n,"k",(function(){return m}));var c=e(2),a=Object(c.b)("transactions/openModalTransaction"),r=Object(c.b)("transactions/closeModalTransaction"),s=Object(c.b)("transactions/fetchTransactionRequest"),i=Object(c.b)("transactions/fetchTransactionSuccess"),o=Object(c.b)("transactions/fetchTransactionError"),u=Object(c.b)("transactions/addTransactionRequest"),l=Object(c.b)("transactions/addTransactionSuccess"),j=Object(c.b)("transactions/addTransactionError"),b=Object(c.b)("transactions/getQueryStatisticsRequest"),d=Object(c.b)("transactions/getQueryStatisticsSuccess"),f=Object(c.b)("transactions/getQueryStatisticsError"),O=Object(c.b)("transactions/getTransactionCategoriesRequest"),h=Object(c.b)("transactions/getTransactionCategoriesSuccess"),m=Object(c.b)("transactions/getTransactionCategoriesError")}},[[112,6,7]]]);
//# sourceMappingURL=main.f5d0c9fd.chunk.js.map