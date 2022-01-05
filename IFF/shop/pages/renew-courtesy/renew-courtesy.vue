<template>
	<view class="renew-courtesy">
		<view class="item m-3 p-3 rounded main-bg-gray-color">
			<itemTop :pic="'/static/images/icon1.png'" :name="'项链'" isBorder />
			<view class="item-body d-flex a-start j-sb mt-3">
				<view class="d-flex a-center">
					<image src="/static/images/my_1.png" mode=""></image>
					<view class="content ml-3">
						<text class="d-block main-text-30">精美项链</text>
						<text class="bg-white px-1 rounded main-text-24">金色，中号</text>
						<price :sizeNumber="36" :priceValue="999" />
					</view>
				</view>
				<text class="main-bg-color text-white font-weight text-center rounded text-status main-text-36 px-4">已换新</text>
			</view>
		</view>
	</view>
</template>

<script>
	import itemTop from "@/components/item-top/item-top.vue"
	import price from "@/components/price/price.vue"
	export default {
		data() {
			return {
				
			}
		},
		components: {
			itemTop,
			price
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.renew-courtesy {
		.item {
			.item-body {
				image {
					width: 174rpx;
					height: 174rpx;
				}
			}
		}
	}
</style>