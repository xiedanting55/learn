// console.log('Hello world')

// 定时器
// setTimeout(()=> {
//     console.log('3s之后显示')
// }, 3000)

// let time = 0
// var timer = setInterval(() => {
//     console.log('3s之后循环显示');
//     time += 2;
//     if(time > 4) clearInterval(timer)
// }, 3000);

// 路径
// console.log(__dirname)    //不包含文件名路径   C:\Users\ZH\Desktop\study\node\nodeDemo
// console.log(__filename)   //包含文件名路径     C:\Users\ZH\Desktop\study\node\nodeDemo\app.js

// global
// console.log(global)

var {counter, add} = require('./stuff')
console.log(add(2,3))
console.log(counter(['amy', 'herry']))