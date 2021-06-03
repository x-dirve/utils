/**
 * 将某些 js 数据类型上的原始方法转化为可直接调用的函数
 * @param origin 需要处理的原始函数
 */
export default function cakk<T = any>(origin: Function): T;
