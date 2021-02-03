import { toArray } from "./toArray";
import { each } from "./each";

/**
 * 对象扩展方法
 * @return 合并后的对象
 */
export function extend() {
    var args: any[] = toArray(arguments);
    var dat = args.shift();
    if (dat) {
        if (args.length) {
            while (args.length) {
                const item = args.shift();
                if (item) {
                    each(item, function (val, key) {
                        dat[key] = val;
                    })
                }
            }
        }
        return dat;
    }

    return null;
}