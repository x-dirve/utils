import is from "./is";

/**
 * 是否是数字
 * @param  subject 待判断的数据
 */
export function isNumber(subject: any) {
    return !isNaN(subject) && is(subject, "number");
}