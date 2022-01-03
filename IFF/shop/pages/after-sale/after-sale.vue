<template>
	<view class="after-sale" style="height: 100vh;display: flex;flex-direction: column;">
		<scroll-view scroll-x class="border-bottom scroll-row" style="height: 80rpx;" :scroll-into-view="scrollinto" :scroll-with-animation="true">
			<view class="scroll-row-item px-3" @click="changeTab(index)" style="height: 72rpx;line-height: 80rpx;"
				v-for="(item,index) in tabBars" :key="index" :class="tabIndex === index ? 'active':''"
				:id="'tab'+index">
				<text class="font-md">{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper :duration="150" :current="tabIndex" style="flex: 1;" @change="onChangeTab">
			<swiper-item v-for="(item,index) in tabBars" :key="index">
				<template v-if="index == 0">
					<view class="search m-3 d-flex a-center px-2 py-1 rounded-4">
						<image src="/static/images/sousuo.png" mode="widthFix"></image>
						<input type="text" value="" placeholder="商品名称/商品编号/订单编号/序列号" class="ml-2" />
					</view>
					<view class="item p-3 rounded m-3">
						<view class="item-head border-bottom d-flex a-center pb-3">
							<image src="/static/images/icon1.png" mode="widthFix"></image>
							<text class="ml-2">项链</text>
						</view>
						<view class="item-body my-3 d-flex a-end j-sb">
							<image src="/static/images/my_1.png" mode="" class="rounded"></image>
							<view class="content ml-3">
								<text class="d-block">精美项链</text>
								<text class="bg-white px-1 rounded">金色，中号</text>
								<text class="d-block main-text-color">数量：1</text>
							</view>
							<view class="item-body-re">
								<view class="main-bg-color text-white font-weight rounded text-center btn">申请售后</view>
							</view>
						</view>
					</view>
				</template>
				<template v-if="index == 1">
					<view class="search m-3 d-flex a-center px-2 py-1 rounded-4">
						<image src="/static/images/sousuo.png" mode="widthFix"></image>
						<input type="text" value="" placeholder="商品名称/商品编号/订单编号/序列号" class="ml-2" />
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
							<view class="item-body-re d-flex a-end flex-column">
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
				</template>
				<template v-if="index == 2">
					<view class="search m-3 d-flex a-center px-2 py-1 rounded-4">
						<image src="/static/images/sousuo.png" mode="widthFix"></image>
						<input type="text" value="" placeholder="商品名称/商品编号/订单编号/序列号" class="ml-2" />
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
							<view class="item-body-re d-flex a-end flex-column">
								<view class="price">
									<text class="main-text-color font-weight">¥</text>
									<text class="main-text-color font-weight ml-1">999</text>
								</view>
								<view class="count d-flex a-center j-center">
									<text class="main-text-color font-weight">*</text>
									<text class="main-text-color font-weight ml-1">1</text>
								</view>
								<view class="main-bg-color text-white font-weight rounded text-center btn">订单完成</view>
							</view>
						</view>
					</view>
				</template>
				<!-- {{index}} -->
				<!-- <scroll-view scroll-y="true" style="flex: 1;" @scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
						<block v-for="(list,listIndex) in item.list" :key="listIndex">
		
						</block>
					</template>
				</scroll-view> -->
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
				tabBars: [
					{
						name: "售后申请"
					},
					{
						name: "处理中"
					},
					{
						name: "申请记录"
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
	.after-sale{
		.scroll-row-item {
			&.active {
				border-bottom: 3rpx solid #00332a;
			}
		}
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
					.count {
						text {
							&:nth-of-type(1) {
								font-size: 32rpx;
							}
				
							&:nth-of-type(2) {
								font-size: 36rpx;
							}
						}
					}
					.btn {
						font-size: 30rpx;
						width: 156rpx;
					}
				}
			}
		}
	}
</style>
