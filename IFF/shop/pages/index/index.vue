<template>
	<view class="index">
		<view class="top position-fixed top-0 left-0 w-100">
			<view class="d-flex a-center j-sb m-3">
				<view class="d-flex a-center j-sb rounded-4 main-bg-gray-color p-1 span-17">
					<input type="text" value="" placeholder="搜索..." class="ml-1 px-2 main-text-24 span-18" />
					<image src="/static/images/search.png" class="search mr-2" mode="widthFix"></image>
				</view>
				<image src="/static/images/ewm.png" class="ewm ml-1"></image>
				<image src="/static/images/txm.png" class="txm ml-2"></image>
			</view>
		</view>
		<swiper indicator-dots autoplay :interval="3000" :duration="200" :indicator-active-color="'#00332a'" circular class="w-100" style="height: 100vh;">
			<block v-for="(item,index) in bannerList" :key="index">
				<swiper-item>
					<image :src="item.images" lazy-load class="w-100" style="height: 100vh;"></image>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: "",
				bannerList: []
			}
		},
		mounted() {
			this.__init();
		},
		methods: {
			__init() {
				this.$H.get('Index/config').then((res)=> {
					this.bannerList = res.bannerlist;
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
