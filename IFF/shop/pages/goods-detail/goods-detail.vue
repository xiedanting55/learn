<template>
	<view class="goods-detail">
		<image src="/static/images/my_vip_4.png" mode="widthFix" class="w-100"></image>
		<view class="goods-info m-3 d-flex flex-column">
			<text class="text1 mt-3 ml-3">玫瑰金项链</text>
			<view class="price d-flex a-center ml-3">
				<text>¥</text>
				<text class="ml-1">999</text>
			</view>
			<view class="goods-discout d-flex a-center rounded-4 px-3">
				<view class="circle rounded-circle bg-white"></view>
				<text class="ml-2">官方直售，顺丰速运15元，满999元免邮</text>
			</view>
			<text class="mt-2 text2 font-weight">商品信息</text>
			<view class="goods-text mt-2">
				<text>商品名称</text>
				<text class="ml-3">玫瑰金项链</text>
			</view>
			<view class="goods-text mt-2">
				<text>商品编号</text>
				<text class="ml-3">123456</text>
			</view>
			<view class="goods-text mt-2">
				<text>商品材质</text>
				<text class="ml-3">玫瑰金********</text>
			</view>
			<view class="goods-text mt-2">
				<text>特别说明</text>
				<text class="ml-3">这款项链采用******</text>
			</view>
			<view class="goods-text mt-2">
				<text>商品规格</text>
				<text class="ml-3">长度：20cm；宽度：1cm</text>
			</view>
		</view>
		<view class="goods-xq">
			<text class="mt-2 ml-3 text2 font-weight">图片详情</text>
			<image src="/static/images/coupon-bg.png" mode="widthFix" class="w-100"></image>
		</view>
		<view class="goods-ld text-center mx-3 mt-3">
			<text class="text2 font-weight">产品亮点</text>
			<view class="goods-ld-image d-flex a-center j-sb flex-wrap mt-3">
				<image src="/static/images/coupon-bg.png" mode="widthFix" class="mb-3"></image>
				<image src="/static/images/coupon-bg.png" mode="widthFix"></image>
				<image src="/static/images/coupon-bg.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="goods-ld text-center mx-3 mt-3">
			<text class="text2 font-weight">模特展示</text>
			<image src="/static/images/coupon-bg.png" mode="widthFix" class="w-100 mt-3"></image>
		</view>
		<view class="goods-xlcp m-3">
			<text class="text2 font-weight">系列产品</text>
			<view class="cp-list d-flex a-center j-sb mt-3">
				<view class="item span24-8 d-flex flex-column">
					<image src="/static/images/my_1.png" mode="widthFix" class="w-100"></image>
					<text class="text3">玫瑰金项链</text>
					<view class="price d-flex a-center">
						<text>¥</text>
						<text>999</text>
					</view>
				</view>
				<view class="item span24-8 d-flex flex-column">
					<image src="/static/images/my_1.png" mode="widthFix" class="w-100"></image>
					<text class="text3">玫瑰金项链</text>
					<view class="price d-flex a-center">
						<text>¥</text>
						<text>999</text>
					</view>
				</view>
				<view class="item span24-8 d-flex flex-column">
					<image src="/static/images/my_1.png" mode="widthFix" class="w-100"></image>
					<text class="text3">玫瑰金项链</text>
					<view class="price d-flex a-center">
						<text>¥</text>
						<text>999</text>
					</view>
				</view>
			</view>
		</view>
		<view class="goods-xq">
			<image src="/static/images/coupon-bg.png" mode="widthFix" class="w-100"></image>
		</view>
		<view class="detail-fixed d-flex j-sb position-fixed bottom-0 left-0 w-100 bg-white py-1 border-top">
			<view class="detail-le span-9 d-flex a-center j-sa ml-3">
				<view class="item d-flex flex-column a-center">
					<image src="/static/images/xq_06.png" mode=""></image>
					<text>店铺</text>
				</view>
				<view class="item d-flex flex-column a-center">
					<image src="/static/images/xq_08.png" mode=""></image>
					<text>顾问</text>
				</view>
				<view class="item d-flex flex-column a-center">
					<image src="/static/images/xq_03.png" mode=""></image>
					<text>收藏</text>
				</view>
			</view>
			<view class="detail-re d-flex a-center j-center mr-3">
				<view class="add-cart text-center">加入购物车</view>
				<view class="main-bg-color font-weight text-white text-center pay">立即支付</view>
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
	.goods-detail {
		.goods-info {
			.text1 {
				font-size: 36rpx;
			}
			.price {
				text {
					&:nth-of-type(1) {
						font-size: 24rpx;
					}
					&:nth-of-type(2) {
						font-size: 30rpx;
					}
				}
			}
			.goods-discout {
				background-color: #e4e4e4;
				line-height: 90rpx;
				.circle {
					width: 28rpx;
					height: 28rpx;
				}
			}
			.text2 {
				font-size: 24rpx;
			}
			.goods-text {
				text {
					&:nth-of-type(1) {
						font-size: 24rpx;
					}
					&:nth-of-type(2) {
						font-size: 20rpx;
					}
				}
			}
		}
		.goods-ld-image {
			image {
				width: 48%;
				&:nth-of-type(1) {
					width: 100%;
				}
			}
		}
		.goods-xlcp {
			.item {
				.text3 {
					font-size: 18rpx;
					color: #2e2e2e;
				}
				.price {
					text {
						font-size: 24rpx;
						color: #00332a;
					}
				}
			}
		}
		.detail-fixed {
			border-top-color: #e4e4e4;
			.detail-le {
				image {
					width: 46rpx;
					height: 46rpx;
				}
				text {
					font-size: 20rpx;
					color: #3b3b3b;
				}
			}
			.detail-re {
				view {
					width: 210rpx;
					line-height: 80rpx;
					&.add-cart {
						background-color: #e4e4e4;
						border-radius: 40rpx 0 0 40rpx;
					}
					&.pay {
						border-radius: 0 40rpx 40rpx 0;
					}
				}
			}
		}
	}
</style>
