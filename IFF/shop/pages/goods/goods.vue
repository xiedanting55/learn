<template>
	<view class="goods">
		<view class="mx-3 py-2 top" style="z-index: 1000">
			<view class="line d-flex a-center j-sb rounded-4 main-bg-gray-color py-2">
				<input type="text" v-model="goodsValue" placeholder="搜索..." class="ml-1 pl-3 main-text-24" />
				<image src="/static/images/search.png" class="search mr-3" mode="widthFix" @click="searchList"></image>
			</view>
		</view>  
		<view class="d-flex">
			<scroll-view id="leftScroll" scroll-y style="flex: 1;height: 100%;" :scroll-top="leftScrollTop">
				<view class="left-view border-bottom left-scroll-item border-color main-bg-gray-color" hover-class="bg-light-secondary" v-for="(item,index) in categoryList" :key="index" @tap="changeCate(index)">
					<view class="font-md text-muted text-center main-text-30" :class="activeIndex === index ? 'main-bg-color text-white' : ''">{{item.name}}</view>
				</view>
			</scroll-view>
			<scroll-view class="rightScroll text-center" scroll-y="true" style="flex: 2.5;" :style="{'height':scrollHeight + 'px'}" :scroll-with-animation="true">
				<view class="px-3">
					<text class="main-text-24">每月月底上新，提前解锁珠宝潮流趋势</text>
					<image :src="categoryList[activeIndex].images" mode="widthFix" v-if="categoryList[activeIndex].images.length > 0"></image>
					
					<view class="rightScroll-list d-flex a-center j-sb flex-wrap">
						<view class="col-4 mt-1" v-for="(item,index) in categoryList[activeIndex].goods" :key="index" @click="linkTo(item)">
							<image :src="item.images" mode="widthFix" class="w-100"></image>
							<view class="col-4-line d-flex a-center j-center main-bg-color">
								<image src="/static/images/icon1-white.png" mode="widthFix" class="mr-1"></image>
								<price :sizeBol="20" :priceValue="item.price" :mainTextColor="'#fff'" />
							</view>
						</view>
					</view>
					<view class="more" v-if="categoryList[activeIndex].goods.length > 0">
						<view class="main-bg-color my-3 d-flex a-center j-center" @click="linkTo">
							<text class="text-white main-text-24">查看更多</text>
							<view class="arrow arrow-white arrow-right"></view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import price from '@/components/price/price'
	export default {
		data() {
			return {
				goodsValue: "",
				activeIndex: 0,
				categoryList: [],
				leftScrollTop: 0,
				scrollHeight: 500
			}
		},
		components:{
			price
		},
		// onReady: function () {
		// 	let _self = this;
		// 	uni.getSystemInfo({
		// 		success: function (res) {
		// 			var windowHeight = res.windowHeight;
		// 			//获取顶部搜索高度
		// 			// 有bug，有时候获取不到dom高度
		// 			uni.createSelectorQuery().select('.top').fields({size: true}, res2 => {
		// 				if(!res2){return ;}
		// 				//计算得出滚动区域的高度
		// 				_self.scrollHeight = windowHeight - res2.height;
		// 			console.log(_self.scrollHeight)
		// 			}).exec();
		// 		}
		// 	});
		// },
		mounted() {
			this.__init();
		},
		methods: {
			__init() {
				this.$H.get('Index/config').then((res)=> {
					this.categoryList = res.categorylist;
				})
			},
			// 接口不懂，得问问
			searchList() {
				this.$H.get('Goods/goodsList', {
					cat_id: this.activeIndex,
					keywords: this.goodsValue
				}).then((res)=> {
					console.log(res)
					// this.categoryList = res.categorylist;
				})
			},
			// 点击左边分类
			changeCate(index){
				this.activeIndex = index;
			},
			linkTo(item) {
				uni.navigateTo({
					url: item ? `../goods-detail/goods-detail?id=${item.goods_id}` : `../goods-detail/goods-detail`
				})
			}
		}
	}
</script>
<style>
	page {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
<style lang="scss" scoped>
	.goods {
		overflow: hidden;
		.search {
			width: 34rpx;
		}
		.border-color {
			border-color: #00332a;
		}
		.left-view {
			line-height: 90rpx;
		}
		.rightScroll {
			image {
				width: 100%;
			}
			.col-4 {
				width: 49%;
				.col-4-line {
					line-height: 65rpx;
					image {
						width: 30rpx;
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
		}
	}
</style>
