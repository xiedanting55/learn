// 事件模块

// 1.引入事件模块
var events = require('events')

// 2.创建EventEmitter对象
var myEmitter = new events.EventEmitter()

// 3.注册事件
myEmitter.on('events', function(msg) {
    // console.log(msg)
    setImmediate(() => {  //异步
        console.log(msg)
    });
})

// 4.触发事件
myEmitter.emit('events', '实现事件并传递此参数到注册事件的回调函数中')

console.log(1)