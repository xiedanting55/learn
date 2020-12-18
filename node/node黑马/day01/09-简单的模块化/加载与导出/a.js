// require方法有2个作用：
//  1.加载文件模块并执行里面的代码
//  2.拿到被加载文件模块导出的接口对象

// 每个文件模块中提供了一个对象exports
// exports是一个空对象，需要把外部访问的成员挂在到这个对象中
var obj = require('./b')
console.log(obj)
console.log(obj.foo)
console.log(obj.add(10,20))