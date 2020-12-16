// require 是一个方法，作用：加载模块
// 在Node中，模块有三种：
//  1.具名的核心模块。例如：fs,http
//  2.用户自己编写的文件模块
//  3.相对路径必须加 ./
// Node中，没有全局作用域，只有局部作用域
console.log('a start')
require('./b')
console.log('a end')
