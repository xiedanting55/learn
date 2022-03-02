<template>
	<view class="after-sale" style="height: 100vh;display: flex;flex-direction: column;">
		<view class="search m-3 d-flex a-center px-2 py-1 rounded-4 main-bg-gray-color">
			<input type="text" v-model="searchVal" placeholder="商品名称/商品编号/订单编号/序列号" class="ml-2" @confirm="__init()" />
			<image src="/static/images/sousuo.png" mode="widthFix" @click="__init()"></image>
		</view>
		<scroll-view scroll-x class="border-bottom scroll-row mx-3" style="height: 80rpx;" :scroll-into-view="scrollinto" :scroll-with-animation="true">
			<view class="scroll-row-item px-3" @click="changeTab(index)" style="height: 72rpx;line-height: 80rpx;" v-for="(item,index) in tabBars" :key="index" :class="tabIndex === index ? 'active':''" :id="'tab'+index">
				<text class="font-md">{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper :duration="150" :current="tabIndex" style="flex: 1;" @change="onChangeTab">
			<swiper-item v-for="(item,index) in newsitems" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmore(index)" @scroll="goScroll" :scroll-with-animation="true" :scroll-top="scrollTop">
					<template v-if="item.list.length > 0">
						<block v-if="index === 0" v-for="(sale,saleIndex) in item.list" :key="saleIndex">
							<view class="item p-3 rounded m-3 main-bg-gray-color" @click="saleDetail(sale.id)">
								<itemTop :pic="'/static/images/icon1.png'" :name="sale.cat_name" isBorder />
								<view class="item-body my-3 d-flex a-end j-sb">
									<image :src="sale.images" mode="" class="rounded"></image>
									<view class="content ml-3">
										<text class="d-block main-text-30">{{sale.goods_name}}</text>
										<text class="bg-white px-1 rounded main-text-24">{{sale.spe}}</text>
										<text class="d-block main-text-color main-text-30">数量：{{sale.goods_num}}</text>
									</view>
									<view class="item-body-re">
										<view class="main-text-color font-weight rounded text-center btn main-text-30">{{sale.status_desc}}</view>
									</view>
								</view>
							</view>
						</block>
						<block v-if="index === 1" v-for="(sale,saleIndex) in item.list" :key="saleIndex">
							<view class="item p-3 rounded m-3 main-bg-gray-color" @click="saleDetail(sale.id)">
								<itemTop :pic="'/static/images/icon1.png'" :name="sale.cat_name" isBorder />
								<view class="item-body my-3 d-flex a-center j-sb">
									<image :src="sale.images" mode="" class="rounded"></image>
									<view class="content ml-3">
										<text class="d-block main-text-30">{{sale.goods_name}}</text>
										<text class="bg-white px-1 rounded main-text-24">{{sale.spe}}</text>
									</view>
									<view class="item-body-re d-flex a-end flex-column">
										<price :sizeNumber="36" :priceValue="sale.price" />
										<count :sizeBol="30" :sizeNumber="36" :countValue="sale.goods_num" />
									</view>
								</view>
								<view class="main-text-color font-weight rounded text-right btn main-text-30">{{sale.status_desc}}</view>
							</view>
						</block>
						<block v-if="index === 2" v-for="(sale,saleIndex) in item.list" :key="saleIndex">
							<view class="item p-3 rounded m-3 main-bg-gray-color" @click="saleDetail(sale.id)">
								<itemTop :pic="'/static/images/icon1.png'" :name="sale.cat_name" isBorder />
								<view class="item-body my-3 d-flex a-center j-sb">
									<image :src="sale.images" mode="" class="rounded"></image>
									<view class="content ml-3">
										<text class="d-block main-text-30">{{sale.goods_name}}</text>
										<text class="bg-white px-1 rounded main-text-24">{{sale.spe}}</text>
									</view>
									<view class="item-body-re d-flex a-end flex-column">
										<price :sizeNumber="36" :priceValue="sale.price" />
										<count :sizeBol="30" :sizeNumber="36" :countValue="sale.goods_num" />
									</view>
								</view>
								<view class="main-text-color font-weight rounded text-right btn main-text-30">{{sale.status_desc}}</view>
							</view>
						</block>
						<block v-if="index === 3" v-for="(sale,saleIndex) in item.list" :key="saleIndex">
							<view class="item p-3 rounded m-3 main-bg-gray-color" @click="saleDetail(sale.id)">
								<itemTop :pic="'/static/images/icon1.png'" :name="sale.cat_name" isBorder />
								<view class="item-body my-3 d-flex a-center j-sb">
									<image :src="sale.images" mode="" class="rounded"></image>
									<view class="content ml-3">
										<text class="d-block main-text-30">{{sale.goods_name}}</text>
										<text class="bg-white px-1 rounded main-text-24">{{sale.spe}}</text>
									</view>
									<view class="item-body-re d-flex a-end flex-column">
										<price :sizeNumber="36" :priceValue="sale.price" />
										<count :sizeBol="30" :sizeNumber="36" :countValue="sale.goods_num" />
									</view>
								</view>
								<view class="main-text-color font-weight rounded text-right btn main-text-30">{{sale.status_desc}}</view>
							</view>
						</block>
					</template>
					<!-- 没有数据 -->
					<no-thing v-else msg="没有数据"></no-thing>
					<view class="d-flex j-center a-center pt-3" v-if="item.list.length > 0">
						<text class="font-md text-light-muted">{{item.loadtext}}</text>
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
	import noThing from "@/components/no-thing/no-thing"
	export default {
		data() {
			return {
				scrollTop: 0,
				oldScrollTop: 0,
				searchVal: "",
				scrollinto: "",
				scrollH: 500,
				tabIndex: 0,
				tabBars: [
					{
						status: "",
						name: "售后申请"
					},
					{
						status: 0,
						name: "未处理"
					},
					{
						status: 1,
						name: "处理中"
					},
					{
						status: 2,
						name: "已完成"
					}
				],
				newsitems: []
			}
		},
		components: {
			itemTop,
			price,
			count,
			noThing
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
			this.__init();
		},
		methods: {
			__init() {
				this.$H.post('User/alterSalesList', {
					"keywords": this.searchVal,
					"p": 1, 
					"status": this.tabBars[this.tabIndex].status,
					"token": this.$store.state.user.token,
				}).then((res) => {
					// 根据顶部选项卡生成页面
					let arr = []
					for (var i = 0; i < this.tabBars.length; i++) {
						let obj = {
							list:[],
							// 1.加载更多 2.加载中... 3.没有更多了
							loadtext:"加载更多",
						}
						if (i === this.tabIndex) {
							obj.list = res.data.alterSalesList;
							obj.loadtext = res.data.alterSalesList.length < 6 ? '没有更多了' : '加载更多';
						}
						arr.push(obj)
					}
					this.newsitems = arr;
				})
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
				let data = await this.$H.post('User/alterSalesList',{
					"keywords": this.searchVal,
					"p": page, 
					"status": this.tabBars[this.tabIndex].status,
					"token": this.$store.state.user.token,
				})
				
				// 请求完数据
				if (page === 1) obj.firstLoad = '加载更多';
				
				if (data.data.alterSalesList) {
					// 赋值
					obj.list = !refresh ? [...obj.list,...data.data.alterSalesList] : data.data.alterSalesList
					obj.loadtext = data.data.alterSalesList.length < 6 ? '没有更多了' : '加载更多'
				}
				// 执行回调函数
				if (typeof callback === 'function') {
					callback()
				}
			},
			// 加载更多
			loadmore(index){
				let item = this.newsitems[index];
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
			// 切换选项卡
			changeTab(index) {
				if (this.tabIndex === index) return;
				this.tabIndex = index;
				this.scrollinto = 'tab' + index;
				let item = this.newsitems[index];
				// 是否处于可加载状态
				if (item.loadtext !== '加载更多') return;
				this.addData();
				this.scrollTop = this.oldScrollTop;
				this.$nextTick(() =>{
					this.scrollTop = 0
				});
			},
			// 监听滑动列表
			onChangeTab(e) {
				this.changeTab(e.detail.current);
				
			},
			// 申请售后
			// sale(order_id, goods_id, order_status) {
			// 	if(order_status == 6) {
			// 		uni.showToast({
			// 			title: "该商品已在售后中",
			// 			icon: "none"
			// 		})
			// 	} else {
			// 		uni.navigateTo({
			// 			url: `../after-sale-type/after-sale-type?orderId=${order_id}&goodsId=${goods_id}`
			// 		})
			// 	}
			// },
			// 售后详情
			saleDetail(id) {
				uni.navigateTo({
					url: `../after-sale-status/after-sale-status?id=${id}&title=${this.tabBars[this.tabIndex].name}`
				})
			},
			goScroll(e) {
				this.oldScrollTop = e.detail.scrollTop;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.after-sale{
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
				.item-body-re {
					.btn {
						width: 156rpx;
					}
				}
			}
		}
	}
</style>
