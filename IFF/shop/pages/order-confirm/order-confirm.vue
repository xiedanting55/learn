<template>
	<view class="order-confirm">
		<view class="add-addr m-5 d-flex a-center j-center">
			<image src="/static/images/add-circle.png" mode="widthFix"></image>
			<text class="ml-1 font-weight main-text-30">添加收货地址</text>
		</view>
		<view class="item p-3 rounded m-3 main-bg-gray-color">
			<itemTop :pic="'/static/images/icon1.png'" :name="'项链'" isBorder />
			<view class="item-body my-3 d-flex a-center j-sb">
				<image src="/static/images/my_1.png" mode="" class="rounded"></image>
				<view class="content ml-3">
					<text class="d-block main-text-30">精美项链</text>
					<view class="d-inline-block">
						<view class="d-flex a-center bg-white px-1 rounded">
							<text class="main-text-24 mr-1">金色，中号</text>
							<view class="arrow arrow-bottom"></view>
						</view>
					</view>
				</view>
				<view class="item-body-re">
					<price :sizeNumber="36" :priceValue="999" />
					<count :sizeBol="30" :sizeNumber="36" :countValue="1" />
				</view>
			</view>
		</view>
		<view class="line d-flex a-center j-sb ml-3 mr-4 my-1">
			<text class="font-weight main-text-24">优惠券</text>
			<view class="line-re d-flex a-center j-center">
				<text class="font-weight mr-1 main-text-24">0张</text>
				<view class="arrow arrow-right"></view>
			</view>
		</view>
		<view class="line d-flex a-center j-sb ml-3 mr-4 my-1">
			<text class="font-weight main-text-24">(优惠券代码)</text>
			<view class="line-re d-flex a-center j-center">
				<text class="font-weight main-text-24">确认</text>
			</view>
		</view>
		<view class="line d-flex a-center j-sb ml-3 mr-4 my-1">
			<text class="font-weight main-text-24">发票</text>
			<view class="line-re d-flex a-center j-center">
				<text class="font-weight mr-1 main-text-24">不需要发票</text>
				<view class="arrow arrow-right"></view>
			</view>
		</view>
		<view class="line d-flex a-center j-sb ml-3 mr-4 my-1">
			<text class="font-weight main-text-24">订单备注</text>
			<view class="line-re d-flex a-center j-center">
				<text class="font-weight mr-1 main-text-24">无备注</text>
				<view class="arrow arrow-right"></view>
			</view>
		</view>
		<view class="line d-flex a-center j-sb ml-3 mr-4 my-1">
			<text class="font-weight main-text-24">商品总额</text>
			<price :sizeBol="20" :sizeNumber="24":mainTextColor="'#4a4a4a'" :priceValue="999" />
		</view>
		<view class="line d-flex a-center j-sb ml-3 mr-4 my-1">
			<text class="font-weight main-text-24">促销优惠</text>
			<view class="line-re d-flex a-center j-center">
				<text class="font-weight main-text-20">-</text>
				<price :sizeBol="20" :sizeNumber="24" :mainTextColor="'#4a4a4a'" :priceValue="999" />
			</view>
		</view>
		<view class="line d-flex a-center j-sb ml-3 mr-4 my-1">
			<text class="font-weight main-text-24">运费</text>
			<price :sizeBol="20" :sizeNumber="24":mainTextColor="'#4a4a4a'" :priceValue="999" />
		</view>
		<view class="line d-flex a-center j-sb ml-3 mr-4 my-1">
			<view class="line-le">
				<text class="font-weight main-text-color main-text-30">合计</text>
				<text class="main-text-color main-text-24">(共1件)</text>
			</view>
			<price :sizeNumber="36" :priceValue="999" />
		</view>
		<view class="main-bg-color text-white position-fixed bottom-0 left-0 w-100 send font-weight rounded-4 text-center main-text-30">微信支付</view>
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
			text {
				color: #4a4a4a;
			}
		}
	}
</style>
