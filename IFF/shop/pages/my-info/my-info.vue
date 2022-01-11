<template>
	<view class="my-info">
		<text class="m-3 main-text-24 d-block">基本信息</text>
		<view class="my-info-list rounded mx-3 main-bg-gray-color">
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">头像</text>
				<view class="d-flex a-center j-sb item-re">
					<image src="/static/images/my_head.png" class="photo rounded-circle" @click="upfilePortrait">
					</image>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">昵称</text>
				<view class="d-flex a-center j-sb item-re">
					<text class="text2 main-text-24" @click="linkTo('username')">小米米</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">手机号</text>
				<view class="d-flex a-center j-sb item-re">
					<input type="text" class="text2 main-text-24" value="187****0091" />
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">性别</text>
				<view class="d-flex a-center j-sb item-re">
					<!-- <picker class="text2 main-text-24" @change="sexPickerChange" :value="sexIndex" :range="sexList" range-key="name">
						<view class="uni-input">{{sexList[sexIndex].name}}</view>
					</picker> -->
					<text class="text2 main-text-24">保密</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">生日</text>
				<view class="d-flex a-center j-sb item-re">
					<text class="text2 main-text-24">请选择生日</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">地区</text>
				<view class="d-flex a-center j-sb item-re">
					<text class="text2 main-text-24">请选择地区</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">收货地址</text>
				<view class="d-flex a-center j-sb item-re">
					<input type="text" value="" />
					<!-- <text class="text2"></text> -->
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sexIndex: 0,
				sexList: [{
						name: '保密'
					},
					{
						name: '男'
					},
					{
						name: '女'
					}
				],
			}
		},
		methods: {
			// 上传头像
			upfilePortrait() {
				uni.authorize({
					scope: 'scope.camera',
					success(res) {
						uni.chooseImage({ // 从本地相册选择图片或使用相机拍照。
							count: 1,
							sizeType: ['original', 'compressed'], //original 原图，compressed 压缩图，默认二者都有
							success: (res) => {
								console.log(res.tempFilePaths[0]); //成功则返回图片的本地文件路径列表 tempFilePaths
								// uni.uploadFile({ //将本地资源上传到开发者服务器
								// 	url: baseURL + '/api/Common/upload', //接口地址
								// 	filePath: res.tempFilePaths[0], //图片地址
								// 	name: 'file',
								// 	formData: {
								// 		access_token: uni.getStorageSync('access_token'), //加入token
								// 	},
								// 	success: (uploadFileRes) => {
								// 		let data = JSON.parse(uploadFileRes.data)
								// 		if (data.code == 1) {
								// 			this.my_avatar = data.data.url; //上传成功后返回的图片地址
								// 		}
								// 	}
								// });
							}
						});
					},
					fail(err) {
						uni.showModal({
							title: '提示',
							content: '您已拒绝授权，是否去设置打开？',
							confirmText: "确认",
							cancelText: "取消",
							success: (res) => {
								if (res.confirm) {
									uni.openSetting({
										success: (res) => {}
									});
								}
							}
						});
					}
				})
			},
			linkTo(data) {
				
			},
			sexPickerChange(e) {
				this.sexIndex = e.detail.value;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-info {
		.item {
			.text2 {
				color: #b6b6b6;
			}

			.photo {
				width: 80rpx;
				height: 80rpx;
			}

			.item-re {
				width: 436rpx;
			}
		}
	}
</style>
