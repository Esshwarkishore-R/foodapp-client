(this["webpackJsonpfoodapp-client"]=this["webpackJsonpfoodapp-client"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(17),a=n.n(r),s=(n(50),n.p,n(51),n(52),n(79),n(41)),o=n(6),l=n(9),i=n(11),d=n.n(i),u=n(18),j=n(19),b=n.n(j),O="http://localhost:5000/",h=n(1),p=function(){var e,t=Object(l.b)(),n=Object(l.c)((function(e){return e.loginUserReducer}));console.log(n,"userState");var c=n.currentUser;return console.log(c,"currentuser"),Object(h.jsx)("div",{children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"#",children:"Food Application"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(h.jsx)("ul",{className:"navbar-nav ml-auto",children:c?Object(h.jsxs)("div",{className:"dropdown",children:[Object(h.jsx)("a",{className:"dropdown-toggle nav-link",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:null===c||void 0===c||null===(e=c.user[0])||void 0===e?void 0:e.name}),Object(h.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){t((function(e){localStorage.removeItem("currentUser"),window.location.href="/login"}))},children:"Logout"})})})]}):Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link","aria-current":"page",href:"/login",children:"Login"})})})})]})})})},g=function(e,t,n){return function(){var c=Object(u.a)(d.a.mark((function c(r){var a,s;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r({type:"GET_FOOD_REQUEST"}),c.prev=1,c.next=4,b.a.get("/api/food/getAllRestaurant");case 4:s=c.sent,console.log(s.data,"Response for the filter"),e?(a=s.data.filter((function(t){return t.restaurant_name.toLowerCase().includes(e)})),"all"!=t&&(a=s.data.filter((function(e){return e.cuisine.toLowerCase()===t})))):"high"==n?(a=s.data.sort((function(e,t){return t.average_price-e.average_price})),console.log("\ud83d\ude80 ~ file: foodActions.js ~ line 78 ~ filteredFood",s,a)):"low"==n&&(a=s.data.sort((function(e,t){return e.average_price-t.average_price}))),r({type:"GET_FOOD_SUCCESS",payload:a}),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),r({type:"GET_FOOD_FAILED",payload:c.t0});case 13:case"end":return c.stop()}}),c,null,[[1,10]])})));return function(e){return c.apply(this,arguments)}}()},m=(n(15),n(7)),x=n(84),v=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"spinner-grow",role:"status",style:{width:"100px",heigh:"300px",marginTop:"100px"},children:Object(h.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},f=function(e){var t=e.error;return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"alert alert-danger",role:"alert",children:t})})},S=function(){var e=Object(l.b)(),t=Object(c.useState)(""),n=Object(m.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)("all"),o=Object(m.a)(s,2),i=o[0],d=o[1];return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row justify-content-center shadow-lg p-3 mb-5 bg-body rounded",children:[Object(h.jsx)("div",{className:"col-md-2 w-100",children:Object(h.jsx)("input",{value:r,onChange:function(e){return a(e.target.value)},type:"text",className:"form-control",placeholder:"Search For Restaurant"})}),Object(h.jsx)("div",{className:"col-md-2 w-100",children:Object(h.jsxs)("select",{className:"form-control",value:i,onChange:function(e){return d(e.target.value)},children:[Object(h.jsx)("option",{value:"all",children:"All"}),Object(h.jsx)("option",{value:"south indian",children:"South Indian"}),Object(h.jsx)("option",{value:"north indian",children:"North Indian"}),Object(h.jsx)("option",{value:"sweets and snacks",children:"Sweets and snacks"})]})}),Object(h.jsx)("div",{className:"col-md-2 w-100",children:Object(h.jsx)("button",{className:"btn",onClick:function(){e(g(r,i))},children:"Filter"})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn",onClick:function(){e(g(r,i,"high"))},children:"Sort By Highest Price"})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn",onClick:function(){e(g(r,i,"low"))},children:"Sort By Lowest Price"})})]})})},N=function(e){var t,n=e.restaurant,r=Object(c.useState)(!1),a=Object(m.a)(r,2),s=a[0],o=a[1],l=function(){return o(!1)};return Object(h.jsxs)("div",{className:"m-2 shadow-lg p-3 mb-5 bg-body rounded",children:[Object(h.jsxs)("div",{onClick:function(){return o(!0)},children:[Object(h.jsxs)("h1",{h1:!0,children:[" ",n.restaurant_name]}),Object(h.jsx)("img",{src:n.image,className:"img-fluid",style:{width:"100%"},alt:"Resturant Name"})]}),Object(h.jsxs)("div",{className:"flex-container",children:[Object(h.jsx)("div",{className:"w-100 m-1",children:Object(h.jsxs)("p",{children:["Cuisine:",n.cuisine]})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"flex-container",children:Object(h.jsx)("div",{className:"w-100 m-1",children:Object(h.jsxs)("p",{children:["Description:",n.description]})})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"flex-container",children:Object(h.jsx)("div",{className:"w-100 m-1",children:Object(h.jsxs)("p",{children:["Average Price for two:",n.average_price,"Rs/-"]})})})]}),Object(h.jsxs)(x.a,{show:s,children:[Object(h.jsxs)(x.a.Header,{children:[Object(h.jsx)(x.a.Title,{children:n.restaurant_name}),Object(h.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:l})]}),Object(h.jsxs)(x.a.Body,{children:[Object(h.jsx)("img",{src:n.image,className:"img-fluid",style:{width:"50%"}}),Object(h.jsx)("p",{children:n.description}),null===n||void 0===n||null===(t=n.famous_foods)||void 0===t?void 0:t.map((function(e){return Object(h.jsxs)("div",{className:"food-card",children:[Object(h.jsx)("img",{src:e.image,className:"img-fluid",style:{width:"40%"}}),Object(h.jsxs)("div",{children:["Food Item: ",e.name]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:["Description: ",e.description]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:["Price: ",e.price]})]})}))]}),Object(h.jsx)(x.a.Footer,{children:Object(h.jsx)("button",{className:"btn",onClick:l,children:"Close"})})]})]})},y=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.getAllFoodReducer}));console.log(t,"foodstate");var n=t.food,r=t.error,a=t.loading;return console.log(n,"food reducer"),Object(c.useEffect)((function(){e(function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_FOOD_REQUEST"}),e.prev=1,e.next=4,b.a.get(O+"/api/food/getAllRestaurant",{headers:{isLogin:!1}});case 4:n=e.sent,console.log(n),t({type:"GET_FOOD_SUCCESS",payload:n.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"GET_FOOD_FAILED",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{}),Object(h.jsx)("div",{className:"row justify-content-center m-3",children:a?Object(h.jsx)(v,{}):r?Object(h.jsx)(f,{error:"Something Went Wrong"}):null===n||void 0===n?void 0:n.map((function(e){return Object(h.jsx)("div",{className:"col-md-3 p-3",children:Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(N,{restaurant:e})})},n._id)}))})]})},E=function(e){return console.log(e.success,"What is success message"),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"alert alert-success",role:"alert",children:e.success})})},w=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(m.a)(a,2),o=s[0],i=s[1],j=Object(c.useState)(""),p=Object(m.a)(j,2),g=p[0],x=p[1],S=Object(c.useState)(""),N=Object(m.a)(S,2),y=N[0],w=N[1],_=Object(l.c)((function(e){return e.registerUserReducer})),R=_.error,C=_.loading,U=_.success,I=Object(l.b)();return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"row justify-content-center shadow-lg p-3 mb-5 bg-body rounded mt-5",children:Object(h.jsxs)("div",{className:"col-md-5 mt-5",children:[Object(h.jsx)("h2",{className:"text-center m-2",style:{fontSize:"35px"},children:" Register "}),C&&Object(h.jsx)(v,{}),U&&Object(h.jsx)(E,{success:"User Register Successfully"}),R&&console.log(R,"error"),R&&Object(h.jsx)(f,{error:R.error}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Name",className:"form-control",value:n,onChange:function(e){r(e.target.value)}}),Object(h.jsx)("input",{required:!0,type:"email",placeholder:"Email",className:"form-control",value:o,onChange:function(e){i(e.target.value)}}),Object(h.jsx)("input",{required:!0,type:"password",placeholder:"Password",className:"form-control",value:g,onChange:function(e){x(e.target.value)}}),Object(h.jsx)("input",{required:!0,type:"password",placeholder:"Confirm Password",className:"form-control",value:y,onChange:function(e){w(e.target.value)}}),Object(h.jsx)("button",{className:"btn mt-3 mb-3",onClick:function(){if(g!==y)alert("password Not Matched");else{var e={name:n,email:o,password:g};console.log(e,"Data to backed user"),I(function(e){return function(){var t=Object(u.a)(d.a.mark((function t(n){var c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"USER_REGISTER_REQUEST"}),t.prev=1,t.next=4,b.a.post(O+"/api/users/register",e,{"x-auth-token":null===(c=localStorage.getItem(""))||void 0===c?void 0:c.token});case 4:r=t.sent,n({type:"USER_REGISTER_SUCCESS"}),console.log(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:"USER_REGISTER_FAILED",payload:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(e))}},children:" Register "}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{style:{color:"black"},href:"/login",children:"Click here to Login"})]})]})})})},_=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(m.a)(a,2),o=s[0],i=s[1],j=Object(l.c)((function(e){return e.loginUserReducer})),p=j.loading,g=j.error,x=Object(l.b)();return Object(c.useEffect)((function(){localStorage.getItem("currentUser")&&(window.location.href="/")}),[]),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"row justify-content-center shadow-lg p-3 mb-5 bg-body rounded mt-5",children:Object(h.jsxs)("div",{className:"col-md-5 mt-5",children:[Object(h.jsx)("h2",{className:"text-center m-2",style:{fontSize:"35px"},children:" LOGIN "}),p&&Object(h.jsx)(v,{}),g&&Object(h.jsx)(f,{error:"Invalid Credintals"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{required:!0,type:"text",placeholder:"Email",className:"form-control",value:n,onChange:function(e){r(e.target.value)}}),Object(h.jsx)("input",{required:!0,type:"password",placeholder:"Password",className:"form-control",value:o,onChange:function(e){i(e.target.value)}}),Object(h.jsx)("button",{className:"btn mt-3 mb-3",onClick:function(){var e={email:n,password:o};console.log(e,"Data for login sent to backend"),x(function(e){return function(){var t=Object(u.a)(d.a.mark((function t(n){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"USER_LOGIN_REQUEST"}),t.prev=1,t.next=4,b.a.post(O+"/api/users/login",e);case 4:c=t.sent,n({type:"USER_LOGIN_SUCCESS",payload:c.data}),localStorage.setItem("currentUser",JSON.stringify(c.data)),window.location.href="/",console.log(c),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),n({type:"USER_LOGIN_FAILED",payload:t.t0});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()}(e))},children:" LOGIN "}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"/register",style:{color:"black"},children:"Click here to Register"})]})]})})})};var R=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{}),Object(h.jsxs)(s.a,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(h.jsx)(o.a,{path:"/register",exact:!0,component:w}),Object(h.jsx)(o.a,{path:"/login",exact:!0,component:_})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},U=n(23),I=n(43),k=n(44),F=n(3),T=Object(U.combineReducers)({getAllFoodReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{food:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FOOD_REQUEST":return Object(F.a)({loading:!0},e);case"GET_FOOD_SUCCESS":case"GET_FOOD_FAILED":return{loading:!1,food:t.payload};default:return e}},registerUserReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,success:!0};case"USER_REGISTER_FAILED":return{loading:!1,success:!1,error:t.payload};default:return e}},loginUserReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN_REQUEST":return{loading:!0};case"USER_LOGIN_SUCCESS":return{loading:!1,success:!0,currentUser:t.payload};case"USER_LOGIN_FAILED":return{loading:!1,success:!1,error:t.payload};default:return e}}}),L={loginUserReducer:{currentUser:localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")):null}},G=Object(k.composeWithDevTools)({}),D=Object(U.createStore)(T,L,G(Object(U.applyMiddleware)(I.a)));a.a.render(Object(h.jsx)(l.a,{store:D,children:Object(h.jsx)(R,{})}),document.getElementById("root")),C()}},[[80,1,2]]]);
//# sourceMappingURL=main.3b989fd6.chunk.js.map