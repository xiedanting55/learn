<template>
	<view class="">
		<view class="invoice main-bg-gray-color mx-3 rounded">
			<view class="item border-bottom p-2 d-flex a-center j-sb">
				<text class="font-weight main-text-24">发票类型</text>
				<text class="main-text-24">{{choseList[invoice_type].name}}</text>
				<!-- <radio-group @change="radioChange" class="d-flex a-center j-center">
					<label class="uni-list-cell d-flex a-center j-sb ml-2" v-for="(item, index) in choseList" :key="item.value">
						<view>
							<radio :value="item.value" :checked="index === invoice_type" color="#00332A" />
						</view>
						<view class="ml-1">{{item.name}}</view>
					</label>
				</radio-group> -->
				<!-- <text class="main-text-24">增值税电子普通发票</text> -->
			</view>
			<view class="item border-bottom p-2 d-flex a-center j-sb" v-if="type == 1">
				<text class="font-weight main-text-24">抬头类型</text>
				<text class="main-text-24">个人</text>
			</view>
			<view class="item border-bottom p-2 d-flex a-center j-sb" v-if="type != 1">
				<text class="font-weight main-text-24">抬头类型</text>
				<text class="main-text-24">企业</text>
			</view>
			<view class="item border-bottom p-2 d-flex a-center j-sb text-right">
				<text class="font-weight main-text-24">发票抬头</text>
				<input class="main-text-24" type="text" v-model="invoice_title" placeholder="请输入发票抬头" />
			</view>
			<view class="item border-bottom p-2 d-flex a-center j-sb text-right" v-if="type != 1">
				<text class="font-weight main-text-24">公司统一信用代码</text>
				<input class="main-text-24" type="text" v-model="invoice_code" placeholder="请输入公司统一信用代码" />
			</view>
			<view class="item border-bottom p-2 d-flex a-center j-sb">
				<text class="font-weight main-text-24">发票内容</text>
				<text class="main-text-24">明细</text>
			</view>
			<view class="item border-bottom p-2 d-flex a-center j-sb">
				<text class="font-weight main-text-24">开票金额</text>
				<text class="main-text-24">{{total}}</text>
			</view>
			<view class="item border-bottom p-2 d-flex a-center j-sb text-right">
				<text class="font-weight main-text-24">发票备注</text>
				<input class="main-text-24" type="text" v-model="invoice_remark" placeholder="请输入发票备注" />
			</view>
		</view>
		<button class="main-bg-color text-white rounded-4 main-text-30 font-weight mt-4 mx-3"
			@click="sendConfirm">确认</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 1,
				total: "",
				order: false,
				invoice_title: "",
				invoice_code: "",
				invoice_remark: "",
				orderId: "",
				choseList: [{
						value: 0,
						name: '电子普票',
						checked: true
					},
					{
						value: 1,
						name: '专票'
					}
				],
				invoice_type: 0, //发票类型
				invoice_title_type: 0 //0个人，1企业
			}
		},
		onLoad(option) {
			if (option) {
				this.type = option.type;
				this.invoice_title_type = option.type;
				this.total = option.price;
				this.order = option.order;
				option.orderId ? this.orderId = option.orderId : this.orderId = "";
			}
		},
		methods: {
			// radioChange(e) {
			// 	this.invoice_type = parseInt(e.detail.value);
			// },
			sendConfirm() {
				if (this.order == 'true') {
					let obj = {};
					var pages = getCurrentPages();
					var prevPage = pages[pages.length - 2];
					obj = {
						invoice_title: this.invoice_title, //发票抬头
						invoice_code: this.invoice_code, //公司统一信用代码（如有）
						invoice_remark: this.invoice_remark, //备注
						invoice_type: this.invoice_type, //发票类型
						invoice_title_type: this.invoice_title_type == 1 ? 0 : 1 //0个人，1企业
					}
					prevPage.setData({
						invoiceObj: obj
					})
					uni.navigateBack({
						delta: 1
					})
				} else {
					if (this.type == 1 && (this.invoice_title == "" || this.invoice_remark =="")) {
						uni.showToast({
							title: "申请个人发票请完善信息",
							icon: "none"
						})
						return
					}
					if(this.type ==2 && (this.invoice_title == "" || this.invoice_code == "" || this.invoice_remark == "")) {
						uni.showToast({
							title: "申请企业发票请完善信息",
							icon: "none"
						})
						return
					}
					this.$H.post('Order/invoice', {
						order_id: this.orderId,
						invoice_title: this.invoice_title,	//发票抬头
						invoice_code: this.invoice_code,	//公司统一信用代码（如有）
						invoice_remark: this.invoice_remark,	//备注
						invoice_type: this.invoice_type,	//发票类型
						invoice_title_type: this.invoice_title_type == 1 ? 0 : 1,	//0个人，1企业
						token: this.$store.state.user.token,
					}).then((res) => {
						if (res.code === '0000') {
							uni.showToast({
								title: res.msg
							});
							var pages = getCurrentPages();
							var prevPage = pages[pages.length - 2]; 
							prevPage.setData({invoiceObj: true})
							setTimeout(()=> {
								uni.navigateBack({
									delta: 1
								})
							},1500)
						} else {
							uni.showToast({
								title: res.msg,
								icon: "none"
							})
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.invoice {
		.item {
			text {
				&:nth-of-type(1) {
					color: #2e2e2e;
				}

				&:nth-of-type(2) {
					color: #202020;
				}
			}

			input {
				color: #202020;
				width: 68%;
			}
		}
	}
</style>
