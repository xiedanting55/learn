const Koa = require('koa2');
const app = new Koa();
const port = 3002;
const router = require('./router');
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

app.use(router.routes(), router.allowedMethods())
errorHandler(app);


app.listen(port, (err)=> {
    if(err) throw err;
    console.log(`服务器启动了-${port}`);
})