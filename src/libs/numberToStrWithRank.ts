import getNumberWithDec from "./getNumberWithDec";

/**
 * 默认的计数单位
 */
const LV = [0, 1000, 1000000, 100000000];

/**
 * 计数单位对应的名称
 */
const RANK = ["", "k", "m", "b"];

/**
 * 格式化数字为带计数单位的字符串
 * @param  val       要格式化的数字
 * @param  precision 要保留的小数点位数
 * @param  lv        计数单位分界列表
 * @param  rank      计数单位名称列表
 * @param  konly     是否只返回第一个等级
 * @return           格式化完的字符串
 */
function numberToStrWithRank(val: number, precision: number = 1, lv: number[] = LV, rank: string[] = RANK, konly?: boolean) {
    var next: number;
    var re: string = "";
    if (konly) {
        re = String(val >= LV[1] ? getNumberWithDec(val / LV[1], precision) + RANK[1] : val);
    } else {
        let value: number = val;
        for (var i = 0; i < lv.length; i++) {
            next = i + 1;
            if (!lv[next] || val >= lv[i] && val < lv[next]) {
                let v = i ? val / lv[i] : val;
                if (i) {
                    value = getNumberWithDec(v, precision);
                }
                break;
            }
        }
        re = value + rank[i];
    }
    return re;
}

export default numberToStrWithRank;