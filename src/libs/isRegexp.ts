import is from "./is";

/**
 * 是否是正则
 * @param subject 待判断数据
 */
export default function isRegexp(subject: any) {
    return is(subject, "regexp");
}