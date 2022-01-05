export default {
	// 手机号码中间四位数加密
	phoneEncryption(val){
		var reg=/^(.{3}).*(.{4})$/;
		return val.replace(reg, "$1****$2");
	},
}