var fs = require('fs')
var http = require('http')

var server = http.createServer((req, res)=> {
    if(req.url !== '/favicon.io') {
        // 判断用户所访问的页面地址
        if(req.url === '/home.html' || req.url === '/') {
            res.writeHead(200, {'Content-type': 'text/html'})
            fs.createReadStream(__dirname + '/home.html').pipe(res)
        } else if(req.url === '/concat.html') {
            res.writeHead(200, {'Content-type': 'text/html'})
            fs.createReadStream(__dirname + '/concat.html').pipe(res)
        } else if(req.url === '/api/doc.html') {
            var data = [
                {
                    "code": 200,
                    "message": "success",
                    "data": [
                        {  
                        "name": "Herry",
                        "age": "30"
                        }
                    ]
                }
            ]
            res.writeHead(200, {'Content-type': 'application/json'})
            res.end(JSON.stringify(data))
        }
    }
})

server.listen('8000', '127.0.0.1')
console.log('服务器启动了...')