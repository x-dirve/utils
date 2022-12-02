import isString from "./isString";

/**首字大写 */
export default function upCaseFirstChar(str: string) {
    if (!isString(str) || !str) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
