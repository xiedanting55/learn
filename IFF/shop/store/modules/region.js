export default {
	state:{
		// 地址信息
		infoAddress:"",
	},
	actions:{
		// 更新列表
		infoList({state}, data){
			state.infoAddress = data;
		}
	}
}