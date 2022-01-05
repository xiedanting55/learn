<template>
	<view class="coupon">
		<view class="mx-3">
			<itemTop :pic="'/static/images/icon1.png'" :name="'项链'" />
			<view class="coupon-list d-flex a-center j-sb pr-3 mb-3">
				<view class="d-flex flex-column a-center j-center">
					<price :sizeBol="40" :sizeNumber="50" :priceValue="100" />
					<text class="text-center main-bg-color text-white rounded-4 main-text-20 px-2">店铺优惠卷</text>
				</view>
				<view class="d-flex flex-column row2">
					<text class="main-text-color main-text-30">满199可用</text>
					<text class="main-text-24">距到期仅剩2天</text>
				</view>
				<text class="text2 d-block main-bg-color text-white rounded-4 text-center main-text-30">去使用</text>
			</view>
		</view>
		<view class="mx-3">
			<itemTop :pic="'/static/images/icon1.png'" :name="'项链'" />
			<view class="coupon-list d-flex a-center j-sb pr-3 mb-3">
				<view class="d-flex flex-column a-center j-center">
					<price :sizeBol="40" :sizeNumber="50" :priceValue="100" />
					<text class="text-center main-bg-color text-white rounded-4 main-text-20 px-2">店铺优惠卷</text>
				</view>
				<view class="d-flex flex-column row2">
					<text class="main-text-color main-text-30">满199可用</text>
					<text class="main-text-24">距到期仅剩2天</text>
				</view>
				<text class="text2 d-block main-bg-color text-white rounded-4 text-center main-text-30">去使用</text>
			</view>
		</view>
	</view>
</template>

<script>
	import itemTop from "@/components/item-top/item-top.vue"
	import price from "@/components/price/price.vue"
	export default {
		data() {
			return {
				
			}
		},
		components: {
			itemTop,
			price
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.coupon {
		.coupon-list {
			padding-left: 60rpx;
			height: 186rpx;
			background: url(../../static/images/coupon-bg.png) center center no-repeat;
			background-size: 100% 100%;
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
