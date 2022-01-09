<script>
	export default {
		onLaunch: function() {
			// 初始化登录状态
			this.$store.commit('initUser')
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
	/* UI基础库 */
	@import "/common/main.css";
	/* 公共样式 */
	@import "/common/common.css";
</style>
