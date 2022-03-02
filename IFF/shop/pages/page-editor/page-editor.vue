<template>
	<view class="page-editor">
		<view class="item mx-3 border-bottom mt-2 main-bg-gray-color" v-if="inputItem">
			<input :type="inputType" v-model="val" :placeholder="placeholderText" class="p-2" />
		</view>
		<view class="btn position-fixed main-bg-color text-white text-center rounded-4 font-weight main-text-30" @click="save">保存</view>
	</view>
</template>

<script>
	import utils from "@/common/utils/util.js"
	export default {
		data() {
			return {
				inputType: "",
				inputItem: true,
				val: "",
				placeholderText: "",
				saveUrl: "",
				successText: "",
				type: "tag"
			}
		},
		onLoad(option) {
			if(option.info) {
				let data = JSON.parse(option.info)
				this.inputType = data.inputType;
				this.placeholderText = data.placeholderText;
				this.type = data.type;
				this.val = data.value;
				this.saveUrl = data.url;
				this.inputItem = data.inputItem;
				this.successText = data.successText;
				uni.setNavigationBarTitle({title: data.title})
			}
		},
		methods: {
			save() {
				if(this.val == '') {
					uni.showToast({title: "内容必须填写！", icon: "none"});
					return;
				}
				let obj = {};
				if(this.type == 'tag') {
					obj = {tag: this.val, token:this.$store.state.user.token};
				} else if(this.type == 'nickname'){
					obj = {nickname: this.val, token:this.$store.state.user.token};
				} else if(this.type == 'mobile') {
					if(!utils.phoneRule(this.val)) {
						uni.showToast({title: "手机号码有误,请检查", icon: "none"});
						return;
					}
					obj = {mobile: this.val, token:this.$store.state.user.token};
				}
				this.$H.post(this.saveUrl, obj).then(res=> {
					if(res.code === '0000') {
						uni.showToast({title: this.successText});
						var pages = getCurrentPages(); 
						var prePage = pages[pages.length - 2]; 
						prePage.data.initTag = true;
						setTimeout(()=> {
							uni.navigateBack({
								delta: 1
							})
						},1000)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-editor {
		height: 100vh;

		.btn {
			width: 400rpx;
			line-height: 88rpx;
			bottom: 10rpx;
			left: 50%;
			transform: translate(-50%, 0);
		}
	}
</style>
