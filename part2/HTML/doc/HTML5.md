# HTML5

## 结构标记(语义化标记)

> H5中新标记，用来表示页面布局的，从而提升标签的语义性
>
> 能使用结构标记的地方，尽量使用结构标记

```html

<!-- 用于定义文档的头部 -->
<header></header>
<!-- 用于定义页面的导航链接部分 -->
<nav></nav>
<!-- 用于定义文档中的具体组成部分，表示主体内容 -->
<section></section>
<!-- 用于定义独立于文档主体内容的一些其他内容 -->
<article></article>
<!-- 用于定义网页中的页脚信息，网页中的靠下部分的内容 -->
<footer></footer>
<!-- 用于定义页面中的边栏信息 -->
<aside></aside>

```


```html
<!--dir: rtl; ltr-->
<bdo dir="rtl"></bdo>
```

```html
<!-- we use the WebVTT file format and the <track> element. -->
<!-- Text tracks also help you with SEO -->
<video src="rabbit320.webm" controls>
    <source src="example.mp4" type="video/mp4">
    <source src="example.webm" type="video/webm">
    <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish">
    <p>
        Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.webm">link to the video</a> instead.
    </p> 
</video>
<audio controls>
  <source src="viper.mp3" type="audio/mp3">
  <source src="viper.ogg" type="audio/ogg">
  <p>Your browser doesn't support HTML5 audio. Here is a <a href="viper.mp3">link to the audio</a> instead.</p>
</audio>
```

## 五、重点

1、 标签
2、 布局
3、 适配
4、 绘图

`canvas` 最大宽度一般是 16384*16384

- Three.js
    - GLTF
- Two.js
- eCharts
- D3

5、 H5新增API
    - 全屏、退出全屏
        - `document.body.requestFullScreen()`
        - `document.webkitCancelFullScreen()`
    - 文件上传

## JS操作DOM

```js
// 获取元素位置、大小信息 
export function getElInfo(el) {
    if (el === window) {
        return { top: 0, left: 0, width: window.innerHeight, height: window.innerWidth }
    }
    const { top, left, width, height } = el.getBoundingClientRect()
    return { top, left, width, height }
} 
// 获取元素的计算样式
export function getElStyle(el, prop) {
    return window.getComputedStyle(el).getPropertyValue(prop)
}
// 给元素增加style
export function attachStyle(els, styles) {
    let attach = element => {
        const style = element.style
        Object.keys(styles).forEach((p) => {
            style[p] = styles[p]
        }) 
    } 
    if (Array.isArray(els)) {
        els.forEach(el => {
            attach(el)
        })
    } else {
        attach(els)     
    } 
}
```

# 布局

[flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
[grid布局(兼容性差)](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## 一、静态布局

即传统Web设计，网页上的所有元素的尺寸一律使用px作为单位。
1、布局特点：不管浏览器尺寸具体是多少，网页布局始终按照最初写代码时的布局来显示。常规的pc的网站都是静态（定宽度）布局的，也就是设置了min-width，这样的话，如果小于这个宽度就会出现滚动条，如果大于这个宽度则内容居中外加背景，这种设计常见与pc端。
2、设计方法：
　　PC：居中布局，所有样式使用绝对宽度/高度(px)，设计一个Layout，在屏幕宽高有调整时，使用横向和竖向的滚动条来查阅被遮掩部分；
　　移动设备：另外建立移动网站，单独设计一个布局，使用不同的域名如wap.或m.。
　   在移动端开发中采用静态布局的两种方式：(来自：流布局与响应式网页设计有什么区别？)
　（1）在viewport meta标签上设置width=320，页面的各个元素也采用px作为单位。通过用JS动态修改标签的initial-scale使得页面等比缩放，从而刚好占满整个屏幕。（见前端开发-web app 变革之rem）
　（2）设在viewport meta标签上设置content"width=640,user-scalable=no，页面的各个元素也采用px作为单位。由于640px超出了手机宽度，浏览器会自动缩小页面至刚好全屏。（具体见content"width=640,user-scalable=no" 然后再进行固定尺寸的px设计？ - 前端开发）
优点：这种布局方式对设计师和CSS编写者来说都是最简单的，亦没有兼容性问题。
缺点：显而易见，即不能根据用户的屏幕尺寸做出不同的表现。当前，大部分门户网站、大部分企业的PC宣传站点都采用了这种布局方式。固定像素尺寸的网页是匹配固定像素尺寸显示器的最简单办法。但这种方法不是一种完全兼容未来网页的制作方法，我们需要一些适应未知设备的方法。
## 二、流式布局
流式布局（Liquid）的特点（也叫"Fluid") 是页面元素的宽度按照屏幕分辨率进行适配调整，但整体布局不变。代表作栅栏系统（网格系统）。
网页中主要的划分区域的尺寸使用百分数（搭配min-*、max-*属性使用），例如，设置网页主体的宽度为80%，min-width为960px。图片也作类似处理（width:100%, max-width一般设定为图片本身的尺寸，防止被拉伸而失真）。
1、布局特点：屏幕分辨率变化时，页面里元素的大小会变化而但布局不变。【这就导致如果屏幕太大或者太小都会导致元素无法正常显示】
2、设计方法：使用%百分比定义宽度，高度大都是用px来固定住，可以根据可视区域 (viewport) 和父元素的实时尺寸进行调整，尽可能的适应各种分辨率。往往配合 max-width/min-width 等属性控制尺寸流动范围以免过大或者过小影响阅读。
这种布局方式在Web前端开发的早期历史上，用来应对不同尺寸的PC屏幕（那时屏幕尺寸的差异不会太大），在当今的移动端开发也是常用布局方式，但缺点明显：主要的问题是如果屏幕尺度跨度太大，那么在相对其原始设计而言过小或过大的屏幕上不能正常显示。因为宽度使用%百分比定义，但是高度和文字大小等大都是用px来固定，所以在大屏幕的手机下显示效果会变成有些页面元素宽度被拉的很长，但是高度、文字大小还是和原来一样（即，这些东西无法变得“流式”），显示非常不协调。
## 三、弹性布局

## 四、响应式布局
随着CSS3出现了媒体查询技术，又出现了响应式设计的概念。响应式设计的目标是确保一个页面在所有终端上（各种尺寸的PC、手机、手表、冰箱的Web浏览器等等）都能显示出令人满意的效果，对CSS编写者而言，在实现上不拘泥于具体手法，但通常是糅合了流式布局+弹性布局，再搭配媒体查询技术使用。——分别为不同的屏幕分辨率定义布局，同时，在每个布局中，应用流式布局的理念，即页面元素宽度随着窗口调整而自动适配。即：创建多个流体式布局，分别对应一个屏幕分辨率范围。可以把响应式布局看作是流式布局和自适应布局设计理念的融合。
响应式几乎已经成为优秀页面布局的标准。
1、布局特点：每个屏幕分辨率下面会有一个布局样式，即元素位置和大小都会变。
2、设计方法：媒体查询+流式布局。通常使用 @media 媒体查询 和网格系统 (Grid System) 配合相对布局单位进行布局，实际上就是综合响应式、流动等上述技术通过 CSS 给单一网页不同设备返回不同样式的技术统称。
优点：适应pc和移动端，如果足够耐心，效果完美
缺点：（1）媒体查询是有限的，也就是可以枚举出来的，只能适应主流的宽高。（2）要匹配足够多的屏幕大小，工作量不小，设计也需要多个版本。

响应式页面在头部会加上这一段代码：

```html
<meta name="applicable-device" content="pc,mobile">
<meta http-equiv="Cache-Control" content="no-transform ">
```

总结：
响应式与自适应的原理是相似的，都是检测设备，根据不同的设备采用不同的css，而且css都是采用的百分比的，而不是固定的宽度，不同点是响应式的模板在不同的设备上看上去是不一样的，会随着设备的改变而改变展示样式，而自适应不会，所有的设备看起来都是一套的模板，不过是长度或者图片变小了，不会根据设备采用不同的展示样式，流式就是采用了一些设置，当宽度大于多少时怎么展示，小于多少时怎么展示，而且展示的方式向水流一样，一部分一部分的加载，静态的就是采用固定宽度的了。
流式布局是用于解决类似的设备不同分辨率之间的兼容(一般分辨率差异较少)；响应式是用于解决不用设备之间不用分辨率之间的兼容问题(一般是指PC，平板，手机等设备之间较大的分辨率差异)。
如何实现响应式布局：折腾响应式布局设计，应运而生的web页面响应布局
五、弹性布局（rem/em布局）
参考：流布局与响应式网页设计有什么区别？
1、rem,em区别：rem,em都是顺应不同网页字体大小展现而产生的。其中，em是相对其父元素，在实际应用中相对而言会带来很多不便；而rem是始终相对于html大小，即页面根元素。
2、使用 em 或 rem 单位进行相对布局，相对%百分比更加灵活，同时可以支持浏览器的字体大小调整和缩放等的正常显示，因为em是相对父级元素的原因没有得到推广。【中国站点制作网页的时候，习惯用CSS强制定义字体大小，保证每个人都看到一致的效果，包括网易、搜狐这些门户网站在内的大部分站点，用的都是绝对单位px（像素）。但是，如果从网站易用性方面考虑，字体大小应该是可变的，一些视力不是那么好的人需要放大字体才能看得清页面内容。然而，占据大部分浏览器市场的IE无法调整那些使用px作为单位的字体大小。国外人士非常重视网站的易用性，相当一部分外国站点已经使用em作为字体单位。】
3、这类布局的特点是，包裹文字的各元素的尺寸采用em/rem做单位，而页面的主要划分区域的尺寸仍使用百分数或px做单位（同「流式布局」或「静态/固定布局」）。早期浏览器不支持整个页面按比例缩放，仅支持网页内文字尺寸的放大，这种情况下。使用em/rem做单位，可以使包裹文字的元素随着文字的缩放而缩放。
4、浏览器的默认字体高度一般为16px，即1em:16px，但是 1:16 的比例不方便计算，为了使单位em/rem更直观，CSS编写者常常将页面跟节点字体设为62.5%，比如选择用rem控制字体时，先需要设置根节点html的字体大小，因为浏览器默认字体大小16px*62.5%=10px。这样1rem便是10px，方便了计算。
Set body font-size to 62.5% for Easier em Conversion:
If you would like to use relative units (em) for your font sizes, declaring 62.5% for the font-size property of the body will make it easier to convert px to em. By doing it this way, converting to em is a matter of dividing the px value by 10 (e.g. 24px = 2.4em).
那么为什么一般多是 html{font-size:62.5%;} 而不是 html{font-size:10px;}呢？
因为有些浏览器默认的不是16px，或者用户修改了浏览器默认的字体大小（因浏览器分辨率大小，视力，习惯等因素）。如果我们将其设置为10px，一定会影响在这些浏览器上的效果，所以最好用绝大多数用户默认的16作为基数* 62.5% 得到我们需要的10px。

html {font-size: 62.5%;/*10 ÷ 16 × 100% = 62.5%*/}
body {font-size: 1.4rem;/*1.4 × 10px = 14px*/}
h1 { font-size: 2.4rem;/*2.4 × 10px = 24px*/}
实际项目设置成 font-size: 62.5%可能会出现问题，因为chrome不支持小于12px的字体，计算小于12px的时候，会默认取12px去计算，导致chrome的em/rem计算不准确。
针对这个现象，可以尝试设置html字体为100px，body 修正为16px，这样 0.1rem 就是 10px，而body的字体仍然是默认大小，不影响未设置大小的元素的默认字体的大小。
5、用em/rem定义尺寸的另一个好处是更能适应缩进/以字体单位padding或margin／浏览器设置字体尺寸等情况（因为em/rem相对于字体大小，会同步改变）。例如：p{ text-indent: 2em; }
6、使用rem单位的弹性布局在移动端也很受欢迎。
工具ViewtoREM：PX转换到REM（自动预处理）
rem的定义：font size of the root element，rem是相对于根元素`<html>`来设置字体大小的，这就意味着，我们只需要根据自己的需求在根元素确定一个参考值。
rem与em、px的区别：
px：像素，比较精确的单位，但不好做响应式布局
em：以父节点font-size大小为参考点，标准不统一，容易造成混乱
REM支持的浏览器：Mozilla Firefox 3.6+、Apple Safari 5+、Google Chrome、IE9+和Opera11+。IE6-8无法支持。
对于不同尺寸的屏幕，可以统一假设屏幕宽度为640px后编写CSS（当然你也可以假定统一为320px）。此时，我们设定html元素的font-size为40px（同样，只是举例），然后各处（元素尺寸、文字大小）使用rem作为单位，随后搭配媒体查询或JS，根据屏幕的大小来动态控制html元素的font-size（特定屏幕尺寸下，html元素的font-size应当设置为何值，是使用这个方案时设计师和程序员需要反复考虑后确定的，以下试举一段相关的CSS媒体查询代码），即可自动改变所有用rem定义尺寸的元素的大小（且CSS编写者在脑中进行换算的计算过程比em简单得多）。

html {
    font-size : 20px;
}
@media only screen and (min-width: 401px){
    html {
        font-size: 25px !important;
    }
}
@media only screen and (min-width: 428px){
    html {
        font-size: 26.75px !important;
    }
}
@media only screen and (min-width: 481px){
    html {
        font-size: 30px !important;
    }
}
@media only screen and (min-width: 569px){
    html {
        font-size: 35px !important;
    }
}
@media only screen and (min-width: 641px){
    html {
        font-size: 40px !important;
    }
}

其实在移动端使用所谓的弹性布局，是比较勉强的。移动端弹性布局流行起来的原因归根结底是rem单位对于（根据屏幕尺寸）调整页面的各元素的尺寸、文字大小时比较好用。其实，使用vw、vh等后起之秀的单位，可以实现完美的流式布局（高度和文字大小都可以变得“流式”），弹性布局就不再必要了。详细可参考：视区相关单位vw, vh..简介以及可实际应用场景
以下优缺点参考：响应式设计和REM布局的对比（有疑问）
优点：理想状态是所有屏幕的高宽比和最初的设计高宽比一样，或者相差不多，完美适应。
缺点：这种rem+js只不过是宽度自适应，高度没有做到自适应，一些对高度，或者元素间距要求比较高的设计，则这种布局没有太大的意义。如果只是宽度自适应，更推荐响应式设计。
响应式和弹性布局之间的对比：
响应式布局：改变浏览器宽度，“布局”会随之变化，不是一成不变的，例如导航栏在大屏幕下是横排，在小屏幕下是竖排，在超小屏幕下隐藏为菜单，也就是说如果有足够的耐心，在每一种屏幕下都应该有合理的布局，完美的效果。
rem布局：改变浏览器宽度，页面所有元素的高宽都等比例缩放，也就是大屏幕下导航是横的，小屏幕下还是横的只不过变小了。
结论：
1.如果只做pc端，那么静态布局（定宽度）是最好的选择；
2.如果做移动端，且设计对高度和元素间距要求不高，那么弹性布局（rem+js）是最好的选择，一份css+一份js调节font-size搞定；
3.如果pc，移动要兼容，而且要求很高那么响应式布局还是最好的选择，前提是设计根据不同的高宽做不同的设计，响应式根据媒体查询做不同的布局。
