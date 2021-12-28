<template>
	<view class="maintenance">
		<view class="maintenance-head w-100">
			<text class="d-block font-weight">维修保养</text>
			<text class="d-block">身边最贴心的珠宝首饰养护师</text>
		</view>
		<view class="maintenance-item mx-3 mt-3">
			<text class="maintenance-title">保养服务</text>
			<view class="row j-sb flex-wrap">
				<view class="span-9 row a-center mt-2" @click="linkTo">
					<image src="/static/images/my_1.png" class="rounded-4" mode="widthFix"></image>
					<view class="d-flex flex-column ml-2">
						<text class="text1">清洗</text>
						<text class="text2">超声波强清洗</text>
					</view>
				</view>
				<view class="span-9 row a-center mt-2">
					<image src="/static/images/my_1.png" class="rounded-4" mode="widthFix"></image>
					<view class="d-flex flex-column ml-2">
						<text class="text1">抛光</text>
						<text class="text2">精细抛光消痕</text>
					</view>
				</view>
				<view class="span-9 row a-center mt-2">
					<image src="/static/images/my_1.png" class="rounded-4" mode="widthFix"></image>
					<view class="d-flex flex-column ml-2">
						<text class="text1">电镀</text>
						<text class="text2">专业电镀翻新</text>
					</view>
				</view>
				<view class="span-9 row a-center mt-2">
					<image src="/static/images/my_1.png" class="rounded-4" mode="widthFix"></image>
					<view class="d-flex flex-column ml-2">
						<text class="text1">整形</text>
						<text class="text2">重塑矫正还原</text>
					</view>
				</view>
				<view class="span-9 row a-center mt-2">
					<image src="/static/images/my_1.png" class="rounded-4" mode="widthFix"></image>
					<view class="d-flex flex-column ml-2">
						<text class="text1">深度保养</text>
						<text class="text2">一步到位护理</text>
					</view>
				</view>
			</view>
		</view>
		<view class="maintenance-item mx-3 mt-3">
			<text class="maintenance-title">维护服务</text>
			<view class="row j-sb flex-wrap">
				<view class="span-9 row a-center mt-2">
					<image src="/static/images/my_1.png" class="rounded-4" mode="widthFix"></image>
					<view class="d-flex flex-column ml-2">
						<text class="text1">加固</text>
						<text class="text2">宝石镶嵌固定</text>
					</view>
				</view>
				<view class="span-9 row a-center mt-2">
					<image src="/static/images/my_1.png" class="rounded-4" mode="widthFix"></image>
					<view class="d-flex flex-column ml-2">
						<text class="text1">补石</text>
						<text class="text2">配石镶嵌</text>
					</view>
				</view>
				<view class="span-9 row a-center mt-2">
					<image src="/static/images/my_1.png" class="rounded-4" mode="widthFix"></image>
					<view class="d-flex flex-column ml-2">
						<text class="text1">刻字</text>
						<text class="text2">创意激光打字</text>
					</view>
				</view>
				<view class="span-9 row a-center mt-2">
					<image src="/static/images/my_1.png" class="rounded-4" mode="widthFix"></image>
					<view class="d-flex flex-column ml-2">
						<text class="text1">修改尺寸</text>
						<text class="text2">更改指圈尺寸</text>
					</view>
				</view>
				<view class="span-9 row a-center mt-2">
					<image src="/static/images/my_1.png" class="rounded-4" mode="widthFix"></image>
					<view class="d-flex flex-column ml-2">
						<text class="text1">锻炼焊接</text>
						<text class="text2">店铺优惠卷</text>
					</view>
				</view>
				<view class="span-9 row a-center mt-2">
					<image src="/static/images/my_1.png" class="rounded-4" mode="widthFix"></image>
					<view class="d-flex flex-column ml-2">
						<text class="text1">综合维护</text>
						<text class="text2">店铺优惠卷</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 维修预约--页面跳转
			linkTo() {
				uni.navigateTo({
					url: "../maintenance-appointment/maintenance-appointment"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.maintenance-head {
		background-color: #e4e4e4;
		height: 245rpx;
		text {
			color: #515151;
			margin-left: 60rpx;
			&:nth-of-type(1) {
				padding-top: 45rpx;
				font-size: 30rpx;
			}
			&:nth-of-type(2) {
				font-size: 18rpx;
			}
		}
	}
	.maintenance-item {
		&:last-of-type {
			margin-bottom: 30rpx;
		}
		color: #333333;
		.maintenance-title {
			font-size: 24rpx;
		}
		image {
			width: 132rpx;
		}
		.text1 {
			font-size: 18rpx;
		}
		.text2 {
			font-size: 14rpx;
			color: #4f4f4f;
		}
	}
</style>
