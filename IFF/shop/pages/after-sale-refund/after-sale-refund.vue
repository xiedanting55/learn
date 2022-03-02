<template>
	<view class="after-sale-refund">
		<view class="scroll-line">
			<template v-if="list.length > 0">
				<view class="item p-3 rounded m-3 main-bg-gray-color" v-for="(item,index) in list" :key="index">
					<itemTop :pic="'/static/images/icon1.png'" :name="item.cat_name" isBorder />
					<view class="item-body my-3 d-flex a-center j-sb">
						<image :src="item.images" mode="" class="rounded"></image>
						<view class="content ml-3">
							<text class="d-block main-text-30">{{item.goods_name}}</text>
							<text class="bg-white px-1 rounded main-text-24">{{item.spe}}</text>
						</view>
						<view class="item-body-re">
							<price :sizeNumber="36" :priceValue="item.price" />
							<count :sizeBol="30" :sizeNumber="36" :countValue="item.goods_num" />
						</view>
					</view>
				</view>
			</template>
			<view class="item-1 mx-3 px-3 rounded main-bg-gray-color">
				<view class="item-1-head border-bottom d-flex a-center j-sb py-2">
					<text class="main-text-color main-text-24">{{type == 21 ? '换货' : '退货'}}原因</text>
					<view class="d-flex a-center j-center" @click="refundReasonChoose">
						<text class="mr-1 main-text-color main-text-24">{{refundReasonChooseText}}</text>
						<view class="arrow arrow-right"></view>
					</view>
				</view>
				<view class="item-1-body py-3" v-if="list.length == 0">
					<text class="main-text-24">退款金额</text>
					<price :priceValue="price" />
					<text class="main-text-18">不可修改，最多{{price}}，含发货邮费¥0.00</text>
				</view>
			</view>
			<view class="item-2 m-3 px-3 py-4 rounded main-bg-gray-color">
				<text class="main-text-24">补充描述和凭证</text>
				<view class="d-flex mt-1">
					<image src="/static/images/edit-gray.png" mode="widthFix"></image>
					<textarea v-model="reason_remark" placeholder="补充描述，有助于商家更好的处理售后问题" maxlength="200" class="ml-1 main-text-24"
						@input="changeTextarea" />
				</view>
				<text class="d-block text-right font-weight limite main-text-18">{{maxlen}}/200</text>
				<view class="upload bg-white my-3 rounded d-flex a-center j-center flex-column" @click="chooseImage">
					<image src="/static/images/upload.png" mode="widthFix"></image>
					<text class="font-weight mt-1 main-text-18">上传凭证</text>
					<text class="font-weight main-text-16">（最多三张）</text>
				</view>
				<view class="img-list m-3 d-flex a-center flex-wrap" v-if="imgs.length > 0">
					<view class="item position-relative" v-for="(item, index) in imgs" :key="index" @click="prevImage">
						<icon type="clear" size="16" class="icon position-absolute right-0" color="#ff0000" @click.stop="clearImage(index)" />
						<image :src="item"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="main-bg-color text-white position-fixed bottom-0 left-0 w-100 send font-weight rounded-4 text-center main-text-30" @click="orderSend">提交订单</view>
		<uni-popup ref="popup" background-color="#fff" type="bottom">
			<radio-group @change="radioChange">
				<label class="uni-list-cell d-flex a-center j-sb mx-3 border-bottom" v-for="(item, index) in choseList" :key="item.value">
					<view>
						<radio :value="item.value" :checked="item.value === current" color="#00332A" />
					</view>
					<view class="ml-1">{{item.name}}</view>
				</label>
			</radio-group>
			<view class="main-bg-color text-white w-100 send font-weight rounded-4 text-center main-text-30 mt-2" @click="chooseSuccess">完成</view>
		</uni-popup>
	</view>
</template>

