<template>
	<view class="after-sale-status">
		<view class="item-1 m-3 p-2 rounded main-bg-gray-color">
			<uni-steps :options="list" active-color="#00332a" :active="active" direction="column" />
		</view>
		<view class="item-2 p-3 rounded mx-3 main-bg-gray-color">
			<text class="font-weight item-head-text main-text-24">退款信息</text>
			<view class="d-flex a-center py-1">
				<text class="main-text-24 font-weight mr-1">订单号</text>
				<text class="main-text-24">{{alterSales.order_sn}}</text>
			</view>
			<view class="d-flex a-center py-1">
				<text class="main-text-24 font-weight mr-1">订单状态</text>
				<text class="main-text-24">{{alterSales.status_desc}}</text>
			</view>
			<view class="item-body my-3 d-flex a-start j-sb">
				<image :src="alterSales.images" mode="widthFix" class="rounded"></image>
				<view class="content d-flex flex-column">
					<text class="main-text-30">{{alterSales.goods_name}}</text>
					<text class="bg-white px-1 rounded main-text-24">{{alterSales.spe}}</text>
				</view>
				<view class="item-body-re">
					<price :priceValue="alterSales.price" />
					<count :sizeBol="20" :sizeNumber="24" :countValue="alterSales.goods_num" />
				</view>
			</view>
			<view class="d-flex a-center j-sb">
				<text class="main-text-color main-text-24">退款金额</text>
				<text class="main-text-color main-text-24">¥{{alterSales.price}}</text>
			</view>
			<view class="d-flex a-center j-sb">
				<text class="main-text-color main-text-24">退款原因</text>
				<text class="main-text-color main-text-24">{{alterSales.reason}}</text>
			</view>
			<view class="d-flex a-start flex-column">
				<text class="main-text-color main-text-24">描述和凭证</text>
				<view class="d-flex a-center flex-wrap mt-1">
					<image v-for="(item,index) in alterSales.imgs" :src="item" :key="index" class="imgs mr-2 rounded"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSteps from "@/components/uni-ui/uni-steps/uni-steps"
	import price from "@/components/price/price"
	import count from "@/components/count/count"
	export default {
		data() {
			return {
				active: 1,
				list: [],
				alterSales: {}
			}
		},
		components: {
			uniSteps,
			price,
			count
		},
		onLoad(option) {
			if(option) {
				uni.setNavigationBarTitle({title: option.title});
				this.__init(option.id);
			}
		},
		methods: {
			__init(id) {
				this.$H.post('User/alterSalesDetail', {
					id: id,
					token: this.$store.state.user.token,
				}).then((res) => {
					let arr = [];
					res.data.action_list.map(v=> {
						let obj = {
							title: v.action_note,
							desc: v.action_time
						}
						arr.push(obj)
					})
					this.list = arr;
					this.alterSales = res.data.alterSales;
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.after-sale-status {
		.item-2 {
			.item-head-text {
				color: #353535;
			}
			.item-body {
				image {
					width: 175rpx;
					height: 175rpx;
				}
				.content {
					color: #2b2b2b;
				}
			}
		}
		.imgs {
			width: 150rpx;
			height: 150rpx;
		}
	}
</style>
