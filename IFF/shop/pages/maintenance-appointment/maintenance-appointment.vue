<template>
	<view class="maintenance-appointment">
		<view class="maintenance-appointment-list rounded mx-3">
			<text class="title font-weight my-2">维修产品信息</text>
			<view class="d-flex a-center border-bottom py-1">
				<text class="text1 pl-1">产品名称</text>
				<text class="text2 pl-1">name</text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="text1 pl-1">产品类型</text>
				<text class="text2 pl-1">type</text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="text1 pl-1">产品数量</text>
				<text class="text2 pl-1">count</text>
			</view>
			<view class="d-flex row-max a-start border-bottom py-1">
				<text class="text1 pl-1">备注</text>
				<text class="text2 pl-1">remarks</text>
			</view>
		</view>
		<view class="maintenance-appointment-list rounded mx-3">
			<text class="title font-weight my-2">客户信息</text>
			<view class="d-flex a-center border-bottom py-1">
				<text class="text1 pl-1">收件人</text>
				<text class="text2 pl-1">孔女士</text>
				<view class="row a-center j-end mr-1 row-re">
					<image src="/static/images/maintenance-txl.png" mode="widthFix"></image>
					<text class="pl-1">通讯录</text>
				</view>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="text1 pl-1">电话号码</text>
				<text class="text2 pl-1">187****0091</text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="text1 pl-1">所在地区</text>
				<text class="text2 pl-1">广东深圳市罗湖区</text>
				<view class="d-flex a-center j-end mr-1 row-re">
					<image src="/static/images/maintenance-dw.png" mode="widthFix"></image>
					<text class="pl-1">定位</text>
				</view>
			</view>
			<view class="d-flex row-max a-start border-bottom py-1">
				<text class="text1 pl-1">详细地址</text>
				<text class="text2 pl-1">草埔西吓围新村</text>
				<view class="d-flex a-center j-end mr-1 row-re">
					<image src="/static/images/maintenance-yy.png" mode="widthFix" class="small"></image>
				</view>
			</view>
		</view>
		<text class="mx-3 text3">提交订单后，耐心等待维修结果</text>
		<button class="position-fixed bottom-0 left-0 w-100 main-bg-color text-white rounded-4" @click="linkTo">提交订单</button>
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
					url: "../order-confirm-status/order-confirm-status"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.maintenance-appointment-list {
		.d-flex {
			background-color: #e4e4e4;
			&.row-max {
				height: 102rpx;
			}
		}
		text {
			display: block;
			font-size: 24rpx;
		}
		.text1 {
			width: 120rpx;
			color: #2f2f2f;
		}
		.text2 {
			width: 425rpx;
			color: #2d2d2d;
		}
		image {
			width: 30rpx;
			&.small {
				width: 24rpx;
			}
		}
		.row-re {
			width: 115rpx;
		}
	}
	.text3 {
		font-size: 20rpx;
		color: #2b2b2b;
	}
	button {
		font-size: 30rpx;
	}
</style>
