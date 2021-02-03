import { isObject } from "./isObject";
import { isUndefined } from "./isUndefined";

/**
 * 带花括号标签检测正则
 * @type {RegExp}
 */
const labelReplaceExp: RegExp = /\{(\w+)\}/g
export { labelReplaceExp }

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
export function labelReplace<T>(tpl: string, data: T, keep: boolean = false): string {
    return tpl.replace(labelReplaceExp, function (_, key) {
        const re = isObject(data) ? data[key] : data;
        if (isUndefined(re) && keep) {
            return _;
        }
        return re;
    })
}