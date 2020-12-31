var fs = require('fs')
// 读取数据流
var readStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf8')
// 写入数据流
var writeStream = fs.createWriteStream(__dirname + '/writeStream2.txt')

readStream.pipe(writeStream)

// console.log(readStream)
// readStream.on('data', (chunk)=> {
//     console.log('====正在接收一部分数据======')
//     // console.log(chunk)
//     writeStream.write(chunk)
// })