<template>
	<view>
		<!-- 商品详情大图 -->
		<swiperImage :resData="banners" height="750" preview />
		<!-- 基础详情 -->
		<baseInfo :detail="detail" />
		<!-- 滚动商品特性 w170*h110 -->
		<scrollAttrs :baseAttrs="baseAttrs" />
		<!-- 属性选择 -->
		<view class="p-2">
			<view class="rounded border bg-light-secondary">
				<uni-list-item clickable @click="show('attr')">
					<view class="d-flex">
						<text class="mr-2 text-muted">已选</text>
						<text>火焰红 64G 标配</text>
					</view>
				</uni-list-item>
				<uni-list-item clickable @click="show('express')">
					<view class="d-flex">
						<text class="mr-2 text-muted">配送</text>
						<text class="mr-2">北京 东城区</text>
						<text class="main-text-color">现配</text>
					</view>
				</uni-list-item>
				<uni-list-item extraWidth="15%" clickable @click="show('service')">
					<view class="d-flex a-center">
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color"></view>
							小米自营
						</view>
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color"></view>
							小米发货
						</view>
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color"></view>
							七天无理由退货
						</view>
					</view>
				</uni-list-item>
			</view>
		</view>
		<!-- 横向滚动评论 -->
		<scroll-comments :comments="comments"></scroll-comments>
		<!-- 商品详情 -->
		<view class="py-4">
			<u-parse className="uparse" :content="context" @preview="preview" @navigate="navigate"></u-parse>
		</view>
		<!-- 热门推荐 -->
		<card headTitle="热门推荐" :headTitleWeight="false" :headBorderBottom="false">
			<view class="row j-sb">
				<common-list v-for="(item,index) in hotList" :key="index" :item="item" :index="index"></common-list>
			</view>
		</card>
		<!-- 底部操作条 -->
		<bottom-btn @show="show('attr')"></bottom-btn>
		<!-- 属性筛选框 -->
		<common-popup :popupClass="popup.attr" @hide="hide('attr')">
			<!-- 商品信息(275rpx) 图片 180*180 -->
			<view class="d-flex a-center" style="height: 275rpx;">
				<image src="../../static/images/demo/list/1.jpg" mode="widthFix" style="height: 180rpx;width: 180rpx;"
					class="border rounded"></image>
				<view class="pl-2">
					<price priceSize="font-lg" unitSize="font">2365</price>
					<text class="d-block">火焰红 64GB 标配</text>
				</view>
			</view>
			<!-- 表单部分(660rpx) -->
			<scroll-view scroll-y class="w-100" style="height: 660rpx;">
				<card :headTitle="item.title" :headTitleWeight="false" :headBorderBottom="false" :key="index"
					v-for="(item,index) in selects">
					<zcm-radio-group :label="item" :selected.sync='item.selected'></zcm-radio-group>
				</card>
				<view class="d-flex j-sb a-center p-2 border-top border-light-secondary">
					<text>购买数量</text>
					<uni-number-box :min="1" :value="detail.num" @change="detail.num = $event"></uni-number-box>
				</view>
			</scroll-view>
			<!-- 按钮(100rpx) -->
			<view class="main-bg-color text-white font-md d-flex a-center j-center" hover-class="main-bg-hover-color"
				style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;" @tap.stop="addCart">加入购物车</view>
		</common-popup>
		<!-- 收货地址 -->
		<common-popup :popupClass="popup.express" @hide="hide('express')">
			<view class="d-flex a-center j-center font-md border-bottom border-light-secondary" style="height: 100rpx;">
				收货地址</view>
			<scroll-view scroll-y class="w-100" style="height: 835rpx;">
				<uni-list-item v-for="(item,index) in list" :key="index">
					<view class="iconfont icon-dingwei font-weight font-md">{{item.name}}</view>
					<view class="font text-light-muted">{{item.path}} {{item.detailPath}}</view>
				</uni-list-item>
			</scroll-view>
			<!-- 按钮(100rpx) -->
			<view class="main-bg-color text-white font-md d-flex a-center j-center" hover-class="main-bg-hover-color"
				style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;" @tap.stop="openCreatePath">选择新的地址
			</view>
		</common-popup>

		<!-- 服务说明 -->
		<common-popup :popupClass="popup.service" @hide="hide('service')">
			<view class="d-flex a-center j-center font-md border-bottom border-light-secondary" style="height: 100rpx;">
				服务说明</view>
			<scroll-view scroll-y class="w-100" style="height: 835rpx;">
				<view class="py-1">
					<view class="d-flex a-center">
						<view class="iconfont icon-finish main-text-color mr-1"></view>
						小米自营
					</view>
					<text class="text-light-muted font pl-4">不管满多少，就是不包邮</text>
				</view>
			</scroll-view>
			<!-- 按钮(100rpx) -->
			<view class="main-bg-color text-white font-md d-flex a-center j-center" hover-class="main-bg-hover-color"
				style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;" @tap.stop="hide('service')">确定</view>
		</common-popup>
	</view>
