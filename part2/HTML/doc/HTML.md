# HTML

1. [介绍](#介绍)
2. [基本语法](#基本语法)
3. [文档结构](#文档结构)
   1. [文档类型声明](#文档类型声明)
   2. [HTML页面](#html页面)
4. [各类标记](#各类标记)
   1. [文本](#文本)
   2. [格式](#格式)
   3. [图像](#图像)
   4. [超链接](#超链接)
   5. [列表](#列表)
   6. [表格](#表格)
   7. [表单](#表单)
   8. [框架（集）](#框架集)
   9. [其它](#其它)
5. [工具](#工具)
6. [性能分析调优](#性能分析调优)
7. [疑难问题](#疑难问题)
8. [案例](#案例)
9. [附录](#附录)

## 介绍

> HTML(Hypertext Markup Language)超文本标记语言；表示**网页信息**的符号标记语言

- 定义了web内容的结构
- 文件以`.html`或`.htm` || `.xhtml` 作为后缀; 
- 特点
    可以设置文本的格式，比如标题、字号、文本颜色、段落等等
    可以创建列表
    可以插入图像和媒体
    可以建立表格
    超链接，可以使用鼠标点击超链接来实现页面之间的跳转

## 基本语法

> 标记语法: HTML中用于描述功能的符号称之为“标记”, 标记在使用时必须用尖括号`<`, `>`括起来
>
> 1. 标记的写法不分大小写，不管标签中的字母是否为大小写，依然解析正常；但是在编写网页的时候**尽量使用小写**；
>
> 2. 元素：也叫“标记”；实际上是语法规范，强调的是**标记中的内容**；标记和被标记的内容构建出HTML文档 `<标记>内容</标记>`
>
> 3. 空格键和回车键（除了pre, 文本中间等外）在网页中都不会起到任何作用，为了让代码清晰易读，可以使用空格和回车键进行编排。

```html
  <p>这是一个段落</p>
  <a>这是一个超链接</a>
  <head></head>
  <br/>
  <body></body>
  ...
```

- 分类

    ```html
    <!-- 封闭类型标记，也叫作双标记，必须成对出现 -->
    <footer></footer>
    <!-- 非封闭类型标记，也叫作空标记或单标记 -->
    <hr> <!--水平分割线-->
    <br/>
    <img>
    ```

- 元素分类

    > 分为 **行内元素** 和 **块级元素**
    > 1、行内元素：不会换行，可以和其他的行内元素位于同一行；使用场合：包裹文本，去设置文本的显示效果`display:inline;`
    > 所有行内元素都不具备`align`属性
    > 2、块级元素：默认的情况下，每个元素独占一行，适用场合，多数都会用于布局上`display:block;`

    ```html
    <!--行内-->
    <span></span> <!--不要让行内元素嵌套块级元素-->
    <img>
    <!--块级-->
    <div></div>
    <p></p> <!--p标记是不能嵌套块级元素-->
    <h1></h1>
    ...
    <h6></h6>
    ```

- 元素嵌套

    > 元素之间可以实现嵌套，从而表现出更为复杂的页面结构
    >
    > 注意嵌套的位置和顺序, 缩进

    ```html
    <div>
        <p>这是一个被嵌套的段落</p>
    </div>
    ```

- 元素属性和值

    > 作用: 修饰元素；
    >
    > 1. 属性的声明必须位于开始标记中；
    >
    > 2. 一个元素可以有多个属性，多个属性之间用空格隔开，并且排名不分先后；
    >
    > 3. 每个属性都可以有值，值和属性之间用 `=` 连接；
    >
    > 4. 值最好要放在引号中(`''` 或 `""`)；

    ```html
    <!-- 控制文本的水平对齐方式 -->
    <p align="center" id="p1">这是一段话</p>
    <input readonly> <!--有些属性可以不给值-->
    <p align="center"></p><!--属性值可以被引号包起来，也可以不包起来-->
    <p align='center'></p>
    <p align=center></p>
    ```

- 标准属性

    > 所有元素都具备的属性，称之为标准属性或通用属性；

    1. id; 
    2. title; 
    3. class; 
    4. style

- 注释

    > 允许出现在网页源码中，但是不会被浏览器所解释的文本，称之为注释
    >
    > 1、注释不能嵌套；
    >
    > 2、注释不能出现在`<>`中；

    - HTML 和 XHTML

    > 1999年12月24日 W3C推出HTML4.01标准规范;2000年1月26日 W3C推出XHTML1.0标准规范；
    >
    > XHTML1.0 版本 以 HTML4.01几乎相同，但是它是更严格更纯净的HTML版本:①要求标记必须要关闭;②要求属性值必须用引号引起来；
    >
    > H5目标：实现更加简洁的HTML代码

    ```html
    <br><!--空标记有无结束均可-->
    <br/>
    ```

## 文档结构

### 文档类型声明

```html
<!--出现在网页的最顶端-->
<!doctype html>
```

### HTML页面

> 显示在页面给别人去看的内容

```html
<html></html>
<!-- HTML文档的文档标记，也称为HTML开始标记 -->
<!-- 这对标记分别位于网页的最前端和最后端 <html> 在最前端表示网页的开始 </html>在最后端表示网页的结束 -->
<head></head>
<!-- HTML文件头标记，也称为HTML头信息开始标记 -->
<!-- 用来包含文件的基本信息，比如网页的标题、关键字，在<head></head>内可以放<title></title>、<meta></meta>、<style></style>等等标记 -->
<!-- 在<head></head>标记内的内容不会在浏览器中显示 -->
<title>内容</title>
<!-- HTML文件标题标记 -->
<!-- 网页的“主题”，显示在浏览器的窗口的左上边 -->
<!-- 网页的标题不能太长，要短小精悍，能具体反应页面的内容，<title></title>标记中不能包含其他标记 -->
<body>内容</body>
<!-- HTML文档的主体标记 -->
<!-- <body>...</body>是网页的主体部分，在此标记之间可以包含如<p></p>、<h1></h1>、<br>、<hr>等等标记，正是由这些内容组成了我们所看见的网页 -->
<!-- body标记的常见属性
        1.bgcolor 设置背景颜色
            <body bgcolor="red"></body>
        2.text 设置文本颜色
            <body text="green"></body>
        3.link 设置连接颜色
            <body link="blue"></body>
        4.vlink 已经访问了的链接颜色
            <body vlink="yellow"></body>
        5.alink 正在被点击的链接颜色
            <body alink="red"></body> -->
<meta>内容</meta>
<!-- 页面的元信息（meta-information） -->
<!-- 提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。 -->
<!-- - 必须的属性 content
            - 值：some_text
            - 定义与 http-equiv 或 name 属性相关的元信息
    - 常见的属性
        - 1.常用的name属性
            - 1.author
            - 2.keywords
            - 3.description
            - 6.others
    - 注意meta标记必须放在head元素里面 -->



<!-- 以下是具体例子： -->

<!--文档页面（文档标记）-->
<html>
    <!--网页头部（头标记）：定义页面全局信息，不会在浏览器中显示-->
    <head>
        <!--网页元信息数据：提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词; meta标记必须放在head元素里面; 必须的属性content-->
        <meta chaset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
        <meta name="keywords" content="value1,value2">
        <meta name="description" content="">
        <meta name="author" content="lipeng">
        <meta name="others" content="">
        <!-- 响应头的设置 -->
        <meta http-equiv="content-type" content="text/html;charset=utf-8" />
        <meta http-equiv="Page-Enter" content="revealTrans(duration=5.0,transition=9)">
        <!-- 标题标记：网页的标题不能太长，要短小精悍，能具体反应页面的内容 -->
        <title></title>
        <!-- short for "favorites icon"  ICO format will ensure it works as far back as Internet Explorer 6 -->

        <!-- If you encounter problems with the favicon not loading, verify that the Content-Security-Policy header's img-src directive is not preventing access to it -->

        <!-- third-generation iPad with high-resolution Retina display: -->
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://developer.cdn.mozilla.net/static/img/favicon144.a6e4162070f4.png">
        <!-- iPhone with high-resolution Retina display: -->
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://developer.cdn.mozilla.net/static/img/favicon114.0e9fabd44f85.png">
        <!-- first- and second-generation iPad: -->
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://developer.cdn.mozilla.net/static/img/favicon72.8ff9d87c82a0.png">
        <!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
        <link rel="apple-touch-icon-precomposed" href="https://developer.cdn.mozilla.net/static/img/favicon57.a2490b9a2d76.png">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="">
    </head>
    <!-- 主体标记 -->
    <body text="" bgcolor="" link="" vlink="" alink="">

        <script></script>
    </body>
</html>
<!-- <body vlink="#000000">表示已经点击(访问)过的可链接文字的的颜色黑色 -->
```

## 各类标记

### 文本

> 会让文本有不同的显示方式

- hn 标题标记
	- 共有6个级别，n的范围1~6，不同级别对应显示大小不同的标题，h1最大，h6最小
- font 字体设置标记
	- 设置字体的格式
			- 三个常用属性
				- 1.size（字体大小）
					- <font size="14px">
				- 2.color（颜色）
					- <font color="red">
				- 3.face（字体）
					- <font face="微软雅黑">

```html
<!--特殊字符（字符实体）-->
<!-- 显示结果----------描述----------实体名称----------实体编号 -->
 ---------------------空格---------- &nbsp; ----------&#160;
>--------------------大于号---------- &gt;---------- &#62;
<--------------------小于号---------- &lt;---------- &#60;
&--------------------和号---------- &amp;---------- &#38;
"--------------------引号---------- &quot; ---------- &#34;
'--------------------撇号---------- &apos; (IE不支持)---------- &#39;
￠--------------------分---------- &cent;---------- &#162;
£--------------------镑---------- &pound;---------- &#163;
¥--------------------日圆---------- &yen;---------- &#165;
€--------------------欧元---------- &euro;---------- &#8364;
§--------------------小节---------- &sect;---------- &#167;
©--------------------版权----------&copy;---------- &#169;
®--------------------注册商标---------- &reg;---------- &#174;
™--------------------商标---------- &trade;---------- &#8482;
×--------------------乘号---------- &times;---------- &#215;
÷--------------------除号---------- &divide;---------- &#247;
<!-- ... -->
```

```html
<!--标题标记-->
<!--以醒目(改变字体大小、加粗方式、垂直空白)的方式显示文本-->
<h1 align="left">一级标题</h1>
<h2 align="right">二级标题</h2>
<h3 align="center">三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

```html
<b>加粗</b>
<i>斜体</i>
<u>下划线</u>
<s>删除线</s>
<sub>下标</sub>
<sup>上标</sup>
<em>表示强调，通常显示为斜体字</em>
<tt>打印机字体标记</tt>
<cite>引用方式的字体，通常是斜体</cite>
<strong>表示强调，通常是粗体</strong>
<small>小型字体标记</small>
<big></big>
```
### 格式

- <br> 强制换行标记
	- 让后面的文字、图片、表格等等，显示在下一行
- <p> 换段落标记
	- 换段落，由于多个空格和回车在HTML中会被等效为一个空格，所以HTML中要换段落就要用<p>,<p>段落中也可以包含<p>段落！
- <center> 居中对齐标记
	- 让段落或者是文字相对于父标记居中显示
- <pre> 预格式化标记
    - 保留预先编排好的格式
- <hr> 水平分割线标记
	- 段落之间的分割线
- <div> 分区显示标记，也称之为层标记
	- 常用来编排一大段的HTML段落，也可以用于格式化表，和<p>很相似
	- 层可以多层嵌套使用

 ```html
<!--段落标记-->
<!--以特殊的方式来显示文本即段落的上和下都有垂直的空白-->
<p align="left">这里是段落</p>
<!--测试文字 lorem + tab-->
```

```html
<!-- 居中对齐标记 -->
<center></center>
<!--换行元素-->
<br>
<br/>
<!--块区分元素，也称之为层标记
Divs are so convenient to use that it's easy to use them too much.
As they carry no semantic value, they just clutter your HTML code. 
Take care to use them only when there is no better semantic solution and try to reduce their usage to the minimum 
otherwise you'll have a hard time updating and maintaining your documents.
-->
<div>这是块元素</div>
<!--行内区分元素-->
<span>行内元素</span>
<!--分割线元素-->
<hr size="" width="" color="" align="">
<hr/>
<!--预格式化-->
<pre>内容</pre>
```  

### 图像

- 路径分类及图像格式

    > 1. 绝对路径：访问网络资源：由 协议名称、主机名(域名/IP地址)、目录路径、文件名 组成；
    >
    > 2. 相对路径：从当前文件所在的位置处开始，去查找资源文件所经过的路径就是相对路径：
    >
    > - 同目录：直接通过 资源文件名称 进行引用即可
    > - 子目录：先进入，再通过资源名称进行引用；
    > - 父目录：先返回，在通过资源文件的名称或路径进行引用，返回:`../`
    >
    > 3. 根相对路径：永远都是从网站所在的服务器根目录处开始查找；`/`作为开始；

    ```html
    <!--1、URL(Uniform Resource Locator)统一资源定位符,俗称路径,用来表示网络资源的地址-->
    <!--2、URI-->
    <!--3、UR -->

    <!--1、.jpg: 图像图像联合专家组-->
    <!--2、.png：图形接口格式-->
    <!--3、.gif：可移植网络图形；采用无损压缩，有8位，24位，32位三种形式；支持 透明色(PNG24位不支持)-->
    ```

- img 

    1. 使用方法
        `<img src="路径/文件名.图片格式" width="属性值" height="属性值" border="属性值" alt="属性值">`
    2. 属性
    	- src属性
    		- src -> source 图片放到与页面同级的文件夹下有利于SEO; 不要使用外链图片; 指定我们要加载的图片的路径和图片的名称以及图片格式
    	- width属性
    		- 指定图片的宽度，单位px、em、cm、mm
        - height属性
    		- 指定图片的高度，单位px、em、cm、mm
    	- border属性
  			- 指定图标的边框宽度，单位px、em、cm、mm
        - alt属性
    3. 注意
    	- `<img>`为单标记，不需要使用`</属性>`闭合
    	- 在加载图像文件的时候，文件的路径或者文件名文件格式错误，将无法加载图片

  ```html
  <!--图像-->
  <!--严格区分大小写-->
  <!--width, height 单位默认为 px; 单位px、em、cm、mm-->
  <!--width 和 height 如果只给一个属性的话，那么另外一个属性会跟着等比缩放-->
  <!-- alt (Alternative text) 属性：
      1、当网页上的图片被加载完成后，鼠标移动到上面去，会显示这个图片指定的属性文字
      2、如果图像没有下载或者加载失败，会用文字来代替图像显示
      3、搜索引擎可以通过这个属性的文字来抓取图片 -->
   <!-- A figure could be several images, a code snippet, audio, video, equations, a table, or something else.    -->
  <figure>
      <img src="//www.baidu.com/img/bd_logo1.png" 
          width="270" 
          height="129" 
          alt="这里是一张图片">
      <figcaption>A pic from baidu</figcaption>    
  </figure>
  ```
### 超链接

> 链接又叫超链接，允许用户通过点击的操作完成页面的跳转`<a href="" target="打开方式" name="页面锚点名称" >链接文字或者图片</a>`

- href属性 : 链接的地址，链接的地址可以是一个网页，也可以是一个视频、图片、音乐等等
- target属性: 定义超链接的打开方式
	- 属性值
        1. _blank: 在一个新的窗口中打开链接
        2. _self(默认值): 在当前窗口中打开链接
        3. _parent: 在父窗口中打开页面（框架中使用较多）
        4. _top: 在顶层窗口中打开文件（框架中使用较多）
- name属性： 指定页面的锚点名称

```html
<!-- href 指的是 hypertext reference -->
<!-- 链接 -->
<a href="" target="_blank">内容</a>
<!-- target 的默认值是 _self -->

<!-- 链接表现形式 -->
<a href="1.rar" target="_blank">下载文件</a>
<a href="mailto:" target="_blank">发送邮件</a>
<a href="#" target="_blank">返回顶部空链接</a>
<a href="javascript:" target="_blank">链接到javascript</a>
<a href="页面url#id" target="_blank">链接到锚点（id,name 属性值）</a>
```

### 列表

> 将具有相似特征或先后顺序的内容按照从上到下的顺序排列起来
>
> 由 列表类型 和 列表项 组成的
>
> 列表类型：有序列表 和 无序列表
>
> 列表项：表示具体的列表中的内容

- `<li>` 列表项目标记
	- 每一个列表使用一个`<li>`标记
- `<ul>` 无序列表标记
	- <ul>声明这个列表没有序号
- `<ol>` 有序列表标记
	- 可以显示特定的一些顺序
			- 1.格式
				- <ol type="符号类型">
				- <li type="符号类型"></li>
				- <li type="符号类型"></li>
				- </ol>
			- 2.有序列表的type属性值
				- 1 - 阿拉伯数字1.2.3等等，默认type属性值
				- A - 大小字母A、B、C等等
				- a - 小写字母a、b、c等等
				- Ⅰ- 大写罗马数字Ⅰ、Ⅱ、Ⅲ、Ⅳ等等
				- ⅰ- 小写罗马数字ⅰ、ⅱ、ⅲ、ⅳ等等
			- 3.value
				- 指定一个新的序列数字起始值
			- 4.列表可以进行嵌套
- <dl><dt><dd> 定义型列表
	- 使用场合
		- 对列表条目进行简短的说明
	- 格式
			- <dl>
			- <dt>软件说明：</dt>
			- <dd>简单介绍软件的功能及基本应用</dd>
			- <dt>软件界面</dt>
			- <dd>用于选择软件的外观</dd>
			- </dl>

```html
<!-- 有序列表 -->
<ol type="1" start="2">
    <li></li>
</ol>
<!--type：  1、1 ：数字(默认值)
			2、a ：小写字母
			3、A ：大写字母
			4、i ：小写罗马字符
			5、I ：大写罗马字符
	  start:  列表标识的起始编号-->

<!-- 无序列表 -->
<ul type="">
    <li></li>
</ul>
<!--type：  1、disc,实心圆(默认值)
			2、circle,空心圆
			3、square,实心矩形
			4、none,不显示标识-->

<!-- 列表嵌套：有序列表和无序列表都可以 -->
<ul>
    <li>
        <ul>
            <li></li>
        </ul>
    </li>
</ul>

<!-- 定义列表: 使用场合-图文混排 -->
<dl>
    <dt></dt>
    <dd></dd>
</dl>

```

### 表格

> 由一些被称之为单元格的矩形框；按照从左到右从上到下的顺序排列到一起组成的
>
> 以一定的结构来显示信息
>
> 1、独占一行
>
> 2、宽度自适应(由内容来决定)

1. 基本格式 `<table 属性1="属性值1" 属性2="属性值2" ... ... >表格内容</table>`
2. 属性
	- width属性: 表示表格的宽度，他的值可以是像素（px）也可以是父级元素的百分百（%）
	- height属性: 表示表格的高度，他的值可以是像素（px）也可以是父级元素的百分百（%）
	- border属性: 表示表格外边框的宽度
	- align属性: 表格的显示位置
        	- 1.left 居左显示(默认)
			- 2.center居中显示
			- 3.right居右显示
    - cellspacing属性: 单元格之间的间距，默认是2px，单位像素
	- cellpadding属性: 单元格内容与单元格边框的显示距离，单位像素
	- frame属性: 控制表格边框最外层的四条线框
			- 1.void(默认值) 表示无边框
			- 2.above 表示仅顶部有边框
			- 3.below 表示仅有底部边框
    		- 4.hsides 表示仅有顶部边框和底部边框
			- 5.lhs 表示仅有左侧边框
			- 6.rhs 表示仅有右侧边框
			- 7.vsides 表示仅有左右侧边框
			- 8.box 包含全部4个边框
			- 9.border 包含全部4个边框
	- rules属性: 控制是否显示以及如何显示单元格之间的分割线
			- 1.none(默认值) 表示无分割线
			- 2.all 表示包括所有分割线
			- 3.rows 表示仅有行分割线
			- 4.clos 表示仅有列分割线
			- 5.groups 表示仅在行组和列组之间有分割线
3. `<tr>`标记
	- 定义表格的一行，对于每一个表格行，都是由一对<tr>...</tr>标记表示，每一行<tr>标记内可以嵌套多个<td>或者<th>标记
	- 可选属性
		- 1.bgcolor属性: 设置背景颜色
			- 格式: bgcolor="颜色值"
		- 2.align属性: 设置垂直方向对齐方式
			- 格式: align="值"
				- 1.bottom 靠顶端对齐
				- 2.top 靠底部对齐
				- 3.middle 居中对齐
		- 3.valign属性: 设置水平方向对齐方式
			- 格式: valign="值"
				- 1.left: 靠左对齐
				- 2.right: 靠右对齐
				- 3.center: 居中对齐
4. `<td>和<th>`
	- 1.<td>和<th>都是单元格的标记，其必须嵌套在<tr>标签内，是成对出现
	- 2.两者的区别
		- 1.<th>是表头标记，通常位于首行或者首列，<th>中的文字默认会被加粗，而<td>不会
		- 2.<td>是数据标记，表示该单元格的具体数据
	- 3.共同之处
		- 两者的标记属性都是一样的
	- 4.属性
		- 1.bgcolor: 设置单元格背景
		- 2.align: 设置单元格对齐方式
		- 3.valign: 设置单元格垂直对齐方式
		- 4.width: 设置单元格宽度
		- 5.height: 设置单元格高度
		- 6.rowspan: 设置单元格所占行数
		- 7.colspan: 设置单元格所占列数
5. <caption>标记

    如果表格需要使用标题，那么就可以使用<caption>标记
    属性 align
       - top: 标题放在表格的上部
       - bottom: 标题放在表格的下部
       - left: 标题放在表格的左部
       - right: 标题放在表格的右部 

```html
<table width="800" height="300" align="center" cellpadding="2" cellspacing="5" bgcolor="">
    <caption>标题</caption>
    <thead>
        <tr>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="" height="" align="" valign="" bgcolor="" colspan="" rowspan=""></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
    <tfoot>

    </tfoot>
</table>
<!-- 注意：如果不对表格行进行分组的话，那么默认都属于 tbody 中-->
<!-- 不规则表格 -->
<!-- 注意：无论是跨行还是跨列，被合并的单元格一定从代码中删除出去 -->

<!-- 表格嵌套 -->
<!-- 被嵌套的表格必须出现在<td>中 -->
```

### 表单

> 用于显示、收集信息，并将信息提交给服务器
> 表单form + 表单控件

```html
<!-- <form></form>定义表单的开始位置和结束位置，表单提交时的内容就是<form>表单中的内容
      method
	    1.get方式: 会将表单的内容附加在URL地址的后面，所以限制了提交的内容的长度，不超过8192个字符，且不具备保密性
		2.post方式: post方式提交时，将表单中的数据一并包含在表单主体中，一起传送到服务器中处理，没有数据大小限制
-->
<form action="" method="" enctype="" name="" target="">
</form>
<!-- action: 提交给服务器处理程序的地址
表单数据的处理程序的URL地址，如果为空则使用当前文档的URL地址，如果表单中不需要使用action属性也要指定其属性为”no“
 -->
<!-- 
	method: 1、get - 明文提交,所提交的数据时可以显示在地址栏上的，提交数据有大小限制-最大为2KB
			2、post - 隐式提交-所提交的内容是不会显示在地址栏上的，无大小限制
		    3、put
		    4、delete
    target: 和超链接的属于类似，用来指定目标窗口
 -->
 <!--
	 enctype: 设置表单的资料的编码方式
            1、application/x-www-form-urlencoded：允许将普通字符，特殊字符，都提交给服务器，不允许提交文件
	 		2、multipart/form-data：允许将文件提交给服务器
			3、text/plain：只允许提交普通字符，特殊字符，文件等都无法提交
 -->
 <!--
	 name: 表单的名称
 -->
```

```html
<!-- 表单控件 -->

<!-- 1、input -->
<!-- 
    - <input>标记
	- <input>标记没有结束标记
	- 基本语法
		- <input type="" name="" value="" size="" maxlength="">
	- 属性介绍
		- 1.type属性
			- type属性有两个值
				- 1.text 当type="text"时，<input>表示一个文本输入域
				- 2.password 当type="password"时，<input>表示一个密码输入域
		- 2.name属性
			- 定义控件的名称
		- 3.value属性
			- 初始化值，打开浏览器时，文本框中的内容
		- 4.size属性
			- 设置控件的长度
		- 5.maxlength属性
			- 输入框中最大允许输入的字符数

    - 1.提交按钮 当<input type="submit">时，为提交按钮
    - 2.重置按钮 当<input type="reset">时，为重置按钮
    - 3.普通按钮 当<input type="button">时，为普通按钮
    - 1.单选按钮 当<input type="radio">时，为单选按钮
    - 2.复选框   当<input type="checkbox">时，为复选框
    - 3.注意
        - 单选框和复选框都可以使用”cheked“属性来设置默认选中项
    - 当<input type="hidden">时，为隐藏表单域

	disabled: 禁用该控件, 只能看，不能改，不能提交给服务器
	type: text - 明文显示用户输入的数据
		  password - 密文显示用户输入的数据
		  radio - 单选按钮：radio的name,value,id最好都写上
		  checkbox - 复选框: checked - 默认被选中
		  submit - 负责将表中中的表单控件提交给服务器
		  reset - 负责将所有表单控件的值恢复为初始值
		  button - 普通按钮，执行客户端的脚本(JS)；value 按钮上显示的值
		  hidden - 隐藏域：不希望被用户看见，但是要提交给服务器的信息
		  file - 文件选择框：上传文件
				 1、上传文件时，method的值必须为 post
				 2、上传文件时，enctype的值必须为 multipart/form-data

  name: 匈牙利命名法 - 控件的缩写+功能名称
	value: 控件的值，控件的默认值
	maxlength: 限制输入的字符数
	readonly: 只能看，不能改，但是可以被提交
 -->
 <!-- 对于input来讲，如果不写 type 或者 type值写错的时候，默认都是文本框 -->
<input type="text" value="" name="txtUsername" maxlength="20" readonly>
<input type="checkbox" checked>	

<!-- 2、textarea -->
<!--
    - 能够输入多行文本的区域
    - 语法格式
	    - <textarea name="name" rows="value" cols="value" value="value"> ... ... <textarea>
        - rows属性和cols属性分别用来指定，显示的行数和列数，单位是字符个数

	允许用户录入多行数据到表单控件中
	name: txt+功能名称
	readonly: 只读
	cols: 指定文本区域的列数, 变相设置当前元素宽度
	rows: 指定文本区域的列数，变相设置当前元素高度
-->
<textarea disabled></textarea>

<!-- 3、 select -->
<!--
	- 1.语法格式
		- <select name="" size="value" multiple>
		- <option value="value" selected>选项1</option>
		- <option value="value">选项2</option>
		- <option value="value">选项3</option>
		- ... ... ...
		- </select>
	- 2.属性
		- 1.multiple属性
			- multiple属性不用赋值，其作用是，表示用可以多选的下来列表，如果没有这个属性就只能单选
		- 2.size属性
			- 设置列表的高度
		- 3.name属性
			- 定义这个列表的名称
	- 3.option标记
		- <option>标记用来指定列表中的一个选项，需要放在<select></select>之间
		- 值
			- 1.value
				- 给选项赋值，指定传送到服务器上面的值
			- 2.selected
				- 指定默认的选项

	name: sel+功能名称
	size: 取值大于1的话，则为滚动列表，否则就是下拉选项框
	multiple: 设置多选，允许多选（针对滚动列表）

	<option>中：
		value：选项的值
		selected: 预选中（选项框中的第一项会默认被选中）

-->
<select>
    <option></option>
    <option></option>
</select>

<!-- fieldset -->
<!-- 为控件分组 -->
<fieldset></fieldset>

<!-- legend -->
<!-- 为分组指定一个标题 -->
<legend></legend>

<!-- label -->
<!-- 关联 文本 与表达元素的，点击文本时，如同点击表单元素一样 -->
<!--
	for: 表示与该label相关联的表单控件的元素的ID值
-->
<label></label>
```

### 框架（集）

- 浮动框架`iframe`

```html
<!-- 可以在一个浏览器窗口中同时显示多个页面文档, 主要针对的是静态页面的引入 -->
<!-- 当浏览器不支持<iframe>元素时，将显示包裹的文本作为描述信息 -->
<!--
	src: 要引入页面的URL
	width: 
	height: 
	frameborder: 浮动框架的边框，如果不想要，可以设置为 0
-->
<iframe>内容</iframe>
```

> 框架集将浏览器划分成不同的部分，每一部分加载不同的网页，实现在同一浏览器窗口中加载多个页面的效果

1. 语法格式: `<frameset>....</frameset>`
2. 属性
	- 1.cols
		- 使用“像素数”和%分割左右窗口，“*”表示剩余部分
		- 如果使用“*”，“*”表示框架平均分成2个
		- 如果使用“*”，“*”，“*”表示框架平均分成3个
	- 2.rows
		- 使用“像素数”和%分割上下窗口，“*”表示剩余部分
	- 3.frameborder
		- 指定是否显示边框，0不显示，1显示
	- 4.border
		- 设置边框的大小，默认值5像素
3. <frame>子窗口标记
	- <frame>标记是一个单标记，该标记必须放在<frameset>中使用，在<frameset>中设置了几个窗口，就必须对应使用几个<frame>框架，而且还必须使用src属性指定一个网页
	- 属性
		- 1.src: 加载网页文件的URL地址
		- 2.name: 框架名称，是链接标记的target所要参数
		- 3.noresize: 表示不能调整框架大小，没有设置时就可以调整
		- 4.scrolling: 是否需要滚动条
			- 1.auto: 根据需要自动出现
			- 2.yes: 有
			- 3.no: 无
		- 5.frameborder
			- 是否需要边框
				- 1.（1）显示边框
				- 2.（0）不显示边框

### 其它

- 摘要与细节`summary`

```html
<!-- 允许用户对某些信息进行展开和收缩 -->
<!-- 用于定义细节 -->
<details></details>

<!-- 用于定义细节中的标题 -->
<summary></summary>

```

- 度量元素

```html
<!-- 定义一个度量衡 -->
<!--
	1、min ：定义度量范围的最小值，默认为0
	2、max ：定义度量范围的最大值，默认为1，一般情况下，将max值设置为 100
	3、value ：度量值，显示在度量元素上的数值，默认为0
-->
<meter>文本</meter>
```

- 时间元素

```html
<!-- 用于关联时间的不同表现形式 -->
<!--
	datetime: 文本所对应的 日期时间，如果日期和时间同时设置的话，日期和时间之间用“T”分割
-->
<time>文本</time>
```

- 高亮文本显示

```html
<!-- 以突出背景颜色的方式显示文本 -->
<mark></mark>
```

```html
<embed><embed>
<object></object>
```

## 工具

npm 包 `font-spider`， 压缩web font

## 性能分析调优

## 疑难问题

1. 微信页面中长按二维码（明明是`<img>`标签）只有复制，而没有弹出保存图片和识别二维码选项？

   - 检查页面是否有视口元数据，没有的话要加上

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
   ```

   - 检查CSS是否设置了

   ```css
   user-select:none;
   ```

   - 最好图片是否是在`<img>`中，而不是在`background-image`中
   - 利用Qrcode三方生成的canvas图片，将其转成图片给一个img标记

   ```javascript
   var url = canvas.toDataURL("image/jpeg");
   document.getElementById('img').src = url;
   ```

2. 如何设置多行文本溢出？

    ```css
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    ```

3. 页面中的文字排版处理？

    [参考](https://www.jianshu.com/p/a2993930215f)

4. window.requestAnimationFrame()

    > 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画；
    > 方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
    > 你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用`window.requestAnimationFrame()`
    > 该方法的返回值是一个请求ID，通过该ID可以取消回调函数`window.cancelAnimationFrame()`
    > 在现实中，尤其是游戏开发，我们要结合多种异步API
    > 作为背景的树木，流水等用requestAnimationFrame方法，玩家角色，由于需要速度的变化，那么用setTimeout比较合适
    > 一些非常炫的动画，可能就需要postMessage，setImmediate，Image.onerror等API

    ```js
    var start = null;
    var element = document.getElementById('SomeElementYouWantToAnimate');
    element.style.position = 'absolute';

    function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    element.style.left = Math.min(progress / 10, 200) + 'px';
    if (progress < 2000) {
        window.requestAnimationFrame(step);
    }
    }

    window.requestAnimationFrame(step);
    ```

5. script脚本加载策略

    ```html
    <!-- 使用defer来取代放在body末尾 -->
    <script src="script.js" defer></script>
    <!-- 或者使用DOMContentLoaded -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {

        });
    </script>
    ```

    - async and defer both instruct the browser to download the script(s) in a separate thread, while the rest of the page (the DOM, etc.) is downloading, so the page loading is not blocked by the scripts.
    - If your scripts should be run immediately and they don't have any dependencies, then use async.
    - If your scripts need to wait for parsing and depend on other scripts and/or the DOM being in place, load them using defer and put their corresponding `<script>` elements in the order you want the browser to execute them.

6. 在苹果微信客户端提交表单，发现form表单提交失败，PC正常，Android正常，Safari正常

    - 修改target属性，需要写成_self或者删掉target属性

7. 禁用页面缓存

    因为是HTML页面，可以于HEAD标签内直接添加META标签控制，其他文件就需要使用服务器设置文件控制`Header`

    ```html
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    ```

8. iOS新版微信底部工具栏遮挡问题??

    解决方法：

    ```js
    if (this.isWxBrowser()) {
        document.addEventListener('WeixinJSBridgeReady', () => {
            let cH = document.documentElement.clientHeight; // 页面高度
            let h = cH - document.getElementsByClassName('goods-list')[0].getBoundingClientRect().top;
            let footer = document.querySelector('footer');
            let bottomH = document.defaultView.getComputedStyle(footer, null).height;
            document.getElementsByClassName('goods-list')[0].style.height = h - parseFloat(bottomH) + 'px';
        })
    }
    ```

9.  html, htm, xhtml的区别

## 案例

1. 简要描述标准HTML文档的结构

```html
<!-- HTML文档的开始需要文档类型声明，剩下的页面内容需要包含在开始标记<html>和结束标记</html>之间。
在<html>元素中，包含两个主要的部分，文件头部分（<head>元素）和主体部分（<body>元素）。-->
<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    </head>
    <body>
    </body>
</html>
```

2. 如何定义页面的编码

```html
<!-- <meta> 元素可提供有关页面的元信息，比如页面编码、针对搜索引擎的描述和关键词等。
它位于文档的头部，是空标记，使用属性来定义与文档相关联的名称/值对。 在页面的头部分中，使用 <meta> 元素声明字符编码 -->
<!-- 上述代码用于设置页面的编码格式，这样，在具有不同的默认编码的系统上，
浏览器就可以根据编码的声明正确的选择，从而更容易正确查看页面中的字符。 -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
```

3. 编写一个标准格式的 HTML 文档，并定义页面的标题和编码

```html
<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>练习</title>
    </head>
    <body>
    </body>
</html>
```

4. 简要描述行内元素和块级元素的区别

    块级元素的前后都会自动换行，如同存在换行符一样。默认情况下，块级元素会独占一行。例如，<p>、<hn>、<div> 都是块级元素。在显示这些元素中间的文本时，都将从新行中开始显示，其后的内容也将在新行中显示。
    行内元素可以和其他行内元素位于同一行，在浏览器中显示时不会换行。例如，<a>、<span> 等。
    我们可以这样理解：如果元素是块级的，则总是在新行上显示，好比是书中的一个新段落；而元素如果是行内的，那么只能在当前行中显示，就像是段落中的一个单词。
    因此，块级元素常用来构建网页上比较大的结构，用于包含其他块级元素、行内元素和文本；而行内元素一般只能包含其他行内元素和文本。

5. 列举常用的文本标记，并简要描述其作用

   - 文本样式标记：如 <b>、<i>、<u>、<s>、<sup>、<sub>等，这些元素用来指定文本的外观，分别为：粗体、斜体、下划线、删除线、上标和下标。一般不太建议使用这些元素来定制文档的外观，而建议使用CSS样式来实现外观的定义。
   - 标题元素<hn>：标题元素让文字以醒目的方式显示，往往用于文章的标题，有6级标题，<h1>、<h2>、<h3>、<h4>、<h5>和 <h6>。
   - 段落元素<p>：用于表示一段文本，自成一个段落。
   - 换行元素<br>：当使用 <br> 元素时，它后面跟随的内容将从下一行开始显示。
   - 分区元素<span>和<div>：分区元素用于为元素分组，常用于页面布局。
   - 分隔线元素 <hr>：<hr> 元素用于在页面上创建一条水平线，常用于将页面的不同部分隔开。
   - 预格式化<pre>：保留源文档中的格式，即保留原来的换行和文本中的空白。

6. 超级链接有哪些常见的表现形式？

<a>元素用于创建超级链接，常见的表现形式有：

- 普通超级链接，语法为：<a href="" target="">文本</a>
- 下载链接，即目标文档为下载资源，语法如：<a href="DAY02.zip">下载</a>
- 电子邮件链接，用于链接到 email，语法如：<a href="mailto:tarena@tarena.com.cn">联系我们</a>
- 空链接，用于返回页面顶部，语法如：<a href="#">...</a>
- 链接到JavaScript，以实现特定的代码功能，语法如：<a href="javascript : …">JS 功能</a>

7. 锚点的作用是什么？如何创建锚点？

锚点是文档中某行的一个记号，类似于书签，用于链接到文档中的某个位置
在使用 <a> 元素创建锚点时，需要使用 name 属性为其命名，代码如下所示：<a name=”anchorname1”>锚点一</a>
然后就可以创建链接，直接跳转到锚点，代码如下所示：<a href=”#anchorname1”>回到锚点一</a>

8. 创建如下图所示的表格。
 
```html
<!-- <body> 元素添加内容，创建表格，并通过设置 <td> 元素的 colspan 或者 rowspan 属性设置单元格的横向合并或者纵向合并。 -->
<!-- 为了提高页面的美观性，设置了表格的边框，并适当设置表格的高度和宽度。代码如下所示： -->
<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>table</title>
    </head>
    <body>
        <table width="200" height="200" border="1">
            <tr>
                <td colspan="2">a</td>
                <td rowspan="2">b</td>
            </tr>
            <tr>
                <td rowspan="2">c</td>
                <td>d</td>
            </tr>
            <tr>
                <td colspan="2">e</td>
            </tr>
        </table>
    </body>
</html>
```

9. 创建如下图所示的页面

    ImageLink.html：为主页面，显示三种花卉的信息，通过链接，可以导航到其他页面；
    Daisy.html：专门介绍 daisy（雏菊）；
    Rose.html：专门介绍 rose（玫瑰）；
    Daffodil.html：专门介绍 Daffodil（水仙）。

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>链接和图像</title>
    </head>
    <body>
        <h2 align="center">Flowers</h2>
        <table width="500">
            <tr>
                <td><a href="#daisy">Daisy</a></td>
                <td><a href="#rose">Rose</a></td>
                <td><a href="#daffodil">Daffodil</a></td>
            </tr>
        </table>
        <br />
        <h3><a name="daisy">Daisy</a></h3>
        <table>
            <tr>
                <td>
                    <a href="daisy.html" target="_blank">
                        <img src="image/daisy.jpg" width="150"  />
                    </a>
                </td>
                <td valign="bottom">A versatile flower, and sending daisies is always a pleasant way to make a lasting impression.</td>
            </tr>
        </table>
        <br />
        <br />
        <h3><a name="rose">Rose</a></h3>
        <table>
            <tr>
                <td>
                    <a href="rose.html"  target="_blank">
                        <img src="image/rose.jpg" width="150"  />
                    </a>
                </td>
                <td valign="bottom">With sunshine, water, and careful tending, roses will bloom several times in a season.</td>
            </tr>
        </table>
        <br />
        <br />
        <h3><a name="daffodil">Daffodil</a></h3>
        <table>
            <tr>
                <td>
                    <a href="Daffodil.html"  target="_blank">
                        <img src="image/daffodil.jpg" width="150" />
                    </a>
                </td>
                <td valign="bottom">Daffodils bloom early in spring and welcome the growing season.</td>
            </tr>
        </table>
        <br />
        <br />
        <a href="#">
            <img src="image/top.gif" alt="Return to top" />
        </a>
    </body>
</html>
<!-- daisy.html -->
<!DOCTYPE HTML>
<html>
    <head>
        <title>Daisy</title>
    </head>
    <body>
        <h2>Daisy</h2>
        <img width="100" src="image/daisy.jpg" /><br />
        A versatile flower, and sending daisies is always a pleasant way to make a lasting impression.
    </body>
</html>
<!-- Rose.html -->
<!DOCTYPE HTML>
<html>
    <head>
        <title>Rose</title>
    </head>
    <body>
        <h2>Rose</h2>
        <img width="100" src="image/rose.jpg" /><br />
        With sunshine, water, and careful tending, roses will bloom several times in a season.
    </body>
</html>
<!-- Daffodil.html -->
<!DOCTYPE HTML>
<html>
    <head>
        <title>Daffodil</title>
    </head>
    <body>
        <h2>Daffodil</h2>
        <img width="100" src="image/daffodil.jpg" /><br />
        Daffodils bloom early in spring and welcome the growing season.
    </body>
</html>
```

10. 列举常用的结构标记，并描述其作用

    结构标记专门用于标识页面的不同结构，常用的结构标记有：
    •	<header> 元素：用于定义文档的页眉；
    •	<nav> 元素：用于定义页面的导航链接部分；
    •	<section> 元素：用于定义文档中的节，表示文档中的一个具体的组成部分；
    •	<article> 元素：常用于定义独立于文档的其他部分的内容；
    •	<footer> 元素：常用于定义某区域的脚注信息；
    •	<aside> 元素：常用于定义页面的一些额外组成部分，如广告栏、侧边栏和相关引用信息等。

11.  创建如下图所示的页面。
 
```html
<!-- 01_jd_login.html； -->
<!DOCTYPE HTML>
<html>
    <head>
        <title>登录</title>
        <meta http-equiv="content-type" content="text/html;charset=utf-8" />
        <meta name="keywords" content="HTML,CSS,JS" />
    </head>
    <body>
        <header>
            <h1>
                <img src="images/jd_logo.png" />
                欢迎登录
            </h1>
        </header>
        <section>
            <table align="center" border="1">
                <tr>
                    <td rowspan="8">
                        <img src="images/login.png" />
                    </td>
                    <td height="40">用户名/邮箱：</td>
                </tr>
                <tr>
                    <td height="40"><input type="text" /></td>
                </tr>
                <tr>
                    <td height="40">密码</td>
                </tr>
                <tr>
                    <td height="40"><input type="password" /></td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="chkAuto" /><label for="chkAuto">自动登录</label>
                        <input type="checkbox" id="chkSafe" /><label for="chkSafe">安全登录</label>
                        <a href="#">忘记密码？</a>
                    </td>
                </tr>
                <tr>
                    <td height="80"><img src="images/btn_login.jpg" /></td>
                </tr>
                <tr>
                    <td>
                        使用合作账号登录京东：<br />
                        <a href="#">网银钱包</a>|
                        <a href="#">QQ</a>|
                        <a href="#">其他</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="right">
                        <img src="images/btn_register.jpg" />
                    </td>
                </tr>
            </table>
        </section>
        <footer>
            <br /><br />
            <table align="center">
                <tr>
                    <td>关于我们|</td>
                    <td>联系我们|</td>
                    <td>人才招聘|</td>
                    <td>商家入驻|</td>
                    <td>广告服务|</td>
                </tr>
            </table>
        </footer>
    </body>
</html>
```

12. 使用 <label> 元素显示文本与使用其他文本标记显示文本有什么不同

    <label> 元素的直观效果是直接显示标记之间的文本，而且不会为文本呈现任何特殊效果。但是，它和其他文本标记所不同的是，它为鼠标用户改进了用户体验性。
    这是因为， <label> 元素可以附带一个for属性，只要将该属性的值设置为表单中任何一个控件的id属性的值，则当用户点击该标签（文本）时，浏览器就会自动将焦点转到和标签相关的表单控件上。即：如果在 <label>元素内点击文本，就会触发此控件。

13. 创建如下图所示的页面
 
```html
<!-- 02_form.html； -->
<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>form</title>
    </head>
    <body>
        <form action="" method="">
            <h2>---&gt;&gt;求职申请&lt;&lt;----</h2>
            <table cellpadding="5" cellspacing="2" border="1">
                <tr>
                    <td width="70" align="right">用户名：</td>
                    <td><input name="username" /></td>
                </tr>
                <tr>
                    <td align="right">密码：</td>
                    <td><input type="password" name="pwd" /></td>
                </tr>
                <tr>
                    <td align="right">籍贯：</td>
                    <td>
                        <select name="hometown">
                            <option>北京</option>
                            <option>上海</option>
                            <option>南京</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right">性别：</td>
                    <td>
                        <input type="radio" id="male" value="m" name="sex" />
                        <label for="male">男</label>
                        <input type="radio" id="femal" value="f" name="sex" />
                        <label for="femal">女</label>
                        <input type="radio" id="unknown" value="u" name="sex" checked />
                        <label for="unknown">不透露</label>
                    </td>
                </tr>
                <tr>
                    <td align="right">头像：</td>
                    <td><input type="file" name="photo" /></td>
                </tr>
                <tr>
                    <td colspan="2">愿意到以下城市工作：</td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <select size="5" name="city">
                            <option>北京</option>
                            <option>上海</option>
                            <option>南京</option>
                            <option>深圳</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">留言：</td>
                    <td>
                        <textarea cols="20" rows="3" name="message"></textarea>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="submit" value="提交" />
                        <input type="reset" value="清除" />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="checkbox" id="hide" name="visible" />
                        <label for="hide">不要公开我的信息</label>
                    </td>
                </tr>
            </table>
        </form>
    </body>
</html>
```

## 附录

- 适配
    - [flexible](https://github.com/amfe/article/issues/17)
    - [vw-layout-in-vue](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)
    - [Vue+ts下的移动端vw适配](https://zhuanlan.zhihu.com/p/36913200)
    - [UILoader](https://github.com/ShawnZhang2015/UILoader)

- HTML Debugging
    - [Markup Validation Service](https://validator.w3.org/)

- mip 网页加速

    > 之前baidu推出过mip网页加速，mip cache已下线！

- <a href="../code/index.html" target="_blank">Demo</a>
