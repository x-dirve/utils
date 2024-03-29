import { UPPER_CASE_REGEXP } from "./regexps";
import isString from "./isString";


/**
 * 驼峰转化为蛇形命名
 * @param  str 待处理的字符串
 * @return     处理后的字符串
 */
export default function toUnderlineName(str: string): string {
    if (isString(str)) {
        return str.replace(UPPER_CASE_REGEXP, (m, i) => `${i ? '_' : ''}${m.toLowerCase()}`);
    }
    return str;
}