import getNumberWithDec from "./getNumberWithDec";
import fixFloat0 from "./fixFloat0";
import isString from "./isString";

/**
 * 金额转成元(人民币)
 * @param val       原始金额
 * @param lv        转化等级
 * @param precision 保留小数点精度
 */
function toYuan(val: string | number, lv: number = 100, precision: number = 2) {
    let value: number;
    if (isString(val)) {
        value = Number(val);
    } else {
        value = val as number;
    }
    value = getNumberWithDec(value / lv, precision);
    return fixFloat0(value, precision);
}
export default toYuan;