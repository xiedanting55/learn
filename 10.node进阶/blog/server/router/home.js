const Router = require('koa-router');
const home = new Router();


home.get('/', async (ctx)=> {
    ctx.body="玩具";
})
home.get('/homeqita', async (ctx)=> {
    ctx.body="其他";
})

module.exports = home;