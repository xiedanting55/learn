<template>
	<view>
		<!-- 标题 -->
		<view class="font-lg text-dark my-3 px-2">{{detail.title}}</view>
		<!-- 内容 -->
		<u-parse className="uparse" :content="context" @preview="preview" @navigate="navigate"></u-parse>
	</view>
</template>

<script>
	var htmlString = `
	<p>
		<img src="https://i8.mifile.cn/v1/a1/9c3e29dc-151f-75cb-b0a5-c423a5d13926.webp">
		<img src="https://i8.mifile.cn/v1/a1/f442b971-379f-5030-68aa-3b0accb8c2b9.webp">
		<img src="https://i8.mifile.cn/v1/a1/63b700b6-643e-ec18-fdf3-da66b4b4173f.webp">
		<img src="https://i8.mifile.cn/v1/a1/e9dbf276-193e-11c4-99a6-3097fde82350.webp">
		<img src="https://i8.mifile.cn/v1/a1/1249d3ee-2990-a2b4-28d9-f719c2417b1f.webp">
		<img src="https://i8.mifile.cn/v1/a1/97c79915-64b2-808c-53b4-4345652a179f.webp">
		<img src="https://i8.mifile.cn/v1/a1/cd0fbe1e-a1b3-a87a-f4a6-6fb08ec54931.webp">
	</p>
	    `
	import uParse from "@/components/uni-ui/uParse/src/wxParse.vue"
	export default {
		data() {
			return {
				detail: {},
				context: htmlString
			}
		},
		components: {
			uParse
		},
		onLoad(e) {
			if (!e.detail) {
				return uni.navigateBack({
					delta: 1
				});
			}
			// 初始化数据
			this.detail = JSON.parse(e.detail)
			// 设置页面标题
			uni.setNavigationBarTitle({
				title: this.detail.title
			})
		},
		methods: {
			preview(src, e) {
				// do something
				console.log("src: " + src);
			},
			navigate(href, e) {
				// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
				console.log("href: " + href);
			}
		}
	}
</script>

<style>
	page {
		overflow-x: hidden;
	}
	/deep/ .uparse .p {
		padding: 0 !important;
	}

	/deep/ .uparse view,
	/deep/ .uparse uni-view {
		line-height: 0 !important;
	}
</style>
