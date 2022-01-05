<template>
	<view class="my-info">
		<text class="m-3 main-text-24 d-block">基本信息</text>
		<view class="my-info-list rounded mx-3 main-bg-gray-color">
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">头像</text>
				<view class="d-flex a-center j-sb item-re">
					<image src="/static/images/my_head.png" class="photo rounded-circle"></image>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">昵称</text>
				<view class="d-flex a-center j-sb item-re">
					<input type="text" class="text2 main-text-24" value="小米米" />
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">手机号</text>
				<view class="d-flex a-center j-sb item-re">
					<input type="text" class="text2 main-text-24" value="187****0091" />
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">性别</text>
				<view class="d-flex a-center j-sb item-re">
					<!-- <picker class="text2 main-text-24" @change="sexPickerChange" :value="sexIndex" :range="sexList" range-key="name">
						<view class="uni-input">{{sexList[sexIndex].name}}</view>
					</picker> -->
					<text class="text2 main-text-24">保密</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">生日</text>
				<view class="d-flex a-center j-sb item-re">
					<text class="text2 main-text-24">请选择生日</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">地区</text>
				<view class="d-flex a-center j-sb item-re">
					<text class="text2 main-text-24">请选择地区</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">收货地址</text>
				<view class="d-flex a-center j-sb item-re">
					<input type="text" value="" />
					<!-- <text class="text2"></text> -->
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sexIndex: 0,
				sexList: [
					{name:'保密'},
					{name: '男'}, 
					{name:'女'}
				],
			}
		},
		methods: {
			sexPickerChange(e) {
				this.sexIndex = e.detail.value;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-info {
		.item {
			.text2 {
				color: #b6b6b6;
			}
			.photo {
				width: 80rpx;
				height: 80rpx;
			}
			.item-re {
				width: 436rpx;
			}
		}
	}
</style>
