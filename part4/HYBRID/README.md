# 网页跳转 APP

- URI SCHEME

> 原生 APP 开发时注册 scheme，用户点击到此类链接时，会自动唤醒 APP，借助于 URL Router 机制，则还可以跳转至指定页面

```s
<scheme name> : <hierarchical part> [ ? <query> ] [ # <fragment> ]
eg: yuanlaihgmj://yuanlai?id=****&key=****
```

特点：

- 当要被唤起的 app 没有安装时，这个链接就会出错。
- 当注册有多个 scheme 相同的时候，有的安卓手机可以提供选择（这个很好），苹果手机跳转到进程还活着的前一个安装的
- 不支持从其他 app 中的 UIWebView 中跳转到目标 app

- Universal Link(iOS)

> 访问一个 https 的 url,如果这个 url 带有你提交给开发平台的配置文件中匹配规则的内容，iOS 系统会去尝试打开你的 app，如果打不开，系统就会在浏览器中转向你要访问的链接
>
> 不会存在冲突
> 支持从其他 app 中的 UIWebView 中跳转到目标 app

- App Link(Android)

> 使用检查清单(前端)

```javascript
// scheme
//    iOS 和 android 是否已经支持 此scheme
//    js处理兼容代码

// universal Link (apple-app-site-association 官方文档)
//    HTTPS的域名
//    iOS9 以上
//    universal Link 是否跨域
//    universal Link的落地页是否是下载页面
//    apple-app-site-association 配置在 host的根目录和.well-known下
//    官方检测: apple-app-site-association 检测
//    apple-app-site-association会在第一次打开app或者更新app时候会去拉去,所以确认是否更新了apple-app-site-association后没有更新过app
//    检查apple-app-site-association paths 大小写敏感 支持通配符
//    该设备的用户选择了直接打开app还是打开网站，如果选择打开网站，需要通过smart banner 重新启用
//    跳转处理是否是在用户事件中触发，而不是进入页面后直接触发

// app links (android app links官方文档)
//    HTTPS的域名
//    跳转后的落地页是否是下载页面
//    assetlinks.json 配置在 host的.well-known下
//        官方生成/检测: android app links检测

// facebook (facebook app link官方文档)
//    将需要的meta头信息填充完毕
//    检测链接 分享调试器 - Facebook for Developers , 确认分享链接中获取到了所需要的meta头
//    分享过的链接会有缓存，在检测中清楚缓存
//    如果web和wap链接一致，确认在web中也添加了相同的meta头，facebook会默认从web中获取

// twitter (Twitter app card官方文档)
//    将需要的meta头信息填充完毕
//    检测链接 Twitter app card 检测
//    如果web和wap链接一致，确认在web中也添加了相同的meta头，twitter会默认从web中获取
```
