export default {
	state:{
		// 登录状态
		loginStatus:false,
		// token
		token:null,
		// 用户信息
		userInfo:{},
		freight: "",  //运费
		freight_free: "",  //包邮额度
		express_list: {}, //物流编码
		send_back_address: "", //联系地址
		send_back_contact: "", //联系人
		send_back_phone: "", //联系电话
	},
	mutations:{
		// 初始化登录状态
		initUser(state){
			let userInfo = uni.getStorageSync('userInfo')
			if (userInfo) {
				userInfo = JSON.parse(userInfo)
				state.userInfo = userInfo
				state.token = userInfo.token
				state.loginStatus = true
			}
		},
		// 登录
		login(state,userinfo){
			state.userInfo = userinfo
			state.loginStatus = true
			state.token = userinfo.token
			// 持久化存储
			uni.setStorageSync('userInfo',JSON.stringify(userinfo))
		},
		update(state,userinfo) {
			if(userinfo.head_pic) {
				state.userInfo.avataUrl = userinfo.head_pic;
				state.userInfo.nickName = userinfo.nickName;
			}
			// 持久化存储
			uni.setStorageSync('userInfo',JSON.stringify(state.userInfo))
		},
		// 退出登录
		logout(state){
			state.userInfo = {}
			state.loginStatus = false
			state.token = null
			uni.removeStorageSync('userInfo')
		}
	}
}