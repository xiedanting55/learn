<template>
	<view class="row j-center m-2">
		<block v-for="(item,index) in resData" :key="index">
			<view class="span-4 d-flex flex-column j-center a-center py" @tap="event(item)">
				<image :src="item.src" style="width: 60upx; height: 60upx;" mode="widthFix"></image>
				<text class="font-sm">{{item.text}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			resData: Array
		},
		methods: {
			event(item) {
				console.log("点击了")
			}
		}
	}
</script>

<style>
</style>
