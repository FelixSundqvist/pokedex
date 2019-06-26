(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{89:function(e,n,t){"use strict";t.r(n);var a=t(7),r=t(0),c=t.n(r),i=t(4),l=t(21),o=t(39);function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,r=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);a=!0);}catch(o){r=!0,c=o}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(){var e=Object(a.a)(["\n        padding: 8px;\n        border: 2px solid black;\n        border-radius: 1vw;\n        width: 25px;\n        height: 10px;\n        margin: 8px;\n        color: white;\n        text-transform: uppercase;\n        font-family: sans-serif;\n    "]);return s=function(){return e},e}var m=function(e){var n=e.type,t=i.b.span(s()),a="#BFBCB6";switch(n){case"bug":a="#9EAC24";break;case"dark":a="#2A241F";break;case"dragon":a="#6C5CBA";break;case"electric":a="#E19E1E";break;case"fairy":a="#EDA7EF";break;case"fighting":a="#603228";break;case"fire":a="#CE340C";break;case"flying":a="#6879CF";break;case"ghost":a="#444364";break;case"grass":a="#467127";break;case"ground":a="#937D52";break;case"ice":a="#72D6EF";break;case"normal":a="#BFBCB6";break;case"poison":a="#884D88";break;case"psychic":a="#D84C7B";break;case"rock":a="#998444";break;case"steel":a="#827F8C";break;case"water":a="#3C8FDC";break;default:a="white"}return c.a.createElement(t,{style:{backgroundColor:a}},n)},f=t(38);function p(){var e=Object(a.a)(["\npadding: 16px;\nbackground-color: white;\ncolor: black;\n\nfont-family: sans-serif;"]);return p=function(){return e},e}var b=i.b.div(p()),d=function(e){return c.a.createElement(b,null,e.children)};function k(){var e=Object(a.a)(["\n        height: 100px;\n        background-image: ",";\n        background-repeat: no-repeat;\n        background-size: contain;\n        background-position: 50% 50%;\n    "]);return k=function(){return e},e}var h=function(e){var n=i.b.div(k(),"url(".concat(e.imageLink,")"));return c.a.createElement(n,{name:e.imageLink})};function v(){var e=Object(a.a)(["\n        margin: 16px;\n        padding: 16px;\n        background-color: ",";\n        border-radius: 16px;\n        color: white;\n        border: none;\n        text-transform: capitalize;\n    "]);return v=function(){return e},e}var g=Object(i.c)(function(e){var n=i.b.button(v(),e.theme.palette.secondary);return c.a.createElement(n,{onClick:e.onClick},e.children)}),E=function(e){var n=function(e){switch(e){case"hp":return"#FF5959";case"attack":return"#F5AC78";case"defense":return"#FAE078";case"special-attack":return"#9DB7F5";case"special-defense":return"#A7DB8D";case"speed":return"#FA92B2";default:return"white"}},t=e.stats.map(function(e,t){return c.a.createElement("div",{key:"stat"+t},c.a.createElement("p",{style:{color:n(e.stat.name)}},e.stat.name),c.a.createElement("p",null,e.base_stat))});return c.a.createElement("div",null,c.a.createElement("h3",null,"Base Stats"),t)},y=t(50),C=t(40),x=t(35);function w(){var e=Object(a.a)(["\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n        color: black;\n    "]);return w=function(){return e},e}var j=function(e){var n=e.evoChain;if(!n.chain)return null;var t=n.baby_trigger_item?c.a.createElement("p",null,n.baby_trigger_item):null,a=i.b.div(w()),r=function e(n){var t=function(e,n){return[].concat(Object(y.a)(e),[n])}(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n);if(n.evolves_to&&n.evolves_to.length>=1)for(var a=0;a<n.evolves_to.length;a++)t.push.apply(t,Object(y.a)(e(n.evolves_to[a])));return t}(n.chain).map(function(n){return c.a.createElement(C.a,{onClick:e.onClick,key:n.species.name,id:Object(x.b)(n.species.url),name:n.species.name})});return c.a.createElement("div",null,c.a.createElement("h4",null,"Evolution Chain"),t,c.a.createElement(a,null,r))};function O(){var e=Object(a.a)(["\n        min-height: 100%;\n        width: 100%;\n        color: white;\n        text-transform: capitalize;\n    "]);return O=function(){return e},e}var F=c.a.memo(function(e){var n=e.selectedPokemon,t=e.pokedexInfo,a=(e.theme,e.evoChain),l=e.evolutionClick,o=u(Object(r.useState)("http://felixsundqvist.org/pokemon/".concat(n.name,".gif")),2),s=o[0],p=o[1],b=t.flavor_text_entries,k=t.varieties,v=t.habitat,y=(n.moves,n.height),C=n.weight,w=n.abilities,F=n.stats,_=i.b.div(O()),A={pokemonGenus:null,types:null,size:null,habitat:null,formes:null,abilities:null,description:null,moves:null,stats:null,evolutionChain:null},B=b?b.filter(function(e){return"en"===e.language.name})[0]:null,D=t.genera?t.genera.filter(function(e){return"en"===e.language.name})[0]:null;A.types=n.types?c.a.createElement("div",{key:"types"},n.types.map(function(e){return c.a.createElement(m,{key:e.type.name,type:e.type.name})})):null,A.pokemonGenus=D?c.a.createElement("h3",{key:"genus"},Object(x.a)(D.genus)):null,A.formes=k&&k.length>1?c.a.createElement("div",{key:"forms"},c.a.createElement("h3",null,"Formes"),k.map(function(e){return c.a.createElement(g,{key:e.pokemon.name,onClick:function(){return p("http://felixsundqvist.org/pokemon/"+e.pokemon.name+".gif")}},e.pokemon.name)})):null,A.abilities=w?c.a.createElement(c.a.Fragment,{key:"abilities"},c.a.createElement("h5",null,"Abilities"),c.a.createElement(d,null,w.map(function(e){return c.a.createElement("span",{key:e.ability.name},e.ability.name," ",c.a.createElement("br",null))}))):null,A.description=B?c.a.createElement(c.a.Fragment,{key:"description"},c.a.createElement("h5",null,"Dex Entry"),c.a.createElement(d,null,c.a.createElement("p",null,B.flavor_text))):c.a.createElement("div",{key:"loading"},"LOADING"),A.size=y&&C?c.a.createElement("p",{key:"size"},"Height: ".concat(Object(x.c)(y,.1)," m"),c.a.createElement("br",null),"Weight: ".concat(Object(x.c)(C,.1)," kg")):null,A.evolutionChain=a?c.a.createElement(j,{onClick:l,key:"evo chain",evoChain:a}):null,A.habitat=v?c.a.createElement("p",{key:"habitat"},v.name):null,A.stats=F?c.a.createElement(E,{key:"stats",stats:F}):null;var I=Object.keys(A).map(function(e){return A[e]});return c.a.createElement(_,null,c.a.createElement(h,{imageLink:s}),c.a.createElement("h2",null,n.name),I,c.a.createElement(f.a,null,"Add To Team"))}),_=Object(i.c)(F),A=t(20),B=t(6),D=t(41);function I(){var e=Object(a.a)(["\n        height: 100%;\n        width: 100%;\n    "]);return I=function(){return e},e}var P=c.a.memo(function(e){e.theme;var n=e.selectedPokemon,t=e.pokedexInfo,a=e.isLoadingCurrent,l=e.match,u=e.history,s=e.fetchSelectedPokemon,m=e.fetchEvoChain,f=e.evoChain;Object(r.useEffect)(function(){s(l.params.id)},[s,l]),Object(r.useEffect)(function(){t.evolution_chain&&t&&m(t.evolution_chain.url)},[t,m]);var p=i.b.div(I()),b=a?c.a.createElement(A.a,null):c.a.createElement(_,{pokedexInfo:t,selectedPokemon:n,evoChain:f,evolutionClick:function(e){return u.push("/id="+e)}});return c.a.createElement(D.a,null,c.a.createElement(p,null,c.a.createElement(o.a,null,b)))});n.default=Object(l.b)(function(e){return{selectedPokemonId:e.selectedPokemonId,selectedPokemon:e.selectedPokemon,pokedexInfo:e.pokedexInfo,isLoadingCurrent:e.isLoadingCurrent,evoChain:e.evolutionChain}},function(e){return{fetchSelectedPokemon:function(n){return e({type:B.c,id:n})},fetchEvoChain:function(n){return e({type:B.f,evoChainURL:n})}}})(Object(i.c)(P))}}]);
//# sourceMappingURL=3.c5cbf484.chunk.js.map