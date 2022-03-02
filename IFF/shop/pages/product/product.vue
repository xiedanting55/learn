<template>
	<view class="product">
		<view class="mx-3 d-flex a-center j-sb flex-wrap">
			<view class="mt-2 item d-flex a-center j-center flex-column" v-for="(item,index) in list" :key="index" @click="linkTo(item)">
				<image :src="item.images" class="bigIamge" lazy-load></image>
				<view class="col-4-line d-flex a-center j-center main-bg-color w-100">
					<image src="/static/images/icon1-white.png" mode="widthFix" class="mr-1"></image>
					<price :sizeBol="20" :priceValue="item.price" :mainTextColor="'#fff'" />
				</view>
			</view>
		</view>
		<!-- 没有数据 -->
		<no-thing v-if="list.length === 0" msg="没有商品"></no-thing>
		<!-- 上拉加载更多 -->
		<view class="text-center text-light-muted font-md py-3">{{loadtext}}</view>
	</view>
</template>

<script>
	import noThing from "@/components/no-thing/no-thing"
	export default {
		data() {
			return {
				activeIndex: "",
				goodsValue: "",
				page: 1,
				// 1.上拉加载更多 2.加载中... 3.没有更多了
				loadtext: "上拉加载更多",
				list: []
			}
		},
		components: {
			noThing
		},
		onLoad(option) {
			this.activeIndex = option.id;
			this.goodsValue = option.str;
			this.__init();
		},
		onReachBottom() {
			// 是否已经处于加载状态
			if (this.loadtext !== '上拉加载更多') return;
			// 改变加载状态
			this.loadtext = '加载中...'
			this.page++;
			// 请求数据
			this.__init(false)
		},
		methods: {
			__init(refresh = true, callback = false) {
				let page = refresh ? 1 : this.page
				this.$H.get('Goods/goodsList', {
					cat_id: this.activeIndex,
					keywords: this.goodsValue,
					p: page
				}).then((res) => {
					this.list = refresh ? [...res.data.goodsList] : [...this.list, ...res.data.goodsList];
					// 恢复加载状态
					this.loadtext = res.data.goodsList.length < 7 ? '没有更多了' : '上拉加载更多';
					if (typeof callback === 'function') {
						callback()
					}
				})
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
	.product {
		.item {
			width: 335rpx;

			.bigIamge {
				width: 335rpx;
				height: 335rpx;
			}

			.col-4-line {
				line-height: 65rpx;

				image {
					width: 30rpx;
				}
			}
		}
	}
</style>
