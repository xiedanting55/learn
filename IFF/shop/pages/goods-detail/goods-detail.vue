<template>
	<view class="goods-detail">
		<view class="scroll-line">
			<swiper indicator-dots autoplay :interval="3000" :duration="1000" circular style="height: 750rpx">
				<block v-for="(item,index) in goodsObj.images_list" :key="index">
					<swiper-item>
						<view class="swiper-item p-6">
							<image :src="item" lazy-load style="height: 630rpx; width: 630rpx;"></image>
						</view>
					</swiper-item>
				</block>
			</swiper>
			<view class="goods-info m-3 d-flex flex-column">
				<view class="ml-3">
					<text class="text1 mt-3 main-text-36">{{goodsObj.goods_name}}</text>
					<price :priceValue="goodsObj.price" />
				</view>
				<view class="goods-discout d-flex a-center rounded-4 px-3 main-bg-gray-color">
					<view class="circle rounded-circle bg-white"></view>
					<text class="ml-2 main-text-24">官方直售，顺丰速运{{freight}}元，满{{freight_free}}元免邮</text>
				</view>
				<text class="mt-2 font-weight main-text-24">商品信息</text>
				<view class="goods-text mt-2">
					<text class="main-text-24">商品名称</text>
					<text class="ml-3 main-text-24">{{goodsObj.goods_name}}</text>
				</view>
				<view class="goods-text mt-2">
					<text class="main-text-24">商品编号</text>
					<text class="ml-3 main-text-24">{{goodsObj.goods_sn}}</text>
				</view>
				<view class="goods-text mt-2">
					<text class="main-text-24">商品材质</text>
					<text class="ml-3 main-text-24">{{goodsObj.material}}</text>
				</view>
				<view class="goods-text mt-2">
					<text class="main-text-24">特别说明</text>
					<text class="ml-3 main-text-24">{{goodsObj.goods_remark}}</text>
				</view>
				<view class="goods-text mt-2">
					<text class="main-text-24">商品规格</text>
					<text class="ml-3 main-text-24">{{goodsObj.goods_size}}</text>
				</view>
			</view>
			<view class="goods-xq">
				<text class="my-2 ml-3 font-weight main-text-24 d-block">图片详情</text>
				<u-parse v-if="goodsObj.introduction" className="uparse" class="uparse"
					:content="goodsObj.introduction"></u-parse>
			</view>
			<view class="goods-ld text-center mx-3">
				<text class="font-weight main-text-30">产品亮点</text>
				<view class="goods-ld-image d-flex a-center j-sb flex-wrap mt-3">
					<image v-for="(item,index) in goodsObj.images_list" :key="index" :src="item" mode="widthFix">
					</image>
				</view>
			</view>
			<view class="goods-xlcp m-3">
				<text class="font-weight main-text-30">系列产品</text>
				<view class="cp-list d-flex a-center mt-3">
					<view class="item span24-8 d-flex a-center flex-column"
						v-for="(item,index) in goodsObj.is_recommend" :key="index" @click="linkToDetail(item)">
						<image :src="item.images"></image>
						<text class="main-text-24 text3">{{item.goods_name}}</text>
						<price :sizeNumber="24" :priceValue="item.price" />
					</view>
				</view>
			</view>
		</view>
		<view class="detail-fixed d-flex j-sb position-fixed bottom-0 left-0 w-100 bg-white border-top">

			<template v-if="oldId.length == 0">
				<view class="detail-le span-9 d-flex a-center j-sa ml-3">
					<view class="item d-flex flex-column a-center" @click="linkTo">
						<uni-badge class="uni-badge-left-margin" :text="goodsObj.cart_count" absolute="rightTop" :offset="[0, 0]" size="small" v-if="goodsObj.cart_count">
							<view class="d-flex flex-column a-center w-100">
								<image src="/static/images/car-black.png" mode="widthFix"></image>
								<text class="main-text-20">购物车</text>
							</view>
						</uni-badge>
						<template v-else>
							<image src="/static/images/car-black.png" mode="widthFix"></image>
							<text class="main-text-20">购物车</text>
						</template>
					</view>
					<button open-type="contact" class="item d-flex a-center j-center flex-column" show-message-card
						session-from send-message-path send-message-title>
						<image src="/static/images/xq_08.png" mode="widthFix"></image>
						<text class="main-text-20">顾问</text>
					</button>
					<view class="item d-flex flex-column a-center" @click="collectGoods(goodsObj.is_collect)">
						<image src="/static/images/xq_03.png" v-if="goodsObj.is_collect == 0" mode="widthFix"></image>
						<image src="/static/images/xq_03_active.png" v-else mode="widthFix"></image>
						<text class="main-text-20">收藏</text>
					</view>
				</view>
				<view class="detail-re d-flex a-center j-center mr-3">
					<view class="add-cart text-center" hover-class="bg-light-secondary" @click="add">加入购物车</view>
					<view class="main-bg-color font-weight text-white text-center pay" @click="pay">立即支付</view>
				</view>
			</template>
			<template v-else>
				<view class="main-bg-color font-weight text-white text-center pay flex-1 rounded-4 my-1"
					style="line-height: 100rpx;" hover-class="bg-light-secondary" @click="goRenew">去换新</view>
			</template>
		</view>
		<!-- 属性筛选框 -->
		<common-popup :popupClass="popup.attr" @hide="hide('attr')">
			<view class="d-flex a-center my-3 popup-top">
				<image :src="goodsObj.images" mode="widthFix" style="height: 180rpx;width: 180rpx;"
					class="border rounded"></image>
				<view class="pl-2 d-flex a-start flex-column">
					<text>{{goodsObj.goods_name}}</text>
					<price :priceValue="goodsObj.spec_price"></price>
				</view>
			</view>
			<scroll-view scroll-y class="w-100" style="height: 270rpx;">
				<view class="item popup-box">
					<template v-if="goodsObj.spec_list.length > 0">
						<block v-for="(item,index) in goodsObj.spec_list" :key="index">
							<view class="item-line">
								<text class="d-block main-text-30">{{item.spec_name}}</text>
								<view class="item-content d-flex a-center flex-wrap">
									<text class="d-block spec-item py-1 px-2 mt-1 mr-2 main-text-24"
										v-for="(spec,specIndex) in item.spec_list" :key="specIndex"
										:class="spec.select == 1 ? 'main-bg-color text-white' : 'main-bg-gray-color'"
										@click="specChange(index, specIndex)">
										{{spec.spec_name}}
									</text>
								</view>
							</view>
							<view class="item-line mt-4" v-if="oldId.length == 0">
								<view class="item d-flex a-center">
									<text class="d-block main-text-30 mr-5">购买数量</text>
									<block v-for="(spec,specIndex) in item.spec_list" :key="specIndex">
										<template v-if="spec.num_selected == 1">
											<uni-number-box :min="1" :value="spec.goods_num" :max="spec.max_store"
												@change="changeNum($event, specIndex)"></uni-number-box>
										</template>
									</block>
								</view>
							</view>
						</block>
					</template>
					<template v-else>
						<view class="item-line mt-4" v-if="oldId.length == 0">
							<view class="item d-flex a-center">
								<text class="d-block main-text-30 mr-5">购买数量</text>
								<uni-number-box :min="1" :value="goodsObj.goods_num" :max="goodsObj.max_store"
									@change="changeNum($event)"></uni-number-box>
							</view>
						</view>
					</template>
				</view>
			</scroll-view>
			<view class="text-white font-md d-flex a-center j-center main-bg-color rounded" style="height: 100rpx;"
				hover-class="main-bg-hover-color" @tap.stop="carConfirm">{{this.oldId == '' ? '加入购物车' : '确定'}}</view>
		</common-popup>
	</view>
