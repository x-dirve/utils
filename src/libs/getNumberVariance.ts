import getNumberWithDec from "./getNumberWithDec";
import getNumberAverage from "./getNumberAverage";

/**
 * 获取一组数组中的方差
 * @param  arr 待处理数组
 * @param  dec 保留精度
 * @return     方差
 */
export default function getNumberVariance(arr: number[], dec: number) {
    var avg = getNumberAverage(arr, dec),
        i = arr.length,
        v = 0;

    while (i--) {
        v += Math.pow((arr[i] - avg), 2);
    }
    v /= (arr.length - 1);
    return getNumberWithDec(v, dec);
}
