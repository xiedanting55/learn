<template>
	<view>
		
	</view>
</template>

<script>
	import {mapState, mapGetters, mapMutations, mapActions} from "vuex";
	export default {
		data() {
			return {}
		},
		onLoad() {
			// console.log(this.$store.state)
			// console.log(this.newList)
			
			// console.log(this.$store.state.cart.list)
			console.log(this.list)
			
			// console.log(this.$store.getters.activeList)
			// console.log(this.activeList, this.noActiveList)
			// console.log(this.active, this.noActive)
			// console.log(this.getList)
			// console.log(this.getById(1))
			
			// this.$store.commit("inc")
			// this.inc(10)
			
			// this.$store.dispatch('asyncInc')
			// this.asyncInc(100)
		},
		computed: {
			...mapState({
				// list: state => state.list
				// list: "list"
				// newList(state){
				// 	return state.list.filter(v=> v.status)
				// }
				
				
				
				list: state => state.cart.list
			}),
			// ...mapState(["list"])
			
			// ...mapGetters(["activeList", "noActiveList"])
			// ...mapGetters({
			// 	active: "activeList",
			// 	noActive: "noActiveList",
			// 	getList: "getList",
			// 	getById: "getById"
			// }),
		},
		methods: {
			// ...mapMutations([
			// 	"inc"
			// ])
			// ...mapActions([
			// 	"asyncInc"
			// ])
		}
	}
</script>

<style>

</style>
