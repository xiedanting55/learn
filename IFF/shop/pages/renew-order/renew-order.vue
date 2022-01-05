<template>
	<view class="renew-order">
		<view class="mx-3 renew-list rounded main-bg-gray-color">
			<view class="item p-3 border-bottom">
				<text class="font-weight my-3 main-text-30">新品</text>
				<view class="item-body my-3 d-flex a-center j-sb">
					<image src="/static/images/my_1.png" mode="" class="rounded"></image>
					<view class="content ml-3">
						<text class="d-block main-text-30">精美项链</text>
						<text class="bg-white px-1 rounded main-text-24">金色，中号</text>
						<text class="d-block mt-3 main-text-24">产品编码：*************</text>
					</view>
					<view class="item-body-re">
						<price :sizeNumber="36" :priceValue="999" />
						<count :sizeBol="30" :sizeNumber="36" :priceValue="1" />
					</view>
				</view>
			</view>
			<view class="item p-3 border-bottom">
				<text class="font-weight my-3 main-text-30">旧品</text>
				<view class="item-body my-3 d-flex a-center j-sb">
					<image src="/static/images/my_1.png" mode="" class="rounded"></image>
					<view class="content ml-3">
						<text class="d-block main-text-30">精美项链</text>
						<text class="bg-white px-1 rounded main-text-24">金色，中号</text>
						<text class="d-block mt-3 main-text-24">产品编码：*************</text>
					</view>
					<view class="item-body-re">
						<price :sizeNumber="36" :priceValue="999" />
						<count :sizeBol="30" :sizeNumber="36" :priceValue="1" />
					</view>
				</view>
			</view>
			<view class="item-all d-flex j-sb p-3">
				<view class="d-flex a-center">
					<text class="main-text-color font-weight main-text-30">总共</text>
					<text class="main-text-color font-weight main-text-24">（1件）</text>
				</view>
				<view class="item-all-re d-flex a-center">
					<text class="text2 main-text-30">换新金额：</text>
					<price :sizeNumber="36" :priceValue="999" />
				</view>
			</view>
		</view>
		<view class="m-3 d-flex a-center j-center" @change="agree">
			<label>
				<checkbox :checked="radioCheck" color="#00332A" /><text>我同意《以旧换新协议》</text>
			</label>
		</view>
		<button class="position-fixed bottom-0 left-0 w-100 main-bg-color text-white rounded-4 main-text-30 font-weight" @click="linkTo">提交订单</button>
	</view>
</template>

<script>
	import price from "@/components/price/price"
	import count from "@/components/count/count"
	export default {
		data() {
			return {
				radioCheck: false
			}
		},
		components: {
			price,
			count
		},
		methods: {
			agree() {
				this.radioCheck = !this.radioCheck;
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
</style>
<style lang="scss" scoped>
	.renew-order {
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
