(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{97:function(e,n,l){"use strict";l.r(n);var r=l(7),t=l(0),a=l.n(t),o=l(4);function i(){var e=Object(r.a)(["\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    border: 2px solid white;\n    display: ",";\n    li {\n        padding: 16px;\n    }\n\n    li:nth-child(even) {\n        background-color: white;\n        color: black;\n    }\n    "]);return i=function(){return e},e}n.default=function(e){var n=e.moves,l=e.show,r=o.b.ul(i(),l?"block":"none"),t=n.filter(function(e){return 0!==e.version_group_details[0].level_learned_at}).sort(function(e,n){return e.version_group_details[0].level_learned_at-n.version_group_details[0].level_learned_at}),u=n.filter(function(e){return"level-up"!==e.version_group_details[0].move_learn_method.name}),_=function(e){var n=null;return e.version_group_details&&(n=a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Method: ",e.version_group_details[0].move_learn_method.name),"level-up"===e.version_group_details[0].move_learn_method.name?a.a.createElement("p",null,"Level ",e.version_group_details[0].level_learned_at):null)),a.a.createElement("li",{key:e.move.name},e.move.name,n)};return a.a.createElement(r,null,t.map(_),u.map(_))}}}]);
//# sourceMappingURL=6.8bbfc632.chunk.js.map