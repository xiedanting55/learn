<template>
	<view class="my-evaluate-status">
		<view class="my-evaluate-head d-flex a-center flex-column m-3">
			<view class="d-flex a-center j-center">
				<image src="/static/images/ok.png" mode="widthFix"></image>
				<text class="text1 font-weight ml-1 main-text-24">评价成功，感谢您！</text>
			</view>
			<view class="more text-center rounded-4 mt-2 main-text-24 main-bg-gray-color" hover-class="bg-light-secondary" @click="myEval">查看我的评价</view>
		</view>
		<view class="list m-3 rounded pt-4 mt-5 main-bg-gray-color">
			<text class="text4 font-weight mx-3 main-text-24">心情不错~继续评价</text>
			<view class="item p-3 d-flex a-center border-bottom position-relative">
				<image src="/static/images/my_1.png" mode="" class="rounded"></image>
				<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
				<view class="position-absolute">
					<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30" hover-class="bg-light-opacity" @click="followUpEval">追评</view>
				</view>
			</view>
			<view class="item p-3 d-flex a-center border-bottom position-relative">
				<image src="/static/images/my_1.png" mode="" class="rounded"></image>
				<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
				<view class="position-absolute">
					<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30" hover-class="bg-light-opacity" @click="followUpEval">追评</view>
				</view>
			</view>
			<view class="item p-3 d-flex a-center border-bottom position-relative">
				<image src="/static/images/my_1.png" mode="" class="rounded"></image>
				<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
				<view class="position-absolute">
					<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30" hover-class="bg-light-opacity" @click="followUpEval">追评</view>
				</view>
			</view>
			<view class="item p-3 d-flex a-center border-bottom position-relative">
				<image src="/static/images/my_1.png" mode="" class="rounded"></image>
				<text class="d-block text3 ml-1">精美项链 金色，中号</text>
				<view class="position-absolute">
					<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30" hover-class="bg-light-opacity" @click="followUpEval">追评</view>
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
			myEval() {  //查看我的评价
				uni.navigateTo({
					url: "/pages/my-evaluate/my-evaluate"
				})
			},
			followUpEval() { //追评
				uni.navigateTo({
					url: "/pages/publish-evaluationz/publish-evaluationz"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-evaluate-status {
		.my-evaluate-head {
			image {
				width: 50rpx;
			}
			.text1 {
				color: #515151;
			}
			.more {
				width: 212rpx;
				line-height: 56rpx;
				color: #464646;
			}
		}
		.list {
			.item {
				border-bottom-color: #fff;
				image {
					width: 175rpx;
					height: 175rpx;
				}
				.text3 {
					color: #3d3d3d;
					width: 345rpx;
				}
				.position-absolute {
					right: 30rpx;
					bottom: 30rpx;
					.btn {
						width: 156rpx;
					}
				}
			}
		}
	}
</style>
