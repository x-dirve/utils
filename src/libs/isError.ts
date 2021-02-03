import is from "./is";

/**
 * 是否是错误对象
 * @param subject 待判断数据
 */
export function isError(subject: any) {
    return is(subject, "error");
}