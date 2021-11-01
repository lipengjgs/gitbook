# [Less](https://less.bootcss.com/)

1. [介绍](#介绍)
2. [语法](#语法)
3. [常用技巧](#常用技巧)
4. [使用](#使用)

## 介绍

- 文件格式 `*.less`
## 语法

- 变量

    ```less
    /* 不存在顺序问题，但是建议习惯先定义 */
    @width: 10px;
    ```

- 混合

    ```less
    .txt-center {
        text-align: center;
    }
    header {
        .txt-center();
    }
    ```

- 嵌套

    ```less
    header {
        color: white;
        .nav {
            font-size: 30px;
        }
        &:after {
            content: "";
        }
        & > .logo {
            width: 100px;
        }
    }
    ```

- 嵌套规则和冒泡

    ```less

    ```

- 运算

- 转义

- 函数

- 命名空间和访问符

- 映射

- 作用域

    ```less
    @red: red;
    header {
        @red: white;
        color: @red; // white
    }
    ```

- 导入

    ```less
    /* less文件可以省略扩展名 */
    @import "variables"; // variables.less
    @import "index.css";
    ```

## 常用技巧

## 使用

1. node环境中：命令行

```s
npm i -g less

> lessc styles.less styles.css
```

2. 浏览器中使用: 脚本

```html
<script src="*/less.min.js"></script>
```

3. 构建工具中使用

> eg： vite中直接安装相应包即可

```
npm i -D less less-loader
```
