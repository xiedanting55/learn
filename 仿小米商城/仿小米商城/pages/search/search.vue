<template>
	<view>
		<card headTitle="热门搜索" bodyCover="/static/images/demo/search-banner.png" />
		<!-- 多色按钮 -->
		<view class="px-1 mb-2">
			<colorTag v-for="(item, index) in hot" :key="index" :item="item" />
		</view>
		<!-- 常用分类 -->
		<card headTitle="常用分类" bodyPadding :headBorderBottom="false">
			<colorTag v-for="(item, index) in cate" :key="index" :item="item" :color="false" />
		</card>
		<divider />
		<!-- 搜索记录 -->
		<card headTitle="搜索记录">
			<uni-list-item title="小米" :showArrow="false"></uni-list-item>
			<uni-list-item title="小米" :showArrow="false"></uni-list-item>
		</card>
	</view>
</template>

<script>
	import card from "@/components/common/card.vue"
	import colorTag from "@/components/search/color-tag.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components: {
			card,
			colorTag,
			uniListItem
		},
		data() {
			return {
				hot: [{
						name: '领券中心'
					},
					{
						name: 'Redmi K20'
					},
					{
						name: 'RedmiBook 14'
					},
					{
						name: '智能积木 越野四驱车'
					},
					{
						name: '手环 腕带'
					}
				],
				cate: [{
						name: '耳机'
					},
					{
						name: '手机'
					},
					{
						name: '音箱'
					},
					{
						name: '手表'
					},
					{
						name: '配件'
					},
					{
						name: '网关/传感器'
					},
					{
						name: '健康'
					},
					{
						name: '酷玩'
					},
				]
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index == 0) {
				uni.navigateTo({
					url: "../search-list/search-list"
				})
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
