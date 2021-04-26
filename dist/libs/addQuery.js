import r from"./serialize.js";import"./is.js";import t from"./isObject.js";var i=/\?$/;function e(e,o){var s="";return t(o)&&(s=r(o)),e+(-1!==e.indexOf("?")?i.test(e)?"":"&":"?")+s}export default e;
//# sourceMappingURL=addQuery.js.map
