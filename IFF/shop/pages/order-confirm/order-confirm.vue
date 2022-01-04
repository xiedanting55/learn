<template>
	<view class="order-confirm">
		<view class="add-addr m-5 d-flex a-center j-center">
			<image src="/static/images/add-circle.png" mode="widthFix"></image>
			<text class="ml-1 font-weight">添加收货地址</text>
		</view>
		<view class="item p-3 rounded m-3">
			<view class="item-head border-bottom d-flex a-center pb-3">
				<image src="/static/images/icon1.png" mode="widthFix"></image>
				<text class="ml-2">项链</text>
			</view>
			<view class="item-body my-3 d-flex a-center j-sb">
				<image src="/static/images/my_1.png" mode="" class="rounded"></image>
				<view class="content ml-3">
					<text class="d-block">精美项链</text>
					<text class="bg-white px-1 rounded">金色，中号</text>
				</view>
				<view class="item-body-re">
					<view class="price">
						<text class="main-text-color font-weight">¥</text>
						<text class="main-text-color font-weight ml-1">999</text>
					</view>
					<view class="count d-flex a-center j-center">
						<text class="main-text-color font-weight">*</text>
						<text class="main-text-color font-weight ml-1">1</text>
					</view>
				</view>
			</view>
		</view>
		<view class="line d-flex a-center j-sb mx-3 my-1">
			<text>优惠券</text>
			<view class="line-re d-flex a-center j-center">
				<text>0张</text>
				<view class="arrow arrow-right"></view>
			</view>
		</view>
		<view class="line d-flex a-center j-sb mx-3 my-1">
			<text>(优惠券代码)</text>
			<view class="line-re d-flex a-center j-center">
				<text>确认</text>
			</view>
		</view>
		<view class="line d-flex a-center j-sb mx-3 my-1">
			<text>发票</text>
			<view class="line-re d-flex a-center j-center">
				<text>不需要发票</text>
				<view class="arrow arrow-right"></view>
			</view>
		</view>
		<view class="line d-flex a-center j-sb mx-3 my-1">
			<text>订单备注</text>
			<view class="line-re d-flex a-center j-center">
				<text>无备注</text>
				<view class="arrow arrow-right"></view>
			</view>
		</view>
		<view class="line d-flex a-center j-sb mx-3 my-1">
			<text>商品总额</text>
			<view class="line-re d-flex a-center j-center">
				<text>¥ 999</text>
			</view>
		</view>
		<view class="line d-flex a-center j-sb mx-3 my-1">
			<text>促销优惠</text>
			<view class="line-re d-flex a-center j-center">
				<text>-¥ 0</text>
			</view>
		</view>
		<view class="line d-flex a-center j-sb mx-3 my-1">
			<text>运费</text>
			<view class="line-re d-flex a-center j-center">
				<text>¥ 0.00</text>
			</view>
		</view>
		<view class="line d-flex a-center j-sb mx-3 my-1">
			<view class="line-le">
				<text>合计</text>
				<text>(共1件)</text>
			</view>
			<view class="line-re d-flex a-center j-center">
				<text>¥ 999</text>
			</view>
		</view>
		<view class="main-bg-color text-white position-fixed bottom-0 left-0 w-100 send font-weight rounded-4 text-center">微信支付</view>
	</view>
</template>

<script>
	// 文字样式还没有写
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
	.order-confirm {
		.add-addr {
			image {
				width: 42rpx;
			}
			text {
				font-size: 30rpx;
				color: #3f3f3f;
			}
		}
		.item {
			background-color: #e4e4e4;
			.item-head {
				text {
					font-size: 30rpx;
				}
				image {
					width: 35rpx;
				}
			}
			.item-body {
				image {
					width: 175rpx;
					height: 175rpx;
				}
				.content {
					width: 330rpx;
					text {
						&:nth-of-type(1) {
							font-size: 30rpx;
							color: #292929;
						}
		
						&:nth-of-type(2) {
							font-size: 24rpx;
							color: #424242;
						}
					}
				}
				.item-body-re {
					.price {
						text {
							&:nth-of-type(1) {
								font-size: 24rpx;
							}
		
							&:nth-of-type(2) {
								font-size: 36rpx;
							}
						}
					}
					.count {
						text {
							&:nth-of-type(1) {
								font-size: 60rpx;
							}
		
							&:nth-of-type(2) {
								font-size: 36rpx;
							}
						}
					}
				}
			}
		}
		.send {
			line-height: 88rpx;
			font-size: 30rpx;
		}
	}
</style>
