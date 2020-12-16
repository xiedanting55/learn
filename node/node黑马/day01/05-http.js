// 1.加载http核心模块
var http = require('http')
// 2. 使用http.createServer()创建一个Web服务器
var server = http.createServer()
// 3.当客户端请求过来,会自动触发服务器的request请求事件,然后执行第二个参数:callback
server.on('request', ()=> {
    console.log('收到请求了')
})
// 4.绑定端口号,启动服务器
server.listen(3001, ()=> {
    console.log('启动成功!!!可以通过http://127.0.0.1:3001 进行访问')
})