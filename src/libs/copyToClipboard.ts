/**
 * 复制到剪切板
 * @param text 待写入剪切板的内容
 */
async function copyToClipboard(text: string) {
    if (!navigator || !navigator.clipboard) {

        return Promise.reject(new Error("不支持当前环境, 请确定运行的浏览器类型及版本"));
    }
    return navigator.clipboard.writeText(text)
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
}

export default copyToClipboard;