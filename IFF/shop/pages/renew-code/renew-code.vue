<template>
	<view class="renew-code main-bg-gray-color" style="height: 100vh;">
		<view class="p-3 bg-white top">
			<view class="line d-flex a-center j-sb rounded-4 main-bg-gray-color">
				<view class="input d-flex a-center pl-3">
					<image src="/static/images/search.png" mode="widthFix"></image>
					<input type="text" value="" placeholder="请输入产品编号" class="ml-1" />
				</view>
				<image src="/static/images/ewm.png" class="ewm mr-3"></image>
			</view>
		</view>
		<view class="other d-flex a-center j-center">
			<text class="main-text-60">以旧换新</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: ""
			}
		},
		methods: {
		}
	}
</script>
<style lang="scss" scoped>
	.line {
		padding: 4rpx 0;
		image {
			width: 76rpx;
			height: 76rpx;
		}
		.input {
			image {
				width: 52rpx;
			}
			input {
				width: 468rpx;
			}
		}
	}
</style>
