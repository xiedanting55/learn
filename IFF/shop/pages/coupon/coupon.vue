<template>
	<view class="coupon">
		<view class="mx-3 coupon-title d-flex a-center py-1">
			<image src="/static/images/icon1.png" mode="widthFix"></image>
			<text class="ml-2 font-weight">项链</text>
		</view>
		<view class="mx-3 coupon-list d-flex a-center j-sb pr-3">
			<view class="d-flex flex-column a-center j-center row1">
				<view class="coupon-price d-flex a-end">
					<text class="main-text-color coupon-price-text1">¥</text>
					<text class="main-text-color font-weight coupon-price-text2 mt-1">100</text>
				</view>
				<text class="text1 text-center main-bg-color text-white rounded-4">店铺优惠卷</text>
			</view>
			<view class="d-flex flex-column row2">
				<text class="main-text-color">满199可用</text>
				<text>距到期仅剩2天</text>
			</view>
			<text class="text2 d-block main-bg-color text-white rounded-4 text-center">去使用</text>
		</view>
		
		<view class="mx-3 coupon-title d-flex a-center py-1">
			<image src="/static/images/icon1.png" mode="widthFix"></image>
			<text class="ml-2 font-weight">项链</text>
		</view>
		<view class="mx-3 coupon-list d-flex a-center j-sb pr-3">
			<view class="d-flex flex-column a-center j-center row1">
				<view class="coupon-price d-flex a-end">
					<text class="main-text-color coupon-price-text1">¥</text>
					<text class="main-text-color font-weight coupon-price-text2 mt-1">100</text>
				</view>
				<text class="text1 text-center main-bg-color text-white rounded-4">店铺优惠卷</text>
			</view>
			<view class="d-flex flex-column row2">
				<text class="main-text-color">满199可用</text>
				<text>距到期仅剩2天</text>
			</view>
			<text class="text2 d-block main-bg-color text-white rounded-4 text-center">去使用</text>
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
	.coupon {
		.coupon-title {
			image {
				width: 36rpx;
			}
			text {
				font-size: 30rpx;
				color: #333;
			}
		}
		.coupon-list {
			padding-left: 60rpx;
			width: 600rpx;
			height: 186rpx;
			background: url(../../static/images/coupon-bg.png) center center no-repeat;
			background-size: 100% 100%;
			.row1 {
				width: 152rpx;
				.coupon-price {
					line-height: 60rpx;
					.coupon-price-text1 {
						font-size: 40rpx;
					}
					.coupon-price-text2 {
						font-size: 50rpx;
					}
				}
				.text1 {
					width: 100%;
					line-height: 32rpx;
					font-size: 12rpx;
				}
			}
			.row2 {
				text {
						&:nth-of-type(1) {
							font-size: 30rpx;
						}
						&:nth-of-type(2) {
							font-size: 24rpx;
							color: #2a2a2a;
						}
				}
			}
			.text2 {
				width: 124rpx;
				font-size: 30rpx;
			}
		}
	}
</style>
