<template>
	<view class="add-edit-address">
		<view class="item rounded m-3">
			<view class="d-flex a-center j-sb border-bottom main-bg-gray-color">
				<view class="d-flex a-center w-100">
					<text class="pl-1 main-text-24 font-weight d-block text1">收件人</text>
					<input v-model="objInfo.consignee" class="text2 pl-1 main-text-24 w-100" type="text" placeholder="请填写收货人姓名" />
				</view>
			</view>
			<view class="d-flex a-center border-bottom main-bg-gray-color w-100">
				<text class="pl-1 main-text-24 font-weight d-block text1">电话号码</text>
				<input v-model="objInfo.mobile" class="text2 pl-1 main-text-24 w-100" type="number" placeholder="+86" />
			</view>
			<view class="d-flex a-center j-sb border-bottom main-bg-gray-color">
				<view class="d-flex a-center w-100">
					<text class="pl-1 main-text-24 font-weight d-block text1">所在地区</text>
					<picker mode="region" class=" w-100" :value="objInfo.areaName" @change="bindPickerChange">
						<input type="text" :value="objInfo.areaName" class="text2 pl-1 main-text-24 w-100" placeholder="请选择所在地区" disabled />
					</picker>
				</view>
				<view class="d-flex a-center j-end mr-1 row-re w-100" @click="locationAddress">
					<image src="/static/images/maintenance-dw.png" mode="widthFix"></image>
					<text class="pl-1 main-text-24 d-block">定位</text>
				</view>
			</view>
			<view class="d-flex a-start border-bottom main-bg-gray-color w-100">
				<text class="pl-1 main-text-24 font-weight d-block text1 py-1" style="line-height: 50rpx;">详细地址</text>
				<textarea v-model="objInfo.address" class="text2 pl-1 main-text-24 w-100 py-2" type="text" placeholder="请填写详细地址" style="height: 60rpx;" />
			</view>
		</view>

		<view class="item rounded mx-3 mt-1 main-bg-gray-color">
			<view class="d-flex a-start border-bottom py-2">
				<text class="pl-1 main-text-24 font-weight d-block text1">标签</text>
				<view class="item-row">
					<view class="tag d-flex a-center flex-wrap">
						<text class="bg-white px-3 rounded-4 mx-1 mb-2 main-text-24" v-for="(item,index) in tagList" :key="index" :class="{'active': tagKey == index}" @click="tagChange(index)">{{item}}</text>
					</view>
					<view class="add-icon d-inline-block bg-white px-3 rounded-4 mx-1" @click="tagAdd">
						<image class="" src="/static/images/add-black.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="d-flex a-center j-sb row-max a-start border-bottom py-1">
				<view class="d-flex flex-column">
					<text class="pl-1 main-text-24">设置默认地址</text>
					<text class="text5 pl-1 main-text-20">提醒：每次下单会默认推荐使用该地址</text>
				</view>
				<switch :checked="checked" color="#ada074" style="transform:scale(0.8)" @change="switchChange" />
			</view>
		</view>
		<view class="btn position-fixed main-bg-color text-white text-center rounded-4 font-weight main-text-30" @click="save">保存</view>
	</view>
</template>

