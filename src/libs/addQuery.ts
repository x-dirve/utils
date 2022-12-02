import { IS_QM_ONLY_REGEXP } from "./regexps";
import serialize from "./serialize";
import isObject from "./isObject";

/**
 * 往 url 中附加参数
 * @param url   目标 url
 * @param query 需要附加的参数
 */
export default function addQuery(url: string, query: any) {
    var extQueryStr = "";
    if (isObject(query)) {
        extQueryStr = serialize(query);
    }
    return `${url}${url.indexOf("?") !== -1 ? IS_QM_ONLY_REGEXP.test(url) ? "" : "&" : "?"}${extQueryStr}`;
}