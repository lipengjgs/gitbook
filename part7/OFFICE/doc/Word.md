# Tricks

## 1、 列表缩进不整齐处理方法

```js
 // WORD右键调整列表缩进： 编号之后选择“空格”
```

## 2. 报错 Cant find the word document template: wordtorqm.doc

```js
1. 运行regedit
2. HKEY_CURRENT_USER\SOFTWARE\MICROSOFT\OFFICE\WORD\ADDINS\WORDTORQM12.CONNECT
3. LoadBehavior: 3 改为 2
4. 关闭,重新启动word
```
