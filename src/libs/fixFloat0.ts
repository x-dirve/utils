/**
 * 小数点补充 0 至保留位数
 * @param num 待处理的数字
 * @param size 保留位数
 */
export default function fixFloat0(num: number, size: number) {
    let str = String(num);
    if (str.indexOf(".") !== -1) {
        let parts = str.split(".");
        while (parts[1].length < size) {
            parts[1] = parts[1] + "0";
        }
        return parts.join(".");
    }
    return num;
}