<template>
	<view class="coupon" style="height: 100vh;display: flex;flex-direction: column;">
		<scroll-view scroll-x class="border-bottom scroll-row mx-3" style="height: 80rpx;" :scroll-into-view="scrollinto" :scroll-with-animation="true">
			<view class="scroll-row-item px-3" @click="changeTab(index)" style="height: 72rpx;line-height: 80rpx;" v-for="(item,index) in tabBars" :key="index" :class="tabIndex === index ? 'active':''" :id="'tab'+index">
				<text class="font-md">{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper :duration="150" :current="tabIndex" style="flex: 1;" @change="onChangeTab">
			<swiper-item v-for="(item,index) in newsitems" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmore(index)" :show-scrollbar="false">
					<template v-if="item.list.length > 0">
							<view class="mx-3">
								<view v-for="(coupon, couponIndex) in item.list" :key="coupon.id" @click="linkTo(coupon)">
									<itemTop :pic="'/static/images/icon1.png'" :name="coupon.name" />
									<view class="d-flex a-center j-sb mb-3">
										<label v-if="tabIndex == 0 && status" class="radio d-flex a-center j-center flex-shrink" style="width: 80upx;height: 80upx;" @click.stop="selectItem(coupon.id)">
											<radio color="#00332a" :value="coupon.id | toString" :checked="coupon.selected" :disabled="status && coupon.can_use !== 1" />
										</label>
										<view class="coupon-list d-flex a-center j-sb pr-3 position-relative" :class="tabIndex == 0 && status ? 'wid' : ''">
											<view class="bg position-absolute left-0 top-0 w-100 rounded" v-if="status && coupon.can_use !== 1"></view>
											<view class="d-flex flex-column a-center j-center">
												<price :sizeBol="40" :sizeNumber="50" :priceValue="coupon.money" />
												<text class="text-center main-bg-color text-white rounded-4 main-text-20 px-2">店铺优惠券</text>
											</view>
											<view class="d-flex flex-column row2">
												<text class="main-text-color main-text-30">满{{coupon.condition}}可用</text>
												<text class="main-text-24">距到期仅剩{{coupon.tetime}}天</text>
											</view>
											<text class="text2 d-block main-bg-color text-white rounded-4 text-center main-text-30">{{coupon.order_id == 0 ? '未使用' : '已使用'}}</text>
										</view>
									</view>
								</view>
							</view>
					</template>
					<!-- 没有数据 -->
					<no-thing v-else msg="没有数据"></no-thing>
					<view class="d-flex j-center a-center pt-3" v-if="item.list.length > 0">
						<text class="font-md text-light-muted">{{item.loadtext}}</text>
					</view>
					<view v-if="item.list.length > 0 && tabIndex == 0 && status" class="position-fixed btn d-flex a-center j-center main-bg-color rounded-4" hover-class="main-bg-hover-color" @click="confirm">
						<text class="text-white font-weight ml-1 main-text-30">确认优惠券</text>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import itemTop from "@/components/item-top/item-top"
	import price from "@/components/price/price"
	import noThing from "@/components/no-thing/no-thing"
	export default {
		data() {
			return {
				status: false,
				couponList: [],
				tabIndex: 0,
				scrollH: 0,
				scrollinto: "",
				tabBars: [
					{
						name: "全部",
						type: ""
					},
					{
						name: "已使用",
						type: 1
					},
					{
						name: "已过期",
						type: 2
					},
				],
				newsitems: []
			}
		},
		components: {
			itemTop,
			price,
			noThing
		},
		onLoad(option) {
			if(Object.keys(option).length > 0) {
				this.status = option.status;
				this.couponList = JSON.parse(option.couponList);
			}
			// 获取可视区域高度
			uni.getSystemInfo({
				success: (res) => {
					this.scrollH = res.windowHeight - res.statusBarHeight/2 - uni.upx2px(80);
				}
			})
			this.__init();
		},
		filters: {
			statusFilter(val) {
				let obj = {
					1: "已使用",
					2: "已过期"
				}
				return obj[val]
			},
			toString(value) {
				return value.toString();
			}
		},
		methods: {
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
			// 监听滑动列表
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			__init() {
				let obj = {};
				if(!this.status) {
					obj = {"p": 1, "type": this.tabBars[this.tabIndex].type,"token": this.$store.state.user.token}
				} else {
					obj = {"act":"order", "p": 1, "type": this.tabBars[this.tabIndex].type,"token": this.$store.state.user.token}
				}
				this.$H.post('User/getCouponList', obj).then((res) => {
					// 根据顶部选项卡生成页面
					let arr = []
					for (var i = 0; i < this.tabBars.length; i++) {
						let obj = {
							list:[],
							// 1.加载更多 2.加载中... 3.没有更多了
							loadtext:"加载更多",
						}
						if (i === this.tabIndex) {
							obj.list = res.data.couponList.map(v=> {
								v["selected"] = false;
								return v;
							});
							obj.loadtext = res.data.couponList.length < 6 ? '没有更多了' : '加载更多';
						}
						arr.push(obj)
					}
					this.newsitems = arr;
					if(this.couponList.length > 0) {
						let {id} = this.couponList[0];
						this.newsitems[this.tabIndex].list.map(v=> {
							if(v.id === id) v.selected = true;
							return v;
						})
					}
					
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
				let data = await this.$H.post('User/getCouponList',{
					"p": page, 
					"type": this.tabBars[this.tabIndex].type,
					"token": this.$store.state.user.token,
				})
				
				// 请求完数据
				if (page === 1) obj.firstLoad = '加载更多';
				
				if (data.data.couponList) {
					// 赋值
					obj.list = !refresh ? [...obj.list,...data.data.couponList] : data.data.couponList
					obj.loadtext = data.data.couponList.length < 6 ? '没有更多了' : '加载更多'
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
			// radio单选
			selectItem(id) {
				if(this.tabIndex == 0) {
					this.newsitems[this.tabIndex].list.map(v=> {
						if(v.id === id) {
							v.selected ? v.selected = false : v.selected = true;
						} else {
							v.selected = false;
						}
						return v;
					})
				}
			},
			linkTo(coupon) {
				if(!this.status) return;
				if(this.status && coupon.can_use == 1) {
					if(this.tabIndex == 0) {
						this.newsitems[this.tabIndex].list.map(v=> {
							if(v.id === coupon.id) {
								v.selected ? v.selected = false : v.selected = true;
							} else {
								v.selected = false;
							}
							return v;
						})
					}
				} else {
					uni.showToast({
						title: "该优惠卷不可使用",
						icon: "none"
					})
				}
			},
			confirm() {
				if(this.status) {
					let coupon = this.newsitems[this.tabIndex].list.filter(v => v.selected);
					var pages = getCurrentPages();
					var prevPage = pages[pages.length - 2]; 
					let couponListData = [];
					if(coupon.length > 0) couponListData.push(coupon[0]);
					prevPage.setData({couponList: couponListData})
					uni.navigateBack({
						delta: 1
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.coupon {
		.scroll-row-item {
			&.active {
				border-bottom: 3rpx solid #00332a;
			}
		}
		.coupon-list {
			padding-left: 60rpx;
			width: 100%;
			height: 186rpx;
			background: url(../../static/images/coupon-bg.png) center center no-repeat;
			background-size: 100% 100%;
			&.wid {
				width: 610upx;
			}
			.row2 {
				text {
						&:nth-of-type(1) {
							font-size: 30rpx;
						}
						&:nth-of-type(2) {
							font-size: 24rpx;
							color: #2a2a2a;
						}
				}
			}
			.text2 {
				width: 124rpx;
				font-size: 30rpx;
			}
		}
		.bg {
			height: 100%;
			background: rgba(150,150,150,0.4);
			z-index: 1000;
			border-radius: 24rpx;
		}
		.btn {
			width: 400rpx;
			line-height: 88rpx;
			bottom: 20rpx;
			left: 50%;
			transform: translate(-50%,0);
			z-index: 1001;
		}
	}
</style>
