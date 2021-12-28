<template>
	<view class="status mx-3 d-flex flex-column a-center">
		<image src="/static/images/success.png" mode=""></image>
		<text class="mt-3">订单提交成功</text>
		<button class="mt-3 w-100" hover-class="main-bg-color">提交订单</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
			font-size: 24rpx;
			color: #2c2c2c;
			font-weight: bold;
		}
		button {
			background-color: #e4e4e4;
			border-color: #e4e4e4;
			font-size: 30rpx;
		}
	}
</style>
