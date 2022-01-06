<template>
	<view class="my-evaluate" style="height: 100vh;display: flex;flex-direction: column;">
		<view class="top">
			<view class="item-head m-3 d-flex a-center">
				<image src="/static/images/my_head.png" class="photo rounded-circle"></image>
				<view class="item-head-re ml-2">
					<view class="d-flex a-center">
						<text class="text1 font-weight main-text-24">小米米</text>
						<view class="start">
							<image src="/static/images/start.png" mode="widthFix" class="ml-1"></image>
							<image src="/static/images/start.png" mode="widthFix" class="ml-1"></image>
							<image src="/static/images/start.png" mode="widthFix" class="ml-1"></image>
						</view>
					</view>
					<text class="font-weight main-text-16">您是钻3级用户，信誉优秀</text>
				</view>
			</view>
			<scroll-view scroll-x class="border-bottom scroll-row mx-3" style="height: 80rpx;" :scroll-into-view="scrollinto" :scroll-with-animation="true">
				<view class="scroll-row-item px-3" @click="changeTab(index)" style="height: 72rpx;line-height: 80rpx;" v-for="(item,index) in tabBars" :key="index" :class="tabIndex === index ? 'active':''" :id="'tab'+index">
					<text class="font-md">{{item.name}}</text>
				</view>
			</scroll-view>
		</view>
		<swiper :duration="150" :current="tabIndex" style="flex: 1;" @change="onChangeTab">
			<swiper-item v-for="(item,index) in tabBars" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmore(index)" :show-scrollbar="false">
					<template v-if="index == 0">
						<view class="list m-3 rounded main-bg-gray-color">
							<view class="item p-3 d-flex a-center border-bottom position-relative">
								<image src="/static/images/my_1.png" mode="" class="rounded"></image>
								<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
								<view class="position-absolute">
									<view class="main-bg-color text-white font-weight rounded text-center btn">评价</view>
								</view>
							</view>
							<view class="item p-3 d-flex a-center border-bottom position-relative">
								<image src="/static/images/my_1.png" mode="" class="rounded"></image>
								<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
								<view class="position-absolute">
									<view class="main-bg-color text-white font-weight rounded text-center btn">评价</view>
								</view>
							</view>
							<view class="item p-3 d-flex a-center border-bottom position-relative">
								<image src="/static/images/my_1.png" mode="" class="rounded"></image>
								<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
								<view class="position-absolute">
									<view class="main-bg-color text-white font-weight rounded text-center btn">评价</view>
								</view>
							</view>
							<view class="item p-3 d-flex a-center border-bottom position-relative">
								<image src="/static/images/my_1.png" mode="" class="rounded"></image>
								<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
								<view class="position-absolute">
									<view class="main-bg-color text-white font-weight rounded text-center btn">评价</view>
								</view>
							</view>
						</view>
					</template>
					<template v-if="index == 1">
						<view class="list m-3 rounded pt-4 main-bg-gray-color">
							<text class="font-weight mx-3 main-text-24">追评夸夸那些超棒的宝贝吧~</text>
							<view class="item p-3 d-flex a-center border-bottom position-relative">
								<image src="/static/images/my_1.png" mode="" class="rounded"></image>
								<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
								<view class="position-absolute">
									<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30">追评</view>
								</view>
							</view>
							<view class="item p-3 d-flex a-center border-bottom position-relative">
								<image src="/static/images/my_1.png" mode="" class="rounded"></image>
								<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
								<view class="position-absolute">
									<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30">追评</view>
								</view>
							</view>
							<view class="item p-3 d-flex a-center border-bottom position-relative">
								<image src="/static/images/my_1.png" mode="" class="rounded"></image>
								<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
								<view class="position-absolute">
									<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30">追评</view>
								</view>
							</view>
							<view class="item p-3 d-flex a-center border-bottom position-relative">
								<image src="/static/images/my_1.png" mode="" class="rounded"></image>
								<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
								<view class="position-absolute">
									<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30">追评</view>
								</view>
							</view>
						</view>
					</template>
					<template v-if="index == 2">
						<view class="list m-3 rounded main-bg-gray-color">
							<view class="item p-3 border-bottom position-relative">
								<text class=" mb-2 font-weight d-block main-text-24">此用户没有填写评价</text>
								<view class="d-flex a-center">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
									<view class="position-absolute">
										<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30">写追评</view>
									</view>
								</view>
							</view>
							<view class="item p-3 border-bottom position-relative">
								<text class="mb-2 font-weight d-block main-text-24">此用户没有填写评价</text>
								<view class="d-flex a-center">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
									<view class="position-absolute">
										<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30">写追评</view>
									</view>
								</view>
							</view>
							<view class="item p-3 border-bottom position-relative">
								<text class="mb-2 font-weight d-block main-text-24">此用户没有填写评价</text>
								<view class="d-flex a-center">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
									<view class="position-absolute">
										<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30">写追评</view>
									</view>
								</view>
							</view>
						</view>
					</template>
				</scroll-view>
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
						name: "待评价(4)"
					},
					{
						name: "可追评"
					},
					{
						name: "已评价"
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
					this.scrollH = res.windowHeight - uni.upx2px(132) - navbarH
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
<style>
	page {
		overflow: hidden;
	}
</style>
<style lang="scss" scoped>
	.my-evaluate {
		.item-head {
			.photo {
				width: 80rpx;
				height: 80rpx;
			}

			.item-head-re {
				text {
					color: #515151;
				}

				.start {
					image {
						width: 20rpx;
					}
				}
			}
		}

		.scroll-row-item {
			&.active {
				border-bottom: 3rpx solid #00332a;
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
