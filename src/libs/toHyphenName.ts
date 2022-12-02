import { UPPER_CASE_REGEXP } from "./regexps";
import isString from "./isString";

/**
 * 小驼峰转化为连字符命名
 * @param  str 待处理的字符串
 * @return     处理后的字符串
 */
export default function toHyphenName(str: string) {
    if (isString(str)) {
        return str.replace(UPPER_CASE_REGEXP, (m, i) => `${i ? "-" : ""}${m.toLowerCase()}`);
    }
    return str;
}