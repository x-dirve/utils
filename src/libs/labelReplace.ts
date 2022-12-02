import { labelReplaceExp } from "./regexps";
import isUndefined from "./isUndefined";
import isObject from "./isObject";

export { labelReplaceExp };

/**
 * 批量替换字符串中带花括号标签为指定数据
 * @param  tpl    待处理的字符串
 * @param  data   替换数据
 * @param  keep   是否保留未能解析的标签
 * @param  remove 是否同时删除已替换的数据字段
 * @return        替换后端字符串
 * @example
 * ```ts
 * labelReplace('{a}/{b}/c', {a: 1, b: 2}) // 1/2/c
 * labelReplace('{a}/{b}/c', {a: 1}, true) // 1/{b}/c
 * ```
 */
export default function labelReplace<T>(tpl: string, data: T, keep: boolean = false, remove: boolean = false): string {
    return tpl.replace(labelReplaceExp, function (_, key: string) {
        key = key.trim();
        const re = isObject(data) ? data[key] : data;
        if (remove && !isUndefined(re)) {
            delete data[key];
        }
        if (isUndefined(re) && keep) {
            return _;
        }
        return re;
    })
}