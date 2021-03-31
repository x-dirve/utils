import extend from "./extend";

/**Cookie 配置 */
interface CookieOption {
    /**cookie 生效地址 */
    path?: string;

    /**过期时间 */
    expires?: number;
}

/**过期 */
const EXP_STR = "Thu, 01 Jan 1970 00:00:00 GMT";

const DEF_CONFIG = {
    "path": "/"
}

/**
 * cookie写操作，过期时间单位(s)
 * @param name   cookie key
 * @param value  cookie value
 * @param config cookie 配置
 */
function set(name: string, value, config: CookieOption) {
    config = extend(
        {}
        , DEF_CONFIG
        ,config || {}
    );

    var cookie = [`${name}=${value}`];
    Object.keys(config).forEach(function (key) {
        if (key === "expires" && config.expires) {
            return cookie.push("expires=" + new Date(+new Date() + config.expires * 24 * 3600 * 1000).toUTCString());
        }
        cookie.push(
            `${key}=${config[key] || ""}`
        );
    });
    document.cookie = cookie.join("; ");
}
export { set };

/**
 * 获取指定的 cookie
 * @param name cookie 名称
 */
function get(name:string) {
    return document.cookie.replace(new RegExp(".*(?:^|; )" + name + "=([^;]*).*|.*"), "$1");
}
export { get }

/**
 * 删除 cookie
 * @param name 要删除的 cookie 名称
 * @param path 生效路径
 */
function remove(name: string, path: string) {
    path = path || "/";
    var value = get(name);
    if (value) {
        return document.cookie = `${name}=${value}; expires=${EXP_STR}; path=${path}`;
    }
}
export { remove }

export default {
    get
    , set
    , remove
}