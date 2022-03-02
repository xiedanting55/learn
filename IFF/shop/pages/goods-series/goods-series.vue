<template>
	<view class="goods-series" style="height: 100vh;display: flex;flex-direction: column;">
		<view class="big-image position-relative">
			<image :src="list[0].images" mode="widthFix" class="w-100"></image>
			<text class="position-absolute font-weight text-white main-text-36">{{list[0].name}}</text>
		</view>
		<scroll-view scroll-x class="scroll-row" style="height: 80rpx;" :scroll-into-view="scrollinto" :scroll-with-animation="true">
			<view class="scroll-row-item px-3 border rounded-4 d-flex a-center j-center mt-1 mx-1" @click="changeTab(index)" style="height: 60rpx;line-height: 60rpx;" v-for="(item,index) in tabBars" :key="index" :class="tabIndex === index ? 'main-bg-color text-white':''" :id="'tab'+index">
				<text class="font-md">{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper class="list-swiper" :duration="150" :current="tabIndex" style="flex: 1;" @change="onChangeTab">
			<swiper-item v-for="(item,index) in newsitems" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmore(index)" @scroll="goScroll" :scroll-with-animation="true" :scroll-top="scrollTop">
					<view class="m-3 d-flex flex-wrap">
						<view class="col-5 mt-1 d-flex a-center j-center flex-column" v-for="(listItem,listIndex) in item.list" :key="listIndex" @click="linkTo(listItem)">
							<image :src="listItem.images" class="bigIamge w-100" lazy-load></image>
							<view class="col-4-line d-flex a-center j-center flex-column w-100">
								<text class="main-text-24">{{listItem.goods_name}}</text>
								<price :sizeBol="20" :sizeNumber="24" :priceValue="listItem.price" class="price" />
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldId: "",
				list: [],
				scrollinto: "",
				tabIndex: 0,
				tabBars: [],
				newsitems: [],
				scrollH: 500,
				scrollTop: 0,
				oldScrollTop: 0,
			}
		},
		onLoad(option) {
			// 获取可视区域高度
			uni.getSystemInfo({
				success: (res) => {
					// #ifndef MP
					let navbarH = 0
					// #endif
					// #ifdef MP
					let navbarH = uni.upx2px(90)
					// #endif
					this.scrollH = res.windowHeight - uni.upx2px(132 + 300) - navbarH
				}
			})
			if(option) {
				let obj = JSON.parse(option.str)
				this.list.push(obj);
				this.oldId = option.oldId;
				this.tabBars = this.list[0].category;
				this.__init(this.list[0].category[0].cat_id, this.list[0].ser_id);
			}
		},
		methods: {
			__init(cat_id, ser_id) {
				this.$H.get('goods/seriesGoodsList', {
					"cat_id": cat_id,
					"ser_id": ser_id,
					"p": 1, 
					"token": this.$store.state.user.token,
				}).then((res)=> {
					// 根据顶部选项卡生成页面
					let arr = []
					for (var i = 0; i < this.tabBars.length; i++) {
						let obj = {
							list:[],
							// 1.加载更多 2.加载中... 3.没有更多了
							loadtext:"加载更多",
						}
						if (i === this.tabIndex) {
							obj.list = res.data.goodsList;
							obj.loadtext = res.data.goodsList.length < 6 ? '没有更多了' : '加载更多';
						}
						arr.push(obj)
					}
					this.newsitems = arr;
				})
			},
			// 切换选项卡
			changeTab(index) {
				if (this.tabIndex === index) return;
				this.tabIndex = index;
				this.scrollinto = 'tab' + index;
				let item = this.newsitems[index];
				// 是否处于可加载状态
				if (item.loadtext !== '加载更多') return;
				this.addData()
			},
			// 加载数据
			async addData(callback = false,refresh = false){
				// 拿到当前索引
				let index = this.tabIndex;
				let obj = this.newsitems[index]
				// 拿到当前分类id
				let id = this.tabBars[index].id
				// 拿到当前分类的分页数
				let page = !refresh ? (Math.ceil(obj.list.length/6) + 1) : 1
				
				// 请求前
				if (page === 1) obj.loadtext = '加载中...';
				// 请求数据
				let data = await this.$H.post('goods/seriesGoodsList',{
					"cat_id": this.list[0].category[this.tabIndex].cat_id,
					"ser_id": this.list[0].ser_id,
					"p": page, 
					"token": this.$store.state.user.token,
				})
				
				// 请求完数据
				if (page === 1) obj.firstLoad = '加载更多';
				
				if (data.data.goodsList) {
					// 赋值
					obj.list = !refresh ? [...obj.list,...data.data.goodsList] : data.data.goodsList
					obj.loadtext = data.data.goodsList.length < 6 ? '没有更多了' : '加载更多'
				}
				// 执行回调函数
				if (typeof callback === 'function') {
					callback()
				}
			},
			// 加载更多
			loadmore(index){
				let item = this.newsitems[index]
				// 是否处于可加载状态
				if (item.loadtext !== '加载更多') return;
				// 加载
				item.loadtext = '加载中...'
				this.addData(()=>{
					uni.showToast({
						title:'加载成功',
						icon: "none"
					})
				})
			},
			// 监听滑动列表
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			goScroll(e) {
				this.oldScrollTop = e.detail.scrollTop;
			},
			linkTo(item) {
				uni.navigateTo({
					url: this.oldId ? `../goods-detail/goods-detail?id=${item.goods_id}&oldId=${this.oldId}` : `../goods-detail/goods-detail?id=${item.goods_id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.big-image {
		height: 450rpx;
		overflow: hidden;
		text {
			top: 20rpx;
			left: 50%;
			transform: translate(-50%,0);
		}
	}
	.scroll-row {
		.scroll-row-item{
			border-color: #d3d7da;
		}
	}
	.list-swiper {
		.col-5 {
			&:nth-of-type(2n-1) {
				margin-right: 65rpx;
			}
			image {
				width: 312.5rpx;
				height: 312.5rpx;
			}
			.price {
				margin-top: -8rpx;
			}
		}
	}
</style>
