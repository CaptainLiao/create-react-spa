# react-spa-cli 简介

webpack3.4.1搭建react单页应用，脚手架 使用 react@15.6.1+webpack@3.4.1+es2015，都是当前最新版本，可以完整运行。

具有开发和生产两种模式。

## 使用方法
全局安装 react-spa-cli
````
npm install -g react-spa-cli
````

创建工程，并且换到新建目录下：
````
react-spa-cli my-project & cd my-project
````

安装依赖：
````
npm install
````

运行程序：
````
// 开发环境
npm start

// 生产环境
npm run build
````
## 基本功能
**注意**：在使用之前，强烈建议过一遍[webpack3.4.1 中文指南](https://doc.webpack-china.org/guides/)

两种模式，基本功能点如下：
- 开发模式
  * 热替换，保存刷新[ webpack-dev-server ](https://doc.webpack-china.org/guides/hot-module-replacement/)
  * react模块热替换[react-hot-loader](https://github.com/gaearon/react-hot-loader/tree/master/docs#starter-kits)
  * 自动生成index.html [htmlwebpackplugin](https://doc.webpack-china.org/guides/output-management/#-htmlwebpackplugin)
  * [css module](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)
  * scss、autoprefixer
  * [code splitting](https://doc.webpack-china.org/guides/code-splitting/)
  * 模块异步加载[react-loadable](https://www.npmjs.com/package/react-loadable)
  * 引入 [antd-mobile](https://mobile.ant.design/docs/react/introduce-cn)
  * [使用环境变量](https://doc.webpack-china.org/guides/environment-variables/)  
  * eslint

- 生产模式
  * 自动生成index.html [htmlwebpackplugin](https://doc.webpack-china.org/guides/output-management/#-htmlwebpackplugin)
  * [css module](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)
  * scss、autoprefixer
  * [code splitting](https://doc.webpack-china.org/guides/code-splitting/)
  * 模块异步加载[react-loadable](https://www.npmjs.com/package/react-loadable)
  * 引入 [antd-mobile](https://mobile.ant.design/docs/react/introduce-cn)
  * [使用环境变量](https://doc.webpack-china.org/guides/environment-variables/)
  * eslint
  * 提取 CSS[extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin)
  * 资源打包压缩(UglifyJsPlugin)
  * [缓存优化](https://doc.webpack-china.org/guides/caching/)
  * 引入CDN，减少打包体积[externals](https://doc.webpack-china.org/guides/author-libraries/#-externals)
  * 自动添加后缀[resolve.extensions]