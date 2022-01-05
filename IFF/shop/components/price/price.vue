<template>
	<view class="price d-flex a-end">
		<text class="font-weight" :style="{'font-size': sizeBol + 'rpx','color': mainTextColor}">¥</text>
		<text class="font-weight ml-1" :style="{'font-size': sizeNumber + 'rpx','color': mainTextColor}">{{priceValue}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			priceValue: {
				type: [Number, String],
				default: 0
			},
			sizeBol: {
				type: Number,
				default: 24
			},
			sizeNumber: {
				type: Number,
				default: 30
			},
			mainTextColor: {
				type: String,
				default: '#00332A'
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.price {
		line-height: 68rpx;
	}
</style>
