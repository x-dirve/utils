import isString from "./isString";

/**去除一些可能导致 DOMException PARSE ERROR 的字符*/
function sanitizeContent(content: string) {
    content = content.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
    return content;
}

/**尝试使用备用方案复制内容 */
function tryFallbackCopy(content: string) {
    try {
        if (document.execCommand) {
            let input = document.createElement("textarea");
            input.value = content;
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);
            return true;
        }
    } catch (e) {
        console.error(e);
    }
    return false;
}

/**
 * 复制到剪切板
 * @param text              待写入剪切板的内容
 * @param useExecCommand    是否直接使用 execCommand 复制
 */
async function copyToClipboard(text: string, useExecCommand = false) {
    if (!text) {
        return false;
    }
    if (useExecCommand) {
        return tryFallbackCopy(text);
    }
    let hasPermission = true;
    try {
        if (navigator.permissions) {
            const permissionStatus = await navigator.permissions.query({
                // @ts-ignore
                "name": "clipboard-write"
            });
            if (
                permissionStatus.state !== "granted" &&
                permissionStatus.state !== "prompt"
            ) {
                hasPermission = false;
            }
        }
    } catch (_) {
        hasPermission = false;
    }
    try {
        if (navigator.clipboard && hasPermission) {
            await navigator.clipboard.writeText(
                sanitizeContent(text)
            );
            return true;
        } else {
            return tryFallbackCopy(text);
        }
    } catch (e) {
        if (e && isString(e.message) && e.message.toLowerCase().startsWith("write permission denied")) {
            return tryFallbackCopy(text);
        } else {
            console.error(e);
        }
    }
    return false;
}
export default copyToClipboard;