import"./is.js";import"./isNumber.js";import"./isString.js";import e from"./toDate.js";import r from"./fix0.js";var t=/[YymndjNwaAghGHisT]/g;function s(s,u,a){u=u||"Y-m-d H:i:s";var n=e(s,a);return null===n&&(n=new Date),u.replace(t,(function(e){switch(e){case"Y":return n.getFullYear();case"y":return n.getFullYear()%100;case"m":return r(n.getMonth()+1,2);case"n":return n.getMonth()+1;case"d":return r(n.getDate(),2);case"j":return n.getDate();case"N":return n.getDay();case"w":return n.getDay()%7;case"a":return n.getHours()<12?"am":"pm";case"A":return n.getHours()<12?"AM":"PM";case"g":return n.getHours()%12+1;case"h":return r(n.getHours()%12+1,2);case"G":return n.getHours();case"H":return r(n.getHours(),2);case"i":return r(n.getMinutes(),2);case"s":return r(n.getSeconds(),2);case"T":return Math.round(n.getTime()/1e3)}return e}))}export default s;export{t as FORMAT_REGEXP};
//# sourceMappingURL=date.js.map
