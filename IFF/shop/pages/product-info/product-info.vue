<template>
	<view class="product-info">
		<text class="text1 d-block text-center m-3">产品信息</text>
		<view class="info rounded mx-3 main-bg-gray-color">
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block text1">产品名称：</text>
				<text class="main-text-24 pl-1"></text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block text1">产品颜色：</text>
				<text class="main-text-24 pl-1"></text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block text1">产品材质：</text>
				<text class="main-text-24 pl-1"></text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block text1">产品尺寸：</text>
				<text class="main-text-24 pl-1"></text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block text1">产品重量：</text>
				<text class="main-text-24 pl-1"></text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block text1">产品编码：</text>
				<text class="main-text-24 pl-1"></text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block text1">购买时间：</text>
				<text class="main-text-24 pl-1"></text>
			</view>
			<view class="d-flex a-center j-end price py-2 mr-3">
				<text class="pl-1 main-text-color">金额：</text>
				<price :sizeBol="30" :priceValue="0.03" />
			</view>
		</view>
		<view class="hx-list mx-3 mt-3">
			<text class="main-text-30 font-weight">换新列表</text>
			<view class="item p-3 rounded main-bg-gray-color">
				<view class="item-head d-flex a-center j-sb">
					<text class="main-text-30 font-weight">新品</text>
					<view class="item-head-re main-bg-color rounded d-flex a-center j-center px-1" @click="exchange">
						<text class="text-white font-weight main-text-30">换购</text>
						<view class="arrow arrow-right arrow-white"></view>
					</view>
				</view>
				<view class="item-body my-3 d-flex a-center j-sb">
					<image src="/static/images/my_1.png" mode="widthFix" class="rounded"></image>
					<view class="content ml-3">
						<text class="d-block main-text-30">精美项链</text>
						<text class="bg-white px-1 main-text-24 rounded">金色，中号</text>
					</view>
					<view class="item-body-re">
						<price :sizeNumber="36" :priceValue="999" />
						<count :sizeBol="30" :sizeNumber="36" :priceValue="1" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import price from "@/components/price/price"
	import count from "@/components/count/count"
	export default {
		data() {
			return {
				
			}
		},
		components: {
			price,
			count
		},
		methods: {
			// 换购
			exchange() {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.product-info {
		.hx-list {
			.item {
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
