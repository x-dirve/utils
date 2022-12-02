import each from "./each";

/**
 * 对象扩展方法
 * @return 合并后的对象
 */
export default function extend(...args) {
    var dat = args.shift();
    if (dat) {
        if (args.length) {
            while (args.length) {
                const item = args.shift();
                if (item) {
                    each(item, function (val, key) {
                        dat[key] = val;
                    });
                }
            }
        }
        return dat;
    }

    return null;
}