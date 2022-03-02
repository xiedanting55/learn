<template>
	<view class="my-order" style="height: 100vh;display: flex;flex-direction: column;">
		<view class="search m-3 d-flex a-center px-2 py-1 rounded-4 main-bg-gray-color">
			<input type="text" v-model="searchVal" placeholder="搜索我的订单" class="ml-2" @confirm="__init()" />
			<image src="/static/images/sousuo.png" mode="widthFix" @click="__init()"></image>
		</view>
		<scroll-view scroll-x class="border-bottom scroll-row mx-3" style="height: 80rpx;" :scroll-into-view="scrollinto" :scroll-with-animation="true">
			<view class="scroll-row-item px-3" @click="changeTab(index)" style="height: 72rpx;line-height: 80rpx;" v-for="(item,index) in tabBars" :key="index" :class="tabIndex === index ? 'active':''" :id="'tab'+index">
				<text class="font-md">{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper :duration="150" :current="tabIndex" style="flex: 1;" @change="onChangeTab">
			<swiper-item v-for="(item,index) in newsitems" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" @scrolltolower="loadmore(index)" @scroll="goScroll" :scroll-with-animation="true" :scroll-top="scrollTop">
					<view class="m-3">
						<template v-if="item.list.length > 0">
							<block v-if="index === 0" v-for="(list,listIndex) in item.list" :key="listIndex">
								<view class="item p-3 rounded my-2 main-bg-gray-color" @click="orderDetail(list.order_id)">
									<itemTop :pic="'/static/images/icon1.png'" :name="list.goods_list[0].cat_name" :orderType="list.order_type" isBorder>
										<template slot="right">
											<text class="main-text-color main-text-20">{{list.order_status_desc}}</text>
										</template>
									</itemTop>
									<view class="item-body my-3" v-for="(goods, goodsIndex) in list.goods_list" :key="goods.goods_id">
										<view class="d-flex a-start j-sb">
											<image :src="goods.original_img" class="rounded"></image>
											<view class="content ml-3">
												<text class="d-block main-text-30">{{goods.goods_name}}</text>
												<text class="bg-white px-1 rounded main-text-24" v-if="goods.spec_key_name.length > 0">{{goods.spe}}</text>
												<view></view>
												<text class="d-inline-block main-text-color main-text-20 border main-border-color rounded-4 px-1 mt-1">七天无理由退换货</text>
												<!-- <text class="d-block main-text-color main-text-30">数量：{{goods.goods_num}}</text> -->
											</view> 
											<view class="item-body-re text-right">
												<price :sizeNumber="30" :priceValue="goods.goods_price" />
												<count :sizeBol="20" :sizeNumber="24" :countValue="goods.goods_num" />
												<!-- <text class="text1 main-text-color text-right d-block main-text-18">共{{goods.goods_num}}件</text> -->
											</view>
										</view>
										<view class="item-more d-flex a-center j-end w-100" v-if="list.goods_list.length > 1">
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24" v-if="list.shipping_status == 1 && list.pay_status == 1 && list.order_status == 2 && goods.is_aftersales==0" @click.stop="sale(goods.order_id, goods.goods_id, list.order_status)">退换/售后</text>
										</view>
									</view>
									<view class="d-flex a-center j-end">
										<view class="d-flex a-center ml-1">
											<text class="main-text-color main-text-18 mr-1">总价</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.goods_price" />
										</view>
										<view class="d-flex a-center ml-1">
											<text class="main-text-color main-text-18 mr-1">优惠</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.coupon_price ? list.coupon_price : 0" />
										</view>
										<view class="d-flex a-center ml-1" v-if="list.shipping_price != '0.00'">
											<text class="main-text-color main-text-18 mr-1">运费</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.shipping_price" />
										</view>
										<view class="d-flex a-center ml-2">
											<text class="main-text-color main-text-18 mr-1">需付款</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.total_amount" />
										</view>
									</view>
									<view class="item-more d-flex a-center j-end w-100 flex-wrap">
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 mb-1" @click.stop="buy(list.order_id)">再次购买</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-1 mb-1" v-if="list.shipping_status == 1 && list.pay_status == 1 && list.order_status == 2 && list.goods_list[0].is_aftersales==0" @click.stop="sale(list.order_id, list.goods_list[0].goods_id, list.order_status)">退换/售后</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2 mb-1"v-if="list.pay_status == 1 && list.shipping_status == 0 && (list.order_status == 0 || list.order_status == 1)" @click.stop="editAddress(list.order_id)">修改地址</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2 mb-1" v-if="list.pay_status == 0 && list.order_status == 0" @click.stop="pay(list.order_id)">付款</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2 mb-1" v-if="list.pay_status == 1 && list.invoice_status == 0 && (list.order_status == 0 || list.order_status == 1)" @click.stop="appltBill(list.goods_price, list.order_id)">申请发票</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2 mb-1" v-if="list.shipping_status == 1 && list.pay_status == 1 && (list.order_status == 0 || list.order_status == 1)" @click.stop="wuliu(list.order_id)">查看物流</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2 mb-1" v-if="list.shipping_status == 1 && list.pay_status == 1 && list.order_status == 1" @click.stop="confirmOrder(list.order_id)">确认收货</text>
										<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2 mb-1" v-if="list.pay_status == 1 && list.order_status == 12 && list.order_type == '换新订单'" @click.stop="sendBack(list.order_id)">寄回</text>
									</view>
								</view>
							</block>
							<block v-if="index === 1" v-for="(list,listIndex) in item.list" :key="listIndex">
								<view class="item p-3 rounded my-2 main-bg-gray-color" @click="orderDetail(list.order_id)">
									<itemTop :pic="'/static/images/icon1.png'" :name="list.goods_list[0].cat_name" :orderType="list.order_type" isBorder>
										<template slot="right">
											<text class="main-text-color main-text-20">{{list.order_status_desc}},订单将在24小时后自动取消</text>
										</template>
									</itemTop>
									<view class="item-body mt-3 d-flex a-start j-sb" v-for="(goods, goodsIndex) in list.goods_list" :key="goods.goods_id">
										<image :src="goods.original_img" class="rounded"></image>
										<view class="content ml-3">
											<text class="d-block main-text-30">{{goods.goods_name}}</text>
											<text class="bg-white px-1 rounded main-text-24" v-if="goods.spec_key_name.length > 0">{{goods.spe}}</text>
											<view></view>
											<text class="d-inline-block main-text-color main-text-20 border main-border-color rounded-4 px-1 mt-1">七天无理由退换货</text>
										</view>
										<view class="item-body-re text-right">
											<price :sizeNumber="30" :priceValue="goods.goods_price" />
											<count :sizeBol="20" :sizeNumber="24" :countValue="goods.goods_num" />
										</view>
									</view>
									<view class="d-flex a-center j-end">
										<view class="d-flex a-center ml-1">
											<text class="main-text-color main-text-18 mr-1">总价</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.goods_price" />
										</view>
										<view class="d-flex a-center ml-1">
											<text class="main-text-color main-text-18 mr-1">优惠</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.coupon_price ? list.coupon_price : 0" />
										</view>
										<view class="d-flex a-center ml-1" v-if="list.shipping_price != '0.00'">
											<text class="main-text-color main-text-18 mr-1">运费</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.shipping_price" />
										</view>
										<view class="d-flex a-center ml-2">
											<text class="main-text-color main-text-18 mr-1">需付款</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.total_amount" />
										</view>
									</view>
									<view class="d-flex a-center j-end">
										<view class="item-more d-flex a-center j-end span-14">
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24" @click.stop="buy(list.order_id)">再次购买</text>
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2" v-if="list.order_status == 0 && list.pay_status == 0" @click.stop="cancelOrder(list.order_id)">取消订单</text>
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2" v-if="list.pay_status == 1 && list.shipping_status == 0 && (list.order_status == 0 || list.order_status == 1)" @click.stop="editAddress(list.order_id)">修改地址</text>
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2" v-if="list.pay_status == 0 && list.order_status == 0" @click.stop="pay(list.order_id)">付款</text>
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2" v-if="list.pay_status == 1 && list.order_status == 12 && list.order_type == '换新订单'" @click.stop="sendBack(list.order_id)">寄回</text>
										</view>
									</view>
								</view>
							</block>
							<block v-if="index === 2" v-for="(list,listIndex) in item.list" :key="listIndex">
								<view class="item p-3 rounded my-2 main-bg-gray-color" @click="orderDetail(list.order_id)">
									<itemTop :pic="'/static/images/icon1.png'" :name="list.goods_list[0].cat_name" :orderType="list.order_type" isBorder>
										<template slot="right">
											<text class="main-text-color main-text-20">{{list.order_status_desc}}</text>
										</template>
									</itemTop>
									<view class="item-body mt-3 d-flex a-start j-sb" v-for="(goods, goodsIndex) in list.goods_list" :key="goods.goods_id">
										<image :src="goods.original_img" class="rounded"></image>
										<view class="content ml-3">
											<text class="d-block main-text-30">{{goods.goods_name}}</text>
											<text class="bg-white px-1 rounded main-text-24" v-if="goods.spec_key_name.length > 0">{{goods.spe}}</text>
												<view></view>
												<text class="d-inline-block main-text-color main-text-20 border main-border-color rounded-4 px-1 mt-1">七天无理由退换货</text>
										</view>
										<view class="item-body-re text-right">
											<price :sizeNumber="30" :priceValue="goods.goods_price" />
											<count :sizeBol="20" :sizeNumber="24" :countValue="goods.goods_num" />
										</view>
									</view>
									<view class="d-flex a-center j-end">
										<view class="d-flex a-center ml-1">
											<text class="main-text-color main-text-18 mr-1">总价</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.goods_price" />
										</view>
										<view class="d-flex a-center ml-1">
											<text class="main-text-color main-text-18 mr-1">优惠</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.coupon_price ? list.coupon_price : 0" />
										</view>
										<view class="d-flex a-center ml-1" v-if="list.shipping_price != '0.00'">
											<text class="main-text-color main-text-18 mr-1">运费</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.shipping_price" />
										</view>
										<view class="d-flex a-center ml-2">
											<text class="main-text-color main-text-18 mr-1">需付款</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.total_amount" />
										</view>
									</view>
									<view class="d-flex a-center j-end">
										<view class="item-more d-flex a-center j-end span-14">
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24" @click.stop="buy(list.order_id)">再次购买</text>
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2" v-if="list.pay_status == 1 && list.invoice_status == 0 && (list.order_status == 0 || list.order_status == 1)" @click.stop="appltBill(list.goods_price, list.order_id)">申请发票</text>
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2" v-if="list.pay_status == 1 && list.shipping_status == 0 && (list.order_status == 0 || list.order_status == 1)" @click.stop="editAddress(list.order_id)">修改地址</text>
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2" v-if="list.pay_status == 1 && list.order_status == 12 && list.order_type == '换新订单'" @click.stop="sendBack(list.order_id)">寄回</text>
										</view>
									</view>
								</view>
							</block>
							<block v-if="index === 3" v-for="(list,listIndex) in item.list" :key="listIndex">
								<view class="item p-3 rounded my-2 main-bg-gray-color" @click="orderDetail(list.order_id)">
									<itemTop :pic="'/static/images/icon1.png'" :name="list.goods_list[0].cat_name" :orderType="list.order_type" isBorder>
										<template slot="right">
											<text class="main-text-color main-text-20">{{list.order_status_desc}}</text>
										</template>
									</itemTop>
									<view class="item-body mt-3 d-flex a-start j-sb" v-for="(goods, goodsIndex) in list.goods_list" :key="goods.goods_id">
										<image :src="goods.original_img" class="rounded"></image>
										<view class="content ml-3">
											<text class="d-block main-text-30">{{goods.goods_name}}</text>
											<text class="bg-white px-1 rounded main-text-24" v-if="goods.spec_key_name.length > 0">{{goods.spe}}</text>
											<view></view>
											<text class="d-inline-block main-text-color main-text-20 border main-border-color rounded-4 px-1 mt-1">七天无理由退换货</text>
											<!-- <view></view>
											<text class="d-inline-block main-text-24">运费险</text>
											<text class="d-inline-block main-text-18">退换货可自带理赔</text> -->
										</view>
										<view class="item-body-re d-flex a-end j-end flex-column">
											<price :sizeNumber="30" :priceValue="goods.goods_price" />
											<count :sizeBol="20" :sizeNumber="24" :countValue="goods.goods_num" />
											<text class="main-text-24 main-text-24 mt-2">已出单</text>
										</view>
									</view>
									<view class="d-flex a-center j-end">
										<view class="d-flex a-center ml-1">
											<text class="main-text-color main-text-18 mr-1">总价</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.goods_price" />
										</view>
										<view class="d-flex a-center ml-1">
											<text class="main-text-color main-text-18 mr-1">优惠</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.coupon_price ? list.coupon_price : 0" />
										</view>
										<view class="d-flex a-center ml-1" v-if="list.shipping_price != '0.00'">
											<text class="main-text-color main-text-18 mr-1">运费</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.shipping_price" />
										</view>
										<view class="d-flex a-center ml-2">
											<text class="main-text-color main-text-18 mr-1">需付款</text>
											<price :sizeBol="18" :sizeNumber="18" :priceValue="list.total_amount" />
										</view>
									</view>
									<!-- <view class="wuliu d-flex a-center bg-white rounded-4 mb-2 px-2">
										<image src="/static/images/solicitation.png" mode="widthFix"></image>
										<text class="main-text-24 font-weight ml-1">已揽件</text>
										<text class="main-text-24 ml-1">预计12.18送达</text>
									</view> -->
									<view class="d-flex a-center j-sb">
										<!-- <text class="main-text-20">更多</text> -->
										<text class="main-text-20"></text>
										<view class="item-more d-flex a-center j-end span-14">
											<!-- <text class="main-bg-color text-white d-block text-center rounded-4 main-text-24">延长收货</text> -->
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24" @click.stop="buy(list.order_id)">再次购买</text>
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2" v-if="list.shipping_status == 1 && list.pay_status == 1 && (list.order_status == 0 || list.order_status == 1)" @click.stop="wuliu(list.order_id)">查看物流</text>
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2" v-if="list.shipping_status == 1 && list.pay_status == 1 && list.order_status == 1" @click.stop="confirmOrder(list.order_id)">确认收货</text>
											<text class="main-bg-color text-white d-block text-center rounded-4 main-text-24 ml-2" v-if="list.pay_status == 1 && list.order_status == 12 && list.order_type == '换新订单'" @click.stop="sendBack(list.order_id)">寄回</text>
										</view>
									</view>
								</view>
							</block>
							<block v-if="index === 4" v-for="(list,listIndex) in item.list" :key="listIndex">
								<view class="item p-3 rounded my-2 main-bg-gray-color" v-for="(goods, goodsIndex) in list.goods_list" :key="goods.goods_id" @click="orderDetail(list.order_id)">
									<view class="item-body mt-3 d-flex a-start j-sb">
										<image :src="goods.original_img" class="rounded"></image>
										<view class="content ml-3">
											<text class="d-block main-text-30">{{goods.goods_name}}</text>
											<text class="bg-white px-1 rounded main-text-24" v-if="goods.spec_key_name.length > 0">{{goods.spe}}</text>
										</view>
										<view class="item-body-re d-flex a-end j-end flex-column">
											<price :sizeNumber="30" :priceValue="goods.goods_price" />
											<count :sizeBol="20" :sizeNumber="24" :countValue="goods.goods_num" />
										</view>
									</view>
									<view class="d-flex a-center j-end">
										<view class="d-inline-block py-1 px-3 main-bg-color text-white font-weight rounded text-center btn main-text-24 ml" @click="evaluate(goods.order_id, goods.goods_id)">评价</view>
									</view>
								</view>
							</block>
						</template>
						<!-- 没有数据 -->
						<no-thing v-else msg="没有数据"></no-thing>
						<view class="d-flex j-center a-center pt-3" v-if="item.list.length > 0">
							<text class="font-md text-light-muted">{{item.loadtext}}</text>
						</view>
						<!-- <view class="tuijian text-center py-3" v-show="index != 0">
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
						</view> -->
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<uni-popup ref="popup" background-color="#fff" type="bottom">
			<radio-group @change="radioChange">
				<label class="uni-list-cell d-flex a-center j-sb mx-3 border-bottom" v-for="(item, index) in choseList" :key="item.value">
					<view>
						<radio :value="item.value" :checked="(index+1) === current" color="#00332A" />
					</view>
					<view class="ml-1">{{item.name}}</view>
				</label>
			</radio-group>
			<view class="main-bg-color text-white w-100 send font-weight rounded-4 text-center main-text-30 mt-2" @click="chooseConfirm(total_fee)">确认</view>
		</uni-popup>
	</view>
</template>

<script>
	import itemTop from "@/components/item-top/item-top"
	import price from "@/components/price/price"
	import count from "@/components/count/count"
	import noThing from "@/components/no-thing/no-thing"
	export default {
		data() {
			return {
				scrollTop: 0,
				oldScrollTop: 0,
				searchVal: "",
				scrollinto: "",
				scrollH: 500,
				tabIndex: 0,
				tabBars: [{
						name: "全部"
					},
					{
						name: "待支付"
					},
					{
						name: "待发货"
					},
					{
						name: "待收货"
					},
					{
						name: "待评价"
					}
				],
				newsitems:[],
				editAddressOrderId: "",
				addressData: {},
				loading: false,
				radioChangeCode: 1,
				choseConfirm: false,
				choseList: [
					{
						value: 1,
						name: '个人'
					},
					{
						value: 2,
						name: '企业'
					}
				],
				current: 1,
				invoice: "",
				orderId: ""
			}
		},
		components: {
			itemTop,
			price,
			count,
			noThing
		},
		onLoad(option) {
			// 获取可视区域高度
			uni.getSystemInfo({
				success: (res) => {
					// #ifndef MP
					let navbarH = 0
					// #endif
					// #ifdef MP
					let navbarH = uni.upx2px(90)
					// #endif
					this.scrollH = res.windowHeight - uni.upx2px(132) - navbarH
				}
			})
			if(option.id) {
				this.tabIndex = parseInt(option.id);
			}
		},
		onShow() {
			this.__init(this.tabIndex);
			const pages = getCurrentPages();
			var currPage = pages[pages.length - 1];
			var prevPage = pages[pages.length - 2];
			if(Object.keys(currPage.data.addressData).length > 0) {
				this.addressData = currPage.data.addressData;
				this.editAddressQuery(currPage.data.addressData.id)
			}
			if(currPage.data.loading) {
				this.loading = prevPage.data.loading;
				this.__init(this.tabIndex);
			} 
			if(currPage.data.invoiceObj) {
				this.__init(this.tabIndex);
			}
		},
		methods: {
			__init(status) {
				let type = this.selectStatus(status);
				this.$H.post('Order/getOrderList', {
					"keywords": this.searchVal,
					"p": 1, 
					"type": type,
					"token": this.$store.state.user.token,
				}).then((res) => {
					// 根据顶部选项卡生成页面
					let arr = []
					for (var i = 0; i < this.tabBars.length; i++) {
						let obj = {
							list:[],
							// 1.加载更多 2.加载中... 3.没有更多了
							loadtext:"加载更多",
						}
						if (i === this.tabIndex) {
							obj.list = res.data.orderList;
							obj.loadtext = res.data.orderList.length < 6 ? '没有更多了' : '加载更多';
						}
						arr.push(obj)
					}
					this.newsitems = arr;
				})
			},
			goScroll(e) {
				this.oldScrollTop = e.detail.scrollTop;
			},
			selectStatus(val) {
				let obj = {
					0: "",
					1: "WAITPAY",  //待支付
					2: "WAITSEND", //待发货
					3: "WAITRECEIVE",  //待收货
					4: "WAITCCOMMENT",  //待评价
				}	
				return obj[val];
			},
			// 切换选项卡
			changeTab(index) {
				if (this.tabIndex === index) return;
				this.tabIndex = index;
				this.scrollinto = 'tab' + index;
				let item = this.newsitems[index];
				// 是否处于可加载状态
				if (item.loadtext !== '加载更多') return;
				this.addData()
			},
			// 加载数据
			async addData(callback = false,refresh = false){
				// 拿到当前索引
				let index = this.tabIndex;
				let obj = this.newsitems[index]
				// 拿到当前分类id
				let id = this.tabBars[index].id
				// 拿到当前分类的分页数
				let page = !refresh ? (Math.ceil(obj.list.length/6) + 1) : 1
				
				// 请求前
				if (page === 1) obj.loadtext = '加载中...';
				// 请求数据
				let type = this.selectStatus(this.tabIndex);
				let data = await this.$H.post('Order/getOrderList',{
					"keywords": this.searchVal,
					"p": page, 
					"type": type,
					"token": this.$store.state.user.token,
				})
				
				// 请求完数据
				if (page === 1) obj.firstLoad = '加载更多';
				
				if (data.data.orderList) {
					// 赋值
					obj.list = !refresh ? [...obj.list,...data.data.orderList] : data.data.orderList
					obj.loadtext = data.data.orderList.length < 6 ? '没有更多了' : '加载更多'
				}
				// 执行回调函数
				if (typeof callback === 'function') {
					callback()
				}
			},
			// 加载更多
			loadmore(index){
				let item = this.newsitems[index]
				// 是否处于可加载状态
				if (item.loadtext !== '加载更多') return;
				// 加载
				item.loadtext = '加载中...'
				this.addData(()=>{
					uni.showToast({
						title:'加载成功',
						icon: "none"
					})
				})
			},
			// 监听滑动列表
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			// 订单详情
			orderDetail(data) {
				uni.navigateTo({
					url: `../order-detail/order-detail?id=${data}`
				})
			},
			// 退换/售后
			sale(order_id, goods_id, order_status) {
				if(order_status == 6) {
					uni.showToast({
						title: "该商品已在售后中",
						icon: "none"
					})
				} else {
					uni.navigateTo({
						url: `../after-sale-type/after-sale-type?orderId=${order_id}&goodsId=${goods_id}`
					})
				}
			},
			// 再次购买
			buy(orderId) {
				this.$H.post("Cart/order2cart", {
					order_id: orderId,
					token: this.$store.state.user.token
				}).then(res=> {
					if(res.code === '0000') {
						uni.switchTab({
							url: "../car/car"
						})
					}
				})
			},
			// 修改地址
			editAddress(orderId) {
				this.editAddressOrderId = orderId;
				uni.navigateTo({
					url: `../address/address?status=true`
				})
			},
			editAddressQuery(addressId) {
				this.$H.post("Order/changOrderAddress", {
					order_id: this.editAddressOrderId,
					address_id: addressId,
					token: this.$store.state.user.token
				}).then(res=> {
					if(res.code === '0000') {
						uni.showToast({title: res.msg,icon: "none"});
						this.editAddressOrderId = "";
						this.addressData = {};
					}
				})
			},
			// 支付
			pay(orderId) {
				this.$H.post('Order/getWXPayData', {
					order_id: orderId,
					token: this.$store.state.user.token,
				}).then((res) => {
					if (res.code === '0000') {
						let {appId, nonceStr, signType, timeStamp, sign} = res.result.wdata;
						uni.requestPayment({
							"appId": appId,
							"nonceStr": nonceStr, //　　随机字符串
							"package": res.result.wdata.package, //　　统一下单接口 
							"signType": signType, //　　签名算法 
							"timeStamp": String(timeStamp), //　　时间戳 
							"paySign": sign, 
							success: data => {
								uni.showModal({
									title:"提示",
									content: "支付成功"
								})
								this.scrollTop = this.oldScrollTop;
								this.$nextTick(() =>{
								    this.scrollTop = 0
								});
								this.__init(this.tabIndex);
							},
							fail: err => {
								uni.showModal({
									title:"提示",
									content: "支付失败"
								})
								return;
							}
						});
							
					} else {
						uni.showToast({
							title: res.msg,
							icon: "none"
						})
					}
				})
			},
			// 取消订单
			cancelOrder(orderId) {
				this.$H.post("Order/orderCancel", {
					order_id: orderId,
					token: this.$store.state.user.token
				}).then(res=> {
					if(res.code === '0000') {
						uni.showToast({title: "取消成功",icon: "none"});
						setTimeout(()=> {
							this.scrollTop = this.oldScrollTop;
							this.$nextTick(() =>{
								this.scrollTop = 0
							});
							this.__init(this.tabIndex);
						}, 800)
					} else {
						uni.showToast({title: "取消失败",icon: "none"});
					}
				})
			},
			// 查看物流
			wuliu(orderId) {
				uni.navigateTo({
					url: `../wuliu/wuliu?orderId=${orderId}`
				})
			},
			// 申请发票
			appltBill(goods_price, orderId) {
				this.invoice = goods_price;
				this.orderId = orderId;
				this.$refs.popup.open();
			},
			radioChange(e) {
				this.radioChangeCode = e.detail.value;
			},
			// 选择发票类型
			chooseConfirm(total) {
				this.choseConfirm = true;
				if(this.choseConfirm) {
					let data = this.choseList.filter(v=> v.value == this.radioChangeCode);
					if(data.length>0) {
						let type;
						if(data[0].name == '个人' || data[0].name == '企业') {
							data[0].name == '个人' ? type = 1 : type = 2;
							uni.navigateTo({
								url: `../invoice/invoice?order=false&type=${type}&price=${this.invoice}&price=${this.invoice}&orderId=${this.orderId}`
							})
						}
					}
				}
				this.$refs.popup.close();
			},
			// 确认收货
			confirmOrder(order_id) {
				this.$H.post("Order/orderConfirm", {
					order_id: order_id,
					token: this.$store.state.user.token
				}).then(res=> {
					if(res.code === '0000') {
						uni.showToast({title: res.msg,icon: "none"});
						this.scrollTop = this.oldScrollTop;
						this.$nextTick(() =>{
							this.scrollTop = 0
						});
						this.__init(this.tabIndex);
					}
				})
			},
			// 评价
			evaluate(order_id, goods_id) {
				uni.navigateTo({
					url: `../publish-evaluation/publish-evaluation?orderId=${order_id}&goodsId=${goods_id}`
				})
			},
			// 寄回
			sendBack(order_id) {
				uni.navigateTo({
					url: `../renew-back/renew-back?orderId=${order_id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-order {
		.search {
			line-height: 56rpx;

			image {
				width: 42rpx;
			}
			input {
				height: 56rpx;
				line-height: 56rpx;
				width: 580rpx;
			}
		}
		.scroll-row-item {
			&.active {
				border-bottom: 3rpx solid #00332a;
			}
		}
		.item {
			.item-body {
				image {
					width: 175rpx;
					height: 175rpx;
				}
				.content {
					width: 295rpx;
					text {
						&:nth-of-type(1) {
							color: #292929;
						}
						&:nth-of-type(2) {
							color: #424242;
						}
					}
				}
				.item-body-re {
					width: 160rpx;
				}
			}
			.item-more {
				text {
					width: 140rpx;
					line-height: 40rpx;
					&:nth-of-type(1) {
						margin-left: 0 !important;
					}
				}
			}
		}
		.list-1 {
			.item {
				border-bottom-color: #fff;
				image {
					width: 175rpx;
					height: 175rpx;
				}
				.text3 {
					color: #3d3d3d;
					width: 345rpx;
				}
				.position-absolute {
					right: 30rpx;
					bottom: 30rpx;
					.btn {
						width: 156rpx;
					}
				}
			}
		}
		.wuliu {
			line-height: 62rpx;
			image {
				width: 30rpx;
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
		
		.uni-list-cell {
			line-height: 100rpx;
			border-bottom-color: #e4e4e4;
			flex-direction: row-reverse !important;
		}
		.send {
			line-height: 88rpx;
		}
	}
</style>
