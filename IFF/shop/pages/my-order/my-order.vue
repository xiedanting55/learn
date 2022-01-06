<template>
	<view class="my-order" style="height: 100vh;display: flex;flex-direction: column;">
		<view class="search m-3 d-flex a-center px-2 py-1 rounded-4 main-bg-gray-color">
			<image src="/static/images/sousuo.png" mode="widthFix"></image>
			<input type="text" value="" placeholder="搜索我的订单" class="ml-2" />
		</view>
		<scroll-view scroll-x class="border-bottom scroll-row mx-3" style="height: 80rpx;" :scroll-into-view="scrollinto" :scroll-with-animation="true">
			<view class="scroll-row-item px-3" @click="changeTab(index)" style="height: 72rpx;line-height: 80rpx;" v-for="(item,index) in tabBars" :key="index" :class="tabIndex === index ? 'active':''" :id="'tab'+index">
				<text class="font-md">{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper :duration="150" :current="tabIndex" style="flex: 1;" @change="onChangeTab">
			<swiper-item v-for="(item,index) in tabBars" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmore(index)" :show-scrollbar="false">
					<view class="m-3">
						<template v-if="index===0">
							<image src="/static/images/coupon-bg.png" mode="widthFix" class="w-100"></image>
							<view class="item p-3 rounded my-2 main-bg-gray-color">
								<itemTop :pic="'/static/images/icon1.png'" :name="'项链'" isBorder>
									<template slot="right">
										<text class="main-text-color main-text-20">完成</text>
									</template>
								</itemTop>
								<view class="item-body my-3 d-flex a-end j-sb">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<view class="content ml-3">
										<text class="d-block main-text-30">精美项链</text>
										<text class="bg-white px-1 rounded main-text-24">金色，中号</text>
										<text class="d-block main-text-color main-text-30">数量：1</text>
									</view>
									<view class="item-body-re">
										<price :sizeNumber="36" :priceValue="999" />
										<text class="text1 main-text-color text-right d-block main-text-18">共1件</text>
									</view>
								</view>
								<view class="item-more d-flex a-center j-sa w-100">
									<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">删除订单</text>
									<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">退换/售后</text>
									<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">再次购买</text>
								</view>
							</view>
							<view class="item p-3 rounded my-2 main-bg-gray-color">
								<itemTop :pic="'/static/images/icon1.png'" :name="'项链'" isBorder>
									<template slot="right">
										<text class="main-text-color main-text-20">完成</text>
									</template>
								</itemTop>
								<view class="item-body my-3 d-flex a-end j-sb">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<view class="content ml-3">
										<text class="d-block main-text-30">精美项链</text>
										<text class="bg-white px-1 rounded main-text-24">金色，中号</text>
										<text class="d-block main-text-color main-text-30">数量：1</text>
									</view>
									<view class="item-body-re">
										<price :sizeNumber="36" :priceValue="999" />
										<text class="text1 main-text-color text-right d-block main-text-18">共1件</text>
									</view>
								</view>
								<view class="item-more d-flex a-center j-sa w-100">
									<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">删除订单</text>
									<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">退换/售后</text>
									<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">再次购买</text>
								</view>
							</view>
							<view class="item p-3 rounded my-2 main-bg-gray-color">
								<itemTop :pic="'/static/images/icon1.png'" :name="'项链'" isBorder>
									<template slot="right">
										<text class="main-text-color main-text-20">完成</text>
									</template>
								</itemTop>
								<view class="item-body my-3 d-flex a-end j-sb">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<view class="content ml-3">
										<text class="d-block main-text-30">精美项链</text>
										<text class="bg-white px-1 rounded main-text-24">金色，中号</text>
										<text class="d-block main-text-color main-text-30">数量：1</text>
									</view>
									<view class="item-body-re">
										<price :sizeNumber="36" :priceValue="999" />
										<text class="text1 main-text-color text-right d-block main-text-18">共1件</text>
									</view>
								</view>
								<view class="item-more d-flex a-center j-sa w-100">
									<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">删除订单</text>
									<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">退换/售后</text>
									<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">再次购买</text>
								</view>
							</view>
						</template>
						<template v-if="index===1">
							<image src="/static/images/coupon-bg.png" mode="widthFix" class="w-100"></image>
							<view class="item p-3 rounded my-2 main-bg-gray-color">
								<itemTop needCheckbox :pic="'/static/images/icon1.png'" :name="'项链'" isBorder>
									<template slot="right">
										<text class="main-text-color main-text-20">等待买家付款</text>
									</template>
								</itemTop>
								<view class="item-body mt-3 d-flex a-start j-sb">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<view class="content ml-3">
										<text class="d-block main-text-30">精美项链</text>
										<text class="bg-white px-1 rounded main-text-24">金色，中号</text>
										<view></view>
										<text class="d-inline-block main-text-color main-text-20 border main-border-color rounded-4 px-1 mt-1">七天无理由退换货</text>
										<view></view>
										<text class="d-inline-block main-text-24">运费险</text>
										<text class="d-inline-block main-text-18">退换货可自带理赔</text>
									</view>
									<view class="item-body-re">
										<price :sizeNumber="36" :priceValue="999" />
										<count :sizeBol="20" :sizeNumber="24" :countValue="1" />
									</view>
								</view>
								<view class="d-flex a-center j-end">
									<view class="d-flex a-center ml-1">
										<text class="main-text-color main-text-18 mr-1">总价</text>
										<price :sizeBol="18" :sizeNumber="18" :priceValue="999" />
									</view>
									<view class="d-flex a-center ml-1">
										<text class="main-text-color main-text-18 mr-1">优惠</text>
										<price :sizeBol="18" :sizeNumber="18" :priceValue="18" />
									</view>
									<view class="d-flex a-center ml-2">
										<text class="main-text-color main-text-18 mr-1">需付款</text>
										<price :sizeBol="18" :sizeNumber="18" :priceValue="999" />
									</view>
								</view>
								<view class="d-flex a-center j-end">
									<view class="item-more d-flex a-center j-sa span-14">
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">修改地址</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">找朋友付</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">付款</text>
									</view>
								</view>
							</view>
							<view class="item p-3 rounded my-2 main-bg-gray-color">
								<itemTop needCheckbox :pic="'/static/images/icon1.png'" :name="'项链'" isBorder>
									<template slot="right">
										<text class="main-text-color main-text-20">等待买家付款</text>
									</template>
								</itemTop>
								<view class="item-body mt-3 d-flex a-start j-sb">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<view class="content ml-3">
										<text class="d-block main-text-30">精美项链</text>
										<text class="bg-white px-1 rounded main-text-24">金色，中号</text>
										<view></view>
										<text class="d-inline-block main-text-color main-text-20 border main-border-color rounded-4 px-1 mt-1">七天无理由退换货</text>
										<view></view>
										<text class="d-inline-block main-text-24">运费险</text>
										<text class="d-inline-block main-text-18">退换货可自带理赔</text>
									</view>
									<view class="item-body-re">
										<price :sizeNumber="36" :priceValue="999" />
										<count :sizeBol="20" :sizeNumber="24" :countValue="1" />
									</view>
								</view>
								<view class="d-flex a-center j-end">
									<view class="d-flex a-center ml-1">
										<text class="main-text-color main-text-18 mr-1">总价</text>
										<price :sizeBol="18" :sizeNumber="18" :priceValue="999" />
									</view>
									<view class="d-flex a-center ml-1">
										<text class="main-text-color main-text-18 mr-1">优惠</text>
										<price :sizeBol="18" :sizeNumber="18" :priceValue="18" />
									</view>
									<view class="d-flex a-center ml-2">
										<text class="main-text-color main-text-18 mr-1">需付款</text>
										<price :sizeBol="18" :sizeNumber="18" :priceValue="999" />
									</view>
								</view>
								<view class="d-flex a-center j-end">
									<view class="item-more d-flex a-center j-sa span-14">
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">修改地址</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">找朋友付</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">付款</text>
									</view>
								</view>
							</view>
						</template>
						<template v-if="index===2">
							<image src="/static/images/coupon-bg.png" mode="widthFix" class="w-100"></image>
							<view class="item p-3 rounded my-2 main-bg-gray-color">
								<itemTop :pic="'/static/images/icon1.png'" :name="'项链'" isBorder>
									<template slot="right">
										<text class="main-text-color main-text-20">买家已付款</text>
									</template>
								</itemTop>
								<view class="item-body mt-3 d-flex a-start j-sb">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<view class="content ml-3">
										<text class="d-block main-text-30">精美项链</text>
										<text class="bg-white px-1 rounded main-text-24">金色，中号</text>
										<view></view>
										<text class="d-inline-block main-text-color main-text-20 border main-border-color rounded-4 px-1 mt-1">七天无理由退换货</text>
										<view></view>
										<text class="d-inline-block main-text-24">运费险</text>
										<text class="d-inline-block main-text-18">退换货可自带理赔</text>
									</view>
									<view class="item-body-re">
										<price :sizeNumber="36" :priceValue="999" />
										<count :sizeBol="20" :sizeNumber="24" :countValue="1" />
									</view>
								</view>
								<view class="d-flex a-center j-end">
									<view class="d-flex a-center ml-1">
										<text class="main-text-color main-text-18 mr-1">总价</text>
										<price :sizeBol="18" :sizeNumber="18" :priceValue="999" />
									</view>
									<view class="d-flex a-center ml-1">
										<text class="main-text-color main-text-18 mr-1">优惠</text>
										<price :sizeBol="18" :sizeNumber="18" :priceValue="18" />
									</view>
									<view class="d-flex a-center ml-2">
										<text class="main-text-color main-text-18 mr-1">需付款</text>
										<price :sizeBol="18" :sizeNumber="18" :priceValue="999" />
									</view>
								</view>
								<view class="d-flex a-center j-end">
									<view class="item-more d-flex a-center j-sa span-10">
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">申请发票</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">修改地址</text>
									</view>
								</view>
							</view>
						</template>
						<template v-if="index===3">
							<view class="item p-3 rounded my-2 main-bg-gray-color">
								<itemTop :pic="'/static/images/icon1.png'" :name="'项链'" isBorder>
									<template slot="right">
										<text class="main-text-color main-text-20">买家已付款</text>
									</template>
								</itemTop>
								<view class="item-body mt-3 d-flex a-start j-sb">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<view class="content ml-3">
										<text class="d-block main-text-30">精美项链</text>
										<text class="bg-white px-1 rounded main-text-24">金色，中号</text>
										<view></view>
										<text class="d-inline-block main-text-color main-text-20 border main-border-color rounded-4 px-1 mt-1">七天无理由退换货</text>
										<view></view>
										<text class="d-inline-block main-text-24">运费险</text>
										<text class="d-inline-block main-text-18">退换货可自带理赔</text>
									</view>
									<view class="item-body-re d-flex a-end j-end flex-column">
										<price :sizeNumber="36" :priceValue="999" />
										<count :sizeBol="20" :sizeNumber="24" :countValue="1" />
										<text class="main-text-24 main-text-24 mt-2">已出单</text>
									</view>
								</view>
								<view class="d-flex a-center j-end">
									<view class="d-flex a-center ml-1">
										<text class="main-text-color main-text-24 mr-1">总价</text>
										<price :priceValue="999" />
									</view>
									<view class="d-flex a-center ml-2">
										<text class="main-text-color main-text-24 mr-1">实付款</text>
										<price :priceValue="999" />
									</view>
								</view>
								<view class="wuliu d-flex a-center bg-white rounded-4 mb-2 px-2">
									<image src="/static/images/solicitation.png" mode="widthFix"></image>
									<text class="main-text-24 font-weight ml-1">已揽件</text>
									<text class="main-text-24 ml-1">预计12.18送达</text>
								</view>
								<view class="d-flex a-center j-sb">
									<text class="main-text-20">更多</text>
									<view class="item-more d-flex a-center j-sa span-14">
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">延长收货</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">查看物流</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">确认收货</text>
									</view>
								</view>
							</view>
						</template>
						<template v-if="index===4">
							<view class="list-1 rounded main-bg-gray-color">
								<view class="item p-3 d-flex a-center border-bottom position-relative">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
									<view class="position-absolute">
										<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30">评价</view>
									</view>
								</view>
								<view class="item p-3 d-flex a-center border-bottom position-relative">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
									<view class="position-absolute">
										<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30">评价</view>
									</view>
								</view>
								<view class="item p-3 d-flex a-center border-bottom position-relative">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
									<view class="position-absolute">
										<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30">评价</view>
									</view>
								</view>
								<view class="item p-3 d-flex a-center border-bottom position-relative">
									<image src="/static/images/my_1.png" mode="" class="rounded"></image>
									<text class="d-block text3 ml-1 main-text-24">精美项链 金色，中号</text>
									<view class="position-absolute">
										<view class="main-bg-color text-white font-weight rounded text-center btn main-text-30">评价</view>
									</view>
								</view>
							
							</view>
						</template>
						
						<view class="tuijian text-center py-3" v-show="index != 0">
							<view class="title d-flex a-center j-sb">
								<image src="/static/images/tuijian1.png" mode="widthFix"></image>
								<text class="d-block main-text-30">为您推荐</text>
								<image src="/static/images/tuijian2.png" mode="widthFix"></image>
							</view>
							<view class="d-flex a-center j-sb mt-3">
								<view class="tuijian-item d-flex flex-column a-start">
									<image src="/static/images/my_1.png" mode="widthFix" class="w-100"></image>
									<text class="text4 mt-1 main-text-24">精美项链</text>
									<text class="text4 main-text-24">金色，中号</text>
									<view class="d-flex a-center">
										<price :priceValue="999" />
										<text class="text5 ml-2 main-text-18">100+人购买</text>
									</view>
								</view>
								<view class="tuijian-item d-flex flex-column a-start">
									<image src="/static/images/my_1.png" mode="widthFix" class="w-100"></image>
									<text class="text4 mt-1 main-text-24">精美项链</text>
									<text class="text4 main-text-24">金色，中号</text>
									<view class="d-flex a-center">
										<price :priceValue="999" />
										<text class="text5 ml-2 main-text-18">100+人购买</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import itemTop from "@/components/item-top/item-top"
	import price from "@/components/price/price"
	import count from "@/components/count/count"
	export default {
		data() {
			return {
				scrollinto: "",
				scrollH: 500,
				tabIndex: 3,
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
		components: {
			itemTop,
			price,
			count
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
	/* #ifdef APP-PLUS ||MP-WEIXIN */
	checkbox .wx-checkbox-input {
		border-radius: 50% !important;
		color: #ffffff !important;
	}
	checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		color: #fff;
		background: #00332A;
	}
	.wx-checkbox-input.wx-checkbox-input-checked {
		border-color: #00332A !important;
	}
	/* #endif */
</style>
<style lang="scss" scoped>
	.my-order {
		.search {
			line-height: 56rpx;

			image {
				width: 42rpx;
			}
			input {
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
			.item-body {
				image {
					width: 175rpx;
					height: 175rpx;
				}
				.content {
					width: 330rpx;
					text {
						&:nth-of-type(1) {
							color: #292929;
						}
						&:nth-of-type(2) {
							color: #424242;
						}
					}
				}
			}
			.item-more {
				text {
					width: 140rpx;
					line-height: 40rpx;
				}
			}
		}
		.list-1 {
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
		.wuliu {
			line-height: 62rpx;
			image {
				width: 30rpx;
			}
		}
		.tuijian {
			.title {
				image {
					width: 260rpx;
				}
				text {
					width: 152rpx;
				}
			}
			.text4 {
				line-height: 38rpx;
			}
			.tuijian-item {
				width: 48%;
			}
		}
	}
</style>
