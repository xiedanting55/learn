<template>
	<view class="index">
		<view class="top position-fixed top-0 left-0 w-100">
			<view class="d-flex a-center j-sb m-3">
				<view class="d-flex a-center j-sb rounded-4 main-bg-gray-color p-1 span-17">
					<input type="text" v-model="goodsValue" placeholder="搜索..." class="ml-1 px-2 main-text-24 span-18" @confirm="linkToPro" />
					<image src="/static/images/search.png" class="search mr-2" mode="widthFix" @click="linkToPro"></image>
				</view>
				<image src="/static/images/ewm.png" class="ewm ml-1" @click="ewm"></image>
				<image src="/static/images/txm.png" class="txm ml-2" @click="linkToPro"></image>
			</view>
		</view>
		<swiper indicator-dots autoplay :interval="3000" :duration="200" :indicator-active-color="'#00332a'" circular class="w-100" style="height: calc(100vh - 130rpx);">
			<block v-for="(item,index) in bannerList" :key="index">
				<swiper-item>
					<view class="w-100" style="height: calc(100vh - 130rpx);" :style="{'background':`url(${item.images}) center center no-repeat`, 'background-size': 'cover'}" @click="linkTo(item)"></view>
					<!-- <image :src="item.images" lazy-load></image> -->
				</swiper-item>
			</block>
		</swiper>
		<tabbar :current="2"></tabbar>
	</view>
</template>

<script>
    import tabbar from '@/components/tabbar/tabbar'
	export default {
		data() {
			return {
				goodsValue: "",
				bannerList: [],
				seriesList: []
			}
		},
		mounted() {
			this.__init();
		},
		components: {
			tabbar
		},
		onShow() {
			uni.hideTabBar({
			    animation: false
			})
		},
		methods: {
			__init() {
				this.$H.get('Index/config').then((res)=> {
					this.bannerList = res.data.bannerlist;
					this.seriesList = res.data.serieslist;
					this.$store.state.user.freight = res.data.freight;
					this.$store.state.user.freight_free = res.data.freight_free;
					this.$store.state.user.express_list = res.data.express_list;
					this.$store.state.user.send_back_address = res.data.send_back_address;
					this.$store.state.user.send_back_contact = res.data.send_back_contact;
					this.$store.state.user.send_back_phone = res.data.send_back_phone;
				})
			},
			linkToPro() {
				uni.navigateTo({
					url: `../product/product?str=${this.goodsValue}&id=`
				})
			},
			// 扫描二维码
			ewm() {
				let _this = this;
				if(!this.$store.state.user.token) {
					uni.showModal({
						title: "提示",
						content: "您没有权限，请登录",
						success(res) {
							if(res.confirm) {
								uni.switchTab({
									url: "../my/my"
								})
							}
						}
					})
				} else {
					uni.authorize({
						scope: 'scope.camera',
						success(result) {
							uni.scanCode({
								success: data => {
									if (data.result) {
										uni.showLoading({title: "加载中..."})
										_this.$H.post("User/addRenewGoods", {
											code: data.result,
											token: _this.$store.state.user.token
										}).then(res => {
											uni.showToast({
												title: res.msg,
												icon: "none"
											})
											uni.navigateTo({
												url: `../renew-code/renew-code`
											})
										})
									}
									uni.hideLoading();
								},
								fail(err) {
									uni.showToast({
										title: "扫码失败",
										icon: "none"
									})
								}
							});
						},
						fail(err) {
							uni.showModal({
								title: '提示',
								content: '您已拒绝授权，是否去设置打开？',
								confirmText: "确认",
								cancelText: "取消",
								success: (res) => {
									if (res.confirm) {
										uni.openSetting({
											success: (res) => {}
										});
									}
								}
							});
						}
					})
				}
			},
			// 跳转系列
			linkTo(item) {
				if(item.xl_id == 0) return;
				let data = this.seriesList.filter(v=> item.xl_id == v.ser_id);
				uni.navigateTo({
					url: `../goods-series/goods-series?str=${JSON.stringify(data[0])}`
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.top {
		z-index: 1000;
		.search {
			width: 40rpx;
		}
		image {
			width: 55rpx;
			height: 55rpx;
		}
	}
</style>