</template>

<script>
	import price from "@/components/price/price"
	import uParse from "@/components/uni-ui/uParse/src/wxParse"
	import commonPopup from "@/components/common-popup/common-popup"
	import uniNumberBox from "@/components/uni-ui/uni-number-box/uni-number-box"
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				status: "",
				oldId: "",
				goods_id: "",
				goodsObj: {},
				popup: {
					attr: "none",
					service: "none"
				},
			}
		},
		components: {
			price,
			uParse,
			commonPopup,
			uniNumberBox
		},
		computed: {
			...mapState({
				'freight': state => state.user.freight,
				'freight_free': state => state.user.freight_free,
			}),
		},
		onLoad(option) {
			if (option) {
				this.goods_id = option.id;
				if (option.oldId) this.oldId = option.oldId;
				this.__init(this.goods_id);
			}
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
			__init(goodsId) {
				let obj = {};
				this.$store.state.user.token ? obj = {
					goods_id: goodsId,
					token: this.$store.state.user.token
				} : obj = {
					goods_id: goodsId
				};
				this.$H.post("Goods/detail", obj).then((res) => {
					this.goodsObj = res.data.goods;
					if (this.goodsObj.spec_list.length > 0) {
						this.goodsObj.spec_list.map((v, i) => {
							v.spec_list.map((item, index) => {
								item.select == 1 ? item["num_selected"] = 1 : item["num_selected"] = 0;
								item["goods_num"] = 1;
								if (index == 0) item["num_selected"] = 1;
								return item;
							})
						});
					}
					this.goodsObj["goods_num"] = 1; //数量
					this.goodsObj["spec_price"] = this.goodsObj.spec_list.length > 0 ? this.goodsObj.spec_list[0].spec_list[0].spec_price : this.goodsObj.price; //数量
				})
			},
			linkTo() {
				uni.switchTab({
					url: "../car/car"
				})
			},
			linkToDetail(item) {
				uni.navigateTo({
					url: `../goods-detail/goods-detail?id=${item.goods_id}`
				})
			},
			// 加入购物车
			add() {
				this.status = 'add';
				if (this.goodsObj.spec_list && this.goodsObj.spec_list.length > 0) {
					this.goodsObj.spec_list[0].spec_list.map(v => {
						this.$set(v, 'num_selected', 0);
						this.$set(v, 'goods_num', 1);
					});
					this.$set(this.goodsObj.spec_list[0].spec_list[0], 'num_selected', 1);
				}
				this.popup['attr'] = 'show';
			},
			goRenew() {
				if (this.goodsObj.spec_list && this.goodsObj.spec_list.length > 0) {
					this.goodsObj.spec_list[0].spec_list.map(v => {
						this.$set(v, 'num_selected', 0);
						this.$set(v, 'goods_num', 1);
					});
					this.$set(this.goodsObj.spec_list[0].spec_list[0], 'num_selected', 1);
				}
				this.popup['attr'] = 'show';
			},
			pay() {
				this.status = 'pay';
				if (this.goodsObj.spec_list && this.goodsObj.spec_list.length > 0) {
					this.goodsObj.spec_list[0].spec_list.map(v => {
						this.$set(v, 'num_selected', 0);
						this.$set(v, 'goods_num', 1);
					});
					this.$set(this.goodsObj.spec_list[0].spec_list[0], 'num_selected', 1);
				}
				this.popup['attr'] = 'show';
				// this.$H.post("Cart/addCart", {
				// 	pay_now: 1,
				// 	goods_id: this.goods_id,
				// 	goods_spec: [],
				// 	token: this.$store.state.user.token
				// }).then(res => {
				// 	if (res.code === '0000') {
				// 		uni.navigateTo({
				// 			url: `../order-confirm/order-confirm?id=${this.goods_id}`
				// 		})
				// 	}
				// })
			},
			// 收藏
			collectGoods(is_collect) {
				is_collect == 0 ? this.goodsObj.is_collect = 1 : this.goodsObj.is_collect = 0;
				this.$H.post("Goods/collectGoods", {
					goods_id: this.goods_id,
					type: this.goodsObj.is_collect,
					token: this.$store.state.user.token
				}).then(res => {
					if (res.code === '0000') {
						if (this.goodsObj.is_collect == 1) {
							uni.showToast({
								title: res.msg
							})
						} else {
							uni.showToast({
								title: "取消收藏成功！"
							})
						}
					}
				})
			},
			hide(key) {
				this.popup[key] = 'hide'
				setTimeout(() => {
					this.popup[key] = 'none'
				}, 200);
			},
			specChange(index, specIndex) {
				this.goodsObj.spec_list[index].spec_list.map(v => {
					this.$set(v, 'select', 0);
					this.$set(v, 'num_selected', 0);
					this.$set(v, 'goods_num', 1);
				});
				this.$set(this.goodsObj.spec_list[index].spec_list[specIndex], 'select', 1);
				this.$set(this.goodsObj.spec_list[index].spec_list[specIndex], 'num_selected', 1);
				this.goodsObj.spec_price = this.goodsObj.spec_list[index].spec_list[specIndex].spec_price;
				this.$forceUpdate();
			},
			changeNum(e, specIndex) {
				if (specIndex != null) {
					this.$set(this.goodsObj.spec_list[0].spec_list[specIndex], 'goods_num', parseInt(e));
				} else {
					this.goodsObj.goods_num = parseInt(e);
				}
				this.$forceUpdate();
			},
			carConfirm() {
				let obj = {};
				if (this.goodsObj.spec_list.length == 0) {
					obj = {
						goods_id: this.goods_id,
						goods_spec: [],
						goods_num: this.goodsObj.goods_num,
						token: this.$store.state.user.token,
					}
				} else {
					let data = this.goodsObj.spec_list[0].spec_list.filter(v => v.select == 1);
					if (data.length == 0) {
						let title = this.status == 'pay' ? "请选择规格才能去支付" : "请选择规格才能加入购物车";
						uni.showToast({
							title: title,
							icon: "none"
						})
						return;
					}
					obj = {
						goods_id: this.goods_id,
						goods_spec: data[0].spec_id,
						goods_num: data[0].goods_num,
						token: this.$store.state.user.token
					}
				}
				if(this.status == 'pay')  {
					obj["pay_now"] = 1;
					this.$H.post("Cart/addCart", obj).then(res => {
						uni.navigateTo({
							url: `../order-confirm/order-confirm?id=${this.goods_id}`
						})
						this.hide('attr');
						// this.popup['attr'] = 'hide';
					})
				} else {
					if (this.oldId.length == 0) {
						this.$H.post("Cart/addCart", obj).then(res => {
							uni.showToast({
								title: res.msg
							});
							this.__init(this.goods_id);
							this.hide('attr');
							// this.popup['attr'] = 'hide';
						})
					} else {
						this.hide('attr');
						uni.navigateTo({
							url: `../renew-order/renew-order?oldId=${this.oldId}&goodsId=${this.goods_id}&spec_id=${obj.goods_spec}`
						})
					}
				}
			}
		}
	}
