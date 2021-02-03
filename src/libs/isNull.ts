import is from "./is";

/**
 * 是否是 null
 * @param  subject 待判断的数据
 */
export default function isNull(subject: any) {
    return is(subject, "null")
}