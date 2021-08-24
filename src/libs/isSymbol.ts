import is from "./is";
/**
 * 是否是 symbol 类型数据
 * @param  subject 待判断的数据
 */
export default function isSymbol(subject: any) {
    return is(subject, "symbol");
}