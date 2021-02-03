import { isNumber } from "./isNumber";
import { isString } from "./isString";

/**
 * 时间分割正则
 */
const DATE_REGEXP = /[^\d]+/;
export { DATE_REGEXP };

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
            date = date.split(DATE_REGEXP);
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