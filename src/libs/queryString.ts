/**
 * 请求参数对象转成请求参数字符串
 * @param dat 请求参数
 */
export function queryString(dat: { [key: string]: any }): string {
    let queryStr: string
    if (dat) {
        queryStr = Object.keys(dat)
            .map(key => {
                return `${key}=${encodeURIComponent(dat[key])}`
            })
            .join('&');
    } else {
        queryStr = '';
    }
    return queryStr;
}