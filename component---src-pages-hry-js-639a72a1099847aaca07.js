(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+U7J":function(e){e.exports=JSON.parse('[{"title":"Cyborg Mutant Zombie Circus","codeName":"circus","players":"2–6","time":"30–60 minut","age":"od 15 let","description":"Nejslavnější meziplanetární reality show budoucnosti! Získejte přízeň fanoušků po celé Galaxii překonáváním nástrah v bláznivém, ale smrtonosném labyrintu."},{"title":"Gangsterburg","codeName":"gangsterburg","players":"2–5","time":"90-120 minut","age":"od 18 let","description":"Ovládni jako hlava mafiánské rodiny hospody, kasína, hampejzy a nakonec celé zkorumpované město Gangsterburg - semeniště kriminálníků a podvratných živlů."},{"title":"Super Trooper","codeName":"supertrooper","players":"2–8","time":"20–60 minut","age":"od 13 let","description":"Jako jeden z posledních svobodných warlordů ubraň svou zemi před nájezdníky a megakorporacemi prostřednictvím předchystaného nebo ručně sestaveného balíčku."}]')},Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),s=t("TSYQ"),c=t.n(s),o=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1];return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header__homelink"},r.a.createElement("a",{href:"/",className:"logo"},r.a.createElement("img",{src:"/images/logo-jerrylabs-white.png",alt:"Logo","data-pin-nopin":"true"})),r.a.createElement("a",{href:"/",className:"textlogo"},"JerryLabs",r.a.createElement("div",{className:"textlogo__name"},"Ing. Jaroslav Kameň"))),r.a.createElement("nav",null,r.a.createElement("ul",{className:c()("header__navigation",{"header__navigation--mobile-visible":a})},r.a.createElement("li",null,r.a.createElement(l.a,{to:"/weby/",activeClassName:"selected"},r.a.createElement("span",null,"Weby"))),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/hry/",activeClassName:"selected"},r.a.createElement("span",null,"Hry"))),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/kontakt/",activeClassName:"selected"},r.a.createElement("span",null,"Kontakt"))),r.a.createElement("li",null,r.a.createElement("a",{href:"http://jerrylabsgames.com",title:"English version"},r.a.createElement("img",{src:"/images/uk_flag.svg",alt:"English version"}))))),r.a.createElement("button",{onClick:function(){return t(!a)},className:"mobile-menu-icon"},a?r.a.createElement("img",{src:"/images/cross.svg",alt:"Menu"}):r.a.createElement("img",{src:"/images/menu.svg",alt:"Menu"}))))},i=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},"Powered by ",r.a.createElement("a",{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},"GatsbyJS")," and ",r.a.createElement("a",{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},"GitHub Pages")," ❤ ",r.a.createElement("span",{className:"nowrap"},r.a.createElement("span",{className:"copy-left"},"©")," JerryLabs 2013-",(new Date).getFullYear())))};a.a=function(e){var a=e.children;return r.a.createElement("div",null,r.a.createElement(o,null),a,r.a.createElement(i,null))}},TSYQ:function(e,a,t){var n;t("LK8F"),function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===l)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},Wbzz:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("+ZDr"),s=t.n(l);t.d(a,"a",(function(){return s.a}));t("lw3w"),t("emEt").default.enqueue,r.a.createContext({})},hfzS:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),s=t("Bl7J"),c=t("ocAx");a.default=function(){var e=t("+U7J");return r.a.createElement(s.a,null,r.a.createElement(c.a,{title:"Hry od JerryLabs",className:"home zoomy",image:"sisays-ring"}),r.a.createElement("div",{className:"container cards"},e.map((function(e,a){return r.a.createElement(l.a,{key:a,className:"card card--horizontal card--full",to:"/hry/"+e.codeName,title:e.title},r.a.createElement("div",{className:"card__image",style:{backgroundImage:"url(/images/"+e.codeName+".jpg)"}}),r.a.createElement("div",{className:"card__content"},r.a.createElement("h3",{className:"card__title"},e.title),r.a.createElement("p",{className:"card__description brief"},"Pro ",e.players," hráčů ",e.age," ",r.a.createElement("span",{role:"img","aria-label":"Časová náročnost"},"⏰")," ",e.time),r.a.createElement("div",{className:"card__description"},e.description)))}))))}},lw3w:function(e,a,t){var n;e.exports=(n=t("rzlk"))&&n.default||n},ocAx:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n);a.a=function(e){var a=e.title,t=e.image,n=e.className;return r.a.createElement("div",{className:"jumbotron "+(n||"")},r.a.createElement("div",{className:"jumbotron__bg",style:{backgroundImage:"url(/images/"+t+".jpg)"}}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"jumbotron__title"},a)))}},rzlk:function(e,a,t){"use strict";t.r(a);t("91GP");var n=t("q1tI"),r=t.n(n),l=t("IOVJ");a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null}}}]);
//# sourceMappingURL=component---src-pages-hry-js-639a72a1099847aaca07.js.map