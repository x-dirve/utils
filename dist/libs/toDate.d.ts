/**
 * 时间分割正则
 */
declare const DATE_REGEXP: RegExp;
export { DATE_REGEXP };
/**
 * 转换对象为JS Date对象
 * @param   date   <可选> 日期数据(时间戳, 字符串, Date对象, 空)
 * @param   offset 修正偏移的秒数
 * @return         返回JS Date对象 / NULL 日期格式错误
 */
export default function toDate(date: any, offset?: number): any;