</script>

<style>
	page {
		height: 100vh;
		overflow: hidden;
	}

	.scroll-line {
		height: calc(100vh - 120rpx);
		overflow-y: scroll !important;
	}

	.uparse {
		overflow: hidden;
	}

	.popup-box .uni-numbox {
		background-color: #e4e4e4 !important;
		line-height: 30px !important;
	}

	.popup-box .uni-numbox__minus,
	.popup-box .uni-numbox__plus {
		width: 30px !important;
	}

	.popup-box .uni-numbox,
	.popup-box .uni-numbox__minus,
	.popup-box .uni-numbox__plus,
	.popup-box .uni-numbox__value {
		height: 30px !important;
	}
	.popup-box .uni-numbox--text{
		height: 30px !important;
		line-height: 28px !important;
	}
</style>
<style lang="scss" scoped>
	.goods-detail {
		.goods-info {
			.text1 {
				font-size: 36rpx;
			}

			.goods-discout {
				line-height: 90rpx;

				.circle {
					width: 28rpx;
					height: 28rpx;
				}
			}
		}

		.goods-text {
			line-height: 36rpx;
		}

		.goods-ld-image {
			image {
				width: 48%;

				&:nth-of-type(1) {
					width: 100%;
				}
			}
		}

		.goods-xlcp {
			.item {
				width: 220rpx;
				margin-right: 15rpx;

				&:last-of-type {
					margin-right: 0;
				}

				image {
					width: 220rpx;
					height: 220rpx;
				}

				.text3 {
					color: #2e2e2e;
				}
			}
		}

		.detail-fixed {
			border-top-color: #e4e4e4;
			height: 120rpx;

			.detail-le {
				.item {
					width: 33.33%;
				}

				image {
					width: 46rpx;
					height: 46rpx;
				}

				text {
					color: #3b3b3b;
					line-height: 40rpx;
				}
			}

			.detail-re {
				view {
					width: 210rpx;
					line-height: 80rpx;

					&.add-cart {
						background-color: #e4e4e4;
						border-radius: 40rpx 0 0 40rpx;
					}

					&.pay {
						border-radius: 0 40rpx 40rpx 0;
					}
				}
			}
		}

		.popup-top {
			image {
				border-color: #e4e4e4;
			}
		}
	}

	button {
		background: none;
		height: 100rpx;
		padding: 0 !important;

		&::after {
			border: none;
			height: 100rpx;
		}
	}
</style>
