# Interview

## 一、HTML

1. `base64编码`

    ```s
    相当于把图片转成文本字符串。
    优点：base64可以减少http请求次数，没有跨域问题，无需考虑缓存、文件头或者cookies问题。
    缺点：导致文件体积变大，大图片转为64后内容就特别长，会使加载缓慢, 文件的大小直接会影响渲染。
    所以一般足够小的 且 复用性很高的图片会转64，大图片不转64
    使用到 Base64 技术的时，一定要考虑到优缺点进行使用
    url-loader 可以自动根据文件大小决定要不要做成内联 base64
    ```

    - [链接一](https://www.zhihu.com/question/31155574)
    - [链接二](https://www.imooc.com/article/27804/)

2. 首屏加载优化

    ```s
    ① CDN分发加速，将通用的库从进行抽离
    ② 静态文件缓存
    ③ http压缩：Nginx的gzip压缩
    ④ 图片优化：webp, lazyload, 图标字体svg, 上述说的base64等
    ⑤ 使用好script的 async 和 defer 属性
    ⑥ 服务端渲染SSR

    Vue-Router路由懒加载（利用Webpack的代码切割）
    Vue异步组件
    如果使用了一些UI库，采用按需加载
    Webpack开启gzip压缩
    如果首屏为登录页，可以做成多入口
    Service Worker缓存文件处理
    使用link标签的rel属性设置 prefetch（这段资源将会在未来某个导航或者功能要用到，但是本资源的下载顺序权重比较低，prefetch通常用于加速下一次导航）、
    preload（preload将会把资源得下载顺序权重提高，使得关键数据提前下载好，优化页面打开速度）
    ```

    - [链接一](https://zhuanlan.zhihu.com/p/88639980?utm_source=wechat_session)
    - [链接二](https://zhuanlan.zhihu.com/p/147512335)
    - [链接三](https://blog.csdn.net/weixin_45000381/article/details/96473515)

## 二、CSS

1. 常见的布局

    ```html
    概念
        ① 静态布局：传统web设计，min-width
        ② 流式布局
        ③ 自适应布局：使用多个静态布局，媒体查询
        ④ 响应式布局：糅合了流式布局 + 弹性布局 + 媒体查询（需要多个版本的设计）
        ⑤ 弹性布局： rem、em等
        总结： PC - 一般静态布局； 移动端 - 弹性布局/vw、vh的流式布局； 兼容 - 响应式
    具体方式

    ```

2. BFC

    ```html
    ① blocking
    ```

3. rem、em、px、rpx、vw

    ```s
    ```

4. flex布局

5. grid布局

6. 常见的替换元素和非替换元素

## 三、JS

## 四、Vue

## 五、net

## 六、综合
