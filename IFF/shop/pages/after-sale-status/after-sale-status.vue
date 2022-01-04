<template>
	<view class="after-sale-status">
		<view class="item-1 m-3 p-3 rounded">
			<uni-steps :options="list2" active-color="#00332a" :active="active" direction="column" />
		</view>
		<view class="item-2 p-3 rounded mx-3">
			<text class="font-weight item-head-text">退款信息</text>
			<view class="item-body my-3 d-flex a-start j-sb">
				<image src="/static/images/my_1.png" mode="" class="rounded"></image>
				<text class="content">精美项链 金色，中号</text>
				<view class="item-body-re">
					<view class="price">
						<text class="main-text-color font-weight">¥</text>
						<text class="main-text-color font-weight ml-1">999</text>
					</view>
					<view class="count d-flex a-center j-center">
						<text class="main-text-color font-weight">*</text>
						<text class="main-text-color font-weight ml-1">1</text>
					</view>
				</view>
			</view>
			<view class="d-flex a-center j-sb">
				<text class="main-text-color">退款原因</text>
				<text class="main-text-color">七天无理由</text>
			</view>
			<view class="d-flex a-center j-sb">
				<text class="main-text-color">退款金额</text>
				<text class="main-text-color">¥999.00</text>
			</view>
		</view>
		<view class="text-right m-3">
			<text class="font-weight main-bg-color text-white py-1 px-2 rounded-4">修改申请</text>
		</view>
	</view>
</template>

<script>
	import uniSteps from "@/components/uni-ui/uni-steps/uni-steps.vue"
	export default {
		data() {
			return {
				
			}
		},
		components: {
			uniSteps
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
		.item-1 {
			background-color: #e4e4e4;
		}
		.item-2 {
			background-color: #e4e4e4;
			text {
				font-size: 24rpx;
			}
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
				.item-body-re {
					.price {
						text {
							&:nth-of-type(2) {
								font-size: 30rpx;
							}
						}
					}
					.count {
						text {
							&:nth-of-type(1) {
								font-size: 30rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
