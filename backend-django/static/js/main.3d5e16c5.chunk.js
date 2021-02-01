(this["webpackJsonpfrontend-react"]=this["webpackJsonpfrontend-react"]||[]).push([[0],{73:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(16),r=n.n(c),i=n(0),o=n(3),l=n(2),d=n.n(l);function m(e){return Object(i.jsxs)("div",{style:{float:"right"},children:[Object(i.jsx)("label",{style:{marginRight:10},children:"Select speed"}),Object(i.jsxs)("select",{id:"video-speed",defaultValue:"x1",onChange:function(e){e.preventDefault();var t=d()("#video-speed :selected").text();document.querySelector("#my-video").playbackRate=parseFloat(t.substring(1))},style:{width:100},children:[Object(i.jsx)("option",{children:"x0.25"}),Object(i.jsx)("option",{children:"x0.5"}),Object(i.jsx)("option",{children:"x0.75"}),Object(i.jsx)("option",{children:"x1"}),Object(i.jsx)("option",{children:"x1.25"}),Object(i.jsx)("option",{children:"x1.5"}),Object(i.jsx)("option",{children:"x1.75"}),Object(i.jsx)("option",{children:"x2"})]})]})}var j=function(e){var t=e.setDisplayChat,n=e.stream;return Object(i.jsxs)("div",{className:"row",style:{marginLeft:25},children:[Object(i.jsxs)("div",{style:{flex:1},children:[Object(i.jsx)("video",{id:"my-video",controls:!0,autoPlay:!0,muted:"muted",className:"video",children:Object(i.jsx)("source",{src:"/static/assets/".concat(n.name,".mp4"),type:"video/mp4"})}),Object(i.jsx)(m,{})]}),Object(i.jsx)("div",{style:{marginLeft:5,marginRight:25},children:Object(i.jsx)("nav",{className:"navbar-light",children:Object(i.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault(),t((function(e){return!e}))},children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})})})})]})},u=n(21);var b=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var s=n[a].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t};function p(e,t,n,a){var s=new XMLHttpRequest,c=JSON.stringify(n);s.responseType="json",s.open(e,window.location.protocol+"//"+window.location.hostname+"/api".concat(t));var r=b("csrftoken");"POST"!==e&&"DELETE"!==e||(s.setRequestHeader("Content-Type","application/json"),s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",r)),s.onload=function(){a(s.response,s.status)},s.send(c)}var O=function(e){var t=e.stream,n=e.currentUser,s=e.socket,c=e.streamRef,r=Object(a.useState)([]),l=Object(o.a)(r,2),m=l[0],j=l[1];Object(a.useEffect)((function(){console.log(t),p("GET","/messages/?action=stream&stream="+t.name,{},(function(e,t){200===t&&j(e)}))}),[t]),Object(a.useEffect)((function(){s.on("ReceiveMessage",(function(e){j((function(t){return[].concat(Object(u.a)(t),[{content:e.content}])})),d()(".message-input input").val(null),d()(".messages").animate({scrollTop:d()("#message-list")[0].scrollHeight},"fast")}))}),[s]),Object(a.useEffect)((function(){d()(".messages").animate({scrollTop:d()("#message-list")[0].scrollHeight},"fast")}),[]);var b=function(){console.log(c.current);var e=d()(".message-input input").val();if(p("POST","/messages/create/",{content:e,stream:c.current.name},(function(e,t){console.log(e)})),""===d.a.trim(e))return!1;j((function(t){return[].concat(Object(u.a)(t),[{content:e,user:n}])})),d()(".message-input input").val(null),d()(".messages").animate({scrollTop:d()("#message-list")[0].scrollHeight},"fast"),s.emit("SendMessage",{content:e,user:n,stream:c.current})};window.addEventListener("keydown",(function(e){e.stopImmediatePropagation(),13===e.which&&b()}));var O=m.map((function(e,t){var a="";return a=null!==n&&"undefined"!==typeof e.user&&e.user.username===n.username?"sent":"replies",Object(i.jsx)("li",{className:a,children:Object(i.jsx)("p",{children:e.content})},t+e.content)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{id:"frame",style:{width:"auto"},children:Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("div",{id:"message-list",className:"messages",children:Object(i.jsx)("ul",{children:O})}),Object(i.jsx)("div",{className:"message-input",children:Object(i.jsxs)("div",{className:"wrap",children:[Object(i.jsx)("input",{type:"text",placeholder:"Write your message..."}),Object(i.jsx)("i",{className:"fa fa-paperclip attachment","aria-hidden":"true"}),Object(i.jsx)("button",{onClick:b,className:"submit",children:Object(i.jsx)("i",{className:"fa fa-paper-plane","aria-hidden":"true"})})]})})]})}),Object(i.jsx)("script",{src:"//production-assets.codepen.io/assets/common/stopExecutionOnTimeout-b2a7b3fe212eaa732349046d8416e00a9dec26eb7fd347590fbced3ab38af52e.js"}),Object(i.jsx)("script",{src:"https://code.jquery.com/jquery-2.2.4.min.js"})]})},f=n(36),h=n.n(f),x=window.location.protocol+"//"+window.location.hostname+":4001";function g(e){var t=e.user;return Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light border-bottom",children:[Object(i.jsx)("button",{className:"btn",id:"menu-toggle",onClick:function(e){e.preventDefault(),d()("#wrapper").toggleClass("toggled")},children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(i.jsxs)("ul",{className:"navbar-nav ml-auto mt-2 mt-lg-0",children:[Object(i.jsxs)("form",{style:{marginRight:30},className:"form-inline my-2 my-lg-0",children:[Object(i.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search lecture","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-secondary my-2 my-sm-0",type:"submit",children:"Search"})]}),Object(i.jsx)("li",{className:"nav-item active",children:Object(i.jsxs)("a",{className:"nav-link",href:null===t?"/login/":"/logout/",children:[null===t?"Login":"Logout",Object(i.jsx)("span",{className:"sr-only",children:"(current)"})]})})]})})]})}function v(e){var t=e.lecture,n=e.setMainStream,s=Object(a.useState)([]),c=Object(o.a)(s,2),r=c[0],l=c[1];Object(a.useEffect)((function(){p("GET","/streams/?action=lecture&lecture="+t.name,{},(function(e,t){200===t&&l(e)}))}),[]);var m=r.map((function(e,t){return Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"accordion-list-item",onClick:function(){p("GET","/streams/?action=stream&stream="+e.name,{},(function(e,t){200===t&&n(e[0]),d()("video")[0].load()}))},href:"#",children:e.name})},e.name+t)}));return Object(i.jsxs)("div",{id:"accordion",className:"my-accordion",children:[Object(i.jsx)("a",{className:"list-group-item list-group-item-action bg-light","data-toggle":"collapse","data-parent":"#accordion",href:"#"+t.name,children:t.name}),Object(i.jsx)("div",{id:t.name,className:"panel-collapse collapse in",children:Object(i.jsx)("div",{className:"panel-body",children:Object(i.jsx)("ul",{className:"accordion-list",children:m})})})]})}function y(e){var t=function(e){return e<10?"0"+e:e};return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]+", "+e.getDate()+". "+["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+" "+e.getFullYear()+", "+t(e.getHours())+":"+t(e.getMinutes())}var N=function(e){var t=Object(a.useState)(!0),n=Object(o.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)([]),m=Object(o.a)(l,2),u=m[0],b=m[1],f=Object(a.useState)(null),N=Object(o.a)(f,2),w=N[0],S=N[1],k=Object(a.useState)(!1),E=Object(o.a)(k,2),T=E[0],C=E[1],R=s.a.useRef(T),D=function(e){R.current=e,C(e)},L=Object(a.useState)(!1),M=Object(o.a)(L,2),q=M[0],G=M[1];q||G(h()(x,{transports:["websocket"]})),Object(a.useEffect)((function(){q.on("SetSocket",(function(e){p("POST","/socket/set/",{socketID:e},(function(e,t){200===t&&console.log(e)}))}))}),[]),Object(a.useEffect)((function(){q.emit("Join",T)}),[T]),Object(a.useEffect)((function(){p("GET","/users/current/",{},(function(e,t){200===t?(S(e),p("GET","/lectures/?action=all",{},(function(e,t){200===t&&b(e)}))):p("GET","/lectures/?action=all",{},(function(e,t){200===t&&b(e)}))})),p("GET","/streams/?action=all",{},(function(e,t){200===t&&D(e[0]),d()("video")[0].load()}))}),[]);var H=u.map((function(e,t){return Object(i.jsx)(v,{lecture:e,setMainStream:D},e.name+t)}));return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"d-flex",id:"wrapper",children:[Object(i.jsxs)("div",{className:"bg-light border-right",id:"sidebar-wrapper",children:[Object(i.jsx)("div",{className:"sidebar-heading",style:{textAlign:"center",marginBottom:40},children:Object(i.jsx)("img",{style:{width:200},src:"/static/assets/img/tum_logo.png"})}),Object(i.jsx)("div",{className:"list-group list-group-mine list-group-flush",children:H})]}),Object(i.jsxs)("div",{id:"page-content-wrapper",children:[Object(i.jsx)(g,{user:w}),Object(i.jsxs)("div",{className:"",style:{marginTop:20,marginBottom:20,textAlign:"center"},children:[T&&Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:T.lecture.name}),Object(i.jsx)("p",{style:{marginBottom:0},children:T.room}),Object(i.jsx)("p",{children:T.lecture.teacher})]}),Object(i.jsxs)("p",{children:[y(new Date(T.time))," : ",T.name]})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:c?"col-sm-9":"",style:c?{}:{flex:1},children:Object(i.jsx)(j,{stream:T,setDisplayChat:r})}),Object(i.jsx)("div",{className:"col-sm-3",style:c?{display:"block"}:{display:"none"},children:T&&Object(i.jsx)(O,{socket:q,streamRef:R,stream:T,currentUser:w})})]})]})]})})};var w=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)(N,{})})};function S(e){var t=e.entries,n=e.img_url,a=e.title,s=e.n_columns,c=t.map((function(e,t){return Object(i.jsx)(k,{apiUrl:e.apiUrl,onClick:e.onClick,displayName:e.displayName,name:e.name,description:e.description,type:e.type,entries:e.entries},t+e.name)}));if(2===s){var r=[],o=[];c.map((function(e,t){return t%2===0?r.push(e):o.push(e),0})),c=Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"col-sm-5",children:r}),Object(i.jsx)("div",{className:"col-sm-5",children:o})]})}return Object(i.jsxs)("div",{className:"col-sm-12",children:[n&&Object(i.jsx)("div",{className:"flash_art",children:Object(i.jsx)("img",{src:n,alt:"GATHR"})}),Object(i.jsx)("div",{className:"unterschrift",children:Object(i.jsx)("p",{children:a})}),c]})}function k(e){var t=e.name,n=e.displayName,s=e.type,c=e.required,r=e.entries,l=e.iconName,d=e.onClick,m=e.apiUrl,j=Object(i.jsx)("label",{className:"",children:n}),u=Object(i.jsx)("input",{name:t,type:s,className:"form-control"});c&&u.setAttribute("required",!0);var b=Object(a.useState)([]),O=Object(o.a)(b,2),f=O[0],h=O[1];Object(a.useEffect)((function(){"dropdown"===s&&"undefined"===typeof r?p("GET",m,{},(function(e,t){200===t&&h(e.map((function(e){return e.name})))})):"dropdown"===s&&h(r)}),[m,r,s]);var x=Object(i.jsx)("div",{});switch(s){case"dropdown":x=Object(i.jsxs)("div",{children:[j,Object(i.jsx)(E,{entries:f,name:t})]});break;case"radio":x=Object(i.jsxs)("div",{children:[u,j]});break;case"checkbox":u=Object(i.jsx)("input",{id:t,name:t,type:s,className:"form-control",onClick:d}),x=Object(i.jsxs)("div",{style:{textAlign:"center"},children:[u,j]});break;case"date":u=Object(i.jsx)("input",{name:t,type:s,className:"form-control",defaultValue:"2020-01-01"}),x=Object(i.jsxs)("div",{children:[j,u]});break;default:x=Object(i.jsxs)("div",{children:[j,u]})}return Object(i.jsxs)("div",{className:"input-group my-form-entry",children:[Object(i.jsx)("span",{className:"input-group-addon",children:l&&Object(i.jsx)("i",{className:"material-icons",children:l})}),Object(i.jsx)("div",{className:"form-group label-floating",children:x})]})}function E(e){var t=e.entries,n=e.onChangeFun,a=e.name;return t.sort(),t=t.map((function(e,t){return Object(i.jsx)("option",{value:e,children:e},e+t)})),Object(i.jsx)("div",{className:"my-form-control",children:Object(i.jsx)("select",{id:a.toLowerCase(),className:"form-control",onChange:n,children:t})})}var T=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),s=n[0],c=n[1];return Object(i.jsx)("div",{className:"container",style:{marginTop:200},children:Object(i.jsxs)("form",{id:"login-form",children:[Object(i.jsx)("h1",{children:"Login"}),Object(i.jsx)(S,{entries:[{name:"username",displayName:"Username",type:"text"},{name:"password",displayName:"Password",type:"password"},{name:"sessionCookie",displayName:"Accept session cookie",type:"checkbox"}]}),Object(i.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(e){e.preventDefault();var t=document.getElementById("login-form"),n=new FormData(t),a={};n.forEach((function(e,t){a[t]=e})),console.log(a),p("POST","/login/",a,(function(e,t){200===t&&(window.location.href="/"),200!==t&&c(!0)}))},children:"Login"}),s&&Object(i.jsx)("p",{style:{color:"red"},children:"Wrong username or password."})]})})};var C=function(e){var t=e.name,n=e.formEntries,s=Object(a.useState)([]),c=Object(o.a)(s,2),r=c[0],l=c[1];Object(a.useEffect)((function(){p("GET","/"+t+"/?action=all",{},(function(e,t){200===t&&l(e)}))}),[]);var m=[{name:t,displayName:"Existing "+t,type:"dropdown",entries:r.map((function(e){return e.name}))}];return Object(i.jsxs)("div",{children:[Object(i.jsxs)("form",{id:t+"-form",children:[Object(i.jsx)("h1",{children:"Manage "+t}),Object(i.jsx)(S,{entries:n}),Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault();var a=document.getElementById(t+"-form"),s=new FormData(a),c={};s.forEach((function(e,t){c[t]=e})),"undefined"!==typeof c.time&&(""!==c.time?c.time=c.date+" "+c.time:c.time=c.date),n.forEach((function(e){"dropdown"===e.type&&(c[e.name]=d()("#"+e.name+" option:selected").val())})),delete c.date,console.log(c),p("POST","/"+t+"/create/",c,(function(e,t){}))},children:"Submit"}),Object(i.jsx)(S,{entries:m})]}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(e){e.preventDefault();var n=d()("#"+t+" option:selected").val();p("POST","/"+t+"/delete/",{name:n},(function(e,t){200===t&&console.log(e),200!==t&&console.log("Error deleting the object")}))},children:"Delete"})]})},R=[{name:"name",displayName:"Stream Title",type:"text"},{name:"room",displayName:"Location",type:"dropdown",entries:["Room 1","Room 2","Room 3","Room 4"]},{name:"date",displayName:"Date",type:"date"},{name:"time",displayName:"Time",type:"time"},{name:"lecture",displayName:"Lecture",type:"dropdown",apiUrl:"/lectures/?action=all"}],D=[{name:"name",displayName:"Lecture name",type:"text"},{name:"semester",displayName:"Semester",type:"dropdown",entries:["WS19/20","SS20","WS20/21"]},{name:"teacher",displayName:"Teacher",type:"text"},{name:"lecture_type",displayName:"Type",type:"dropdown",entries:["Vorlesung","\xdcbung","Tutorium"]}];var L=function(e){return Object(i.jsx)("div",{className:"container",style:{marginTop:50},children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-sm-6",children:Object(i.jsx)(C,{name:"streams",formEntries:R})}),Object(i.jsx)("div",{className:"col-sm-6",children:Object(i.jsx)(C,{name:"lectures",formEntries:D})})]})})},M=s.a.createElement,q=document.getElementById("main-page");q&&r.a.render(M(w,q.dataset),q);var G=document.getElementById("login");G&&r.a.render(M(T,G.dataset),G);var H=document.getElementById("manage");H&&r.a.render(M(L,H.dataset),H)}},[[73,1,2]]]);
//# sourceMappingURL=main.3d5e16c5.chunk.js.map