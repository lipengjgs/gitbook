# 浏览器

1. [介绍](#介绍)
2. [工作原理](#工作原理)
   1. [浏览器流程](#浏览器流程)
   2. [ISO-OSI七层网络模型](#iso-osi七层网络模型)
   3. [TCP、IP](#tcpip)
   4. [HTTP](#http)
   5. [有限状态机](#有限状态机)
   6. [AST抽象语法树](#ast抽象语法树)
   7. [多进程架构](#多进程架构)
3. [V8引擎内存](#v8引擎内存)
   1. [如何查看V8内存使用情况](#如何查看v8内存使用情况)
   2. [优化内存](#优化内存)
   3. [判断是否打开了开发者工具](#判断是否打开了开发者工具)
   4. [防止浏览器后退](#防止浏览器后退)

## 介绍

> 现在浏览器种类繁多，但核心技术就那几个，好多浏览器都是套壳，所以只需要了解几大主流浏览器

- Chrome
- Firefox
- Opera
- Safari
- Edge
- IE(已经放弃)

## [工作原理](https://zhuanlan.zhihu.com/p/47407398)

###  浏览器流程

```
URL --> http
(HTML) --> parse
(DOM) --> css computing
(DOM WITH CSS) --> layout
(DOM WITH POSITION) --> render
(Bitmap, 即内存中的一张图)

      HTTP           PARSE          CSS COMPUTING                   LAYOUT                        RENDER
URL --------> HTML ---------> DOM -----------------> DOM WITH CSS -----------> DOM WITH POSITION ----------> BITMAP(内存中的一张图片)
```

### ISO-OSI七层网络模型

> （Open System Interconnection）

1. 应用层
2. 表示层
3. 会话层

    > 以上三层在五层模型中合并到了应用层
    > HTTP、FTP `require('http')`

4. 传输层

    > TCP `require(net)`

5. 网络层

    > TP、Internet

6. 数据链路层
7. 物理层

    > 4G/5G/WIFI

### TCP、IP

1. TCP:
    - 流(可靠流，收不到要重发)
    - 端口
    - require('net')

2. IP:
    - 包
    - IP地址
    - libnet/libpcap (C++中的两个库)

### HTTP

1. request
2. response

### 有限状态机

> 状态是有限的，它与状态模式不是一回事； 例如正则的底层就是通过状态机实现的

- 每一个状态都是一个机器
  - 在每一个机器里，可以计算、存储、输出
  - 所有的这些机器接受的输入是一致的
  - 状态机的每一个机器本身没有状态，如果我们用函数来表示，应该是一个纯函数（没有副作用）
- 每一个机器知道下一个状态
  - 每个机器都有确定的下一个状态（Moore状态机）
  - 每个机器根据输入决定下个一状态(Mealy状态机)

```js
// 处理字符串，字符串中是否存在 'abcde'
function match(str) {
    let foundA = false;
    let foundB = false;
    let foundC = false;
    let foundD = false;
    for (let c of str) {
        if(c == 'a') {
            foundA = true
        } else if (foundA && c == 'b') {
            foundB = true
        } else if (foundB && c == 'c') {
            foundC = true
        } else if (foundC && c == 'd') {
            foundD = true
        } else if (foundD && c == 'e') {
            return true
        } else {
            foundA = false
            foundB = false
            foundC = false
            foundD = false
        }
    }
    return false
}

match('hello llabcdefg')
```

```js
// mealy
function state(input) {
    // 在函数中可以自由地编写代码，处理每个状态地逻辑
    return next;// 返回值作为下一个状态(函数)
}
// 调用
while(input) {
    // 获取输入
    state = state(input) // 把状态机地返回值作为下一个状态
}
```

```js
// 假如pattern完全未知怎么办？？？ 使用状态机完成等效于 KMP 算法的方式, 时间复杂度不能高（不能用双循环）
// function match(pattern, string) {
// 
// }
function match(str) {
    let state = start
    for (let c of str) {
        state = state(c)
    }
    return state === end
}
function start(c) {
    if (c === 'a') {
        return foundA
    } else {
        return start
    }
}
function end(c) {
    return end
}
function foundA(c) {
    if (c === 'b') {
        return foundB
    } else {
        return start(c)
    }
}
function foundB(c) {
    if (c === 'c')  {
        return foundC
    } else {
        return start(c)
    }
}
function foundC(c) {
    if (c === 'd') {
        return foundD
    } else {
        return start(c)
    }
}
function foundD(c) {
    if (c === 'e') {
        return end
    } else {
        return start(c)
    }
}
```

### AST[抽象语法树](https://segmentfault.com/a/1190000016231512)

### 多进程架构

  > 一个程序常常被划分为几个相互独立又彼此配合的模块，浏览器也是由多个进程组成，每个进程有自己的职责，配合完成浏览器的整体功能。
  > 每个进程(process)中又包含多个线程(thread)，多个线程会协同工作。
  > 当我们启动一个应用，计算机会创建一个进程，操作系统会为进程分配一部分内存，应用的所有状态都会保存在这块内存中，应用也许还会创建多个线程来辅助工作，这些线程可以共享这部分内存中的数据。如果应用关闭，进程会被终结，操作系统会释放相关内存。
  > 两个进程之间可以使用 IPC（Inter Process Communication）进行通信。很多应用都会采用这样的设计，如果一个工作进程反应迟钝，重启这个进程不会影响应用其它进程的工作。

## V8引擎内存

- 页面占用内存过大，会导致客户端卡顿，甚至无响应
- node也是V8，对后端服务的性能至关重要。因为服务的持久性，后端容易造成内存溢出

> 64位操作系统： 1.4G（够用了）； 新生代（新产生的变量）： 64MB，老生代（存在时间比较长的变量）: 1400MB
>
> 32位为0.7G； 新生代： 16MB； 老生代： 700MB
>
> 新生代回收算法：复制 （牺牲时间换空间）
>
> 老生代回收算法：标记删除整理（牺牲空间换时间，类似磁盘碎片整理，如数组需要连续的内存空间，所以需要整理）

### 如何查看V8内存使用情况

### 优化内存

    前端的特点：

    - 不持久化
    - 执行一遍全部回收（js回收内存时，会暂停执行）
    - 每回收100MB时，约6毫秒，所以分配内存不宜过大，防止回收占用的时间比较长

    V8引擎中的[array sort](https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js)

    插排、快排
    方法：InsertionSort( < 10 ) QuickSort (> 10)

    有限状态机

### [判断是否打开了开发者工具](https://github.com/sindresorhus/devtools-detect)

### 防止浏览器后退

```js
history.pushState(null, null, location.href);
```
