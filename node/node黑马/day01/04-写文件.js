var fs = require('fs');
// 第一个参数：文件路径
// 第二个参数: 文件内容
// 第三个参数: callback
//             成功: error->null
//             失败: error->错误对象
fs.writeFile('./data/test2.txt', '测试写入文件内容',(error)=> {
    if (error) throw error;
    console.log('文件已被保存');
})