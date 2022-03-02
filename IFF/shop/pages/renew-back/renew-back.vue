<template>
	<view class="renew-back">
		<view class="renew-back-list py-3 rounded mx-3 main-bg-gray-color mt-2">
			<view class="item pb-2 position-relative">
				<view class="d-flex a-center">
					<text class="main-text-30 ml-1 font-weight">收件人</text>
					<text class="main-text-30 ml-1">{{address.name}}</text>
					<text class="main-text-30 ml-1">{{address.phone}}</text>
				</view>
				<text class="d-block ml-1">{{address.addr}}</text>
				<text class="position-absolute border rounded copy px-1 main-text-22" @click="copyInfo">复制</text>
			</view>
			<text class="d-block main-text-color font-weight ml-1 main-text-30">拒绝到付!</text>
			<view class="d-flex a-center j-sb py-1">
				<text class="ml-1">快递公司</text>
				<view class="d-flex a-center j-sb mr-1">
					<picker @change="nameChange" :value="nameIndex" :range="nameList" range-key="value">
					    <view class="uni-input">{{nameList[nameIndex].value}}</view>
					</picker>
					<view class="arrow arrow-right ml-1"></view>
				</view>
			</view>
			<view class="d-flex a-center j-sb py-1">
				<text class="ml-1 mx-1">快递单号</text>
				<input class="flex-1" type="text" v-model="shipping_sn" placeholder="请输入快递单号或者扫码" />
				<image class="mr-1" src="../../static/images/ewm.png" @click="ewm" mode="widthFix"></image>
			</view>
		</view>
		<view class="main-bg-color text-white mx-3 mt-5 send font-weight rounded-4 text-center main-text-30" @click="send">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderId: "",
				address: {
					name: '测试',
					phone: "13800138000",
					addr: "广东省广州市天河区"
				},
				nameIndex: 0,
				nameList: [],
				shipping_sn: ""
			}
		},
		onLoad(option) {
			this.address.name = this.$store.state.user.send_back_contact;
			this.address.phone = this.$store.state.user.send_back_phone;
			this.address.addr = this.$store.state.user.send_back_address;
			for(let key in this.$store.state.user.express_list) {
				let obj = {
					code: key,
					value: this.$store.state.user.express_list[key]
				}
				this.nameList.push(obj);
			}
			if(option) this.orderId = option.orderId;
		},
		methods: {
			copyInfo() {
				let {name, phone, addr} = this.address;
				let value = `${name} ${phone} ${addr}`;
				uni.setClipboardData({
				    data:value,//要被复制的内容
				    success:()=>{//复制成功的回调函数
				        uni.showToast({//提示
							title:'复制成功'
				        })
				    }
				});
			},
			nameChange(e) {
				this.nameIndex = e.target.value;
			},
			ewm() {
				let _this = this;
				if(!this.$store.state.user.token) {
					uni.showModal({
						title: "提示",
						content: "您没有权限，请登录",
						success(res) {
							if(res.confirm) {
								uni.switchTab({
									url: "../my/my"
								})
							}
						}
					})
				} else {
					uni.authorize({
						scope: 'scope.camera',
						success(result) {
							uni.scanCode({
								success: data => {
									_this.shipping_sn = data.result;
								},
								fail(err) {
									uni.showToast({
										title: "扫码失败",
										icon: "none"
									})
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
				}
			},
			send() {
				if(this.shipping_sn == "") {
					uni.showToast({
						title: "请输入快递单号!",
						icon: "none"
					})
					return;
				}
				this.$H.post("Order/renewOrderSendBack", {
					order_id: this.orderId,  //订单ID
					shipping_code: this.nameList[this.nameIndex].value,  //物流公司编号
					shipping_sn: this.shipping_sn, //物流运单编号  测试：432363210530175
					token: this.$store.state.user.token
				}).then(res=> {
					uni.showToast({
						title: res.msg
					})
					setTimeout(()=> {
						uni.navigateBack({
							delta: 1
						})
					},1500)
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.renew-back {
		image {
			width: 44rpx;
		}
		input {
			line-height: 44rpx;
		}
		.copy {
			top: 50%;
			transform: translate(0, -50%);
			border-color: #333;
			right: 10rpx;
		}
		.send {
			line-height: 88rpx;
		}
	}
</style>
