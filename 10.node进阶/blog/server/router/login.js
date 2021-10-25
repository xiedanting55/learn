const Router = require('koa-router');
const login = new Router();
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');
const db = require('../utils/db');

login.use(bodyParser());

login.post('/register', async (ctx)=> {
    // console.log(ctx.request.body)
    let myaccount = ctx.request.body.account;
    let mypwd = ctx.request.body.pwd;

	let result = await new Promise((resolve, reject) => {
		return db.query(`SELECT * FROM users WHERE account='${myaccount}'`, (err, data) => {
			if (err) throw err;
			if (data.length > 0) {
				resolve(data);
			} else {
				resolve(false);
			}
		})
	})
    if (result) {
		if (result[0].pwd == mypwd) {
			ctx.body = {
                code: 200,
				token: result[0],
				msg: '登录成功',
				account: myaccount
			};
		} else {
			ctx.body = {
                code: 500,
				msg: '账号或密码错误',
				account: myaccount
			};
		}
	} else {
		let result1 = await new Promise((resolve, reject) => {
			const token = jwt.sign({ myaccount: myaccount, mypwd: mypwd }, 'secret', { expiresIn: 3600 })
			return db.query(`INSERT INTO users (account, pwd, token) values ('${myaccount}', '${mypwd}', '${token}')`, (error, datas) => {
				if (error) throw error;
				let obj = {
                    code: 200,
					token,
					msg: '登录成功',
					account: myaccount
				}
				resolve(obj)
			})
		})
		if (result1) {
			ctx.body = result1;
		}
	}
})

module.exports = login;