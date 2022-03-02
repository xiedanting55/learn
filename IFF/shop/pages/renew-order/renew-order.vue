<template>
	<view class="renew-order">
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
			<view class=" mt-3 mx-3 renew-list rounded main-bg-gray-color">
				<view class="item p-3 border-bottom">
					<text class="font-weight my-3 main-text-30">新品</text>
					<view class="item-body my-3 d-flex a-center j-sb">
						<image :src="list.newgoods.images" mode="" class="rounded"></image>
						<view class="content ml-3">
							<text class="d-block main-text-30">{{list.newgoods.goods_name}}</text>
							<text class="bg-white px-1 rounded main-text-24" v-if="list.newgoods.goodssize !== ''">{{list.newgoods.colorname}}</text>
							<text class="d-block mt-3 main-text-24">产品编码：{{list.newgoods.goods_sn}}</text>
						</view>
						<view class="item-body-re">
							<price :sizeNumber="36" :priceValue="list.newgoods.price" />
							<count :sizeBol="30" :sizeNumber="36" :countValue="list.newgoods.count" />
						</view>
					</view>
				</view>
				<view class="item p-3 border-bottom">
					<text class="font-weight my-3 main-text-30">旧品</text>
					<view class="item-body my-3 d-flex a-center j-sb">
						<image :src="list.oldgoods.images" mode="" class="rounded"></image>
						<view class="content ml-3">
							<text class="d-block main-text-30">{{list.oldgoods.goods_name}}</text>
							<text class="bg-white px-1 rounded main-text-24" v-if="list.oldgoods.goodssize !== ''">{{list.oldgoods.colorname}}</text>
							<text class="d-block mt-3 main-text-24">产品编码：{{list.oldgoods.goods_sn}}</text>
						</view>
						<view class="item-body-re">
							<price :sizeNumber="36" :priceValue="list.oldgoods.price" />
							<count :sizeBol="30" :sizeNumber="36" :countValue="list.oldgoods.count" />
						</view>
					</view>
				</view>
				<view class="item-all d-flex j-sb p-3">
					<view class="d-flex a-center">
						<text class="main-text-color font-weight main-text-30">总共</text>
						<text class="main-text-color font-weight main-text-24">（{{list.count}}件）</text>
					</view>
					<view class="item-all-re d-flex a-center">
						<text class="text2 main-text-30">换新金额：</text>
						<price :sizeNumber="36" :priceValue="list.price" />
					</view>
				</view>
			</view>
			<view class="m-3 d-flex a-center j-center">
				<label @click="agree">
					<checkbox :checked="radioCheck" color="#00332A" /><text style="text-decoration: underline;" @click.stop="renewAgree">我同意《以旧换新协议》</text>
				</label>
			</view>
			<!-- <view class="line d-flex a-center j-sb ml-3 mr-4 my-1">
				<text class="font-weight main-text-24">发票</text>
				<view class="line-re d-flex a-center j-center">
					<text class="font-weight mr-1 main-text-24">不需要发票</text>
					<view class="arrow arrow-right"></view>
				</view>
			</view> -->
			<view class="line d-flex a-center j-sb ml-3 mr-4 my-1">
				<text class="font-weight main-text-24">订单备注</text>
				<view class="line-re d-flex a-center j-center col-8">
					<input type="text" v-model="userNote" class="font-weight mr-1 main-text-24 text-right w-100" placeholder="请输入备注信息" />
					<!-- <text class="font-weight mr-1 main-text-24">无备注</text> -->
					<view class="arrow arrow-right"></view>
				</view>
			</view>
			<view class="line d-flex a-center j-sb ml-3 mr-4 my-1">
				<text class="font-weight main-text-24">商品总额</text>
				<price :sizeBol="20" :sizeNumber="24" :mainTextColor="'#4a4a4a'" :priceValue="list.price" />
			</view>
			<view class="line d-flex a-center j-sb ml-3 mr-4 my-1">
				<text class="font-weight main-text-24">运费</text>
				<price :sizeBol="20" :sizeNumber="24" :mainTextColor="'#4a4a4a'" :priceValue="list.post_fee" />
			</view>
		</view>
		<cover-view class="position-fixed bottom-0 left-0 w-100" style="z-index: 1;">
			<button class="main-bg-color text-white rounded-4 main-text-30 font-weight" @click="sendOrder">提交订单</button>
		</cover-view>
	</view>
