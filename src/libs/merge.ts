import isObject from "./isObject";
import isArray from "./isArray";

/**
 * 合并
 * @param target  合并基准对象
 * @param sources 后续合并对象
 */
export default function merge(target: object, ...sources: any[]) {
    if (!sources.length) {
        return target;
    }
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                merge(target[key], source[key]);
            } else if (isArray(source[key])) {
                target[key] = target[key] || [];
                target[key] = target[key].concat(source[key]);
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