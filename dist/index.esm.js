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
function isObject(subject) {
    return is(subject, "object");
}

/**
 * 是否 undefined
 * @param  subject 待判断的数据
 */
function isUndefined(subject) {
    return is(subject, "undefined");
}

/**
 * 带花括号标签检测正则
 * @type {RegExp}
 */
var labelReplaceExp = /\{(\w+)\}/g;
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
function labelReplace(tpl, data, keep, remove) {
    if ( keep === void 0 ) keep = false;
    if ( remove === void 0 ) remove = false;

    return tpl.replace(labelReplaceExp, function (_, key) {
        var re = isObject(data) ? data[key] : data;
        if (remove && !isUndefined(re)) {
            delete data[key];
        }
        if (isUndefined(re) && keep) {
            return _;
        }
        return re;
    });
}

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
 * 是否是函数
 * @param  subject 待判断的数据
 */
function isFunction(subject) {
    return is(subject, "function");
}

/**
 * 是否是数组
 * @param  subject 待判断的数据
 */
function isArray(subject) {
    return Array.isArray(subject);
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
 * 对象扩展方法
 * @return 合并后的对象
 */
function extend() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

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
    if (!sources.length) {
        return target;
    }
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
 * 是否是字符串
 * @param  subject 待判断的数据
 */
function isString(subject) {
    return is(subject, "string");
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
        number = "0" + number;
    }
    return number;
}

/**
 * 是否是数字
 * @param  subject 待判断的数据
 */
function isNumber(subject) {
    return !isNaN(subject) && is(subject, "number");
}

/**
 * 是否是 null
 * @param  subject 待判断的数据
 */
function isNull(subject) {
    return is(subject, "null");
}

/**
 * 按位数格式化数字
 * @param  val       要格式化的数字
 * @param  separator 分割符
 * @param  size      分割位数间隔
 * @return           格式化完的字符串
 */
function numberFormat(val, separator, size) {
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
    }
    else {
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
var DATE_REGEXP = /[^\d]+/;
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
            date = date.split(DATE_REGEXP);
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
var FORMAT_REGEXP = /[YymndjNwaAghGHisTM]/g;
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
    return format.replace(FORMAT_REGEXP, function formatCallback(tag) {
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
            case "M": return fix0(timestamp.getMilliseconds(), 3);
        }
        return tag;
    });
}

/**
 * 是否是正则
 * @param subject 待判断数据
 */
function isRegexp(subject) {
    return is(subject, "regexp");
}

/**
 * 是否是错误对象
 * @param subject 待判断数据
 */
function isError(subject) {
    return is(subject, "error");
}

/**
 * 是否是布尔值
 * @param  subject 待判断的数据
 */
function isBoolean(subject) {
    return is(subject, "boolean");
}

/**
 * 是否是 symbol 类型数据
 * @param  subject 待判断的数据
 */
function isSymbol(subject) {
    return is(subject, "symbol");
}

/**
 * 浮点数字精度处理
 * @param  num   待处理数字
 * @param  dec   精度
 * @return       处理后的数字
 */
function getNumberWithDec(num, dec) {
    var pow10s = Math.pow(10, dec || 0);
    return (dec) ? Math.round(pow10s * num) / pow10s : num;
}

/**
 * 获取一组数组中的平均数
 * @param  arr 待处理数组
 * @param  dec 保留精度
 * @return     平均数
 */
function getNumberAverage(arr, dec) {
    var i = arr.length, sum = 0;
    while (i--) {
        sum += arr[i];
    }
    return getNumberWithDec((sum / arr.length), dec);
}

/**
 * 获取一组数组中的方差
 * @param  arr 待处理数组
 * @param  dec 保留精度
 * @return     方差
 */
function getNumberVariance(arr, dec) {
    var avg = getNumberAverage(arr, dec), i = arr.length, v = 0;
    while (i--) {
        v += Math.pow((arr[i] - avg), 2);
    }
    v /= (arr.length - 1);
    return getNumberWithDec(v, dec);
}

/**
 * 获取一组数组中的标准差
 * @param  arr  待处理数组
 * @param  dec  保留精度
 * @return      标准差
 */
