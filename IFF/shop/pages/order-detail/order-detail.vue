<template>
	<scroll-view scroll-y class="order-detail">
		<view class="d-flex a-center j-sb mx-3 mt-3" v-if="order_info.pay_status == 0 && order_info.order_status == 0">
			<text class="font-weight main-text-30">待支付</text>
			<text class="font-sm text-light-muted">订单将在24小时后自动取消</text>
		</view>
		<!-- <template v-if="wuliu_info.data">
			<view class="py-1 mx-3 d-flex a-center j-sb border-bottom" v-if="wuliu_info.data.length > 0" style="border-color: #e4e4e4;">
				<text>{{ order_info.order_status | orderStatus}}</text>
				<view class="rounded-4 px-1 main-bg-color text-white" @click="wuliu">查看物流</view>
			</view>
		</template> -->
		<addressItem :item="address_info" :editIcon="false" :delIcon="false" />
		<view class="item-1 m-3 p-2 rounded main-bg-gray-color">
			<uni-steps :options="list" active-color="#00332a" :active="active" direction="column" />
		</view>
		<view class="item mx-3 px-3 py-2 rounded main-bg-gray-color" v-for="(goods, goodsIndex) in order_info.goods_list" :key="goodsIndex">
			<view class="item-body my-3 d-flex a-end j-sb">
				<image :src="goods.original_img" mode="" class="rounded"></image>
				<view class="content ml-3">
					<text class="d-block main-text-30">{{goods.goods_name}}</text>
					<text class="bg-white px-1 rounded main-text-24">{{goods.colorname}}</text>
					<text class="d-block main-text-color main-text-30">数量：{{goods.goods_num}}</text>
				</view>
				<view class="item-body-re">
					<price :sizeNumber="36" :priceValue="goods.goods_price" />
					<text class="text1 main-text-color text-right d-block main-text-18">共{{goods.goods_num}}件</text>
				</view>
			</view>
		</view>
		<view class="mx-3 mt-2">
			<text class="d-block main-text-30">订单信息</text>
			<view class="d-flex a-center border-bottom py-2" style="border-color: #e4e4e4;">
				<text class="pl-1 main-text-24 font-weight d-block text2">订单编号</text>
				<text class="main-text-24 pl-1">{{order_info.order_sn}}</text>
			</view>
			<view class="d-flex a-center border-bottom py-2" style="border-color: #e4e4e4;">
				<text class="pl-1 main-text-24 font-weight d-block text2">订单状态</text>
				<text class="main-text-24 pl-1">{{order_info.order_status_desc}}</text>
			</view>
			<view class="d-flex a-center border-bottom py-2" style="border-color: #e4e4e4;" v-if="order_info.invoice_no">
				<text class="pl-1 main-text-24 font-weight d-block text2">物流编号</text>
				<text class="main-text-24 pl-1">{{order_info.invoice_no ? order_info.invoice_no : ""}}</text>
			</view>
			<view class="d-flex a-center border-bottom py-2" style="border-color: #e4e4e4;">
				<text class="pl-1 main-text-24 font-weight d-block text2">商品总价</text>
				<text class="main-text-24 pl-1">{{order_info.goods_price}}</text>
			</view>
			<view class="d-flex a-center border-bottom py-2" style="border-color: #e4e4e4;">
				<text class="pl-1 main-text-24 font-weight d-block text2">运费</text>
				<text class="main-text-24 pl-1">{{order_info.shipping_price}}</text>
			</view>
			<view class="d-flex a-center border-bottom py-2" style="border-color: #e4e4e4;">
				<text class="pl-1 main-text-24 font-weight d-block text2">订单总价</text>
				<text class="main-text-24 pl-1">{{order_info.total_amount}}</text>
			</view>
		</view>
		<button v-if="order_info.pay_status == 0 && order_info.order_status == 0" class="main-bg-color text-white rounded-4 main-text-30 font-weight mt-4 mx-3" @click="pay(order_info.order_id)">支付</button>
	</scroll-view>
</template>

<script>
	import uniSteps from "@/components/uni-ui/uni-steps/uni-steps"
	import addressItem from "@/components/address-item/address-item"
	export default {
		data() {
			return {
				active: 1,
				list: [],
				address_info: {},
				order_info: {}
			}
		},
		components: {
			addressItem,
			uniSteps
		},
		onLoad(option) {
			if(option.id) this.__init(option.id)
		},
		// filters: {
		// 	orderStatus(val) {
		// 		let obj = {
		// 			0: '待确认',
		// 			1: '已确认',
		// 			2: '已收货',
		// 			3: '已取消',                
		// 			4: '已完成',//评价完
		// 			5: '已作废',
		// 			6: '售后中',
		// 		}
		// 		return obj[val];
		// 	}
		// },
		methods: {
			__init(orderId) {
				this.$H.post("Order/getOrderDetail", {
					order_id: orderId,
					token: this.$store.state.user.token
				}).then(res=> {
					let {city, district, address, province, consignee, mobile, express} = res.data.order_info;
					this.order_info = res.data.order_info;
					this.address_info = {
						"address": address,
						"consignee": consignee,
						"mobile": mobile,
						"pdc": `${province} ${city} ${district}`,
					}
					let arr = [];
					res.data.order_info.action_list.map(v=> {
						let obj = {
							title: v.action_note,
							desc: this.setTime(v.log_time)
						}
						arr.push(obj)
					})
					this.list = arr;
					this.active = this.list.length -1;
				})
			},
			// 时间戳转换具体时间
			setTime(str){
				var n = parseInt(str)*1000;
				var D = new Date(n);
				var year = D.getFullYear();//四位数年份
				var month = D.getMonth()+1;//月份(0-11),0为一月份
					month = month<10?('0'+month):month;
				var day = D.getDate();//月的某一天(1-31)
					day = day<10?('0'+day):day;
				var hours = D.getHours();//小时(0-23)
					hours = hours<10?('0'+hours):hours;
				var minutes = D.getMinutes();//分钟(0-59)
					minutes = minutes<10?('0'+minutes):minutes;
				var now_time = year+'-'+month+'-'+day+' '+hours+':'+minutes;
				return now_time;
			},
			// wuliu(item) {
			// 	uni.navigateTo({
			// 		url: `../wuliu/wuliu?orderId=${this.order_info.order_id}`
			// 	})
			// },
			// 支付
			pay(orderId) {
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
								this.scrollTop = this.oldScrollTop;
								this.$nextTick(() =>{
								    this.scrollTop = 0
								});
								this.__init(this.tabIndex);
							},
							fail: err => {
								uni.showModal({
									title:"提示",
									content: "支付失败"
								})
								return;
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

<style lang="scss" scoped>
	.order-detail {
		height: 100vh;
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
			.item-more {
				text {
					width: 140rpx;
					line-height: 40rpx;
				}
			}
		}
		.text2 {
			width: 100rpx;
		}
	}
</style>
