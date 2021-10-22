const Router = require('koa-router');
const router = new Router();
const home = require('./home');
const list = require('./list');
const noPage = require('./404');

// router.get('/', async (ctx)=> {
//     ctx.body="首页";
// })
// router.get('/list', async (ctx)=> {
//     ctx.body="列表页";
// })

router.use('/home', home.routes(), home.allowedMethods())
router.use('/list', list.routes(), list.allowedMethods())
router.use('/404', noPage.routes(), noPage.allowedMethods())

router.redirect("/","/home");
module.exports = router;