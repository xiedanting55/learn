const Router = require('koa-router');
const list = new Router();


list.get('/wanju', async (ctx)=> {
    ctx.body="玩具";
})
list.get('/qita', async (ctx)=> {
    ctx.body="其他";
})

module.exports = list;