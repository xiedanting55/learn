// 文件模块

// 1.引入文件系统模块
const fs = require('fs')

// 2.通过对象调用方法
// var readFile = fs.readFileSync('read.txt', 'utf-8');  //同步读取
// // console.log(readFile)

// fs.writeFileSync('write.txt', readFile);  //同步写入

// fs.readFile('read.txt', 'utf8', (err,data)=> {  //异步读取
//     if(err) throw err
//     console.log(data)
// })

// console.log(1)


fs.readFile('read.txt', 'utf8', (err,data)=> {  //异步写入
    if(err) throw err
    fs.writeFile('write2.txt', data, function(){})
})