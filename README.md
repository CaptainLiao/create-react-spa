# webpack3.4.1搭建react单页应用
本 DEMO 使用 react@15.6.1+webpack@3.4.1+es2015，都是当前最新版本，可以完整运行。
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

## 安装
`npm install`

## 开发模式
`npm start`

## 生产模式
`npm run build`

## 相关依赖说明
#### [react.js](https://facebook.github.io/react/index.html) [必需]
> React是用来构建用户界面的js库，属于view层。  
  它有两大特点：1，单向数据绑定；2，虚拟DOM  
  安装：`npm install --save react`
  #### [React 中文文档](https://discountry.github.io/react/)
  #### [react-router-dom 英文文档](https://reacttraining.com/react-router/web/example/basic)
  #### [初探 React Router 4.0](http://blog.csdn.net/sinat_17775997/article/details/69218382)
  #### [Redux 中文文档](http://cn.redux.js.org/index.html)
  
---

#### [react-dom.js](https://npm.taobao.org/package/react-dom) [必需]
> react.js 主要用来创建元素和组件，当你想在html中渲染你的组件的时候，  
你还得需要react-dom.js。同时，react-dom.js依赖于react.js。  
安装：`npm install --save react-dom`

---

#### [webpack](https://doc.webpack-china.org/guides/) [必需]
> webpack不同版本的配置差异较大，本 demo 使用 3.4.1版本  
安装：`npm install -D webpack` 
webpack -h 查看帮助 
#### [webpack3.41 中文文档](https://doc.webpack-china.org/guides/)
#### [webpack 构建解惑](https://segmentfault.com/a/1190000005089993#articleHeader3)

---

#### [webpack-dev-server](https://github.com/webpack/webpack-dev-server) [开发需要]
> webpack-dev-server是协助我们开发的服务器，这个服务器底层是靠express操作的。  
实现保存文件页面自刷新，配置详见 server.js。  
安装：`npm install -D webpack-dev-server`  

---

#### [babel-core](https://npm.taobao.org/package/babel-core) [必需]  
> Babel是一个转换编译器，它能将ES6转换成可以在浏览器中运行的代码。  
作为下一代javascript语言标准，请拥抱ES6(ES2015)吧！`babel-core` 是Babel编译器的核心。  
安装：`npm install -D babel-core`

#### [babel-loader](https://npm.taobao.org/package/babel-loader) [必需]  
> loader 用于转换应用程序的资源文件，他们是运行在nodejs下的函数，   
`babel-loader` 就是告诉webpack去加载我们写的使用了es6语法的js文件。  
安装：`npm install -D babel-loader`

---

#### [babel-plugin-transform-runtime](http://babeljs.io/docs/plugins/transform-runtime/#why) [开发需要]
> 在大多数情况下，你需要安装babel-plugin-transform-runtime作为开发版本的依赖（设置-D）
和下面的 `babel-runtime` 搭配使用
安装：`npm install -D babel-plugin-transform-runtime`

#### [babel-runtime](http://babeljs.io/docs/plugins/transform-runtime/#why) [必需]
> babel-runtime作为生产版本依赖（设置 --save）
[Runtime transform/runtime 转化器详解](https://segmentfault.com/a/1190000009065987)  
安装：`npm install --save babel-runtime`

---

#### [babel-preset-latest](http://babeljs.io/docs/plugins/preset-latest/) [必需]  
> es2015,es2016,es2017转码规则。为所有es6插件所设置的babel预设，  
有了它，诸如，es6的箭头函数，类，等等语法特性才能向es5转换。  
安装：`npm install -D babel-preset-latest`

#### [babel-preset-react](https://github.com/babel/babel) [必需]  
> react转码规则。为所有react插件所设置的babel预设。有了它，才能识别转译jsx语法等。  
安装：`npm install -D babel-preset-react`

#### [babel-preset-stage-X](https://npm.taobao.org/package/babel-preset-stage-0) [必需]  
> ES7不同阶段语法提案的转码规则（共有4个阶段），选装**一个**  
在进行实际开发时，可以根据需要来设置对应的stage。如果省事懒得折腾，一般设置为stage-0即可。  
npm install -D babel-preset-stage-0  

[stage-X详解](http://www.cnblogs.com/flyingzl/p/5501247.html)

---

#### [react-hot-loader](https://github.com/gaearon/react-hot-loader/tree/master/docs#starter-kits) [开发需要]  
> 可以使react组件在浏览器上实时更新并保持组件状态  
安装：`npm install -D react-hot-loader@3.0.0-beta.3`  
备注：用的是3.0最新版本，这版本很强大。

---


#### [html-webpack-plugin](https://npm.taobao.org/package/html-webpack-plugin) [必需]  
> 一个服务于webpack打包资源的简易的HTML文件生成器,它可以动态生成HTML  
之所以要动态生成，主要是希望webpack在完成前端资源打包以后，自动将打包后的资源路径和版本号写入HTML中，达到自动化的效果
安装：`npm install -D html-webpack-plugin`  

---

#### sass node-sass style-loader css-loader postcss-loader autoprefixer [必需]
> 用于编译 .scss 文件，并自动添加前缀
安装：`npm install -D sass node-sass style-loader css-loader postcss-loader autoprefixer` 

#### [file-loader](https://www.npmjs.com/package/file-loader) [必需]  
> 修改文件名（MD5），存放在输出目录，并返回对应的url。
一般用来处理图片、字体等，与之相似功能的还有[url-loader](https://www.npmjs.com/package/url-loader),区别[详见](https://segmentfault.com/q/1010000006239813)
安装：`npm install -D file-loader`

#### extract-text-webpack-plugin [推荐]
> 用于生产环境中，提取出样式文件
安装：`npm install -D extract-text-webpack-pluginr`
---

#### [rimraf](https://npm.taobao.org/package/rimraf) [小工具]
> 一个基于node的深层删除工具，用于每次build前清空文件夹 
安装：`npm install -D rimraf`

---



