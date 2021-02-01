/**
 * 数据类型判断
 * @param  subject 待判断的数据
 * @param  type    数据类型名字
 * @return         判断结果
 */
function is(subject, type) {
    return Object.prototype.toString.call(subject).substr(8, type.length).toLowerCase() === type;
}
/**
 * 是否是数组
 * @param  subject 待判断的数据
 */
function isArray(subject) {
    return Array.isArray(subject);
}
/**
 * 是否是数组
 * @param  subject 待判断的数据
 */
function isObject(subject) {
    return is(subject, "object");
}
/**
 * 是否是字符串
 * @param  subject 待判断的数据
 */
function isString(subject) {
    return is(subject, "string");
}
/**
 * 是否是 null
 * @param  subject 待判断的数据
 */
function isNull(subject) {
    return is(subject, "null");
}
/**
 * 是否是数字
 * @param  subject 待判断的数据
 */
function isNumber(subject) {
    return !isNaN(subject) && is(subject, "number");
}
/**
 * 是否 undefined
 * @param  subject 待判断的数据
 */
function isUndefined(subject) {
    return is(subject, "undefined");
}
/**
 * 是否是函数
 * @param  subject 待判断的数据
 */
function isFunction(subject) {
    return is(subject, "function");
}
/**
 * 是否是布尔值
 * @param  subject 待判断的数据
 */
function isBoolean(subject) {
    return is(subject, "boolean");
}
/**
 * 是否是错误对象
 * @param subject 待判断数据
 */
function isError(subject) {
    return is(subject, "error");
}
/**
 * 是否是正则
 * @param subject 待判断数据
 */
function isRegexp(subject) {
    return is(subject, "regexp");
}

/**
 * 带花括号标签检测正则
 * @type {RegExp}
 */
var labelReplaceExp = /\{(\w+)\}/g;
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
function labelReplace(tpl, data, keep) {
    if ( keep === void 0 ) keep = false;

    return tpl.replace(labelReplaceExp, function (_, key) {
        var re = isObject(data) ? data[key] : data;
        if (isUndefined(re) && keep) {
            return _;
        }
        return re;
    });
}
var A_SLICE = Array.prototype.slice;
/**
 * 是否是数组且长度大于0
 * @param  subject 待判断的数据
 */
function isValidArray(subject) {
    return Array.isArray(subject) && subject.length > 0;
}
/**
 * 伪数组转成数组
 * @param   args 伪数组对象
 * @return       转化后的数组
 */
function toArray(args) {
    return Array.prototype.slice.call(args);
}
/**
 * 通用遍历函数
 * @param  data    待遍历数据
 * @param  handler 处理函数
 * @param  context 作用域
 */
function each(data, handler, context) {
    context = context || this;
    var hasHandler = isFunction(handler);
    if (isArray(data)) {
        for (var i = 0; i < data.length; i++) {
            var re = true;
            if (hasHandler) {
                re = handler.call(context, data[i], i);
            }
            if (re === false) {
                break;
            }
        }
    }
    else if (isObject(data)) {
        var keys = Object.keys(data);
        for (var i$1 = 0; i$1 < keys.length; i$1++) {
            var re$1 = true;
            if (hasHandler) {
                re$1 = handler.call(context, data[keys[i$1]], keys[i$1]);
            }
            if (re$1 === false) {
                break;
            }
        }
    }
}
/**
 * 大写字母匹配正则
 */
var UPPER_CASE_REGEXP = /[A-Z]/g;
/**
 * 转化为蛇形命名
 * @param  str 待处理的字符串
 * @return     处理后的字符串
 */
function toUnderlineName(str) {
    if (isString(str)) {
        return str.replace(UPPER_CASE_REGEXP, function (m, i) { return ("" + (i ? '_' : '') + (m.toLowerCase())); });
    }
    return str;
}
/**
 * 简单复制
 * @param  item 原始数据
 * @return      复制后的数据
 */
function copy(item) {
    return JSON.parse(JSON.stringify(item));
}
/**
 * 格式化数字, 自动补0前续
 * @param  number 要格式化的数字
 * @param  size   格式化后出来的数字位数
 * @return        格式化结果
 */
function fix0(number, size) {
    number = number.toString();
    while ((number).length < size) {
        number = '0' + number;
    }
    return number;
}
/**
 * 数组随机分布
 * @param  arr  原始数组
 * @return      打乱后的数组
 */
