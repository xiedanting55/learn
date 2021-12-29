<template>
	<view class="my-info">
		<text class="m-3">基本信息</text>
		<view class="my-info-list rounded mx-3">
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="text1 pl-1">头像</text>
				<view class="d-flex a-center j-sb item-re">
					<image src="/static/images/my_head.png" class="photo rounded-circle"></image>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="text1 pl-1">昵称</text>
				<view class="d-flex a-center j-sb item-re">
					<text class="text2">小米米</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="text1 pl-1">手机号</text>
				<view class="d-flex a-center j-sb item-re">
					<text class="text2">187****0091</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="text1 pl-1">性别</text>
				<view class="d-flex a-center j-sb item-re">
					<text class="text2">保密</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="text1 pl-1">生日</text>
				<view class="d-flex a-center j-sb item-re">
					<text class="text2">请选择生日</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="text1 pl-1">地区</text>
				<view class="d-flex a-center j-sb item-re">
					<text class="text2">请选择地区</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="text1 pl-1">收货地址</text>
				<view class="d-flex a-center j-sb item-re">
					<text class="text2"></text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
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
			
		}
	}
</script>

<style lang="scss" scoped>
	.my-info {
		text {
			display: block;
		}
		.my-info-list {
			background-color: #e4e4e4;
		}
		.item {
			.text1 {
				font-size: 24rpx;
				color: #292929;
				width: 254rpx;
			}
			.text2 {
				font-size: 24rpx;
				color: #b6b6b6;
			}
			.photo {
				width: 80rpx;
				height: 80rpx;
			}
			.item-re {
				width: 436rpx;
			}
		}
	}
</style>
