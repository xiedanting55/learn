<template>
	<view class="goods">
		<view class="mx-3 my-2">
			<uni-easyinput class="col-9" :inputBorder="false" :colorIcon="'#515151'" :size="20" suffixIcon="search" v-model="value" placeholder="搜索..." @iconClick="iconClick"></uni-easyinput>
		</view>  
		<view class="d-flex">
			<scroll-view id="leftScroll" scroll-y style="flex: 1;height: 100%;" :scroll-top="leftScrollTop">
				<view class="left-view border-bottom left-scroll-item border-color" hover-class="bg-light-secondary" v-for="(item,index) in cate" :key="index" @tap="changeCate(index)">
					<view class="text1 font-md text-muted text-center" :class="activeIndex === index ? 'main-bg-color text-white' : ''">{{item.name}}</view>
				</view>
			</scroll-view>
			<scroll-view class="rightScroll text-center" scroll-y style="flex: 2.5;height: 100%;" :scroll-top="rightScrollTop" :scroll-with-animation="true" @scroll="onRightScroll">
				<view class="px-3">
					<text class="text2">每月月底上新，提前解锁珠宝潮流趋势</text>
					<image src="/static/images/my_bg.png" mode="widthFix"></image>
					<view class="rightScroll-list d-flex a-center j-sb flex-wrap">
						<view class="col-4 mt-1" @click="linkTo">
							<image src="/static/images/my_vip_4.png" mode=""></image>
							<view class="col-4-line d-flex a-center j-center main-bg-color">
								<image src="/static/images/icon1-white.png" mode="widthFix"></image>
								<text class="text-white ml-1">¥</text>
								<text class="text-white font-weight ml-1">199</text>
							</view>
						</view>
						<view class="col-4 mt-1">
							<image src="/static/images/my_vip_4.png" mode=""></image>
							<view class="col-4-line d-flex a-center j-center main-bg-color">
								<image src="/static/images/icon1-white.png" mode="widthFix"></image>
								<text class="text-white ml-1">¥</text>
								<text class="text-white font-weight ml-1">199</text>
							</view>
						</view>
						<view class="col-4 mt-1">
							<image src="/static/images/my_vip_4.png" mode=""></image>
							<view class="col-4-line d-flex a-center j-center main-bg-color">
								<image src="/static/images/icon1-white.png" mode="widthFix"></image>
								<text class="text-white ml-1">¥</text>
								<text class="text-white font-weight ml-1">199</text>
							</view>
						</view>
						<view class="col-4 mt-1">
							<image src="/static/images/my_vip_4.png" mode=""></image>
							<view class="col-4-line d-flex a-center j-center main-bg-color">
								<image src="/static/images/icon1-white.png" mode="widthFix"></image>
								<text class="text-white ml-1">¥</text>
								<text class="text-white font-weight ml-1">199</text>
							</view>
						</view>
					</view>
					<view class="more">
						<view class="main-bg-color my-3 d-flex a-center j-center">
							<text class="text-white">查看更多</text>
							<view class="arrow arrow-white arrow-right"></view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import uniEasyinput from '@/components/uni-ui/uni-easyinput/uni-easyinput.vue'
	export default {
		data() {
			return {
				value: "",
				activeIndex: 0,
				cate: [
					{
						id: 0,
						name: "新品上市"
					},
					{
						id: 1,
						name: "热销单品"
					},
					{
						id: 2,
						name: "品牌系列"
					},
					{
						id: 3,
						name: "耳饰"
					},
					{
						id: 4,
						name: "项链"
					},
					{
						id: 5,
						name: "首饰"
					},
					{
						id: 6,
						name: "戒指"
					},
					{
						id: 7,
						name: "礼盒"
					},
					{
						id: 8,
						name: "价格专区"
					}
				],
				leftScrollTop: 0,
				rightScrollTop: 0
			}
		},
		components:{
			uniEasyinput
		},
		methods: {
			// 点击左边分类
			changeCate(index){
				this.activeIndex = index
				// 右边scroll-view滚动到对应区块
				// this.rightScrollTop = this.rightDomsTop[index]
			},
			// 监听右边滚动事件
			async onRightScroll(e){
				// 匹配当前scrollTop所处的索引
				this.rightDomsTop.forEach((v,k)=>{
					if (v < e.detail.scrollTop + 3) {
						this.activeIndex = k
						return false
					}
				})
			},
			linkTo() {
				uni.navigateTo({
					url: "../goods-detail/goods-detail"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods {
		.uni-easyinput {
			background-color: #e4e4e4 !important;
		}
		.border-color {
			border-color: #00332a;
		}
		.left-view {
			line-height: 90rpx;
			background-color: #e4e4e4;
		}
		.text1 {
			font-size: 30rpx;
			color: #333;
		}
		.text2 {
			font-size: 24rpx;
			color: #343434;
		}
		.rightScroll {
			image {
				width: 100%;
			}
			.col-4 {
				width: 49%;
				image {
					height: 280rpx;
				}
				.col-4-line {
					line-height: 65rpx;
					image {
						width: 30rpx;
					}
					text {
						&:nth-of-type(1) {
							font-size: 20rpx;
						}
						&:nth-of-type(2) {
							font-size: 30rpx;
						}
					}
				}
			}
		}
		.more {
			width: 150rpx;
			margin: 0 auto;
			view {
				line-height: 40rpx;
			}
			text {
				font-size: 20rpx;
			}
		}
	}
</style>
