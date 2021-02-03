import { isUndefined } from "./isUndefined";
import { isNumber } from "./isNumber";
import { isNull } from "./isNull";

/**
 * 按位数格式化数字
 * @param  val       要格式化的数字
 * @param  separator 分割符
 * @param  size      分割位数间隔
 * @return           格式化完的字符串
 */
export function numberFormat(val: any, separator: string, size: number) {
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