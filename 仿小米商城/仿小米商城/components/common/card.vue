<template>
	<view class="card">
		<!-- head -->
		<view v-if="showHead" class="p-2 main-border-color" :class="getHeadClass">
			<slot name="title">
				<text v-if="headTitle" class="font-md" :class="headTitleWeight ? 'font-weight': ''">{{headTitle}}</text>
			</slot>
		</view>
		<!-- body -->
		<view :class="getBodyClass" :style="bodyStyle">
			<image v-if="bodyCover" :src="bodyCover" mode="widthFix"></image>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			headTitle: String,  //头部标题
			bodyCover: String  ,//封面图
			showHead: {  //是否显示头部
				type: Boolean,
				default: true
			},
			headBorderBottom: {  //是否显示下边线
				type: Boolean,
				default: true
			},
			headTitleWeight: {  //是否显示头部加粗
				type: Boolean,
				default: true
			},
			bodyPadding: {  //是否给body加padding
				type: Boolean,
				default: false
			},
			bodyStyle: String
		},
		computed: {
			getHeadClass() {
				let BorderBottom = this.headBorderBottom ? 'border-bottom':''
				return `${BorderBottom}`
			},
			getBodyClass() {
				let padding = this.bodyPadding ? 'p-2' : ''
				return `${padding}`
			},
		}
	}
</script>

<style>
</style>
