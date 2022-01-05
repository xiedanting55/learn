<template>
	<view class="status mx-3 d-flex flex-column a-center">
		<image src="/static/images/success.png" mode="widthFix"></image>
		<text class="mt-3 main-text-24 font-weight">订单提交成功</text>
		<view class="mt-3 w-100 main-text-30 font-weight main-bg-gray-color main-text-color send py-2 text-center" hover-class="main-bg-color">提交订单</view>
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
			color: #2c2c2c;
		}
	}
</style>
