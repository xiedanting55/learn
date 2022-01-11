<template>
	<view class="tabbar" :style="{'padding-bottom': paddingBottomHeight + 'rpx'}">
		<view class="tabbar-item d-flex a-center j-center flex-column" v-for="(item, index) in list" :key="index" @click="tabbarChange(item.path,index)">
			<template v-if="index != 3">
				<cover-image class="item-img" :src="item.icon_a" v-if="current == index"></cover-image>
				<cover-image class="item-img" :src="item.icon" v-else></cover-image>
				<cover-view class="item-name" :class="{'tabbarActive': current == index}" v-if="item.text">{{item.text}}</cover-view>
			</template>
			<template v-else>
				<button open-type="contact" class="d-flex a-center j-center flex-column" show-message-card session-from send-message-path send-message-title>
					<image class="item-img" :src="item.icon_a" v-if="current == index"></image>
					<image class="item-img" :src="item.icon" v-else></image>
					<view class="item-name" :class="{'tabbarActive': current == index}" v-if="item.text">{{item.text}}</view>
				</button>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			current: String
		},
		data() {
			return {
				paddingBottomHeight: 0, //苹果X以上手机底部适配高度
				list: [{
					text: '全部商品',
					icon: '/static/tabbar/goods.png',
					icon_a: '/static/tabbar/goods.png',
					path: "/pages/goods/goods", //页面路径
				}, {
					text: '购物车',
					icon: '/static/tabbar/car.png',
					icon_a: '/static/tabbar/car.png',
					path: "/pages/car/car",
				}, {
					text: '首页',
					icon: '/static/tabbar/home.png',
					icon_a: '/static/tabbar/home-active.png',
					path: '/pages/index/index',
				}, {
					text: '专属顾问',
					icon: '/static/tabbar/adviser.png',
					icon_a: '/static/tabbar/adviser.png',
					path: "/pages/adviser/adviser",
				}, {
					text: '我的',
					icon: '/static/tabbar/my.png',
					icon_a: '/static/tabbar/my-active.png',
					path: "/pages/my/my",
				}]
			};
		},
		created() {
			let that = this;
			uni.getSystemInfo({
				success: function(res) {
					let model = ['X', 'XR', 'XS', '11', '12', '13', '14', '15'];
					model.forEach(item => {
						//适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
						if (res.model.indexOf(item) != -1 && res.model.indexOf('iPhone') != -1) {
							that.paddingBottomHeight = 40;
						}
					})
				}
			});
		},
		methods: {
			tabbarChange(path, index) {
				if(index == 3) return;
				uni.switchTab({
					url: path
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.tabbarActive {
		color: #00332a !important;
	}
	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100rpx;
		background-color: #ffffff;
		.tabbar-item {
			height: 100rpx;
			width: 25%;
			.item-img {
				margin-bottom: 4rpx;
				width: 46rpx;
				height: 46rpx;
			}
			.item-name {
				font-size: 26rpx;
				color: #A3A3A3;
				display: block;
				line-height: 30rpx;
			}
		}
		/deep/ button {
			background: none;
			height: 100rpx;
			padding: 0;
			&::after {
				border: none;
				height: 100rpx;
			}
		}
	}
</style>
