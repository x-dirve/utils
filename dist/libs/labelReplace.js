"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("./is.js");var e=require("./isObject.js"),r=require("./isUndefined.js"),i=/\{(\w+)\}/g;exports.labelReplace=function(s,t,n){return void 0===n&&(n=!1),s.replace(i,(function(i,s){var u=e.isObject(t)?t[s]:t;return r.isUndefined(u)&&n?i:u}))},exports.labelReplaceExp=i;
//# sourceMappingURL=labelReplace.js.map
