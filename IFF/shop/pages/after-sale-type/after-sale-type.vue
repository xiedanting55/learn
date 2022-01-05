<template>
	<view class="after-sale-type">
		<view class="item p-3 rounded m-3 main-bg-gray-color">
			<itemTop :pic="'/static/images/icon1.png'" :name="'项链'" isBorder />
			<view class="item-body my-3 d-flex a-center j-sb">
				<image src="/static/images/my_1.png" mode="" class="rounded"></image>
				<view class="content ml-3">
					<text class="d-block main-text-30">精美项链</text>
					<text class="bg-white px-1 rounded main-text-24">金色，中号</text>
				</view>
				<view class="item-body-re">
					<price :sizeNumber="36" :priceValue="999" />
					<count :sizeBol="30" :sizeNumber="36" :priceValue="1" />
				</view>
			</view>
		</view>
		<view class="list m-3">
			<view class="list-item mb-2 d-flex a-center j-sb px-2 main-bg-gray-color">
				<view class="list-item-le d-flex a-center col-5">
					<image src="/static/images/list1.png" mode="widthFix"></image>
					<text class="ml-2 main-text-30">仅退款</text>
				</view>
				<view class="arrow arrow-right"></view>
			</view>
			<view class="list-item mb-2 d-flex a-center j-sb px-2 main-bg-gray-color">
				<view class="list-item-le d-flex a-center col-5">
					<image src="/static/images/list2.png" mode="widthFix"></image>
					<text class="ml-2 main-text-30">换新礼遇</text>
				</view>
				<view class="arrow arrow-right"></view>
			</view>
			<view class="list-item mb-2 d-flex a-center j-sb px-2 main-bg-gray-color">
				<view class="list-item-le d-flex a-center col-5">
					<image src="/static/images/list3.png" mode="widthFix"></image>
					<text class="ml-2 main-text-30">退货退款</text>
				</view>
				<view class="arrow arrow-right"></view>
			</view>
			<view class="list-item mb-2 d-flex a-center j-sb px-2 main-bg-gray-color">
				<view class="list-item-le d-flex a-center col-5">
					<image src="/static/images/list4.png" mode="widthFix"></image>
					<text class="ml-2 main-text-30">维修保养</text>
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

			}
		},
		components: {
			itemTop,
			price,
			count
		},
		methods: {

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
