<template>
	<view class="renew-code">
		<view class="p-3 bg-white top">
			<view class="line d-flex a-center j-sb rounded-4">
				<view class="input d-flex a-center pl-3">
					<image src="/static/images/search.png" mode="widthFix"></image>
					<input type="text" value="" placeholder="请输入产品编号" class="ml-1" />
				</view>
				<image src="/static/images/ewm.png" class="ewm mr-3"></image>
			</view>
		</view>
		<view class="other d-flex a-center j-center">
			<text>以旧换新</text>
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
		mounted() {
			this.getHeight();
		},
		methods: {
			getHeight() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.other').boundingClientRect(data => {
				    console.log(data)
				}).exec();
			}
		}
	}
</script>

<style>
	page {
		background-color: #e4e4e4;
	}
</style>
<style lang="scss" scoped>
	.line {
		background-color: #e4e4e4;
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
