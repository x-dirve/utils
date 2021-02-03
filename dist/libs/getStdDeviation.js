"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./getNumberWithDec.js");require("./getNumberAverage.js");var r=require("./getNumberVariance.js");exports.getStdDeviation=function(t,u){var i=Math.sqrt(r.getNumberVariance(t,u));return e.getNumberWithDec(i,u)};
//# sourceMappingURL=getStdDeviation.js.map
