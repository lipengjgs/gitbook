### MPVUE
---
> MPVUE是类似Vue的微信小程序框架，写法与vue一样，因为小程序本身的区别，所以有些部分还是不一样，比如事件等



[mpvue](http://mpvue.com/)

#### 安装

```
// 现在安装完之后，安装完node-sass,sass-loader，编译失败
// 解决方法：将sass-loader的版本调低即可 "sass-loader": "7.3.1",
```


##### 注意

- 一定一定要检查请求的域名是否在小程序管理中配置好，更换了域名一定要重新配置；

- MPVue现在没人维护了，所以假如有什么问题需要找其他方法解决；



1.7之后的wepy-cli
[wepy](https://tencent.github.io/wepy/)


1、全局安装脚手架

```
npm install wepy-cli -g
```
2、初始化项目

```
wepy init standard my-project
```

3、wepy的四个命令

```
    init [options] <template-name> [project-name]  generate a new project from a template
    // 初始化官方模板
    // -c --clone  use git clone
    // --offline   use cached template
    // -h, --help  output usage information
    
build [options]                                build your project
    // 编译
    // -f, --file <file>      待编译wpy文件
    // -s, --source <source>  源码目录
    // -t, --target <target>  生成代码目录
    // -o, --output <type>    编译类型：web，weapp。默认为weapp
    // -p, --platform <type>  编译平台：browser, wechat，qq。默认为browser
    // -w, --watch            监听文件改动
    // --no-cache             对于引用到的文件，即使无改动也会再次编译
    // -h, --help             output usage information
    
list [options]                                 list available official templates
    // 查找官方/第三方模板资源
    // -g, --github  list all registered github projects
    // -h, --help    output usage information
    
upgrade [options]                              upgrade to the latest version
    // 升级wepy-cli
    // --cli   upgrade wepy-cli
    // --wepy  upgrade wepy
    // -h, --help  output usage information
```
4、初始化好项目之后：进入项目文件夹，安装相关依赖，并编译

```
npm install
```

```
wepy build --watch
```



5、因为wepy项目中的文件是.wpy格式的，在微信开发者工具中是不能被识别的，所以微信开发工具仅仅用于实时预览和调试。开发时还是用vscode 、 vim等IDE（使用es6语法开发）

> WebStorm/PhpStorm

①打开Settings，搜索Plugins，搜索Vue.js插件并安装。

②打开Settings，搜索File Types，找到Vue.js Template，在Registered Patterns添加*.wpy，即可高亮。

> VS Code

①在 Code 里先安装 Vue 的语法高亮插件 Vetur。

②打开任意 .wpy 文件。

③ 点击右下角的选择语言模式，默认为纯文本。

④在弹出的窗口中选择 .wpy 的配置文件关联...。

⑤在选择要与 .wpy 关联的语言模式 中选择 Vue。
