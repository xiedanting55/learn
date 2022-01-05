<template>
	<view class="car">
		<!-- 购物车为空 -->
		<!-- <view class="empty d-flex a-center j-center flex-column">
			<image src="/static/images/car.png" mode="widthFix"></image>
			<text class="mt-3">您的购物车是空的</text>
			<text class="main-bg-color text-center text-white mt-2 px-3">继续购物</text>
		</view> -->
		<!-- 购物车商品列表 -->
		<view class="car-list">
			<view class="item p-3 m-3 rounded">
				<view class="item-head border-bottom d-flex a-center j-sb pb-1">
					<view class="d-flex a-center">
						<label class="radio d-flex a-center j-center flex-shrink" style="width: 80upx;height: 80upx;" >
							<radio checked color="#00332a"/>
						</label>
						<image src="/static/images/icon1.png" mode="widthFix"></image>
						<text class="ml-2 font-weight">项链</text>
					</view>
				</view>
				<view class="d-flex a-center mt-2">
					<label class="radio d-flex a-center j-center flex-shrink" style="width: 80upx;height: 80upx;" >
						<radio checked color="#00332a"/>
					</label>
					
					<image src="/static/images/my_1.png" mode="widthFix"class="rounded"></image>
					<view class="flex-1 d-flex flex-column pl-2">
						<view class="text1">精美项链</view>
						<!-- 规格属性 -->
						<view class="mb-1">
							<view class="bg-white rounded px-1 d-inline-block">
								<text class="mr-2">金色，中号</text>
								<view class="arrow arrow-bottom d-inline-block" style="margin-bottom: 6rpx;"></view>
							</view>
						</view>
						<view class="mt-auto d-flex j-sb">
							<view class="price">
								<text class="main-text-color font-weight">¥</text>
								<text class="main-text-color font-weight ml-1">999</text>
							</view>
							<view class="a-self-end">
								<uni-number-box :min="1" 
								value="0" :max="10"
								@change="changeNum($event)">
								<!-- @change="changeNum($event,item,index)"> -->
								</uni-number-box>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="tuijian text-center p-3">
				<text class="text2 d-block">为您推荐</text>
				<view class="d-flex a-center j-sb mt-3">
					<view class="tuijian-item d-flex flex-column a-start">
						<image src="/static/images/my_1.png" mode="widthFix" class="w-100"></image>
						<text class="text4 mt-1">精美项链</text>
						<text class="text4">金色，中号</text>
						<view class="d-flex a-center">
							<view class="price">
								<text class="main-text-color font-weight">¥</text>
								<text class="main-text-color font-weight ml-1">999</text>
							</view>
							<text class="text5 ml-2">100+人购买</text>
						</view>
					</view>
					<view class="tuijian-item d-flex flex-column a-start">
						<image src="/static/images/my_1.png" mode="widthFix" class="w-100"></image>
						<text class="text4 mt-1">精美项链</text>
						<text class="text4">金色，中号</text>
						<view class="d-flex a-center">
							<view class="price">
								<text class="main-text-color font-weight">¥</text>
								<text class="main-text-color font-weight ml-1">999</text>
							</view>
							<text class="text5 ml-2">100+人购买</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 合计 -->
		<view class="count d-flex a-center j-sb position-fixed left-0 right-0 bottom-0 border-top border-light-secondary a-stretch py-2 px-3" style="height: 100rpx;z-index: 1000;">
					 <label class="radio d-flex a-center j-sb flex-shrink"
					 style="width: 120upx;">
					 	<radio color="#00332a" checked /> 
						<text class="text1">全选</text>
					 </label>
					 <view class="d-flex a-center j-sb">
						<view class="d-flex a-center j-center flex-column">
							<view class="d-flex a-center j-center">
								<text class="text1 font-weight">合计</text>
								<view class="price">
									<text class="text3">￥</text>
									<text class="text2 font-weight main-text-color">111</text>
								</view>
							</view>
							<text class="text3">(共优惠：￥111)</text>
						</view>
						<view class="d-flex a-center j-center main-bg-color text-white rounded-4 py-2 px-4 ml-2" hover-class="main-bg-hover-color" style="height: 100%;"> 结算(0)</view>
					 </view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from "@/components/uni-ui/uni-number-box/uni-number-box.vue"
	export default {
		data() {
			return {
				
			}
		},
		components: {
			uniNumberBox
		},
		methods: {
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
		text {
			font-size: 30rpx;
		}
	}
	.car-list {
		.item {
			background-color: #e4e4e4;
			.item-head {
				text {
					font-size: 30rpx;
				}

				image {
					width: 35rpx;
				}

				.success {
					font-size: 20rpx;
				}
			}
			image {
				width: 175rpx;
				height: 175rpx;
			}
			.text1 {
				font-size: 30rpx;
			}
		}
		.price {
			text {
				&:nth-of-type(1) {
					font-size: 24rpx;
				}
		
				&:nth-of-type(2) {
					font-size: 36rpx;
				}
			}
		}
		.tuijian {
			.text2 {
				font-size: 30rpx;
			}
			.text4 {
				font-size: 24rpx;
				line-height: 38rpx;
			}
			.tuijian-item {
				width: 48%;
			}
			.text5{
				font-size: 18rpx;
			}
		}
	}
	.count {
		background-color: #e4e4e4;
		text {
			color: #333;
		}
		.text1 {
			font-size: 30rpx;
		}
		.text2 {
			font-size: 36rpx;
		}
		.text3 {
			font-size: 24rpx;
		}
	}
</style>
