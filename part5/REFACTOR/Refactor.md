# 代码重构

## 一、哪些是需要重构的代码？

## 二、编写自动化测试代码，构筑一套测试体系

> 既要测试**正常路径**，又要测试**边界条件**：比如数组为空时，数字为0时，数字为负数时等等

## 三、重构名录

1. 提炼函数
  - what:
    > 理解部分代码作用，并提炼到一个独立的函数之中，以这段代码的作用命名
  - when :
    > 将意图（干什么）与实现（怎么干的）分开：当一段代码需要花费一段时间去弄清它是干什么的，就提炼它
  - how ：
    > 建议： 短函数（6行以下），可以放在源函数中就放入原函数中，**函数名字很重要**

    ```
    ```
2. 内联函数
  - what:
    > 将两个或两个以上的（意图清晰明显的）函数，合并在一起
  - when :
    > 当两个或两个以上的函数存在非必要的间接性时，当有一堆组织不合理的小函数时，可以先全部内联到一个函数中，再拆分
  - how ：
    >

    ```
    ```
3. 提炼变量
  - what:
    > 将复杂的表达式等提炼成局部变量，**变量名**很重要
  - when :
    > 当表达式非常复杂而难以阅读时，
  - how ：
    >

    ```
    ```
4. 内联变量
  - what:
    >
  - when :
    > 当变量名没有表达式表达得更直接时，直接用表达式替换变量
  - how ：
    >

    ```
    ```
5. 改变函数声明
  - what:
    >
  - when :
    > 当一个函数名并不能很好表达作用时，需要改变它
  - how ：
    >

    ```
    ```
6. 封装变量
  - what:
    >
  - when :
    > 想要搬移一处被广泛使用的数据
  - how ：
    > 往往先以函数形式封装所有对该数据的访问，可以将重新组织数据转化为重新组织函数，数据的作用域越大，封装就越重要。提高代码的不可变性。全局对象变量，提取时返回该数据的一份副本（Object.assign || 构造函数）

    ```
    ```
7. 变量改名
  - what:
    >
  - when :
    >
  - how ：
    >

    ```
    ```
8. 引入参数对象
  - what:
    > 将一组参数数据组织成一个数据结构
  - when :
    >
  - how ：
    >

    ```
    ```
9. 函数组合成类
  - what:
    > 将一组操作同一块数据的函数组建成一个类
  - when :
    >
  - how ：
    >

    ```
    ```
10. 函数组合成变换
  - what:
    >
  - when :
    >
  - how ：
    >

    ```
    ```
11. 拆分阶段
  - what:
    >
  - when :
    >
  - how ：
    >

    ```
    ```

1. 封装记录
  - what:
    >
  - when :
    >
  - how ：
    >

    ```
    ```
2. 封装集合
  - what:
    >
  - when :
    >
  - how ：
    >

    ```
    ```
3. 以对象取代基本类型
  - what:
    >
  - when :
    >
  - how ：
    >

    ```
    ```
4. 以查询取代临时变量
  - what:
    >
  - when :
    >
  - how ：
    >

    ```
    ```
5. 提炼类
  - what:
    >
  - when :
    >
  - how ：
    >

    ```
    ```
6. 内联类
  - what:
    >
  - when :
    >
  - how ：
    >

    ```
    ```
7. 隐藏委托关系
  - what:
    >
  - when :
    >
  - how ：
    >

    ```
    ```
8. 移除中间人
  - what:
    >
  - when :
    >
  - how ：
    >

    ```
    ```
9. 替换算法
  - what:
    >
  - when :
    >
  - how ：
    >

    ```
    ```


1. 搬移函数
2. 搬移字段
3. 搬移语句到函数
4. 搬移语句到调用者
5. 以函数调用取代内联代码
6. 移动语句
7. 拆分循环
8. 以管道取代循环
9. 移除死代码
10. 拆分变量

1. 拆分变量
2. 字段改名
3. 以查询取代派生变量
4. 将引用对象改为值对象
5. 将值对象改为引用对象

1. 分解条件表达式
2. 合并条件表达式
3. 以卫语句取代嵌套条件表达式
4. 以多态取代条件表达式
5. 引入特例
6. 引入断言

1. 将查询函数与修改函数分离
2. 函数参数化
3. 移除标记参数
4. 以查询取代参数
5. 以参数取代查询
6. 移除设值函数
7. 以工厂函数取代构造函数
8. 以命令取代函数
9. 以函数取代命令

1. 函数上移
2. 字段上移
3. 构造函数本体上移
4. 函数下移
5. 字段下移
6. 以子类取代类型码
7. 移除子类
8. 提炼超类
9. 折叠继承体系
10. 以委托取代子类
11. 以委托取代超类
