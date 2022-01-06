<template>
	<view class="publish-evaluation">
		<view class="m-3 px-3 py-4 rounded main-bg-gray-color">
			<view class="d-flex mt-1">
				<image src="/static/images/edit-gray.png" mode="widthFix"></image>
				<textarea value="" placeholder="从多个角度评价宝贝，可以帮助更多想买的人" class="ml-1 main-text-24" />
			</view>
			<text class="d-block text-right font-weight limite main-text-18">0/200</text>
			<view class="upload bg-white my-3 rounded d-flex a-center j-center flex-column">
				<image src="/static/images/upload.png" mode="widthFix"></image>
				<text class="font-weight mt-1 main-text-18">添加图片/视频</text>
			</view>
			<text class="main-text-18">您的评价内容在商品评价页面将会被匿名展示</text>
		</view>
		<view class="main-bg-color text-white position-fixed bottom-0 left-0 w-100 send font-weight rounded-4 text-center main-text-30">发表追评</view>
	</view>
</template>

<script>
	import start from "@/components/start/start"
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
		image {
			width: 28rpx;
		}
		.limite {
			color: #aaa;
		}
		.upload {
			height: 224rpx;
			image {
				width: 74rpx;
			}
		}
		.send {
			line-height: 88rpx;
		}
	}
</style>
