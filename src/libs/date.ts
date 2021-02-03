import { toDate } from "./toDate";
import { fix0 } from "./fix0";

/**
 * 日期格式化格式匹配正则
 */
const FORMAT_REGEXP = /[YymndjNwaAghGHisT]/g;
export { FORMAT_REGEXP };

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
    return format.replace(FORMAT_REGEXP, function formatCallback(tag: string) {
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