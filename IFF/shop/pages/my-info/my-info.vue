<template>
	<view class="my-info">
		<text class="m-3 main-text-30 d-block">基本信息</text>
		<view class="my-info-list rounded mx-3 main-bg-gray-color">
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">头像</text>
				<view class="d-flex a-center j-sb item-re" @click="upfilePortrait">
					<image :src="head_pic ? head_pic : '/static/images/my_head.png'" class="photo rounded-circle"></image>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">昵称</text>
				<view class="d-flex a-center j-sb item-re" @click="nicknameLinkTo">
					<text class="text2 main-text-24">{{nickname}}</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">手机号</text>
				<view class="d-flex a-center j-sb item-re" @click="mobileLinkTo">
					<text class="text2 main-text-24">{{mobile}}</text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			<!-- 	<view class="d-flex a-center j-sb item-re d-flex a-center j-sb">
					<view class="d-flex a-center j-sb span-14" @click="mobileLinkTo">
						<text class="text2 main-text-24">{{mobile}}</text>
						<view class="arrow arrow-right mr-1"></view>
					</view>
					<button class='phone main-text-18 text-white px-1' open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">授权手机号</button>
				</view> -->
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">性别</text>
				<view class="d-flex a-center j-sb item-re">
					<picker class="text2 main-text-24 w-100" @change="sexPickerChange" :value="sexIndex" :range="sexList" range-key="name">
						<view class="uni-input">{{sexList[sexIndex].name}}</view>
					</picker>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">生日</text>
				<view class="d-flex a-center j-sb item-re">
					<picker class="text2 main-text-24 w-100" mode="date" :value="birthday" @change="birthdayChange">
					    <view class="uni-input">{{birthday}}</view>
					</picker>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">地区</text>
				<view class="d-flex a-center j-sb item-re">
					<picker mode="region" class="w-100" :value="address" @change="bindPickerChange">
						<text class="text2 main-text-24" v-if="address[0] == 0">{{address}}</text>
						<text class="text2 main-text-24" v-else>{{address[0]}},{{address[1]}},{{address[2]}}</text>
					</picker>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
			<view class="item d-flex a-center j-sb border-bottom py-2">
				<text class="main-text-24 pl-1">收货地址</text>
				<view class="d-flex a-center j-sb item-re" @click="linkTo">
					<text class="text2"></text>
					<view class="arrow arrow-right mr-1"></view>
				</view>
			</view>
		</view>
		<view class="main-bg-color text-white mx-3 mt-5 send font-weight rounded-4 text-center main-text-30" @click="updateInfoBtn">更新</view>
	</view>
</template>

