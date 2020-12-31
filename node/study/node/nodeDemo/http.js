// 通过http模块，创建本地服务器
var http = require('http')

// 创建服务器方法
var server = http.createServer((req,res)=> {
    console.log('客户端向服务器发送请求：' + req.url)
    res.writeHead(200, {'Content-type': "text/plain"})
    res.end("Server is working!")
})

// 服务对象监听服务器地址及端口号
server.listen(8000, '127.0.0.1')

console.log('启动了')