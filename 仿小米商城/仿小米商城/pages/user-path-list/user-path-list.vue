<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<uni-swipe-action :options="options" @click="bindClick($event,index)">
				<uni-list-item clickable @click="chose(item)">
					<view class="text-secondary">
						<view class="d-flex a-center">
							<text class="main-text-color">{{item.name}}</text>
							{{item.phone}}
							<text class="main-text-color" v-if="item.isdefault">[默认]</text>
						</view>
						<view>{{item.path}}</view>
						<view>{{item.detailPath}}</view>
					</view>
				</uni-list-item>
			</uni-swipe-action>
		</block>
	</view>
</template>

<script>
	import uniSwipeAction from "@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import {mapState, mapMutations} from "vuex"
	export default {
		data() {
			return {
				isChose: false,
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
				}]
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
		computed: {
			...mapState({
				list: state => state.path.list
			}),	
		},
		onLoad(e) {
			e.type === 'chose' ? this.isChose = true : this.isChose = false;
		},
		methods: {
			...mapMutations(["delPath"]),
			bindClick(value, i) {
				switch (value.index) {
					case 0: // 修改
						let obj = JSON.stringify({
							index: i,
							item: this.list[i]
						})
						setTimeout(()=> {
							uni.navigateTo({
								url: '../user-path-edit/user-path-edit?data=' + obj,
							});
						},50)
						break;
					case 1: // 删除
						uni.showModal({
							content: '要删除该收货地址吗？',
							success: (res) => {
								if (res.confirm) {
									this.delPath(i)
									uni.showToast({
										title: '删除成功'
									});
								}
							}
						});
						break;
				}
			},
			// 选择收获地址
			chose(item) {
				if(this.isChose) {
					// 通知订单提交页修改收获地址
					uni.$emit('chosePath', item);
					// 关闭当前页面
					uni.navigateBack({
						delta: 1
					});
				}
			}
		}
	}
</script>

<style>

</style>
