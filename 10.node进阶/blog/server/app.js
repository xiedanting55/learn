const koa = require('koa');
const app = new koa();
const port = 3002;

app.listen(port, (err)=> {
    if(err) throw err;
    console.log(`服务器启动了-${port}`);
})