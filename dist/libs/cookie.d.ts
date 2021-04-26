/**Cookie 配置 */
interface CookieOption {
    /**cookie 生效地址 */
    path?: string;
    /**过期时间 */
    expires?: number;
}
/**
 * cookie写操作，过期时间单位(s)
 * @param name   cookie key
 * @param value  cookie value
 * @param config cookie 配置
 */
declare function set(name: string, value: any, config: CookieOption): void;
export { set };
/**
 * 获取指定的 cookie
 * @param name cookie 名称
 */
declare function get(name: string): string;
export { get };
/**
 * 删除 cookie
 * @param name 要删除的 cookie 名称
 * @param path 生效路径
 */
declare function remove(name: string, path: string): string | undefined;
export { remove };
declare const _default: {
    get: typeof get;
    set: typeof set;
    remove: typeof remove;
};
export default _default;
