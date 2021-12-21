export default {
	// 全局配置
	common: {
		baseUrl: "http://ceshi3.dishait.cn/api",
		header: {
			"Content-Type": "application/json;charset=UTF-8",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		data: {},
		method: "GET",
		dataType: "json"
	},
	// 请求 返回promise
	request(options={}) {
		// 组织对象
		options.url = this.common.baseUrl + options.url;
		options.header = options.header || this.common.header;
		options.data = options.data || this.common.data;
		options.method = options.method || this.common.method;
		options.dataType = options.dataType || this.common.dataType;
		return new Promise((res,rej)=> {
			// 请求之前  token
			// 请求中...
			uni.request({
				...options,
				success: (result) => {
					if (result.statusCode !== 200) {// 服务端失败
						uni.showToast({
							title: result.data.msg || '服务端失败',
							icon: 'none'
						});
						return rej();
					}
					// 成功
					let data = result.data.data; //成功
					res(data);
				},
				fail: (error) => {
					uni.showToast({
						title: err.errMsg || '请求失败',
						icon: 'none'
					});
					return rej();
				}
			})
		})
	},
	// get请求
	get(url,data = {},options = {}){
		options.url = url;
		options.data = data;
		options.method = 'GET';
		return this.request(options);
	},
	// post请求
	post(url,data = {},options = {}){
		options.url = url;
		options.data = data;
		options.method = 'POST';
		return this.request(options);
	},
	// delete请求
	del(url,data = {},options = {}){
		options.url = url;
		options.data = data;
		options.method = 'DELETE';
		return this.request(options);
	},
}