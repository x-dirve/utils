/**
 * 序列化请求参数
 * @param  query 参数对象
 * @return       参数字符串
 */
export default function serialize(query: object, encode: boolean = false): string {
    return Object.keys(query)
        .map(key => `${key}=${encode ? encodeURIComponent(query[key]) : query[key]}`)
        .join("&");
}