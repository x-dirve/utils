"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./getNumberWithDec.js"),r=require("./getNumberAverage.js");exports.getNumberVariance=function(t,u){for(var g=r.getNumberAverage(t,u),a=t.length,i=0;a--;)i+=Math.pow(t[a]-g,2);return i/=t.length-1,e.getNumberWithDec(i,u)};
//# sourceMappingURL=getNumberVariance.js.map
