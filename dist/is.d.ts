/**
 * 数据类型判断
 * @param  subject 待判断的数据
 * @param  type    数据类型名字
 * @return         判断结果
 */
export declare function is(subject: any, type: string): boolean;
/**
 * 是否是数组
 * @param  subject 待判断的数据
 */
export declare function isArray(subject: any): boolean;
/**
 * 是否是数组
 * @param  subject 待判断的数据
 */
export declare function isObject(subject: any): boolean;
/**
 * 是否是字符串
 * @param  subject 待判断的数据
 */
export declare function isString(subject: any): boolean;
/**
 * 是否是 null
 * @param  subject 待判断的数据
 */
export declare function isNull(subject: any): boolean;
/**
 * 是否是数字
 * @param  subject 待判断的数据
 */
export declare function isNumber(subject: any): boolean;
/**
 * 是否 undefined
 * @param  subject 待判断的数据
 */
export declare function isUndefined(subject: any): boolean;
/**
 * 是否 undefined
 * @param  subject 待判断的数据
 */
export declare function isFunction(subject: any): boolean;
/**
 * 是否是布尔值
 * @param  subject 待判断的数据
 */
export declare function isBoolean(subject: any): boolean;
/**
 * 是否是错误对象
 * @param subject 待判断数据
 */
export declare function isError(subject: any): boolean;
/**
 * 是否是正则
 * @param subject 待判断数据
 */
export declare function isRegexp(subject: any): boolean;
