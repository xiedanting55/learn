<template>
	<view class="maintenance">
		<view class="maintenance-head w-100 main-bg-gray-color">
			<text class="d-block font-weight main-text-30">维修保养</text>
			<text class="d-block main-text-18">身边最贴心的珠宝首饰养护师</text>
		</view>
		<view class="maintenance-item mx-3 mt-3" v-for="(item,index) in maintenanceList" :key="index">
			<text class="maintenance-title main-text-24">{{item.title}}</text>
			<view class="d-flex j-sb flex-wrap">
				<view class="span-9 d-flex a-center mt-2" v-for="(maintenance,maintenanceInd) in item.data" :key="maintenanceInd" @click="linkTo(item)">
					<image :src="maintenance.src" class="rounded-4" mode="widthFix"></image>
					<view class="d-flex flex-column ml-2">
						<text class="main-text-20">{{maintenance.name}}</text>
						<text class="text2 main-text-18">{{maintenance.concat}}</text>
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
				maintenanceList: [
					{
						title: "保养服务",
						data: [
							{
								id: 0,
								name: "清洗",
								concat: "超声波强清洗",
								src: "/static/images/my_1.png",
								navigate: ''
							},
							{
								id: 1,
								name: "抛光",
								concat: "精细抛光消痕",
								src: "/static/images/my_1.png",
								navigate: ''
							},
							{
								id: 2,
								name: "电镀",
								concat: "专业电镀翻新",
								src: "/static/images/my_1.png",
								navigate: ''
							},
							{
								id: 3,
								name: "整形",
								concat: "重塑矫正还原",
								src: "/static/images/my_1.png",
								navigate: ''
							},
							{
								id: 4,
								name: "深度保养",
								concat: "一步到位护理",
								src: "/static/images/my_1.png",
								navigate: ''
							}
						]
					},
					{
						title: "维护服务",
						data: [
							{
								id: 0,
								name: "加固",
								concat: "宝石镶嵌固定",
								src: "/static/images/my_1.png",
								navigate: ''
								
							},
							{
								id: 1,
								name: "补石",
								concat: "配石镶嵌",
								src: "/static/images/my_1.png",
								navigate: ''
							},
							{
								id: 2,
								name: "刻字",
								concat: "创意激光打字",
								src: "/static/images/my_1.png",
								navigate: ''
							},
							{
								id: 3,
								name: "修改尺寸",
								concat: "更改指圈尺寸",
								src: "/static/images/my_1.png",
								navigate: ''
							},
							{
								id: 4,
								name: "锻炼焊接",
								concat: "店铺优惠卷",
								src: "/static/images/my_1.png",
								navigate: ''
							},
							{
								id: 5,
								name: "综合维护",
								concat: "店铺优惠卷",
								src: "/static/images/my_1.png",
								navigate: ''
							}
						]
					}
				]
			}
		},
		methods: {
			// 维修预约--页面跳转
			linkTo(item) {
				console.log(item)
				uni.navigateTo({
					url: "../maintenance-appointment/maintenance-appointment"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.maintenance-head {
		height: 245rpx;
		text {
			color: #515151;
			margin-left: 60rpx;
			&:nth-of-type(1) {
				padding-top: 45rpx;
			}
		}
	}
	.maintenance-item {
		&:last-of-type {
			margin-bottom: 30rpx;
		}
		color: #333333;
		image {
			width: 132rpx;
		}
		.text2 {
			color: #4f4f4f;
		}
	}
</style>
