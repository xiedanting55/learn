<template>
	<div>
		<!-- 横向滚动顶部选项卡 -->
		<sum-tabbar :tabIndex="tabIndex" :tabBars="tabBars" @tabchange="tabChange"></sum-tabbar>

		<!-- 横向滚动列表 -->
		<slider class="flex-1" :index="tabIndex" :infinite="false" @change="sliderChange">


			<list :show-scrollbar="false" :key="listIndex" v-for="(list,listIndex) in newsitems">

				<!-- 下拉刷新 -->
				<refresh class="w-100 flex-row j-center a-center" style="height: 80px;" @refresh="refresh"
					@pullingdown="pullingdown" :display="list.refreshShow">
					<text class="font-md text-muted">{{list.refreshText}}</text>
				</refresh>


				<!-- 首页模板 -->
				<template v-if="tabBars[listIndex].template === 'index'">
					<cell v-for="(listItem,ItemIndex) in list.data" :key="ItemIndex">
						<!-- 轮播图组件 -->
						<sum-slider v-if="listItem.type ==='swiper'" :swipers="listItem.data" />
						<!-- 图标分类组件 -->
						<template v-if="listItem.type ==='indexnavs'">
							<sum-index-navs :resdata="listItem.data" />
							<divider />
						</template>
						<!-- 三图广告 -->
						<template v-if="listItem.type ==='threeAdv'">
							<sum-three-adv :item="listItem.data" />
							<divider />
						</template>
						<!-- 大图广告 -->
						<sum-one-adv v-if="listItem.type ==='oneAdv'" :item="listItem.data" />
						<!-- 公共列表组件 -->
						<div class="row w-100" v-if="listItem.type ==='list'">
							<block v-for="(item,index) in listItem.data" :key="index">
								<common-list :item="item" :index="index"></common-list>
							</block>
						</div>

					</cell>
				</template>

				<!-- 专题页 -->
				<template v-else-if="tabBars[listIndex].template === 'special'">
					<cell v-for="(listItem,ItemIndex) in list.data" :key="ItemIndex">
						<!-- 轮播图组件 -->
						<sum-slider v-if="listItem.type ==='swiper'" :swipers="listItem.data" />
						<!-- 图标分类组件 -->
						<template v-if="listItem.type ==='indexnavs'">
							<sum-index-navs :resdata="listItem.data" />
						</template>
						<!-- 公共列表组件 -->
						<div class="w-100" v-if="listItem.type ==='list'">
							<div class="p-2 border-bottom border-top">
								<text class="text-dark font-md font-weight">热卖爆品</text>
							</div>
							<div class="row w-100">
								<block v-for="(item,index) in listItem.data" :key="index">
									<common-list :item="item" :index="index"></common-list>
								</block>
							</div>
						</div>

					</cell>
				</template>

				<!-- 上拉加载 -->
				<loading class="w-100 j-center a-center" style="height: 70px;" @loading="onLoading"
					:display="list.loadingShow">
					<text class="text-muted font-md">Loading...</text>
				</loading>
			</list>



		</slider>

	</div>
</template>

