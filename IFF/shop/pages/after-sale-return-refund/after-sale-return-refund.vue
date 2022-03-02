<template>
	<view class="after-sale-return-refund">
		
		<view class="item-1-head border-bottom d-flex a-center j-sb py-2">
			<text class="main-text-color main-text-24">退款原因</text>
			<view class="d-flex a-center j-center" @click="refundReasonChoose">
				<text class="mr-1 main-text-color main-text-24">{{refundReasonChooseText}}</text>
				<view class="arrow arrow-right"></view>
			</view>
		</view>
		<view class="item-2 m-3 px-3 py-4 rounded main-bg-gray-color">
			<text class="main-text-24">补充描述和凭证</text>
			<view class="d-flex mt-1">
				<image src="/static/images/edit-gray.png" mode="widthFix"></image>
				<textarea v-model="reason" placeholder="补充描述，有助于商家更好的处理售后问题" maxlength="200" class="ml-1 main-text-24"
					@input="changeTextarea" />
			</view>
			<text class="d-block text-right font-weight limite main-text-18">{{maxlen}}/200</text>
			<view class="upload bg-white my-3 rounded d-flex a-center j-center flex-column" @click="chooseImage">
				<image src="/static/images/upload.png" mode="widthFix"></image>
				<text class="font-weight mt-1 main-text-18">上传凭证</text>
				<text class="font-weight main-text-16">（最多三张）</text>
			</view>
			<!-- <view class="img-list m-3 d-flex a-center flex-wrap" v-if="imgs.length > 0">
				<view class="item position-relative" v-for="(item, index) in imgs" :key="index" @click="prevImage">
					<icon type="clear" size="16" class="icon position-absolute right-0" color="#ff0000" @click.stop="clearImage(index)" />
					<image :src="item"></image>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.after-sale-return-refund {
		.item {
			.item-body {
				image {
					width: 175rpx;
					height: 175rpx;
				}
				.content {
					width: 330rpx;
					text {
						&:nth-of-type(1) {
							color: #292929;
						}
		
						&:nth-of-type(2) {
							color: #424242;
						}
					}
				}
			}
		}
	}
</style>
