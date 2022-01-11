<template>
	<view class="address">
		<template v-if="list.length > 0">
			<view class="row a-center j-sb mx-3 py-3 border-bottom" v-for="(item,index) in list" :key="index">
				<view class="row-le">
					<view class="address-head d-flex a-center">
						<text class="main-bg-color text-white px-2 rounded-4 main-text-24" v-if="item.tag">{{item.tag}}</text>
						<text class="main-text-24">{{item.pdc}}</text>
					</view>
					<text class="main-text-24">{{item.address}}</text>
					<view class="address-info">
						<text class="main-text-24">{{item.consignee}}</text>
						<text class="ml-1 main-text-24">{{item.mobile}}</text>
					</view>
				</view>
				<image src="/static/images/edit.png" mode="widthFix" @click="linkTo('edit', item.id)"></image>
			</view>
		</template>
		<no-thing v-else msg="没有地址,赶紧新建地址信息～"></no-thing>
		<view class="position-fixed btn d-flex a-center j-center main-bg-color rounded-4" hover-class="main-bg-hover-color" @click="linkTo('add')">
			<image src="/static/images/add.png" mode="widthFix"></image>
			<text class="text-white font-weight ml-1 main-text-30">新建收获地址</text>
		</view>
	</view>
</template>

<script>
	import utils from "@/common/utils/util"
	import noThing from "@/components/no-thing/no-thing.vue"
	export default {
		data() {
			return {
				list: []
			}
		},
		components: {
			noThing
		},
		onShow() {
			this.__init();
		},
		methods: {
			__init() {
				this.list = [];
				this.$H.post('User/getAddressList',{token:this.$store.state.user.token}).then(res=> {
					this.list = res.map(v=> {
						v.mobile = utils.phoneEncryption(v.mobile);
						return v
					});
				})
			},
			linkTo(key, id) {
				uni.navigateTo({
					url: id ? `../add-edit-address/add-edit-address?status=${key}&id=${id}` : `../add-edit-address/add-edit-address?status=${key}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.address {
		.row {
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
			bottom: 20px;
			left: 50%;
			transform: translate(-50%,0);
			image {
				width: 28rpx;
			}
		}
	}
</style>