<script>
	import sumTabbar from "@/components/index/nvue/sum-tabbar.nvue"
	import sumSlider from "@/components/index/nvue/sum-slider.nvue";
	import sumIndexNavs from "@/components/index/nvue/sum-index-navs.nvue";
	import divider from "@/components/common/divider.nvue";
	import sumThreeAdv from "@/components/index/nvue/sum-three-adv.nvue";
	import sumOneAdv from "@/components/index/nvue/sum-one-adv.nvue";
	import commonList from "@/components/common/common-list.nvue";
	// 获取当前窗口对象
	const currentWebview = plus.webview.currentWebview();
	export default {
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
					name: '关注',
					id: 'guanzhu',
					template: "index"
				}, {
					name: '推荐',
					id: 'tuijian',
					template: "special"
				}, {
					name: '体育',
					id: 'tiyu',
					template: "special"
				}, {
					name: '热点',
					id: 'redian',
					template: "special"
				}, {
					name: '财经',
					id: 'caijing',
					template: "special"
				}, {
					name: '娱乐',
					id: 'yule',
					template: "special"
				}, {
					name: '军事',
					id: 'junshi',
					template: "special"
				}, {
					name: '历史',
					id: 'lishi',
					template: "special"
				}, {
					name: '本地',
					id: 'bendi',
					template: "special"
				}],
				newsitems: [],
			}
		},
		components: {
			sumTabbar,
			sumSlider,
			sumIndexNavs,
			divider,
			sumThreeAdv,
			sumOneAdv,
			commonList,
		},
		created() {
			// 监听当前窗口显示
			currentWebview.addEventListener('show', e => {
				console.log('indexShow')
			})
			// 生成随机数据
			this.newsitems = this.randomfn()
		},
		// 监听点击搜索框
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url: '../search/search',
			});
		},
		beforeDestroy() {
			// 移除监听事件
			currentWebview.removeEventListener('show', e => {})
		},
		methods: {
			// 加载更多模拟数据
			addData() { //拿到当前索引
				let e = this.tabIndex
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
								name: "新品发布"
							},
							{
								src: "/static/images/indexnav/2.gif",
								name: "小米众筹"
							},
							{
								src: "/static/images/indexnav/3.gif",
								name: "以旧换新"
							},
							{
								src: "/static/images/indexnav/4.gif",
								name: "一分换团"
							},
							{
								src: "/static/images/indexnav/5.gif",
								name: "超值特卖"
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
			randomfn() {
				let ary = [];
				// 拿到tabbars的长度，根据长度生成页面
				let tablength = this.tabBars.length;
				for (let i = 0; i < tablength; i++) {
					let aryItem = {
						refreshShow: 'hide',
						refreshText: '下拉可以刷新',
						loadingShow: 'hide',
						data: []
					};
					// 给页面添加数据
					if (this.tabBars[i].template === 'index') {
						aryItem.data = [{
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
										name: "新品发布"
									},
									{
										src: "/static/images/indexnav/2.gif",
										name: "小米众筹"
									},
									{
										src: "/static/images/indexnav/3.gif",
										name: "以旧换新"
									},
									{
										src: "/static/images/indexnav/4.gif",
										name: "一分换团"
									},
									{
										src: "/static/images/indexnav/5.gif",
										name: "超值特卖"
									},
									{
										src: "/static/images/indexnav/6.gif",
										name: "小米秒杀"
									},
									{
										src: "/static/images/indexnav/7.gif",
										name: "真心想要"
									},
									{
										src: "/static/images/indexnav/8.gif",
										name: "电视热卖"
									},
									{
										src: "/static/images/indexnav/9.gif",
										name: "家电热卖"
									},
									{
										src: "/static/images/indexnav/10.gif",
										name: "米粉卡"
									},
								]
							},
							{
								type: "threeAdv",
								data: [{
										src: "/static/images/demo/demo1.jpg"
									},
									{
										src: "/static/images/demo/demo2.jpg"
									},
									{
										src: "/static/images/demo/demo2.jpg"
									},
								]
							},
							{
								type: "oneAdv",
								data: {
									title: "每日精选",
									cover: "/static/images/demo/demo4.jpg"
								}
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
					}
					ary.push(aryItem);
				}
				return ary;
			},
			tabChange(index) {
				this.tabIndex = index
				// 加载数据
				this.addData();
			},
			// 监听横向滚动列表事件
			sliderChange(e) {
				this.tabIndex = e.index
				this.addData();
			},
			// 上拉加载事件
			onLoading() {
				// 存储当前索引
				var index = this.tabIndex
				this.newsitems[index].loadingShow = 'show';
				setTimeout(() => {
					// 加载数据
					this.addData();
					this.newsitems[index].loadingShow = 'hide';
				}, 2000)
			},
			// 执行刷新
			refresh(e) {
				// 存储当前索引
				var index = this.tabIndex
				this.newsitems[index].refreshShow = 'show';
				this.newsitems[index].refreshText = '正在刷新...';
				setTimeout(() => {
					this.randomfn();
					this.newsitems[index].refreshShow = 'hide';
					this.newsitems[index].refreshText = '下拉可以刷新';
				}, 1200)
			},
			// 判断下拉刷新状态
			pullingdown(e) {
				this.refreshText = e.pullingDistance > e.viewHeight ? '释放就能刷新咯' : '下拉可以刷新';
			}
		},
	}
</script>
<style src="@/common/zcm-main-nvue.css"></style>
<style>

</style>
