// 1.引入文件系统模块
var fs = require('fs')

// 2.使用模块对象调用方法
//删除文件
// fs.unlink('write2.txt', function(err){ 
//     if(err) throw err
//     console.log('删除文件成功')
// })

// fs.mkdirSync('stuff')  //创建文件夹 同步
// fs.rmdirSync('stuff')  //删除文件夹 同步

// 异步创建文件夹
// fs.mkdir('stuff', ()=> {
//     fs.readFile('read.txt', 'utf-8', (err, data)=> {
//         if(err) throw err;
//         fs.writeFile('./stuff/read.txt', data, function(){})
//     })
// })

// 异步删除文件夹
/**
 * 如果出现此错误： directory not empty
 *  1.先删除文件夹中的文件
 *  2.再删除外部的文件夹 
 */
fs.unlink('./stuff/read.txt', ()=> {
    fs.rmdir('stuff', (err)=>{
        if(err) throw err;
        console.log('删除文件夹成功')
    })
})