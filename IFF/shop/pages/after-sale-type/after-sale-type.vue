<template>
	<view class="after-sale-type">
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
		<view class="list m-3">
			<view class="list-item mb-2 d-flex a-center j-sb px-2">
				<view class="list-item-le d-flex a-center col-5">
					<image src="/static/images/list1.png" mode="widthFix"></image>
					<text class="ml-2">仅退款</text>
				</view>
				<view class="arrow arrow-right"></view>
			</view>
			<view class="list-item mb-2 d-flex a-center j-sb px-2">
				<view class="list-item-le d-flex a-center col-5">
					<image src="/static/images/list2.png" mode="widthFix"></image>
					<text class="ml-2">换新礼遇</text>
				</view>
				<view class="arrow arrow-right"></view>
			</view>
			<view class="list-item mb-2 d-flex a-center j-sb px-2">
				<view class="list-item-le d-flex a-center col-5">
					<image src="/static/images/list3.png" mode="widthFix"></image>
					<text class="ml-2">退货退款</text>
				</view>
				<view class="arrow arrow-right"></view>
			</view>
			<view class="list-item mb-2 d-flex a-center j-sb px-2">
				<view class="list-item-le d-flex a-center col-5">
					<image src="/static/images/list4.png" mode="widthFix"></image>
					<text class="ml-2">维修保养</text>
				</view>
				<view class="arrow arrow-right"></view>
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
	.after-sale-type {
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
		.list-item {
			background-color: #e4e4e4;
			line-height: 110rpx;
			image {
				width: 48rpx;
			}
			text {
				font-size: 30rpx;
				color: #282828;
			}
		}
	}
</style>
