/**
 * 数据类型判断
 * @param  subject 待判断的数据
 * @param  type    数据类型名字
 * @return         判断结果
 */
export default function is(subject: any, type: string): boolean {
    return Object.prototype.toString.call(subject).substr(8, type.length).toLowerCase() === type
}