(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{92:function(e,n,l){"use strict";l.r(n);var r=l(0),a=l.n(r);n.default=function(e){var n=e.moves,l=n.filter(function(e){return 0!==e.version_group_details[0].level_learned_at}).sort(function(e,n){return e.version_group_details[0].level_learned_at-n.version_group_details[0].level_learned_at}),r=n.filter(function(e){return"level-up"!==e.version_group_details[0].move_learn_method.name}),t=function(e){var n=null;return e.version_group_details&&(n=a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Method: ",e.version_group_details[0].move_learn_method.name),"level-up"===e.version_group_details[0].move_learn_method.name?a.a.createElement("p",null,"Level ",e.version_group_details[0].level_learned_at):null)),a.a.createElement("li",{key:e.move.name},e.move.name,n)};return a.a.createElement(a.a.Fragment,null,l.map(t),r.map(t))}}}]);
//# sourceMappingURL=5.c1f74b43.chunk.js.map