/**
 * 浮点数字精度处理
 * @param  num   待处理数字
 * @param  dec   精度
 * @return       处理后的数字
 */
export default function getNumberWithDec(num: number, dec: number) {
    var pow10s = Math.pow(10, dec || 0);
    return (dec) ? Math.round(pow10s * num) / pow10s : num;
}
