import is from "./is";

/**
 * 是否是数组
 * @param  subject 待判断的数据
 */
export default function isObject(subject: any) {
    return is(subject, "object");
}
