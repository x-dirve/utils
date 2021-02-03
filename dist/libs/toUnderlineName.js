"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("./is.js");var e=require("./isString.js"),r=/[A-Z]/g;exports.UPPER_CASE_REGEXP=r,exports.toUnderlineName=function(t){return e.isString(t)?t.replace(r,(function(e,r){return(r?"_":"")+e.toLowerCase()})):t};
//# sourceMappingURL=toUnderlineName.js.map
