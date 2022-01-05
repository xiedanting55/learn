<template>
	<view class="index">
		<view class="top position-fixed top-0 left-0 w-100">
			<view class="d-flex a-center j-sb m-3">
				<uni-easyinput class="easyinput" :inputBorder="false" suffixIcon="search" v-model="value" placeholder="搜索..." @iconClick="iconClick"></uni-easyinput>
				<image src="/static/images/ewm.png" class="ewm ml-1"></image>
				<image src="/static/images/txm.png" class="txm ml-2"></image>
			</view>
		</view>
		<swiper indicator-dots autoplay :interval="3000" :duration="200" :indicator-active-color="'#00332a'" circular class="w-100" style="height: 100vh;">
			<block v-for="(item,index) in bannerList" :key="index">
				<swiper-item>
					<image :src="item.src" lazy-load class="w-100" style="height: 100vh;"></image>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	import uniEasyinput from '@/components/uni-ui/uni-easyinput/uni-easyinput.vue'
	export default {
		data() {
			return {
				value: "",
				bannerList: [
					{
						id: 0,
						src: "/static/images/banner1.png"
					},
					{
						id: 1,
						src: "/static/images/banner2.png"
					},
					{
						id: 2,
						src: "/static/images/banner3.png"
					}
				]
			}
		},
		components:{
			uniEasyinput
		},
		onLoad() {

		},
		methods: {
			iconClick(data) {
				console.log(this.value)  //拿到的值
				console.log(data)  //点击了右边
			}
		}
	}
</script>
<style lang="scss" scoped>
	.top {
		z-index: 1000;
		.easyinput {
			width: 88%;
		}
		image {
			width: 55rpx;
			height: 55rpx;
		}
	}
</style>
