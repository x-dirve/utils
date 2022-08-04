import isFunction from "./isFunction";
import isArray from "./isArray";
import random from "./random";

/**睡眠时间范围 */
type SleepRange = [min: number, max: number];

/**
* 休眠随机时间
* @param time 随机时间范围
* @property min 最小时间(ms)
* @property max 最大时间(ms)
*/
async function sleep(time: SleepRange, logger: unknown): Promise<boolean>
/**
 * 休眠
 * @param time 休眠时间(ms)
 */
async function sleep(time: number, logger: unknown): Promise<boolean>
async function sleep(time: any, logger: any): Promise<boolean> {
    const delay: number = isArray(time) ? random(time[1], time[0]) : time as number;
    if (logger && isFunction(logger.log)) {
        logger.log(`Sleep ${delay} ms`);
    }
    return await new Promise(function (res) {
        setTimeout(function () {
            res(true);
        }, delay);
    });
}

export default sleep;