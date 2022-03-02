<template>
	<view class="nopay">
		<view class="nopay-item d-flex a-center j-center flex-column main-bg-gray-color">
			<text class="main-text-36">付款未成功</text>
			<text class="main-text-30 my-1">订单编号 {{orderSn}}</text>
			<view class="main-bg-color main-text-30 text-white rounded-4 px-5 py-1" @click="back">返回</view>
		</view>
		<view class="nopay-item d-flex a-center j-center flex-column mt-3 nopay-tips">
			<text class="main-text-30 position-relative pb-2">您的订单尚未支付成功,请继续支付</text>
			<text class="main-text-30 pt-2">24小时内未付款,您的订单将自动取消</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderSn: ""
			}
		},
		onLoad(option) {
			if(option) this.orderSn = option.orderSn;
		},
		methods: {
			back() {
				uni.reLaunch({
					url: "../my-order/my-order?id=1"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nopay {
		.nopay-item {
			height: 300rpx;
			&.nopay-tips {
				text {
					color: #6d6868;
					&:nth-of-type(1) {
						&::before {
							content: "";
							position: absolute;
							bottom: 0;
							left: 0;
							width: 100%;
							height: 1rpx;
							background-color: #E0E0E0;
						}
					}
				}
			}
		}
	}
</style>
