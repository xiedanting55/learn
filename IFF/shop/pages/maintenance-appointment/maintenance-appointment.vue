<template>
	<view class="maintenance-appointment">
		<view class="maintenance-appointment-list rounded mx-3">
			<text class="font-weight main-text-24 my-2 d-block">维修产品信息</text>
			<view class="d-flex a-center border-bottom py-2 main-bg-gray-color">
				<text class="pl-1 main-text-24 font-weight d-block text1">产品名称</text>
				<text class="main-text-24 pl-1">name</text>
			</view>
			<view class="d-flex a-center border-bottom py-2 main-bg-gray-color">
				<text class="pl-1 main-text-24 font-weight d-block text1">产品类型</text>
				<text class="main-text-24 pl-1">type</text>
			</view>
			<view class="d-flex a-center border-bottom py-2 main-bg-gray-color">
				<text class="pl-1 main-text-24 font-weight d-block text1">产品数量</text>
				<text class="main-text-24 pl-1">count</text>
			</view>
			<view class="d-flex row-max a-start border-bottom main-bg-gray-color py-2">
				<text class="pl-1 main-text-24 font-weight d-block text1">备注</text>
				<text class="main-text-24 pl-1">remarks</text>
			</view>
		</view>
		<view class="maintenance-appointment-list rounded mx-3">
			<text class="font-weight main-text-2 my-2 d-block">客户信息</text>
			<view class="d-flex a-center j-sb border-bottom py-2 main-bg-gray-color">
				<view class="d-flex a-center">
					<text class="pl-1 main-text-24 font-weight d-block text1">收件人</text>
					<text class="main-text-24 pl-1">孔女士</text>
				</view>
				<view class="d-flex a-center j-end mr-1 row-re">
					<image src="/static/images/maintenance-txl.png" mode="widthFix"></image>
					<text class="pl-1 main-text-24">通讯录</text>
				</view>
			</view>
			<view class="d-flex a-center border-bottom py-2 main-bg-gray-color">
				<text class="pl-1 main-text-24 font-weight d-block text1">电话号码</text>
				<text class="main-text-24 pl-1">187****0091</text>
			</view>
			<view class="d-flex a-center j-sb border-bottom py-2 main-bg-gray-color">
				<view class="d-flex a-center">
					<text class="pl-1 main-text-24 font-weight d-block text1">所在地区</text>
					<text class="main-text-24 pl-1">广东深圳市罗湖区</text>
				</view>
				<view class="d-flex a-center j-end mr-1 row-re" @click="location">
					<image src="/static/images/maintenance-dw.png" mode="widthFix"></image>
					<text class="pl-1 main-text-24 d-block">定位</text>
				</view>
			</view>
			<view class="d-flex a-center j-sb border-bottom py-2 main-bg-gray-color">
				<view class="d-flex a-center">
					<text class="pl-1 main-text-24 font-weight d-block text1">详细地址</text>
					<text class="main-text-24 pl-1">草埔西吓围新村</text>
				</view>
				<view class="d-flex a-center j-end mr-1 row-re">
					<image src="/static/images/maintenance-yy.png" mode="widthFix" class="small"></image>
				</view>
			</view>
		</view>
		<text class="mx-3 main-text-18">提交订单后，耐心等待维修结果</text>
		<button class="position-fixed bottom-0 left-0 w-100 main-bg-color text-white rounded-4 main-text-30 font-weight" @click="linkTo">提交订单</button>
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
			},
			location() {
				uni.chooseLocation({
				    success: function (res) {
				        console.log('位置名称：' + res.name);
				        console.log('详细地址：' + res.address);
				        console.log('纬度：' + res.latitude);
				        console.log('经度：' + res.longitude);
				    }
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.maintenance-appointment-list {
		.text1 {
			width: 130rpx;
		}
		image {
			width: 30rpx;
			&.small {
				width: 24rpx;
			}
		}
	}
</style>
