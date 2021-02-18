# Drive 工具类

> 包含常用的类型判断、方法

## 按需加载
`@x-drive/utils` 支持基于 `babel-plugin-import` 的按需加载机制

1. 项目中引入 `babel-plugin-import`,可在 `package.json` 的 `devDependencies` 中手动加入
    ```json
    ....
    "devDependencies": {
        ...
        "babel-plugin-import": "1.13.3"
    }
    ...
    ```
    或使用 `npn install babel-plugin-import --save-dev`
1. 修改 `babel.config.js` 文件中 `plugins` 字段，增加模块相关设置
    ```json
    ...
    "plugins": [
        [
            "import"
            , {
                "libraryName": "@x-drive/utils"
                , "libraryDirectory": "dist/libs"
                , "camel2DashComponentName": false
            }
            , "@x-drive/utils"
        ]
    ]
    ...
    ```
    如是 rollup 等工具中使用则在对应的 babel 设置中添加相应的配置


## 数据类型判断
基于 `is` 扩展出各个数据类型的判断方法，用于各种数据类型的判断场景

- __`is(subject: any, type: string): boolean`__

    数据类型判断
    - `subject` 待判断的数据
    - `type`    数据类型名字

- __`isArray(subject: any): boolean`__

    是否是数组
    - `subject` 待判断的数据


- __`isObject(subject: any): boolean`__

    是否是对象
    - `subject` 待判断的数据


- __`isString(subject: any): boolean`__

    是否是字符串
    - `subject` 待判断的数据


- __`isNull(subject: any): boolean`__

    是否是 null
    - `subject` 待判断的数据

- __`isNumber(subject: any): boolean`__

    是否是数字
    - `subject` 待判断的数据

- __`isUndefined(subject: any): boolean`__

    是否 undefined
    - `subject` 待判断的数据

- __`isFunction(subject: any): boolean`__

    是否函数
    - `subject` 待判断的数据

- __`isBoolean(subject: any): boolean`__

    是否是布尔值
    - `subject` 待判断的数据

- __`isError(subject: any): boolean`__

    是否是错误对象
    - `subject` 待判断的数据

- __`isRegexp(subject: any): boolean`__

    是否是正则
    - `subject` 待判断的数据

## 常用方法
包含开发过程中遇到的各种与平台无关的函数、正则

- __`labelReplaceExp: RegExp`__
    
    带花括号标签检测正则


- __`labelReplace<T>(tpl: string, data: T, keep?: boolean): string`__

    批量替换字符串中带花括号标签为指定数据
    - `tpl` 待处理的字符串
    - `data` 替换数据
    - `keep` 是否保留未能解析的标签
    ```tsx
    labelReplace('{a}/{b}/c', {a: 1, b: 2}) // 1/2/c
    labelReplace('{a}/{b}/c', {a: 1}, true) // 1/{b}/c
    ```

- __`isValidArray(subject: any): boolean`__

    是否是数组且长度大于0
    - `subject` 待判断的数据


- __`toArray<T>(args: any[]): Array<T>`__

    伪数组转成数组
    - `args` 伪数组对象


- __`each<T>(data: T[] | object, handler: Function, context?: object): void`__

    通用遍历函数
    - `data` 待遍历数据
    - `handler` 处理函数
    - `context` 作用域


- __`toUnderlineName(str: string): string`__

    转化为蛇形命名
    - `str` 待处理的字符串


- __`copy<T>(item: T): T`__

    简单复制
    - `item` 原始数据


- __`fix0(number: any, size: number): string`__

    格式化数字, 自动补 0
    - `number` 要格式化的数字
    - `size` 格式化后出来的数字位数


- __`shuffle<T>(arr: T[]): T[]`__

    数组随机分布
    - `arr` 原始数组

- __`random(max: number, min: number): number`__

    获取包含指定范围内的随机数
    - `max` 最大范围(包含)
    - `min` 最小范围(包含，默认 0)

- __`serialize(query: object, encode?: boolean): string`__

    序列化请求参数
    - `query` 参数对象

- __`extend(): any`__

    对象扩展方法
    - `subject` 待判断的数据

- __`merge(target: object, ...sources: any[]): any`__

    合并
    - `target` 合并基准对象
    - `sources` 后续合并对象

- __`queryString(dat: object): string`__

    请求参数对象转成请求参数字符串
    - `dat` 请求参数

- __`toDate(date: any, offset?: number): any`__

    转换对象为JS Date对象
    - `date` <可选> 日期数据(时间戳, 字符串, Date对象, 空)
    - `offset` 修正偏移的秒数

- __`date(date: any, format?: string, offset?: number): string`__

    按照指定格式将日期对象或时间戳转化为日期字符串
    - `date` 日期对象或时间戳
    - `format` 日期格式
    - `offset` 修正偏移的秒数

- __`parseStr(str: string, separator: string = "&", assignment: string | RegExp = "=", ignore: RegExp = /^#/, decode: boolean = true): ParseReturn`__

    解析输入文本，输出带对应 kv 的对象
    - `str` 待处理字符串
    - `separator` 字符串分割符号
    - `assignment` 赋值符号
    - `ignore` 需要排除的数据标识
    - `decode` 是否执行 decode 操作

## 数字相关

- __`getNumberWithDec(num: number, dec: number): number`__

    浮点数字精度处理
    - `num` 待处理数字
    - `dec` 精度


- __`getNumberAverage(arr:number[], dec:number): number`__

    获取一组数组中的平均数
    - `arr` 待处理数组
    - `dec` 保留精度


- __`getNumberVariance(arr:number[], dec:number): number`__

    按照指定格式将日期对象或时间戳转化为日期字符串
    - `arr` 待处理数组
    - `dec` 保留精度
    - `offset` 修正偏移的秒数


- __`getStdDeviation(arr:number[], dec:number): number`__

    按照指定格式将日期对象或时间戳转化为日期字符串
    - `arr` 待处理数组
    - `dec` 保留精度