## v1.1.19

### Feat
- feat(delay): 新增延迟一段时间执行方法 [61b6b9b](https://github.com/x-dirve/utils/commit/61b6b9b529746a601de149b2cc9532ca480810a3)
- feat(labelReplace): 支持同时删除已匹配的数据 [0990dff](https://github.com/x-dirve/utils/commit/0990dffdee5dbef4099b65f75f13a1c4ef2b98fb)
- feat(date): 新增毫秒显示支持 [996a07f](https://github.com/x-dirve/utils/commit/996a07f52a712deaca6c29c59e9f82bd3eabbdd1)

### Fix
- fix: merge 在处理数组时采用合并而不是替换 [fa906cc](https://github.com/x-dirve/utils/commit/fa906ccf3a084fcd7f9491604438136d6921544a)
- fix(parseStr): 修复当值中出现 = 时值被错误截取的问题 [0de27f9](https://github.com/x-dirve/utils/commit/0de27f9e1fb0096f3712beac7e33b95a7df7d675)
- fix(parseStr): 修复第一个问号没有被处理掉的问题 [bccb4fc](https://github.com/x-dirve/utils/commit/bccb4fcb6c8100ce95a5b01caa0e2c1337bffe2c)
- fix(date): 毫秒数补齐3位数显示 [4b3703e](https://github.com/x-dirve/utils/commit/4b3703e4a63b92363df98f763f7edcf5dbb4a0a1)

### Chore
- chore: release v1.1.13 [4e9dedd](https://github.com/x-dirve/utils/commit/4e9deddaefd4fb992771bbf74b65418ab90d19b8)
- chore: 修改代码样式，修改 cakk 注释 [8091e97](https://github.com/x-dirve/utils/commit/8091e972ab4a6c5a27257493f674c897c217033a)
- chore: 更新 changelog 版本 [0fc9c79](https://github.com/x-dirve/utils/commit/0fc9c79ba7cc6f890c39c2b0f50cb5eb9c6fbc6c)

## v1.1.17

### Feat
- feat: 新增是否是可执行函数判断方法 isExecutable [ab5e928](https://github.com/x-dirve/utils/commit/ab5e928727928e43dfa1bb1ca66c387a2edb0f09)

## v1.1.13

### Feat
- feat: 新增将某些 js 数据类型上的原始方法转化为可直接调用的函数： cakk [103bdb0](https://github.com/x-dirve/utils/commit/103bdb0bca070f46ee2af157f1bc6d7fc9509c50)
- feat: 增加节流 throttle 方法 [b1323cb](https://github.com/x-dirve/utils/commit/b1323cbb3bffd020829b0bbc1203586c2fb4d99b)
- feat: 增加是否 async 声明的异步函数 isAsyncFunction [fae73aa](https://github.com/x-dirve/utils/commit/fae73aa1392d0d577aabe5dc5c0181399eb036e2)
- feat:新增 cookie 操作 [b1e06ee](https://github.com/x-dirve/utils/commit/b1e06ee108a83be54696cd37394c768a7086460e)
- feat: 新增往字符串中追加参数方法 [d7c16ce](https://github.com/x-dirve/utils/commit/d7c16ce8f850604cbb59b189adc65a12cd7e328a)
- feat: extend 使用 rest 写法，不再使用 arguments 转成数组 [f72f355](https://github.com/x-dirve/utils/commit/f72f35536887f15108a79eb928a387ea99a63c0f)
- feat:升级 changelog [6bf5e0c](https://github.com/x-dirve/utils/commit/6bf5e0ca36d616dc105d15e2303a9b0e26881ad2)

### Fix
- fix: 修复 addQuery 在 url 只有一个问号结尾的时候的拼接问题 [b9ba7d9](https://github.com/x-dirve/utils/commit/b9ba7d9bc84e9d225ba38708a9bdad74b0c3d2e5)
- fix: 修复设置 cookie 操作类型及配置项处理问题 [cfcb588](https://github.com/x-dirve/utils/commit/cfcb588712624d3979f98442c6dd22d08595dd06)

## v1.1.10

### Feat
- feat: 新增 isSymbol 方法 [7674ff2](https://github.com/x-dirve/utils/commit/7674ff20d7e94e39602f4beab7ab076c8d918daf)

## v1.1.9

### Feat
- feat: 新增将某些 js 数据类型上的原始方法转化为可直接调用的函数： cakk [103bdb0](https://github.com/x-dirve/utils/commit/103bdb0bca070f46ee2af157f1bc6d7fc9509c50)

## v1.1.8

### Feat
- feat: 增加节流 throttle 方法 [b1323cb](https://github.com/x-dirve/utils/commit/b1323cbb3bffd020829b0bbc1203586c2fb4d99b)

## v1.1.7

### Feat
- feat: 增加是否 async 声明的异步函数 isAsyncFunction [fae73aa](https://github.com/x-dirve/utils/commit/fae73aa1392d0d577aabe5dc5c0181399eb036e2)
- feat:升级 changelog [6bf5e0c](https://github.com/x-dirve/utils/commit/6bf5e0ca36d616dc105d15e2303a9b0e26881ad2)
- feat: 调整说明文档 [691bfd4](https://github.com/x-dirve/utils/commit/691bfd427b0b776dc5ec08b2de004cc1beef3143)
- feat: 支持将输入字符串解析为带对应 kv 的对象 [d133648](https://github.com/x-dirve/utils/commit/d133648452e30a5f3586dacbc19ab54a7543f913)
- feat: 修改版本 [2d858c6](https://github.com/x-dirve/utils/commit/2d858c67ec463bb159435d2cd02cebe3350b96df)
- feat: 入口文件不压缩，libs 文件压缩 [4821a96](https://github.com/x-dirve/utils/commit/4821a96b461fe758a4e98ad5ee38155979222b75)
- feat: 拆分大模块文件，增加 libs 目录 [d0ed536](https://github.com/x-dirve/utils/commit/d0ed5361922326e7729db8efd7ab3805af7b62eb)
- feat: 手动导出 [96148f7](https://github.com/x-dirve/utils/commit/96148f7e9692f56fb917794d40e21009e167794d)
- feat: 启用测试版本 [9c41354](https://github.com/x-dirve/utils/commit/9c413542c10ae883cd18dbcefb43609d0b448001)
- feat: 数字相关的操作合并到主入口文件中 [5a4e0b0](https://github.com/x-dirve/utils/commit/5a4e0b0f4d32f9060b248db4cf556d7ae328b66f)
- feat: 增加数字相关方法 [229a559](https://github.com/x-dirve/utils/commit/229a559cdb1c402f0f3363c647daa49dd438769c)
- feat: relase [4ce0b04](https://github.com/x-dirve/utils/commit/4ce0b0406aa3d7203341f32c8311057e72be9c3c)
- feat:release [6ad91a8](https://github.com/x-dirve/utils/commit/6ad91a85d58247453134871cab3a2c1489fc56da)
- feat: 修改版本号及注释 [d58c23d](https://github.com/x-dirve/utils/commit/d58c23d159b67e99a004a638ff3da18340320377)
- feat: 增加说明文档 [5a117ce](https://github.com/x-dirve/utils/commit/5a117ce20e76cea0f0f5b06cb67bb4ded41706e7)
- feat: 修改包明 [60ce65b](https://github.com/x-dirve/utils/commit/60ce65bc0945e0049b1dbabacab75e6eaddcbafd)
- feat: 增加编译文件、修改包配置 [d91155f](https://github.com/x-dirve/utils/commit/d91155f9d44a59744ddd58d742c8d0edf77fabd8)
- feat: 修改编译配置 [571b284](https://github.com/x-dirve/utils/commit/571b284c8456bc83d9571367e87be9b09da035c7)
- feat: 增加工程文件 [c43e34f](https://github.com/x-dirve/utils/commit/c43e34f4ed705d3339b009de202d8bdfe724cec6)
- feat: 增加工程基础设置 [17fd33b](https://github.com/x-dirve/utils/commit/17fd33b081bba48eb652c9654e3a13adc4b11516)
- feat: 说明文档 [5d40af0](https://github.com/x-dirve/utils/commit/5d40af042b982920c5fa841fb06fb5be44493c7c)

### Fix
- fix: 修复 addQuery 在 url 只有一个问号结尾的时候的拼接问题 [b9ba7d9](https://github.com/x-dirve/utils/commit/b9ba7d9bc84e9d225ba38708a9bdad74b0c3d2e5)
- fix: 修复设置 cookie 操作类型及配置项处理问题 [cfcb588](https://github.com/x-dirve/utils/commit/cfcb588712624d3979f98442c6dd22d08595dd06)
- fix: 修正文档错误 [9188c84](https://github.com/x-dirve/utils/commit/9188c84a90aa90ac16d481e968a5d2c02303c987)
- fix: 支持 babel 单独引入 [d16f5f4](https://github.com/x-dirve/utils/commit/d16f5f47845322e1ab5186f6c759b3dd5ce50066)
- fix: 修复低版本安卓使用问题 [21091f0](https://github.com/x-dirve/utils/commit/21091f09ea331b9a639178231f1e51f83e2e355d)
- fix: 修改 queryString 的参数定义 [c37128f](https://github.com/x-dirve/utils/commit/c37128f02cc16889177d89d06353fbab8275359a)
- fix:修改包名，去掉 npm 配置文件 [fba47b4](https://github.com/x-dirve/utils/commit/fba47b43199d0da5eb1dd93ce047145fc5d08fec)
- fix: 修正编译问题 [a378adc](https://github.com/x-dirve/utils/commit/a378adc626e8d6f5cc3a7158eac3a72da37810f8)

## v1.1.4

### Feat
- feat:新增 cookie 操作 [b1e06ee](https://github.com/x-dirve/utils/commit/b1e06ee108a83be54696cd37394c768a7086460e)
- feat: 新增往字符串中追加参数方法 [d7c16ce](https://github.com/x-dirve/utils/commit/d7c16ce8f850604cbb59b189adc65a12cd7e328a)
- feat: extend 使用 rest 写法，不再使用 arguments 转成数组 [f72f355](https://github.com/x-dirve/utils/commit/f72f35536887f15108a79eb928a387ea99a63c0f)

## v1.1.3

### Feat
- feat: 调整说明文档 [691bfd4](https://github.com/x-dirve/utils/commit/691bfd427b0b776dc5ec08b2de004cc1beef3143)
- feat: 支持将输入字符串解析为带对应 kv 的对象 [d133648](https://github.com/x-dirve/utils/commit/d133648452e30a5f3586dacbc19ab54a7543f913)
- feat: 修改版本 [2d858c6](https://github.com/x-dirve/utils/commit/2d858c67ec463bb159435d2cd02cebe3350b96df)
- feat: 入口文件不压缩，libs 文件压缩 [4821a96](https://github.com/x-dirve/utils/commit/4821a96b461fe758a4e98ad5ee38155979222b75)
- feat: 拆分大模块文件，增加 libs 目录 [d0ed536](https://github.com/x-dirve/utils/commit/d0ed5361922326e7729db8efd7ab3805af7b62eb)
- feat: 手动导出 [96148f7](https://github.com/x-dirve/utils/commit/96148f7e9692f56fb917794d40e21009e167794d)
- feat: 启用测试版本 [9c41354](https://github.com/x-dirve/utils/commit/9c413542c10ae883cd18dbcefb43609d0b448001)
- feat: 数字相关的操作合并到主入口文件中 [5a4e0b0](https://github.com/x-dirve/utils/commit/5a4e0b0f4d32f9060b248db4cf556d7ae328b66f)
- feat: 增加数字相关方法 [229a559](https://github.com/x-dirve/utils/commit/229a559cdb1c402f0f3363c647daa49dd438769c)
- feat: relase [4ce0b04](https://github.com/x-dirve/utils/commit/4ce0b0406aa3d7203341f32c8311057e72be9c3c)
- feat:release [6ad91a8](https://github.com/x-dirve/utils/commit/6ad91a85d58247453134871cab3a2c1489fc56da)
- feat: 修改版本号及注释 [d58c23d](https://github.com/x-dirve/utils/commit/d58c23d159b67e99a004a638ff3da18340320377)
- feat: 增加说明文档 [5a117ce](https://github.com/x-dirve/utils/commit/5a117ce20e76cea0f0f5b06cb67bb4ded41706e7)
- feat: 修改包明 [60ce65b](https://github.com/x-dirve/utils/commit/60ce65bc0945e0049b1dbabacab75e6eaddcbafd)
- feat: 增加编译文件、修改包配置 [d91155f](https://github.com/x-dirve/utils/commit/d91155f9d44a59744ddd58d742c8d0edf77fabd8)
- feat: 修改编译配置 [571b284](https://github.com/x-dirve/utils/commit/571b284c8456bc83d9571367e87be9b09da035c7)
- feat: 增加工程文件 [c43e34f](https://github.com/x-dirve/utils/commit/c43e34f4ed705d3339b009de202d8bdfe724cec6)
- feat: 增加工程基础设置 [17fd33b](https://github.com/x-dirve/utils/commit/17fd33b081bba48eb652c9654e3a13adc4b11516)
- feat: 说明文档 [5d40af0](https://github.com/x-dirve/utils/commit/5d40af042b982920c5fa841fb06fb5be44493c7c)

### Fix
- fix: 修正文档错误 [9188c84](https://github.com/x-dirve/utils/commit/9188c84a90aa90ac16d481e968a5d2c02303c987)
- fix: 支持 babel 单独引入 [d16f5f4](https://github.com/x-dirve/utils/commit/d16f5f47845322e1ab5186f6c759b3dd5ce50066)
- fix: 修复低版本安卓使用问题 [21091f0](https://github.com/x-dirve/utils/commit/21091f09ea331b9a639178231f1e51f83e2e355d)
- fix: 修改 queryString 的参数定义 [c37128f](https://github.com/x-dirve/utils/commit/c37128f02cc16889177d89d06353fbab8275359a)
- fix:修改包名，去掉 npm 配置文件 [fba47b4](https://github.com/x-dirve/utils/commit/fba47b43199d0da5eb1dd93ce047145fc5d08fec)
- fix: 修正编译问题 [a378adc](https://github.com/x-dirve/utils/commit/a378adc626e8d6f5cc3a7158eac3a72da37810f8)

