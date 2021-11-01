# BOM

1. [window定位](#window定位)
   1. [window对象](#window对象)
2. [定时器](#定时器)

## window定位

### window对象
   
> 浏览器中代替ES标准中的`Global`，充当全局对象
>
> 封装了浏览器软件以及窗口的信息

1. 打开窗口: 
   ```js
    window.open("url","name")
        name属性是内存中窗口的名称
                在打开窗口时，才赋值
        name的默认值: _self _top _blank
                也可自定义name属性
        规定: 相同name属性的窗口只能打开一个
                后打开的会替代先打开的
    打开链接: 
        1. 替换当前窗口内容,可以后退

        <a href="url" [target="_self"]>
        window.open("url","_self");

        2. 替换当前窗口内容，禁止后退

        location.replace("url")

        3. 在新窗口打开，可重复打开多个

        <a href="url" target="_blank">
        window.open("url"/*,"_blank"*/);

        4. 在新窗口打开，只能打开一个

        <a href="url" target="自定义name属性">
        window.open("url","自定义name属性")
    ```

2. 窗口大小和窗口位置

    ```js
    窗口大小: 
        完整窗口大小: window.outerHeight/outerWidth
        文档显示区大小: window.innerHeight/innerWidth
    调整窗口大小: 
        1. 在打开窗口时:
        var config="top=?,left=?,height=?,width=?";
        window.open("url","name","config")

        2. 在窗口打开后，调整大小: 
            window.resizeTo(宽,高)
            window.resizeBy(宽的增量,高的增量)
    窗口定位: 
        窗口左上角相对于屏幕左上角的坐标: 
            top： window.screenTop|screenY
            left: window.screenLeft|screenX
    移动窗口位置: 
            window.moveTo(x,y): 将窗口左上角移动到x，y的位置
            window.moveBy(x的增量，y的增量) 
    ```

3. 屏幕的宽和高: 

     1. 完整分辨率的宽高: screen.width/height
     2. 去掉任务栏后的可用宽高: screen.availWidth/availHeight
        在事件发生时，获得鼠标位置:
     e.screenX/screenY

## 定时器

- 一次性定时器

    what: 先等待一段时间，再自动执行一次任务
    when: 如果任务只执行一次时
          如果动画的启动，停止，变化规律都很随意
    how: 
      1. 任务函数

        ```js
        function task(){...}
        // 任务函数的结尾要考虑: *何时启动下一次*
        ```
      2. 启动一次性定时器

        ```js
        timer=setTimeout(task,wait)
        // 其中: wait是等待的毫秒数
        // 一次性定时器连续启动，也可实现周期性的效果
        ```
      3. 停止一次性定时器: 其实是停止等待，不再执行任务

        ```js
        clearTimeout(timer);
        timer=null;
        ```

- 周期性定时器

    what: 让程序每隔一段时间间隔，反复执行一项任务
    when: 只要连续，有规律的持续播放的动画
    how:
      1. 任务函数

          ```js
          function task(){...}
          // 任务函数通常要自己考虑:*何时停止*定时器的临界值
          ```
  	
      2. 定时执行

          ```js
  	    timer=setInterval(task,interval)
  	    // 其中: interval 是间隔的毫秒数
          // timer往往是一个全局变量: 用来保存当前定时器的序号
  		// 序号是内存中唯一标识一项任务的编号
          // 原理：首先将task函数对象和interval时间间隔记录在定时器对象中，再返回当前任务的序号
  	    // 然后，定时器会按照指定时间间隔，将task函数定时加入回调队列(callback queue)中。
          // 只有ECS中没有正在执行的函数时，才将callbackqueue中的函数加入ECS中执行
          ```

      3. 停止定时器

          ```js
          clearInterval(timer);
          ```
