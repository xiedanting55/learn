import $store from '@/store/index.js'
export default {
	// 全局配置
	common:{
		baseUrl:"https://api.iffjewelry.com/Api/",
		header:{
			'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
		},
		data:{},
		method:'GET',
		dataType:'json'
	},
	// 请求 返回promise
	request(options = {}){
		// 组织参数
		options.url = this.common.baseUrl + options.url
		options.header = options.header || this.common.header
		options.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		
		// 请求
		return new Promise((res,rej)=>{
			// console.log(options)
			// 请求之前... todo
			if (options.token) {// token
				options.header.token = $store.state.user.token
				// 二次验证  用于退出登录checkToken
				if (options.checkToken && !options.header.token) {
					uni.showToast({
						title: '请先登录',
						icon: 'none'
					});
					uni.navigateTo({
						url: '/pages/my/my',
					});
					return rej('请先登录')
				}
			}
			// 请求中...
			uni.request({
				...options,
				success: (result) => {
					// console.log(result)
					// 服务端失败
					if(result.data.code !== '0000'){
						// console.log(options)
						if (options.toast !== false) {
							uni.showToast({
								title: result.data.msg || '服务端失败',
								icon: 'none'
							});
						}
						if(options.checkToken && result.data.msg == '非法token，请先登录！'){
							uni.navigateTo({
								url: '/pages/my/my',
							});
						}
						return rej(result.data) 
					}
					// 成功
					res(result.data.data)
				},
				fail: (error) => {
					uni.showToast({
						title: error.errMsg || '请求失败',
						icon: 'none'
					});
					return rej()
				}
			});
		})
	},
	// get请求
	get(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	// post请求
	post(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	// delete请求
	del(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	},
}