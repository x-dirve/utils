import is from "./is";

/**
 * 是否是函数
 * @param  subject 待判断的数据
 */
export default function isFunction(subject: any) {
    return is(subject, "function");
}