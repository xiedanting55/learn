<template>
	<view class="after-sale-status">
		<view class="item-1 m-3 p-3 rounded main-bg-gray-color">
			<uni-steps :options="list2" active-color="#00332a" :active="active" direction="column" />
		</view>
		<view class="item-2 p-3 rounded mx-3 main-bg-gray-color">
			<text class="font-weight item-head-text main-text-24">退款信息</text>
			<view class="item-body my-3 d-flex a-start j-sb">
				<image src="/static/images/my_1.png" mode="widthFix" class="rounded"></image>
				<text class="content main-text-24">精美项链 金色，中号</text>
				<view class="item-body-re">
					<price :priceValue="999" />
					<count :sizeBol="20" :sizeNumber="24" :priceValue="1" />
				</view>
			</view>
			<view class="d-flex a-center j-sb">
				<text class="main-text-color main-text-24">退款原因</text>
				<text class="main-text-color main-text-24">七天无理由</text>
			</view>
			<view class="d-flex a-center j-sb">
				<text class="main-text-color main-text-24">退款金额</text>
				<text class="main-text-color main-text-24">¥999.00</text>
			</view>
		</view>
		<view class="text-right mx-3 mt-2">
			<text class="font-weight main-bg-color text-white py-1 px-2 rounded-4 main-text-24">修改申请</text>
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
				
			}
		},
		components: {
			uniSteps,
			price,
			count
		},
		methods: {
			active: 1,
			list2: [
				{
					title: '申请退款',
					desc: ""
				}, 
				{
					title: '请等待商家处理',
					desc: "商家同意或者超时未处理，系统将退款给您\n如果商家拒绝，您可以修改退款申请后再次发起，商家会重新处理"
				}, 
				{
					title: '退款成功',
					desc: ""
				}
			]
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
	}
</style>
