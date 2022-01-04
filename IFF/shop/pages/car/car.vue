<template>
	<view class="car">
		<view class="empty d-flex a-center j-center flex-column">
			<image src="/static/images/car.png" mode="widthFix"></image>
			<text class="mt-3">您的购物车是空的</text>
			<text class="main-bg-color text-center text-white mt-2 px-3">继续购物</text>
		</view>
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
	.empty {
		margin-top: 100rpx;
		image {
			width: 180rpx;
		}
		text {
			font-size: 30rpx;
		}
	}
</style>
