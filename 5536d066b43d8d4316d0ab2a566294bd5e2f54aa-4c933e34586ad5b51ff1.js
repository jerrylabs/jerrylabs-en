(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+U7J":function(e){e.exports=JSON.parse('[{"title":"Final Conflict","codeName":"finalconflict","players":"2","time":"20 minutes","age":"from 12 years","publishYear":"2023","endorsement":"In the year 2500, the last clash of civilizations in human history occurred on a post-apocalyptic Earth. Any hope of reconciliation or dialogue is completely unthinkable. The final conflict has begun.","description":"The culmination of the long-running Super Trooper card series in the form of a standalone expansion with improved rules.","tags":["competetive","action","card","sci-fi","post-apocalyptic"],"images":[],"extLinks":{"bgg":"https://boardgamegeek.com/boardgame/378351/super-trooper-final-conflict"},"status":"comingsoon"},{"title":"KTA: Krack That Auto!","codeName":"kta","players":"2‑6","time":"20‑40 minutes","age":"from 15 years","publishYear":"2021","endorsement":"Steal cars, run from the cops, crash and shoot your rivals to fulfill deals for mafia bosses and rake in the big bucks!","description":"An action card game charting the life of a car dealer in the city of Gangsterburg. From delivering pizzas to robbing banks, and watch out for the cops!","tags":["competetive","action","gangsters","mafia"],"images":["cover.png","game.jpg","cards.jpg","figures.jpg"]},{"title":"Cyborg Mutant Zombie Circus","codeName":"circus","players":"2‑6","time":"30‑60 minut","age":"od 15 let","publishYear":"2020","endorsement":"Simulator of the most famous interplanetary reality show of the future! Win fans across the galaxy by overcoming pitfalls in a crazy but deadly maze.","description":"Competitive sci-fi RPG dungeon crawler card game. As artificial humanoid your goal is to survive and earn the fame and glory in crazy labyrinth full of monsters and traps.","tags":["kompetetivní","sci-fi","rpg","survival","dystopická","humor"],"images":["circus001.jpg","circus002.jpg","circus003.jpg","circus004.jpg","circus005.jpg","circus006.jpg","circus007.jpg","circus008.jpg"],"extLinks":{"bgg":"https://boardgamegeek.com/boardgame/332152/cyborg-mutant-zombie-circus"}},{"title":"Gangsterburg","codeName":"gangsterburg","players":"2‑5","time":"90‑120 minut","age":"od 18 let","publishYear":"2013","endorsement":"As the head of a mafia family, control the pubs, casinos, gambling houses and eventually the entire corrupt city of Gangsterburg - a breeding ground for criminals and subversives.","description":"Board game based on social and political situation. Become the master boss of all mafia families in the Gangsterburg, city full of clubs, brothels, gambling and illegal substancies","tags":["competetive","building","strategy","gangsters","mafia"],"extLinks":{"bgg":"https://boardgamegeek.com/boardgame/332154/gangsterburg"}},{"title":"Super Trooper","codeName":"supertrooper","players":"2‑6","time":"20‑60 minut","age":"od 13 let","publishYear":"2011","endorsement":"As one of several free warlords, defend your country from raiders and megacorporations. A free-to-print remake of the legendary Doomtrooper card game.","description":"Copiable alternative of Doomtrooper trading card game. Defeat the armies of other players in harsh post-capitalist dystopic world!","tags":["competetive","sci-fi","battle","strategy","deck building"],"extLinks":{"bgg":"https://boardgamegeek.com/boardgame/144893/super-trooper","zatrolene":"https://www.zatrolene-hry.cz/spolecenska-hra/super-trooper-3617/"}}]')},"1rhv":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("iJGD"),i=r.n(o);t.a=function(e){var t,r=e.game,o=Object(n.useState)({toggler:!1,slide:1}),c=o[0],s=o[1];return a.a.createElement("div",{className:"gameInfo game__info"},a.a.createElement("div",{className:"gameInfo__fields"},a.a.createElement("div",{className:"gameInfo__field"},a.a.createElement("div",{className:"gameInfo__value"},a.a.createElement("span",{role:"img","aria-labelledby":"lblPls"},"👪")," ",r.players),a.a.createElement("div",{className:"gameInfo__label",id:"lblPls"},"Players")),a.a.createElement("div",{className:"gameInfo__field"},a.a.createElement("div",{className:"gameInfo__value"},a.a.createElement("span",{role:"img","aria-labelledby":"lblTime"},"⏰")," ",r.time),a.a.createElement("div",{className:"gameInfo__label",id:"lblTime"},"Time")),a.a.createElement("div",{className:"gameInfo__field"},a.a.createElement("div",{className:"gameInfo__value"},a.a.createElement("span",{role:"img","aria-labelledby":"lblAge"},"👶")," ",r.age),a.a.createElement("div",{className:"gameInfo__label",id:"lblAge"},"Age"))),r.tags&&a.a.createElement("div",{className:"gameInfo__tags"},r.tags.map((function(e,t){return a.a.createElement("span",{className:"gameInfo__tag",key:t},e)}))),!(null===(t=r.images)||void 0===t||!t.length)&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Galerie"),a.a.createElement("div",{className:"gameInfo__gallery"},a.a.createElement(i.a,{toggler:c.toggler,sources:r.images.map((function(e){return"/images/games/"+r.codeName+"/"+e})),slide:c.slide}),r.images.map((function(e,t){return a.a.createElement("button",{key:t,type:"button",className:"gameInfo__preview",style:{backgroundImage:"url(/images/games/"+r.codeName+"/"+e+")"},onClick:function(){return s({toggler:!c.toggler,slide:t+1})}})})))),r.extLinks&&a.a.createElement("div",{className:"gameInfo__extLinks"},r.extLinks.bgg&&a.a.createElement("a",{href:r.extLinks.bgg,target:"_blank",rel:"noreferrer noopener"},a.a.createElement("img",{className:"bggLogo",src:"/images/bgg.svg",alt:"Profil hry na BoardGameGeek.com"})),r.extLinks.zatrolene&&a.a.createElement("a",{href:r.extLinks.zatrolene,target:"_blank",rel:"noreferrer noopener"},a.a.createElement("img",{className:"zhLogo",src:"/images/zatrolene-hry.png",alt:"Profil hry na ZatroleneHry.cz"}))))}},"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},XDgv:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r("q1tI"),i=(n=o)&&n.__esModule?n:{default:n},c=r("17x9");var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.scriptLoaderId="id"+r.constructor.idCount++,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onError,r=e.onLoad,n=e.url;this.constructor.loadedScripts[n]?r():this.constructor.erroredScripts[n]?t():this.constructor.scriptObservers[n]?this.constructor.scriptObservers[n][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[n]=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},this.scriptLoaderId,this.props),this.createScript())}},{key:"componentWillUnmount",value:function(){var e=this.props.url,t=this.constructor.scriptObservers[e];t&&delete t[this.scriptLoaderId]}},{key:"createScript",value:function(){var e=this,t=this.props,r=t.onCreate,n=t.url,a=t.attributes,o=document.createElement("script");r(),a&&Object.keys(a).forEach((function(e){return o.setAttribute(e,a[e])})),o.src=n,o.hasAttribute("async")||(o.async=1);var i=function(t){var r=e.constructor.scriptObservers[n];Object.keys(r).forEach((function(a){t(r[a])&&delete e.constructor.scriptObservers[n][e.scriptLoaderId]}))};o.onload=function(){e.constructor.loadedScripts[n]=!0,i((function(e){return e.onLoad(),!0}))},o.onerror=function(){e.constructor.erroredScripts[n]=!0,i((function(e){return e.onError(),!0}))},document.body.appendChild(o)}},{key:"render",value:function(){return null}}]),t}(i.default.Component);s.propTypes={attributes:c.PropTypes.object,onCreate:c.PropTypes.func,onError:c.PropTypes.func.isRequired,onLoad:c.PropTypes.func.isRequired,url:c.PropTypes.string.isRequired},s.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},s.scriptObservers={},s.loadedScripts={},s.erroredScripts={},s.idCount=0,t.default=s,e.exports=t.default},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,s,u,l;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(!e(t[s],i[s]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;for(l=t.entries();!(s=l.next()).done;)if(!e(s.value[1],i.get(s.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(t[s]!==i[s])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,u[s]))return!1;if(r&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!t.$$typeof)&&!e(t[u[s]],i[u[s]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},jSZ2:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=(r("XDgv"),function(){return a.a.createElement("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top"},a.a.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),a.a.createElement("input",{type:"hidden",name:"hosted_button_id",value:"RJXN94FPWP28S"}),a.a.createElement("input",{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}),a.a.createElement("img",{alt:"",border:"0",src:"https://www.paypal.com/en_CZ/i/scr/pixel.gif",width:"1",height:"1"}))}),i=function(){return a.a.createElement("div",{className:"donate"},a.a.createElement(o,null))};t.a=function(){var e=Object(n.useState)(!1),t=e[0];e[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",{className:"center"},"Podpořte JerryLabs!"),a.a.createElement(i,null),a.a.createElement("p",{className:"center"},"Nebo ",a.a.createElement("span",{role:"img","aria-label":"darovat"},"🎁")," platbou na účet 1126400055/3030",a.a.createElement("br",null)),!t&&a.a.createElement("img",{src:"/images/ad.jpg",alt:"Zde může být vaše reklama",style:{maxWidth:"100%",margin:"1rem 0 2rem"}}))}},qhky:function(e,t,r){"use strict";(function(e){r("E9XD");var n,a,o,i,c=r("17x9"),s=r.n(c),u=r("8+s/"),l=r.n(u),f=r("bmMU"),p=r.n(f),d=r("q1tI"),m=r.n(d),g=r("YVoz"),h=r.n(g),b="bodyAttributes",y="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",O="href",A="http-equiv",C="innerHTML",S="itemprop",k="name",j="property",_="rel",P="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",x="defer",M="encodeSpecialCharacters",R="onChangeClientState",z="titleTemplate",D=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),q=[T.NOSCRIPT,T.SCRIPT,T.STYLE],Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=$(e,T.TITLE),r=$(e,z);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,N);return t||n||void 0},W=function(e){return $(e,R)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||r===_&&"canonical"===e[r].toLowerCase()||s===_&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==C&&c!==E&&c!==S||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=h()({},n[c],a[c]);n[c]=s}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;se(T.BODY,n),se(T.HTML,a),ce(f,p);var d={baseTag:ue(T.BASE,r),linkTags:ue(T.LINK,o),metaTags:ue(T.META,i),noscriptTags:ue(T.NOSCRIPT,c),scriptTags:ue(T.SCRIPT,u),styleTags:ue(T.STYLE,l)},m={},g={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(g[e]=d[e].oldTags)})),t&&t(),s(e,m,g)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(T.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[m.a.createElement(T.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=le(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===C||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(T.BASE,t,n),bodyAttributes:pe(b,r,n),htmlAttributes:pe(y,a,n),link:pe(T.LINK,o,n),meta:pe(T.META,i,n),noscript:pe(T.NOSCRIPT,c,n),script:pe(T.SCRIPT,s,n),style:pe(T.STYLE,u,n),title:pe(T.TITLE,{title:f,titleAttributes:p},n)}},me=l()((function(e){return{baseTag:V([O,I],e),bodyAttributes:Z(b,e),defer:$(e,x),encode:$(e,M),htmlAttributes:Z(y,e),linkTags:X(T.LINK,[_,O],e),metaTags:X(T.META,[k,w,A,j,S],e),noscriptTags:X(T.NOSCRIPT,[C],e),onChangeClientState:W(e),scriptTags:X(T.SCRIPT,[P,C],e),styleTags:X(T.STYLE,[E],e),title:J(e),titleAttributes:Z(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),ge=(a=me,i=o=function(e){function t(){return B(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return H({},n,((t={})[r.type]=[].concat(n[r.type]||[],[H({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case T.TITLE:return H({},a,((t={})[n.type]=i,t.titleAttributes=H({},o),t));case T.BODY:return H({},a,{bodyAttributes:H({},o)});case T.HTML:return H({},a,{htmlAttributes:H({},o)})}return H({},a,((r={})[n.type]=H({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=H({},t);return Object.keys(e).forEach((function(t){var n;r=H({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(U(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=H({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.a.createElement(a,n)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ge.renderStatic=ge.rewind,t.a=ge}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=5536d066b43d8d4316d0ab2a566294bd5e2f54aa-4c933e34586ad5b51ff1.js.map