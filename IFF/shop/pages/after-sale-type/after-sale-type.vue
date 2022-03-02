<template>
	<view class="after-sale-type">
		<view class="item p-3 rounded m-3 main-bg-gray-color" v-for="(item,index) in list" :key="index">
					<!-- cat_name，price，goods_num -->
			<itemTop :pic="'/static/images/icon1.png'" :name="item.cat_name" isBorder />
			<view class="item-body my-3 d-flex a-center j-sb">
				<image :src="item.images" mode="" class="rounded"></image>
				<view class="content ml-3">
					<text class="d-block main-text-30">{{item.goods_name}}</text>
					<text class="bg-white px-1 rounded main-text-24">{{item.spe}}</text>
				</view>
				<view class="item-body-re">
					<price :sizeNumber="36" :priceValue="item.price" />
					<count :sizeBol="30" :sizeNumber="36" :countValue="item.goods_num" />
				</view>
			</view>
		</view>
		<view class="list m-3">
			<view class="list-item mb-2 d-flex a-center j-sb px-2 main-bg-gray-color" v-for="(item,index) in saleList" :key="index" @click="linkTo(item)">
				<view class="list-item-le d-flex a-center col-5">
					<image :src="item.src" mode="widthFix"></image>
					<text class="ml-2 main-text-30">{{item.text}}</text>
				</view>
				<view class="arrow arrow-right"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import itemTop from "@/components/item-top/item-top"
	import price from "@/components/price/price"
	import count from "@/components/count/count"
	export default {
		data() {
			return {
				orderId: "",
				goodsId: "",
				list: [],
				saleList: [
					{
						id: 21,
						src: "/static/images/list3.png",
						text: "换货",
						navigate: '/pages/after-sale-refund/after-sale-refund'
					},
					{
						id: 28,
						src: "/static/images/list1.png",
						text: "退货",
						navigate: '/pages/after-sale-refund/after-sale-refund'
					},
					{
						id: 2,
						src: "/static/images/list2.png",
						text: "换新礼遇",
						navigate: '/pages/renew-code/renew-code'
					},
					// {
					// 	id: 3,
					// 	src: "/static/images/list4.png",
					// 	text: "维修保养",
					// 	navigate: '/pages/my-order/my-order?id=1'
					// }
				]
			}
		},
		components: {
			itemTop,
			price,
			count
		},
		onLoad(option) {
			if(option) {
				this.orderId = option.orderId;
				this.goodsId = option.goodsId;
				this.__init();
			}
		},
		methods: {
			__init() {
				this.list = [];
				this.$H.post('User/checkAfterSales', {
					"order_id": this.orderId,
					"goods_id": this.goodsId, 
					"token": this.$store.state.user.token,
				}).then((res) => {
					this.list.push(res.data.goods);
				})
			},
			linkTo(item) {
				if(item.id == 21 || item.id == 28) {
					let {price} = this.list[0];
					uni.navigateTo({
						url: `${item.navigate}?type=${item.id}&orderId=${this.orderId}&goodsId=${this.goodsId}&data=${JSON.stringify(this.list)}`
					})
				}else {
					uni.navigateTo({
						url: item.navigate
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.after-sale-type {
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
		.list-item {
			line-height: 110rpx;
			image {
				width: 48rpx;
			}
			text {
				color: #282828;
			}
		}
	}
</style>