<script>
	import price from "@/components/price/price"
	import req from "../../common/utils/request"
	import count from "@/components/count/count"
	export default {
		data() {
			return {
				type: "",
				list: [],
				order_id: "",
				goods_id: "",
				price: "",
				reason: "",
				maxlen: 0,
				choseList: [{
						value: 0,
						name: '订单信息拍错（规格/尺码/颜色等）',
						checked: true
					},
					{
						value: 1,
						name: '我不想要了'
					},
					{
						value: 2,
						name: '地址/电话信息填写错误'
					},
					{
						value: 3,
						name: '没用/少用优惠'
					},
					{
						value: 4,
						name: '发货速度不满意'
					},
					{
						value: 5,
						name: '缺货'
					},
				],
				radioChangeCode: 0,
				refundReasonChooseText: "请选择",
				current: 0,
				reason_remark: "",
				choseConfirm: false,
				imgs: [],
				imgList: [],
			}
		},
		components: {
			price,
			count
		},
		onLoad(option) {
			if(option) {
				this.type = option.type;
				this.order_id = option.orderId;
				this.goods_id = option.goodsId;
				this.list = JSON.parse(option.data);
				if(option.type == 21) {
					uni.setNavigationBarTitle({title: "申请换货"});
				} else {
					this.price = option.price;
					uni.setNavigationBarTitle({title: "申请退货"});
				}
			}
		},
		methods: {
			changeTextarea(e) {
				this.maxlen = e.target.value.length;
			},
			// 退款原因选择
			refundReasonChoose() {
				this.$refs.popup.open()
			},
			radioChange(e) {
				this.radioChangeCode = e.detail.value;
			},
			chooseSuccess() {
				this.choseConfirm = true;
				if(this.choseConfirm) {
					let data = this.choseList.filter(v=> v.value == this.radioChangeCode);
					if(data.length>0) {
						this.refundReasonChooseText = data[0].name;
						this.reason = data[0].name;
					}
				} else {
					this.refundReasonChooseText = "请选择";
				}
				this.$refs.popup.close();
			},
			// 上传图片
			chooseImage() {
				if(this.imgs.length !== 3) {
					uni.chooseImage({
						count: 3 - this.imgs.length, //一次可以选择的数量
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], //从相册或手机选择
						success: res => {
							this.imgs.length === 0 ? this.imgs = res.tempFilePaths : this.imgs.push(res.tempFilePaths);
							for( let i=0;i<res.tempFilePaths.length;i++) {
								this.uploadImage(res.tempFilePaths,i)
							}
						}
					})
				} else {
					uni.showToast({
						title: "上传凭证最多三张",
						icon: "none"
					})
				}
			},
			// 上传图片
			uploadImage(fileList, index) {
				let _this =this
				uni.uploadFile({
					url: `${req.common.baseUrl}User/uploadImages`,
					filePath:fileList[index] ,
					name: 'file',
					header: {
						"Content-Type": "multipart/form-data"
					},
					formData: {
						file: fileList[index],
						token:_this.$store.state.user.token,
					},
					success: res => {
						let result = JSON.parse(res.data);
						if(result.code === '0000') {
							_this.imgList.push(result.data.src);
						}
					}
				})
			},
			// 删除上传的图片
			clearImage(index) {
				this.imgs.splice(index,1);
				this.imgList.splice(index,1);
			},
			// 预览图片
			prevImage(e) {
				uni.previewImage({
					urls: this.imgs,
					current: e.currentTarget.dataset.url
				});
			},
			orderSend(order_id, goods_id) {
				if(!this.choseConfirm) {
					uni.showToast({
						title: `请选择${this.type == 21 ? '换货' : '退货'}原因并确认`,
						icon: "none"
					})
					return;
				}
				this.$H.post('User/alterSales',{
					order_id: this.order_id,
					goods_id: this.goods_id,
					type: this.type,
					reason: this.reason,
					reason_remark: this.reason_remark,
					imgs: this.imgList.join(','),
					token:this.$store.state.user.token
				}).then(res=> {
					uni.showToast({title: res.msg,icon: "none"});
					if(res.code === '0000') {
						var pages = getCurrentPages();
						var currPage = pages[pages.length - 1];   //当前页面
						var prevPage = pages[pages.length - 3];  //上一个页面
						prevPage.setData({loading: true})
						setTimeout(()=> {
							uni.navigateBack({delta: 2})
						},2000)
					}
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100vh;
		overflow: hidden;
	}
	.scroll-line{
		height: calc(100vh - 100rpx);
		overflow-y: scroll !important;
	}
</style>
<style lang="scss" scoped>
	.after-sale-refund {
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
		.item-2 {
			background-color: #e4e4e4;

			image {
				width: 28rpx;
			}

			.limite {
				color: #aaa;
			}

			.upload {
				height: 224rpx;

				image {
					width: 74rpx;
				}
			}
		}
		.uni-list-cell {
			line-height: 100rpx;
			border-bottom-color: #e4e4e4;
			flex-direction: row-reverse !important;
		}
		.img-list {
			.item {
				margin-right: 17rpx;
				&:nth-of-type(3n) {
					margin-right: 0 !important;
				}
				image {
					width: 179rpx;
					height: 179rpx;
				}
				.icon {
					top: -10rpx;
					z-index: 1;
				}
			}
		}

		.send {
			line-height: 88rpx;
		}
	}
</style>
