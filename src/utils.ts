import { isFunction, isString, isArray, isObject, isUndefined, isNumber, isNull } from "./is";

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
        const re = isObject(data) ? data[key] : data
        if (isUndefined(re) && keep) {
            return _
        }
        return re
    })
}

const A_SLICE: Function = Array.prototype.slice

/**
 * 是否是数组且长度大于0
 * @param  subject 待判断的数据
 */
export function isValidArray(subject: any): boolean {
    return Array.isArray(subject) && subject.length > 0
}

/**
 * 伪数组转成数组
 * @param   args 伪数组对象
 * @return       转化后的数组
 */
export function toArray<T>(args: T[]): Array<T> {
    return Array.prototype.slice.call(args)
}

/**
 * 通用遍历函数
 * @param  data    待遍历数据
 * @param  handler 处理函数
 * @param  context 作用域
 */
export function each<T>(data: T[] | object, handler: Function, context?: object): void {
    context = context || this
    var hasHandler = isFunction(handler)
    if (isArray(data)) {
        for (let i = 0; i < (data as T[]).length; i++) {
            let re = true
            if (hasHandler) {
                re = handler.call(context, data[i], i)
            }
            if (re === false) {
                break
            }
        }
    } else if (isObject(data)) {
        const keys = Object.keys(data)
        for (let i = 0; i < keys.length; i++) {
            let re = true
            if (hasHandler) {
                re = handler.call(context, data[keys[i]], keys[i])
            }
            if (re === false) {
                break
            }
        }
    }
}

/**
 * 大写字母匹配正则
 */
const UPPER_CASE_REGEXP: RegExp = /[A-Z]/g

/**
 * 转化为蛇形命名
 * @param  str 待处理的字符串
 * @return     处理后的字符串
 */
export function toUnderlineName(str: string): string {
    if (isString(str)) {
        return str.replace(UPPER_CASE_REGEXP, (m, i) => `${i ? '_' : ''}${m.toLowerCase()}`)
    }
    return str
}

/**
 * 简单复制
 * @param  item 原始数据
 * @return      复制后的数据
 */
export function copy<T>(item: T): T {
    return JSON.parse(JSON.stringify(item))
}

/**
 * 格式化数字, 自动补0前续
 * @param  number 要格式化的数字
 * @param  size   格式化后出来的数字位数
 * @return        格式化结果
 */
export function fix0(number, size: number): string {
    number = number.toString()
    while ((number).length < size) {
        number = '0' + number
    }
    return number
}

/**
 * 数组随机分布
 * @param  arr  原始数组
 * @return      打乱后的数组
 */
export function shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i >= 0; i--) {
        const rIndex = Math.floor(Math.random() * (i + 1))
        const item = arr[rIndex]
        arr[rIndex] = arr[i]
        arr[i] = item
    }
    return arr
}

/**
 * 获取包含指定范围内的随机数
 * @param  max 最大范围(包含)
 * @param  min 最小范围(包含，默认 0)
 * @return     随机数
 */
export function random(max: number, min: number): number {
    if (min === undefined) {
        min = 0
    }
    return Math.round(Math.random() * (max - min) + min)
}

/**
 * 序列化请求参数
 * @param  query 参数对象
 * @return       参数字符串
 */
export function serialize(query: object, encode: boolean = false): string {
    return Object.keys(query)
        .map(key => `${key}=${encode ? encodeURIComponent(query[key]) : query[key]}`)
        .join('&');
}

/**
 * 对象扩展方法
 * @return 合并后的对象
 */
export function extend() {
    var args: any[] = A_SLICE.call(arguments)
    var dat = args.shift()
    if (dat) {
        if (args.length) {
            while (args.length) {
                const item = args.shift()
                if (item) {
                    each(item, function (val, key) {
                        dat[key] = val
                    })
                }
            }
        }
        return dat
    }

    return null
}

/**
 * 合并
 * @param target  合并基准对象
 * @param sources 后续合并对象
 */
export function merge(target: object, ...sources: any[]) {
    if (!sources.length) return target
    const source: any = sources.shift()
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                merge(target[key], source[key]);
            } else {
                Object.assign(
                    target,
                    {
                        [key]: source[key]
                    }
                );
            }
        }
    }
    return merge(target, ...sources);
}

