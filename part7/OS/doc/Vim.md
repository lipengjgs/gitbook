# [Vim](http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/)

> 工具是拿来用的，不要让它成为一个负担！
>
> 可以利用`XShell`或是`vscode`进行练习
>
> vim是vi的加强版（升级版），是一个编辑器，不仅兼容vi的所有指令，而且还有一些新的特性在里面

## Four Steps

- Survive
- Feel Comfortable
- Better, Stronger, Faster
- SuperPower

## Linux中打开文件

```s
vi [filename]
vim [filename]
```

## 模式切换

1. 正常模式

    一般用于浏览文件，也包括一些复制、粘贴、删除等操作。启动vim后默认位于正常模式。不论，位于什么模式下，`Esc`键按两下都会进入正常模式

2. 输入模式

   正常模式下 `i,I,a,A`等，会进入插入模式

3. 命令模式

   正常模式下，按下`:`键，会进入命令模式。可执行一些输入并执行一些vim或插件提供的指令，就像shell一样

4. 可视模式

   正常模式下按下`v V ctrl+v`可以进入可视模式，选择文本

## 各种命令操作

1. 正常模式下

    - `dd` 删除当前行，并把删除的行存到剪贴板里，有复制的功能
    - `y` 复制选中的内容
    - `yy` 复制一行
    - `p` 粘贴剪贴板的内容
    - `0` 光标移动到行头
    - `$` 光标移动到本行行尾
    - `^` 到该行第一个非空字符处 (`Shift+6`)
    - `g_` 到该行最后一个非空字符处
    - `/pattern` 查找对应的文字, 按`Enter`键结束, 上下选择按`n`、`N`
    - `u` 撤销到上一步
    - `Ctrl+r` 重新操作上一步，redo
    - `a` 在光标末尾追加插入
    - `A` 在行尾追加插入
    - `gg` 回到页头
    - `G` 到文件结束 (`Shift+g`)
    - `nG` 到文件第几行
    - `h` 左移
    - `j` 下移
    - `k` 上移
    - `l` 右移
    - `H` Move to top of screen
    - `M` Move to middle of screen
    - `L` Move to bottom of screen
    - `%` Move to associate {} () []
    - `w` 下一个单词
    - `W` Move to next blank delimited word
    - `b` 移到单词最左边
    - `B` Move to the beginning of blank delimited word
    - `x` 删除光标下面的字符
    - `o` 在当前行下面插入新的一行
    - `O` 在当前行之前插入新的一行
    - `cw` 替换当前光标到单词末尾
    - `Ctrl + f` 下一页
    - `Ctrl + b` 上一页
    - `zz` 让光标所在的行居屏幕中央
    - `zt` 让光标所在的行居屏幕最上一行
    - `zb` 让光标所在的行居屏幕最下一行
    - `w/b/e` 单词移动
    - `W/B/E` 单词移动（更快）
    - `.` 重复执行上一条命令
    - `f/F`:查询  f+（想查询的单词）
    - `v+i+大括号/中括号/单引号/双引号` 选中括号、引号里的内容。
    - `v+a+大括号/中括号/单引号/双引号` 选中括号、引号里的内容(包含括号)。
    - `(` Move a sentence back
    - `)` Move a sentence forward
    - `{` Move a paragraph back
    - `}` Move a paragraph forward

    - 全选操作： ggvG
    - 全部复制： ggyG
    - 全部删除： dG

    - repeat Yourself: `2dd`、`3p`、`100idesu [Esc]`、`.`、`3.`
    - `NG` 这里的N是指行数，跳到第几行
    - `%` 跳到括号那里
    - `*`
    - `0y$` 复制整行,这里 `y`的功能可类比到`d` `v` `gU` `gu`
    - 多行操作: `ctrl+v jjj shift+i`

2. 输入模式下

    - 跟普通的输入文字是一样的

3. 命令模式下

    - `:n` 跳到第几页
    - `:wq` `:x` `ZZ` 保存并退出
    - `:q!` 强制退出，不保存
    - `:w` 保存
    - `:e` 打开文件
    - `:saveas` 另存为
    - 替换全局所有 `:%s/aaa/bbb/g`
    - 替换第一行 `:s/aaa/bbb/`, `:s/aaa/bbb/g`

4. 可视模式下

    `ctrl+s` 让 `vim` 处于不可输入的状态， 这个时候`Ctrl + q`可以退出

## Appendix

- [vim学习视频](https://edu.51cto.com//center/course/lesson/index?id=200237)
