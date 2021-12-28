<template>
	<view class="add-edit-address">
		<view class="item rounded mx-3 mt-1">
			<view class="d-flex a-center border-bottom py-1">
				<text class="text1 pl-1">收件人</text>
				<input class="text2 pl-1" type="text" placeholder="请填写收货人姓名" />
				<view class="row a-center j-end mr-1 row-re">
					<image src="/static/images/maintenance-txl.png" mode="widthFix"></image>
					<text class="pl-1">通讯录</text>
				</view>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="text1 pl-1">电话号码</text>
				<input class="text2 pl-1" type="number" placeholder="+86" />
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="text1 pl-1">所在地区</text>
				<text class="text2 pl-1">广东深圳市罗湖区</text>
				<view class="d-flex a-center j-end mr-1 row-re">
					<image src="/static/images/maintenance-dw.png" mode="widthFix"></image>
					<text class="pl-1">定位</text>
				</view>
			</view>
			<view class="d-flex row-max a-center border-bottom py-1">
				<text class="text1 pl-1">详细地址</text>
				<text class="text2 pl-1">草埔西吓围新村</text>
				<view class="d-flex a-center j-end mr-1 row-re">
					<image src="/static/images/maintenance-yy.png" mode="widthFix" class="small"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isAdd: true
			}
		},
		methods: {
			
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:"新建收货地址"
			})
		}
	}
</script>

<style lang="scss" scoped>
	.add-edit-address {
		.d-flex {
			background-color: #e4e4e4;
			&.row-max {
				height: 102rpx;
			}
		}
		text, input {
			display: block;
			font-size: 24rpx;
		}
		.text1 {
			width: 120rpx;
			color: #2f2f2f;
		}
		.text2 {
			width: 425rpx;
			color: #2d2d2d;
		}
		image {
			width: 30rpx;
			&.small {
				width: 24rpx;
			}
		}
		.row-re {
			width: 115rpx;
		}
	}
</style>
