var http = require('http')
var fs = require('fs')

var server = http.createServer((req, res)=> {
    // res.writeHead(200, {'Content-type': 'text/plain'})
    // var readStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf-8')
    // res.writeHead(200, {'Content-type': 'text/html'})
    // var readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8')  //html
    res.writeHead(200, {'Content-type': 'application/json'})
    var readStream = fs.createReadStream(__dirname + '/person.json', 'utf-8')    //json
    readStream.pipe(res)
})

server.listen('8000', '127.0.0.1')