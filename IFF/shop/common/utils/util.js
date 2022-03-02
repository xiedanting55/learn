export default {
	// 手机号码
	phoneRule(val){
		var reg=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
		return reg.test(val);
	},
	// 手机号码中间四位数加密
	phoneEncryption(val){
		var reg=/^(.{3}).*(.{4})$/;
		return val.replace(reg, "$1****$2");
	},
	
}