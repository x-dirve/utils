/**
 * 大写字母匹配正则
 */
const UPPER_CASE_REGEXP: RegExp = /[A-Z]/g;
export { UPPER_CASE_REGEXP }

/**
 * 带花括号标签检测正则
 * @type {RegExp}
 */
const labelReplaceExp: RegExp = /\{([\w\s]+)\}/g
export { labelReplaceExp }

/**只有一个问号结尾 */
const IS_QM_ONLY_REGEXP = /\?$/;
export { IS_QM_ONLY_REGEXP }

/**
 * 日期格式化格式匹配正则
 */
const FORMAT_REGEXP = /[YymndjNwaAghGHisTM]/g;
export { FORMAT_REGEXP };

/**
 * 时间分割正则
 */
const DATE_REGEXP = /[^\d]+/;
export { DATE_REGEXP };