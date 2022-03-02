<template>
	<view class="car">
		<view class="car-scroll position-relative">
			<!-- 购物车商品列表 -->
			<view class="car-list" v-if="list.length > 0">
				<view class="item p-3 m-3 rounded main-bg-gray-color" v-for="(item, index) in list" :key="index" @click="linkTo(item)">
					<item-top :pic="'/static/images/icon1.png'" :name="item.cat_name" isBorder>
						<template slot="right">
							<view @click.stop="del(item, index)">删除</view>
						</template>
					</item-top>
					<view class="d-flex a-center mt-2">
						<label class="radio d-flex a-center j-center flex-shrink" style="width: 80upx;height: 80upx;"
							@click.stop="selectItem(index)">
							<radio color="#00332a" :value="item.cart_id|toString"
								:checked="item.selected | selectedStatus" />
						</label>
						<image :src="item.images" mode="widthFix" class="rounded"></image>
						<view class="flex-1 d-flex flex-column pl-2">
							<view class="main-text-30">{{item.goods_name}}</view>
							<view class="mb-1" v-if="item.spec_list">
								<view class="bg-white rounded px-1 d-inline-block" @click.stop="specChangeItem(item)">
									<text class="mr-2 main-text-24">{{item.spe}}</text>
									<view class="arrow arrow-bottom d-inline-block" v-if="item.spec_list" style="margin-bottom: 6rpx;"></view>
								</view>
							</view>
							<view class="mt-auto d-flex j-sb a-center">
								<price :sizeNumber="36" :priceValue="item.goods_price" />
								<uni-number-box :min="1" :value="item.goods_num" :max="item.max_store"
									@change.stop="changeNum($event, item, index)"></uni-number-box>
							</view>
						</view>
					</view>
				</view>
			
				<view class="tuijian text-center py-3 mx-3">
					<view class="title d-flex a-center j-sb">
						<image src="/static/images/tuijian1.png" mode="widthFix"></image>
						<text class="d-block main-text-30">为您推荐</text>
						<image src="/static/images/tuijian2.png" mode="widthFix"></image>
					</view>
					<view class="d-flex a-center j-sb mt-3">
						<view class="tuijian-item d-flex flex-column a-start" v-for="(item,index) in is_recommend" :key="index" @click="linkTo(item)">
							<image :src="item.images"></image>
							<text class="text4 mt-1 main-text-24">{{item.goods_name}}</text>
							<text class="text4 main-text-20" style="margin-bottom: -12rpx;">{{item.spe}}</text>
							<view class="d-flex a-center">
								<price :priceValue="item.price" />
								<text class="text5 ml-2 main-text-18">{{item.sales_sum}}人购买</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 购物车为空 -->
			<view class="empty d-flex a-center j-center flex-column position-absolute" v-else>
				<image src="/static/images/car.png" mode="widthFix"></image>
				<text class="mt-3 main-text-28">您的购物车是空的</text>
				<text class="main-bg-color text-center text-white mt-2 px-3 py-1 main-text-30 rounded-4" @click="goShopping">继续购物</text>
			</view>
		</view>
		<!-- 合计 -->
		<view class="count d-flex a-center j-sb position-fixed left-0 right-0 px-3 main-bg-gray-color" style="z-index: 1000;"  v-if="list.length != 0">
			<label class="radio d-flex a-center j-sb flex-shrink" style="width: 120upx;" @click="doSelectAll">
				<radio color="#00332a" :checked="checkedAll" :disabled="disableSelectAll" />
				<text class="main-text-30">全选</text>
			</label>
			<view class="d-flex a-center j-sb">
				<view class="d-flex a-center j-center flex-column">
					<view class="d-flex a-center j-center">
						<text class="main-text-30 font-weight">合计：</text>
						<price :sizeNumber="36" :priceValue="total_fee" />
					</view>
				</view>
				<view class="d-flex a-center j-center bg-white rounded-4 ml-2 btn" style="height: 100%;" v-if="disableSelectAll || num == 0"> 结算({{num}})</view>
				<view class="d-flex a-center j-center main-bg-color text-white rounded-4 ml-2 btn" hover-class="main-bg-hover-color" style="height: 100%;" @click="count" v-else> 结算({{num}})</view>
			</view>
		</view>
		<common-popup :popupClass="popup.attr" @hide="hide('attr')">
			<view class="d-flex a-center my-3 popup-top">
				<image :src="popup.item.images" mode="widthFix" style="height: 180rpx;width: 180rpx;" class="border rounded"></image>
				<view class="pl-2 d-flex a-start flex-column">
					<text>{{popup.item.goods_name}}</text>
					<price :priceValue="popup.item.spec_price"></price>
				</view>
			</view>
			<scroll-view scroll-y class="w-100" style="height: 270rpx;">
				<view class="item popup-box">
					<template v-if="popup.item.spec_list.length > 0">
						<block v-for="(item,index) in popup.item.spec_list" :key="index">
							<view class="item-line">
								<text class="d-block main-text-30">{{item.spec_name}}</text>
								<view class="item-content d-flex a-center flex-wrap">
									<text class="d-block spec-item py-1 px-2 mt-1 mr-2 main-text-24" v-for="(spec,specIndex) in item.spec_list" :key="specIndex" :class="spec.selected == 1 ? 'main-bg-color text-white' : 'main-bg-gray-color'" @click="specChange(index, specIndex)">
										{{spec.spec_name}}
									</text>
								</view>
							</view>
						</block>
					</template>
				</view>
			</scroll-view>
			<view class="text-white font-md d-flex a-center j-center main-bg-color rounded" style="height: 100rpx;" hover-class="main-bg-hover-color" @tap.stop="carConfirm">加入购物车</view>
		</common-popup>
		<tabbar :current="1" v-if="tabbarShow"></tabbar>
	</view>
