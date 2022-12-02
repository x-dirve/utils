# XDrive 工具类

> 包含常用的类型判断、常用的工具类方法

## 按需加载
`@x-drive/utils` 支持基于 `babel-plugin-import` 的按需加载机制

1. 项目中引入 `babel-plugin-import`,可在 `package.json` 的 `devDependencies` 中手动加入
    ```json
    "devDependencies": {
        "babel-plugin-import": "1.13.3"
    }
    ```
    或使用 `npn install babel-plugin-import --save-dev`
1. 修改 `babel.config.js` 文件中 `plugins` 字段，增加模块相关设置
    ```json
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
    ```
    如是 rollup 等工具中使用则在对应的 babel 设置中添加相应的配置


## 数据类型判断
基于 `is` 扩展出各个数据类型的判断方法，用于各种数据类型的判断场景

#### is(subject: any, type: string): boolean
数据类型判断
- `subject` 待判断的数据
- `type`    数据类型名字

#### isArray(subject: any): boolean
是否是数组
- `subject` 待判断的数据


#### isObject(subject: any): boolean
是否是对象
- `subject` 待判断的数据


#### isString(subject: any): boolean
是否是字符串
- `subject` 待判断的数据


#### isNull(subject: any): boolean

是否是 null
- `subject` 待判断的数据

#### isNumber(subject: any): boolean

是否是数字
- `subject` 待判断的数据

#### isUndefined(subject: any): boolean

是否 undefined
- `subject` 待判断的数据

#### isFunction(subject: any): boolean

是否函数
- `subject` 待判断的数据

#### isBoolean(subject: any): boolean

是否是布尔值
- `subject` 待判断的数据

#### isError(subject: any): boolean

是否是错误对象
- `subject` 待判断的数据

#### isRegexp(subject: any): boolean

是否是正则
- `subject` 待判断的数据

#### isAsyncFunction(subject: any): boolean

是否 async 声明的异步函数
- `subject` 待判断的数据

#### isSymbol(subject: any): boolean

是否 Symbol
- `subject` 待判断的数据
    
#### isExecutable(fn: unknown): boolean

是否是可执行函数
- `fn` 待判断的数据

#### isValidArray(subject: any): boolean
是否是数组且长度大于0
- `subject` 待判断的数据

## 常用方法
包含开发过程中遇到的各种与平台无关的函数、正则

#### labelReplace<T>(tpl: string, data: T, keep?: boolean, remove?: boolean): string
批量替换字符串中带花括号标签为指定数据
- `tpl` 待处理的字符串
- `data` 替换数据
- `keep` 是否保留未能解析的标签
- `remove` 是否同时删除已替换的数据字段
```tsx
labelReplace('{a}/{b}/c', {a: 1, b: 2}) // 1/2/c
labelReplace('{a}/{b}/c', {a: 1}, true) // 1/{b}/c
```

#### toArray<T>(args: any[]): Array<T>
伪数组转成数组
- `args` 伪数组对象


#### each<T>(data: T[] | object, handler: Function, context?: object): void
通用遍历函数
- `data` 待遍历数据
- `handler` 处理函数
- `context` 作用域


#### toUnderlineName(str: string): string
转化为蛇形命名
- `str` 待处理的字符串


#### copy<T>(item: T): T
简单复制
- `item` 原始数据


#### fix0(number: any, size: number): string
格式化数字, 自动补 0
- `number` 要格式化的数字
- `size` 格式化后出来的数字位数


#### shuffle<T>(arr: T[]): T[]
数组随机分布
- `arr` 原始数组


#### random(max: number, min: number): number
获取包含指定范围内的随机数
- `max` 最大范围(包含)
- `min` 最小范围(包含，默认 0)


#### serialize(query: object, encode?: boolean): string
序列化请求参数
- `query` 参数对象


#### extend(): any
对象扩展方法
- `subject` 待判断的数据


#### merge(target: object, ...sources: any[]): any
合并
- `target` 合并基准对象
- `sources` 后续合并对象


#### queryString(dat: object): string
请求参数对象转成请求参数字符串
- `dat` 请求参数


#### toDate(date: any, offset?: number): any
转换对象为JS Date对象
- `date` <可选> 日期数据(时间戳, 字符串, Date对象, 空)
- `offset` 修正偏移的秒数


#### date(date: any, format?: string, offset?: number): string
按照指定格式将日期对象或时间戳转化为日期字符串
- `date` 日期对象或时间戳
- `format` 日期格式
- `offset` 修正偏移的秒数


#### parseStr(str: string, separator: string = "&", assignment: string | RegExp = "=", ignore: RegExp =^#/, decode: boolean = true): ParseReturn**
解析输入文本，输出带对应 kv 的对象
- `str` 待处理字符串
- `separator` 字符串分割符号
- `assignment` 赋值符号
- `ignore` 需要排除的数据标识
- `decode` 是否执行 decode 操作


#### throttle(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void
节流
- `fn` 回调函数
- `delay` 延迟时间


#### cakk<T = any>(origin:Function): T
将某些 js 数据类型上的原始方法转化为可直接调用的函数
- `origin` 需要处理的原始函数


#### delay(fn: Function, wait: number, ...ext: any[])
延迟一段时间执行方法
- `fn`   执行函数
- `wait` 延迟时间
- `ext`  要传递给延迟执行函数的参数


#### sleep(time: any, logger: any)
休眠指定时间或随机时间
- `time`   指定时间或随机时间
- `logger` 日志模块

#### fixFloat0(num: number, size: number): string | number
小数点补充 0 至保留位数
- `num` 待处理的数字
- `size` 保留位数

#### toHyphenName(str: string): string
小驼峰转化为连字符命名
- `str` 待处理的字符串

#### upCaseFirstChar(str: string): string
首字大写
- `str` 待处理的字符串

## 正则

#### labelReplaceExp: RegExp    
带花括号标签检测正则

#### UPPER_CASE_REGEXP: RegExp    
大写字母匹配正则

#### IS_QM_ONLY_REGEXP: RegExp
只有一个问号结尾

#### FORMAT_REGEXP: RegExp
日期格式化格式匹配正则

#### DATE_REGEXP: RegExp
时间分割正则

## 数字相关

#### getNumberWithDec(num: number, dec: number): number
浮点数字精度处理
- `num` 待处理数字
- `dec` 精度


#### getNumberAverage(arr:number[], dec:number): number
获取一组数组中的平均数
- `arr` 待处理数组
- `dec` 保留精度


#### getNumberVariance(arr:number[], dec:number): number
按照指定格式将日期对象或时间戳转化为日期字符串
- `arr` 待处理数组
- `dec` 保留精度
- `offset` 修正偏移的秒数


#### getStdDeviation(arr:number[], dec:number): number
按照指定格式将日期对象或时间戳转化为日期字符串
- `arr` 待处理数组
- `dec` 保留精度