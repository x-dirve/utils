import isAsyncFunction from "./isAsyncFunction";
import isFunction from "./isFunction";

/**
 * 是否是可执行函数
 * @param  fn 待判断的数据
 */
export default function isExecutable(fn: unknown) {
    return isFunction(fn) || isAsyncFunction(fn) ? true : false;
}