</template>

<script>
	import swiperImage from "@/components/index/swiper-image.vue"
	import baseInfo from "@/components/detail/base-info.vue"
	import scrollAttrs from "@/components/detail/scroll-attrs.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import scrollComments from "@/components/detail/scroll-comments.vue"
	import uParse from "@/components/uni-ui/uParse/src/wxParse.vue"
	import card from "@/components/common/card.vue"
	import commonList from "@/components/common/common-list.vue"
	import bottomBtn from "@/components/detail/bottom-btn.vue"
	import commonPopup from "@/components/common/common-popup.vue"
	import price from "@/components/common/price.vue"
	import zcmRadioGroup from "@/components/common/radio-group.vue"
	import uniNumberBox from "@/components/uni-ui/uni-number-box/uni-number-box.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		components: {
			swiperImage,
			baseInfo,
			scrollAttrs,
			uniListItem,
			scrollComments,
			uParse,
			card,
			commonList,
			bottomBtn,
			commonPopup,
			price,
			zcmRadioGroup,
			uniNumberBox
		},
		data() {
			return {
				banners: [],
				detail: {},
				baseAttrs: [],
				comments: [],
				context: "",
				hotList: [],
				popupClass: "none",
				popup: {
					attr: "none",
					express: "none",
					service: "none"
				},
				selects: [],
			}
		},
		// 监听页面返回事件
		onBackPress() {
			// 关闭模态框
			for (let key in this.popup) {
				if (this.popup[key] !== 'none') {
					this.hide(key)
					return true
				}
			}
		},
		computed: {
			...mapState({
				list: state => state.path.list
			})
		},
		onLoad(e) {
			if (e.detail) {
				this.__init(JSON.parse(e.detail))
			}
		},
		methods: {
			...mapMutations(["addGoodsToCart"]),
			// 初始化页面
			__init(data) {
				this.$H.get(`/goods/${data.id}`).then(res => {
					// 轮播图
					this.banners = res.goodsBanner.map(v => {
						return {src: v.url}
					})
					// 初始化基本信息
					this.detail = res;
					this.detail.num = 1;
					// 修改页面标题
					uni.setNavigationBarTitle({
						title: res.title
					})
					// 滚动商品属性
					this.baseAttrs = res.goodsAttrs.map(v => {
						return {
							icon: "icon-cpu",
							title: v.name,
							desc: v.value
						}
					})
					// 热门评论
					this.comments = res.hotComments.map(v => {
						var imglist = [];
						for (let k in v.imglist) {
							imglist.push(v.imglist[k].src)
						}
						return {
							id: v.id,
							user_id: v.user.id,
							userpic: v.user.avatar,
							username: v.user.nickname,
							create_time: v.review_time,
							goods_num: v.goods_num,
							context: v.review.data,
							imglist: v.review.image
						}
					})
					// 商品详情
					this.context = res.content;
					// 热门推荐
					this.hotList = res.hotList.map(v => {
						return {
							id: v.id,
							cover: v.cover,
							title: v.title,
							desc: v.desc,
							oprice: v.min_oprice,
							pprice: v.min_price
						}
					})
					if (this.detail.sku_type === 1) {
						// 商品规格（选项部分）
						this.selects = res.goodsSkusCard.map(v => {
							let list = v.goodsSkusCardValue.map(v1 => {
								return {
									id: v1.id,
									name: v1.value
								}
							})
							return {
								id: v.id,
								title: v.name,
								selected: 0,
								list: list
							}
						})
						// 商品规格（匹配价格）
						this.detail.goodsSkus.forEach(item => {
							let arr = []
							for (let key in item.skus) {
								arr.push(item.skus[key].value)
							}
							item.skusText = arr.join(',')
						})
					}
				})
			},
			preview(src, e) {
				// do something
				console.log("src: " + src);
			},
			navigate(href, e) {
				// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
				console.log("href: " + href);
			},
			openCreatePath() {
				uni.navigateTo({
					url: "../user-path-edit/user-path-edit"
				});
				this.hide('express');
			},
			hide(key) {
				this.popup[key] = 'hide'
				setTimeout(() => {
					this.popup[key] = 'none'
				}, 200);
			},
			show(key) {
				this.popup[key] = 'show'
			},
			// 加入购物车
			addCart() {
				// 组织数据
				let goods = this.detail;
				goods["checked"] = false;
				goods["attrs"] = this.selects;
				// 加入购物车
				this.addGoodsToCart(goods);
				// 隐藏筛选框
				this.hide('attr');
				// 成功提示
				uni.showToast({
					title: '加入购物车成功'
				});
			}
		}
	}
</script>

<style>
	/deep/ .uparse .p {
		padding: 0 !important;
	}

	/deep/ .uparse view,
	/deep/ .uparse uni-view {
		line-height: 0 !important;
	}
</style>
