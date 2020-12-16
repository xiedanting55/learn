// 浏览器中的javascript是没有文件操作的能力
// 但是node中的javascript具有文件操作的能力

// fs是file-system的简写，意思是文件系统
// 在node中如果想要进行文件操作，必须引入fs这个核心模块
// 在fs这个核心模块中，提供了所有文件操作相关的API
// 例如：fs.readFile就是用来读取文件的

// 1.使用require方法加载fs核心模块
var fs = require('fs');
// 2.读取文件
// 第一个参数：读取文件路径
// 第二个参数：callback
//            成功： data->数据，error->null
//            失败： data->null，error->错误对象
fs.readFile('./data/test.txt', (error, data) => {
    console.log(data);  //默认存储的数据是二进制数据 0 1
    console.log(data.toString())  //toString转为我们认识的字符
    console.log(error);
    if (error) throw error;
});