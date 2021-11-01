# CSS

1. [介绍](#介绍)
2. [使用方式](#使用方式)
3. [语法](#语法)
4. [选择器](#选择器)
   1. [分类](#分类)
   2. [优先级](#优先级)
5. [单位、基本属性](#单位基本属性)
   1. [单位](#单位)
   2. [基本属性](#基本属性)
6. [盒模型](#盒模型)
   1. [元素分类(见HTML文档)](#元素分类见html文档)
   2. [模型](#模型)
   3. [margin的合并问题](#margin的合并问题)
   4. [margin的溢出问题](#margin的溢出问题)
   5. [margin对行内(inline)和行内块(inline-block)的处理](#margin对行内inline和行内块inline-block的处理)
   6. [BFC 原理](#bfc-原理)
7. [表格](#表格)
8. [浮动](#浮动)
9. [定位](#定位)
   1. [相对定位](#相对定位)
   2. [绝对定位](#绝对定位)
   3. [固定定位](#固定定位)
10. [背景](#背景)
11. [渐变](#渐变)
12. [转换](#转换)
13. [过渡](#过渡)
14. [动画](#动画)
15. [布局](#布局)
16. [自定义标签(仅适用于长尾的地方)](#自定义标签仅适用于长尾的地方)
17. [hack](#hack)
18. [优化](#优化)
19. [命名规范](#命名规范)
20. [特殊有用属性汇总](#特殊有用属性汇总)
21. [实用技巧](#实用技巧)
22. [附录](#附录)

## 介绍

> CSS 最好是也采用编程的思维去写

- 为什么不用HTML属性

    1. 相同样式效果要使用不同属性方式不统一
    2. 可重用性和可维护性不高


- 什么是css

    1. Cascading Style Sheets 层叠样式表，构建网页的样式，是页面的表现
    2. 以统一的方式定义元素的样式，有效提升可重用性和可维护性
    3. 实现了**内容和样式分离**
    4. 用CSS样式取代HTML属性(除了类似`colspan`等属性)

## 使用方式

- 内联样式

```html
<a style="color:red;">link</a>
```

- 内部样式表

```html
<head>
    <meta charset="utf-8">
    <title>html</title>
    <style>
        div {
            color: red;     
        }
    </style>
</head>
<body>
    <div class="content">red</div>
</body>
```

- 外部样式表

```html
<head>
    <meta charset="utf-8">
    <title>html</title>
    <!-- rel是relationship的意思 -->
    <link rel="stylesheet" href="common.css">
</head>
<body>
    <div class="content">red</div>
</body>
```

```css
/* common.css */
div {
    color: red;
}
```

## 语法

- 格式

```css
/* [选择器] {
    [属性名]: [属性值];
} */
.float-l {
    float: left;
}
```

- 样式表特征

    1. 继承性: 大部分的样式规则和样式声明是可以被继承的；
    2. 层叠性: 一个元素定义可多个样式, 不冲突时，多个样式表中的样式可以层叠为1个;
    3. 优先级: 当样式定义冲突时，按照不同样式表/规则的优先级来应用样式(**就近原则(近者优先)**)

        a. 内联样式 > 外部/内部样式表 > 浏览器缺省设置(UA)
        
        b. !important 规则:手动调整高优先级

        ```css
            /*
                使用方式：
                [选择器] {
                    [属性]:[值] !important;
                }
                注意： !important 尽量少用
            */
            .left {
                float: left !important;
            }
        ```

- debug

    1. 提示：`Unknown property name` 属性名写错了!
    2. 提示：`Invalid property value` 属性值写错了!!!!
    3. 所编写的样式没有出现在开发工具里的`Styles`中，选择器写错了!
    4. 作为结尾缺少`}`，该样式规则以后的所有样式规则都没有效果显示

## 选择器

> 作用： 匹配页面元素

### 分类

- 通用选择器
    
    ```css
    /* 匹配页面中所有的元素 */
    * {
        font-size: 24px;
    }
    ```

- 元素选择器
    
    ```css
    /* 控制某元素的默认样式 */
    div {
        font-size: 24px;
    }
    ```

- 类选择器
    
    ```css
    /* 类选择器不能以数字开头 */
    .paragraph {
        font-size: 24px;
    }
    .paragraph .p1 {
        font-size: 24px;
    }
    p.paragraph {
        font-size: 24px;
    }
    ```

- id选择器
    
    ```css
    #content {
        font-size: 24px;
    }
    div#content {
        font-size: 24px;
    }
    ```

- 群组选择器
    
    ```css
    a, #content, .paragrapth {
        font-size: 24px;
    }
    ```

- 后代选择器
    
    ```css
    /* 选择作为某元素的后代元素 */
    div #content {
        font-size: 24px;
    }
    ```

- 子代选择器
    
    ```css
    div > .line {
        font-size: 24px;
    }
    ```

- 伪类选择器
    
    ```css
    /* 链接伪类 */
    :link {

    } 
    :visited {

    }
    /* 动态伪类 */
    :hover {

    }
    :active {

    }
    :focus {

    }
    /* 目标伪类 */
    /* 元素状态伪类 */
    /* 结构伪类 */
    /* 否定伪类 */
    ```

- 兄弟选择器
    
    ```css
    
    ```

- 属性选择器
- 伪元素选择器

### 优先级

- 元素选择器:   1
- 类选择器:    10
- 伪类选择器:  100
- ID选择器:   100
- 内联样式：  1000

## 单位、基本属性

### 单位

- %
- in  1in = 2.54cm
- cm
- mm
- px
- pt  1pt = 1/72in 主要用于修饰文字
- em  1em相当于当前字体的尺寸
- rem
- vw
- vh

- rgb(11,11,11)
- rgb(20%, 10%， 50%)
- rgba(0,0,0,.5)
- `#aaa`

### 基本属性

- width
- min-width
- max-width
- height
- min-height
- max-height

- overflow: visible || hidden || scroll || auto
- overflow-x
- overflow-y

- border
- border-top
- border-right
- border-bottom
- border-left
- border-color
- border-width
- border-style
- border-[方向]-[属性]
- border-radius
- border-[方向]-[方向]-radius
- box-shadow

    > 一个比较舒服的边框阴影参数：

    ```CSS
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 
    0 4px 5px 0 rgba(0,0,0,0.14), 
    0 1px 10px 0 rgba(0,0,0,0.12);
    ```

- outline


## 盒模型

### 元素分类(见HTML文档)

- 块级
- 行内块
- 行内

### 模型

> 定义了元素框处理元素内容、内边距、边框、外边距的方式
>
> width 与 height 指的是内容区域的宽度和高度
>
> 增加内外边距、边框会影响元素框的总尺寸
>
> 元素实际宽度 = 左右外边距 + 左右边框 + 左右内边距 + width
>
> 同理可得元素实际高度

- 外边距

    ```css
    /* *
    * 默认具备外边距的元素：body, p, h1 - h6, pre, ol, ul, dl, dd
    */
    div {
        /* 上， 右， 下， 左*/
        margin: 1px 2px 3px 4px;
    }
    div {
        /* 所有都为1px */
        margin: 1px;
    }
    div {
        /* 上下， 左右 */
        margin: 1px 2px;
    }
    div {
        /*上， 左右， 下*/
        margin: 1px 10% 3px;
    }
    div {
        /* 浏览器自动计算左右外边距，上下无效; 水平居中，但是块级元素必须设置宽度 */
        margin: auto;
    }
    div {
        margin-top: 1px;
    }
    ```

- 内边距

    ```css
    /* 方位同margin, 设定内边距，只能影响到自己，不会影响到其它元素 */
    div {
        padding: 1px 2px 3px 4px;
    }
    /* 对于button, 不管是input button, 还是普通button, 设定宽度和高度时，包含边框以及内边距 */
    ```

- box-sizing

    > 指定盒子尺寸计算模式
    >
    > content-box: 默认值，为元素所设定的width和height只是内容区域的width和height，不包含元素的边框和内边距
    >
    > border-box: 为元素所指定的width, height会包含**元素的内容宽高以及内边距和边框的距离**

    ```css
    div {
        box-sizing: border-box;
    }
    ```

### margin的合并问题

    css在盒模型中规定:
    In this specification, the expression collapsing margins means that adjoining margins (no non-empty content, padding or border areas or clearance separate them) of two or more boxes (which may be next to one another or nested) combine to form a single margin. 所有毗邻的两个或更多盒元素的margin将会合并为一个margin共享之。毗邻的定义为：**同级或者嵌套的盒元素**，并且它们之间没有非空内容、Padding或Border分隔。

    - 让父级具有“包裹性”
    - 将父级over-flow设为hidden
    - 将父级display设为inline-block
    - 将父级float或absolute
    - 改变父级的结构
    - 给父元素设置padding
    - 给父元素设置透明border

### margin的溢出问题

    子债父还
    在满足一定的条件下，当设置子元素的上下外边距的时候，可能会作用到父元素上
    条件：
        1、父元素没有边框
        2、子元素必须是父元素中的第一个或最后一个元素时
    解决：
        1、父元素增加上下边框    弊端：会影响父元素的尺寸
        2、通过父元素的内边距，取代子元素的外边距 弊端：会影响父元素的尺寸

### margin对行内(inline)和行内块(inline-block)的处理
                        
    1、对于行内元素，上下margin无效
    2、对于行内块元素，上下margin会影响到同行的所有元素

### BFC 原理

    BFC的三个特性: 

    BFC会阻止垂直外边距（margin-top、margin-bottom）折叠
    按照BFC的定义，只有同属于一个BFC时，两个元素才有可能发生垂直Margin的重叠，这个包括相邻元素，嵌套元素，只要他们之间没有阻挡(例如边框，非空内容，padding等)就会发生margin重叠。

    因此要解决margin重叠问题，只要让它们不在同一个BFC就行了，但是对于两个相邻元素来说，意义不大，没有必要给它们加个外壳，但是对于嵌套元素来说就很有必要了，只要把父元素设为BFC就可以了。这样子元素的margin就不会和父元素的margin发生重叠了。

    BFC不会重叠浮动元素
    BFC可以包含浮动
    我们可以利用BFC的第三条特性来“清浮动”，这里其实说清浮动已经不再合适，应该说包含浮动。也就是说只要父容器形成BFC就可以，简单看看如何形成BFC

    float为 left|right
    overflow为 hidden|auto|scroll
    display为 table-cell|table-caption|inline-block
    position为 absolute|fixed
    
    可以对父容器添加这些属性来形成BFC达到“清浮动”效果


## 表格

## 浮动

## 定位

> position: 值 1 - static(默认); 2 - relative; 3 - absolute; 4 - fixed;
>
> 当元素定位方式为 relative/absolute/fixed 的时候，称元素为 “已定位元素”
>
> 配合偏移属性使用 top/bottom/left/right
>
> 配合堆叠顺序属性 z-index

### 相对定位

> 元素会相对于它原来的位置偏移某个距离，用于位置微调 `position: relative;`

### 绝对定位

> `position: absolute;`

1. 脱离文档流-不占据页面空间
2. 绝对定位元素会相对于最近的**已定位**的祖先元素；实现位置初始化
3. 如果元素没有已定位的祖先元素，那么它的位置相对于最初的包含块(body,html)实现初始化
### 固定定位

> `position: fixed;`

## 背景

```css
div {
    background: red url() repeat scroll top;
}
div {
    background: red;
}
div {
    background-color: red;
}
div {
    background-image: url();
}
div {
    /* 宽度，高度 */
    background-size: 200px 100px;
    background-size: cover;
    background-size: contain;
}
div {
    background-repeat: no-repeat;
    background-repeat: repeat-x;
    background-repeat: repeat-y;
}
div {
    /* scroll: 默认值, 背景会随着文档滚动  /
    background-attachment: scroll;
    background-attachment: fixed;
}

```

## 渐变

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="lipengjgs" data-slug-hash="zYxqWNe" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="TextColor">
  <span>See the Pen <a href="https://codepen.io/lipengjgs/pen/zYxqWNe">
  TextColor</a> by Li Peng (<a href="https://codepen.io/lipengjgs">@lipengjgs</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 转换

> 改变元素在网页中的位置，大小，角度，形状的一种特殊效果
>
> 元素可以实现2D转换(x,y)以及3D(x,y,z)转换

- transform
    - none
    - transform-functions: 表示一个或者多个转换函数，用空格分开
- tranform-origin

    ```css
    transform-origin: 0px 0px;
    transform-origin: 0% 50%;
    transform-origin: center center;
    /* 3D 则取3个值 */
    ```

> 2D

- translate()
- scale(): 默认值 ：1   缩小：0-1之间的小数   放大：大于1的数值
    - scaleX()
    - scaleY()
- rotate(2deg): 正值为是顺时针，负值为逆时针
- skew()

> 3D

- perspective: 假定人眼到投射平面的距离, 加在3D转换元素的父元素上
- rotate()
- translate()
  - translateZ()
- transform-style： 规定如何在3D空间中呈现被嵌套的元素
  - flat
  - preverve-3d

```css
/* 注意：
					1、元素旋转时，坐标轴也跟着转
						可能会影响后续的位移操作
					2、转换原点会影响最终的转换效果
 */
```

## 过渡

> 使CSS属性值在一段时间内平滑的过渡，主要关注的是变化过程

> 四大属性

- transition-property
    - none
    - all：所有属性采用过渡效果展示
    - property: 使用过渡效果的属性名称 - 颜色属性；取值为数值的属性；转换属性；渐变属性；visibility；阴影属性 
- transition-duration： s | ms 必须设置，不然没有效果
- transition-timing-function
    - ease(默认) 慢速开始， 快速变快，慢速结束
    - linear 匀速
    - ease-in 慢速开始，加速效果
    - ease-out 快速开始，减速效果
    - ease-in-out 慢速开始和结束，中间先加速后减速
- transition-delay: s | ms

> 触发过渡： 用户行为； :hover, :active, :focus

```css
a:hover {
    transition: width .2s linear 2s;
}
```

## 动画

- 关键帧： 元素在某个时间点上的状态（样式）

```css
/* 1. 声明动画 */
@keyframes [move] {
    /* 开始还可以用 from */
    0% {

    }
    50% {

    }
    /* 结束还可以用 to */
    100% {

    }
}
/* 2. 调用动画 */
/*animation-name 指定 要调用的动画名称
animation-duration 指定 完成一个动画的周期 需要的时长
animation-timing-function 指定 动画的 时间速度 曲线函数   值：ease,linear,ease-in,ease-out,ease-in-out
animation-delay 延迟
animation-iteration-count 指定动画播放次数  值： 1、具体数值 2、infinite 无限次播放
animation-direction 指定动画播放方向 
                    1、normal 正常，0% - 100% 
                    2、reverse 逆向播放，100% - 0% 
                    3、alternate 轮流播放   奇数次数时：正向播放  偶数次数时：逆向播放
animation    animation:name duration timing-function delay iteration-count direction
animation-fill-mode 规定动画在播放前后，填充效果
			1、none 不改变默认行为
			2、forwards 当动画完成后，保持在最后一帧的状态上
			3、backwards 当动画播放前(在延迟时间内)，元素保持在第一帧的状态上
			4、both 播放之前和播放之后 分别应用在第一帧和最后一帧上
animation-play-state 指定动画的播放状态(播放 还是 暂停)
			1、paused 暂停
		    2、running 播放*/
div {
    animation: move .2s linear 1s infinite reverse;
    animation-fill-mode: forwards;
    animation-play-state: running;
}


```

## 布局

## 自定义标签(仅适用于长尾的地方)

```css
.db-ell {
  ...
}
<db-ell class='cl-a'></db-ell>
```

## hack

> 专门解决IE低版本的问题（现在已经用不上了）

2、标准模式和混杂模式
		IE6之前，不同浏览器之间没有兼容性可言
		Netscape --> Navigator
		IE6之后，各个浏览器厂家开始寻求标准统一。IE浏览器允许向前兼容
		IE浏览器运行模式：
		1、混杂模式
			无标准可言
		2、标准模式
			完全遵循标准
		3、准标准模式
		不同模式下，浏览器主要对CSS(框模型)和JS解析效果会不同
		触发各种模式：
		1、触发混杂模式
			不声明 DOCTYPE
			IE将采用IE5.5内核来渲染页面
		2、触发准标准模式
	3、什么是CSSHack
		针对不同的浏览器编写不同的CSS
		实现浏览器的兼容性
		CSSHack原理：  使用 优先级 来解决兼容性问题
	4、CSSHack的实现方式
		1、CSS类内部Hack
			给css属性或值加 前后缀的方式解决兼容性
		2、选择器Hack
			给选择器加前缀 解决兼容性
		3、HTML头部引用Hack
			条件注释
			在注释中增加条件判断，判断条件是否满足指定浏览器，从而决定当前注释是否有效
			语法：
			<!--[if 条件 IE 版本]>
				条件注释内容
			<![endif]-->
			条件：
				1、省略条件不写
					判断是否为IE浏览器或是否为IE指定版本浏览器
					<!--[if IE]>
						该段内容只能在IE中显示
					<![endif]-->

					<!--[if IE 6]>
						该段内容只能在IE6中显示
					<![endif]-->
				2、gt
					大于
					在 大于指定版本的浏览器中 正常显示
				3、gte
					在 大于等于 指定版本的浏览器中 正常显示
				4、lt
					小于
					在 小于指定版本的浏览器中 正常显示
				5、lte
					小于等于
				6、!
					非
					选择条件版本意外所有版本
					<!--[if !IE 6]>
					<![endif]-->
					
					<!--[if !IE]>
						该段代码只能在非IE浏览器中显示
					<![endif]-->


## 优化

## 命名规范

## 特殊有用属性汇总
## [实用技巧](https://github.com/chokcoco/iCSS)
1. 黑白图片

    ```CSS
    img { 
        filter: grayscale(100%); 
        -webkit-filter: grayscale(100%); 
        -moz-filter: grayscale(100%); 
        -ms-filter: grayscale(100%); 
        -o-filter: grayscale(100%);
    }
    ```

2. 页面顶部阴影

    ```CSS
    body:before { 
        content: ""; 
        position: fixed; 
        top: -10px; 
        left: 0; 
        width: 100%; 
        height: 10px; 
        -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,.8); 
        -moz-box-shadow: 0px 0px 10px rgba(0,0,0,.8); 
        box-shadow: 0px 0px 10px rgba(0,0,0,.8); 
        z-index: 100;
    }
    ```

3. 给`body`行高

    ```CSS
    body { 
        line-height: 1;
    }
    ```

4. 优化显示文本

    ```CSS
    html { 
        -moz-osx-font-smoothing: grayscale; 
        -webkit-font-smoothing: antialiased; 
        text-rendering: optimizeLegibility;
    }
    ```

5. 使用伪类实现增大点击热区

    ```CSS
    .btn::before {
        content:"";
        position:absolute;
        top:-10px;
        right:-10px;
        bottom:-10px;
        left:-10px;
    }
    ```

6. 使用`shape-outside`实现特殊排版

   ```css
    .pol {
        shape-outside: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    }
   ``` 

7. Sublinme Emmet插件（CSS片段自定义）

8. 行高trick

    ```CSS
    /* 根据该元素本身的字体大小 设置行高 */
    lineheight: 1;
    ```

## 附录

- [参考手册](http://css.cuishifeng.cn/)
- [animation.css](https://animate.style/)
- 代码排版：pygments.org || [planetb](http://www.planetb.ca/syntax-highlight-word)
- [CSS Conf](http://css.w3ctech.com)
- [参考网站01](https://css-tricks.com/the-shapes-of-css/)
- [参考网站02](https://github.com/30-seconds/30-seconds-of-css)
- <a href="../code/index.html" target="_blank">demo</a>
- <a href="../code/styles.css" target="_blank">style.css</a>

