<template>
	<view class="card">
		<!-- head -->
		<view v-if="showHead" class="p-2 border-bottom main-border-color">
			<slot name="title">
				<text v-if="headTitle" class="font-md font-weight">{{headTitle}}</text>
			</slot>
		</view>
		<!-- body -->
		<view>
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
			}
		}
	}
</script>

<style>
</style>
