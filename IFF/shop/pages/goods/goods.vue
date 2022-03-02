<template>
	<view class="goods">
		<view class="mx-3 top d-flex a-center j-center" style="z-index: 1000">
			<view class="line d-flex a-center j-sb rounded-4 main-bg-gray-color w-100">
				<input type="text" v-model="goodsValue" placeholder="搜索..." class="ml-1 pl-3 main-text-24 line-h-md py-2 w-100" />
				<view class="py-2 d-flex a-center j-center" @click="moreQuery">
					<image src="/static/images/search.png" class="search mr-3" mode="widthFix"></image>
				</view>
			</view>
		</view>  
		<view class="d-flex main">
			<scroll-view id="leftScroll" scroll-y style="flex: 1;height: 100%;" :scroll-top="leftScrollTop">
				<view class="left-view border-bottom left-scroll-item border-color main-bg-gray-color" hover-class="bg-light-secondary" v-for="(item,index) in categoryList" :key="index" @tap="changeCate(index)">
					<view class="font-md text-muted text-center main-text-28" :class="activeIndex === index ? 'main-bg-color text-white' : ''">{{item.name}}</view>
				</view>
			</scroll-view>
			<scroll-view class="rightScroll text-center" scroll-y="true" style="flex: 2.5;" :style="{'height':scrollH + 'px'}" @scrolltolower="loadmore(index)" @scroll="goScroll" :scroll-with-animation="true" :scroll-top="scrollTop">
				<view class="px-3" v-if="activeIndex != 1">
					<image :src="categoryList[activeIndex].images2" mode="widthFix" v-if="categoryList[activeIndex].images2.length > 0"></image>
					
					<view class="rightScroll-list d-flex a-center j-sb flex-wrap">
						<view class="col-4 mt-1 d-flex a-center j-center flex-column" v-for="(item,index) in categoryList[activeIndex].goods" :key="index" @click="linkTo(item)">
							<image :src="item.images" class="bigIamge w-100" mode="widthFix" lazy-load></image>
							<view class="col-4-line d-flex a-center j-center main-bg-color w-100">
								<image src="/static/images/icon1-white.png" mode="widthFix" class="mr-1"></image>
								<price :sizeBol="20" :sizeNumber="24" :priceValue="item.price" :mainTextColor="'#fff'" />
							</view>
						</view>
					</view>
					<view class="more" v-if="categoryList[activeIndex].cat_id != 0">
						<view class="d-flex j-center a-center pt-3">
							<text class="font-md text-light-muted">{{categoryList[activeIndex].loadtext}}</text>
						</view>
					</view>
				</view>
				<view v-else>
					<view class="item-series position-relative w-100" v-for="(item,index) in seriesList" :key="index" @click="linkSeries(item)">
						<image :src="item.images" class="w-100" lazy-load></image>
						<text class="position-absolute font-weight text-white main-text-36">{{item.name}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<tabbar :current="0"></tabbar>
	</view>
</template>

<script>
    import tabbar from '@/components/tabbar/tabbar'
	import price from '@/components/price/price'
	export default {
		data() {
			return {
				scrollTop: 0,
				oldScrollTop: 0,
				goodsValue: "",
				activeIndex: 0,
				categoryList: [],
				seriesList: [],
				page: 1,
				leftScrollTop: 0,
				scrollH: 500
			}
		},
		components:{
			tabbar,
			price
		},
		onShow() {
			uni.hideTabBar({animation: false})
		},
		onLoad() {
			this.__init();
			uni.getSystemInfo({
				success: res => {
					const query = uni.createSelectorQuery()
					query.select('.main').boundingClientRect()
					query.exec(resu => {
					    this.scrollH = res.windowHeight - uni.upx2px(120) - resu[0].top - 10;
					})
				}
			});
		},
		methods: {
			__init() {
				this.$H.get('Index/config').then((res)=> {
					this.categoryList = res.data.categorylist.map(v=> {
						v.loadtext = v.goods.length < 8 ? "没有更多了" : "加载更多"
						return v;
					});
					this.seriesList = res.data.serieslist;
				})
			},
			loadmore() {
				// 是否处于可加载状态
				if (this.categoryList[this.activeIndex].loadtext !== '加载更多') return;
				this.categoryList[this.activeIndex].nowpage++
				let page = this.categoryList[this.activeIndex].nowpage;
				this.$H.post('Goods/goodsList', {
					cat_id: this.categoryList[this.activeIndex].cat_id,
					p: page
				}).then((res) => {
					this.categoryList[this.activeIndex].goods = [...this.categoryList[this.activeIndex].goods, ...res.data.goodsList];
					// 恢复加载状态
					this.categoryList[this.activeIndex].loadtext = res.data.goodsList.length < 8 ? '没有更多了' : '加载更多';
				})
			},
			moreQuery() {
				uni.navigateTo({
					url: `../product/product?str=${this.goodsValue}&id=${this.activeIndex}`
				})
			},
			// searchList() {
			// 	this.$H.get('Goods/goodsList', {
			// 		cat_id: this.activeIndex,
			// 		keywords: this.goodsValue,
			// 	}).then((res)=> {
			// 		this.$set(this.categoryList[this.activeIndex], 'goods', res.data.goodsList)
			// 	})
			// },
			// 点击左边分类
			changeCate(index){
				this.activeIndex = index;
				this.scrollTop = this.oldScrollTop;
				this.$nextTick(() =>{
				    this.scrollTop = 0
				});
			},
			goScroll(e) {
				this.oldScrollTop = e.detail.scrollTop;
			},
			linkTo(item) {
				uni.navigateTo({
					url: item ? `../goods-detail/goods-detail?id=${item.goods_id}` : `../goods-detail/goods-detail`
				})
			},
			// 跳转详情
			linkSeries(item) {
				let data = JSON.stringify(item);
				uni.navigateTo({
					url: `../goods-series/goods-series?str=${data}`
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
		.top {
			height: 120rpx;
			.search {
				width: 34rpx;
			}
			input {
				line-height: 80rpx;
			}
		}
		.border-color {
			border-color: #00332a;
		}
		.left-view {
			line-height: 90rpx;
			&:last-of-type {
				border-bottom: none;
			}
		}
		.rightScroll {
			image {
				width: 100%;
			}
			.bigIamge {
				height: 232rpx !important;
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
			.item-series {
				height: 450rpx;
				overflow: hidden;
				image {
					height: 450rpx;
				}
				text {
					bottom: 20rpx;
					left: 50%;
					transform: translate(-50%,0);
				}
			}
		}
		.more {
			width: 150rpx;
			margin: 0 auto;
			view {
				line-height: 46rpx;
			}
		}
	}
</style>
