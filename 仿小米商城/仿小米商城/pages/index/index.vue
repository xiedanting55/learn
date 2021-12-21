<template>
	<view class="uni-tab-bar">
		<!-- #ifdef MP -->
		<!-- 自定义导航 -->
		<view class="d-flex a-center" style="height: 90rpx;">
			<!-- 左边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center">
				<text class="iconfont icon-xiaoxi"></text>
			</view>
			<!-- 中间 -->
			<view class="flex-1 bg-light rounded d-flex a-center text-light-muted" style="height: 65rpx;" @click="openSearch">
				<text class="iconfont icon-sousuo mx-2"></text>
				智能积木
			</view>
			<!-- 右边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center">
				<text class="iconfont icon-richscan_icon"></text>
			</view>
		</view>
		<!-- #endif -->
		<scroll-view class="border-bottom scroll-row" style="height: 80upx;" scroll-x :scroll-into-view="scrollinfo" :scroll-with-animation="true">
			<view v-for="(tab,index) in tabBars" :key="index" class="scroll-row-item px-3" style="height: 80upx; line-height: 80upx;" :class="tabIndex===index ? 'main-text-color' : ''" :id="'tab'+index" @click="changeTab(index)">
				<view class="tabitems">{{tab.name}}</view>
			</view>
		</scroll-view>
		<!-- 列表 -->
		<swiper :duration="150" :current="tabIndex" style="flex: 1;" @change="onChangeTab">
			<swiper-item v-for="(tab,index) in newsitems" style="display: flex;" :key="index">
				<scroll-view scroll-y style="flex: 1;" @scrolltolower="loadMore(index)">


					<!-- index模板 -->
					<template v-if="tabBars[index].template === 'index'">

						<block v-for="(v,i) in tab.data" :key="i">

							<template v-if="v.type === 'swiper'">
								<!-- 轮播图组件 -->
								<swiper-image :resData="v.data" />
							</template>
							<template v-else-if="v.type === 'indexnavs'">
								<!-- 首页分类 -->
								<index-nav :resData="v.data" />
								<divider />
							</template>
							<template v-else-if="v.type === 'threeAdv'">
								<!-- 三图广告 -->
								<three-adv :resData="v.data" />
								<divider />
							</template>
							<template v-else-if="v.type === 'oneAdv'">
								<!-- 大图广告位 -->
								<card :headTitle="v.data.title" :bodyCover="v.data.cover" />
							</template>
							<template v-else-if="v.type === 'list'">
								<!-- 公共列表组件 750 - 5 = 745   372.5-->
								<view class="row j-sb">
									<block v-for="(vlist,listindex) in v.data" :key="listindex">
										<common-list :item="vlist" :index="listindex" />
									</block>
								</view>
							</template>

						</block>
					</template>
					<!-- special模板 -->
					<template v-if="tabBars[index].template === 'special'">
						<block v-for="(v,i) in tab.data" :key="i">
							<template v-if="v.type === 'swiper'">
								<!-- 轮播图组件 -->
								<swiper-image :resData="v.data" />
							</template>
							<template v-else-if="v.type === 'indexnavs'">
								<!-- 首页分类 -->
								<index-nav :resData="v.data" />
								<divider />
							</template>
							<template v-else-if="v.type === 'list'">
								<!-- 公共列表组件-->
								<card headTitle="热卖爆品">
									<view class="row j-sb">
										<block v-for="(vlist,listindex) in v.data" :key="listindex">
											<common-list :item="vlist" :index="listindex" />
										</block>
									</view>
								</card>
							</template>
						</block>
					</template>

					<!-- 加载更多 -->
					<view class="uni-tab-bar-loading">
						{{tab.loadingText}}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import $H from "@/common/lib/request.js"
	import swiperImage from "@/components/index/swiper-image.vue";
	import indexNav from "@/components/index/index-nav.vue";
	import threeAdv from "@/components/index/three-adv.vue";
	import card from "@/components/common/card.vue";
	import commonList from "@/components/common/common-list.vue";

	export default {
		components: {
			swiperImage,
			indexNav,
			threeAdv,
			card,
			commonList
		},
		data() {
			return {
				scrollinto: "",
				scrollH: 500,
				tabIndex: 0,
				newsitems: [],
				tabBars: []
			}
		},
		// 页面加载，加载数据
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
			});
			// 初始化页面
			this.__init();
		},
		methods: {
			openSearch(){
				uni.navigateTo({
					url: '../search/search',
				});
			},
			// 初始化事件
			__init(){
				// 获取顶部选项卡
				$H.get('/index_category/data').then(res => {
					this.tabBars = res.category;
					// 根据顶部选项卡生成页面
					let arr = []
					for (var i = 0; i < this.tabBars.length; i++) {
						let firstLoad = i === 0 ? 'after' : 'before';
						let obj = {
							list:[],
							// 1.上拉加载更多 2.加载中... 3.没有更多了
							loadtext:"上拉加载更多",
							// 首次加载：before加载前，after加载后，ing加载中
							firstLoad:firstLoad
						}
						// 获取首屏数据
						if (i === 0) {
							obj.list = res.data
						}
						
						arr.push(obj)
					}
					this.newsitems = arr
				})
			},
			// 加载更多
			loadMore(e) {
				setTimeout(() => {
					this.addData(e);
				}, 1200);
			},
			// 加载更多模拟数据
			addData(e) { //拿到当前索引e
				if (this.newsitems[e].data.length > 30) {
					this.newsitems[e].loadingText = '没有更多了';
					return;
				}
				let arr = [{
						type: "swiper",
						data: [{
								src: "../../static/images/demo/demo4.jpg"
							},
							{
								src: "../../static/images/demo/demo4.jpg"
							},
							{
								src: "../../static/images/demo/demo4.jpg"
							}
						]
					},
					{
						type: "indexnavs",
						data: [{
								src: "/static/images/indexnav/1.png",
								text: "新品发布"
							},
							{
								src: "/static/images/indexnav/2.gif",
								text: "小米众筹"
							},
							{
								src: "/static/images/indexnav/3.gif",
								text: "以旧换新"
							},
							{
								src: "/static/images/indexnav/4.gif",
								text: "一分换团"
							},
							{
								src: "/static/images/indexnav/5.gif",
								text: "超值特卖"
							},
						]
					},
					{
						type: "list",
						data: [{
								cover: "/static/images/demo/list/1.jpg",
								title: "米家空调",
								desc: "1.5匹变频",
								oprice: 2699,
								pprice: 1399
							},
							{
								cover: "/static/images/demo/list/1.jpg",
								title: "米家空调",
								desc: "1.5匹变频",
								oprice: 2699,
								pprice: 1399
							},
							{
								cover: "/static/images/demo/list/1.jpg",
								title: "米家空调",
								desc: "1.5匹变频",
								oprice: 2699,
								pprice: 1399
							},
							{
								cover: "/static/images/demo/list/1.jpg",
								title: "米家空调",
								desc: "1.5匹变频",
								oprice: 2699,
								pprice: 1399
							},
							{
								cover: "/static/images/demo/list/1.jpg",
								title: "米家空调",
								desc: "1.5匹变频",
								oprice: 2699,
								pprice: 1399
							},
							{
								cover: "/static/images/demo/list/1.jpg",
								title: "米家空调",
								desc: "1.5匹变频",
								oprice: 2699,
								pprice: 1399
							}
						]
					}
				];
				this.newsitems[e].data = [...this.newsitems[e].data, ...arr];
			},
			// 切换选项卡
			changeTab(index) {
				if(this.tabIndex === index) return;
				this.tabIndex = index;
				this.scrollinfo = 'tab'+index;
				this.addData();
			},
			//监听滑动列表
			onChangeTab(e) {
				this.changeTab(e.detail.current);
			}
		}
	}
</script>

<style>
	.tabitems {
		display: inline-block;
		width: 75upx;
		border-bottom: 5upx solid #FFFFFF;
	}

	.active .tabitems {
		border-bottom-color: #FD6801;
	}

	.uni-tab-bar-loading {
		text-align: center;
		font-size: 28upx;
		color: #999;
	}
</style>
