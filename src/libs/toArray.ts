/**
 * 伪数组转成数组
 * @param   args 伪数组对象
 * @return       转化后的数组
 */
export default function toArray<T>(args: any): Array<T> {
    return Array.prototype.slice.call(args);
}