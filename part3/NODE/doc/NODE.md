# [Node](https://nodejs.org/zh-cn/docs/)

1. [介绍](#介绍)
2. [Npm](#npm)
3. [应用](#应用)
   1. [1、写脚本](#1写脚本)
   2. [调试](#调试)
   3. [基础API](#基础api)
4. [cnpm](#cnpm)

## 介绍

> 事件驱动； 异步IO（非阻塞）
> Nodejs所用的模块规范是CommonJS
> 全局对象global
>
> - Buffer
>    用于处理二进制数据流
>    实例类似整数数组，大小固定
> - process
> - console
> process（进程，挂载在global对象下）

- 每个文件是一个模块，有自己的作用域
- 在模块内部 **module** 变量代表模块本身
- module.exports属性代表模块对外接口

- / 表示绝对路径， ./ 表示相对于当前文件
- 支持js/json/node扩展名，不写一次尝试
- 不写路径认为是 build-in 模块和 各级node_modules 中的第三方模块

- require顺序： 先检查内置的模块，然后再检查node_modules中的模块，再检查父容器中的node_modules

## Npm

- 修复

```s
npm audit fix
```

- 全局插件查询

```s
npm list -g --depth=0
```

- 显示npm安装路径

```s
npm root -g
```

## 应用

### 1、写脚本

```javascript
// 常用内置
const fs = require('fs');
const path = require('path);
const os = require('os');
const crypto = require('crypto');

let curPath = process.cwd(); // 当前执行路径

// 常用三方
const shell = require('shelljs'); // unix系统 https://www.npmjs.com/package/shelljs
const cmd = require('node-cmd'); // windows下可用 https://www.npmjs.com/package/node-cmd

const chalk = require('chalk');
console.log(chalk.red('This is a log'));

// argv0与argv的第一个值
const {argv, argv0, execArgv, execPath} = process; // process的属性

argv.forEach(item => {
  console.log(item);
})
// 假如是node --inspect *.js --test a=1 b=2
// 那么item : ['/usr/.../node' , '*.js' ,'--test', 'a=1'. 'b=2']
// execArgv(执行文件之前的参数) : ['--inspect']
// execPath: 也就是argv的第一个参数


const {env} = process;
// env 是 环境变量

process.cwd(); // 当前的执行路径

setImmediate(); // 下一个执行队列再执行，没有时间参数
setTimeout();  // 中间执行
process.nextTick(); // 最前面执行，如果该方法循环执行，会导致上面两个异步操作无法执行

```

### 调试

- inspector (chrome调试)

```s
node --inspect-brk *.js
```

- VS Code

> VS code中编辑断点（条件断点）

### 基础API

- path

```js
// normalize: 将路径标准化
// join： 拼接路径
// resolve： 相对路径解析为绝对路径
// basename; 
// extname; 
// dirname; 
// parse： parse('/usr/local/node_modules/n/package.json')
// format: 与parse相反
// sep; 
// delimiter; 
// win32; 
// posix

```

- process

```s
npm install -g anywhere
```

RESTFUL API
反爬虫策略：

1. User-Agent, Referer, 验证码
2. 单位时间访问次数、访问量
3. 关键信息图片混淆（利用雪碧图可以防爬虫）
4. 异步加载

nvm 是一种流行的运行 Node.js 的方式。 例如，它可以轻松地切换 Node.js 版本，也可以安装新版本用以尝试并且当出现问题时轻松地回滚。

<http://nodejs.cn/learn/introduction-to-nodejs>

## cnpm

> 安装npm淘宝镜像, 有时候安装太慢，可以使用国内镜像来解决

```s
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
