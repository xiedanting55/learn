<template>
	<view class="order-confirm">
		<view class="scroll-line">
			<template v-if="addressList.length == 0">
				<view class="add-addr p-5 d-flex a-center j-center" @click="linkTo">
					<image src="/static/images/add-circle.png" mode="widthFix"></image>
					<text class="ml-1 font-weight main-text-30">添加收货地址</text>
				</view>
			</template>
			<template v-else>
				<view @click="linkTo">
					<block v-for="(item,index) in addressList" :key="index">
						<addressItem :item="item" :editIcon="false" :delIcon="false" />
					</block>
				</view>
			</template>
			<view class="item p-3 rounded m-3 main-bg-gray-color" v-for="(item,index) in list" :key="index">
				<itemTop :pic="'/static/images/icon1.png'" :name="item.cat_name" isBorder />
				<view class="item-body my-3 d-flex a-center j-sb">
					<image :src="item.images" mode="" class="rounded"></image>
					<view class="content ml-3">
						<text class="d-block main-text-30">{{item.goods_name}}</text>
						<view class="d-inline-block" v-if="item.spec_list">
							<view class="d-flex a-center bg-white px-1 rounded">
								<text class="main-text-24 mr-1">{{item.spe}}</text>
								<view class="arrow arrow-bottom"></view>
							</view>
						</view>
					</view>
					<view class="item-body-re">
						<price :sizeNumber="36" :priceValue="item.goods_price" />
						<count :sizeBol="30" :sizeNumber="36" :countValue="item.goods_num" />
					</view>
				</view>
			</view>
			<view class="line d-flex a-center j-sb ml-3 mr-4">
				<view>
					<text class="font-weight main-text-24">优惠券</text>
					<text class="ml-1 main-text-18 border rounded red" v-if="couponList.length > 0">已选{{couponList.length}}张</text>
				</view>
				<view class="line-re d-flex a-center j-center" @click="linkCoupon">
					<text class="font-weight mr-1 main-text-24">
						<template v-if="coupon_can_use > 0">{{coupon_can_use}}张可用</template>
						<template v-else>暂无可选优惠券</template>
					</text>
					<view class="arrow arrow-right"></view>
				</view>
			</view>
			<view class="line d-flex a-center j-sb ml-3 mr-4">
				<text class="font-weight main-text-24">发票</text>
				<view class="line-re d-flex a-center j-center" @click="invoicePop">
					<text class="font-weight mr-1 main-text-24">{{chooseText}}</text>
					<view class="arrow arrow-right"></view>
				</view>
			</view>
			<view class="line d-flex a-center j-sb ml-3 mr-4">
				<text class="font-weight main-text-24">订单备注</text>
				<view class="line-re d-flex a-center j-center text-right">
					<input type="text" v-model="user_note" class="font-weight mr-1 main-text-24" placeholder="请输入备注" />
					<view class="arrow arrow-right"></view>
				</view>
			</view>
			<view class="line d-flex a-center j-sb ml-3 mr-4">
				<text class="font-weight main-text-24">商品总额</text>
				<price :sizeBol="20" :sizeNumber="24" :mainTextColor="'#4a4a4a'" :priceValue="total_fee" />
			</view>
			<view class="line d-flex a-center j-sb ml-3 mr-4">
				<text class="font-weight main-text-24">促销优惠</text>
				<view class="line-re d-flex a-center j-center">
					<price :sizeBol="20" :sizeNumber="24" :mainTextColor="'#4a4a4a'" :priceValue="cut_fee" />
				</view>
			</view>
			<view class="line d-flex a-center j-sb ml-3 mr-4">
				<text class="font-weight main-text-24">运费</text>
				<price :sizeBol="20" :sizeNumber="24" :mainTextColor="'#4a4a4a'" :priceValue="post_fee" />
			</view>
			<view class="line d-flex a-center j-sb ml-3 mr-4">
				<view class="line-le">
					<text class="font-weight main-text-color main-text-30">合计</text>
					<text class="main-text-color main-text-24">(共{{num}}件)</text>
				</view>
				<price :sizeNumber="36" :priceValue="total" />
			</view>
		</view>
		<view class="main-bg-color text-white position-fixed bottom-0 left-0 w-100 send font-weight rounded-4 text-center main-text-30" @click="order">支付订单</view>
		<uni-popup ref="popup" background-color="#fff" type="bottom">
			<radio-group @change="radioChange">
				<label class="uni-list-cell d-flex a-center j-sb mx-3 border-bottom" v-for="(item, index) in choseList" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === current" color="#00332A" />
					</view>
					<view class="ml-1">{{item.name}}</view>
				</label>
			</radio-group>
			<view class="main-bg-color text-white w-100 send font-weight rounded-4 text-center main-text-30 mt-2" @click="chooseConfirm(total_fee)">确认</view>
		</uni-popup>
	</view>
