import is from "./is";

/**
 * 是否 undefined
 * @param  subject 待判断的数据
 */
export function isUndefined(subject: any) {
    return is(subject, "undefined");
}