import { isObject } from "./isObject";

/**
 * 合并
 * @param target  合并基准对象
 * @param sources 后续合并对象
 */
export function merge(target: object, ...sources: any[]) {
    if (!sources.length) return target;
    const source: any = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                merge(target[key], source[key]);
            } else {
                Object.assign(
                    target,
                    {
                        [key]: source[key]
                    }
                );
            }
        }
    }
    return merge(target, ...sources);
}