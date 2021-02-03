import"./is.js";import t from"./isObject.js";function r(i){for(var n,e,o=[],s=arguments.length-1;s-- >0;)o[s]=arguments[s+1];if(!o.length)return i;var a=o.shift();if(t(i)&&t(a))for(var f in a)t(a[f])?(i[f]||Object.assign(i,((n={})[f]={},n)),r(i[f],a[f])):Object.assign(i,((e={})[f]=a[f],e));return r.apply(void 0,[i].concat(o))}export default r;
//# sourceMappingURL=merge.js.map
