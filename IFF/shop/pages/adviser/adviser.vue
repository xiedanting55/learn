<template>
	<view>
		
		<tabbar :current="3"></tabbar>
	</view>
</template>

<script>
    import tabbar from '@/components/tabbar/tabbar'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			tabbar
		},
		onShow() {
			uni.hideTabBar({
			    animation: false
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
