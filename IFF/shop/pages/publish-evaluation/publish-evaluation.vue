<template>
	<view class="publish-evaluation">
		<view class="m-3 px-3 py-4 rounded main-bg-gray-color">
			<view class="d-flex a-center">
				<text class="font-weight main-text-24">描述相符</text>
			</view>
			<view class="d-flex mt-1">
				<image src="/static/images/edit-gray.png" mode="widthFix"></image>
				<textarea v-model="content" placeholder="从多个角度评价宝贝，可以帮助更多想买的人" class="ml-1 main-text-24" />
			</view>
			<view class="upload bg-white my-3 rounded d-flex a-center j-center flex-column" @click="chooseImage">
				<image src="/static/images/upload.png" mode="widthFix"></image>
				<text class="font-weight mt-1 main-text-18">添加图片</text>
			</view>
			<view class="img-list my-3 d-flex a-center flex-wrap" v-if="imgs.length > 0">
				<view class="item position-relative" v-for="(item, index) in imgs" :key="index" @click="prevImage">
					<icon type="clear" size="16" class="icon position-absolute right-0" color="#ff0000" @click.stop="clearImage(index)" />
					<image :src="item"></image>
				</view>
			</view>
			<text class="main-text-18">您的评价内容在商品评价页面将会被匿名展示</text>
		</view>
		
		<view class="m-3 px-3 py-3 rounded main-bg-gray-color mb-10">
			<view class="d-flex a-center j-sb">
				<text class="font-weight main-text-30">物流服务评价</text>
				<text class="main-text-color main-text-20">满意请给5星哦</text>
			</view>
			<view class="line d-flex a-center mt-1">
				<text class="d-block text3 main-text-24">商品符合度</text>
				<start @change="onChangeFH" />
			</view>
			<view class="line d-flex a-center mt-1">
				<text class="d-block text3 main-text-24">快递员服务</text>
				<start @change="onChangeKD" />
			</view>
			<view class="line d-flex a-center mt-1">
				<text class="d-block text3 main-text-24">店家服务态度</text>
				<start @change="onChangeTD" />
			</view>
		</view>
		<view class="main-bg-color text-white position-fixed bottom-0 left-0 w-100 send font-weight rounded-4 text-center main-text-30" @click="sendEvaluation">发布</view>
	</view>
</template>

<script>
	import start from "@/components/start/start"
	import req from "../../common/utils/request"
	export default {
		data() {
			return {
				order_id: "",
				goods_id: "",
				content: "",
				goods_rank: 0,
				service_rank: 0,
				deliver_rank: 0,
				imgs: [],
				comment_img: []
			}
		},
		components: {
			start
		},
		onLoad(option) {
			if(option) {
				this.order_id = option.orderId;
				this.goods_id = option.goodsId;
			}
		},
		methods: {
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
						title: "上传图片最多三张",
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
							_this.comment_img.push(result.data.src);
						}
					}
				})
			},// 删除上传的图片
			clearImage(index) {
				this.imgs.splice(index,1);
				this.comment_img.splice(index,1);
			},
			// 预览图片
			prevImage(e) {
				uni.previewImage({
					urls: this.imgs,
					current: e.currentTarget.dataset.url
				});
			},
			onChangeFH(e) { //deliver_rank	商品评分1-5
				this.goods_rank = e.value;
			},
			onChangeKD(e){ //deliver_rank	快递评分1-5
				this.deliver_rank = e.value;
			},
			onChangeTD(e){ //service_rank	服务评分1-5
				this.service_rank = e.value;
			},
			sendEvaluation() {
				if(this.goods_rank == 0) {
					uni.showToast({
						title: "请完善对商品的评分",
						icon: "none"
					})
					return;
				}
				if(this.deliver_rank == 0) {
					uni.showToast({
						title: "请完善对快递的评分",
						icon: "none"
					})
					return;
				}
				if(this.service_rank == 0) {
					uni.showToast({
						title: "请完善对服务的评分",
						icon: "none"
					})
					return;
				}
				console.log({
					order_id: this.order_id,	//订单ID
					goods_id: this.goods_id,	//商品ID
					service_rank: this.service_rank, 	//服务评分1-5
					deliver_rank: this.deliver_rank,    //快递评分1-5
					goods_rank:	this.goods_rank,         //商品评分1-5
					content: this.content,	//评论内容
					comment_img: this.comment_img,  	//晒图
					token: this.$store.state.user.token
				})
				this.$H.post("Order/commentGoods", {
					order_id: this.order_id,	//订单ID
					goods_id: this.goods_id,	//商品ID
					service_rank: this.service_rank, 	//服务评分1-5
					deliver_rank: this.deliver_rank,    //快递评分1-5
					goods_rank:	this.goods_rank,         //商品评分1-5
					content: this.content,	//评论内容
					comment_img: this.comment_img,  	//晒图
					token: this.$store.state.user.token
				}).then(res=> {
					if(res.code === '0000') {
						uni.navigateTo({
							url: "../my-evaluate-status/my-evaluate-status"
						})
					}
				})
			}	
		}
	}
</script>

<style lang="scss" scoped>
	.publish-evaluation {
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
		.text3 {
			color: #2f2f2f;
			width: 190rpx;
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
