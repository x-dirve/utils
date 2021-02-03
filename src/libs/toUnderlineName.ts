import { isString } from "./isString";

/**
 * 大写字母匹配正则
 */
const UPPER_CASE_REGEXP: RegExp = /[A-Z]/g;

export { UPPER_CASE_REGEXP }

/**
 * 转化为蛇形命名
 * @param  str 待处理的字符串
 * @return     处理后的字符串
 */
export function toUnderlineName(str: string): string {
    if (isString(str)) {
        return str.replace(UPPER_CASE_REGEXP, (m, i) => `${i ? '_' : ''}${m.toLowerCase()}`);
    }
    return str;
}