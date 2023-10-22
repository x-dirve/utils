import delay from "./delay";

/**
 * 添加页面可操作后的处理逻辑
 * @param timeout 等待超时时间
 */
function ready(timeout: number = 5000) {
    return new Promise<Boolean>((resolve, reject) => {
        var status = false;

        var onDOMLoaded = () => {
            if (status) {
                return;
            }
            status = true;

            // 移除各load监听器
            window.document.removeEventListener("DOMContentLoaded", onDOMLoaded);
            window.removeEventListener("load", onDOMLoaded);

            // @ts-ignore
            beReady = null;
            // @ts-ignore
            onDOMLoaded = null;

            // 调用ready执行监听ready的函数
            setTimeout(function () {
                resolve(true);
            }, 50);
        }

        var beReady = () => {
            // 防止在绑定 document 的 ready 事件监听之前 document 已经触发 ready 事件
            // 文档已经完全加载的时候直接执行
            if (window.document.readyState === "complete") {
                return delay(onDOMLoaded, 1);
            }

            // 还在加载则进行监听
            // 标准浏览器支持此方法
            window.document.addEventListener("DOMContentLoaded", onDOMLoaded);

            // 保险方法：监听win的load事件，这个事件任何情况下都能正常工作
            window.addEventListener("load", onDOMLoaded);
        }

        beReady();

        setTimeout(() => {
            // 移除各load监听器
            window.document.removeEventListener("DOMContentLoaded", onDOMLoaded);
            window.removeEventListener("load", onDOMLoaded);
            // @ts-ignore
            beReady = null;
            // @ts-ignore
            onDOMLoaded = null;
            reject(new Error("Wait for ready timeout"));
        }, timeout);
    });
}

export default ready;