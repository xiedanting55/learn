<template>
	<view class="item-top coupon-title d-flex a-center j-sb py-1" :class="isBorder ? 'border-bottom' : ''">
		<view class="item-top-le d-flex a-center">
			<label v-if="needCheckbox">
				<checkbox color="#00332A" />
			</label>
			<image :src="pic" mode="widthFix"></image>
			<text class="ml-2 font-weight main-text-30">{{name}}</text>
			<text class="ml-2 main-text-24" style="color: #ff0000" v-if="orderType.length > 0">{{orderType}}</text>
		</view>
		<view class="item-top-re">
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"item-head",
		props: {
			needCheckbox: {
				type: Boolean,
				default: false
			},
			pic: {
				type: String
			},
			name: {
				type: String
			},
			orderType: {
				type: String
			},
			isBorder: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>
<style lang="scss" scoped>
	image {
		width: 36rpx;
	}
</style>
