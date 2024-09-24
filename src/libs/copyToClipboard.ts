/**
 * 复制到剪切板
 * @param text 待写入剪切板的内容
 */
async function copyToClipboard(text: string) {
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(text)
            .then(() => {
                return true;
            })
            .catch(() => {
                return false;
            });
    } else if (document.execCommand) {
        return new Promise<boolean>(res => {
            let input = document.createElement("textarea"); // 使用textarea文本才能换行
            // 设置内容
            input.value = text;
            // 添加临时实例
            document.body.appendChild(input);
            // 选择实例内容
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);
            res(true);
        })
    } else {
        return Promise.reject(new Error("不支持当前环境, 请确定运行的浏览器类型及版本"));
    }    
}

export default copyToClipboard;