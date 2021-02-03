import"./is.js";import r from"./isString.js";var t=/[A-Z]/g;function e(e){return r(e)?e.replace(t,(function(r,t){return(t?"_":"")+r.toLowerCase()})):e}export default e;export{t as UPPER_CASE_REGEXP};
//# sourceMappingURL=toUnderlineName.js.map
