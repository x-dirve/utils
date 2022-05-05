/**
 * 延迟一段时间执行方法
 * @param  fn   执行函数
 * @param  wait 延迟时间
 * @param  ext  要传递给延迟执行函数的参数
 * @return      计时器 id
 */
export default function delay(fn: Function, wait: number, ...ext: any[]): ReturnType<typeof setTimeout> {
    return setTimeout(function () {
        return fn.apply(null, ext);
    }, wait);
}