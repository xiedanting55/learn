<template>
	<view class="address">
		<view class="row a-center j-sb mx-3 py-3 border-bottom">
			<view class="row-le">
				<view class="address-head d-flex a-center">
					<text class="main-bg-color text-white px-2 rounded-4">家</text>
					<text>广东深圳市罗湖区</text>
				</view>
				<text>草埔西吓围新村</text>
				<view class="address-info">
					<text>孔女士</text>
					<text class="ml-1">187****0091</text>
				</view>
			</view>
			<image src="/static/images/edit.png" mode="widthFix"></image>
		</view>
		<view class="row a-center j-sb mx-3 py-3 border-bottom">
			<view class="row-le">
				<view class="address-head d-flex a-center">
					<text class="main-bg-color text-white px-2 rounded-4">公司</text>
					<text>广东深圳市罗湖区</text>
				</view>
				<text>草埔西吓围新村</text>
				<view class="address-info">
					<text>孔女士</text>
					<text class="ml-1">187****0091</text>
				</view>
			</view>
			<image src="/static/images/edit.png" mode="widthFix"></image>
		</view>
		<view class="position-fixed btn d-flex a-center j-center main-bg-color rounded-4" @click="linkTo">
			<image src="/static/images/add.png" mode="widthFix"></image>
			<text class="text-white font-weight ml-1">新建收获地址</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			linkTo() {
				uni.navigateTo({
					url: "../add-edit-address/add-edit-address?status=add"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.address {
		.row {
			border-color: #e4e4e4;
		}
		image {
			width: 23rpx;
		}
		text {
			font-size: 24rpx;
			color: #909090;
		}
		.btn {
			width: 400rpx;
			line-height: 88rpx;
			bottom: 20px;
			left: 50%;
			transform: translate(-50%,0);
			image {
				width: 28rpx;
			}
			text {
				font-size: 30rpx;
			}
		}
	}
</style>
