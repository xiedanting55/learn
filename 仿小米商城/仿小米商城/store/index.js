import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		list: [
			{
				id: 1,
				name: "商品1",
				status: false
			},
			{
				id: 2,
				name: "商品2",
				status: false
			},
			{
				id: 3,
				name: "商品3",
				status: true
			}
		]
	},
	getters: {},
	mutations: {},
	actions: {}
})