<script>
	import req from "../../common/utils/request"
	import {mapMutations} from 'vuex';
	export default {
		data() {
			return {
				head_pic: "",
				nickname: "",
				mobile: "",
				sex: "",
				sexIndex: 0,
				sexList: [{
						key: 0,
						name: '保密'
					},
					{
						key: 1,
						name: '男'
					},
					{
						key: 2,
						name: '女'
					}
				],
				birthday: "",
				address: [],
				addressCode: []
			}
		},
		filters: {
			sexFilters(val) {
				let obj = {
					0: "保密",
					1: "男",
					2: "女"
				}
				return obj[val];
			}
		},
		onLoad() {
			this.__init()
		},
		onShow() {
			var pages = getCurrentPages();
			var curPage = pages[pages.length - 1]; 
			if(curPage.data.initTag){
			    curPage.data.initTag = false;
			    this.__init();
			}
		},
		methods: {
			...mapMutations(['update']),
			__init() {
				this.$H.post('User/Userinfo', {
					token: this.$store.state.user.token
				}).then((res)=> {
					let {head_pic, nickname, mobile, sex, birthday, province, city, district} = res.data.data;
					this.head_pic = head_pic;
					this.nickname = nickname;
					this.mobile = mobile;
					this.sexIndex = sex;
					this.birthday = birthday ? birthday : "请选择生日";
					this.address = province == 0 ? '请选择地区' : [res.data.data.province_name, res.data.data.city_name, res.data.data.district_name];
					this.addressCode = [province, city, district];
					let updateData = {"head_pic": head_pic, "nickName": nickname}
					this.update(updateData);
				})
			},
			// 上传头像
			upfilePortrait() {
				let _this = this;
				uni.authorize({
					scope: 'scope.camera',
					success(res) {
						uni.chooseImage({ // 从本地相册选择图片或使用相机拍照。
							count: 1,
							sizeType: ['original', 'compressed'], //original 原图，compressed 压缩图，默认二者都有
							success: (res) => {
								let fileList = res.tempFilePaths[0];
								_this.uploadImage(fileList);
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
			// 上传图片
			uploadImage(fileList) {
				uni.uploadFile({
					url: `${req.common.baseUrl}User/uploadImages`,
					filePath:fileList ,
					name: 'file',
					header: {"Content-Type": "multipart/form-data"},
					formData: {
						file: fileList,
						token:this.$store.state.user.token,
					},
					success: res => {
						let result = JSON.parse(res.data);
						if(result.code === '0000') {
							this.head_pic = result.data.src;
							let obj = {head_pic: this.head_pic, token:this.$store.state.user.token};
							this.updateInfo(obj)
						}
					}
				})
			},
			// 修改昵称
			nicknameLinkTo() {
				let info = {
					inputType: "text",
					title: "昵称修改",
					inputItem: true,
					type: "nickname",
					value: this.nickname,
					placeholderText: "请输入昵称",
					url: "User/updateUserInfo",
					successText: "添加成功"
				}
				uni.navigateTo({
					url: `../page-editor/page-editor?info=${JSON.stringify(info)}`
				})
			},
			// 修改手机号码
			mobileLinkTo() {
				let info = {
					inputType: "number",
					title: "手机号码修改",
					inputItem: true,
					type: "mobile",
					value: this.mobile,
					placeholderText: "请输入手机号码",
					url: "User/updateUserInfo",
					successText: "添加成功"
				}
				uni.navigateTo({
					url: `../page-editor/page-editor?info=${JSON.stringify(info)}`
				})
			},
			getPhoneNumber(e) {
				console.log(e)
				if(e.detail.errMsg=="getPhoneNumber:ok"){
					this.$H.post('Index/getUserPhone',{
						code: e.detail.code,
						openid: this.$store.state.user.userInfo.openid
					}).then(res => {
						console.log(res)
						this.__init();
					}).catch(err=>{
						if(err.msg){
							uni.showToast({
								title: err.msg,
								icon: 'none'
							});
						}
						uni.hideLoading()
					})
				} else {
					uni.showToast({title: "您已拒绝授权", icon: "none"})
				}
			},
			// 修改性别
			sexPickerChange(e) {
				this.sexIndex = e.detail.value;
				let obj = {sex: this.sexIndex, token:this.$store.state.user.token};
				this.updateInfo(obj)
			},
			// 修改生日
			birthdayChange(e) {
				this.birthday = e.target.value;
				let obj = {birthday: this.birthday, token:this.$store.state.user.token};
				this.updateInfo(obj)
			},
			// 修改地区
			bindPickerChange(e) {
				console.log(e)
				this.address = e.detail.value;
				this.addressCode = e.detail.code;
				let obj = {province: this.addressCode[0], city: this.addressCode[1], district: this.addressCode[2], token:this.$store.state.user.token};
				this.updateInfo(obj)
			},
			updateInfo(obj) {
				this.$H.post('User/updateUserInfo', obj).then((res)=> {
					if(res.code === '0000') {
						this.__init();
					}
				})
			},
			updateInfoBtn() {
				let obj = {
					head_pic: this.head_pic,
					nickname: this.nickname, 
					sex: this.sexIndex, 
					birthday: this.birthday, 
					province: this.addressCode[0] ? this.addressCode[0] : 0, 
					city: this.addressCode[1] ? this.addressCode[1] : 0, 
					district: this.addressCode[2] ? this.addressCode[2] : 0,
					token:this.$store.state.user.token,
				};
				this.updateInfo(obj)
			},
			linkTo() {
				uni.navigateTo({
					url: "../address/address"
				})
			},
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
		.phone {
			background-color: #00332A !important; 
			border: none !important;
		}
		.send {
			line-height: 88rpx;
		}
	}
</style>
