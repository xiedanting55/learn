import Vue from "vue"
import Vuex from "vuex"

import cart from "@/store/modules/car.js"
import user from "@/store/modules/user.js"

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		cart,
		user
	}
})