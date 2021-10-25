const Koa = require('koa2');
const app = new Koa();
const port = 3002;
const cors = require('koa2-cors');
const router = require('./router');
const path = require('path');
const static = require('koa-static');
const errorHandler = require('./utils/errorHandler');
// app.use(async (ctx)=>{
//     ctx.response.body = '<h1>hello Koa2</h1>'
// })



app.use(async (ctx, next) => {
    await next();
    if(parseInt(ctx.status) === 404) {
        ctx.response.redirect('/404');
    }
})
app.use(static(path.join(__dirname+'/assets')));// 获取静态资源文件夹
app.use(cors());  //后端允许跨域
app.use(router.routes(), router.allowedMethods())
errorHandler(app);


app.listen(port, (err)=> {
    if(err) throw err;
    console.log(`服务器启动了-${port}`);
})