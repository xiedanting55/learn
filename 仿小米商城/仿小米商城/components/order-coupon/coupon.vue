<template>
	<view class="bg-white rounded border d-flex a-center border-light-secondary mb-3">
		<view class="flex-1 d-flex flex-column j-center px-3">
			<view class="font-md" :class="item.disabled || !item.status ? 'text-light-muted':''">{{item.title}}</view>
			<view class="font text-light-muted">
				{{item.start_time}}~{{item.end_time}}
			</view>
		</view>
		<view class="text-white d-flex flex-column a-center j-center" style="width: 220rpx;height: 200rpx;"
			:class="item.disabled || !item.status ? 'bg-secondary':'main-bg-color'">
			<view style="font-size: 42rpx;line-height: 1.4;">
				{{item.price}}<text class="font">元</text>
			</view>
			<view class="font">{{item.desc}}</view>

			<view class="rounded bg-white w-50 text-center" hover-class="bg-light"
				:class="item.disabled || !item.status? 'text-secondary':'main-text-color'">
				{{ item.status ? '去使用' : '已失效'}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
	}
</script>

<style>
</style>
