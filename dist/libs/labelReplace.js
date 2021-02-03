import"./is.js";import r from"./isObject.js";import t from"./isUndefined.js";var e=/\{(\w+)\}/g;function i(i,o,n){return void 0===n&&(n=!1),i.replace(e,(function(e,i){var f=r(o)?o[i]:o;return t(f)&&n?e:f}))}export default i;export{e as labelReplaceExp};
//# sourceMappingURL=labelReplace.js.map
