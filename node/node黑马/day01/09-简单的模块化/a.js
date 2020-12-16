// require 是一个方法，作用：加载模块
// 在Node中，模块有三种：
//  1.具名的核心模块。例如：fs,http
//  2.用户自己编写的文件模块
//  3.相对路径必须加 ./ ，否则报错
//  4.可以省去后缀名
// Node中，没有全局作用域，只有模块作用域
//  1.外部访问不到内部
//  2.内部也访问不到外部
var foo = 'aaa';
console.log('a start')
require('./b')
console.log('a end')
console.log(foo)