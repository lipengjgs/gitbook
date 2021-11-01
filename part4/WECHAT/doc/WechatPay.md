# 微信支付
---

## 1、微信小程序支付
> 因为也是接的三方支付，需要自己获取open_id，然后传给server端处理

- 登录获取openid
```javascript
wx.login({
  fail(res) {
    console.log(res);
  },
  success(res) {
    self.getOrderInfo(res.code);
  }
});
```

- 传给server端，sever端传给三方生成订单，并将相关参数返回给前端

- 前端将参数直接通过小程序支付接口进行调用即可
```javascript
wx.requestPayment({
    timeStamp: data.time_stamp,
    nonceStr: data.nonce_str,
    package: data.package, // 服务端统一下单接口返回
    signType: data.sign_type,
    paySign: data.pay_sign,
    success: function(res) {
          wx.showToast({
            title: "支付成功！",
            icon: "success",
            duration: 2000
          });
          self.paySuccess = true;
          self.finish = true;
    },
    fail: function(res) {
        //   wx.showToast({
        //     title:
        //     res.errMsg.indexOf("cancel") > -1 ? "支付取消！" : "支付失败！",
        //     icon: "none",
        //     duration: 4000
        //   });
          self.payDone = res.errMsg.indexOf("cancel") > -1 ? 2 : 1;
          self.finish = true;
        },
    complete: function(res) {
          console.log(res);
    }
});
```

- 主动提供`支付完成`按钮查询支付状态

## 2、微信H5支付

> 需求是APP中跳转；因为需要在支付域名下才能成功支付，所以先跳转h5支付（绑定的支付域名）页面，然后跳转支付链接

- 请求server生成支付链接

- 将支付链接拼到支付域名下，截取跳转
```javascript
cc.Application.getInstance().openURL("http://pay.yuanlaihuyu.com/wechat/h5?url=" + encodeURIComponent(obj.data.url))
```
- 支付完成后跳转入配置的回调链接下
- 在回调的页面下提供按钮主动查询支付状态

## 3、[微信jsapi支付](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_1)

> 服务端需要授权code去获取open_id，并生成订单

  ```javascript
  // 1、通过重新跳转该链接，或者直接访问该链接，跳转URL
  window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + process.env.APPID + "&redirect_uri=" + process.env.REDIRECT_URI + "&response_type=code&scope=snsapi_base#wechat_redirect";
  // 2、跳转的URL会带参数code
  // 3、将授权的code截取下来传给server； server获取open_id后通过商户接口获取订单信息等返回前端
  // 4、前端将参数通过微信浏览器内置对象调起微信支付
  function onBridgeReady() {
      WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
          "appId": process.env.APPID,   // 公众号名称，由商户传入
          "timeStamp": "1395712654",
          "nonceStr": "e61463f8efa94090b1f366cccfbbb444",
          "package": "prepay_id=u802345jgfjsdfgsdg888",
          "signType": "MD5",
          "paySign": "70EA570631E4BB79628FBCA90534C63FF7FADD89"
          },
          function (res) {
              if (res.err_msg == "get_brand_wcpay_request:ok") {
              // 使用以上方式判断前端返回,微信团队郑重提示：
              // 取消 cancel ; 失败 fail ;
              //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。（需要主动去调取查询订单情况接口）
            }
          });
  }

  if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
          document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else if (document.attachEvent) {
          document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
          document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }
  } else {
      onBridgeReady();
  }
  ```

  ## 4、微信公众号支付

> 因为接入的三方支付, 直接请求server接口，然后将三方链接返回给前端，前端直接访问即可，支付完成后直接跳转至server配置的跳转链接


## 5、[微信中掉起支付宝H5支付](https://opendocs.alipay.com/open/203/105285)