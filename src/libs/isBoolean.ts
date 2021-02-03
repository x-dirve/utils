import is from "./is";

/**
 * 是否是布尔值
 * @param  subject 待判断的数据
 */
export default function isBoolean(subject: any) {
    return is(subject, "boolean");
}