(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[1],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return O})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return x}));var r=n(7),a=n.n(r),c=n(14),s=n(58),o=n(4),i=n(60),u=n(15),l="profile/ADD-POST",f="profile/SET_USER_PROFILE",d="profile/SET_STATUS",p="profile/SAVE_PHOTO_SUCCESS",j={postData:[{id:1,message:"Hi, nice day",likeCount:15},{id:2,message:"Hello, it's my first post",likeCount:12}],profile:null,status:"1"},h=function(e){return{type:l,newPostText:e}},b=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n({type:f,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(b(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.b.updateStatus(e);case 3:0===t.sent.resultCode&&n(b(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n((a=r.data.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(s=t.sent).resultCode){t.next=8;break}n(g(c)),t.next=11;break;case 8:return s.messages[0].replace(/.*\->\W*/gi,""),n(Object(i.a)("profileInfo",{_error:s.messages[0]})),t.abrupt("return",Promise.reject(s.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{postData:[].concat(Object(s.a)(e.postData),[{id:5,message:t.newPostText,likeCount:0}])});case f:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case d:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case p:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(2),a=(n(1),n(205)),c=n.n(a),s=n(92),o=function(e){var t=e.photo;return Object(r.jsx)("img",{className:c.a.avatar,src:t||s.a})}},148:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(58),a=n(4),c="dialogs/SEND-MESSAGE",s={dialogsData:[{id:1,name:"Viktor"},{id:2,name:"Eldar"},{id:3,name:"Vladimir"},{id:4,name:"Vasya"}],messagesData:[{id:1,message:"Hi, give me money"},{id:2,message:"We go walk?"},{id:3,message:"I, get my money"}]},o=function(e){return{type:c,newMessage:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:4,message:t.newMessage}])});default:return e}}},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(201),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"1fcabdac-f36b-4011-9477-77ed629578b8"}}),c={getAuthorization:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}},s={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}},o={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollowUser:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))},followUser:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data.resultCode}))}},i={getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return a.put("profile",e).then((function(e){return e.data}))}}},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(4),a=n(93),c=n(94),s=n(96),o=n(95),i=n(2),u=n(1),l=n.n(u),f=n(24),d=n(8),p=function(e){return{isAuth:e.auth.isAuth}},j=function(e){var t=function(t){Object(s.a)(u,t);var n=Object(o.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(c.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(i.jsx)(e,Object(r.a)({},this.props)):Object(i.jsx)(d.a,{to:"/login"})}}]),u}(l.a.Component);return Object(f.b)(p)(t)}},204:function(e,t,n){e.exports={preloader:"Preloader_preloader__382hD"}},205:function(e,t,n){e.exports={avatar:"UserPhoto_avatar__36XI1"}},206:function(e,t,n){e.exports={friendItem:"FriendItem_friendItem__3bmhu"}},207:function(e,t,n){e.exports={friends:"Friends_friends__3mLi5"}},261:function(e,t,n){},33:function(e,t,n){e.exports={users:"Users_users__wRdJi",userItem:"Users_userItem__3s7Xc",userInfo:"Users_userInfo__1k3K9",userPhoto:"Users_userPhoto__vf8RQ",userBlock:"Users_userBlock__1IN3I",followed:"Users_followed__2MW86",follow:"Users_follow__3ERoQ",unfollow:"Users_unfollow__2BAtM"}},342:function(e,t,n){},343:function(e,t,n){},42:function(e,t,n){e.exports={nav:"Navbar_nav__3M5u1",item:"Navbar_item__IQqLs"}},50:function(e,t,n){e.exports={header:"Header_header__12p0F",loginBlock:"Header_loginBlock__3tcly",item:"Header_item__3lmLA",logout:"Header_logout__3ju9b"}},56:function(e,t,n){"use strict";var r=n(2),a=(n(1),n.p+"static/media/preloader.79a159df.gif"),c=n(204),s=n.n(c);t.a=function(){return Object(r.jsx)("img",{className:s.a.preloader,src:a})}},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return v}));var r=n(7),a=n.n(r),c=n(14),s=n(4),o=n(60),i=n(15),u=n(92),l="auth/SET_USER_DATA",f="auth/SET_USER_PHOTO",d="auth/GET_CAPTCHA_URL_SUCCESS",p={userId:null,email:null,login:null,photo:null,isFetching:!1,isAuth:!1,captchaUrl:null},j=function(e,t,n,r){return{type:l,payload:{userId:e,login:t,email:n,isAuth:r}}},h=function(e){return{type:f,photo:e}},b=function(e){return{type:d,payload:{captchaUrl:e}}},g=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getAuthorization();case 2:if(0!==(n=e.sent).resultCode){e.next=10;break}return r=n.data,c=r.id,s=r.login,o=r.email,t(j(c,s,o,!0)),e.next=8,i.b.getProfile(c);case 8:null===(l=e.sent).photos.small?t(h(u.a)):t(h(l.photos.small));case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e,t,n,r){return function(){var s=Object(c.a)(a.a.mark((function c(s){var u,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.login(e,t,n,r);case 2:0===(u=a.sent).data.resultCode?s(g()):(10===u.data.resultCode&&s(m()),l=u.data.messages.length>0?u.data.messages[0]:"Some error",s(Object(o.a)("login",{_error:"".concat(l)})));case 4:case"end":return a.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(b(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.resultCode&&t(j(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:case d:return Object(s.a)(Object(s.a)({},e),t.payload);case f:return Object(s.a)(Object(s.a)({},e),{},{photo:t.photo});default:return e}}},637:function(e,t,n){},638:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(1),c=n.n(a),s=n(25),o=n.n(s);n(261),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(9),u=n(31),l=n(200),f=n(130),d=n(148),p={friends:[{id:1,name:"Viktor"},{id:2,name:"Polyna"},{id:3,name:"Eldar"},{id:4,name:"Mary"},{id:5,name:"Denis"}]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return e},h=n(7),b=n.n(h),g=n(14),O=n(58),m=n(4),v=n(15),x=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(m.a)(Object(m.a)({},e),r):e}))},w="users/FOLLOW",_="users/UNFOLLOW",P="users/SET_USERS",y="users/SET_CURRENT_PAGE",C="users/SET_TOTAL_USERS_COUNT",k="users/TOGGLE_IS_FETCHING",S="users/TOGGLE_IS_FOLLOWING_PROGRESS",I={usersData:[],pageSize:10,totalUsersCount:null,currentPage:1,isFetching:!0,followingInProgress:[]},U=function(e){return{type:w,userId:e}},E=function(e){return{type:_,userId:e}},N=function(e){return{type:y,currentPage:e}},T=function(e){return{type:k,isFetching:e}},A=function(e,t){return{type:S,isFetching:e,userId:t}},D=function(){var e=Object(g.a)(b.a.mark((function e(t,n,r,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(A(!0,n)),e.next=3,r(n);case 3:0===e.sent&&t(a(n)),t(A(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(m.a)(Object(m.a)({},e),{},{usersData:x(e.usersData,t.userId,"id",{followed:!0})});case _:return Object(m.a)(Object(m.a)({},e),{},{usersData:x(e.usersData,t.userId,"id",{followed:!1})});case P:return Object(m.a)(Object(m.a)({},e),{},{usersData:t.usersData});case y:return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case C:return Object(m.a)(Object(m.a)({},e),{},{totalUsersCount:t.count});case k:return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});case S:return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(O.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},z=n(57),L="app/INITIALIZED_SUCCESS",M={initialized:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(m.a)(Object(m.a)({},e),{},{initialized:!0});default:return e}},B=n(199),H=Object(u.c)({profilePage:f.b,dialogsPage:d.a,friendsPage:j,usersPage:F,auth:z.a,form:B.a,app:R}),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,W=Object(u.e)(H,G(Object(u.a)(l.a))),V=n(24),J=n(93),X=n(94),Q=n(96),K=n(95),q=n(8),Y=n(56),Z=function(e){return function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(Y.a,{}),children:Object(r.jsx)(e,Object(m.a)({},t))})}},$=n(135),ee=n(50),te=n.n(ee),ne=n.p+"static/media/logo.0010b5e9.png",re=function(e){var t=e.isAuth,n=e.login,a=e.photo,c=e.logoutThunkCreator;return Object(r.jsxs)("header",{className:te.a.header,children:[Object(r.jsx)(i.b,{to:"/news",children:Object(r.jsx)("img",{className:te.a.logo,src:ne})}),Object(r.jsx)("div",{className:te.a.loginBlock,children:t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(i.b,{to:"/profile",className:"".concat(te.a.item),children:[Object(r.jsx)("span",{children:n}),Object(r.jsx)($.a,{photo:a})]}),Object(r.jsx)("button",{className:"".concat(te.a.item," ").concat(te.a.logout),onClick:c,children:"Logout"})]}):Object(r.jsx)(i.b,{to:"/login",children:"Login"})})]})},ae=Object(V.b)((function(e){var t=e.auth;return{isAuth:t.isAuth,login:t.login,photo:t.photo}}),{logoutThunkCreator:z.d})(re),ce=n(42),se=n.n(ce),oe=function(){return Object(r.jsxs)("nav",{className:se.a.nav,children:[Object(r.jsx)("div",{className:se.a.item,children:Object(r.jsx)(i.b,{to:"/profile",children:"Profile"})}),Object(r.jsx)("div",{className:se.a.item,children:Object(r.jsx)(i.b,{to:"/dialogs",children:"Messages"})}),Object(r.jsx)("div",{className:se.a.item,children:Object(r.jsx)(i.b,{to:"/news",children:"News"})}),Object(r.jsx)("div",{className:se.a.item,children:Object(r.jsx)(i.b,{to:"/music",children:"Music"})}),Object(r.jsx)("div",{className:se.a.item,children:Object(r.jsx)(i.b,{to:"/friends",children:"Friends"})}),Object(r.jsx)("div",{className:se.a.item,children:Object(r.jsx)(i.b,{to:"/users",children:"Users"})})]})},ie=(n(342),function(){return Object(r.jsx)("div",{children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),ue=(n(343),function(){return Object(r.jsx)("div",{children:"Music!"})}),le=n(154),fe=n(206),de=n.n(fe),pe=function(e){var t=e.name,n=e.id;return Object(r.jsx)(i.b,{to:"/friends/".concat(n),className:de.a.friendItem,children:t})},je=n(207),he=n.n(je),be=function(e){var t=e.friends;return Object(r.jsx)("div",{className:he.a.friends,children:t.map((function(e){return Object(r.jsx)(pe,{id:e.id,name:e.name},e.id)}))})},ge=Object(u.d)(Object(V.b)((function(e){return{friends:e.friendsPage.friends}})),le.a)(be),Oe=n.p+"static/media/user.ff616b29.jpg",me=n(33),ve=n.n(me),xe=function(e){var t=e.item,n=e.followThunkCreator,a=e.unfollowThunkCreator,c=e.followingInProgress;return Object(r.jsxs)("div",{className:ve.a.userBlock,children:[Object(r.jsxs)("div",{className:ve.a.userItem,children:[Object(r.jsx)(i.b,{to:"/profile/".concat(t.id),children:Object(r.jsx)("img",{className:ve.a.userPhoto,src:null!==t.photos.small?t.photos.small:Oe,alt:""})}),t.followed?Object(r.jsx)("button",{disabled:c.some((function(e){return e===t.id})),className:"".concat(ve.a.followed," ").concat(ve.a.unfollow),onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:c.some((function(e){return e===t.id})),className:"".concat(ve.a.followed," ").concat(ve.a.follow),onClick:function(){n(t.id)},children:"Follow"})]}),Object(r.jsxs)("div",{className:ve.a.userInfo,children:[Object(r.jsxs)("span",{children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Name:"})," ",t.name]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Status:"})," ",t.status]})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Country:"})," ","item.country"]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"City:"})," ","item.city"]})]})]})]},t.id)},we=n(136),_e=(n(344),n(97)),Pe=n.n(_e),ye=function(e){for(var t=e.totalItemsCount,n=e.currentPage,c=e.pageSize,s=e.changeCurrentPage,o=e.portionSize,i=void 0===o?10:o,u=Math.ceil(t/c),l=[],f=1;f<=u;f++)l.push(f);var d=Math.ceil(u/i),p=Object(a.useState)(1),j=Object(we.a)(p,2),h=j[0],b=j[1],g=(h-1)*i+1,O=h*i;return Object(r.jsxs)("div",{className:Pe.a.pagination,children:[h>1&&Object(r.jsx)("button",{onClick:function(){b(h-1)},children:"a"}),l.filter((function(e){return e>=g&&e<=O})).map((function(e){return console.log(1),Object(r.jsx)("span",{className:n===e?Pe.a.selectedPage:Pe.a.page,onClick:function(t){s(e)},children:e},e)})),d>h&&Object(r.jsx)("button",{onClick:function(){b(h+1)},children:"b"})]})},Ce=function(e){var t=e.totalUsersCount,n=e.currentPage,a=e.pageSize,c=e.changeCurrentPage,s=e.usersData,o=e.followThunkCreator,i=e.unfollowThunkCreator,u=e.followingInProgress;return Object(r.jsxs)("div",{className:ve.a.users,children:[Object(r.jsx)(ye,{pageSize:a,changeCurrentPage:c,totalItemsCount:t,currentPage:n}),Object(r.jsx)("div",{children:s.map((function(e){return Object(r.jsx)(xe,{followingInProgress:u,unfollowThunkCreator:i,followThunkCreator:o,item:e},e.id)}))})]})},ke=Object(u.d)(Object(V.b)((function(e){var t=e.usersPage;return{usersData:t.usersData,pageSize:t.pageSize,totalUsersCount:t.totalUsersCount,currentPage:t.currentPage,isFetching:t.isFetching,followingInProgress:t.followingInProgress}}),{followThunkCreator:function(e){return function(){var t=Object(g.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,v.d.followUser.bind(e),U);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowThunkCreator:function(e){return function(){var t=Object(g.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,v.d.unfollowUser.bind(e),E);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:N,toggleIsFollowingProgress:A,getUsersThunkCreator:function(e,t){return function(){var n=Object(g.a)(b.a.mark((function n(r){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(T(!0)),r(N(e)),n.next=4,v.d.getUsers(e,t);case 4:a=n.sent,r((s=a.items,{type:P,usersData:s})),r((c=a.totalCount,{type:C,count:c})),r(T(!1));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))((function(e){Object(a.useEffect)((function(){e.getUsersThunkCreator(e.currentPage,e.pageSize)}),[e.currentPage,e.pageSize]);return e.isFetching?Object(r.jsx)(Y.a,{}):Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Ce,Object(m.a)(Object(m.a)({},e),{},{changeCurrentPage:function(t){e.getUsersThunkCreator(t,e.pageSize)}}))})})),Se=(n(637),c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,711))}))),Ie=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,710))})),Ue=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,709))})),Ee=function(e){Object(Q.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(J.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){console.log(e),alert("Some Error")},e}return Object(X.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(ae,{}),Object(r.jsx)(oe,{}),Object(r.jsx)("div",{className:"app-wrapper-content",children:Object(r.jsxs)(q.d,{children:[Object(r.jsx)(q.b,{path:"/profile/:userId?",render:Z(Ie)}),Object(r.jsx)(q.b,{path:"/dialogs",render:Z(Se)}),Object(r.jsx)(q.b,{path:"/news",component:ie}),Object(r.jsx)(q.b,{path:"/music",component:ue}),Object(r.jsx)(q.b,{path:"/friends",render:function(){return Object(r.jsx)(ge,{})}}),Object(r.jsx)(q.b,{path:"/users",render:function(){return Object(r.jsx)(ke,{})}}),Object(r.jsx)(q.b,{exact:!0,path:"/login",render:Z(Ue)}),Object(r.jsx)(q.a,{exact:!0,from:"/",to:"/profile"}),Object(r.jsx)(q.b,{path:"*",render:function(){return Object(r.jsx)("div",{children:"404"})}})]})})]}):Object(r.jsx)(Y.a,{})}}]),n}(c.a.Component),Ne=Object(V.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(z.b)());Promise.all([t]).then((function(){e({type:L})}))}}})(Ee);o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(i.a,{children:Object(r.jsx)(V.a,{store:W,children:Object(r.jsx)(Ne,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,n){"use strict";t.a=n.p+"static/media/user.996a92ae.png"},97:function(e,t,n){e.exports={pagination:"Paginator_pagination__L2tBe",selectedPage:"Paginator_selectedPage__3BuJV",page:"Paginator_page__UrE8U"}}},[[638,2,3]]]);
//# sourceMappingURL=main.0a679263.chunk.js.map