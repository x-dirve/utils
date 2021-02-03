/**
 * 获取包含指定范围内的随机数
 * @param  max 最大范围(包含)
 * @param  min 最小范围(包含，默认 0)
 * @return     随机数
 */
export default function random(max: number, min: number): number {
    if (min === undefined) {
        min = 0;
    }
    return Math.round(Math.random() * (max - min) + min);
}