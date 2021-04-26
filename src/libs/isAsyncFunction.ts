import is from "./is";

/**
 * 是否是函数
 * @param  subject 待判断的数据
 */
export default function isAsyncFunction(subject: any) {
    return is(subject, "asyncfunction");
}