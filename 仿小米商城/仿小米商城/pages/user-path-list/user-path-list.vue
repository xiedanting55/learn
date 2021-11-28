<template>
	<view>
		<uni-swipe-action :options="options" @click="bindClick">
			<uni-list-item>
				<view class="text-secondary">
					<view class="d-flex a-center">
						<text class="main-text-color">楚绵</text>
						158****531
						<text class="main-text-color">[默认]</text>
					</view>
					<view>
						广东省 广州市 白云区
					</view>
					<view>
						XXXXX街道
					</view>
				</view>
			</uni-list-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	import uniSwipeAction from "@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		data() {
			return {
				options: [{
					text: '修改',
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
			}
		},
		components: {
			uniSwipeAction,
			uniListItem
		},

		// 监听导航栏按钮点击
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				uni.navigateTo({
					url: '../user-path-edit/user-path-edit'
				});
			}
		},
		methods: {
			bindClick(value) {
				switch (value.index) {
					case 0: // 修改

						break;
					case 1: // 删除

						break;
				}
			},
		}
	}
</script>

<style>

</style>
