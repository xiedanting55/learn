<template>
	<view style="background: #F5F5F5;">
		<!-- <view class="position-relative border" style="height:400rpx;">
			<no-thing icon="no_pay" msg="你还没有待付款订单"></no-thing>
		</view> -->

		<!-- 选项卡 -->
		<view class="d-flex bg-white a-center font-md text-muted border-top border-bottom">
			<view class="flex-1 d-flex a-center j-center py-2" v-for="(item,index) in tabBars" :key="index"
				:class="tabIndex === index ? 'tabactive' : ''" @tap="changeTab(index)">
				{{item.name}}
			</view>
		</view>

		<!-- 订单列表 -->
		<block v-for="(tab,tabI) in tabBars" :key="tabI">
			<view class="position-relative" v-show="tabI === tabIndex" style="min-height: 440rpx;">
				<template v-if="tab.list.length > 0">
					<!-- 订单列表 -->
					<block v-for="(item,index) in tab.list" :key="index">
						<order-list :item="item" :index="index"></order-list>
					</block>
				</template>
				<!-- 默认无 -->
				<template v-else>
					<no-thing :icon="tab.no_thing" :msg="tab.msg"></no-thing>
				</template>
			</view>
		</block>

		<!-- 猜你喜欢 -->
		<view class="text-center main-text-color font-md font-weight mt-5">猜你喜欢</view>
		<view class="position-relative d-flex a-center j-center text-secondary mb-3 pt-3">
			<view style="background: #F5F5F5;z-index: 2;" class="px-2 position-absolute">
				买的人还买了</view>
			<view class="position-absolute" style="height: 1upx;left: 0;right: 0;background-color: #DDDDDD;"></view>
		</view>
		<view class="row j-sb bg-white">
			<common-list v-for="(item,index) in hotList" :key="index" :item="item" :index="index">
			</common-list>
		</view>
	</view>
</template>

<script>
	import commonList from "@/components/common/common-list.vue"
	import noThing from "@/components/common/no-thing.vue"
	import orderList from "@/components/order/order-list.vue"
	export default {
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: "全部",
						no_thing: "no_pay",
						msg: "你还没有订单",
						list: [{
								create_time: "2019-09-10 10:20",
								status: "已发货",
								order_items: [{
									cover: "/static/images/demo/demo6.jpg",
									title: "小米8",
									pprice: 1999.00,
									attrs: "金色 标配",
									num: 1
								}],
								total_num: 3,
								total_price: 299.00
							},
							{
								create_time: "2019-09-10 10:20",
								status: "已发货",
								order_items: [{
									cover: "/static/images/demo/demo6.jpg",
									title: "小米8",
									pprice: 1999.00,
									attrs: "金色 标配",
									num: 1
								}],
								total_num: 3,
								total_price: 299.00
							}
						],
					},
					{
						name: "待付款",
						no_thing: "no_pay",
						msg: "你还没有待付款订单",
						list: []
					},
					{
						name: "待收货",
						no_thing: "no_receiving",
						msg: "你还没有待收货订单",
						list: []
					},
					{
						name: "待评价",
						no_thing: "no_comment",
						msg: "你还没有待评价订单",
						list: []
					}
				],
				hotList: [{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						desc: "1.5匹变频",
						oprice: 2699,
						pprice: 1399
					},
					{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						desc: "1.5匹变频",
						oprice: 2699,
						pprice: 1399
					},
					{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						desc: "1.5匹变频",
						oprice: 2699,
						pprice: 1399
					},
					{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						desc: "1.5匹变频",
						oprice: 2699,
						pprice: 1399
					},
					{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						desc: "1.5匹变频",
						oprice: 2699,
						pprice: 1399
					},
					{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						desc: "1.5匹变频",
						oprice: 2699,
						pprice: 1399
					}
				]
			}
		},
		components: {
			commonList,
			noThing,
			orderList
		},
		methods: {
			// 切换选项卡
			changeTab(index) {
				this.tabIndex = index;
			}
		}
	}
</script>

<style>
	.tabactive {
		border-bottom: 5rpx solid #FD6801;
		color: #FD6801;
		margin-bottom: -5rpx;
	}
</style>
