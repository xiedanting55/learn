<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "/common/uni.css";  //官方ui库
	@import "/common/animate.css";  //第三方css动画库
	@import "/common/icon.css";  //自定义图标库
	@import "/common/zcm-main.css";  //UI基础库
	@import "/common/common.css";  //公共样式
</style>
