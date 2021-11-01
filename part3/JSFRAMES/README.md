# JS 库或框架

1. [库或组件](#库或组件)
   1. [懒加载](#懒加载)
   2. [上拉刷新下拉加载](#上拉刷新下拉加载)
   3. [Threejs](#threejs)
   4. [axios](#axios)
   5. [](#)
2. [框架](#框架)

## 库或组件

### 懒加载

### 上拉刷新下拉加载

### Threejs

### axios

### 

## 框架

第五章	JS框架（Vue、React）

Vue项目中实现移动端适配：
一、	使用rem进行适配（设计稿750px宽）；不用postcss-loader而采用px2rem-loader。
```
npm install lib-flexible px2rem-loader –save
// utils.js
exports.cssLoaders = function (options) {
  options = options || {}
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
 /*const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }*/
  const px2remLoader = {
    loader: 'px2rem-loader',
    options: {
      remUint: 75
    }
  }
  … …
}
// main.js
import ‘lib-flexible/flexible.js’
```
其中需要了解适配的原理：见附录之Flexible适配
二、	使用vw实现移动端适配（针对vue-cli 3.0之前的版本）

```
需要nodejs npm webpack vue-cli postcss-import postcss-url postcss-aspect-ratio-mini
postcss-cssnext autoprefixer postcss-px-to-viewport postcss-write-svg cssnano

vue init webpack project-vw
// 安装上述相关依赖 import url autoprefixer已经存在
// .postcssrc.js中配置
module.exports = {
"plugins": {
"postcss-import": {},
"postcss-url": {},
"postcss-aspect-ratio-mini": {},
"postcss-write-svg": { utf8: false },
 "postcss-cssnext": {},
 "postcss-px-to-viewport": {
viewportWidth: 750, // (Number) The width of the viewport.视窗宽度
 viewportHeight: 1334, // (Number) The height of the viewport. 视窗高度，也可以不配置
unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 指定px转换为视窗单位值的小数位数（很多时候无法整除）
viewportUnit: 'vw', // (String) Expected units. 指定需要转换成的视窗单位
selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 指定不转换为视窗单位的类
minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 小于或等于‘1px’不转换为视窗单位，你也可以设置你想要的值
mediaQuery: false // (Boolean) Allow px to be converted in media queries. 允许在媒体查询中转换‘px’
},
<del>"postcss-viewport-units":{},<del>
 "cssnano": {
 preset: "advanced",
autoprefixer: false,
 "postcss-zindex": false
}
}
}
由于cssnano中使用了preset:’advanced’,所以需要安装：npm I cssnano-preset-advanced –save-dev
由于cssnext和cssnano都具有autoprefixer,事实上只需要一个，所以把默认的autoprefixer删除掉，然后把cssnano中的autoprefixer设置为false。
•  容器适配，可以使用vw
•  文本的适配，可以使用vw
•  大于1px的边框、圆角、阴影都可以使用vw
•  内距和外距，可以使用vw
参见附录之vue项目中vm适配
```
