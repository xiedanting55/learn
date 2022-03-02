<template>
	<view class="wiliu">
		<!-- <map style="width:100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="markers" :polyline="polyline" :scale="10">
		</map> -->
		<logistics :wlInfo="wlInfo" @copyInfo="copyInfo"></logistics>
	</view>
</template>

<script>
	import uniSteps from "@/components/uni-ui/uni-steps/uni-steps"
	import logistics from "@/components/logistics/logistics"
	export default {
		data() {
			return {
				list: [],
				wuliuName: "",
				wuliuNu: "",
				wlInfo: {},
				// wlInfo: {
				// 	state: 2, //快递状态 1已签收 2配送中
				// 	post_no: '4304678557725', //快递单号
				// 	// addr: '江西省南昌市青云谱区', //收货地址
				// 	    //物流信息
				// 	    list: [{
				// 	            "time": "2020-04-12 13:00:57",
				// 	            "timeArr": ['2020-04-12', '13:00:57'],
				// 	            "context": "江西南昌青云谱区 快件已被 丰巢智能柜 代签收。",
				// 	            "location": ""
				// 	        }
				// 	    ]
				// }
				// latitude: 23.12419,
				// longitude: 113.424654,
				// polyline: [
				// 	{
				// 		points: [
				// 			{latitude: 23.12419, longitude: 113.424654},
				// 			{latitude: 23.136651, longitude: 113.382284},
				// 			{latitude: 23.157631, longitude: 113.356912},
				// 			{latitude: 116.761773, longitude: 23.378528}
				// 		],
				// 		width: 2,
				// 		color: "#ff0000"
				// 	}
				// ],
				// markers: [
				// 	{latitude: 23.12419, longitude: 113.424654, iconPath: '../../static/images/xq_06.png'},
				// 	{latitude: 23.378528, longitude: 116.761773, iconPath: '../../static/images/list3.png'},
				// ]

			}
		},
		components: {
			logistics
		},
		onLoad(option) {
			if (option) {
				if (option.orderId) {
					this.__init(option.orderId);
				} else {
					this.list = JSON.parse(option.list);
				}
			}
			this.getLocation();
		},
		methods: {
			__init(orderId) {
				this.$H.post("Order/getTracInfo", {
					order_id: orderId,
					token: this.$store.state.user.token
				}).then(res => {
					if (res.code === '0000') {
						let obj = {},
							arr = [];
						obj["state"] = res.data.order_info.express.state;
						obj["post_no"] = res.data.order_info.express.nu;
						obj["addr"] = res.data.order_info.address;
						if (res.data.order_info.express.data) {
							res.data.order_info.express.data.forEach(v => {
								let data = {
									time: v.time,
									timeArr: [v.time.substring(0, 10), v.time.substring(11, 20)],
									context: v.context,
									location: ""
								}
								arr.push(data);
							})
							obj["list"] = arr;
						} else {
							obj["list"] = [];
						}
						this.wlInfo = obj;
					}
				})
			},
			// 获取位置
			getLocation() {
				let that = this;
				uni.getLocation({
					type: 'wgs84',
					success: (res) => {
						const latitude = res.latitude; // 经度
						const longitude = res.longitude; // 纬度
						console.log(latitude, longitude);
					},
					fail: (res) => {
						uni.showToast({
							icon: 'none',
							title: '地址信息获取失败请打开GPRS权限'
						});
					}
				});
			},
			// 复制
			copyInfo(data) {
				uni.setClipboardData({
				    data:data,//要被复制的内容
				    success:()=>{//复制成功的回调函数
				        uni.showToast({//提示
							title:'复制成功'
				        })
				    }
				});
			},
		}
	}
</script>

<style>

</style>
