/**
 * 数组随机分布
 * @param  arr  原始数组
 * @return      打乱后的数组
 */
export function shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i >= 0; i--) {
        const rIndex = Math.floor(Math.random() * (i + 1));
        const item = arr[rIndex];
        arr[rIndex] = arr[i];
        arr[i] = item;
    }
    return arr;
}