function shuffle(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        var rIndex = Math.floor(Math.random() * (i + 1));
        var item = arr[rIndex];
        arr[rIndex] = arr[i];
        arr[i] = item;
    }
    return arr;
}
/**
 * 获取包含指定范围内的随机数
 * @param  max 最大范围(包含)
 * @param  min 最小范围(包含，默认 0)
 * @return     随机数
 */
function random(max, min) {
    if (min === undefined) {
        min = 0;
    }
    return Math.round(Math.random() * (max - min) + min);
}
/**
 * 序列化请求参数
 * @param  query 参数对象
 * @return       参数字符串
 */
function serialize(query, encode) {
    if ( encode === void 0 ) encode = false;

    return Object.keys(query)
        .map(function (key) { return (key + "=" + (encode ? encodeURIComponent(query[key]) : query[key])); })
        .join('&');
}
/**
 * 对象扩展方法
 * @return 合并后的对象
 */
function extend() {
    var args = A_SLICE.call(arguments);
    var dat = args.shift();
    if (dat) {
        if (args.length) {
            while (args.length) {
                var item = args.shift();
                if (item) {
                    each(item, function (val, key) {
                        dat[key] = val;
                    });
                }
            }
        }
        return dat;
    }
    return null;
}
/**
 * 合并
 * @param target  合并基准对象
 * @param sources 后续合并对象
 */
function merge(target) {
    var obj, obj$1;

    var sources = [], len = arguments.length - 1;
    while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];
    if (!sources.length)
        { return target; }
    var source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, ( obj = {}, obj[key] = {}, obj ));
                }
                merge(target[key], source[key]);
            }
            else {
                Object.assign(target, ( obj$1 = {}, obj$1[key] = source[key], obj$1 ));
            }
        }
    }
    return merge.apply(void 0, [ target ].concat( sources ));
}
/**
 * 请求参数对象转成请求参数字符串
 * @param dat 请求参数
 */
function queryString(dat) {
    var queryStr;
    if (dat) {
        queryStr = Object.keys(dat)
            .map(function (key) {
            return (key + "=" + (encodeURIComponent(dat[key])));
        })
            .join('&');
    }
    else {
        queryStr = '';
    }
    return queryStr;
}
/**
 * 时间分割正则
 */
var date_regx = /[^\d]+/;
/**
 * 转换对象为JS Date对象
 * @param   date   <可选> 日期数据(时间戳, 字符串, Date对象, 空)
 * @param   offset 修正偏移的秒数
 * @return         返回JS Date对象 / NULL 日期格式错误
 */
function toDate(date, offset) {
    var ts;
    if (date instanceof Date) {
        ts = date;
    }
    else if (isNumber(date)) {
        ts = new Date(date);
    }
    else if (isNaN(+date)) {
        if (isString(date)) {
            date = date.split(date_regx);
            if (date.length === 3) {
                ts = new Date(+date[0], date[1] - 1, +date[2], 0, 0, 0, 0);
                if (isNaN(+ts)) {
                    ts = null;
                }
            }
        }
        else {
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
        }
        else {
            // 时间偏移(秒数)
            ts.setTime(ts.getTime() + date * 1000);
        }
    }
    if (!isNaN(Number(offset))) {
        ts.setTime(ts.getTime() + offset * 1000);
    }
    return ts;
}
/**
 * 日期格式化格式匹配正则
 */
var format_exp = /[YymndjNwaAghGHisT]/g;
/**
 * 按照指定格式将日期对象或时间戳转化为日期字符串
 * @param  date   日期对象或时间戳
 * @param  format 日期格式
 * @param  offset 修正偏移的秒数
 * @return        日期
 */
function date(date, format, offset) {
    format = format || "Y-m-d H:i:s";
    var timestamp = toDate(date, offset);
    if (timestamp === null) {
        timestamp = new Date();
    }
    return format.replace(format_exp, function format_callback(tag) {
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

export { copy, date, each, extend, fix0, is, isArray, isBoolean, isError, isFunction, isNull, isNumber, isObject, isRegexp, isString, isUndefined, isValidArray, labelReplace, labelReplaceExp, merge, queryString, random, serialize, shuffle, toArray, toDate, toUnderlineName };
//# sourceMappingURL=index.esm.js.map
