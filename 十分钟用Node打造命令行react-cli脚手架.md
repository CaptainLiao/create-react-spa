# 十分钟用 Node 命令行工具打造 react-cli 脚手架
如果你有以下想法：
* 每次新开项目需要copy一堆文件/文件夹，太烦！想要快速建立工程
* 用了vue-cli、react-app，羡慕！想要自己做一个
你只需花十分钟时间，做一个Node命令行工具，打造属于自己的脚手架。使用`react-cli my-project`命令，便可生成一套完整的项目结构。

## 功能概览
1、 node 命令行编写范式
2、 创建项目工程
3、 发布到 npm 仓库
4、 优化和更新

假设当前工程目录为：`E:\demo`，不特殊说明，所有操作都在当前目录中执行。

### 一、简单 node 命令行
**1、初始化项目**
````
npm init
````
执行上面的命令，自动生成`package.json`文件，[详见](https://docs.npmjs.com/cli/init)，项目名字就叫`react-cli`。
**2、创建运行命令的脚本**
bin/index.js
````
#! /user/bin/env node
console.log('Hello node cli');
````
然后在控制台中执行`node bin/index.js`就会输出`Hello node cli`
**3、链接到npm**
在已经创建好的`package.json`文件中加入下面的字段：
````
...
"bin": {
  "react-cli": "./bin/index"
}
...
````
package.json中有一个"bin"字段，配置后才可以在控制台使用你的命令。
**4、全局安装你的包**
要使`react-cli`作为全局命令，还需要将它安装到全局，有两种方式：`npm link` or `npm install . -g`

*P.S.换个新的目录，执行 `react-cli` 看看成功了没~*

### 二、创建项目工程
我这里使用react，项目结构如下，你根据实际情况创建自己的项目结构：

![](http://images2017.cnblogs.com/blog/1085489/201709/1085489-20170918154940134-510962999.png)

这就为未来新建项目的模板了，我们要做的就是**将所有文件拷贝到目标文件夹种并保持结构一致**，于是我们改写`bin/index.js`
````
#! /usr/bin/env node

let Promise = require('bluebird')
let fs = Promise.promisifyAll(require('fs-extra'))

let program = require('commander')
let chalk = require('chalk')
// 取得包版本号
let _v = require('../package.json').version;

program
.version(_v)
.usage('react-spa-cli name')
.parse(process.argv)

// 获取templates在全局下的路径
let tem = __dirname.replace('\\bin', '') + '\\templates';
// 拿到命令行输入的参数
let newPath = program.args[0];
function generator(dest) {
  // 最核心，拷贝到目标文件夹中
  return fs.copyAsync(tem, dest, {clobber: true})
    .then(() => {
      console.log(`success!\n`)
    })
    .catch(err => console.log(chalk.red(`cd ${err}`)))
}

generator(newPath);
````
注释解释了`index.js`函数的作用，并且我们还引入了几个包，包的含义我们等下讲，先安装下来：
````
npm install --save bluebird fs-extra commander chalk
````

[bluebird](https://www.npmjs.com/package/bluebird)：是一个`promise`工具库，将异步回调操作转为promise。

[fs-extra](https://www.npmjs.com/package/fs-extra)：是对`fs`的一次重写，使其变得更加好用。

[commander](https://www.npmjs.com/package/commander)：是编写node命令行的神器，可以帮助我们简化很多操作，[详见](http://blog.fens.me/nodejs-commander/)

[chalk](https://www.npmjs.com/package/chalk)：给命令行输出文字上色。

此时，执行：`react-cli my-pro` 就会在当前目录生成一个`my-pro`文件夹，其中包含了`templates`中的所有内容。 

### 三、发布到 npm 仓库
1、在npm上注册一个账号，[去注册](https://www.npmjs.com/signup)
2、回到项目中，登录
```
npm login
````
3、发布
````
npm publish
````
现在，在 npm 上搜索 `react-cli`，就会出现啦。
4、下载安装
首先`npm unlink`解除本地全局关系，下载npm 上的包文件 `npm install -g react-cli`。
切换到一个新的目录，执行
````
react-cli my-react
````
bingo！

### 四、优化和更新
每次我们修改文件，需要重新发布版本的话，切记在publish前，要修改 `package.json`中的version字段，然后执行：
````
npm publish
````
另，如果某天你想删除npm上的这个包，执行：
````
npm unpublish react-cli --force
````




