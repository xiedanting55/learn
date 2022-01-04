<template>
	<view class="after-sale-refund">
		<view class="item-1 mx-3 px-3 rounded">
			<view class="item-1-head border-bottom d-flex a-center j-sb py-2">
				<text class="main-text-color">退款原因</text>
				<view class="d-flex a-center j-center">
					<text class="mr-1 main-text-color">请选择</text>
					<view class="arrow arrow-right"></view>
				</view>
			</view>
			<view class="item-1-body py-3">
				<text>退款金额</text>
				<view class="price d-flex a-end">
					<text>￥</text>
					<text class="font-weight text2">999</text>
				</view>
				<text class="text1">不可修改，最多¥999.00，含发货邮费¥0.00</text>
			</view>
		</view>
		<view class="item-2 m-3 px-3 py-4 rounded">
			<text>补充描述和凭证</text>
			<view class="d-flex mt-1">
				<image src="/static/images/edit-gray.png" mode="widthFix"></image>
				<textarea value="" placeholder="补充描述，有助于商家更好的处理售后问题" class="ml-1" />
			</view>
			<text class="d-block text-right font-weight limite">0/200</text>
			<view class="upload bg-white my-3 rounded d-flex a-center j-center flex-column">
				<image src="/static/images/upload.png" mode="widthFix"></image>
				<text class="font-weight mt-1">上传凭证</text>
				<text class="font-weight">（最多三张）</text>
			</view>
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
	.after-sale-refund {
		text {
			font-size: 24rpx;
		}
		.item-1 {
			background-color: #e4e4e4;
			.text1 {
				font-size: 18rpx;
			}
			.text2 {
				font-size: 30rpx;
			}
		}
		.item-2 {
			background-color: #e4e4e4;
			image {
				width: 28rpx;
			}
			.limite {
				font-size: 18rpx;
				color: #aaa;
			}
			.upload {
				height: 224rpx;
				image {
					width: 74rpx;
				}
				text {
					&:nth-of-type(1) {
						font-size: 18rpx;
					}
					&:nth-of-type(2) {
						font-size: 14rpx;
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
