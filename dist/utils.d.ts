/**
 * 带花括号标签检测正则
 * @type {RegExp}
 */
declare const labelReplaceExp: RegExp;
export { labelReplaceExp };
/**
 * 批量替换字符串中带花括号标签为指定数据
 * @param  tpl  待处理的字符串
 * @param  data 替换数据
 * @param  keep 是否保留未能解析的标签
 * @return      替换后端字符串
 * @example
 * ```tsx
 * labelReplace('{a}/{b}/c', {a: 1, b: 2}) // 1/2/c
 * labelReplace('{a}/{b}/c', {a: 1}, true) // 1/{b}/c
 * ```
 */
export declare function labelReplace<T>(tpl: string, data: T, keep?: boolean): string;
/**
 * 是否是数组且长度大于0
 * @param  subject 待判断的数据
 */
export declare function isValidArray(subject: any): boolean;
/**
 * 伪数组转成数组
 * @param   args 伪数组对象
 * @return       转化后的数组
 */
export declare function toArray<T>(args: T[]): Array<T>;
/**
 * 通用遍历函数
 * @param  data    待遍历数据
 * @param  handler 处理函数
 * @param  context 作用域
 */
export declare function each<T>(data: T[] | object, handler: Function, context?: object): void;
/**
 * 转化为蛇形命名
 * @param  str 待处理的字符串
 * @return     处理后的字符串
 */
export declare function toUnderlineName(str: string): string;
/**
 * 简单复制
 * @param  item 原始数据
 * @return      复制后的数据
 */
export declare function copy<T>(item: T): T;
/**
 * 格式化数字, 自动补0前续
 * @param  number 要格式化的数字
 * @param  size   格式化后出来的数字位数
 * @return        格式化结果
 */
export declare function fix0(number: any, size: number): string;
/**
 * 数组随机分布
 * @param  arr  原始数组
 * @return      打乱后的数组
 */
export declare function shuffle<T>(arr: T[]): T[];
/**
 * 获取包含指定范围内的随机数
 * @param  max 最大范围(包含)
 * @param  min 最小范围(包含，默认 0)
 * @return     随机数
 */
export declare function random(max: number, min: number): number;
/**
 * 序列化请求参数
 * @param  query 参数对象
 * @return       参数字符串
 */
export declare function serialize(query: object, encode?: boolean): string;
/**
 * 对象扩展方法
 * @return 合并后的对象
 */
export declare function extend(): any;
/**
 * 合并
 * @param target  合并基准对象
 * @param sources 后续合并对象
 */
export declare function merge(target: object, ...sources: any[]): any;
/**
 * 请求参数对象转成请求参数字符串
 * @param dat 请求参数
 */
export declare function queryString(dat: object): string;
/**
 * 转换对象为JS Date对象
 * @param   date   <可选> 日期数据(时间戳, 字符串, Date对象, 空)
 * @param   offset 修正偏移的秒数
 * @return         返回JS Date对象 / NULL 日期格式错误
 */
export declare function toDate(date: any, offset?: number): any;
/**
 * 按照指定格式将日期对象或时间戳转化为日期字符串
 * @param  date   日期对象或时间戳
 * @param  format 日期格式
 * @param  offset 修正偏移的秒数
 * @return        日期
 */
export declare function date(date: any, format?: string, offset?: number): string;
