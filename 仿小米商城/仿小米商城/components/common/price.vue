<template>
	<view class="d-flex main-text-color line-h" :class="priceSize">
		<text class="a-self-start" :class="uniSize">￥</text><slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			priceSize: {
				type: String,
				default: "font-md"
			},
			uniSize: {
				type: String,
				default: "font-sm"
			}
		}
	}
</script>

<style>
</style>
