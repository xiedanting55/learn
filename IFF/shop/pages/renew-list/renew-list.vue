<template>
	<view class="product-info">
		<text class="d-block text-center m-3 main-text-30 font-weight">产品信息</text>
		<view class="info rounded mx-3 main-bg-gray-color">
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block">产品名称：</text>
				<text class="main-text-24 pl-1">{{oldInfo.goods_name}}</text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block">产品颜色：</text>
				<text class="main-text-24 pl-1">{{oldInfo.colorname}}</text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block">产品材质：</text>
				<text class="main-text-24 pl-1">{{oldInfo.unit}}</text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block">产品尺寸：</text>
				<text class="main-text-24 pl-1">{{oldInfo.spe}}</text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block">产品重量：</text>
				<text class="main-text-24 pl-1">{{oldInfo.weight}}</text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block">产品编码：</text>
				<text class="main-text-24 pl-1">{{oldInfo.goods_sn}}</text>
			</view>
			<view class="d-flex a-center border-bottom py-1">
				<text class="pl-1 main-text-24 font-weight d-block">购买时间：</text>
				<text class="main-text-24 pl-1">{{oldInfo.add_time | setTime}}</text>
			</view>
			<view class="d-flex a-center j-end price py-2 mr-3">
				<text class="pl-1 main-text-color main-text-30 font-weight">金额：</text>
				<price :sizeBol="30" :priceValue="oldInfo.sale_price" />
			</view>
		</view>
		<button class="main-bg-color text-white rounded-4 main-text-30 font-weight mx-3 mt-5" @click="exchange">去换新</button>
		<!-- <view class="hx-list mx-3 mt-3">
			<text class="main-text-30 font-weight">换新列表</text>
			<view class="item p-3 rounded main-bg-gray-color mt-2" v-for="(item,index) in list" :key="index">
				<view class="item-head d-flex a-center j-sb">
					<text class="main-text-30 font-weight">新品</text>
					<view class="item-head-re main-bg-color rounded d-flex a-center j-center px-1" @click="exchange(item)">
						<text class="text-white font-weight main-text-30">换购</text>
						<view class="arrow arrow-right arrow-white"></view>
					</view>
				</view>
				<view class="item-body my-3 d-flex a-center j-sb">
					<image :src="item.images" mode="widthFix" class="rounded"></image>
					<view class="content ml-3">
						<text class="d-block main-text-30">{{item.goods_name}}</text>
						<text class="bg-white px-1 main-text-24 rounded">规格</text>
					</view>
					<view class="item-body-re">
						<price :sizeNumber="36" :priceValue="item.price" />
						<count :sizeBol="30" :sizeNumber="36" :countValue="1" />
					</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import price from "@/components/price/price"
	import count from "@/components/count/count"
	import noThing from "@/components/no-thing/no-thing"
	export default {
		data() {
			return {
				oldInfo: {},
				list: [],
			}
		},
		components: {
			price,
			count,
			noThing
		},
		onLoad(option) {
			let data = JSON.parse(option.oldInfo);
			this.oldInfo = data;
			this.__init();
		},
		filters: {
			// 时间戳转换具体时间
			setTime(str){
				var n = parseInt(str)*1000;
				var D = new Date(n);
				var year = D.getFullYear();//四位数年份
				var month = D.getMonth()+1;//月份(0-11),0为一月份
					month = month<10?('0'+month):month;
				var day = D.getDate();//月的某一天(1-31)
					day = day<10?('0'+day):day;
				var hours = D.getHours();//小时(0-23)
					hours = hours<10?('0'+hours):hours;
				var minutes = D.getMinutes();//分钟(0-59)
					minutes = minutes<10?('0'+minutes):minutes;
				var now_time = year+'-'+month+'-'+day+' '+hours+':'+minutes;
				return now_time;
			}
		},
		methods: {
			__init(refresh = true, callback = false) {
				this.$H.get('Goods/goodsList', {
					cat_id: "",
					keywords: "",
					p: 1
				}).then((res) => {
					this.list.push(res.data.goodsList[0]);
				})
			},
			// 换购
			exchange() {
				uni.navigateTo({
					url: `../renew-product/renew-product?oldId=${this.oldInfo.id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.product-info {
		.hx-list {
			.item {
				.item-body {
					image {
						width: 175rpx;
						height: 175rpx;
					}
					.content {
						width: 330rpx;
					}
				}
			}
		}
	}
</style>