<script>
	import utils from "@/common/utils/util"
	export default {
		data() {
			return {
				isAdd: false,
				editId: "",
				objInfo: {
					consignee: "",
					mobile: "",
					areaName: [],
					area: null,
					postcode: "",
					address: "",
				},
				initTag: false,
				tagKey: null,
				tagList: [],
				checked: false
			}
		},
		onLoad(option) {
			this.getTag();
			if (option.status == 'add') {
				this.isAdd = true;
				uni.setNavigationBarTitle({title: "新建收货地址"})
			} else {
				this.isAdd = false;
				this.editId = option.id;
				uni.setNavigationBarTitle({title: "编辑收货地址"})
				this.getAddress(this.editId);
			}
		},
		onShow() {
			var pages = getCurrentPages();
			var curPage = pages[pages.length - 1]; 
			if(curPage.data.initTag){
			    curPage.data.initTag = false;
			    this.getTag();
			}
		},
		methods: {
			bindPickerChange(e) {
				this.objInfo.area = e.detail.code;
				this.objInfo.areaName = e.detail.value;
				this.objInfo.postcode = e.detail.postcode;
			},
			changeCity(data) {
				this.objInfo.area = data
			},
			switchChange(e) {
				this.checked = e.detail.value;
			},
			// 定位
			locationAddress() {
				let _this = this;
				uni.authorize({
					scope: 'scope.userLocation',
					success(res) {
						uni.chooseLocation({
							success: result => {
								let {latitude, longitude, address} = result;
								_this.objInfo.address = address;
								_this.getLocation(latitude, longitude);
							}
						});
					},
					fail(err) {
						uni.showModal({
							content: '检测到您没打开定位权限，是否去设置打开？',
							confirmText: "确认",
							cancelText: '取消',
							success: (res) => {
								if (res.confirm) {
									uni.openSetting({
										success: (res) => {}
									})
								}
							}
						})
					}
				})
			},
			// 根据经纬度获取位置
			getLocation(latitude, longitude) {
				this.$H.post("User/locationDecode", {
					"lng": latitude,
					"lat": longitude
				}).then(res=> {
					if(res.code === '0000') {
						let {province, city, district, province_id, city_id, district_id, detail} = res.data;
						this.objInfo.areaName = [province, city, district];
						this.objInfo.area = [province_id, city_id, district_id];
						this.objInfo.postcode = "";
					}
				})
			},
			// 获取标签
			getTag() {
				this.$H.post('User/getAddressTag',{token: this.$store.state.user.token}).then(res=> {
					this.tagList = res.data;
				})
			},
			// 标签点击事件
			tagChange(index) {
				let oldTagKey = this.tagKey;
				oldTagKey == index ? this.tagKey = null : this.tagKey = index;
			},
			// 标签添加
			tagAdd() {
				let info = {
					inputType: "text",
					title: "新增标签",
					inputItem: true,
					type: "tag",
					value: "",
					placeholderText: "请输入标签",
					url: "User/addAddressTag",
					successText: "添加成功"
				}
				uni.navigateTo({
					url: `../page-editor/page-editor?info=${JSON.stringify(info)}`
				})
			},
			// 获取编辑数据展示
			getAddress(id) {
				this.$H.post('User/getAddress',{
					id: id, 
					token: this.$store.state.user.token,
				}).then(res=> {
					let {consignee, mobile, province, city, district, zipcode, address, tag, is_default} = res.data.address;
					this.objInfo = {
						consignee: consignee,
						mobile: mobile,
						areaName: [res.data.province[province],res.data.city[city],res.data.district[district]],
						area: [province, city, district],
						postcode: zipcode,
						address: address,
					}
					this.tagKey = this.tagList.findIndex(v=> v==tag);
					this.checked = is_default == 0 ? false : true;
				});
			},
			// 保存
			save() {
				if(this.objInfo.consignee == "") {
					uni.showToast({title: '收件人必须填写',icon:'none'});
					return
				}
				if(!utils.phoneRule(this.objInfo.mobile)) {
					uni.showToast({title: '手机号码有误',icon:'none'});
					return
				}
				if(this.objInfo.area == null) {
					uni.showToast({title: '地址必须选择',icon:'none'});
					return
				}
				if(this.objInfo.address == "") {
					uni.showToast({title: '详细地址必须填写',icon:'none'});
					return
				}
				let obj = {
					consignee: this.objInfo.consignee,
					mobile: this.objInfo.mobile,
					province: this.objInfo.area[0],
					city: this.objInfo.area[1],
					district: this.objInfo.area[2],
					zipcode: this.objInfo.postcode,
					address: this.objInfo.address,
					tag: this.tagKey != null && this.tagKey.toString().length > 0 ? this.tagList[this.tagKey]: "",
					is_default: this.checked ? 1 : 0,
					token:this.$store.state.user.token
				}
				if(this.isAdd) {
					this.$H.post('User/addAddress',obj).then(res=> {
						uni.showToast({title: res.msg})
						uni.navigateBack({
							delta: 1
						})
					})
				} else {
					obj.id = this.editId;
					this.$H.post('User/editAddress',obj).then(res=> {
						uni.showToast({title: res.msg, icon: "none"})
						uni.navigateBack({
							delta: 1
						})
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-edit-address {
		.d-flex {
			&.row-max {
				height: 102rpx;
			}
		}
		.highest {
			color: #B2B2B2;
		}
		.tag {
			.active {
				background-color: #00332a !important;
				color: #FFFFFF;
			}
		}

		.text1 {
			width: 130rpx;
		}
		.text1, input,  {
			height: 94rpx !important;
			line-height: 94rpx;
		}
		textarea {
			height: 94rpx !important;
		}

		image {
			width: 30rpx;

			&.small {
				width: 24rpx;
			}
		}

		.row-re {
			width: 115rpx;
		}

		.item-row {
			.add-icon {
				line-height: 40rpx;

				image {
					width: 20rpx;
				}
			}
		}

		.text5 {
			color: #909090;
		}

		.btn {
			width: 400rpx;
			line-height: 88rpx;
			bottom: 10rpx;
			left: 50%;
			transform: translate(-50%, 0);
		}
	}
</style>
