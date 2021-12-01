<template>
	<!-- 左边w373 h530 -->
	<!-- 右边w375 h264 边h2 -->
	<view class="d-flex">
		<image :src="resData.big.src" lazy-load style="width: 373upx; height: 530upx; margin-right: 2upx;" @tap="event(resData.big)"></image>
		<view class="d-flex flex-column">
			<image :src="resData.smalltop.src" lazy-load style="width: 375upx; height: 264upx; margin-bottom: 2upx;" @tap="event(resData.smalltop)"></image>
			<image :src="resData.smallbottom.src" lazy-load style="width: 375upx; height: 264upx;" @tap="event(resData.smallbottom)"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			resData: Object
		},
		methods: {
			event(obj) {
				console.log("点击了")
			}
		}
	}
</script>

<style>
</style>
