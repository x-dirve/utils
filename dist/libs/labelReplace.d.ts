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
export default function labelReplace<T>(tpl: string, data: T, keep?: boolean): string;
