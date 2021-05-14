/**
 * 节流
 * @param fn    回调函数
 * @param delay 延迟时间
 */
export default function throttle(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void;
