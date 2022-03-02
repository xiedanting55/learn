<template>
	<view class="mine">
		<view class="scroll-line">
			<view class="my-head position-relative">
				<image src="/static/images/my_bg.png" mode="widthFix" class="top-image"></image>
				<view class="position-absolute d-flex a-center portrait-head">
					<image :src="loginStatus ? userInfo.avataUrl : '/static/images/my_head.png'" class="portrait rounded-circle"></image>
					<text v-if="!loginStatus" class="text-white main-text-30" @click="getLogin">登录/注册</text>
					<text v-else class="text-white main-text-30">{{userInfo.nickName}}</text>
				</view>
			</view>
			
			
			<view class="my-vip-card position-relative">
				<image src="/static/images/my_vip.png" class="vip-image"></image>
				<view class="my-vip-list w-100 position-absolute left-0 top-0 text-center">
					<image src="../../static/images/my_iff.png" class="my_iff" mode="widthFix"></image>
					<text class="mx-3 text1 main-text-24 mt-4 d-block">您将拥有以下礼遇：</text>
					<view class="d-flex a-start mt-4 item-list">
						<view class="d-flex flex-column a-center item" v-for="(item,index) in vipList" :key="index" :class="index == vipList.length-1 ? '' : 'mr-1'">
							<image :src="item.src" mode="widthFix"></image>
							<text class="main-text-16 d-block mt-1">{{item.text}}</text>
							<text class="main-text-16 d-block">{{item.textbeizhu}}</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="my-order m-3 mt-2 rounded main-bg-gray-color">
				<view class="my-order-head p-2 d-flex j-sb a-center border-bottom">
					<text class="text1 main-text-30">我的订单</text>
					<view class="d-flex a-center" @click="linkTo('/pages/my-order/my-order?id=0')">
						<text class="text2 main-text-24">更多</text>
						<view class="arrow arrow-right"></view>
					</view>
				</view>
				<view class="my-order-row d-flex py-3">
					<view class="span-4 d-flex a-center flex-column" v-for="(item,index) in payList" :key="index" @click="linkTo(item)">
						<image :src="item.src"></image>
						<text class="main-text-24 mt-1">{{item.text}}</text>
					</view>
				</view>
			</view>
			
			<view class="my-list mx-3 mt-4 d-flex a-center j-center flex-wrap">
				<view class="item d-flex a-center j-center flex-column span24-8 position-relative" hover-class="bg-light-secondary" v-for="item in myList" :key="item.id" @click="linkTo(item)">
					<image :src="item.src"></image>
					<text class="main-text-28 mt-1">{{item.text}}</text>
				</view>
			</view>
		</view>
		
		<tabbar :current="4"></tabbar>
	</view>
</template>

