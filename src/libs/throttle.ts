/**
 * 节流
 * @param fn    回调函数
 * @param delay 延迟时间
 */
export default function throttle(fn: (...args: any[]) => void, delay: number) {
    var timer: ReturnType<typeof setTimeout>;
    return function (...args: any[]) {
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    }
}