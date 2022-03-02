<template>
	<view class="renew-code" style="height: 100vh;">
		<view class="p-3 bg-white top">
			<view class="line d-flex a-center j-sb rounded-4 main-bg-gray-color">
				<view class="input d-flex a-center pl-3">
					<image src="/static/images/search.png" mode="widthFix" @click="__init()"></image>
					<input type="text" v-model="searchVal" placeholder="请输入产品编号" class="ml-1" @confirm="__init()" />
				</view>
				<image src="/static/images/ewm.png" class="ewm mr-3" @click="saoma"></image>
			</view>
		</view>
		<scroll-view scroll-y class="renew-courtesy position-relative" :style="{'height': scrollH + 'px'}" @scrolltolower="scrolltolowerQuery">
			<view class="item mx-3 mb-2 p-3 rounded main-bg-gray-color" v-for="(item,index) in list" :key="index" @click="linkTo(item)">
				<itemTop :pic="'/static/images/icon1.png'" :name="item.cat_name" isBorder />
				<view class="item-body d-flex a-start j-sb mt-3">
					<view class="d-flex a-center">
						<image :src="item.images" mode=""></image>
						<view class="content ml-3">
							<text class="d-block main-text-30">{{item.goods_name}}</text>
							<text class="bg-white px-1 rounded main-text-24">{{item.spe}}</text>
							<price :sizeNumber="36" :priceValue="item.sale_price" />
						</view>
					</view>
					<text
						class="main-bg-color text-white font-weight text-center rounded text-status main-text-30 px-2">{{item.order_id == 0 ? '可换新' : '已换新'}}</text>
				</view>
			</view>
			<!-- 没有数据 -->
			<no-thing v-if="list.length === 0" msg="没有商品"></no-thing>
			<!-- 上拉加载更多 -->
			<view class="text-center text-light-muted font-md py-3">{{loadtext}}</view>
		</scroll-view>
	</view>
</template>

<script>
	import itemTop from "@/components/item-top/item-top"
	import price from "@/components/price/price"
	export default {
		data() {
			return {
				searchVal: "",
				scrollH: 500,
				list: [],
				// 1.上拉加载更多 2.加载中... 3.没有更多了
				loadtext: "上拉加载更多",
				page: 1
			}
		},
		components: {
			itemTop,
			price
		},
		onLoad(option) {
			this.__init();
			uni.getSystemInfo({
				success: (res) => {
					// #ifndef MP
					let navbarH = 0
					// #endif
					// #ifdef MP
					let navbarH = uni.upx2px(90)
					// #endif
					this.scrollH = res.windowHeight - uni.upx2px(72) - navbarH
				}
			})
		},
		methods: {
			__init(refresh = true, callback = false) {
				let page = refresh ? 1 : this.page
				this.$H.post('User/renewList', {
					keyword: this.searchVal,
					p: page,
					token: this.$store.state.user.token
				}).then((res) => {
					this.list = refresh ? [...res.data.goodsList] : [...this.list, ...res.data.goodsList];
					// 恢复加载状态
					this.loadtext = res.data.goodsList.length < 7 ? '没有更多了' : '上拉加载更多';
					if (typeof callback === 'function') {
						callback()
					}
				})
			},
			scrolltolowerQuery() {
				// 是否已经处于加载状态
				if (this.loadtext !== '上拉加载更多') return;
				// 改变加载状态
				this.loadtext = '加载中...'
				this.page++;
				// 请求数据
				this.__init(false)
			},
			saoma() {
				let _this = this;
				uni.authorize({
					scope: 'scope.camera',
					success(result) {
						uni.scanCode({
							success: data => {
								if (data.result) {
									_this.$H.post("User/addRenewGoods", {
										code: data.result,
										token: _this.$store.state.user.token
									}).then(res => {
										uni.showToast({
											title: res.msg,
											icon: "none"
										})
										_this.__init();
									})
								}
								// console.log('条码类型：' + res.scanType);
								// console.log('条码内容：' + res.result);
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
			},
			linkTo(data) {
				if(data.order_id == 0) {
					uni.navigateTo({
						url: `../renew-list/renew-list?oldInfo=${JSON.stringify(data)}`
					})
				} else {
					uni.showToast({
						title: "该商品已经换新，无法再次换新",
						icon: "none"
					})
				}
			}
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
				line-height: 76rpx;
				height: 76rpx;
			}
		}
	}

	.item {
		.item-body {
			image {
				width: 174rpx;
				height: 174rpx;
			}
		}
	}
</style>
