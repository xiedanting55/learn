export default {
	state: {
		number: 1,
		list: [
			{
				id: 1,
				name: "商品1",
				status: false,
				num: 1
			},
			{
				id: 2,
				name: "商品2",
				status: false,
				num: 10
			},
			{
				id: 3,
				name: "商品3",
				status: true,
				num: 20
			},
			{
				id: 4,
				name: "商品4",
				status: true,
				num: 20
			},
			{
				id: 5,
				name: "商品5",
				status: false,
				num: 0
			},
			{
				id: 6,
				name: "商品6",
				status: true,
				num: 2
			}
		]
	},
	getters: {
		activeList: (state) =>{
			return state.list.filter(v=>v.status);
		},
		noActiveList: (state) => {
			return state.list.filter(v=>!v.status);
		},
		getList: (state, getters) => {
			return getters.activeList.filter(v=> v.num > 5)
		},
		getById:(state) => (id) => {
			return state.list.filter(v=>v.id === id)
		}
	},
	mutations: {
		inc(state, n) {
			state.number += n
			// console.log(state.number)
		}
	},
	actions: {
		asyncInc({commit,state}, n) {
			setInterval(()=> {
				commit('inc', n);
				console.log(state.number)
			}, 2000)
		}
	}
}