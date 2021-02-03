import getNumberWithDec from "./getNumberWithDec";
import getNumberVariance from "./getNumberVariance";

/**
 * 获取一组数组中的标准差
 * @param  arr  待处理数组
 * @param  dec  保留精度
 * @return      标准差
 */
export default function getStdDeviation(arr: number[], dec: number) {
    var stdDev = Math.sqrt(getNumberVariance(arr, dec));
    return getNumberWithDec(stdDev, dec);
};