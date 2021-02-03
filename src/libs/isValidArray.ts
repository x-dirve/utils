/**
 * 是否是数组且长度大于0
 * @param  subject 待判断的数据
 */
export function isValidArray(subject: any): boolean {
    return Array.isArray(subject) && subject.length > 0;
}