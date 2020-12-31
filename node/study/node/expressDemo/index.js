// 引入express模块
var express = require('express')

// 实例化express对象
var app = express()

// 配置视图引擎
app.set('view engine', 'ejs')

// 让服务器识别外部样式表
app.use('/assets', express.static('assets'))

// 通过对象调用对应的方法
// 根据用户请求的地址，返回对应的数据信息
app.get('/',(req,res)=> {
    console.log(req.url)
    res.render('index')
})
app.get('/contcat',(req,res)=> {
    console.log(req.url)
    res.render('contcat')
})
// 路由参数
app.get('/profile/:id',(req, res)=> {
    // console.log(req.params.id)
    var data = [{
        name: ["John", "herry"],
        age: 18
    },
    {
        name: ["amy", "lisa"],
        age: 22
    }]
    res.render('profile', {
        websiteName: req.params.id,
        data: data
    })
})


// 监听服务器端口
app.listen(8000)