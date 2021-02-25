import serialize from "./serialize";
import isObject from "./isObject";

export default function addQuery(url:string, query:any) {
    var extQueryStr = "";
    if (isObject(query)) {
       extQueryStr = serialize(query); 
    }
    return `${url}${url.indexOf("?") !== -1 ? "&" : "?"}${extQueryStr}`;
}