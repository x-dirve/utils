import isUndefined from "./isUndefined";
import isString from "./isString";

/**返回数据 */
type ParseReturn = { [key: string]: any };

/**
 * 解析输入文本，输出带对应 kv 的对象
 * @param str        待处理字符串
 * @param separator  分割符号
 * @param assignment 赋值符号
 * @param ignore     需要排除的数据标识
 * @param decode     是否执行 decode 操作
 */
export default function parseStr(str: string, separator: string = "&", assignment: string | RegExp = /\=(.+)/, ignore: RegExp = /^#/, decode: boolean = true): ParseReturn {
    if (isString(str)) {
        const subject = str.replace(/^\?/, "").split(separator).reduce(
            (res, part) => {
                if (ignore.test(part)) {
                    return res;
                }
                const partArr = part.split(assignment);
                res[partArr[0]] = decode && !isUndefined(partArr[1]) ? decodeURIComponent(partArr[1]) : partArr[1];
                return res;
            }
            , Object.create(null)
        );
        return subject;
    } else {
        return {};
    }
}