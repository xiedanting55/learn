var os = require('os'); //用来获取机器信息
var path = require('path'); //用来操作路径

//获取当前机器的cpu信息
console.log(os.cpus());

// memory 内存
console.log(os.totalmem())

// extname extension name 扩展名
console.log(path.extname('c:/a/a.txt'))