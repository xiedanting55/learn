<template>
	<view class="address">
		<template v-if="list.length > 0">
			<view class="address-list">
				<view v-for="(item,index) in list" :key="index" @click="chooseAddress(item)">
					<addressItem :isShow="false" :item="item" @linkChange="linkChange" @linkToDel="linkToDel" />
				</view>
			</view>
		</template>
		<no-thing :icon="'no_address'" v-else msg="你还没有收货地址哦！"></no-thing>
		<view class="position-fixed btn d-flex a-center j-center main-bg-color rounded-4" hover-class="main-bg-hover-color" @click="linkTo">
			<image src="/static/images/add.png" mode="widthFix"></image>
			<text class="text-white font-weight ml-1 main-text-30">新建收获地址</text>
		</view>
	</view>
</template>

<script>
	// 删除按钮位置待定
	import utils from "@/common/utils/util"
	import addressItem from "@/components/address-item/address-item"
	import noThing from "@/components/no-thing/no-thing.vue"
	export default {
		data() {
			return {
				orderChooseAddress: false,
				list: []
			}
		},
		components: {
			addressItem,
			noThing
		},
		onLoad(option) {
			option.status ? this.orderChooseAddress = true : this.orderChooseAddress = false;
		},
		onShow() {
			this.__init();
		},
		methods: {
			__init() {
				this.list = [];
				this.$H.post('User/getAddressList',{token:this.$store.state.user.token}).then(res=> {
					this.list = res.data;
				})
			},
			chooseAddress(data) {
				if(!this.orderChooseAddress) return;
				const pages = getCurrentPages(); 
				var prevPage = pages[pages.length - 2]; //上一个页面	
				prevPage.setData({addressData: data});
				uni.navigateBack({
					delta: 1
				})
			},
			linkChange(data) {
				uni.navigateTo({
					url:  `../add-edit-address/add-edit-address?status=edit&id=${data.id}`
				})
			},
			linkToDel(data) {
				let _this = this;
				uni.showModal({
					title: "提示",
					content: "是否删除当前地址",
					success() {
						_this.$H.post('User/delAddress',{
							id: data.id,
							token:_this.$store.state.user.token,
						}).then(res=> {
							let key = _this.list.findIndex(v=> v.id === data.id)
							_this.list.splice(key,1);
							uni.showToast({title: "删除成功"});
						})
					}
				})
			},
			linkTo() {
				uni.navigateTo({
					url: '../add-edit-address/add-edit-address?status=add'
				})
			}
		}
	}
</script>
<style>
	page {
		height: 100vh;
	}
	.address-list {
		height: calc(100vh - 110rpx);
		overflow-y: scroll;
	}
</style>
<style lang="scss" scoped>
	.address {
		.d-flex {
			border-color: #e4e4e4;
		}
		image {
			width: 23rpx;
		}
		text {
			color: #909090;
		}
		.btn {
			width: 400rpx;
			line-height: 88rpx;
			bottom: 20rpx;
			left: 50%;
			transform: translate(-50%,0);
			image {
				width: 28rpx;
			}
		}
	}
</style>
