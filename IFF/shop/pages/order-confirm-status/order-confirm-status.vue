<template>
	<view class="status mx-3 d-flex flex-column a-center">
		<image src="/static/images/success.png" mode="widthFix"></image>
		<text class="mt-3 main-text-24 font-weight">订单提交成功</text>
		<view class="mt-3 w-100 main-text-30 font-weight main-bg-gray-color main-text-color send py-2 text-center" hover-class="main-bg-color" @click="getWXPay">支付</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderId: ""
			}
		},
		onLoad(option) {
			if(option) {
				this.orderId = option.orderId;
			}
		},
		methods: {
			getWXPay() {
				this.$H.post('Order/getWXPayData', {
					order_id: this.orderId,
					token: this.$store.state.user.token,
				}).then((res) => {
					if (res.code === '0000') {
						let {appId, nonceStr, signType, timeStamp, sign} = res.result.wdata;
						uni.requestPayment({
							"appId": appId,
							"nonceStr": nonceStr, //　　随机字符串
							"package": res.result.wdata.package, //　　统一下单接口 
							"signType": signType, //　　签名算法 
							"timeStamp": String(timeStamp), //　　时间戳 
							"paySign": sign, 
							success: data => {
								uni.showModal({
									title:"提示",
									content: "支付成功"
								})
								setTimeout(()=> {
									uni.switchTab({
										url: "../goods/goods"
									})
								},2000)
							},
							fail: err => {
								uni.showModal({
									title:"提示",
									content: "支付失败"
								})
								return;
							}
						});
			
					} else {
						uni.showToast({
							title: res.msg,
							icon: "none"
						})
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.status {
		margin-top: 180rpx;
		image {
			width: 80rpx;
			height: 80rpx;
		}
		text {
			color: #2c2c2c;
		}
	}
</style>
