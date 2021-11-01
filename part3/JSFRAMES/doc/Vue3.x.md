# [Vue3.x](https://vue-docs-next-zh-cn.netlify.app/)

1. [优化点](#优化点)
   1. [源码优化](#源码优化)
   2. [性能优化](#性能优化)
   3. [编译优化](#编译优化)
   4. [语法API优化](#语法api优化)
2. [核心组件实现](#核心组件实现)
   1. [组件渲染](#组件渲染)
   2. [创建vnode渲染vnode](#创建vnode渲染vnode)
   3. [组件更新DOMDIFF](#组件更新domdiff)
3. [差异点](#差异点)
4. [Composition API](#composition-api)
   1. [组件渲染前是怎么变化的](#组件渲染前是怎么变化的)
   2. [Reactive API](#reactive-api)
5. [Vue3使用](#vue3使用)
   1. [安装](#安装)
   2. [添加sass](#添加sass)
   3. [teleport](#teleport)
   4. [vue-router](#vue-router)
   5. [vuex](#vuex)
   6. [计算属性](#计算属性)
   7. [事件](#事件)
   8. [表单输入绑定](#表单输入绑定)
   9. [组件基础](#组件基础)
6. [附录](#附录)

## 优化点

### 源码优化

- 代码管理方式

    > 更加细化，采用`monorepo`方式, 将功能不同的模块拆分到`packages`目录下面不同你的子目录中
    >
    > 每个`package`有各自的API、类型定义、测试。有一些`package`甚至可以独立于vue使用

- 使用TS开发

### 性能优化

- 源码体积优化

    > 1. 移除一些冷门的feature(eg: filter, inline-template)
    > 2. 引入tree-shaking(按使用的情况进行引入, 打包阶段会将未被引入的模块进行标记，压缩阶段会将这些代码进行删除)的技术，减少打包体积

- 数据劫持优化

    > 使用Proxy api进行数据劫持，劫持的是整个对象，但还是**不能监听到深层次的对象的变化**，所以是在**getter中**去递归响应式，真正访问到的内部对象才会变成响应式，而不是无脑递归

### 编译优化

```
2.0： new Vue -> init -> $mount -> compile -> render -> vnode -> patch -> DOM

在耗时相对较多的 patch 阶段想办法: 通过在编译阶段优化编译的结果，来实现运行时 patch 过程的优化果
```

### 语法API优化

- 优化组织逻辑

    > Options API： 好处： 直观、易理解； 缺点： 在大型组件中，每一个逻辑关注点有它自己的Options, 会很分散
    > Composition API: （setup函数入口）一个逻辑关注点集中在一个函数里面；兼容Options API; 不是编程范式，在简单的组件中可以就使用Options API;

- 优化逻辑复用

    > 之前都是用mixins复用，假如复用的mixins太多，会导致命名冲突和数据来源不清晰；
    > 通过编写多个hook函数来进行引入；

- 引入RFC，使每个版本改动可控

## 核心组件实现

> 不应该理解成单纯的组件拼凑，而是理解成一个**组件树**（更容易整体把握）；核心思想是组件
### 组件渲染

> 模板 + 对象描述 + 数据 -> 组件
>
> 组件是对一棵DOM树的抽象

过程：

1. 创建vnode(可以描述组件信息的js对象);
2. 渲染vnode;
3. 生成DOM;

- vnode的好处：
  - 可以把渲染过程抽象化，使得组件的抽象能力也得到提升
  - patch vnode的过程不同平台可以有自己的实现，基于vnode再做服务端渲染等
- vnode并不意味这不用操作DOM
  - 每次render to vnode的过程中渲染组件会有一定的JS耗时，特别是大组件
  - 更新组件时，用户会感到明显的卡顿

```js

// 初始化 -> 本质上就是把APP组件挂载到ID为app的DOM节点上
import { createApp } from 'vue';
import App from './app';
const app = createApp(App); // 创建app对象，重写app.mount（为了支持跨平台渲染）方法
app.mount('#app');

```

```js
// 源码
const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args)
    const { mount } = app
    app.mount = (containerOrSelector) => {
        // ...
    }
    return app
})

// 渲染相关的一些配置，比如更新属性的方法，操作 DOM 的方法
const rendererOptions = {
  patchProp,
  ...nodeOps
}
let renderer
// 延时创建渲染器，当用户只依赖响应式包的时候，可以通过 tree-shaking 移除核心渲染逻辑相关的代码
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions))
}
function createRenderer(options) {
  return baseCreateRenderer(options)
}
function baseCreateRenderer(options) {
  function render(vnode, container) {
    // 组件渲染的核心逻辑
  }

  return {
    render,
    createApp: createAppAPI(render)
  }
}
function createAppAPI(render) {
  // createApp createApp 方法接受的两个参数：根组件的对象和 prop
  return function createApp(rootComponent, rootProps = null) {
    const app = {
      _component: rootComponent,
      _props: rootProps,
      mount(rootContainer) {
        // 创建根组件的 vnode
        const vnode = createVNode(rootComponent, rootProps)
        // 利用渲染器渲染 vnode
        render(vnode, rootContainer)
        app._container = rootContainer
        return vnode.component.proxy
      }
    }
    return app
  }
}
// 跨平台标准写法
mount(rootContainer) {
  // 创建根组件的 vnode
  const vnode = createVNode(rootComponent, rootProps)
  // 利用渲染器渲染 vnode
  render(vnode, rootContainer)
  app._container = rootContainer
  return vnode.component.proxy
}
// web平台上重写mount, 参数就支持选择器和DOM对象两种类型
app.mount = (containerOrSelector) => {
  // 标准化容器
  const container = normalizeContainer(containerOrSelector)
  if (!container)
    return
  const component = app._component
   // 如组件对象没有定义 render 函数和 template 模板，则取容器的 innerHTML 作为组件模板内容
  if (!isFunction(component) && !component.render && !component.template) {
    component.template = container.innerHTML
  }
  // 挂载前清空容器内容
  container.innerHTML = ''
  // 真正的挂载
  return mount(container)
}
// 在整个 app 对象创建过程中，Vue.js 利用闭包和函数柯里化的技巧，很好地实现了参数保留(eg： render)
```

### 创建vnode渲染vnode

```js
// 类似这个样子AST
const vnode = {
  type: 'button',
  props: { 
    'class': 'btn',
    style: {
      width: '100px',
      height: '50px'
    }
  },
  children: 'click me'
}
const CustomComponent = {
  // 在这里定义组件对象
}
const vnode = {
  type: CustomComponent,
  props: { 
    msg: 'test'
  }
}
```

> Vue.js 3.0 内部还针对 vnode 的 type，做了更详尽的分类，包括 Suspense、Teleport 等，
>
> 且把 vnode 的类型信息做了编码，以便在后面的 patch 阶段，可以根据不同的类型执行相应的处理逻辑

好处：

- 抽象，引入 vnode，可以把渲染过程抽象化，从而使得组件的抽象能力也得到提升
- 跨平台，因为 patch vnode 的过程不同平台可以有自己的实现，基于 vnode 再做服务端渲染、Weex 平台、小程序平台的渲染都变得容易了很多
- 性能并不是 vnode 的优势( 从 `render` 到 `vnode`; 从 `vnode` 到 `render` 都会耗时)
- patch过程有点像 浏览器中 渲染一样，分不同的类型进行处理
- 本质上最终还是要递归创建dom, 挂载dom

### 组件更新DOMDIFF

// TODO


## 差异点

- 删除了filter, 使用computed代替
- 删除了router-link的tag
- 生命周期hook名称
## Composition API

### 组件渲染前是怎么变化的

Vue2.x中，

在一些场景下，如果我们仅仅想在组件上下文中共享某个变量，而不必去监测它的这个数据变化，这时就特别适合在 created 钩子函数中去定义这个变量，因为创建响应式的过程是有性能代价的，这相当于一种 Vue.js 应用的性能优化小技巧，你掌握了这一点就可以在合适的场景中应用了。

1、组件实例的创建
2、组件实例的设置
3、组件实例的

```js
// 

```

### Reactive API

## Vue3使用

### 安装

```s
npm install -g @vue/cli@next

npm init vite-app <project-name>

cd <project-name>

npm install
```

```js
// v-bind='{ id:red }' 定义时，与原有的 id = 'blue' 合并时，谁后声明谁覆盖
```

- 动态参数

```js
v-bind:[attributeName] = "url"
```

- 计算属性的get set方法

- 学会利用计算属性来代替watch方法


- class绑定
绑定的数据对象不必内联定义在模板里：

```html
<div :class="classObject"></div>

<script>
data() {
  return {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
}
</script>
```

- 不推荐同时使用`v-if`和`v-for`

3.x 版本中 v-if 总是优先于 v-for 生效


```js
Vue.createApp({
  data() {
    return {
      items: [{ message: 'Foo' }, { message: 'Bar' }]
    }
  }
}).mount('#array-rendering')
```


v-for可以遍历对象: (value, name) in myObject


<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发   -->
<!-- 而不会等待 `onScroll` 完成                   -->
<!-- 这其中包含 `event.preventDefault()` 的情况   -->
<div @scroll.passive="onScroll">...</div>
这个 .passive 修饰符尤其能够提升移动端的性能。

<input v-model.trim="msg" />


- 动态组件
<!-- 组件会在 `currentTabComponent` 改变时改变 -->
<component :is="currentTabComponent"></component>

attribute最好写完整，false为false


// TODO 深入组件-Props

### 添加sass

```s
npm i -D sass
```

### teleport

### [vue-router](https://next.router.vuejs.org/)

```
yarn add vue-router@4
```

### [vuex](https://next.vuex.vuejs.org/)

```
yarn add vuex@next
```

### 计算属性

计算属性在需要时也可以提供一个`setter`

不要滥用侦听器，当监听复杂或者异步操作时可以用选用侦听

### 事件

- 可以多事件处理

### 表单输入绑定

- 修饰符很有用
  - .lazy
  - .number
  - .trim

### 组件基础


```js
// 传入一个对象所有的值
<blog-post v-bind="post"></blog-post>
```

GreenSock


## 附录

- [vue3官网](https://v3.cn.vuejs.org/)
- [github地址](https://github.com/vuejs/vue-next/releases)