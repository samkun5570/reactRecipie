(this.webpackJsonpreact_js_recepie=this.webpackJsonpreact_js_recepie||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),o=(a(11),a(2)),s=a.n(o),l=a(5),u=a(1),m=(a(13),function(e){var t=e.title,a=e.calories,n=e.img,r=e.ingredients;return c.a.createElement("div",{className:"recepie"},c.a.createElement("h1",null,t),c.a.createElement("img",{src:n,alt:"image of recepi",className:"img"}),c.a.createElement("p",null,"Calories : ",a),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))))}),p=(a(14),function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),o=Object(u.a)(i,2),p=o[0],f=o[1],d=Object(n.useState)("chicken"),h=Object(u.a)(d,2),g=h[0],b=h[1];Object(n.useEffect)((function(){console.log(g),E()}),[g]);var v="https://api.edamam.com/search?q=".concat(g,"&app_id=").concat("da4035b1","&app_key=").concat("e220d30109d1dd3fe4481a865697221d\t"),E=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,f(a.hits),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{className:"searchform",onSubmit:function(e){e.preventDefault(),b(a),r("")}},c.a.createElement("input",{className:"search",type:"text",value:a,onChange:function(e){r(e.target.value)}}),c.a.createElement("button",{className:"searchSubmit",type:"submit"},"Search")),c.a.createElement("div",{className:"content"},p.map((function(e){return c.a.createElement(m,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,img:e.recipe.image,ingredients:e.recipe.ingredients})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.3da6dd29.chunk.js.map