</template>

<script>
	import itemTop from "@/components/item-top/item-top"
	import price from "@/components/price/price"
	import count from "@/components/count/count"
	import addressItem from "@/components/address-item/address-item"
	import {mapState} from "vuex"
	export default {
		data() {
			return {
				addressList: [],
				couponList: [],
				invoiceObj: {},
				choseConfirm: false,
				choseList: [{
						value: 0,
						name: '否',
						checked: true
					},
					{
						value: 1,
						name: '个人'
					},
					{
						value: 2,
						name: '企业'
					}
				],
				chooseText: "否",
				current: 0,
				radioChangeCode: 0,
				user_note: "",
				list: [],
				allList: [],
				cut_fee: "",
				num: "",
				total_fee: "",
				total: "",
				post_fee: "",
				coupon_count: "",  //优惠卷数量
				coupon_can_use: "", //优惠卷是否可选
			}
		},
		components: {
			itemTop,
			price,
			count,
			addressItem
		},
		computed: {
			...mapState({
				'freight':state=>state.user.freight,
				'freight_free':state=>state.user.freight_free,
			}),
		},
		onLoad(option) {
			this.__init();
		},
		onShow() {
			const pages = getCurrentPages();
			var currPage = pages[pages.length - 1];
			if(currPage.data.addressData) {
				this.addressList = [];
				this.addressList.push(currPage.data.addressData);
			}
			if(currPage.data.couponList.length > 0) {
				this.couponList = currPage.data.couponList;
				this.cut_fee = this.couponList[0].money;
				this.total = (parseFloat(this.total_fee) - parseFloat(this.cut_fee) - parseFloat(this.post_fee)) < 0 ? 0 : (parseFloat(this.total_fee) - parseFloat(this.cut_fee) - parseFloat(this.post_fee));
			} else {
				this.couponList = [];
				this.cut_fee = 0;
				this.total = this.total_fee;
			}
			if(Object.keys(currPage.data.invoiceObj).length == 0) {
				this.chooseText = "否";
				this.current = 0;
				this.radioChangeCode = 0;
				this.choseConfirm = false;
			} else {
				this.invoiceObj = currPage.data.invoiceObj;
			}
		},
		methods: {
			__init() {
				let goodsNumObj = {},goodsCartObj = {};
				this.allList.forEach(v => {
					goodsNumObj[v.cart_id] = v.goods_num;
					goodsCartObj[v.cart_id] = v.selected;
				})
				this.$H.post('Cart/cartList', {
					post_goods_num: JSON.stringify(goodsNumObj), //商品数量
					post_cart_select: JSON.stringify(goodsCartObj),
					token: this.$store.state.user.token,
				}).then((res) => {
					let {cart_list, cut_fee, num, total_fee, post_fee, address, coupon_count, coupon_can_use} = res.data;
					this.list = cart_list.filter(v=> v.selected == 1);
					this.allList = cart_list;
					this.cut_fee = cut_fee;
					this.num = num;
					this.total_fee = total_fee;
					this.total = total_fee;
					this.post_fee = post_fee;
					this.coupon_count= coupon_count;
					this.coupon_can_use= coupon_can_use;
					address instanceof Array ? this.addressList : this.addressList.push(address);
				})
			},
			// 是否需要发票
			invoicePop() {
				this.current = this.choseList.length;
				this.$refs.popup.open();
			},
			radioChange(e) {
				this.radioChangeCode = e.detail.value;
			},
			// 选择发票类型
			chooseConfirm(total) {
				this.choseConfirm = true;
				if(this.choseConfirm) {
					let data = this.choseList.filter(v=> v.value == this.radioChangeCode);
					if(data.length>0) {
						this.chooseText = data[0].name;
						if(this.chooseText == '个人' || this.chooseText == '企业') {
							let type;
							this.chooseText == '个人' ? type = 1 : type = 2;
							uni.navigateTo({
								url: `../invoice/invoice?order=true&type=${type}&price=${total}`
							})
						}
					}
				} else {
					this.chooseText = "请选择";
				}
				this.$refs.popup.close();
			},
			// 跳转选择优惠卷
			linkCoupon() {
				if(this.coupon_can_use > 0) {
					uni.navigateTo({
						url: `../coupon/coupon?status=true&couponList=${JSON.stringify(this.couponList)}`
					})
				} else {
					uni.showToast({
						title: "暂无可选优惠卷",
						icon: "none"
					})
				}
			},
			linkTo() {
				uni.navigateTo({
					url: "../address/address?status=true"
				})
			},
			order() {
				if (this.addressList.length === 0) {
					uni.showToast({
						title: "请先选择地址再提交订单",
						icon: "none"
					})
					return;
				} else {
					this.$H.post('Order/submit', {
						address_id: this.addressList[0].id, //地址id
						coupon_id: this.couponList.length > 0 ? this.couponList[0].id : "",  //优惠卷id
						user_note: this.user_note,
						invoice_title: this.chooseText == '否' ? "" : this.invoiceObj.invoice_title,	//发票抬头
						invoice_code: this.chooseText == '否' ? "" : this.invoiceObj.invoice_code,	//公司统一信用代码（如有）
						invoice_remark: this.chooseText == '否' ? "" : this.invoiceObj.invoice_remark,	//备注
						invoice_type: this.invoiceObj.invoice_type,	//发票类型
						invoice_title_type: this.invoiceObj.invoice_title_type,	//0个人，1企业
						token: this.$store.state.user.token,
					}).then((res) => {
						if (res.code === '0000') {
							uni.showToast({title: res.msg});
							this.getWXPay(res.result, res.order_sn);
						} else {
							uni.showToast({
								title: res.msg,
								icon: "none"
							})
						}
					})
				}
			},
			// 支付
			getWXPay(orderId, orderSn) {
				this.$H.post('Order/getWXPayData', {
					order_id: orderId,
					token: this.$store.state.user.token,
				}).then((res) => {
					if (res.code === '0000') {
						let {appId, nonceStr, signType, timeStamp, sign} = res.result.wdata;
						uni.requestPayment({
							"appId": appId,
							"nonceStr": nonceStr, //　　随机字符串
							"package": res.result.wdata.package, //　　统一下单接口 
							"signType": signType, //　　签名算法 
							"timeStamp": String(timeStamp), //　　时间戳 
							"paySign": sign, 
							success: data => {
								uni.showModal({
									title:"提示",
									content: "支付成功"
								})
								setTimeout(()=> {
									uni.switchTab({
										url: "../goods/goods"
									})
								},2000)
							},
							fail: err => {
								uni.reLaunch({
								    url: `../nopay-status/nopay-status?orderSn=${orderSn}`
								});
							}
						});
			
					} else {
						uni.showToast({
							title: res.msg,
							icon: "none"
						})
					}
				})
			},
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
</style>
<style lang="scss" scoped>
	.order-confirm {
		.add-addr {
			image {
				width: 42rpx;
			}

			text {
				color: #3f3f3f;
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
			}
		}

		.send {
			line-height: 88rpx;
		}

		.line {
			line-height: 70rpx;
			text {
				color: #4a4a4a;
			}
		}
		
		.uni-list-cell {
			line-height: 100rpx;
			border-bottom-color: #e4e4e4;
			flex-direction: row-reverse !important;
		}
		.red {
			color: #ff0000 !important;
			border-color: #ff0000;
			padding: 3rpx 4rpx;
		}
	}
</style>
