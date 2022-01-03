<template>
	<view class="renew-order">
		<view class="mx-3 renew-list rounded">
			<view class="item p-3 border-bottom">
				<text class="text1 font-weight my-3">新品</text>
				<view class="item-body my-3 d-flex a-center j-sb">
					<image src="/static/images/my_1.png" mode="" class="rounded"></image>
					<view class="content ml-3">
						<text class="d-block">精美项链</text>
						<text class="bg-white px-1 rounded">金色，中号</text>
						<text class="d-block mt-3">产品编码：*************</text>
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
			<view class="item p-3 border-bottom">
				<text class="text1 font-weight my-3">旧品</text>
				<view class="item-body my-3 d-flex a-center j-sb">
					<image src="/static/images/my_1.png" mode="" class="rounded"></image>
					<view class="content ml-3">
						<text class="d-block">精美项链</text>
						<text class="bg-white px-1 rounded">金色，中号</text>
						<text class="d-block mt-3">产品编码：*************</text>
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
			<view class="item-all d-flex j-sb p-3">
				<view class="item-all-le d-flex a-center">
					<text class="main-text-color font-weight">总共</text>
					<text class="main-text-color font-weight">（1件）</text>
				</view>
				<view class="item-all-re d-flex a-center">
					<text class="text2">换新金额：</text>
					<view class="price">
						<text class="main-text-color font-weight">¥</text>
						<text class="main-text-color font-weight ml-1">999</text>
					</view>
				</view>
			</view>
		</view>
		<view class="m-3 d-flex a-center j-center xieyi">
			<label class="radio">
				<radio value="" /><text>我同意《以旧换新协议》</text>
			</label>
		</view>
		<view class="main-bg-color text-white position-fixed bottom-0 left-0 w-100 send font-weight rounded-4 text-center">提交订单</view>
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
	.renew-order {
		.renew-list {
			background-color: #e4e4e4;
			.item {
				border-bottom-color: #fff;
				.text1 {
					font-size: 30rpx;
				}
				.item-body {
					image {
						width: 175rpx;
						height: 175rpx;
					}
					.content {
						width: 330rpx;
						text {
							font-size: 24rpx;
							color: #424242;
							&:nth-of-type(1) {
								font-size: 30rpx;
								color: #292929;
							}
						}
					}
					.item-body-re {
						.price {
							text {
								&:nth-of-type(1){
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
			.item-all {
				.item-all-le {
					text {
						&:nth-of-type(1){
							font-size: 30rpx;
						}
						&:nth-of-type(1){
							font-size: 24rpx;
						}
 					}
				}
				.item-all-re {
					.text2 {
						font-size: 30rpx;
 					}
					.price {
						text {
							&:nth-of-type(1){
								font-size: 24rpx;
							}
							&:nth-of-type(2) {
								font-size: 36rpx;
							}
						}
					}
				}
			}
		}
		.xieyi {
			font-size: 24rpx;
			color: #3d3d3d;
		}
		.send {
			line-height: 88rpx;
			font-size: 30rpx;
		}
	}
</style>
