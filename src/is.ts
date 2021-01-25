/**
 * 数据类型判断
 * @param  subject 待判断的数据
 * @param  type    数据类型名字
 * @return         判断结果
 */
export function is(subject: any, type: string): boolean {
    return Object.prototype.toString.call(subject).substr(8, type.length).toLowerCase() === type
}

/**
 * 是否是数组
 * @param  subject 待判断的数据
 */
export function isArray(subject: any) {
    return Array.isArray(subject);
}

/**
 * 是否是数组
 * @param  subject 待判断的数据
 */
export function isObject(subject: any) {
    return is(subject, "object");
}

/**
 * 是否是字符串
 * @param  subject 待判断的数据
 */
export function isString(subject: any) {
    return is(subject, "string");
}

/**
 * 是否是 null
 * @param  subject 待判断的数据
 */
export function isNull(subject: any) {
    return is(subject, "null")
}

/**
 * 是否是数字
 * @param  subject 待判断的数据
 */
export function isNumber(subject: any) {
    return !isNaN(subject) && is(subject, "number");
}

/**
 * 是否 undefined
 * @param  subject 待判断的数据
 */
export function isUndefined(subject: any) {
    return is(subject, "undefined");
}

/**
 * 是否是函数
 * @param  subject 待判断的数据
 */
export function isFunction(subject: any) {
    return is(subject, "function");
}

/**
 * 是否是布尔值
 * @param  subject 待判断的数据
 */
export function isBoolean(subject: any) {
    return is(subject, "boolean");
}

/**
 * 是否是错误对象
 * @param subject 待判断数据
 */
export function isError(subject: any) {
    return is(subject, "error");
}

/**
 * 是否是正则
 * @param subject 待判断数据
 */
export function isRegexp(subject: any) {
    return is(subject, "regexp");
}