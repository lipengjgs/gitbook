# 模块化标准规范

1. [AMD](#amd)
2. [CommonJS](#commonjs)
3. [UMD](#umd)
4. [ES6Module](#es6module)

## AMD

 > RequireJS

 - 异步模块定义（所有模块异步加载，所有依赖某些模块的语句放置在回调函数中）
 ```js
 define([‘add’, ‘reduce’], function(add, reduce){
     return function(){...};
 });
 ```

## CommonJS
 - 一个文件就是一个模块
 ```js
 // 导出
 module.exports = {

 }
 // 导入
 require()
 ```
## UMD

UMD 是一套用来识别当前环境支持的模块风格的 if/else 语句

```js
// UMD 风格编写的 sum 模块
//sum.umd.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['add', 'reduce'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('add'), require('reduce'));
    } else {
        // Browser globals (root is window)
        root.sum = factory(root.add, root.reduce);
    }
}(this, function (add, reduce) {
    //  private methods
 
    //    exposed public methods
    return function(arr) {
      return reduce(arr, add);
    }
}));
```

## ES6Module

```js
// 导出对外的接口
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};

// 导入
import { area, circumference } from './circle';
import * as s from 'moduleA'
```