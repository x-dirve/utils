import extend from "./extend";

const EXP_STR = "Thu, 01 Jan 1970 00:00:00 GMT";

// cookie写操作，过期时间单位(s)
function set(name, value, config) {
    config = extend(
        {
            "path": "/"
        }
        ,config || {}
    )

    const defVal = {
        "path": "/"
    }

    var cookie = [`${name}=${value}`];
    Object.keys(config).forEach(function (key) {
        if (key === "expires" && config.expires) {
            return cookie.push("expires=" + new Date(+new Date() + config.expires * 24 * 3600 * 1000).toUTCString());
        }
        cookie.push(
            `${key}=${config[key] || defVal[key] || ""}`
        );
    })
    document.cookie = cookie.join(";");
}
export { set };

function get(name:string) {
    return document.cookie.replace(new RegExp(".*(?:^|; )" + name + "=([^;]*).*|.*"), "$1");
}
export { get }

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