function getStdDeviation(arr, dec) {
    var stdDev = Math.sqrt(getNumberVariance(arr, dec));
    return getNumberWithDec(stdDev, dec);
}

/**
 * 解析输入文本，输出带对应 kv 的对象
 * @param str        待处理字符串
 * @param separator  分割符号
 * @param assignment 赋值符号
 * @param ignore     需要排除的数据标识
 * @param decode     是否执行 decode 操作
 */
function parseStr(str, separator, assignment, ignore, decode) {
    if ( separator === void 0 ) separator = "&";
    if ( assignment === void 0 ) assignment = "=";
    if ( ignore === void 0 ) ignore = /^#/;
    if ( decode === void 0 ) decode = true;

    if (isString(str)) {
        var subject = str.replace(/^\?/, "").split(separator).reduce(function (res, part) {
            if (ignore.test(part)) {
                return res;
            }
            var partArr = part.split(assignment);
            res[partArr[0]] = decode && !isUndefined(partArr[1]) ? decodeURIComponent(partArr[1]) : partArr[1];
            return res;
        }, Object.create(null));
        return subject;
    }
    else {
        return {};
    }
}

/**只有一个问号结尾 */
var IS_QM_ONLY_REGEXP = /\?$/;
/**
 * 往 url 中附加参数
 * @param url   目标 url
 * @param query 需要附加的参数
 */
function addQuery(url, query) {
    var extQueryStr = "";
    if (isObject(query)) {
        extQueryStr = serialize(query);
    }
    return ("" + url + (url.indexOf("?") !== -1 ? IS_QM_ONLY_REGEXP.test(url) ? "" : "&" : "?") + extQueryStr);
}

/**过期 */
var EXP_STR = "Thu, 01 Jan 1970 00:00:00 GMT";
var DEF_CONFIG = {
    "path": "/"
};
/**
 * cookie写操作，过期时间单位(s)
 * @param name   cookie key
 * @param value  cookie value
 * @param config cookie 配置
 */
function set(name, value, config) {
    config = extend({}, DEF_CONFIG, config || {});
    var cookie = [(name + "=" + value)];
    Object.keys(config).forEach(function (key) {
        if (key === "expires" && config.expires) {
            return cookie.push("expires=" + new Date(+new Date() + config.expires * 24 * 3600 * 1000).toUTCString());
        }
        cookie.push((key + "=" + (config[key] || "")));
    });
    document.cookie = cookie.join("; ");
}
/**
 * 获取指定的 cookie
 * @param name cookie 名称
 */
function get(name) {
    return document.cookie.replace(new RegExp(".*(?:^|; )" + name + "=([^;]*).*|.*"), "$1");
}
/**
 * 删除 cookie
 * @param name 要删除的 cookie 名称
 * @param path 生效路径
 */
function remove(name, path) {
    path = path || "/";
    var value = get(name);
    if (value) {
        return document.cookie = name + "=" + value + "; expires=" + EXP_STR + "; path=" + path;
    }
}
var cookie = {
    get: get,
    set: set,
    remove: remove
};

/**
 * 是否是函数
 * @param  subject 待判断的数据
 */
function isAsyncFunction(subject) {
    return is(subject, "asyncfunction");
}

/**
 * 节流
 * @param fn    回调函数
 * @param delay 延迟时间
 */
function throttle(fn, delay) {
    var timer;
    return function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

/**
 * 将某些 js 数据类型上的原始方法转化为可直接调用的函数
 * @param origin 需要处理的原始函数
 * @example
 * ```ts
 * const slice = cakk(Array.prototype.slice);
 * slice([1,2,3], -1) // [3]
 * ```
 */
function cakk(fn) {
    return Reflect.apply(Function.prototype.bind, Function.prototype.call, [fn]);
}

export { addQuery, cakk, cookie, copy, date, each, extend, fix0, getNumberAverage, getNumberVariance, getNumberWithDec, getStdDeviation, is, isArray, isAsyncFunction, isBoolean, isError, isFunction, isNull, isNumber, isObject, isRegexp, isString, isSymbol, isUndefined, isValidArray, labelReplace, labelReplaceExp, merge, numberFormat, parseStr, queryString, random, serialize, shuffle, throttle, toArray, toDate, toUnderlineName };
//# sourceMappingURL=index.esm.js.map
