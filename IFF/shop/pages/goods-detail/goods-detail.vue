<template>
	<view class="goods-detail">
		<image :src="goodsObj.images" mode="widthFix" class="w-100"></image>
		<view class="goods-info m-3 d-flex flex-column">
			<view class="ml-3">
				<text class="text1 mt-3 main-text-36">{{goodsObj.goods_name}}</text>
				<price :priceValue="goodsObj.price" />
			</view>
			<view class="goods-discout d-flex a-center rounded-4 px-3 main-bg-gray-color">
				<view class="circle rounded-circle bg-white"></view>
				<text class="ml-2 main-text-24">官方直售，顺丰速运15元，满999元免邮</text>
			</view>
			<text class="mt-2 font-weight main-text-24">商品信息</text>
			<view class="goods-text mt-2">
				<text class="main-text-24">商品名称</text>
				<text class="ml-3 main-text-24">{{goodsObj.goods_name}}</text>
			</view>
			<view class="goods-text mt-2">
				<text class="main-text-24">商品编号</text>
				<text class="ml-3 main-text-24">{{goodsObj.goods_sn}}</text>
			</view>
			<view class="goods-text mt-2">
				<text class="main-text-24">商品材质</text>
				<text class="ml-3 main-text-24">{{goodsObj.material}}</text>
			</view>
			<view class="goods-text mt-2">
				<text class="main-text-24">特别说明</text>
				<text class="ml-3 main-text-24">{{goodsObj.goods_remark}}</text>
			</view>
			<view class="goods-text mt-2">
				<text class="main-text-24">商品规格</text>
				<text class="ml-3 main-text-24">{{goodsObj.goods_size}}</text>
			</view>
		</view>
		<view class="goods-xq">
			<text class="my-2 ml-3 font-weight main-text-24 d-block">图片详情</text>
			<u-parse className="uparse" :content="goodsObj.introduction"></u-parse>
		</view>
		<view class="goods-ld text-center mx-3 mt-3">
			<text class="font-weight main-text-30">产品亮点</text>
			<view class="goods-ld-image d-flex a-center j-sb flex-wrap mt-3">
				<image v-for="(item,index) in goodsObj.images_list" :key="index" :src="item" mode="widthFix"></image>
			</view>
		</view>
		<view class="goods-ld text-center mx-3 mt-3">
			<text class="font-weight main-text-30">模特展示</text>
			<image src="/static/images/coupon-bg.png" mode="widthFix" class="w-100 mt-3"></image>
		</view>
		<view class="goods-xlcp m-3">
			<text class="font-weight main-text-30">系列产品</text>
			<view class="cp-list d-flex a-center j-sb mt-3">
				<view class="item span24-8 d-flex flex-column" v-for="(item,index) in goodsObj.is_recommend" :key="index">
					<image :src="item.images" mode="widthFix" class="w-100"></image>
					<text class="main-text-18 text3">{{item.goods_name}}</text>
					<price :sizeNumber="24" :priceValue="item.price" />
				</view>
			</view>
		</view>
		<view class="goods-xq" style="margin-bottom: 60px;">
			<image src="/static/images/coupon-bg.png" mode="widthFix" class="w-100"></image>
		</view>
		<view class="detail-fixed d-flex j-sb position-fixed bottom-0 left-0 w-100 bg-white py-1 border-top">
			<view class="detail-le span-9 d-flex a-center j-sa ml-3">
				<view class="item d-flex flex-column a-center">
					<image src="/static/images/xq_06.png" mode="widthFix"></image>
					<text class="main-text-20">店铺</text>
				</view>
				<view class="item d-flex flex-column a-center">
					<image src="/static/images/xq_08.png" mode="widthFix"></image>
					<text class="main-text-20">顾问</text>
				</view>
				<view class="item d-flex flex-column a-center">
					<image src="/static/images/xq_03.png" mode="widthFix"></image>
					<text class="main-text-20">收藏</text>
				</view>
			</view>
			<view class="detail-re d-flex a-center j-center mr-3">
				<view class="add-cart text-center" hover-class="bg-light-secondary" @click="addCar">加入购物车</view>
				<view class="main-bg-color font-weight text-white text-center pay">立即支付</view>
			</view>
		</view>
	</view>
</template>

<script>
	import price from "@/components/price/price"
	import uParse from "@/components/uni-ui/uParse/src/wxParse"
	export default {
		data() {
			return {
				goodsObj: {}
			}
		},
		components: {
			price,
			uParse
		},
		onLoad(option) {
			if(option) this.__init(option.id);
		},
		methods: {
			__init(goodsId) {
				this.$H.get(`Goods/detail?goods_id=${goodsId}`).then((res)=> {
					this.goodsObj = res.goods;
				})
			},
			// 加入购物车
			addCar() {
				this.$H.post("Cart/addCart", {
					goods_id: "goods_id",
					goods_spec: []
				}, {token: true}).then(res=> {
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-detail {
		.goods-info {
			.text1 {
				font-size: 36rpx;
			}
			.goods-discout {
				line-height: 90rpx;
				.circle {
					width: 28rpx;
					height: 28rpx;
				}
			}
		}
		.goods-ld-image {
			image {
				width: 48%;
				&:nth-of-type(1) {
					width: 100%;
				}
			}
		}
		.goods-xlcp {
			.item {
				.text3 {
					color: #2e2e2e;
				}
			}
		}
		.detail-fixed {
			border-top-color: #e4e4e4;
			.detail-le {
				image {
					width: 46rpx;
					height: 46rpx;
				}
				text {
					color: #3b3b3b;
				}
			}
			.detail-re {
				view {
					width: 210rpx;
					line-height: 80rpx;
					&.add-cart {
						background-color: #e4e4e4;
						border-radius: 40rpx 0 0 40rpx;
					}
					&.pay {
						border-radius: 0 40rpx 40rpx 0;
					}
				}
			}
		}
	}
</style>
