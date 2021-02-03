/**
 * 请求参数对象转成请求参数字符串
 * @param dat 请求参数
 */
export default function queryString(dat: {
    [key: string]: any;
}): string;
