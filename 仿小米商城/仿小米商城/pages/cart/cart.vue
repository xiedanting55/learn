<template>
	<view style="background: #F5F5F5;">
		<uni-nav-bar :right-text="isEdit ? '完成' : '编辑'" title="购物车" fixed statusBar @clickRight="isEdit = !isEdit">
		</uni-nav-bar>

		<!-- 购物车为空 -->
		<view class="py-5 d-flex a-center j-center bg-white">
			<view class="iconfont icon-gouwuche text-light-muted" style="font-size: 50upx;"></view>
			<text class="text-light-muted mx-2">购物车还是为空</text>
			<view class="px-2 py-1 border border-light-secondary rounded" hover-class="bg-light-secondary">去逛逛</view>
		</view>

		<!-- 购物车商品列表 -->
		<view class="bg-white py-2">
			<!-- 列表 -->
			<view class="d-flex a-center py-3 border-bottom border-light-secondary" v-for="(item, index) in list" :key="index">
				<label class="radio d-flex a-center j-center flex-shrink" style="width: 100upx; height: 100upx;" @click="selectItem(index)">
					<radio :value="item.id" :checked="item.checked" color="#FD6801" />
				</label>
				<image :src="item.cover" mode="widthFix" style="width: 80upx; height: 80upx;"
					class=" border border-light-secondary rounded p-2 flex-shrink"></image>
				<view class="flex-1 d-flex flex-column pl-2">
					<view class="text-dark" style="font-size: 35upx;">{{item.title}}</view>
					<view class="d-flex text-light-muted mb-1">
						<text class="mr-1" v-for="(attr, attrsIndex) in item.attrs" :key="attrsIndex">{{attr.list[attr.selected].name}}</text>
					</view>
					<view class="mt-auto d-flex j-sb">
						<price>{{item.pprice}}</price>
						<view class="a-self-end">
							<uni-number-box :min="item.minnum" :max="item.maxnum" :value="item.num" @change="changeNumber($event,item, index)"></uni-number-box>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 合计 -->
		<view class="d-flex a-center position-fixed left-0 right-0 bottom-0 border-top border-light-secondary a-stretch" style="height: 100upx; z-index: 100;">
			<label class="radio d-flex a-center j-center flex-shrink" style="width: 100upx; height: 100upx;" @click="doSelectAll">
				<radio value="1" color="#FD6801" :checked="checkedAll" :disabled="disableSelectAll" />
			</label>
			<view class="flex-1 d-flex a-center j-center font-md">
				合计
				<price>{{totalPrice}}</price>
			</view>
			<view class="flex-1 d-flex a-center j-center main-bg-color text-white font-md" hover-class="main-bg-hover-color">结算</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue"
	import price from "@/components/common/price.vue"
	import uniNumberBox from "@/components/uni-ui/uni-number-box/uni-number-box.vue"
	import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
		components: {
			uniNavBar,
			price,
			uniNumberBox
		},
		data() {
			return {
				isEdit: false
			}
		},
		onLoad() {
			console.log(this.$store)
		},
		computed: {
			...mapState({
				list: state => state.cart.list
			}),
			...mapGetters(["checkedAll", "totalPrice", "disableSelectAll"])
		},
		methods: {
			...mapActions(["doSelectAll"]),
			...mapMutations(["selectItem"]),
			changeNumber(event,item, index) {
				item.num = event;
				console.log(event,item, index)
			},
		}
	}
</script>

<style>

</style>
