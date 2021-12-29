<template>
	<view class="goods">
		<view class="mx-3 my-2">
			<uni-easyinput class="col-9" :inputBorder="false" :colorIcon="'#515151'" :size="20" suffixIcon="search" v-model="value" placeholder="搜索..." @iconClick="iconClick"></uni-easyinput>
		</view>  
		<view class="d-flex">
			<scroll-view id="leftScroll" scroll-y style="flex: 1;height: 100%;" :scroll-top="leftScrollTop">
				<view class="border-bottom py-1 left-scroll-item border-color" hover-class="bg-light-secondary" v-for="(item,index) in cate" :key="index" @tap="changeCate(index)">
					<view class="py-1 font-md text-muted text-center" :class="activeIndex === index ? 'class-active' : ''">{{item.name}}</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y style="flex: 2.5;height: 100%;" :scroll-top="rightScrollTop" :scroll-with-animation="true" @scroll="onRightScroll">
				<!-- <view class="row right-scroll-item" 
				v-for="(item,index) in list" 
				:key="index">
					<view class="span24-8 text-center py-2"
					v-for="(item2,index2) in item.list" :key="index2"
					 @click="openDetail(item2)">
						<image :src="item2.cover"
						style="width: 120upx;height: 120upx;"
						class="bg-light"></image>
						<text class="d-block">{{item2.name}}</text>
					</view>
				</view> -->
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import uniEasyinput from '@/components/uni-ui/uni-easyinput/uni-easyinput.vue'
	export default {
		data() {
			return {
				value: "",
				activeIndex: 0,
				cate: [
					{
						id: 0,
						name: "新品上市"
					},
					{
						id: 1,
						name: "热销单品"
					},
					{
						id: 2,
						name: "品牌系列"
					},
					{
						id: 3,
						name: "耳饰"
					},
					{
						id: 4,
						name: "项链"
					},
					{
						id: 5,
						name: "首饰"
					},
					{
						id: 6,
						name: "戒指"
					},
					{
						id: 7,
						name: "礼盒"
					},
					{
						id: 8,
						name: "价格专区"
					}
				],
				leftScrollTop: 0,
				rightScrollTop: 0
			}
		},
		components:{
			uniEasyinput
		},
		methods: {
			// 点击左边分类
			changeCate(index){
				this.activeIndex = index
				// 右边scroll-view滚动到对应区块
				this.rightScrollTop = this.rightDomsTop[index]
			},
			// 监听右边滚动事件
			async onRightScroll(e){
				// 匹配当前scrollTop所处的索引
				this.rightDomsTop.forEach((v,k)=>{
					if (v < e.detail.scrollTop + 3) {
						this.activeIndex = k
						return false
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.goods {
		.uni-easyinput {
			background-color: #e4e4e4 !important;
		}
		.border-color {
			border-color: #00332a;
		}
	}
</style>
