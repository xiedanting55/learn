<template>
	<view class="count d-flex a-center j-end">
		<text class="main-text-color font-weight" :style="{'font-size': sizeBol + 'rpx'}">x</text>
		<text class="main-text-color font-weight ml-1" :style="{'font-size': sizeNumber + 'rpx'}">{{countValue}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			countValue: {
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
	.count {
		line-height:  68rpx;
	}
</style>
