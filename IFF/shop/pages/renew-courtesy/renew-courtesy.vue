<template>
	<view class="renew-courtesy">
		<view class="item m-3 p-3 rounded">
			<view class="item-head border-bottom d-flex a-center pb-3">
				<image src="/static/images/icon1.png" mode="widthFix"></image>
				<text class="ml-2">项链</text>
			</view>
			<view class="item-body d-flex a-start mt-3">
				<image src="/static/images/my_1.png" mode=""></image>
				<view class="content ml-3">
					<text class="d-block text-white text1">精美项链</text>
					<text class="bg-white px-1 rounded text2">金色，中号</text>
					<view class="price">
						<text class="main-text-color font-weight">¥</text>
						<text class="main-text-color font-weight ml-1">999</text>
					</view>
				</view>
				<text class="main-bg-color text-white font-weight text-center rounded-4 text-status">已换新</text>
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
	.renew-courtesy {
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
					width: 174rpx;
					height: 174rpx;
				}
				.content {
					width: 236rpx;
					.text1 {
						font-size: 30rpx;
					}
					.text2 {
						font-size: 24rpx;
					}
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
				}
				.text-status {
					width: 196rpx;
					line-height: 65rpx;
					font-size: 36rpx;
				}
			}
		}
	}
</style>