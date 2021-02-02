'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 浮点数字精度处理
 * @param  num   待处理数字
 * @param  dec   精度
 * @return       处理后的数字
 */
function getNumberWithDec(num, dec) {
    var pow10s = Math.pow(10, dec || 0);
    return (dec) ? Math.round(pow10s * num) / pow10s : num;
}
/**
 * 获取一组数组中的平均数
 * @param  arr 待处理数组
 * @param  dec 保留精度
 * @return     平均数
 */
function gettNumberAverage(arr, dec) {
    var i = arr.length, sum = 0;
    while (i--) {
        sum += arr[i];
    }
    return getNumberWithDec((sum / arr.length), dec);
}
/**
 * 获取一组数组中的方差
 * @param  arr 待处理数组
 * @param  dec 保留精度
 * @return     方差
 */
function gettNumberVariance(arr, dec) {
    var avg = gettNumberAverage(arr, dec), i = arr.length, v = 0;
    while (i--) {
        v += Math.pow((arr[i] - avg), 2);
    }
    v /= (arr.length - 1);
    return getNumberWithDec(v, dec);
}
/**
 * 获取一组数组中的标准差
 * @param  arr  待处理数组
 * @param  dec  保留精度
 * @return      标准差
 */
function getStdDeviation(arr, dec) {
    var stdDev = Math.sqrt(gettNumberVariance(arr, dec));
    return getNumberWithDec(stdDev, dec);
}

exports.getNumberWithDec = getNumberWithDec;
exports.getStdDeviation = getStdDeviation;
exports.gettNumberAverage = gettNumberAverage;
exports.gettNumberVariance = gettNumberVariance;
//# sourceMappingURL=math.js.map
