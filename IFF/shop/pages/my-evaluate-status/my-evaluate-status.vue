<template>
	<view class="my-evaluate-status">
		<view class="my-evaluate-head d-flex a-center flex-column m-3">
			<view class="d-flex a-center j-center">
				<image src="/static/images/ok.png" mode="widthFix"></image>
				<text class="text1 font-weight ml-1">评价成功，感谢您！</text>
			</view>
			<view class="more text-center rounded-4 mt-2">查看我的评价</view>
		</view>
		<view class="list m-3 rounded pt-4 mt-5">
			<text class="text4 font-weight mx-3">心情不错~继续评价</text>
			<view class="item p-3 d-flex a-center border-bottom position-relative">
				<image src="/static/images/my_1.png" mode="" class="rounded"></image>
				<text class="d-block text3 ml-1">精美项链 金色，中号</text>
				<view class="position-absolute">
					<view class="main-bg-color text-white font-weight rounded text-center btn">追评</view>
				</view>
			</view>
			<view class="item p-3 d-flex a-center border-bottom position-relative">
				<image src="/static/images/my_1.png" mode="" class="rounded"></image>
				<text class="d-block text3 ml-1">精美项链 金色，中号</text>
				<view class="position-absolute">
					<view class="main-bg-color text-white font-weight rounded text-center btn">追评</view>
				</view>
			</view>
			<view class="item p-3 d-flex a-center border-bottom position-relative">
				<image src="/static/images/my_1.png" mode="" class="rounded"></image>
				<text class="d-block text3 ml-1">精美项链 金色，中号</text>
				<view class="position-absolute">
					<view class="main-bg-color text-white font-weight rounded text-center btn">追评</view>
				</view>
			</view>
			<view class="item p-3 d-flex a-center border-bottom position-relative">
				<image src="/static/images/my_1.png" mode="" class="rounded"></image>
				<text class="d-block text3 ml-1">精美项链 金色，中号</text>
				<view class="position-absolute">
					<view class="main-bg-color text-white font-weight rounded text-center btn">追评</view>
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
	.my-evaluate-status {
		.my-evaluate-head {
			image {
				width: 50rpx;
			}
			text {
				font-size: 24rpx;
			}
			.text1 {
				color: #515151;
			}
			.more {
				width: 212rpx;
				line-height: 56rpx;
				background-color: #e4e4e4;
				color: #464646;
			}
		}
		.list {
			background-color: #e4e4e4;
			.item {
				border-bottom-color: #fff;
				image {
					width: 175rpx;
					height: 175rpx;
				}
				.text3 {
					font-size: 24rpx;
					color: #3d3d3d;
					width: 345rpx;
				}
				.position-absolute {
					right: 30rpx;
					bottom: 30rpx;
					.btn {
						font-size: 30rpx;
						width: 156rpx;
					}
				}
			}
			.text4 {
				font-size: 24rpx;
				color: #333333;
			}
		}
	}
</style>
