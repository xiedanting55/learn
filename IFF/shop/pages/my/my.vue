<template>
	<view>
		<view class="my-head position-relative">
			<image src="/static/images/my_bg.png" mode="widthFix" class="w-100"></image>
			<view class="position-absolute row w-100 a-center">
				<image src="/static/images/my_head.png" class="portrait rounded-circle"></image>
				<text class="text-white">登录/注册</text>
			</view>
		</view>
		
		<view class="my-vip-card position-relative">
			<image src="/static/images/my_vip.png" mode="widthFix"></image>
			<view class="my-vip-list w-100 position-absolute left-0">
				<text class="mx-3 text1 text-white font-weight">您将拥有以下礼遇：</text>
				<view class="mx-3 row a-center">
					<view class="row flex-column a-center mr-4">
						<image src="/static/images/my_vip_1.png" mode="widthFix"></image>
						<text class="text2 text-white">换新礼遇</text>
					</view>
					<view class="row flex-column a-center mr-4">
						<image src="/static/images/my_vip_2.png" mode="widthFix"></image>
						<text class="text2 text-white">顺丰快递</text>
					</view>
					<view class="row flex-column a-center mr-4">
						<image src="/static/images/my_vip_3.png" mode="widthFix"></image>
						<text class="text2 text-white">30天换货</text>
					</view>
					<view class="row flex-column a-center mr-4">
						<image src="/static/images/my_vip_4.png" mode="widthFix"></image>
						<text class="text2 text-white">1年质保</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="my-order m-3 rounded">
			<view class="my-order-head py-1 px-2 row j-sb a-center border-bottom">
				<text class="text1">我的订单</text>
				<view class="row a-center">
					<text class="text2">更多</text>
					<view class="arrow arrow-right"></view>
				</view>
			</view>
			<view class="my-order-row row py-3">
				<view class="span-4 row a-center flex-column">
					<image src="/static/images/my_1.png" mode="widthFix"></image>
					<text>待支付</text>
				</view>
				<view class="span-4 row a-center flex-column">
					<image src="/static/images/my_2.png" mode="widthFix"></image>
					<text>代发货</text>
				</view>
				<view class="span-4 row a-center flex-column">
					<image src="/static/images/my_3.png" mode="widthFix"></image>
					<text>代收货</text>
				</view>
				<view class="span-4 row a-center flex-column">
					<image src="/static/images/my_4.png" mode="widthFix"></image>
					<text>待评价</text>
				</view>
				<view class="span-4 row a-center flex-column">
					<image src="/static/images/my_5.png" mode="widthFix"></image>
					<text>售后</text>
				</view>
			</view>
		</view>
		
		<view class="my-list my-3">
			<view class="row-line row a-center"hover-class="bg-light-secondary" v-for="item in myList" :key="item.id" @click="linkTo(item)">
				<image :src="item.src" mode="widthFix"></image>
				<view class="row-re row a-center j-sb p-1 border-bottom">
					<text>{{item.text}}</text>
					<view class="arrow arrow-right"></view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myList: [
					{
						id: 0,
						src: "/static/images/my_list_1.png",
						text: "个人信息",
						navigate: ""
					},
					{
						id: 1,
						src: "/static/images/my_list_2.png",
						text: "换新礼遇",
						navigate: ""
					},
					{
						id: 2,
						src: "/static/images/my_list_3.png",
						text: "地址管理",
						navigate: ""
					},
					{
						id: 3,
						src: "/static/images/my_list_4.png",
						text: "维修保养",
						navigate: "/pages/maintenance/maintenance"
					},
					{
						id: 4,
						src: "/static/images/my_list_5.png",
						text: "我的优惠卷",
						navigate: "/pages/coupon/coupon"
					},
					{
						id: 5,
						src: "/static/images/my_list_6.png",
						text: "相关政策",
						navigate: "/pages/relevant-policies/relevant-policies"
					}
				]
			}
		},
		methods: {
			// 我的列表--页面跳转
			linkTo(data) {
				console.log(data)
				uni.navigateTo({
					url: data.navigate
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-head {
		.row {
			top: 75rpx;
			left: 60rpx;
			.portrait {
				margin-right: 24rpx;
				width: 134rpx;
				height: 134rpx;
			}
			text {
				font-size: 30rpx;
			}
		}
	}
	.my-vip-card {
		margin: -140rpx 60rpx 0;
		.my-vip-list {
			bottom: 50rpx;
			.row {
				margin-top: 20rpx;
				image {
					width: 60rpx;
				}
				.text1 {
					font-size: 24rpx;
				}
				.text2 {
					font-size: 18rpx;
					line-height: 42rpx;
				}
			}
		}
	}
	.my-order {
		background-color: #e4e4e4;
		.my-order-head {
			.text1 {
				font-size: 30rpx;
				color: #333;
			}
			.text2 {
				font-size: 20rpx;
				color: #202020;
			}
		}
		.my-order-row {
			image {
				width: 65rpx;
			}
			text {
				font-size: 24rpx;
				color: #363636;
			}
		}
	}
	.my-list {
		.row-line {
			margin: 0 60rpx;
			image {
				width: 28rpx;
			}
			text {
				font-size: 24rpx;
				color: #333;
			}
			.row-re {
				width: 582rpx;
				border-color: #e4e4e4;
			}
		}
	}
</style>
