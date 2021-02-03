/**
 * 简单复制
 * @param  item 原始数据
 * @return      复制后的数据
 */
export function copy<T>(item: T): T {
    return JSON.parse(JSON.stringify(item));
}