<script>
    import tabbar from '@/components/tabbar/tabbar'
	import {mapState, mapMutations} from 'vuex';
	export default {
		name: "My",
		data() {
			return {
				vipList: [
					{
						id: 0,
						src: "/static/images/my_vip_1.png",
						text: "1年换新礼遇",
						textbeizhu: "",
						navigate: ''
					},
					{
						id: 1,
						src: "/static/images/my_vip_2.png",
						text: "顺丰快递",
						textbeizhu: "",
						navigate: ''
					},
					{
						id: 2,
						src: "/static/images/my_vip_3.png",
						text: "7天无理由",
						textbeizhu: "退换货",
						navigate: ''
					},
					{
						id: 3,
						src: "/static/images/my_vip_4.png",
						text: "30天质保",
						textbeizhu: "",
						navigate: ''
					},
				],
				payList: [
					{
						id: 0,
						src: "/static/images/my_1.png",
						text: "待支付",
						navigate: '/pages/my-order/my-order?id=1'
					},
					{
						id: 1,
						src: "/static/images/my_2.png",
						text: "待发货",
						navigate: '/pages/my-order/my-order?id=2'
					},
					{
						id: 2,
						src: "/static/images/my_3.png",
						text: "待收货",
						navigate: '/pages/my-order/my-order?id=3'
					},
					{
						id: 3,
						src: "/static/images/my_4.png",
						text: "待评价",
						navigate: '/pages/my-order/my-order?id=4'
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
						// navigate: ""
					},
					{
						id: 1,
						src: "/static/images/my_list_2.png",
						text: "换新礼遇",
						navigate: "/pages/renew-code/renew-code"
					},
					{
						id: 2,
						src: "/static/images/my_list_3.png",
						text: "地址管理",
						navigate: "/pages/address/address"
					},
					{
						id: 3,
						src: "/static/images/my_list_4_1.png",
						text: "收藏管理",
						navigate: "/pages/collect-list/collect-list"
					},	
					// {
					// 	id: 3,
					// 	src: "/static/images/my_list_4.png",
					// 	text: "维修保养",
					// 	// navigate: "/pages/maintenance/maintenance"
					// 	navigate: ""
					// },
					{
						id: 4,
						src: "/static/images/my_list_5.png",
						text: "我的优惠券",
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
		components: {
			tabbar
		},
		onShow() {
			uni.hideTabBar({
			    animation: false
			})
		},
		computed: {
			...mapState({
				loginStatus:state=>state.user.loginStatus,
				userInfo:state=>state.user.userInfo
			})
		},
		methods: {
			...mapMutations(['login']),
			getLogin() {
				uni.getUserProfile({
					desc: '获取你的昵称、头像、地区及性别',
					success: res => {
						var avatarUrl = res.userInfo.avatarUrl;
						var username = res.userInfo.nickName;
						uni.login({
							provider: 'weixin',
							success: loginRes => {
								uni.getUserInfo({
									desc: '获取用户头像和名称',
									success: infoRes => {
										let data = infoRes.userInfo;
										this.$H.post('Index/getUserInfo',{
											code: loginRes.code
										}).then(res => {
											this.updateUserInfo(res.data.openid, avatarUrl, username);
											// 状态存储
											res.data.avataUrl = avatarUrl;
											res.data.nickName = username;
											this.login(res.data)
											uni.showToast({
												title: '登录成功'
											});
										}).catch(err=>{
											if(err.msg){
												uni.showToast({
													title: err.msg,
													icon: 'none'
												});
											}
											uni.hideLoading()
										})
									}
								});
							},
							fail: res => {
								console.log("App微信获取用户信息失败", res);
							}
						});
					},
					fail(err) {
						console.log(err)
					}
				})
				
			},
			updateUserInfo(openid, avatarUrl, username) {
				this.$H.post('Index/updateUserInfo', {
					openid: openid,
					avataUrl: avatarUrl,
					nickName: username
				}).then((res) => {})
			},
			
			linkTo(data) {
				console.log(typeof data)
				uni.navigateTo({
					url: typeof data === 'string' ? data : data.navigate
				});
			}
		}
	}
</script>
<style>
	page {
		height: 100vh;
		overflow: hidden;
	}
	.scroll-line{
		height: calc(100vh - 100rpx);
		overflow-y: scroll !important;
	}
</style>
<style lang="scss" scoped>
	.my-head {
		.top-image {
			height: 500rpx !important;
		}
		.portrait-head {
			top: 120rpx;
			left: 60rpx;
			.portrait {
				margin-right: 24rpx;
				width: 134rpx;
				height: 134rpx;
			}
		}
	}
	.my-vip-card {
		margin: -186rpx 60rpx 0;
		.vip-image {
			height: 385rpx;
		}
		.my-vip-list {
			height: 100%;
			image {
				width: 50rpx;
				&.my_iff {
					width: 96rpx;
					margin-top: 62rpx;
				}
			}
			text {
				color: #988067;
			}
			.item-list {
				margin-left: 120rpx;
				.item {
					width: 110rpx;
					text {
						line-height: 24rpx;
					}
				}
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
				width: 45rpx;
				height: 45rpx;
			}
			text {
				color: #363636;
			}
		}
	}
	.my-list {
		.item {
			height: 150rpx;
			&::before {
				content: "";
				position: absolute;
				right: 0;
				top: 0;
				width: 2rpx;
				height: 100%;
				background-color: #7f8c60;
			}
			&:nth-of-type(1),
			&:nth-of-type(2),
			&:nth-of-type(3) {
				&::after {
					content: "";
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 2rpx;
					background-color: #7f8c60;
				}
			}
			&:nth-of-type(3n) {
				&::before {
					background-color: #FFFFFF;
				}
			}
			image {
				width: 50rpx;
				height: 50rpx;
			}
			text {
				color: #333;
			}
		}
	}
</style>
