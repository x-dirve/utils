import"./is.js";import"./isNumber.js";import"./isString.js";import e from"./toDate.js";import r from"./fix0.js";var t=/[YymndjNwaAghGHisTM]/g;function s(s,n,u){n=n||"Y-m-d H:i:s";var a=e(s,u);return null===a&&(a=new Date),n.replace(t,(function(e){switch(e){case"Y":return a.getFullYear();case"y":return a.getFullYear()%100;case"m":return r(a.getMonth()+1,2);case"n":return a.getMonth()+1;case"d":return r(a.getDate(),2);case"j":return a.getDate();case"N":return a.getDay();case"w":return a.getDay()%7;case"a":return a.getHours()<12?"am":"pm";case"A":return a.getHours()<12?"AM":"PM";case"g":return a.getHours()%12+1;case"h":return r(a.getHours()%12+1,2);case"G":return a.getHours();case"H":return r(a.getHours(),2);case"i":return r(a.getMinutes(),2);case"s":return r(a.getSeconds(),2);case"T":return Math.round(a.getTime()/1e3);case"M":return r(a.getMilliseconds(),3)}return e}))}export default s;export{t as FORMAT_REGEXP};
//# sourceMappingURL=date.js.map
