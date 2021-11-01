# Webpack

[基础](https://zhuanlan.zhihu.com/p/102369041)

// 解决跨域问题，注意的是pathRewrite别写错了

```js
proxyTable: {

'/api':{

target:'http://localhost:8080',

pathRewrite:{

'^/api':'/static/mock'

}

}

},
```


```js
//先人为给接口地址前面加上一个自定义的项目名
let someApi = 'api' + '/xx/xx';

dev: {
  env: require('./dev.env'),
  port: 8080,
  autoOpenBrowser: true,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {
    '/api': {
      target: 'http://www.abc.com',  //目标接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/api': '/'   //重写接口
      }
    },
  cssSourceMap: false
}
```



---



<h1 style="text-algin: center;">Webpack</h1>


## 基本概念

> 静态模块打包机（module bundler），当webpack处理应用程序时，会递归地构建一个**依赖关系图**（dependency graph）
> 
> 其中包含应用程序需要的每个模块

- 入口（entry）
- 输出（output）
- loader

  可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理，可以创建出更准确的依赖关系图；

  test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件；

  use 属性，表示进行转换时，应该使用哪个 loader；

- 插件（plugins）

  插件目的在于解决 loader 无法实现的其他事
  
  许多都是直接 `require`，然后开箱即用

  从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务
  

## 基础配置

> 始终采取同一种用法、格式和风格

### 一、项目搭建

<p></p>

- 初始化
  ```
  npm init
  ```

- 安装webpack依赖

  ```
  npm i -D webpack webpack-cli
  ```

- 可以执行打包命令

  ```
  webpack ./src/index.js
  ```

### 二、创建配置文件

<p></p>

- 新增`config`文件
  ```
  build/webpack.config.js
  ```

- 模式： 通过选择 `development` 或 `production` 之中的一个，来设置 `mode` 参数, webpack将会使用相应模式的内置优化
- 入口
- 输出: 即使可以存在多个入口起点，但只指定一个输出配置

  ```js
  const config = {
    mode: 'development',
    entry: './path/to/my/entry/file.js' // 这个是简写
    // entry: {
    //   main: './path/to/my/entry/file.js'
    // }

    // 常见场景： 分离 APP 和 第三方库VENDER 入口
    // entry: {
    //  app: './src/app.js',
    //  vendors: './src/vendors.js'
    // }

    //  多页面应用程序：每一个HTML文档只使用一个入口起点
    //  使用 CommonsChunkPlugin 为每个页面间的应用程序共享代码创建 bundle。
    //  由于入口起点增多，多页应用能够复用入口起点之间的大量代码/模块，从而可以极大地从这些技术中受益。
    //  entry: {
    //    pageOne: './src/pageOne/index.js',
    //    pageTwo: './src/pageTwo/index.js',
    //    pageThree: './src/pageThree/index.js'
    //  }
    output: {
      filename: 'bundle.js',
      path: '/home/proj/public/assets'
    }

    // output: {
    //  filename: '[name].[hash:7].js',
    //  path: path.resolve(__dirname, '../dist')
    // }

    // cdn 资源hash; 在编译时不知道 publicPath，你可以先忽略它，并且在入口起点设置 __webpack_public_path__ = myRuntimePublicPath
    // output: {
    //  path: "/home/proj/cdn/assets/[hash]",
    //  publicPath: "http://cdn.example.com/assets/[hash]/"
    // }

  }
  module.exports = config;
  ```


### 三、DIST文件夹清除插件

```
npm i -D clean-webpack-plugin
```

### 四、HTML打包插件

```
npm i -D html-webpack-plugin
```


### 五、CSS编译loader

> 使用loader有三种方式： 配置（推荐）、内联、CLI

```
npm i -D style-loader css-loader
```


### 六、babel（JS编译）

> babel-loader 8.x 对应babel-core 7.x; babel-loader 7.x 对应babel-core 6.x

### 七、target

```js
const config = {
  target: 'web', // 默认就是 web
  // target: 'node'
}
```

### 八、模块热替换（HMR）

> 对于多数实现来说，`webpack-dev-server`能够配合良好

## Webpack 模块

- ES2015 import 语句
- CommonJS require() 语句
- AMD define 和 require 语句
- css/sass/less 文件中的 @import 语句
- 样式(url(...))或 HTML 文件(<img src=...>)中的图片链接(image url)


## Webpack 优化

> Code Splitting

### 一、优化开发效率

1. 优化构建速度
- 缩小文件搜索范围
  - 优化resolve.modules配置
  - 优化resolve.mainfields配置
  - 优化resolve.extensions配置
  - 优化module.noParse 配置
- 使用 DllPlugin
- 使用 HappyPack(多进程并行处理loader)
- 使用 ParallelUglifyPlugin
- 使用自动刷新/开启模块热替换等自动化手段，优化体验


### 二、优化输出质量

> 减少首屏加载时间、提升性能流畅度

- 区分环境
- 压缩代码
- CDN 加速
- 使用 Tree Shaking
- 提取公共代码
- 按需加载

- 使用 Prepack
- 开启 Scope Hoisting