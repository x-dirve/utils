import"./is.js";import"./isFunction.js";import"./isObject.js";import"./isArray.js";import r from"./each.js";import t from"./toArray.js";function i(){var i=t(arguments),o=i.shift();if(o){if(i.length)for(;i.length;){var s=i.shift();s&&r(s,(function(r,t){o[t]=r}))}return o}return null}export default i;
//# sourceMappingURL=extend.js.map
