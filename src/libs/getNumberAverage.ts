import getNumberWithDec from "./getNumberWithDec";
/**
 * 获取一组数组中的平均数
 * @param  arr 待处理数组
 * @param  dec 保留精度
 * @return     平均数
 */
export default function getNumberAverage(arr: number[], dec: number) {
    var i = arr.length,
        sum = 0;
    while (i--) {
        sum += arr[i];
    }
    return getNumberWithDec((sum / arr.length), dec);
}