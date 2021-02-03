import is from "./is";

/**
 * 是否是正则
 * @param subject 待判断数据
 */
export function isRegexp(subject: any) {
    return is(subject, "regexp");
}