</template>

<script>
	import tabbar from '@/components/tabbar/tabbar'
	import itemTop from "@/components/item-top/item-top"
	import price from "@/components/price/price"
	import uniNumberBox from "@/components/uni-ui/uni-number-box/uni-number-box"
	import {
		mapState,
		mapGetters,
		mapActions,
		mapMutations
	} from "vuex"
	export default {
		data() {
			return {
				tabbarShow: true,
				list: [],
				cut_fee: 0, //当前选中商品的总优惠金额
				num: 0, //选中商品的总数
				total_fee: 0, //总花费商品金额
				is_recommend: [],
				popup:{
					attr:"none",
					service:"none",
					item: {}
				},
			}
		},
		components: {
			tabbar,
			itemTop,
			price,
			uniNumberBox
		},
		filters: {
			toString(value) {
				return value.toString();
			},
			selectedStatus(value) {
				if (value == 1) {
					return true
				}
				return false
			}
		},
		computed: {
			checkedAll() {
				if (this.list.length > 0) {
					let data = this.list.filter(v => v.selected == 0);
					if (data.length > 0) {
						return false
					} else {
						return true;
					}
				}
			},
			disableSelectAll() {
				return this.list.length === 0;
			}
		},
		onShow() {
			this.__init('parmas');
		},
		// 监听页面返回事件
		onBackPress() {
			// 关闭模态框
			for (let key in this.popup) {
				if (this.popup[key] !== 'none') {
					this.hide(key)
					return true
				}
			}
		},
		methods: {
			changeNum(e, item, index) {
				if (item.goods_num === e) return;
				this.list.map(v => {
					if (v.cart_id === item.cart_id) v.goods_num = parseInt(e);
					return v;
				})
				this.__init();
			},
			__init(parmas) {
				let goodsNumObj = {},
					goodsCartObj = {};
				if(!parmas) {
					if(this.list.length > 0) {
						this.list.forEach(v => {
							goodsNumObj[v.cart_id] = v.goods_num;
							goodsCartObj[v.cart_id] = v.selected;
						})
					}
				}
				this.$H.post('Cart/cartList', {
					post_goods_num: JSON.stringify(goodsNumObj), //商品数量
					post_cart_select: JSON.stringify(goodsCartObj), //商品是否选中
					select_all: this.checkedAll ? 1 : 0, //可不传，默认为0  传1时选中所有
					token: this.$store.state.user.token,
				}).then((res) => {
					this.list = res.data.cart_list.map(v=> {
						if(v.spec_list && v.spec_list.length > 0) {
							v["spec_price"] = v.spec_list[0].spec_list[0].spec_price;
						} else {
							v["spec_price"] = v.goods_price;
						}
						return v;
					});
					this.cut_fee = res.data.cut_fee;
					this.num = res.data.num;
					this.total_fee = res.data.total_fee;
					this.is_recommend = res.data.is_recommend;
				})
			},
			// 列表选中和取消
			selectItem(index) {
				// 之前是选中，取消选中 
				if (this.list[index].selected == 1) {
					// 取消当前商品选中状态
					this.list[index].selected = 0;
				} else {
					// 选中
					this.list[index].selected = 1;
				}
				this.__init();
			},
			doSelectAll() {
				this.checkedAll != this.checkedAll;
				if (this.checkedAll) {
					this.list.map(v => {
						v.selected = 0;
						return v;
					})
				} else {
					this.list.map(v => {
						v.selected = 1;
						return v;
					})
				}
				this.__init();
			},
			// 删除
			del(data, index) {
				let _this = this;
				uni.showModal({
					title: "提示",
					content: "是否删除该商品",
					success(res) {
						if (res.confirm) {
							_this.$H.post('Cart/delCart', {
								cart_id: data.cart_id,
								token: _this.$store.state.user.token,
							}).then((res) => {
								if (res.code === '0000') {
									_this.list.splice(index, 1);
									uni.showToast({
										title: res.msg
									});
									_this.__init();
								} else {
									uni.showToast({
										title: res.msg,
										icon: "none"
									})
								}
							})
						}
					},
				})
			},
			linkTo(item) {
				uni.navigateTo({
					url: `../goods-detail/goods-detail?id=${item.goods_id}`
				})
			},
			// 继续购物
			goShopping() {
				uni.switchTab({
					url: "../goods/goods"
				})
			},
			// 结算
			count() {
				uni.navigateTo({
					url:'../order-confirm/order-confirm'
				})
			},
			hide(key){
				this.popup[key] = 'hide'
				this.tabbarShow = true;
				setTimeout(()=>{
					this.popup[key] = 'none'
				}, 200);
			},
			specChangeItem(item) {
				this.popup.item = item;
				if(item.spec_list && item.spec_list.length > 0) {
					let data = item.spec_list[0].spec_list.filter(v=>v.selected == 1);
					if(data.length > 0) this.$set(this.popup.item, 'spec_price',data[0].spec_price)
				}
				if(this.popup.item.spec_list) {
					this.tabbarShow = false;
					this.popup['attr'] = 'show';
				} else {
					return;
				}
			},
			specChange(index, specIndex) {
				this.popup.item.spec_list[index].spec_list.map(v=> {
					this.$set(v, 'selected', 0);
					this.$set(v, 'goods_num', 1);
				});
				this.$set(this.popup.item.spec_list[index].spec_list[specIndex], 'selected', 1);
				this.popup.item.spec_price = this.popup.item.spec_list[index].spec_list[specIndex].spec_price;
				this.$forceUpdate();
			},
			carConfirm() {
				let data = this.popup.item.spec_list[0].spec_list.filter(v => v.selected == 1)
				this.$set(this.popup.item, 'spec_id', data[0].spec_id);
				this.$H.post('Cart/changeCartSpec', {
					goods_id: this.popup.item.goods_id,
					cart_id: this.popup.item.cart_id,
					spec_id: this.popup.item.spec_id,
					token: this.$store.state.user.token,
				}).then((res) => {
					this.list = res.data.cart_list.map(v=> {
						if(v.spec_list && v.spec_list.length > 0) {
							v["spec_price"] = v.spec_list[0].spec_list[0].spec_price;
						} else {
							v["spec_price"] = v.goods_price;
						}
						return v;
					});
					this.cut_fee = res.data.cut_fee;
					this.num = res.data.num;
					this.total_fee = res.data.total_fee;
					this.is_recommend = res.data.is_recommend;
					this.tabbarShow = true;
					this.popup['attr'] = 'hide';
				})
			}
		}
	}
</script>
<style>
	page {
		height: calc(100vh - 100rpx);
		/* overflow-y: scroll !important; */
	}
	.car-scroll {
		height: calc(100vh - 230rpx);
		overflow-y: scroll !important;
	}
</style>

<style lang="scss" scoped>
	.empty {
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		image {
			width: 180rpx;
		}
	}

	.car-list {
		.item {
			image {
				width: 175rpx;
				height: 175rpx;
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
				width: 335rpx;
				image {
					width: 335rpx;
					height: 335rpx;
				}
			}
		}
	}

	.count {
		bottom: 140rpx;
		height: 130rpx;
		.btn {
			width: 180rpx;
			line-height: 80rpx;
		}
	}
	
	.popup-top {
		image {
			border-color: #e4e4e4;
		}
	}
</style>
