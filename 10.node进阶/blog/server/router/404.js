const Router = require('koa-router');
const noPage = new Router();


noPage.get('/', async (ctx)=> {
    ctx.body="页面出错了";
})

module.exports = noPage;