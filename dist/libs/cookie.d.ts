declare function set(name: any, value: any, config: any): void;
export { set };
declare function get(name: string): string;
export { get };
declare function remove(name: string, path: string): string | undefined;
export { remove };
declare const _default: {
    get: typeof get;
    set: typeof set;
    remove: typeof remove;
};
export default _default;
