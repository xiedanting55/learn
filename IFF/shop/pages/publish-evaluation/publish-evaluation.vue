<template>
	<view class="publish-evaluation">
		<view class="item-2 m-3 px-3 py-4 rounded">
			<view class="d-flex a-center">
				<text class="text1 font-weight">描述相符</text>
				<view class="ml-1">
					<start is_attitude @change="onChange" />
				</view>
			</view>
			<view class="d-flex mt-1">
				<image src="/static/images/edit-gray.png" mode="widthFix"></image>
				<textarea value="" placeholder="从多个角度评价宝贝，可以帮助更多想买的人" class="ml-1" />
			</view>
			<text class="d-block text-right font-weight limite">0/200</text>
			<view class="upload bg-white my-3 rounded d-flex a-center j-center flex-column">
				<image src="/static/images/upload.png" mode="widthFix"></image>
				<text class="font-weight mt-1">添加图片/视频</text>
			</view>
			<text class="text1">您的评价内容在商品评价页面将会被匿名展示</text>
		</view>
		
		<view class="item-2 m-3 px-3 py-3 rounded">
			<view class="item-2-text d-flex a-center j-sb">
				<text class="font-weight">物流服务评价</text>
				<text class="main-text-color">满意请给5星哦</text>
			</view>
			<view class="line d-flex a-center mt-1">
				<text class="d-block text3">商品符合度</text>
				<start @change="onChange" />
			</view>
			<view class="line d-flex a-center mt-1">
				<text class="d-block text3">店家服务态度</text>
				<start @change="onChange" />
			</view>
			<view class="line d-flex a-center mt-1">
				<text class="d-block text3">店家配送速度</text>
				<start @change="onChange" />
			</view>
			<view class="line d-flex a-center mt-1">
				<text class="d-block text3">快递员服务</text>
				<start @change="onChange" />
			</view>
			<view class="line d-flex a-center mt-1">
				<text class="d-block text3">快递包装</text>
				<start @change="onChange" />
			</view>
		</view>
		<view class="main-bg-color text-white position-fixed bottom-0 left-0 w-100 send font-weight rounded-4 text-center">发布</view>
	</view>
</template>

<script>
	import start from "@/components/start/start.vue"
	export default {
		data() {
			return {
				
			}
		},
		components: {
			start
		},
		methods: {
			onChange(d){
				console.log(d)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.publish-evaluation {
		.item-2 {
			background-color: #e4e4e4;
			.text1,
			textarea {
				font-size: 24rpx;
			}
			image {
				width: 28rpx;
			}
			.limite {
				font-size: 18rpx;
				color: #aaa;
			}
			.upload {
				height: 224rpx;
				image {
					width: 74rpx;
				}
				text {
					&:nth-of-type(1) {
						font-size: 18rpx;
					}
					&:nth-of-type(2) {
						font-size: 14rpx;
					}
 				}
			}
			.item-2-text {
				text {
					&:nth-of-type(1) {
						font-size: 30rpx;
					}
					&:nth-of-type(2) {
						font-size: 20rpx;
					}
				}
			}
			.line {
				.text3 {
					font-size: 24rpx;
					color: #2f2f2f;
					width: 190rpx;
				}
			}
		}
		.send {
			line-height: 88rpx;
			font-size: 30rpx;
		}
	}
</style>
