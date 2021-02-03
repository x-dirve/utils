import { isFunction } from "./isFunction";
import { isObject } from "./isObject";
import { isArray } from "./isArray";

/**
 * 通用遍历函数
 * @param  data    待遍历数据
 * @param  handler 处理函数
 * @param  context 作用域
 */
export function each(data: any[] | object, handler: Function, context?: object): void {
    context = context || this;
    var hasHandler = isFunction(handler);
    if (isArray(data)) {
        for (let i = 0; i < (data as any[]).length; i++) {
            let re = true;
            if (hasHandler) {
                re = handler.call(context, data[i], i);
            }
            if (re === false) {
                break;
            }
        }
    } else if (isObject(data)) {
        const keys = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
            let re = true;
            if (hasHandler) {
                re = handler.call(context, data[keys[i]], keys[i]);
            }
            if (re === false) {
                break;
            }
        }
    }
}