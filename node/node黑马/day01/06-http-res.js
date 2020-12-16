var http = require('http')

var server = http.createServer()

// request 请求事件处理函数,需要接收两个参数
// request请求对象： 请求对象可以用来获取客户端的一些请求信息，例如请求路径
// response响应对象：响应对象可以用来给客户端发送响应消息

server.on('request', (request,  response)=> {
    // console.log('请求路径：' + request.url)
    // console.log(response)
    response.write('hello')
    // 告诉客户端，我的话说完了，可以呈现给用户
    response.end()
})

server.listen(3001, ()=> {
    console.log('启动成功!!!可以通过http://127.0.0.1:3001 进行访问')
})