</template>

<script>
	import price from "@/components/price/price"
	import count from "@/components/count/count"
	import addressItem from "@/components/address-item/address-item"
	export default {
		data() {
			return {
				addressList: [],
				radioCheck: false,
				oldId: "",
				goodsId: "",
				specId: "",
				userNote: "",
				list: {}
			}
		},
		components: {
			price,
			count,
			addressItem
		},
		onLoad(option) {
			if(option.oldId && option.goodsId) {
				this.oldId = option.oldId;
				this.goodsId = option.goodsId;
				this.specId = option.spec_id;
				this.__init();
			}
		},
		onShow() {
			this.addressList = [];
			const pages = getCurrentPages();
			var currPage = pages[pages.length - 1];
			if(currPage.data.addressData) {
				this.addressList.push(currPage.data.addressData);
			}
		},
		methods: {
			__init(oldId, goodsId) {
				this.$H.post('Order/checkRenewOrder', {
					old_id: this.oldId,
					goods_id: this.goodsId,
					spec_id: this.specId,
					token: this.$store.state.user.token
				}).then((res) => {
					this.list = res.data;
				})
			},
			linkTo() {
				uni.navigateTo({
					url: "../address/address?status=true"
				})
			},
			agree() {
				this.radioCheck = !this.radioCheck;
			},
			renewAgree() {
				uni.navigateTo({
					url: "../renew-agree/renew-agree"
				})
			},
			sendOrder() {
				if (this.addressList.length === 0) {
					uni.showToast({
						title: "请先选择地址再提交换新订单",
						icon: "none"
					})
					return;
				}
				if(!this.radioCheck) {
					uni.showToast({
						title: "请勾选以旧换新协议",
						icon: "none"
					});
					return;
				} else {
					this.$H.post('Order/submitRenewOrder', {
						old_id: this.oldId,
						goods_id: this.goodsId,
						spec_id: this.specId,
						address_id: this.addressList[0].id,
						user_note: this.userNote,
						token: this.$store.state.user.token
					}).then((res) => {
						if(res.code === '0000') {
							if(res.is_pay == 1) {
								uni.showToast({title: res.msg});
								this.getWXPay(res.result, res.order_sn);
							} else {
								uni.showToast({title: res.msg,icon: "none"})
								setTimeout(()=>{
									uni.reLaunch({
										url: "../my-order/my-order?id=0"
									})
								},1500)
							}
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
			}
		}
	}
</script>
<style>
	/* #ifdef APP-PLUS ||MP-WEIXIN */
	checkbox .wx-checkbox-input {
			border-radius: 50% !important;
			color: #ffffff !important;
		}
	
		checkbox .wx-checkbox-input.wx-checkbox-input-checked {
			color: #fff;
			background: #00332A;
		}
	
		.wx-checkbox-input.wx-checkbox-input-checked {
			border-color: #00332A !important;
		}
	/* #endif */
	page {
		height: 100vh;
		overflow: hidden;
	}
	.scroll-line{
		height: calc(100vh - 100rpx);
		overflow-y: scroll !important;
	}
</style>
<style lang="scss" scoped>
	.renew-order {
		.add-addr {
			image {
				width: 42rpx;
			}

			text {
				color: #3f3f3f;
			}
		}
		.renew-list {
			.item {
				border-bottom-color: #fff;
				.item-body {
					image {
						width: 175rpx;
						height: 175rpx;
					}
					.content {
						width: 330rpx;
					}
				}
			}
		}
	}
</style>
