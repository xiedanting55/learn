<template>
	<view class="my">
		<view class="my-head position-relative">
			<image src="/static/images/my_bg.png" mode="widthFix" class="w-100"></image>
			<view class="position-absolute d-flex w-100 a-center portrait-head">
				<image src="/static/images/my_head.png" class="portrait rounded-circle"></image>
				<text class="text-white main-text-30">登录/注册</text>
			</view>
		</view>
		
		<view class="my-vip-card position-relative ">
			<image src="/static/images/my_vip.png" mode="widthFix"></image>
			<view class="my-vip-list w-100 position-absolute left-0">
				<text class="mx-3 text1 text-white main-text-24">您将拥有以下礼遇：</text>
				<view class="mx-3 d-flex a-center mt-2">
					<view class="d-flex flex-column a-center mr-4" v-for="(item,index) in vipList" :key="index">
						<image :src="item.src" mode="widthFix"></image>
						<text class="text2 text-white main-text-18">{{item.text}}</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="my-order m-3 rounded main-bg-gray-color">
			<view class="my-order-head py-1 px-2 d-flex j-sb a-center border-bottom">
				<text class="text1 main-text-30">我的订单</text>
				<view class="d-flex a-center" @click="linkTo('/pages/my-order/my-order?id=0')">
					<text class="text2 main-text-20">更多</text>
					<view class="arrow arrow-right"></view>
				</view>
			</view>
			<view class="my-order-row d-flex py-3">
				<view class="span-4 d-flex a-center flex-column" v-for="(item,index) in payList" :key="index" @click="linkTo(item)">
					<image :src="item.src" mode="widthFix"></image>
					<text class="main-text-24">{{item.text}}</text>
				</view>
			</view>
		</view>
		
		<view class="my-list my-3">
			<view class="d-flex a-center mx-6" hover-class="bg-light-secondary" v-for="item in myList" :key="item.id" @click="linkTo(item)">
				<image :src="item.src" mode="widthFix"></image>
				<view class="row-re d-flex a-center j-sb px-1 py-2 border-bottom">
					<text class="main-text-30">{{item.text}}</text>
					<view class="arrow arrow-right"></view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name: "My",
		data() {
			return {
				vipList: [
					{
						id: 0,
						src: "/static/images/my_vip_1.png",
						text: "换新礼遇",
						navigate: ''
					},
					{
						id: 1,
						src: "/static/images/my_vip_2.png",
						text: "顺丰快递",
						navigate: ''
					},
					{
						id: 2,
						src: "/static/images/my_vip_3.png",
						text: "30天换货",
						navigate: ''
					},
					{
						id: 3,
						src: "/static/images/my_vip_4.png",
						text: "1年质保",
						navigate: ''
					},
				],
				payList: [
					{
						id: 0,
						src: "/static/images/my_1.png",
						text: "待支付",
						navigate: '/pages/my-order/my-order?id=0'
					},
					{
						id: 1,
						src: "/static/images/my_2.png",
						text: "待发货",
						navigate: '/pages/my-order/my-order?id=1'
					},
					{
						id: 2,
						src: "/static/images/my_3.png",
						text: "待收货",
						navigate: '/pages/my-order/my-order?id=2'
					},
					{
						id: 3,
						src: "/static/images/my_4.png",
						text: "待评价",
						navigate: '/pages/my-order/my-order?id=3'
					},
					{
						id: 4,
						src: "/static/images/my_5.png",
						text: "售后",
						navigate: '/pages/after-sale/after-sale'
					}
				],
				myList: [
					{
						id: 0,
						src: "/static/images/my_list_1.png",
						text: "个人信息",
						navigate: "/pages/my-info/my-info"
					},
					{
						id: 1,
						src: "/static/images/my_list_2.png",
						text: "换新礼遇",
						navigate: "/pages/renew-courtesy/renew-courtesy"
					},
					{
						id: 2,
						src: "/static/images/my_list_3.png",
						text: "地址管理",
						navigate: "/pages/address/address"
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
			linkTo(data) {
				console.log(typeof data)
				uni.navigateTo({
					url: typeof data === 'string' ? data : data.navigate
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-head {
		.portrait-head {
			top: 75rpx;
			left: 60rpx;
			.portrait {
				margin-right: 24rpx;
				width: 134rpx;
				height: 134rpx;
			}
		}
	}
	.my-vip-card {
		margin: -140rpx 60rpx 0;
		.my-vip-list {
			bottom: 50rpx;
			image {
				width: 60rpx;
			}
			.text2 {
				line-height: 42rpx;
			}
		}
	}
	.my-order {
		.my-order-head {
			.text1 {
				color: #333;
			}
			.text2 {
				color: #202020;
			}
		}
		.my-order-row {
			image {
				width: 65rpx;
			}
			text {
				color: #363636;
			}
		}
	}
	.my-list {
		image {
			width: 36rpx;
		}
		text {
			color: #333;
		}
		.row-re {
			width: 582rpx;
			border-color: #e4e4e4;
		}
	}
</style>
