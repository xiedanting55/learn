const Router = require('koa-router');
const home = new Router();
const db = require('../utils/db');
const config = require('../utils/config');


home.get('/', async (ctx)=> {
    ctx.body="玩具";
})

home.get('/banner', async (ctx)=> {
    let mydata = await new Promise((resolve, reject)=> {
        return db.query("SELECT * FROM banner", (err, data)=> {
            if(err) throw err;
            data.map((val)=> {
                val.imgUrl = config.baseUrl + val.imgUrl;
            })
            resolve(data);
        })
    });
    ctx.body = mydata;
})

module.exports = home;