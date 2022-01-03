<template>
	<view class="product-info">
		<text class="text1 d-block text-center m-3">产品信息</text>
		<view class="info rounded mx-3">
			<view class="d-flex a-center border-bottom">
				<text class="pl-1 font-weight">产品名称：</text>
				<text></text>
			</view>
			<view class="d-flex a-center border-bottom">
				<text class="pl-1 font-weight">产品颜色：</text>
				<text></text>
			</view>
			<view class="d-flex a-center border-bottom">
				<text class="pl-1 font-weight">产品材质：</text>
				<text></text>
			</view>
			<view class="d-flex a-center border-bottom">
				<text class="pl-1 font-weight">产品尺寸：</text>
				<text></text>
			</view>
			<view class="d-flex a-center border-bottom">
				<text class="pl-1 font-weight">产品重量：</text>
				<text></text>
			</view>
			<view class="d-flex a-center border-bottom">
				<text class="pl-1 font-weight">产品编码：</text>
				<text></text>
			</view>
			<view class="d-flex a-center border-bottom">
				<text class="pl-1 font-weight">购买时间：</text>
				<text></text>
			</view>
			<view class="d-flex j-end price">
				<text class="pl-1 main-text-color">金额：</text>
				<text class="mr-1 main-text-color">¥0.00</text>
			</view>
		</view>
		<view class="hx-list mx-3 mt-3">
			<text class="text2">换新列表</text>
			<view class="item p-3 rounded">
				<view class="item-head d-flex a-center j-sb">
					<text>新品</text>
					<view class="item-head-re main-bg-color rounded d-flex a-center j-center px-1">
						<text class="text-white">换购</text>
						<view class="arrow arrow-right arrow-white"></view>
					</view>
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
	.product-info {
		.text1 {
			font-size: 30rpx;
			color: #444;
		}
		.info {
			background-color: #e4e4e4;
			view {
				line-height: 64rpx;
				border-bottom-color: #fff;
				text {
					font-size: 24rpx;
					color: #393939;
				}
				&.price {
					text {
						font-size: 30rpx;
					}
				}
			}
		}
		.hx-list {
			text {
				font-size: 30rpx;
			}
			.text2 {
				color: #2c2c2c;
			}
			.item {
				background-color: #e4e4e4;
				.item-head {
					text {
						color: #2b2a2a;
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
		}
	}
</style>
