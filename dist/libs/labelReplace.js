import"./is.js";import r from"./isObject.js";import e from"./isUndefined.js";var t=/\{(\w+)\}/g;function i(i,o,n,d){return void 0===n&&(n=!1),void 0===d&&(d=!1),i.replace(t,(function(t,i){var f=r(o)?o[i]:o;return d&&!e(f)&&delete o[i],e(f)&&n?t:f}))}export default i;export{t as labelReplaceExp};
//# sourceMappingURL=labelReplace.js.map
