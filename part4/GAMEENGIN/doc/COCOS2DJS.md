# Cocos2d-JS

1. [开发环境](#开发环境)
2. [场景](#场景)
3. [节点](#节点)
4. [精灵](#精灵)
5. [具体开发模块](#具体开发模块)
6. [热更新模块](#热更新模块)

> Cocos2d-JS是跨平台的游戏引擎，采用原生的JAVASCRIPT（后面缩写为JS）语言，它是Cocos2d-x的JS版本；
> 融合了 **Cocos2d-HTML5** 和 **Cocos2d-x Javascript-Binding** (JSB)；
> 拥有丰富的功能包括sprites, actions, animations, particles, transitions, timers, events (touch, keyboard, accelerometer, mouse), sound, file IO, persistence, skeletal animations；

## 开发环境

---

- 步骤

  1. 下载cocos2dx-v3.*
  2. 下载Python并安装

## 场景

---

## 节点

---

## 精灵

---

```js
//this.Info_bg是一个背景底板；
this.webView = new ccui.WebView();
this.webView.setAnchorPoint(0.5,0.5);
this.webView.setPosition(this.Info_bg.x, this.Info_bg.y);
this.webView.setContentSize(cc.size(this.Info_bg.getBoundingBox().width - 20 , this.Info_bg.getBoundingBox().height - 20));
this.webView.loadURL("http://139.162.110.207/demo/index.html");
this.webView.setScalesPageToFit(true);
this.addChild(this.webView);
```

## 具体开发模块

- 热更模块

- 登录模块

- 网络模块

## 热更新模块

> 需要充分了解热更新机制的细节才能够制定出符合自己需要的工作流

安装包内所有PNG图片进行二次无损压缩，列出大小可被进一步压缩的文件及压缩比例。 注：压缩流程是先使用PngCrush工具优化图片，再使用OptiPNG进行无损压缩。
