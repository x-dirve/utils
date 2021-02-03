import is from "./is";
/**
 * 是否是字符串
 * @param  subject 待判断的数据
 */
export default function isString(subject: any) {
    return is(subject, "string");
}