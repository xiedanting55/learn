<template>
	<view class="car">
		<!-- 购物车为空 -->
		<!-- <view class="empty d-flex a-center j-center flex-column">
			<image src="/static/images/car.png" mode="widthFix"></image>
			<text class="mt-3 main-text-30">您的购物车是空的</text>
			<text class="main-bg-color text-center text-white mt-2 px-3 main-text-30">继续购物</text>
		</view> -->
		<!-- 购物车商品列表 -->
		<view class="car-list">
			<view class="item p-3 m-3 rounded main-bg-gray-color" v-for="(item, index) in list" :key="index">
				<itemTop :pic="'/static/images/icon1.png'" :name="item.goods_title" isBorder />
				<view class="d-flex a-center mt-2">
					<label class="radio d-flex a-center j-center flex-shrink" style="width: 80upx;height: 80upx;" @click.stop="selectItem(index)">
						<radio color="#00332a" :value="item.id|toString" :checked="item.checked" />
					</label>
					<image :src="item.images" mode="widthFix"class="rounded"></image>
					<view class="flex-1 d-flex flex-column pl-2">
						<view class="main-text-30">{{item.goods_name}}</view>
						<view class="mb-1">
							<view class="bg-white rounded px-1 d-inline-block">
								<text class="mr-2">金色，中号</text>
								<view class="arrow arrow-bottom d-inline-block" style="margin-bottom: 6rpx;"></view>
							</view>
						</view>
						<view class="mt-auto d-flex j-sb">
						<price :sizeNumber="36" :priceValue="item.price" />
							<view class="a-self-end">
								<uni-number-box :min="item.minnum" :value="item.num" :max="item.maxnum" @change="changeNum($event)"></uni-number-box>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="tuijian text-center py-3 mx-3">
				<view class="title d-flex a-center j-sb">
					<image src="/static/images/tuijian1.png" mode="widthFix"></image>
					<text class="d-block main-text-30">为您推荐</text>
					<image src="/static/images/tuijian2.png" mode="widthFix"></image>
				</view>
				<view class="d-flex a-center j-sb mt-3">
					<view class="tuijian-item d-flex flex-column a-start">
						<image src="/static/images/my_1.png" mode="widthFix" class="w-100"></image>
						<text class="text4 mt-1 main-text-24">精美项链</text>
						<text class="text4 main-text-24">金色，中号</text>
						<view class="d-flex a-center">
							<price :priceValue="999" />
							<text class="text5 ml-2 main-text-18">100+人购买</text>
						</view>
					</view>
					<view class="tuijian-item d-flex flex-column a-start">
						<image src="/static/images/my_1.png" mode="widthFix" class="w-100"></image>
						<text class="text4 mt-1 main-text-24">精美项链</text>
						<text class="text4 main-text-24">金色，中号</text>
						<view class="d-flex a-center">
							<price :priceValue="999" />
							<text class="text5 ml-2 main-text-18">100+人购买</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 合计 -->
		<view class="count d-flex a-center j-sb position-fixed left-0 right-0 bottom-0 py-1 px-3 main-bg-gray-color" style="z-index: 1000;">
			<label class="radio d-flex a-center j-sb flex-shrink" style="width: 120upx;" @click="doSelectAll">
				<radio color="#00332a"  :checked="checkedAll && list.length" :disabled="disableSelectAll" /> 
				<text class="main-text-30">全选</text>
			</label>
			<view class="d-flex a-center j-sb">
				<view class="d-flex a-center j-center flex-column">
					<view class="d-flex a-center j-center">
						<text class="main-text-30 font-weight">合计：</text>
						<price :sizeNumber="36" :priceValue="999" />
					</view>
					<text class="main-text-24">(共优惠：￥111)</text>
				</view>
				<view class="d-flex a-center j-center main-bg-color text-white rounded-4 ml-2 btn" hover-class="main-bg-hover-color" style="height: 100%;"> 结算(0)</view>
			</view>
		</view>
	</view>
</template>

<script>
	import itemTop from "@/components/item-top/item-top"
	import price from "@/components/price/price"
	import uniNumberBox from "@/components/uni-ui/uni-number-box/uni-number-box"
	import {mapState,mapGetters,mapActions,mapMutations} from "vuex"
	export default {
		data() {
			return {
			}
		},
		components: {
			itemTop,
			price,
			uniNumberBox
		},
		computed: {
			...mapState({
				list:state=>state.cart.list,
				selectedList:state=>state.cart.selectedList
			}),
			...mapGetters([
				'checkedAll',
				'disableSelectAll'
			])
		},
		methods: {
			...mapActions([
				'doSelectAll'
			]),
			...mapMutations([
				'selectItem'
			]),
			changeNum(e){
				console.log(e)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.empty {
		margin-top: 100rpx;
		image {
			width: 180rpx;
		}
	}
	.car-list {
		.item {
			image {
				width: 175rpx;
				height: 175rpx;
			}
		}
		.tuijian {
			.title {
				image {
					width: 260rpx;
				}
				text {
					width: 152rpx;
				}
			}
			.text4 {
				line-height: 38rpx;
			}
			.tuijian-item {
				width: 48%;
			}
		}
	}
	.count {
		.btn {
			width: 180rpx;
			line-height: 80rpx;
		}
	}
</style>
