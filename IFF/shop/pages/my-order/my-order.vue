<template>
	<view class="my-order" style="height: 100vh;display: flex;flex-direction: column;">
		<view class="search m-3 d-flex a-center px-2 py-1 rounded-4">
			<image src="/static/images/sousuo.png" mode="widthFix"></image>
			<input type="text" value="" placeholder="搜索我的订单" class="ml-2" />
		</view>
		<scroll-view scroll-x class="border-bottom scroll-row mx-3" style="height: 80rpx;"
			:scroll-into-view="scrollinto" :scroll-with-animation="true">
			<view class="scroll-row-item px-3" @click="changeTab(index)" style="height: 72rpx;line-height: 80rpx;"
				v-for="(item,index) in tabBars" :key="index" :class="tabIndex === index ? 'active':''"
				:id="'tab'+index">
				<text class="font-md">{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper :duration="150" :current="tabIndex" style="flex: 1;" @change="onChangeTab">
			<swiper-item v-for="(item,index) in tabBars" :key="index">
				<view class="m-3">
					<template v-if="index===0">
						<image src="/static/images/coupon-bg.png" mode="widthFix" class="w-100"></image>
						<view class="item p-3 rounded my-2">
							<view class="item-head border-bottom d-flex a-center j-sb pb-2">
								<view class="d-flex a-center">
									<image src="/static/images/icon1.png" mode="widthFix"></image>
									<text class="ml-2 font-weight">项链</text>
								</view>
								<text class="success main-text-color">完成</text>
							</view>
							<view class="item-body my-3 d-flex a-end j-sb">
								<image src="/static/images/my_1.png" mode="" class="rounded"></image>
								<view class="content ml-3">
									<text class="d-block">精美项链</text>
									<text class="bg-white px-1 rounded">金色，中号</text>
									<text class="d-block main-text-color">数量：1</text>
								</view>
								<view class="item-body-re">
									<view class="price">
										<text class="main-text-color font-weight">¥</text>
										<text class="main-text-color font-weight ml-1">999</text>
									</view>
									<text class="text1 main-text-color text-right d-block">共1件</text>
								</view>
							</view>
							<view class="item-more d-flex a-center j-sa w-100">
								<text class="main-bg-color text-white d-block text-center rounded-4">删除订单</text>
								<text class="main-bg-color text-white d-block text-center rounded-4">退换/售后</text>
								<text class="main-bg-color text-white d-block text-center rounded-4">再次购买</text>
							</view>
						</view>
						<view class="item p-3 rounded my-2">
							<view class="item-head border-bottom d-flex a-center j-sb pb-2">
								<view class="d-flex a-center">
									<image src="/static/images/icon1.png" mode="widthFix"></image>
									<text class="ml-2 font-weight">项链</text>
								</view>
								<text class="success main-text-color">完成</text>
							</view>
							<view class="item-body my-3 d-flex a-end j-sb">
								<image src="/static/images/my_1.png" mode="" class="rounded"></image>
								<view class="content ml-3">
									<text class="d-block">精美项链</text>
									<text class="bg-white px-1 rounded">金色，中号</text>
									<text class="d-block main-text-color">数量：1</text>
								</view>
								<view class="item-body-re">
									<view class="price">
										<text class="main-text-color font-weight">¥</text>
										<text class="main-text-color font-weight ml-1">999</text>
									</view>
									<text class="text1 main-text-color text-right d-block">共1件</text>
								</view>
							</view>
							<view class="item-more d-flex a-center j-sa w-100">
								<text class="main-bg-color text-white d-block text-center rounded-4">删除订单</text>
								<text class="main-bg-color text-white d-block text-center rounded-4">退换/售后</text>
								<text class="main-bg-color text-white d-block text-center rounded-4">再次购买</text>
							</view>
						</view>
					</template>
					<template v-if="index===4">
						<view class="list-1 rounded">
							<view class="item p-3 d-flex a-center border-bottom position-relative">
								<image src="/static/images/my_1.png" mode="" class="rounded"></image>
								<text class="d-block text3 ml-1">精美项链 金色，中号</text>
								<view class="position-absolute">
									<view class="main-bg-color text-white font-weight rounded text-center btn">评价</view>
								</view>
							</view>
							<view class="item p-3 d-flex a-center border-bottom position-relative">
								<image src="/static/images/my_1.png" mode="" class="rounded"></image>
								<text class="d-block text3 ml-1">精美项链 金色，中号</text>
								<view class="position-absolute">
									<view class="main-bg-color text-white font-weight rounded text-center btn">评价</view>
								</view>
							</view>
						
						</view>
						<view class="tuijian text-center p-3">
							<text class="text2 d-block">为您推荐</text>
							<view class="d-flex a-center j-sb mt-3">
								<view class="tuijian-item d-flex flex-column a-start">
									<image src="/static/images/my_1.png" mode="widthFix" class="w-100"></image>
									<text class="text4 mt-1">精美项链</text>
									<text class="text4">金色，中号</text>
									<view class="d-flex a-center">
										<view class="price">
											<text class="main-text-color font-weight">¥</text>
											<text class="main-text-color font-weight ml-1">999</text>
										</view>
										<text class="text5 ml-2">100+人购买</text>
									</view>
								</view>
								<view class="tuijian-item d-flex flex-column a-start">
									<image src="/static/images/my_1.png" mode="widthFix" class="w-100"></image>
									<text class="text4 mt-1">精美项链</text>
									<text class="text4">金色，中号</text>
									<view class="d-flex a-center">
										<view class="price">
											<text class="main-text-color font-weight">¥</text>
											<text class="main-text-color font-weight ml-1">999</text>
										</view>
										<text class="text5 ml-2">100+人购买</text>
									</view>
								</view>
							</view>
						</view>
					</template>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollinto: "",
				scrollH: 500,
				tabIndex: 0,
				tabBars: [{
						name: "全部"
					},
					{
						name: "待支付"
					},
					{
						name: "待发货"
					},
					{
						name: "待收货"
					},
					{
						name: "待评价"
					}
				]
			}
		},
		onLoad() {
			// 获取可视区域高度
			uni.getSystemInfo({
				success: (res) => {
					// #ifndef MP
					let navbarH = 0
					// #endif
					// #ifdef MP
					let navbarH = uni.upx2px(90)
					// #endif
					this.scrollH = res.windowHeight - uni.upx2px(82) - navbarH
				}
			})
		},
		methods: {
			// 切换选项卡
			changeTab(index) {
				if (this.tabIndex === index) return;
				this.tabIndex = index;
				this.scrollinto = 'tab' + index;
			},
			// 监听滑动列表
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.my-order {
		.search {
			background-color: #e4e4e4;
			line-height: 56rpx;

			image {
				width: 42rpx;
			}

			input {
				color: #fff;
				height: 56rpx;
				line-height: 56rpx;
				width: 580rpx;
			}
		}

		.scroll-row-item {
			&.active {
				border-bottom: 3rpx solid #00332a;
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

				.success {
					font-size: 20rpx;
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
						font-size: 30rpx;

						&:nth-of-type(1) {
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

					.text1 {
						font-size: 18rpx;
					}
				}
			}

			.item-more {
				text {
					font-size: 24rpx;
					width: 140rpx;
					line-height: 40rpx;
				}
			}
		}

		.list-1 {
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
		.tuijian {
			.text2 {
				font-size: 30rpx;
			}
			.text4 {
				font-size: 24rpx;
				line-height: 38rpx;
			}
			.tuijian-item {
				width: 48%;
			}
			.text5{
				font-size: 18rpx;
			}
		}
	}
</style>
