(this.webpackJsonpreact_js_recepie=this.webpackJsonpreact_js_recepie||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),l=(a(11),a(2)),s=a.n(l),o=a(5),m=a(1),u=(a(13),function(e){var t=e.title,a=e.calories,n=e.img,r=e.ingredients;return c.a.createElement("article",{className:"recepie"},c.a.createElement("header",{className:"card-header"},t),c.a.createElement("img",{src:n,alt:" ",className:"imgClass"}),c.a.createElement("p",null,"Calories : ",a.toFixed(0)),c.a.createElement("ol",{className:"ingrediants"},r.map((function(e){return c.a.createElement("li",null,e.text)}))))}),d=(a(14),function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),l=Object(m.a)(i,2),d=l[0],p=l[1],f=Object(n.useState)(""),h=Object(m.a)(f,2),E=h[0],v=h[1];Object(n.useEffect)((function(){console.log(E),g()}),[E]);var b="https://api.edamam.com/search?q=".concat(E,"&app_id=").concat("da4035b1","&app_key=").concat("e220d30109d1dd3fe4481a865697221d\t"),g=function(){var e=Object(o.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,p(a.hits),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},"Foodinator",c.a.createElement("div",{className:"flip"},c.a.createElement("div",null,c.a.createElement("div",null,"dinner")),c.a.createElement("div",null,c.a.createElement("div",null,"lunch")),c.a.createElement("div",null,c.a.createElement("div",null,"breakfast")))),c.a.createElement("form",{className:"searchform",onSubmit:function(e){e.preventDefault(),v(a),r("")}},c.a.createElement("input",{className:"search",type:"text",value:a,onChange:function(e){r(e.target.value)}}),c.a.createElement("button",{className:"searchSubmit",type:"submit"},"Search")),c.a.createElement("section",{className:"content"},d.map((function(e){return c.a.createElement(u,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,img:e.recipe.image,ingredients:e.recipe.ingredients})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.d7a5aff5.chunk.js.map