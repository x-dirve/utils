import"./is.js";import"./isObject.js";import"./isFunction.js";import"./isArray.js";import r from"./each.js";function t(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];var n=t.shift();if(n){if(t.length)for(;t.length;){var o=t.shift();o&&r(o,(function(r,t){n[t]=r}))}return n}return null}export default t;
//# sourceMappingURL=extend.js.map
