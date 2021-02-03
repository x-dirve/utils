import"./is.js";import r from"./isNumber.js";import t from"./isNull.js";import s from"./isUndefined.js";function i(i,o,e){if(!r(i))return"0";(s(o)||t(o))&&(o=","),r(e)||(e=3);var f=e,n=(i=i.toString()).indexOf("."),u="";for(-1===n?n=i.length:u=i.substr(n),"-"===i.charAt(0)&&f++;n>f;)n-=e,u=o+i.substr(n,e)+u;return n&&(u=i.substr(0,n)+u),u}export default i;
//# sourceMappingURL=numberFormat.js.map