/**
 * 请求参数对象转成请求参数字符串
 * @param dat 请求参数
 */
export function queryString(dat: { [key: string]: any }): string {
    let queryStr: string
    if (dat) {
        queryStr = Object.keys(dat)
            .map(key => {
                return `${key}=${encodeURIComponent(dat[key])}`
            })
            .join('&')
    } else {
        queryStr = ''
    }
    return queryStr
}

/**
 * 时间分割正则
 */
const date_regx = /[^\d]+/;

/**
 * 转换对象为JS Date对象
 * @param   date   <可选> 日期数据(时间戳, 字符串, Date对象, 空)
 * @param   offset 修正偏移的秒数
 * @return         返回JS Date对象 / NULL 日期格式错误
 */
export function toDate(date, offset?: number) {
    let ts;
    if (date instanceof Date) {
        ts = date;
    } else if (isNumber(date)) {
        ts = new Date(date);
    } else if (isNaN(+date)) {
        if (isString(date)) {
            date = date.split(date_regx);
            if (date.length === 3) {
                ts = new Date(+date[0], date[1] - 1, +date[2], 0, 0, 0, 0);
                if (isNaN(+ts)) {
                    ts = null;
                }
            }
        } else {
            return null;
        }
    }
    if (!ts) {
        if (!date) {
            return null;
        }
        ts = new Date();
        if (date > 5e8) {
            // 时间戳
            ts.setTime(date * 1000);
        } else {
            // 时间偏移(秒数)
            ts.setTime(ts.getTime() + date * 1000);
        }
    }
    if (!isNaN(Number(offset))) {
        ts.setTime(ts.getTime() + (offset as number) * 1000);
    }
    return ts;
}

/**
 * 日期格式化格式匹配正则
 */
const format_exp = /[YymndjNwaAghGHisT]/g;

/**
 * 按照指定格式将日期对象或时间戳转化为日期字符串
 * @param  date   日期对象或时间戳
 * @param  format 日期格式
 * @param  offset 修正偏移的秒数
 * @return        日期
 */
export function date(date, format?: string, offset?: number): string {
    format = format || "Y-m-d H:i:s";
    let timestamp = toDate(date, offset);
    if (timestamp === null) {
        timestamp = new Date();
    }
    return format.replace(format_exp, function format_callback(tag: string) {
        switch (tag) {
            case "Y": return timestamp.getFullYear();
            case "y": return timestamp.getFullYear() % 100;
            case "m": return fix0(timestamp.getMonth() + 1, 2);
            case "n": return timestamp.getMonth() + 1;
            case "d": return fix0(timestamp.getDate(), 2);
            case "j": return timestamp.getDate();
            case "N": return timestamp.getDay();
            case "w": return timestamp.getDay() % 7;
            case "a": return timestamp.getHours() < 12 ? "am" : "pm";
            case "A": return timestamp.getHours() < 12 ? "AM" : "PM";
            case "g": return timestamp.getHours() % 12 + 1;
            case "h": return fix0(timestamp.getHours() % 12 + 1, 2);
            case "G": return timestamp.getHours();
            case "H": return fix0(timestamp.getHours(), 2);
            case "i": return fix0(timestamp.getMinutes(), 2);
            case "s": return fix0(timestamp.getSeconds(), 2);
            case "T": return Math.round(timestamp.getTime() / 1000);
        }
        return tag;
    });
}

/**
 * 按位数格式化数字
 * @param  val       要格式化的数字
 * @param  separator 分割符
 * @param  size      分割位数间隔
 * @return           格式化完的字符串
 */
export function numberFormat(val:any, separator:string, size:number) {
    if (!isNumber(val)) {
        return "0";
    }
    if (isUndefined(separator) || isNull(separator)) {
        separator = ",";
    }
    if (!isNumber(size)) {
        size = 3;
    }
    var last = size;

    val = val.toString();
    var pos = val.indexOf(".");
    var res = "";
    if (pos === -1) {
        pos = val.length;
    } else {
        res = val.substr(pos);
    }

    if (val.charAt(0) === "-") {
        last++;
    }
    while (pos > last) {
        pos -= size;
        res = separator + val.substr(pos, size) + res;
    }
    if (pos) {
        res = val.substr(0, pos) + res;
    }
    return res;
}