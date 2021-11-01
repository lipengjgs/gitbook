# [微信开发](https://developers.weixin.qq.com/doc/)

### 1、微信公众号


### 2、微信小程序

- 新版本[检测更新](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/update-mechanism.html)

```javascript
const updateManager = wx.getUpdateManager()

updateManager.onCheckForUpdate(function (res) {
  // 请求完新版本信息的回调
  console.log(res.hasUpdate)
})

updateManager.onUpdateReady(function () {
  wx.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    success(res) {
      if (res.confirm) {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate()
      }
    }
  })
})

updateManager.onUpdateFailed(function () {
  // 新版本下载失败
})
```


### 3、两个平台（开放平台，公众平台）
- 开放平台
  > 微信开发者入口
  - 移动应用开发
  - 网站应用开发
  - 公众账号开发
  - 第三方平台开发

- 公众平台（属于开放平台的子平台）
  > 登录进入公众号等
  - 服务号
  - 订阅号
  - 小程序
  - 企业微信

  微信原生分享图片时，因为图片的原因无法分享：大小问题已经排除，还是大小问题！微信分享缩略图大小不能超过32KB


  微信公众平台-小程序


1、工具以及环境
webstorm/vscode
微信开发者工具(https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)
node,npm,vue
2、技术选型
UI库
js框架
3、开发
三个版本： 开发版本，体验版本（审核），线上版本
从开发者工具中上传直接编译好的代码即可

4、接三方支付流程
小程序登录，将获得的code传给后台，后台通过去微信后台获取openid然后向三方下单，获取到信息然后给小程序传相关参数paysign之类的，小程序将这些参数拿去支付请求（小程序需要绑定有支付资质的微信开放平台）即可


1、情形：在微信授权的第三方页面上获取code传给后台，此时后台也要做验证，所以会返回一个token，这个token需要保存下来（假如采用localstorage/cookie），并且下次调接口需要这个token，而这个页面有个支付功能，支付完成后写回调页面时需要返回到这个页面，而跳转到这个页面的时候，token已经无法取得了，接口也同时无法调通了，此时应该如何保存token？



2、php获取post信息

```php
//因为很多都设置了register_globals禁止,不能用$GLOBALS["HTTP_RAW_POST_DATA"];
$postStr = file_get_contents("php://input");
```