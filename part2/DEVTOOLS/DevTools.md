# DevTools

1. [Webstorm](#webstorm)
   1. [下载](#下载)
   2. [设置](#设置)
2. [Visual Studio](#visual-studio)
3. [VSCode](#vscode)
4. [HBuilder](#hbuilder)
5. [Atom](#atom)
6. [Xcode](#xcode)
7. [OSS](#oss)
8. [Postman](#postman)
9. [Navicat](#navicat)
10. [Axure](#axure)
11. [Xshell](#xshell)
12. [Sourcetree](#sourcetree)
13. [ImageTool](#imagetool)
14. [测试工具](#测试工具)
   1. [1. 浏览器同步测试工具（Browser Sync）](#1-浏览器同步测试工具browser-sync)
   2. [2. 浏览器开发者工具](#2-浏览器开发者工具)
15. [抓包工具](#抓包工具)

## Webstorm

### 下载

> 链接：https://pan.baidu.com/s/1j1fCX3OdXq80FFGPjklYTQ  提取码：bkh8 下载完后破解

### 设置

- 设置`git`根目录

    `version control` > `directory` > `add`

- 插件仓库

## Visual Studio

## VSCode

> 卡顿解决： 根本原因在插件中，一个个禁用看看

- 插件

1. Sass/Less/Stylus/Typescript/Javascript/Jade/Pug Compile Hero Pro

    > 右下角点击Compile Hero: On 即可
    >
    > 再在扩展配置中设置输出路径即可

2. Markdown All in One

    > 支持markdown

    自动生成目录： Ctrl+Shift+P, 输入toc, 点击`Markdown All in One`创建目录
    可以设置生成目录的层级等等

3. Bracket Pair Colorizer

    > 让对应的括号颜色区分，当嵌套多了的时候易于区分

   - 快速复制行

   ```s
   1.复制到下一行 Alt+Shift+下键(上下左右的下);
   2.复制到上一行 Alt+Shift+上键(上下左右的上);
   ```

4. [beautify](https://github.com/HookyQR/VSCodeBeautify)

- 调试一直出现断点未绑定

```s
    解决方法：重装vscode
```

- 修改语言

```s
  Ctrl + Shift + P;
  搜索language;
```

- 插件
[Todo-Tree](https://zhuanlan.zhihu.com/p/63303926)

- 退出禅模式：`F11`

现在新版本的vscode可以同步设置等，基本可以完全同步！！很好用

## HBuilder

## Atom

## Xcode

## OSS

## Postman


## Navicat

## Axure

## Xshell

## Sourcetree

## ImageTool

- [压图工具](https://squoosh.app/)

## 测试工具

### 1. 浏览器同步测试工具（[Browser Sync](http://www.browsersync.cn)）

> 实际上是一个小型的服务器

```shell
npm install -g browser-sync
```

```shell
browser-sync start --server --files "*"
```

```shell
# 代理模式
# 主机名可以是ip或域名
browser-sync start --proxy "主机名" "css/*.css"
```

### 2. 浏览器开发者工具

## 抓包工具

1. wireshark

2. fiddler(windows 调试常用)

3. charles(MAC)
