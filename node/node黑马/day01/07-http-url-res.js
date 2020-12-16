const { write } = require('fs')
var http = require('http')

// 1.创建server
var server = http.createServer()

// 2.监听request请求事件，设置请求处理函数
server.on('request', (req, res) => {
    // res.write('hello');
    // res.end();
    // 上面这种方式很繁琐，简单的方式
    // res.end('hello node');

    // 根据不同的请求路径发送不同的响应结果
    // 1.获得请求路径
    //  req.url获得到的是端口号之后的那一部分路径
    //  也就是说所有的url都是以/开头的
    var url = req.url;
    // if (url === '/') {
    //     res.end('index')
    // } else if (url === '/login') {
    //     res.end('login')
    // } else {
    //     res.end('404')
    // }

    if (url === '/products') {
        var pro = [{
            name: "苹果",
            price: 10
        },{
            name: "苹果6",
            price: 30
        },{
            name: "苹果2",
            price: 144
            }]
        // 响应内容只能是二进制数据或者字符串
        // 数字，对象，数组，布尔都不行
        res.end(JSON.stringify(pro))
    }
})

// 3.绑定端口号，启动服务
server.listen(3001, () => {
    console.log('启动成功')
})