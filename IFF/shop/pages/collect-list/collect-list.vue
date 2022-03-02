<template>
	<scroll-view scroll-y class="collect-list" @scrolltolower="scrolltolowerQuery">
		<view class="mx-3 item p-3 d-flex a-center mt-2 rounded main-bg-gray-color" v-for="(item,index) in list" :key="index" @click="linkTo(item)">
			<image :src="item.images" mode="" class="rounded"></image>
			<view class="content ml-2">
				<text class="d-block main-text-30">{{item.goods_name}}</text>
				<text class="bg-white px-1 rounded main-text-24">{{item.spe}}</text>
			</view>
			<view class="item-body-re">
				<price :sizeNumber="30" :priceValue="item.price" />
			</view>
		</view>
		<!-- 没有数据 -->
		<no-thing v-if="list.length === 0" msg="没有商品"></no-thing>
		<!-- 上拉加载更多 -->
		<view class="text-center text-light-muted font-md py-3">{{loadtext}}</view>
	</scroll-view>
</template>

<script>
	import noThing from "@/components/no-thing/no-thing"
	import price from "@/components/price/price"
	export default {
		data() {
			return {
				list: [],
				page: 1,
				// 1.上拉加载更多 2.加载中... 3.没有更多了
				loadtext: "上拉加载更多",
			}
		},
		components: {
			noThing,
			price
		},
		onLoad() {
			this.__init();
		},
		methods: {
			__init(refresh = true, callback = false) {
				let page = refresh ? 1 : this.page
				this.$H.post("Goods/collectGoodsList", {
					p: page,
					token: this.$store.state.user.token
				}).then(res=> {
					this.list = refresh ? [...res.data.goodsList] : [...this.list, ...res.data.goodsList];
					// 恢复加载状态
					this.loadtext = res.data.goodsList.length < 7 ? '没有更多了' : '上拉加载更多';
					if (typeof callback === 'function') {
						callback()
					}
				})
			},
			scrolltolowerQuery() {
				// 是否已经处于加载状态
				if (this.loadtext !== '上拉加载更多') return;
				// 改变加载状态
				this.loadtext = '加载中...'
				this.page++;
				// 请求数据
				this.__init(false)
			},
			linkTo(item) {
				uni.navigateTo({
					url: `../goods-detail/goods-detail?id=${item.goods_id}`
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.collect-list {
		height: 100vh;
		.item {
			image {
				width: 175rpx;
				height: 175rpx;
			}
			.content {
				width: 330rpx;
				text {
					&:nth-of-type(1) {
						color: #292929;
					}
					&:nth-of-type(2) {
						color: #424242;
					}
				}
			}
		}
	}
</style>
