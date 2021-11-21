(this["webpackJsonpfin-project-front"]=this["webpackJsonpfin-project-front"]||[]).push([[6],{110:function(t,e,n){},114:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(21),o=n.n(a),u=(n(61),n(7)),i=n(14),s=n(15),b=n(41),j=n.n(b),f=n(42),d=(n(55),n(22)),l=n(30),O=n(3),h=["component","redirectTo","children"];function g(t){t.component;var e=t.redirectTo,n=t.children,r=Object(l.a)(t,h),c=Object(i.c)(s.c.getIsLoggedIn)&&r.restricted;return Object(O.jsx)(u.b,Object(d.a)(Object(d.a)({},r),{},{children:c?Object(O.jsx)(u.a,{to:e}):n}))}var p=n(29),m=(n(110),Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(10),n.e(9)]).then(n.bind(null,377))}))),x=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(2),n.e(12)]).then(n.bind(null,375))})),T=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(2),n.e(11)]).then(n.bind(null,249))})),y=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(5)]).then(n.bind(null,378))})),v=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(4)]).then(n.bind(null,379))}));function k(){var t=Object(i.b)(),e=Object(i.c)(s.c.getIsLoggedIn),n=Object(i.c)(s.c.getUserName);return console.log(e),console.log(n),Object(r.useEffect)((function(){t(s.a.getCurrentUser())}),[t]),Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)(j.a,{type:"ThreeDots",color:"brown",height:80,width:80}),children:Object(O.jsxs)(u.d,{children:[Object(O.jsx)(g,{exact:!0,path:"/fin-project-front/registration",redirectTo:"/fin-project-front/home",children:Object(O.jsx)(y,{})}),Object(O.jsx)(g,{path:"/fin-project-front/login",restricted:!0,redirectTo:"/fin-project-front/home",children:Object(O.jsx)(v,{})}),Object(O.jsxs)(p.a,{path:"/fin-project-front/home",redirectTo:"/fin-project-front/login",children:[Object(O.jsx)(f.a,{}),Object(O.jsx)(m,{})]}),Object(O.jsx)(p.a,{path:"/fin-project-front/statistics",redirectTo:"/fin-project-front/login",children:Object(O.jsx)(x,{})}),Object(O.jsx)(p.a,{path:"/fin-project-front/currency",redirectTo:"/fin-project-front/login",children:Object(O.jsx)(T,{})}),Object(O.jsx)(g,{children:Object(O.jsx)(u.a,{to:"/fin-project-front/registration"})})]})})})}var S=n(23),w=n(53),E=n(24),I=n(1),C=n(40),q=n(17),R=n(54),U=n.n(R),z=Object(E.a)(Object(I.d)({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}})),L={key:"auth",storage:U.a,whitelist:["token"]},P=Object(I.a)({reducer:{auth:Object(q.g)(L,s.b),transactions:C.a},middleware:z,devTools:!1}),A=Object(q.h)(P);n(113);o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(i.a,{store:P,children:Object(O.jsx)(w.a,{loading:Object(O.jsx)("h3",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"}),persistor:A,children:Object(O.jsx)(S.a,{children:Object(O.jsx)(k,{})})})})}),document.getElementById("root"))},15:function(t,e,n){"use strict";n.d(e,"a",(function(){return u.a})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return m}));var r,c,a,o,u=n(36),i={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUserName:function(t){return t.auth.user.name},getUserEmail:function(t){return t.auth.user.email},getToken:function(t){return t.auth.token},getBalance:function(t){return t.auth.user.balance}},s=n(4),b=n(8),j=n(1),f=n(2),d={user:{name:null,email:null}},l=Object(j.c)(d,(r={},Object(s.a)(r,f.l,(function(t,e){return e.payload.data})),Object(s.a)(r,f.f,(function(t,e){return e.payload.data.user})),Object(s.a)(r,f.h,(function(){return d})),Object(s.a)(r,f.c,(function(t,e){return e.payload.data.data.user})),r)),O=Object(j.c)(null,(c={},Object(s.a)(c,f.l,(function(t,e){return e.payload.data.token})),Object(s.a)(c,f.f,(function(t,e){return e.payload.data.token})),Object(s.a)(c,f.i,(function(){return null})),Object(s.a)(c,f.h,(function(){return null})),c)),h=Object(j.c)(!1,(a={},Object(s.a)(a,f.l,(function(){return!1})),Object(s.a)(a,f.f,(function(){return!0})),Object(s.a)(a,f.c,(function(){return!0})),Object(s.a)(a,f.i,(function(){return!1})),Object(s.a)(a,f.h,(function(){return!1})),Object(s.a)(a,f.j,!1),Object(s.a)(a,f.d,!1),Object(s.a)(a,f.a,!1),a)),g=function(t,e){return e.payload},p=Object(j.c)(null,(o={},Object(s.a)(o,f.j,g),Object(s.a)(o,f.d,g),Object(s.a)(o,f.g,g),Object(s.a)(o,f.a,g),o)),m=Object(b.b)({user:l,token:O,isLoggedIn:h,error:p})},2:function(t,e,n){"use strict";n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return O}));var r=n(1),c=Object(r.b)("auth/registrationRequest"),a=Object(r.b)("auth/registrationSuccess"),o=Object(r.b)("auth/registrationrError"),u=Object(r.b)("auth/loginRequest"),i=Object(r.b)("auth/loginSuccess"),s=Object(r.b)("auth/loginError"),b=Object(r.b)("auth/logoutRequest"),j=Object(r.b)("auth/logoutSuccess"),f=Object(r.b)("auth/logoutError"),d=Object(r.b)("auth/getCurrentUserRequest"),l=Object(r.b)("auth/getCurrentUserSuccess"),O=Object(r.b)("auth/getCurrentUserError")},20:function(t,e,n){"use strict";n.d(e,"n",(function(){return c})),n.d(e,"d",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return b})),n.d(e,"a",(function(){return j})),n.d(e,"i",(function(){return f})),n.d(e,"j",(function(){return d})),n.d(e,"h",(function(){return l})),n.d(e,"l",(function(){return O})),n.d(e,"m",(function(){return h})),n.d(e,"k",(function(){return g}));var r=n(1),c=Object(r.b)("transactions/openModalTransaction"),a=Object(r.b)("transactions/closeModalTransaction"),o=Object(r.b)("transactions/fetchTransactionRequest"),u=Object(r.b)("transactions/fetchTransactionSuccess"),i=Object(r.b)("transactions/fetchTransactionError"),s=Object(r.b)("transactions/addTransactionRequest"),b=Object(r.b)("transactions/addTransactionSuccess"),j=Object(r.b)("transactions/addTransactionError"),f=Object(r.b)("transactions/getQueryStatisticsRequest"),d=Object(r.b)("transactions/getQueryStatisticsSuccess"),l=Object(r.b)("transactions/getQueryStatisticsError"),O=Object(r.b)("transactions/getTransactionCategoriesRequest"),h=Object(r.b)("transactions/getTransactionCategoriesSuccess"),g=Object(r.b)("transactions/getTransactionCategoriesError")},29:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n(22),c=n(30),a=n(14),o=n(7),u=n(15),i=n(3),s=["children","redirectTo"];function b(t){var e=t.children,n=t.redirectTo,b=Object(c.a)(t,s),j=Object(a.c)(u.c.getIsLoggedIn);return Object(i.jsx)(o.b,Object(r.a)(Object(r.a)({},b),{},{children:j?e:Object(i.jsx)(o.a,{to:n})}))}},36:function(t,e,n){"use strict";var r=n(32),c=n.n(r),a=n(37),o=n(18),u=n.n(o),i=n(2),s=n(19),b=n.n(s);u.a.defaults.baseURL="https://fin-project-group4.herokuapp.com/api";var j=function(t){u.a.defaults.headers.common.Authorization="".concat(t)},f=function(t){u.a.defaults.headers.common.Authorization=""},d={registration:function(t){var e=t.email,n=t.password,r=t.name;return function(t){t(i.k()),u.a.post("/auth/signup",{email:e,password:n,name:r}).then((function(e){j(e.token),t(i.l(e)),b.a.success("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!")})).catch((function(e){t(i.j(e.message)),b.a.error(e.message)}))}},login:function(t){var e=t.email,n=t.password;return function(t){t(i.e()),u.a.post("/auth/login",{email:e,password:n}).then((function(e){j(e.token),t(i.f(e)),b.a.success("\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!")})).catch((function(e){t(i.d(e.message)),b.a.error(e.message)}))}},logout:function(){return function(t){t(i.h()),b.a.success("\u0412\u044b \u0432\u044b\u0448\u043b\u0438 \u0438\u0437 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438"),u.a.get("/auth/logout").then((function(){f(),t(i.i())})).catch((function(e){t(i.g(e.message)),b.a.error(e.message)})).catch((function(e){t(i.g(e.message))}))}},getCurrentUser:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return j(a),t.next=6,e(i.b());case 6:u.a.get("/auth/current").then((function(t){e(i.c(t))})).catch((function(t){e(i.b(t.message)),b.a.error(t.message)}));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}};e.a=d},40:function(t,e,n){"use strict";var r,c,a=n(24),o=n(4),u=n(8),i=n(1),s=n(20),b=Object(i.c)(!1,(r={},Object(o.a)(r,s.n,(function(){return!0})),Object(o.a)(r,s.d,(function(){return!1})),r)),j=Object(i.c)([],(c={},Object(o.a)(c,s.c,(function(t,e){return[e.payload].concat(Object(a.a)(t))})),Object(o.a)(c,s.g,(function(t,e){return e.payload})),c)),f=Object(i.c)([],Object(o.a)({},s.j,(function(t,e){return e.payload}))),d=Object(i.c)([],Object(o.a)({},s.m,(function(t,e){var n=e.payload;return Object(a.a)(n)})));e.a=Object(u.b)({modalTransaction:b,allTransactions:j,queryStatistics:f,transactionCategories:d})},61:function(t,e,n){}},[[114,7,8]]]);
//# sourceMappingURL=main.504088aa.chunk.js.map