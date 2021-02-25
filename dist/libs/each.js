import"./is.js";import r from"./isObject.js";import i from"./isFunction.js";import t from"./isArray.js";function o(o,a,e){e=e||this;var f=i(a);if(t(o))for(var s=0;s<o.length;s++){var l=!0;if(f&&(l=a.call(e,o[s],s)),!1===l)break}else if(r(o))for(var m=Object.keys(o),c=0;c<m.length;c++){var j=!0;if(f&&(j=a.call(e,o[m[c]],m[c])),!1===j)break}}export default o;
//# sourceMappingURL=each.js.map
