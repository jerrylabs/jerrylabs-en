/*! For license information please see component---src-pages-hry-js-42044af7e34e231e00d9.js.LICENSE.txt */
(self.webpackChunkjerrylabs=self.webpackChunkjerrylabs||[]).push([[608],{4184:function(e,a){var t;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var l=n.apply(null,t);l&&e.push(l)}}else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var i in t)r.call(t,i)&&t[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(a,[]))||(e.exports=t)}()},7750:function(e,a,t){"use strict";var r=t(7294),n=t(1883);a.Z=e=>{let{title:a,image:t,className:s}=e;return r.createElement(r.Fragment,null,"matrix"===t&&r.createElement(n.Xf,{type:"module",src:"/js/matrix/js/main.js"}),r.createElement("div",{className:"jumbotron "+(s||"")},r.createElement("div",{className:"jumbotron__bg",style:{backgroundImage:"url(/images/"+t+".jpg)"}}),r.createElement("div",{className:"container"},r.createElement("h1",{className:"jumbotron__title"},a))))}},1977:function(e,a,t){"use strict";t.d(a,{Z:function(){return m}});var r=t(7294),n=t(1883),s=t(4184),l=t.n(s),i=t(7896);var o=()=>{const{0:e,1:a}=(0,r.useState)(!1);return r.createElement("header",null,r.createElement("div",{className:"container"},r.createElement("div",{className:"header__homelink"},r.createElement("a",{href:"/",className:"logo"},r.createElement("img",{src:"/images/logo-jerrylabs-white.png",alt:"Logo","data-pin-nopin":"true"})),r.createElement("a",{href:"/",className:"textlogo"},"JerryLabs",r.createElement("div",{className:"textlogo__name"},"Ing. Jaroslav Kameň"))),r.createElement("nav",null,r.createElement("ul",{className:l()("header__navigation",{"header__navigation--mobile-visible":e})},r.createElement("li",null,r.createElement(n.rU,{to:"/games/",activeClassName:"selected"},r.createElement("span",null,"Games"))),r.createElement("li",null,r.createElement(n.rU,{to:"/webs/",activeClassName:"selected"},r.createElement("span",null,"Webs"))),r.createElement("li",null,r.createElement(n.rU,{to:"/contact/",activeClassName:"selected"},r.createElement("span",null,"Contact"))),r.createElement("li",null,r.createElement("a",{href:"http://www.jerrylabs.cz"+(t=i.globalHistory.location.pathname,t.replace("contact","kontakt").replace("games","hry").replace("webs","weby").replace("license","licence").replace("jerrylabs.games.com","jerrylabs.cz")),title:"Czech version",className:"localization"},r.createElement("img",{src:"/images/cz_flag.svg",alt:"Czech version"}))))),r.createElement("button",{onClick:()=>a(!e),className:"mobile-menu-icon"},e?r.createElement("img",{src:"/images/cross.svg",alt:"Menu"}):r.createElement("img",{src:"/images/menu.svg",alt:"Menu"}))));var t},c=()=>r.createElement("footer",null,r.createElement("div",{className:"container"},"Powered by ",r.createElement("a",{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},"GatsbyJS")," and ",r.createElement("a",{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},"GitHub Pages")," ❤ ",r.createElement("span",{className:"nowrap"},r.createElement("span",{className:"copy-left"},"©")," JerryLabs 2013-",(new Date).getFullYear()))),m=e=>{let{children:a,className:t}=e;return r.createElement("div",{className:t||null},r.createElement(o,null),a,r.createElement(c,null))}},5972:function(e,a,t){"use strict";t.r(a);var r=t(7294),n=t(1883),s=t(1977),l=t(7750);a.default=()=>{const e=t(6603);return r.createElement(s.Z,null,r.createElement(l.Z,{title:"Hry od JerryLabs",className:"zoomy",image:"sisays-ring"}),r.createElement("div",{className:"container"},r.createElement("p",{className:"big center"},"V JerryLabs vyrábíme zábavné kopírovatelné společenské deskové hry. Všechny vydané hry jsou k dispozici zdarma ke stažení a vytisknutí pod licencí ",r.createElement(n.rU,{to:"/licence/"},"CC BY-NC-ND"),". Hry je možné nekomerčně šířit a kopírovat nebo si ji u nás můžete ",r.createElement("a",{href:"https://www.firmy.cz/sluzby/nabidka/vyroba-deskove-hry-12865086-174"},"nechat vyrobit"),".")),r.createElement("div",{className:"container cards small"},e.map(((e,a)=>r.createElement(n.rU,{key:a,className:"card card--horizontal card--full"+(null!=e&&e.status?" label "+e.status:""),to:"/hry/"+e.codeName,title:e.title},r.createElement("div",{className:"card__image",style:{backgroundImage:"url(/images/"+e.codeName+".jpg)"}}),r.createElement("div",{className:"card__content"},r.createElement("h3",{className:"card__title"},e.title),r.createElement("p",{className:"card__description brief"},"Pro ",e.players," hráčů ",e.age," ",r.createElement("span",{role:"img","aria-label":"Časová náročnost"},"⏰")," ",e.time),r.createElement("div",{className:"card__description"},e.description)))))))}},6603:function(e){"use strict";e.exports=JSON.parse('[{"title":"Final Conflict","codeName":"finalconflict","players":"2","time":"20 minutes","age":"from 12 years","publishYear":"2023","endorsement":"In the year 2500, the last clash of civilizations in human history occurred on a post-apocalyptic Earth. Any hope of reconciliation or dialogue is completely unthinkable. The final conflict has begun.","description":"The culmination of the long-running Super Trooper card series in the form of a standalone expansion with improved rules.","tags":["competetive","action","card","sci-fi","post-apocalyptic"],"images":[],"extLinks":{"bgg":"https://boardgamegeek.com/boardgame/378351/super-trooper-final-conflict"},"status":"comingsoon"},{"title":"KTA: Krack That Auto!","codeName":"kta","players":"2‑6","time":"20‑40 minutes","age":"from 15 years","publishYear":"2021","endorsement":"Steal cars, run from the cops, crash and shoot your rivals to fulfill deals for mafia bosses and rake in the big bucks!","description":"An action card game charting the life of a car dealer in the city of Gangsterburg. From delivering pizzas to robbing banks, and watch out for the cops!","tags":["competetive","action","gangsters","mafia"],"images":["cover.png","game.jpg","cards.jpg","figures.jpg"]},{"title":"Cyborg Mutant Zombie Circus","codeName":"circus","players":"2‑6","time":"30‑60 minut","age":"od 15 let","publishYear":"2020","endorsement":"Simulator of the most famous interplanetary reality show of the future! Win fans across the galaxy by overcoming pitfalls in a crazy but deadly maze.","description":"Competitive sci-fi RPG dungeon crawler card game. As artificial humanoid your goal is to survive and earn the fame and glory in crazy labyrinth full of monsters and traps.","tags":["kompetetivní","sci-fi","rpg","survival","dystopická","humor"],"images":["circus001.jpg","circus002.jpg","circus003.jpg","circus004.jpg","circus005.jpg","circus006.jpg","circus007.jpg","circus008.jpg"],"extLinks":{"bgg":"https://boardgamegeek.com/boardgame/332152/cyborg-mutant-zombie-circus"}},{"title":"Gangsterburg","codeName":"gangsterburg","players":"2‑5","time":"90‑120 minut","age":"od 18 let","publishYear":"2013","endorsement":"As the head of a mafia family, control the pubs, casinos, gambling houses and eventually the entire corrupt city of Gangsterburg - a breeding ground for criminals and subversives.","description":"Board game based on social and political situation. Become the master boss of all mafia families in the Gangsterburg, city full of clubs, brothels, gambling and illegal substancies","tags":["competetive","building","strategy","gangsters","mafia"],"extLinks":{"bgg":"https://boardgamegeek.com/boardgame/332154/gangsterburg"}},{"title":"Super Trooper","codeName":"supertrooper","players":"2‑6","time":"20‑60 minut","age":"od 13 let","publishYear":"2011","endorsement":"As one of several free warlords, defend your country from raiders and megacorporations. A free-to-print remake of the legendary Doomtrooper card game.","description":"Copiable alternative of Doomtrooper trading card game. Defeat the armies of other players in harsh post-capitalist dystopic world!","tags":["competetive","sci-fi","battle","strategy","deck building"],"extLinks":{"bgg":"https://boardgamegeek.com/boardgame/144893/super-trooper","zatrolene":"https://www.zatrolene-hry.cz/spolecenska-hra/super-trooper-3617/"}}]')}}]);
//# sourceMappingURL=component---src-pages-hry-js-42044af7e34e231e00d9.js.map