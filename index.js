#! /usr/bin/env node

let Promise = require('bluebird')
let fs = Promise.promisifyAll(require('fs-extra'))

let tem = __dirname + '\\templates';
function generator(pro) {
  return fs.copyAsync(tem, pro, {clobber: true})
    .then((err) => {
      if(err) return console.log(err)
    })
}

generator('react');

// var fs = require('fs')
// var fpath = require('path')
// // 设置根路径 __dirname
// var rootPath = __dirname;
// console.log( process.cwd())


// function mkdir (path, fn) {
//   let srcPath = path.replace('templates', 'src')
//   fs.mkdirSync(srcPath, function(err) {
//     fn && fn()
//   })
// }

// function clean(path) {
//   if(fs.existsSync(path)) {
//     var files = fs.readdirSync(path);
//     files.forEach((file, index) => {
//       var curPath = fpath.join(path , '\\' , file);
//       if(fs.statSync(curPath).isDirectory()) {
//         clean(curPath);
//       } else {
//         fs.unlinkSync(curPath);
//       }
//     });
//     fs.rmdirSync(path);
//   }
// }




// // 遍历文件夹下的文件
// function loopReaddir(path, handleFile) {
//   fs.readdir(path, (err, files) => {
//     if(err) return;

//     files.forEach((file, index, files) => {
//       let rPath = fpath.join(path , '\\' , file);
//       fs.stat(rPath, (err, stats) => {
//         if(err) return;
        
//         if(stats.isDirectory()) {
//           loopReaddir(rPath);
//           mkdir(rPath)
//         } else {
//           console.log(rPath + '\n');
//           if(rPath.indexOf('templates') > 0) {
//             let src = rPath.replace('templates', 'src');
//             fs.appendFileSync(src, fs.readFileSync(rPath));
//           }

//         }
//       })
//     })
//   })
// }

//  clean(rootPath + '\\src')
//  loopReaddir(rootPath)
