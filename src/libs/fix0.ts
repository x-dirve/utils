/**
 * 格式化数字, 自动补0前续
 * @param  number 要格式化的数字
 * @param  size   格式化后出来的数字位数
 * @return        格式化结果
 */
export default function fix0(number, size: number): string {
    number = number.toString();
    while ((number).length < size) {
        number = "0" + number;
    }
    return number;
}