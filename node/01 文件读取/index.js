let fs = require('fs');  //导入文件模块

// 读写文件也有同步和异步的接口
// 同步
// let fd = fs.openSync('hello.txt', 'r');
// let content = fs.readFileSync(fd)
// console.log(content.toString())

// 异步
// fs.readFile('hello.txt',(err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });

// 对异步操作进行promise封装
function fsRead(path) {
    return new Promise((resove, reject) => {
        fs.readFile(path,(err, data) => {
            if (err) throw reject(err);
            resove(data)
        });
    })
}
// let wenjian = fsRead('hello.txt');
// wenjian.then((res) => {
//     console.log(res.toString())
// }).catch((err) => {
//     console.log(err)
// })

// async await 读取3个文件
async function readList() {
    let file2 = await fsRead('hello.txt');
    let file3 = await fsRead(file2.toString() + '.txt');
    let file3Content = await fsRead(file3.toString() + '.txt');
    console.log(file3Content.toString())
}

readList();

