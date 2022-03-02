<template>
	<view class="d-flex a-center j-sb mx-3 py-3 border-bottom" :class="isShow ? 'p-3 main-bg-gray-color rounded mt-3' : ''">
		<view class="row-le">
			<view class="address-head d-flex a-center">
				<text class="main-bg-color text-white px-2 rounded-4 main-text-28 d-block mr-1" :class="isShow ? 'text2' : 'text1'" v-if="item.tag">{{item.tag}}</text>
				<text class="main-text-28" :class="isShow ? 'text2' : 'text1'">{{item.pdc}}</text>
			</view>
			<text class="main-text-28" :class="isShow ? 'text2' : 'text1'">{{item.address}}</text>
			<view class="address-info" :class="isShow ? 'text2' : 'text1'">
				<text class="main-text-28" :class="isShow ? 'text2' : 'text1'">{{item.consignee}}</text>
				<text class="ml-1 main-text-28" :class="isShow ? 'text2' : 'text1'">{{item.mobile | phoneEncryption}}</text>
			</view>
		</view>
		<view class="row-re">
			<image v-if="editIcon" src="/static/images/edit.png" mode="widthFix" @click.stop="linkToEdit(item)"></image>
			<image v-if="delIcon" class="ml-2" src="/static/images/del.png" mode="widthFix" @click.stop="linkToDel(item)"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isShow: {
				type: Boolean,
				default: true
			},
			item: {
				type: Object,
				default: {}
			},
			editIcon: {
				type: Boolean,
				default: true
			},
			delIcon: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				
			}
		},
		filters: {
			phoneEncryption(value) {
				if(value) {
					var reg=/^(.{3}).*(.{4})$/;
					return value.replace(reg, "$1****$2");
				}
			}
		},
		methods: {
			linkToEdit(item) {
				this.$emit("linkChange", item)
			},
			linkToDel(item) {
				this.$emit("linkToDel", item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.row-le {
		width: 80%;
	}
	.d-flex {
		border-color: #e4e4e4;
	}
	image {
		width: 36rpx;
	}
	.text1 {
		color: #909090;
	}
	.text2 {
		color: #333;
	}
</style>
