/**
 * 日期格式化格式匹配正则
 */
declare const FORMAT_REGEXP: RegExp;
export { FORMAT_REGEXP };
/**
 * 按照指定格式将日期对象或时间戳转化为日期字符串
 * @param  date   日期对象或时间戳
 * @param  format 日期格式
 * @param  offset 修正偏移的秒数
 * @return        日期
 */
export declare function date(date: any, format?: string, offset?: number): string;
