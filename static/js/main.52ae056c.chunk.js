(this.webpackJsonpreact_js_recepie=this.webpackJsonpreact_js_recepie||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/title.64fdb5b9.svg"},14:function(e,t,a){e.exports=a(48)},19:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},26:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),i=(a(19),a(6)),s=a.n(i),o=a(11),m=a(3),u=a(2),p=(a(21),function(e){var t=e.title,a=e.calories,n=e.img,c=e.ingredients,l=e.url,i=e.healthLabels,s=(e.digest,e.totalTime);return r.a.createElement("article",{className:"recepie"},r.a.createElement("header",{className:"card-header"},t),r.a.createElement(u.a,null,r.a.createElement("img",{src:n,alt:" ",className:"imgClass"})),r.a.createElement("pr",null,"Calories : ",a.toFixed(0),"  Time : ",s),r.a.createElement("pr",null,r.a.createElement("a",{href:l,style:{padding:"5px"}},"Source")),i.map((function(e){return r.a.createElement("pr",{key:e},e)})),r.a.createElement("ul",{className:"ingrediants"},c.map((function(e){return r.a.createElement("li",{key:e},e.text)}))))}),d=(a(22),a(4)),h=a(12),E=a.n(h),g=(a(26),function(e){var t=e.title,a=e.calories,n=e.img,c=e.ingredients,l=e.url,i=e.healthLabels,s=(e.digest,e.totalTime);e.closedetail;return r.a.createElement("article",{className:"recepie"},r.a.createElement("header",{className:"card-header"},t),r.a.createElement(u.a,null,r.a.createElement("img",{src:n,alt:" ",className:"imgClass"})),r.a.createElement("pr",null,"Calories : ",a.toFixed(0),"  Time : ",s),r.a.createElement("pr",null,r.a.createElement("a",{href:l,style:{padding:"5px"}},"Source")),i.map((function(e){return r.a.createElement("pr",{key:e},e)})),r.a.createElement("ul",{className:"ingrediants"},c.map((function(e){return r.a.createElement("li",{key:e},e.text)}))))}),f=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),i=Object(m.a)(l,2),h=i[0],f=i[1],b=Object(n.useState)([]),v=Object(m.a)(b,2),y=v[0],j=v[1],k=Object(n.useState)("desert"),N=Object(m.a)(k,2),x=N[0],O=N[1],w=Object(n.useState)(""),T=Object(m.a)(w,2),S=T[0],C=T[1];Object(n.useEffect)((function(){Object(d.trackPromise)(_())}),[x]);var L=Object(d.usePromiseTracker)().promiseInProgress,_=function(){var e=Object(o.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(""),e.prev=1,e.next=4,fetch("https://api.edamam.com/search?q=".concat(x,"&app_id=").concat("da4035b1","&app_key=").concat("e220d30109d1dd3fe4481a865697221d\t"));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,console.log("recipieData",a),j(a.hits),a.hits.length<=0?C("Nothing to show"):C(""),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),C("Error Not able to connect");case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:E.a,alt:"Title"})," ",r.a.createElement("div",{className:"flip"},r.a.createElement("div",null,r.a.createElement("div",null,"Eat")),r.a.createElement("div",null,r.a.createElement("div",null,"Eat")),r.a.createElement("div",null,r.a.createElement("div",null,"Repeat"))))),r.a.createElement("form",{className:"searchform",onSubmit:function(e){e.preventDefault(),O(a),c("")}},r.a.createElement("input",{className:"search",type:"text",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("button",{className:"searchSubmit",type:"submit",title:"click to search for the given query"},r.a.createElement("p",{className:"text1"},"Search"))),r.a.createElement("p",null,S),L?null:r.a.createElement("section",{className:"content"},"undefined"!=typeof h.title?r.a.createElement(g,{key:h.label,title:h.label,calories:h.calories,img:h.image,ingredients:h.ingredients,url:h.url,totalTime:h.totalTime,digest:h.digest,healthLabels:h.healthLabels,closedetail:function(){f({})}}):y.map((function(e){return r.a.createElement(p,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,img:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url,totalTime:e.recipe.totalTime,digest:e.recipe.digest,healthLabels:e.recipe.healthLabels,onClick:function(){return f(e.recipe)}})}))))},b=a(13),v=a.n(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=function(e){var t=Object(d.usePromiseTracker)().promiseInProgress;return console.log("in fetching"),t&&r.a.createElement("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(v.a,{type:"BallTriangle",color:"#2BAD60",height:"100",width:"100"}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null),r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.52ae056c.chunk.js.map