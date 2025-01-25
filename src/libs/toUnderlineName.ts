import isString from "./isString";


/**
 * 驼峰转化为蛇形命名
 * @param  str 待处理的字符串
 * @return     处理后的字符串
 */
export default function toUnderlineName(str: string): string {
    if (isString(str)) {
        return str.replace(/([a-z0-9])([A-Z])/g, "$1_$2")
            .replace(/([A-Z])([A-Z][a-z])/g, "$1_$2")
            .toLowerCase();;
    }
    return str;
}