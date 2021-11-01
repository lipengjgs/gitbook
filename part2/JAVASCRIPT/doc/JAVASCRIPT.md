# [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

1. [基本语法ES5](#ES5)
   1. [分号](#fh)
   2. [正则表达式](#regex)
   3. [jsonp](#jsonp)
2. [ES6](#ES6)
   1. [简介](#intro)
   2. [let,const](#let)
   3. [变量解构赋值](#jgfz)
   4. [字符串扩展](#zfckz)
   5. [正则扩展](#zzkz)
   6. [数值扩展](#szkz)
   7. [函数扩展](#hskz)
   8. [数组扩展](#arraykz)
   9. [对象扩展](#dxkz)
   10. [Proxy](#proxy)
   11. [iterator,for_of](#forof)
   12. [Generator](#generator)
   13. [Promise](#promise)
   14. [async](#async)
   15. [Class](#class)
   16. [Module](#module)
   17. [ArrayBuffer](#arraybuffer)
   18. [BestPractice](#bp)
3. [题库](#questionBank)
4. [重学JAVASCRIPT](#relearn)
5. [参考书/参考文献](#refer)

---

## <span id="ES5">一、基本语法(ES5)</span>

<p>&nbsp;</p>

### 类型

> 类型是任何语言中都要有的基石

- Number
- String
- Boolean
- Symbol (new in ES2015)
- Object
    - Function
    - Array
    - Date
    - RegExp
- null
- undefined

### 执行环境中的一些概念

#### 栈（stack）

#### 堆（heap）

#### 队列 （queue）

### <span id="fh">分号</span>

> 虽然结尾语句的分号不是必需的，但是建议任何时候不要省略，可以避免错误，而且在某些情况下会增进代码的性能，因为这样解析器就不必要再花时间推测应该在哪里加分号了。

```javascript
    Object.preventExtensions();
    Object.seal();
    Object.freeze();
```

<p>&nbsp;</p>

### <span id="regex">[正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)</span>

> 匹配字符串中字符组合的模式

- 创建正则表达式

```javascript
        let reg = /ab+c/;              // 字面量（不变的时候建议）
        let reg1 = new RegExp('ab+c'); // 构造函数（动态变化的时候建议）
```

- 模式符号

| 符号 | 含义 |
|:----:|:---------:|
| ^ |  |
|   \w    |   单子字符： [a-zA-Z0-9_]   |
|   \s      |  空白字符：空格、制表符、换页符、换行符    |
|   \S      |  非空白字符    |

- 方法

```javascript
        // RegExp 方法
        exec();
        test();

        // String方法
        match();
        matchAll();
        search();
        replace();
        replaceAll();
        split();
```

href 删除对应的参数正则 .replace(/([\?&]+)code+=[^&]*&?/g, $1)

<p>&nbsp;</p>

### <span id="jsonp">JSONP</span>

> 原理: 动态创建 `script` 标签，利用 `src` 属性去获取数据，是一种解决跨域问题的方法。
需要服务端的callback中调用前端的一个方法，前端通过这个方法去获取数据。
一般由前端将方法名传给后端，后端将方法名拼上。

[三方库JSONP](http://github.com/webmodules/jsonp)

```shell
    npm install jsonp
    # 使用方法
    jsonp(url,opts,fn) # fn为与后端约定好的callback方法
```

### Variables(变量)

- What: 内存中存储一个数据的存储空间，也就是给存储空间再取一个名字
- When: 程序中反复使用的数据，都要先保存在变量中，再参与运算
- How: 声明、赋值、取值

- 变量命名：
  1. 不能以数字开头，仅能包含字母、数字、下划线；
  2. 不能使用保留字
  3. 见名知意
  4. 一般采用驼峰命名：第一个单词首字母小写

- 赋值
  1. 将等号右边的数据保存到等号左边的变量中
  2. 变量名 = 值
  3. 对已经包含值的变量赋值，新值会替换旧值
  4. 建议在声明的同时初始化变量的值

- 取值
  1. 只要使用变量名，在运行时，会被自动替换成变量中的值

- 特殊情况
  1. 只声明，但未赋值的变量，可任意使用
  2. 从未声明的变量，不能使用（取值）
  3. 为什么的变量可以赋值，硬规定：必须使用`var`声明变量

- **声明提前**：在程序正式执行前，都会将var声明的变量提前到当前脚本块的顶部集中声明，再开始执行程序，赋值留在原地

- 常量： 一旦初始化，值不能改变; 程序中一旦定义不可擅自改变的值，都要用常量保存, 强行修改常量的值，不会报错，但也无法修改成功

```js
    // 声明, 仅声明但未赋值时，默认值是undefined
    var variable; // undefined
    // 常量
    const OVER = 0
```

### 数据类型

- What: 数据在内存中的存储形式, 不同类型的数据，都有专门的用途
- 分类： 原始类型 引用类型
- 原始类型
  1. 值直接保存在变量本地的类型：Number, String, Boolean, undefined, null

- 引用类型
  1. 值没有直接保存在变量本地的类型，变量中只保存指向实际数据所在位置的地址值

#### 1. Number

> 表示所有数字，既可以表示整数，又可以表示浮点数, 凡是不加引号的数字，都是
> 所占空间： 所有数字都是用64位二进制数（8字节）存储；个别整数采用32位二进制(4字节)存储
> 1 byte = 8 bit 1字节等于8位； 数值大小与所占空间无关
>
> IEEE754标准下 64位双精度浮点型， 所以JS中没有int的说法（除了bigInt）
> 表面上看似整型的其实是浮点型
>
> **舍入误差**: 计算机中无法精确计算的数字而导致的计算结果精度偏差 - 解决方法： 按指定小数位数四舍五入toFixed()
> 注意：0.1 + 0.2 == 0.30000000000000004;

`Number.parseInt('423a', 10)`
`num.toString()`
`% * /`

```js
    let x = 6
    // 十进制转二进制
    console.log(x.toString(2))       // '110'
    console.log((254).toString(16))  // 'fe'

    console.log((-10).toString(2))   // '-1010'
    console.log((-0xff).toString(2)) // '-11111111'

    function roughScale(x, base) {
        const parsed = Number.parseInt(x, base);
        if (Number.isNaN(parsed)) {
            return 0;
        }
        return parsed * 100;
    }

    console.log(roughScale(' 0xF', 16));
    // expected output: 1500

    console.log(roughScale('321', 2));
    // expected output: 0
```

#### 2. String

> 表示所有文字信息，凡是用作显示的信息都要加引号，单双引号不分
> 每个英文字母或数字占1字节，每个汉字占2字节
> js内存中都是用字符的unicode号存储字符
> unicode人为给主要语言中的每一个字符编一个号
> 字符串内容一旦创建，值不可改变

`substring(startIndex, endIndex)`, endIndex is ignored and it's ignored;

字符串拼接： str + str

template strings: 支持换行、插值

```js
    `aaf ${val}`
```

`string.startsWith()`

`string.endsWith()`

`string.trim()`

`string.includes()`

`string.indexOf()`

`string.lastIndexOf()`

#### 3. Boolean

true false

#### 4. undefinded

#### 5. null

#### 数据类型转换

- js是弱类型语言
  1. 声明变量时，不用考虑变量中将要存储的数据类型
  2. 赋值时，动态判断数据的类型：同一个变量先后可保存不同类型的数据
  3. 运算时js会根据自己的需要，动态转换数据类型

- 隐式转换: 无需程序员干预，而自动完成的转换
  1. 算术计算时： true - 1,  false - 0
  2. `+` 中，只要有一个是字符串，则都转为字符串，变为字符串拼接
  3. NaN(数字类型) 和任何数据做计算，结果永远为NaN
  4. typeof(x)

- 强制转换: 主动调用专门函数完成的转换
  1. toString(), String()
  2. Number(), parseInt(), parseFloat(); Number('') = 0
  3. Boolean(): "" 0 NaN undefined null 都是false, 其余都是true

#### 运算符和表达式

> 算术运算： +-*/ % ++ --
> 返回值只能是number， 如果运算无效，返回NaN
> 隐式转换：默认转Number， 再进行转换

> 关系运算： 作比较，比大小
> 返回值： true， false
> 隐式转换： 默认都转为数字再比较
> NaN 不等于、不大于、不小于任何值（包括NaN）
> 判断是否是数字： `!isNaN(num)`
> 如果两个都是字符串，则按位比较每个字符的Unicode号
> === 全等，首先类型必须相同，其次值相同

> 逻辑运算： 多个条件（关系运算）, 综合得出最后的结论，只可能返回true/false
> && || !
> 运算符优先级： () ++-- ! */% +- <>>=<= !====== && || 三目 赋值
> 短路逻辑： && ||
> 逻辑运算的返回值不一定是布尔值：短路逻辑时，若参与运算的都是值，将在两个值之间选择一个返回

> 位运算：直接由而禁止或进行的运算，将数值的二进制左移或右移n位
> 左移n位： *2的n次方； 右移n位： /2的n次方
> 取整数的套路： n>>>0 n^0  n|0 Math.round()

> 赋值运算： =

> 扩展赋值运算： += -= *= /= %=

> 三目运算：boolean ? a : b

交换变量值方案一

```js
var t;
t = a;
a = b;
b = t;
```

交换变量值方案二

```js
a += b;
b = a - b;
a -= b;
```

```js
a -= b;
b = a + b;
a = b - a;
```

交换变量值方案三
```js
a ^= b;
b ^= a;
a ^= b;
```

```js
a = (b^=a^=b)^a;
```

交换变量值方案四

```js
a = {a:b,b:a};
b = a.b;
a = a.a;
```

交换变量值方案五

```js
a = [a,b];
b = a[0];
a = a[1];
```

交换变量值方案六

```js
a = [b,b=a][0];
```

交换变量值方案七

```js
[a,b] = [b,a];
```

### 函数

> 封装一项任务的步骤清单的代码段，起个任务名
> 目的： 代码重用
> 函数是一个引用类型的对象，对象是内存中同时存储多个值的空间
> 参数变量：专门接受方法执行所必须的数据的变量
> 内存中函数的声明周期：定义时，调用时，调用后
> 作用域(scope)：一个变量的可用范围,  本质是一个存储多个变量的对象
>
> 函数声明提前： 在正式执行前，都会先预读所有var声明的变量和function声明的函数，集中到当前作用域的顶部集中声明。
>
> 赋值留在原地

```js
function calc() {

}
```

- 全局函数

1. encodeURI
2. decodeURI
3. eval

### 分支结构

#### 顺序

> 除去声明提前，其余代码默认都是从上向下顺序执行

#### 分支

> 根据不同的条件，执行不同的代码

#### 循环

> 让程序反复执行一段相同代码

### 数组

### MATH

### Date

### 

---

## [ES6](https://es6.ruanyifeng.com/        )

<span id="ES6"></span>

### 简介

<span id="intro"></span>

> `ES6`既是一个历史名词，也是一个泛指，含义是5.1版以后的JavaScript的下一代标准，涵盖了ES2015、ES2016、ES2017等等
> [TC39技术委员会，关于JavaScript新特性可以查询](https://github.com/tc39/ecma262)
> 一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都需要由 TC39 委员会批准。
>
> Stage 0 - Strawman（展示阶段）
>
> Stage 1 - Proposal（征求意见阶段）
>
> Stage 2 - Draft（草案阶段）
>
> Stage 3 - Candidate（候选人阶段）
>
> Stage 4 - Finished（定案阶段）
>
> 一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面。

- 查看默认没有打开的ES6实验性语法

    ```sh
        // Linux & Mac
        $ node --v8-options | grep harmony
        // Windows
        $ node --v8-options | findstr harmony
    ```

- 使用ES6, 采用[babel转换](https://www.babeljs.cn/)

> 假如网页中直接使用babel, 实时将ES6转为ES5，对性能会有影响， 所以生产环境需要加载已经转码完成的脚本。[在线编译器](https://babeljs.io/repl/)

```sh
        # 安装babel
        npm install -S @babel/core
        # 最新转码规则
        npm install -S @babel/preset-env
        # react转码规则
        npm install -S @babel/preset-react
```

> 配置文件 `.babellrc`，根目录下

```json
    {
        "presets": [
            "@babel/env",
            "@babel/preset-react"
        ],
        "plugins": []
    }
```

### let、const

<span id="let"></span>

> ES6 中有6中声明变量的方法 `var`, `function`, `let`, `const`, `import`, `class`;

```javascript
    // let 只在所在的代码块内有效
    for (let i = 0; i < 10; i++) {
    // ...
    }
    console.log(i); // is not defined
    // let 不存在变量提升
    ```

- export default 与 export 区别

- Object.assign()

        ```javascript
        Object.assign({},{},{})
```

### 变量的结构赋值

<span id="jgfz"></span>

> 解构模式中最好不要放圆括号！

1. 数组解构赋值

    ```js
    // 模式匹配， 假如右边不是数组（或者说是不可遍历的结构）
    // 事实上，只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值
    let [a, b, c] = [1, 2, 3];
    let [foo, [[bar], baz]] = [1, [[2], 3]];
    let [ , , third] = ["foo", "bar", "baz"];
    let [head, ...tail] = [1, 2, 3, 4];      // tail: [2, 3, 4]
    let [x, y, ...z] = ['a'];                // 匹配不成功时，变量的值为undefined； y: undefined;  z: []
    let [a, [b], d] = [1, [2, 3], 4];        // 不完全解构，依然成功
    let [x, y, z] = new Set(['a', 'b', 'c']);
    let [x, y = 'b'] = ['a', undefined];     // 允许指定默认值 x='a', y='b'； 只有undefined的时候
    let [x = 1] = [null];                    // 如果一个数组成员是null，默认值就不会生效, 因为null不严格等于undefined; x: null

    function f() {
    console.log('aaa');
    }
    let [x = f()] = [1];  // x: 1; 先判断，后赋默认值
    ```

2. 对象解构赋值

    ```js
    // 变量必须与属性同名，才能取到正确的值
    let { bar, foo } = { foo: 'aaa', bar: 'bbb' }; // bar : 'bbb'; foo: 'aaa'

    // 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量
    const { log } = console;

    // 假如要赋值给不一样的变量, 其实真正赋值到的是后面的变量，前面只是模式
    let obj = { first: 'hello', last: 'world' };
    let { first: f, last: l } = obj;

    // 前面的是赋值变量，后面表示p按其模式进行解构
    let obj = {
    p: [
        'Hello',
        { y: 'World' }
    ]
    };
    let { p, p: [x, { y }] } = obj;

    // 报错，undefined不存在属性，无法再次解构
    let {foo: {bar}} = {baz: 'baz'};

    // 可以取到继承的属性
    const obj1 = {};
    const obj2 = { foo: 'bar' };
    Object.setPrototypeOf(obj1, obj2);

    const { foo } = obj1;
    foo // "bar"

    ```

3. 字符串的解构赋值

    ```js
    const [a, b, c, d, e] = 'hello';
    let {length : len} = 'hello'; // len: 5
    ```

4. 数值和布尔值的解构赋值

    > 个人觉得没啥意义！

    ```js
    let {toString: s} = 123;
    s === Number.prototype.toString  // true

    let {toString: s} = true;
    s === Boolean.prototype.toString // true
    ```

5. 函数参数的解构赋值

    ```js
    function add([x, y]){
    return x + y;
    }
    add([1, 2]); // 3

    [[1, 2], [3, 4]].map(([a, b]) => a + b);

    [1, undefined, 3].map((x = 'yes') => x); // 赋值默认值

    ```

#### 使用场景

```js
// (1) 交换变量的值
let x = 1;
let y = 2;
[x, y] = [y, x];

// (2) 从函数返回多个值
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();

// (3) 提取 JSON 数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
let { id, status, data: number } = jsonData;

// (4) 函数参数的默认值
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};

// (5) 函数参数的定义，方便地将一组参数与变量名对应
function f([x, y, z]) { ... }
f([1, 2, 3]);

function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});

// (6) 输入模块的指定方法
const { SourceMapConsumer, SourceNode } = require("source-map");

// (7) 遍历 Map 结构
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
```

### 字符串的扩展

<span id="zfckz"></span>

```js
// 字符串拥有了遍历器接口
for (let codePoint of 'foo') {
  console.log(codePoint)
}

// 可以识别大于 0xFFFF 的码点
let text = String.fromCodePoint(0x20BB7);
for (let i of text) {
  console.log(i);
}

// ES2019 改变了JSON.stringify()的行为
// 如果遇到0xD800到0xDFFF之间的单个码点，或者不存在的配对形式，它会返回转义字符串，留给应用自己决定下一步的处理
JSON.stringify('\u{D834}') // ""\\uD834""
JSON.stringify('\uDF06\uD834') // ""\\udf06\\ud834""

// 模板字符串
let greeting = `\`Yo\` World!`; // 字符串中假如有小撇号，则需转义


// 新增方法1 raw()
String.raw`Hi\n${2+3}!` // 往往用于处理模板字符串

// 新增方法2 includes(), startsWith(), endsWith()
let s = 'Hello world!';
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false

// 新增方法3 repeat()
'x'.repeat(3)     // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0)    // ""

// 新增方法4 padStart() padEnd()
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

// 新增方法5 trimStart(), trimEnd(), trimLeft()是trimStart()的别名，trimRight()是trimEnd()的别名
const s = '  abc  ';
s.trim()      // "abc"
s.trimStart() // "abc  "
s.trimEnd()   // "  abc"

// 新增方法6 matchAll()
// 方法返回一个正则表达式在当前字符串的所有匹配


// 新增方法7 codePointAt()

// 新增方法8 normalize()

```

### 正则的扩展

<span id="#zzkz"></span>

```js


```

### <span id="hskz">函数的扩展</span>

```js
// 箭头函数返回
() => ({

})
```

### 数组的扩展

- 扩展运算符

```js
// ...
// 只有函数调用时，扩展运算符才可以放在圆括号中
... [1, 2, 3];                         // 1, 2, 3

function push(array, ...items) {
  array.push(...items);
}

function f(v, w, x, y, z) { }
const args = [0, 1];
f(-1, ...args, 2, ...[3]);

const arr = [
  ...(x > 0 ? ['a'] : []),
  'b',
];

// 使用场景1： 替代apply
Math.max.apply(null, [14, 3, 77])
Math.max(...[14, 3, 77]);         // 等效于 Math.max(14, 3, 77)

new (Date.bind.apply(Date, [null, 2015, 1, 1]))  // ES5
new Date(...[2015, 1, 1]);                       // ES6


// 使用场景2： 克隆数组
const a1 = [1, 2];
const a2 = a1.concat();

const a2 = [...a1];   // 写法一
const [...a2] = a1;   // 写法二

// 使用场景3： 合并数组
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

arr1.concat(arr2, arr3);    // ES5(这两种都是浅拷贝)
[...arr1, ...arr2, ...arr3] // ES6

// 使用场景4： 与解构赋值结合
a = list[0], rest = list.slice(1) // ES5
[a, ...rest] = list               // ES6, 注意只能放在最后一位

// 使用场景5： 字符串
// 凡是涉及到操作四个字节的 Unicode 字符的函数，最好都用扩展运算符改写
[...'hello']

function length(str) {
  return [...str].length;
}
length('x\uD83D\uDE80y') // 3


// 使用场景6： 实现了 Iterator 接口的对象
let nodeList = document.querySelectorAll('div');
let array = [...nodeList]; // [<div>, <div>, <div>...]

// 使用场景7： Map 和 Set 结构，Generator 函数
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
let arr = [...map.keys()]; // [1, 2, 3]

const go = function*(){
  yield 1;
  yield 2;
  yield 3;
};
[...go()] // [1, 2, 3]
```

- Array.from()

```js
// Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）
let ps = document.querySelectorAll('p');
Array.from(ps).filter(p => {
  return p.textContent.length > 100;
});

```

- Array.of()

```js
// Array.of方法用于将一组值，转换为数组
Array.of(3, 11, 8) // [3,11,8]
// Array.of基本上可以用来替代Array()或new Array()
```

- 数组实例的 copyWithin()

```js
// 当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
[1, 2, 3, 4, 5].copyWithin(0, 3) // [4, 5, 3, 4, 5]
```

- find(), findIndex()

```js
// 用于找出第一个符合条件的数组成员 || 位置
[1, 4, -5, 10].find((n) => n < 0) // -5
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2

[NaN].findIndex(y => Object.is(NaN, y)) // 0
```

- fill()

```js
// 注意是浅拷贝
['a', 'b', 'c'].fill(7) // [7, 7, 7]
```

- entries(), keys(), values()

```js
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

- includes()

```js
// ES5中的 indexOf方法无法找到NaN
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN) // true

const contains = (() =>
  Array.prototype.includes
    ? (arr, value) => arr.includes(value)
    : (arr, value) => arr.some(el => el === value)
)();
contains(['foo', 'bar'], 'baz'); // => false

```

- flat(), flatMap()

```js
// Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组
// flat()默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1
[1, 2, [3, [4, 5]]].flat()  // [1, 2, 3, [4, 5]]
[1, 2, [3, [4, 5]]].flat(2) // [1, 2, 3, 4, 5]

// flatMap()只能展开一层数组
[2, 3, 4].flatMap((x) => [x, x * 2]) // [2, 4, 3, 6, 4, 8]
[1, 2, 3, 4].flatMap(x => [[x * 2]]) // [[2], [4], [6], [8]]
```

- 数组的空位

```js
// 建议避免出现空位
```

- Array.prototype.sort() 的排序稳定性
  
```js
// 排序稳定性（stable sorting）是排序算法的重要属性，指的是排序关键字相同的项目，排序前后的顺序不变
```

### `yield` 关键字

> 暂停， like `return`;
>
> 在前端项目中，用的机会很少，完全可以忽略他的存在，
>
> 但是在后台项目中，就显得比较重要了，因为其优越的可控性，可是极大的提升线程的效率
> 无法单独工作，需要配合generator(生成器)的其他函数

---

## 题库

<span id="questionBank"></span>

1. 判断：

    ```javascript
    // typeof 返回：string/boolean/number/undefined/function/object
    Array.isArray()

    ```

2. == 与 === 区别：

    ```javascript
    // 前者会自动类型转换，再判断是否相等
    // 后者不会自动类型转换，而是直接去比较
    ```

3. 程序中捕获异常的方法

    ```javascript
    try {

    } catch(e) {

    } finally {

    }

    ```

4. 降维数组

    ```javascript
    var arr = [[2,3],[4,5]];
    Array.prototype.concat.apply([],arr);
    ```

5. 深克隆

    ```js
    return JSON.parse(JSON.stringify(arr));
    ```

6. 如何描述虚拟DOM

7. vue 中实现数据绑定的原理

    ```javascript
    // 利用ES中object的getter、setter属性
    ```

8. 数组去重

    ```javascript
    // 利用set
    Array.from(new Set([...arr1,...arr2));

    // 利用对象属性
    var arr1 = [1,2,3,4,5,6];
    var arr2 = [2,3,4,5,5,7,9,9]
    var newArr = arr1.concat(arr2);
    var result = [];
    var obj = {};
    newArr.forEach(function(a,k) {
        if(!obj[a]) {
        result.push(a);
        obj[a] = 1;
        }
    })
    console.log(result)
    ```

9. 截取url中带的参数

    ```javascript
    let url = location.search;
    let theRequest = {};
    if (url.indexOf('?') != -1) {
    let str = url.substr(1);
    let strs = str.split("&");
    for(let i = 0; i < strs.length; i ++) {
        theRequest[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
    ```

10. 判断字符数

    ```js
    function calcLetter(letter) {
        // 匹配双字节字符
        let count = letter && letter.replace(/[^\x00-\xff]/g,"xx").length || 0;
        if(count > 6) {
            letter = letter.slice(0, 3) + '...'
        }
        console.log(letter);
        }
    ```

11. 关于js中加不加分号的问题

    [参考](http://slides.com/evanyou/semicolons)

12. 有些编程规范中用`void 0` 代替 `undefined` ?

    > 因为在旧浏览器中，undefined是可以被重新赋值的

    ```js
    var value;
    console.log(value === void 0); //true
    console.log(value === void(0)); //true
    ```

    - 注意js中的**隐式转换**

    ```js
    10 + '10'%9*4 // 14
    ```

13. 判断数字大于0， 小于0， 等于0

    ```js
    let num = -200;
    return Math.sign(num);
    ```

14. 十进制、二进制相互转换

    ```js
    let num = `101`;
    let dec = parseInt(num, 2); // 将num以二进制转为十进制；
    let bin = dec.toString(2);
    ```

---

<span id="relearn"></span>

## AJAX(Asynchronous JavaScript And XML)

> `XMLHttpRequest`对象

```js
let xhr = new XMLHttpRequest()
 // xhr 有可能不存在？
xhr.onreadystatechange = () => {

}
// method: all capitals
xhr.open('GET', 'https://example.cn/1.file', true)
xhr.send()

```

## 重学JAVASCRIPT

### 一、产生式

### 二、词法

1、零宽字符

### 三、句法

---

## 参考书/参考文献

<span id="refer"></span>

1. 红宝书
2. 犀牛书

ES5方法（默认参数与可选参数）
函数定义时，给函数传入一个“对象”类型的形参，具体实现时，为对象形参添加属性，每个属性相当于函数的一个参数。

不设置默认参数时，参数赋值如下：

var para=args.para;

设置默认参数时，参数赋值如下：

var para=args.para || 默认值 ;

完整的代码示例：

```js
    var CookieUtil = {
        set: function(args) {
            var name = args.name || "张三";
            var value = args.value;
            var expires = args.expires;
            var path = args.path || "/bags/";
            var domain = args.domain;
            var secure = args.secure;
        }
    }
    CookieUtil.set({
        name: "name",
        value: "Nicholas",
        path: "/books/projs/",
        domain: "www.wrox.com",
        expires: new Date("January 1, 2010")
    });
```

1. ES6方法（默认参数）
函数定义时传入形参对象，参数直接赋予默认值。但注意，当以参数列表形式设置默认值时，赋值方式是按序赋值。

代码示例：

function doSome({a,b=2,c}){
    console.log(a,b,c);
}
doSome({a:5,c:22})
// 5 2 22

//参数列表方式
function doSome(a,b=2,c){
        console.log(a,b,c);
    }
doSome(5,22)
// 5 2 22

在javascript中按位取反再取反可以将一个浮点数的转化为整形,而且其效率要比parseInt高出将近一倍

```js
~~
```

通过抛出异常`Promise.reject('...')`来终止promise

base64

```js
[
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'
]
```

JavaScript能表示并进行精确算术运算的整数范围为：正负2的53次方，也即从最小值-9007199254740992到最大值+9007199254740992之间的范围
