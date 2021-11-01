# Cocos Creator

1. [游戏的要素](#游戏的要素)
2. [软件介绍](#软件介绍)
3. [编辑器](#编辑器)
4. [UI管理](#ui管理)
   1. [适配](#适配)
   2. [节点](#节点)
   3. [预制件 prefab](#预制件-prefab)
   4. [动画与动效](#动画与动效)
5. [事件](#事件)
6. [网络](#网络)
7. [三方SDK接入](#三方sdk接入)
8. [分组](#分组)
9. [资源处理](#资源处理)
10. [调试](#调试)
11. [强更与热更新](#强更与热更新)
12. [问题处理](#问题处理)
   1. [无限循环ScrollV](#无限循环scrollv)
   2. [头像缓存](#头像缓存)
   3. [截图](#截图)
   4. [使用第三方库](#使用第三方库)
   5. [帧数问题](#帧数问题)
   6. [防止场景等复杂文件冲突](#防止场景等复杂文件冲突)
   7. [资源释放问题：](#资源释放问题)
13. [相关工具](#相关工具)

## 游戏的要素

- 逻辑：游戏逻辑、AI、物理运算等等(逻辑决定显示的内容)
- 显示：动画、底层渲染(循环逻辑)
- 声音：比较独立的模块
- 开发流程： 策划案、美术资源、程序逻辑

## 软件介绍

> 简介 ：游戏内容制作工具，支持微信小游戏等，面向JS/TS脚本化开发，组件化和数据驱动的全新工作流, 基本概念其实都是继承Cocos2d-JS的
> 减少重复开发，降低游戏开发门槛

- 新项目(一般)结构

    ```s
    // 发布后生成的 /build 文件夹也不需要放入git中
    ProjectName
    /build     // ignore
    /assets
        /resources
    /library   // ignore
    /local     // ignore
    /settings
    /temp      // ignore
    project.json
    tsconfig.json // ts项目时配置文件
    package.json  // 可自行初始化并添加所需要的npm包
    ```

- 注意事项

    - 需要用到`Loader`(从 v2.4 开始，cc.loader 等接口不再建议使用，请使用最新的 `cc.assetManager` 相关接口)异步加载的图片等资源必须放到`assets`下的`resources`目录；
    - 每个资源文件夹里面的文件，都会有一个.meta文件，这个文件非常重要，保存了uuid以及一些文件的属性和配置，不要轻易删除它，**meta文件很重要，要保存到版本服务器版本管理**
    - 版本更新：可以去官网查询相应的版本所对应的变化，版本升级也是一个重要开发内容！

- 环境配置

    1. 一定要保证`文件-设置`中的原生开发环境路径（SDK,NDK）正确！！
    2. `项目-构建发布`中的`target API`;

- vscode工作流

    > vscode编辑时可以直接设置`exclude`不显示meta文件

    ```js
    {
        "files.exclude":  {
            "**/.git": true,
            "**/.svn": true,
            "**/.hg": true,
            "**/CVS": true,
            "**/.DS_Store": true,
            "**/*.meta": true
        }
    }
    ```

## 编辑器

- 资源管理窗口
  > 相当于一个数据库，每一个资源文件会分配一个uuid，不管如何改变名字等都不影响调用
  游戏的启动是通过读取场景中的资源和脚本，而不是通过入口文件来启动(cocos2dx就是通过入口文件启动)。

  1. 创建文件必须在编辑器中创建，不要自己打开文件夹进行创建，因为编辑器需要分配uuid，创建meta文件

- 场景编辑器窗口
  1. 视图缩放：滚轮
  2. 视图平移：右键拖拽
  3. 选取节点：左键单击

  注意左上角的节点变换工具的使用：**平移W**，**旋转E**，**缩放R**，**自由变换T**

- 层级管理器窗口

- 属性检查器窗口

- 功能按钮

- 偏好设置

- 串口输出

- 预览和构建

## UI管理

### 适配

> scene（场景）中canvas可设置设计宽高，根据项目需要设置，注意里面的适配模式： Fix Height(一般横屏选这个) ; Fix Width

```js
    // 苹果的安全区
    const rect = cc.sys.getSafeAreaRect();
    const winSize = cc.director.getWinSize();
```

### 节点

- 判断节点在场景中是否激活

```js
node.activeInHierarchy
```

- 常驻节点(**要放在根节点下，与Canvas同级**)

    ```ts
    cc.game.addPersistRootNode(this.node);
    // 将常驻节点放入一个类中，需要即import
    // 常驻节点设置一定要在最开始（每次必经过的场景）初始化
    // 常驻节点的获取问题： 方案一每次去拿一遍常驻节点的脚本执行
    ```

- 不支持从其它项目复制节点到开发项目，可以将节点保存成预制件prefab然后导入进来即可。
- 使用对齐挂件widget（定位 + 适配）
- Label、RichText特别耗性能，文字多的时候最好不用这些组件，用图片代替好一点

### 预制件 prefab

### 动画与动效

- 动作

    ```js
    let action1 = cc.scaleTo(0.2, 0).easing(cc.easeSineOut());
    let action2 = cc.delayTime(0.01);
    let action3 = cc.callFunc(() => {
                    callback && callback();
                });
    let action = cc.sequence(action1, action2, action3);
    ```

    [缓动函数速查表](https://easings.net/cn)

- 普通动画（帧动画）

    1. 创建一个prefab；
    2. 创建一个或多个clip;
    3. prefab上挂载animation组件；
    4. 点击左上角的编辑按钮编辑即可；(调整playOnLoad、wrapMode循环模式等)

- 粒子动画

    [免费粒子动画制作](http://www.effecthub.com/particle2dx)

- 骨骼动画

    [龙骨](http://dragonbones.com/cn/index.html)
    [SPINE](http://zh.esotericsoftware.com/)

## 事件

> cocos事件

```ts
createEvent(btn: cc.Button, data) {
    let clickEventHandler = new cc.Component.EventHandler();
    clickEventHandler.target = this.node;
    clickEventHandler.component = "ListContentBtn";
    clickEventHandler.handler = "onClick";
    clickEventHandler.customEventData = '' + data;
    btn.clickEvents.push(clickEventHandler);
}
onClick(e,data) {
    soundUtils.clickBtn();
    this.updateBtnState(parseInt(data));
    if(this.contentList.length > 0) {
        this.contentList.forEach((content) => {
            content.active = false;
        })
        this.contentList[parseInt(data)].active = true;
    }
    if(this.parent) {
        this.parent.dispatchClick(parseInt(data))
    }
}

// 定时器
start() {
    this.schedule(() => {
        clubMsg.getClubInviteMsgList(null, true);
    }, 5, cc.macro.REPEAT_FOREVER);
}
// 每一帧事件
update(dt) {

}
```

> 自定义事件： on、 off、 emit、 update
> start 生命周期 的时候绑定，回调中给标识，触发完之后，update 生命周期 中判断标识进行更新
> 原理就是通过数组保存每个绑定的事件， 通过call方法将参数绑到对应的元素节点上

```js
// 
```

## 网络

> 1. http
> 2. socket
> 3. 传输格式：传统是采用json的格式，为了性能等可以采用pb的方式，虽然不太好调试

```javascript
// http
request() {

}

// socket
initConnection() {

}
```

## 三方SDK接入

## 分组

> 项目设置中有一个分组，将相关节点可以分组，对分组的节点进行操作
>
> 示例： 将scrollview中还未出现的节点分组NoRender不渲染

```typescript
// group属性
const { ccclass, property, menu, requireComponent } = cc._decorator;
@ccclass
@menu("自定义脚本/ScrollViewOptimization")
@requireComponent(cc.ScrollView)
export default class ScrollViewOptimization extends cc.Component {
    private _sv: cc.ScrollView = null;
    private _con: cc.Node = null;
    private _top: number = null;
    private _bottom: number = null;
    private _left: number = null;
    private _right: number = null;
    start() {
        this._sv = this.node.getComponent(cc.ScrollView);
        this._con = this._sv.content;
        this._top = this._sv.node.getContentSize().height / 2;
        this._bottom = -this._top;
        this._right = this._sv.node.getContentSize().width / 2;
        this._left = -this._right;
    }
    update() {
        let children = this._con.children; // scrollview中的子节点
        if (children.length <= 0) {
            return;
        }
        let ItemSize = children[0].getContentSize();
        let halfx = ItemSize.width / 2;
        let halfy = ItemSize.height / 2;
        let vTop = this._top + halfy;
        let vBottom = this._bottom - halfy;
        let vLeft = this._left - halfx;
        let vRight = this._right + halfx;
        children.forEach(one => {
            let p = one.position.add(this._con.position);
            if (p.x > vLeft && p.x < vRight && p.y > vBottom && p.y < vTop) {
                one.group = 'UI';
            } else {
                one.group = "NoRender";
            }
        });
    }
}
```

## 资源处理

- 将`plist和png`合图文件拆解成碎图

    > 法一： 利用[PlistUnpacker-master.zip]python工具</a>进行处理
    >
    > 版本 `python2.*`
    >
    > 安装对应`pillow`
    >
    > 法二： 利用`ShoeBox`

    ```sh
    python ./plistUnpacker.py [*.plist]
    ```

## 调试

1. 局域网的终端可以直接访问creator右上角的ip, 端口号来调试游戏

## 强更与热更新

> 强更是根据现有的版本号与配置的新的版本号进行对比，
> 假如一致的则不用更新，否则就更新，IOS只能跳转更新，Android可以包内/跳转链接下载更新

```ts
/**
 * 配置文件
 */
// 获取存储路径
public getStoragePath(): string {
    const rootPath = jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/';
    const path = rootPath + gameConfig.appName + '/__data__/';
    return path;
}


// 假如有热更新，
start () {
    this._am = new jsb.AssetsManager('', this._storagePath, versionCompareFunc)
    this._am.setVerifyCallback((path, asset) => {
        const compressed = asset.compressed;
        // 没有用压缩包的形式
        return true
    })
    if (cc.sys.os === cc.sys.OS_ANDROID) { 
        this._am.setMaxConcurrentTask(3)
    }
}

/**
 * 热更新文件
 */
// project.manifest ; version.manifest
    private updateCb(event) {
        var needRestart = false;
        var failed = false;

        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                const progress = event.getPercent() || 0;
                this._updateProgressUI(progress);
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                this._am.downloadFailedAssets();
                this._updating = false;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                break;
            default:
                break;
        }

        if (failed) {
            this._updating = false;
            this.hotUpdate(this._version, this._url);
        }

        if (needRestart) {
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            console.log('new path is:', JSON.stringify(newPaths));
            Array.prototype.unshift(searchPaths, newPaths);
            //  此处写死，在main.js的load的时候回读取此key。
            cc.sys.localStorage.setItem('__KY_Hot_Update_Search_Paths__', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            soundUtils.stopAll();
            cc.game.restart();
        }
    }
    // 这里没有用到，最后是根据自己配的数据去判断有没有更新
    checkUpdate(cb: (msg: string) => void) {
        if (this._updating) {
            cb('updating')
            return;
        }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            // Resolve md5 url
            var url = this.manifestAsset.nativeUrl;
            if (cc.loader.md5Pipe) {
                url = cc.loader.md5Pipe.transformURL(url);
            }
            this._am.loadLocalManifest(url);
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            cb('data_error');
            return;
        }
        this._am.setEventCallback((event) => {
            const code = event.getEventCode();
            if (code === jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST ||
                code === jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST ||
                code === jsb.EventAssetsManager.ERROR_PARSE_MANIFEST ||
                code === jsb.EventAssetsManager.ALREADY_UP_TO_DATE ||
                code === jsb.EventAssetsManager.NEW_VERSION_FOUND) {
                this._am.setEventCallback(null);
                this._updating = false;
            }

            switch (event.getEventCode()) {
                case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                    cb('no_local_manifest');
                    break;
                case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                    cb('net_error');
                    break;
                case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    cb(null);
                    break;
                case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                    cb('new_version_found');
                    break;
                default:
                    return;         // 直接return，如果其他错误，引擎会再次走callback。
            }
        });
        this._am.checkUpdate();
        this._updating = true;
    }

    hotUpdate(version: number, url: string) {
        if (version && url) {
        } else {
            cc.error('hot update version or url is error.');
            cc.error('version:', version);
            cc.error('url:', url);
        }
        this._version = version;
        this._url = url;

        const setCustomManifest = (customManifestStr: string) => {
            if (this._am && !this._updating) {
                this._am.setEventCallback(this.updateCb.bind(this));
                if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                    let custom_manifest = new jsb.Manifest(customManifestStr, this._storagePath);
                    this._am.loadLocalManifest(custom_manifest, this._storagePath);
                }
                this._am.update();
                this._updating = true;
            }
        }

        const fileString = jsb.fileUtils.getStringFromFile(this._storagePath + '/project.manifest');
        let afterManifest = rewriteManifest(fileString, this._version, this._url);
        if(afterManifest) {
            jsb.fileUtils.writeStringToFile(afterManifest, this._storagePath + '/project.manifest');
            setCustomManifest(afterManifest);
        } else {
            cc.loader.load(cc.url.raw('resources/project.manifest'), function (err, res) {
                if (err) {
                    cc.error("project.manifest is not exit.");
                    return;
                } else {
                    afterManifest = rewriteManifest(res, version, url);
                    setCustomManifest(afterManifest);
                }
            });
        }
    }

    onDestroy() {
        if (cc.sys.isNative) {
            this._am.setEventCallback(null);
        }
    }

```

## 问题处理

### 无限循环ScrollV

原理： 了解原理然后复现

### 头像缓存

> (苹果不存在这个问题？)

```javascript
// 继承 cc.Sprite 后， 可以直接调整Sprite的属性
// 通过xhr进行获取图片，以前都是通过loader来处理，思路上有问题...
// 更新URL
saveUrl(url: string) {
    if (cc.sys.os !== cc.sys.OS_ANDROID) {
        return url;
    }
    // 文件夹路径
    let dirPath = jsb.fileUtils.getWritablePath() + 'img/';
    // 图片路径
    let filePath = dirPath + MD5.hashStr(url) + '.jpg';
    // 假如存在缓存图片，则拿缓存路径
    if (jsb.fileUtils.isFileExist(filePath)) {
        return filePath;
    }
    let saveFile = (data) => {
        if (data) {
            if (!jsb.fileUtils.isDirectoryExist(dirPath)) {
                jsb.fileUtils.createDirectory(dirPath)
            }
            let writeResult = jsb.fileUtils.writeDataToFile(new Uint8Array(data), filePath);
            if (writeResult) {
                cc.log('write remote image success')
            } else {
                cc.log('write remote image fail')
            }
        } else {
            cc.log('get remote image fail');
        }
    }
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'arraybuffer';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // 将获取的图片
                saveFile(xhr.response)
            } else {
                saveFile(null)
            }
        }
    }
    xhr.open('GET', url, true);
    xhr.send();
    return url;
}

loadImage(url) {
    if (!url || url.length <= 0) {
        cc.log('url error');
        return;
    }

    const cacheUrl = saveUrl(url);

    let data = cacheUrl === url ? {
            url: cacheUrl,
            type: 'png'
        } : cacheUrl;
    // 各个creator版本接口有差异，需要注意
    cc.loader.load(data, (err, texture) => {
        if (err) {
            // 使用默认头像

            // 失败后3秒重试 retry 大于 n次之后 unschedule

        } else {
            if (texture) {
                // 获取材质精灵帧
                let spriteFrame = new cc.SpriteFrame(texture);
                this.spriteFrame = spriteFrame;
            } else {

            }
            // unschedule
        }
    })
}
```

### 截图

> 采用`Camera` 和 `RenderTexture`进行截图

```javascript
// 所在节点上增加一个node， node上面增加 cc.Camera 组件
let root;
let node = new Node();
node.parent = root;
let camera = node.addComponent(cc.Camera);
// new 一个 RenderTexture 并初始化 , 将camera的 targetTexture 指向该RT
let renderTexture = new RenderTexture();
renderTexture.initWithSize(root.getContentSize().width, root.getContentSize().height);
camera.targetTexture = renderTexture;


// 调用camera.render(root) ，渲染一次摄像机，更新一次内容到RenderTexture中，然后RT读取数据
root.scaleY = -1;
camera.render(root);
root.scaleY = 1;

let data = renderTexture.readPixels();
let filePath = jsb.fileUtils.getWritablePath() + 'image.png'
let success = jsb.saveImageData(data, imgWidth, imgHeight, filePath);
if (success) {
    cc.log("save image data success, file: " + filePath);
} else {
    cc.error("save image data failed!");
}
```

### 使用第三方库

> 可以利用npm添加三方库, 然后通过`require` 或`import`导入即可

```s
// eg:
npm install async --save
```

### 帧数问题

### 防止场景等复杂文件冲突

> 一般的做法是，大家将游戏分成多个场景，每个人负责一个场景，或每次改动场景的时候，先更新一下，大喊一声。
> 这种问题怎么解决呢？几个原则我们来看下。
>
> 1: 场景中尽量不要有东西，在里面，只要有一些最基本的东西，比如Cavans + Camera,
> 那么场景搭建这些，通过代码加载预制体等生成出来。
>
> 2: 预制体view 视图上尽量不要绑定代码，这样的话，同时修改一个组件代码时, 不会有冲突, 视图上面绑定代码，可以通过代码添加组件来完成。
> 视图上绑定事件等，也都使用代码来完成。
>
> 3: 每个视图做成单元化，尽可能的功能单一,同一时间一个人开发, 避免大家之间相互冲突。
>
> 我们是怎么做的:
>
> 我会在场景中保留一个重要的节点，这个是启动节点，然后挂一个启动脚本。
> 启动脚本负责初始化一些重要的管理模块，脚本模块。有些重要管理模块要挂载的,都挂在完成。然后进入到游戏的初始化流程,比如创建视图，创建地图，挂在脚本等。
> 制作视图的时候，用场景编辑器，制作完成以后，把视图保存为预制体，然后代码 `new` 出来。同时编写一些统一的接口，来挂UI上面的脚本，事件等，
> 不在界面上去挂。

### 资源释放问题：

`"*.json" was released but maybe still referenced by`

> 将对应的资源在适当的时候主动释放掉 `cc.loader.releaseRes(url)` 不同版本调用的方法不同
## 相关工具

- LabelAtlas

  1. PS中等宽字体合并（遵循**ASCII码顺序原则**） +,-./0123456789
  2. 创建 `LabelAtlas` ; 将资源放入LabelAtlas中，输入字符宽高

- fnt字体

  1. BMFont(以前用)
  2. ShoeBox(需要安装Adobe runtime air,然后进行安装): GUI -> 位图字体
  [ShoeBox](http://renderhjs.net/shoebox/)
  [BigShear](https://www.fancynode.com.cn/bigshear)

- plist合图

  1. TexturePacker

- 图片压缩

  1. 图叫兽蛮好用的
  2. [Squoosh](https://squoosh.app/)

- texturePacker
- [http://renderhjs.net/shoebox/](http://renderhjs.net/shoebox/)
- Dragonbone
- BeyondCompare4