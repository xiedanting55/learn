<template>
	<view class="content">
		<view class="row a-center j-sb m-3">
			<uni-easyinput class="col-9" :inputBorder="false" suffixIcon="search" v-model="value" placeholder="搜索..." @iconClick="iconClick"></uni-easyinput>
			<image src="/static/images/ewm.png" class="ewm"></image>
			<image src="/static/images/txm.png" class="txm"></image>
		</view>
	</view>
</template>

<script>
	import uniEasyinput from '@/components/uni-ui/uni-easyinput/uni-easyinput.vue'
	export default {
		data() {
			return {
				value: "",
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

<style>
	page {
		background-color: #ebebeb;
	}
</style>
<style scoped>
	.ewm {
		width: 48rpx;
		height: 45rpx;
	}	
	.txm {
		width: 50rpx;
		height: 48rpx;
	}
</style>
