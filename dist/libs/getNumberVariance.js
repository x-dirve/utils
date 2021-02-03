import e from"./getNumberWithDec.js";import r from"./getNumberAverage.js";function t(t,o){for(var m=r(t,o),f=t.length,g=0;f--;)g+=Math.pow(t[f]-m,2);return g/=t.length-1,e(g,o)}export default t;
//# sourceMappingURL=getNumberVariance.js.map
