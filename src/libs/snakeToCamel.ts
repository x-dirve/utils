import { SNAKE_TO_CAMEL_REGEXP } from "./regexps";

/**蛇形转小驼峰 */
function snakeToCamel(str: string) {
    return str.replace(SNAKE_TO_CAMEL_REGEXP, function (_, letter) {
        return letter.toUpperCase();
    });
}
export default snakeToCamel;
