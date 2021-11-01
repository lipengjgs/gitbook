# VUE

## 原则

- 模板尽量轻，不放过多逻辑，对于任何包含响应式数据的复杂逻辑，你都应该使用计算属性（有缓存）

## mixin

## filter

## slot

## render渲染函数

## Vue.$set

```js
// 对象无法双向绑定时，数组中的对象的属性发生变化时
Vue.$set(obj, 'proto', '1');
```

---

## vue-cli

### 项目初始化

```sh
vue init webpack vue-music
# 设置项目信息完成后
cd vue-music
npm install
npm run dev
```

### 修改脚手架代码

> 删除`src`下所有文件夹，重新组织项目结构，一般为：

```sh
/api
  .gitkeep // 保证即使是空文件夹也可以放到仓库上
/common
  css
  font
  image
  js
/components
/router
/store
App.vue
main.js
```

### less / sass 安装

```sh
# less安装
npm install less less-loader --save-dev
# 假如不是在vue-cli环境下需要在webpack.base.conf.js下配置选项
module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
}

# sass安装
npm install node-sass sass-loader -S
```

### Eslint 配置

```sh
# eslint规则
```

### alias 配置

> 别名，让项目在`import`的时候可以根据别名去寻找

```sh
# alias webpack.base.conf.js文件中
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'common': resolve('src/common'),
      'api': resolve('src/api'),
    }
}
```

### mint-ui样式在手机上不对的问题

> 假如做移动端项目时，最好加上这样一句话，也可以解决这个问题

```html
<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```

---

### vue组件的封装

#### header组件

#### 弹窗

#### 列表

#### loading

#### 轮播图

> 实现： 父容器是一个视口，子容器是可以横向滚动的容器

```sh
# slider.vue

```

### jsonp封装

```js
import originJSONP from 'jsonp'

export default function jsonp(url,data,option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
  return new Promise((resolve,reject) => {
    originJSONP(url,option,(err,data) => {
      if(!err){
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
function param(data){
  let url = '';
  for(var k in data){
    let val = data[i] !== undefined ? data[k] : '';
    url += `&${k}=${encodeURIComponent(val)}`;
    return url ? url.subsring(1) : ''
  }
}
```

---

### vue-router

#### 基本用法

```js
import Vue from 'vue'
import Router from 'vue-router'
import Recommend from './components/recommend/recommend'

Vue.use(Router)

export default new Router({
    routes:[
      {
        path: '/',
        redirect: '/recommend'
      },{
        path: '/recommend',
        component: Recommend
      }
    ]
})
```

#### 传复杂参数

#### router-link

```sh
# template 中
<router-link to="/home" replace tag="div" class="toHome">
  <i class="iconfont icon-shouye-"></i>
  <p>首页</p>
</router-link>

# style 中
.router-link-active {
  color:$dark-red;
}
```

---

### VUEX状态管理

---

#### 插件之better-scroll

---

### 插件之vue-lazy-loader

---

### 插件之 fastclick

> 解决移动端300ms延迟的问题

```js
import fastclick from fastclick
fastclick.attach(document.body)
```

---

### 插件之 babel-runtime

> es的语法的转义

---

### 插件之 vue-simple-uploader

---

### 插件之 vue-photo-preview

[链接](https://www.jianshu.com/p/68f108a7a450)

### 多页应用开发

[参考链接](https://blog.csdn.net/yusirxiaer/article/details/86609323)

### vue-cli中局域网调试

```javascript
// 机器要关闭防火墙
// config / index.js 设置server选项
// 将 host 改为 本机ip地址，或者0.0.0.0; 那么局域网中都可以访问调试，手机连上局域网都可以
host: '0.0.0.0', // can be overwritten by process.env.HOST
port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined

```

## 语义化版本号

```js
x(大版本, 偶数稳定版，奇数不稳定版).y(new feature).z(bug fix)
1.2.*  // 使用第三位最新的
~1.2.0 // 使用第三位最新的
2.x    // 只有大版本不自动升
^2.0.0 // 都自动升
```

## [Vue3.0](https://cli.vuejs.org/guide/creating-a-project.html#vue-create)

```s
vue create hello-world
```

### 1、什么是SSR

> Server-side服务端渲染，先把页面渲染好（执行js，请求，生成HTML），然后给到浏览器，浏览器就不用解析js，执行js等过程，浏览器只需要将页面加载出来

```sh

```

#### 2、自己动手搭建

```sh
vue

vue-server-renderer
```

#### 3、

```sh

```

- 一步一调试

如果你没有找到一个合适的 key，那么你就需要考虑重新整理你的数据结构了，这样才能有合适的 key
