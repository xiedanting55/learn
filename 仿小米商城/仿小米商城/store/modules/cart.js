export default {
	state: {
		// list: [{
		// 		checked: false,
		// 		id: 11,
		// 		title: "商品标题111",
		// 		cover: "/static/images/demo/list/1.jpg",
		// 		// 选中商品属性
		// 		attrs: [{
		// 				title: "颜色",
		// 				selected: 0,
		// 				list: [{
		// 						name: '火焰红',
		// 					},
		// 					{
		// 						name: '炭黑',
		// 					},
		// 					{
		// 						name: '冰川兰',
		// 					}
		// 				]
		// 			},
		// 			{
		// 				title: "容量",
		// 				selected: 0,
		// 				list: [{
		// 						name: '64GB',
		// 					},
		// 					{
		// 						name: '128GB',
		// 					},
		// 				]
		// 			},
		// 			{
		// 				title: "套餐",
		// 				selected: 0,
		// 				list: [{
		// 						name: '标配',
		// 					},
		// 					{
		// 						name: '套餐一',
		// 					},
		// 					{
		// 						name: '套餐二',
		// 					}
		// 				]
		// 			},
		// 		],
		// 		pprice: 336,
		// 		num: 1,
		// 		minnum: 1,
		// 		maxnum: 10, // 该商品最大商品数，跟库存有关
		// 	},
		// 	{
		// 		checked: false,
		// 		id: 12,
		// 		title: "商品标题111",
		// 		cover: "/static/images/demo/list/1.jpg",
		// 		// 选中商品属性
		// 		attrs: [{
		// 				title: "颜色",
		// 				selected: 0,
		// 				list: [{
		// 						name: '火焰红',
		// 					},
		// 					{
		// 						name: '炭黑',
		// 					},
		// 					{
		// 						name: '冰川兰',
		// 					}
		// 				]
		// 			},
		// 			{
		// 				title: "容量",
		// 				selected: 0,
		// 				list: [{
		// 						name: '64GB',
		// 					},
		// 					{
		// 						name: '128GB',
		// 					},
		// 				]
		// 			},
		// 			{
		// 				title: "套餐",
		// 				selected: 0,
		// 				list: [{
		// 						name: '标配',
		// 					},
		// 					{
		// 						name: '套餐一',
		// 					},
		// 					{
		// 						name: '套餐二',
		// 					}
		// 				]
		// 			},
		// 		],
		// 		pprice: 336,
		// 		num: 1,
		// 		minnum: 1,
		// 		maxnum: 10, // 该商品最大商品数，跟库存有关
		// 	},
		// 	{
		// 		checked: false,
		// 		id: 13,
		// 		title: "商品标题111",
		// 		cover: "/static/images/demo/list/1.jpg",
		// 		// 选中商品属性
		// 		attrs: [{
		// 				title: "颜色",
		// 				selected: 0,
		// 				list: [{
		// 						name: '火焰红',
		// 					},
		// 					{
		// 						name: '炭黑',
		// 					},
		// 					{
		// 						name: '冰川兰',
		// 					}
		// 				]
		// 			},
		// 			{
		// 				title: "容量",
		// 				selected: 0,
		// 				list: [{
		// 						name: '64GB',
		// 					},
		// 					{
		// 						name: '128GB',
		// 					},
		// 				]
		// 			},
		// 			{
		// 				title: "套餐",
		// 				selected: 0,
		// 				list: [{
		// 						name: '标配',
		// 					},
		// 					{
		// 						name: '套餐一',
		// 					},
		// 					{
		// 						name: '套餐二',
		// 					}
		// 				]
		// 			},
		// 		],
		// 		pprice: 336,
		// 		num: 1,
		// 		minnum: 1,
		// 		maxnum: 10, // 该商品最大商品数，跟库存有关
		// 	},
		// ],
		list: [],
		selectedAll: [], //选中列表(存放选中的id)
	},
	getters: {
		// 判断是否全选
		checkedAll: (state) => {
			return state.list.length === state.selectedAll.length;
		},
		// 合计
		totalPrice: (state) => {
			let total = 0;
			state.list.forEach(v => {
				if(state.selectedAll.indexOf(v.id) > -1) {
					total += v.pprice * v.num;
				}
			})
			return total;
		},
		// 禁用全选
		disableSelectAll: (state) => {
			return state.list.length === 0
		}
	},
	mutations: {
		// 选中 、取消选中商品
		selectItem(state, index) {
			let id = state.list[index].id;
			let i = state.selectedAll.indexOf(id)
			if(i > -1) {  //之前是选中，取消选中
				state.list[index].checked = false;  //取消商品选中状态
				return state.selectedAll.splice(i,1);  //移除选中列表中当前的商品
			} 
			state.list[index].checked = true;  //增加商品选中状态
			state.selectedAll.push(id);  //增加选中列表中当前的商品
		},
		// 全选
		selectAll(state) {
			state.selectedAll = state.list.map(v => {
				v.checked = true; // 设置选中状态
				return v.id
			})
		},
		// 取消全选
		unSelectAll(state) {
			state.list.forEach(v => {
				v.checked = false; // 设置取消选中状态
			})
			state.selectedAll = [];
		}
	},
	actions: {
		doSelectAll({commit,getters}) {
			getters.checkedAll ? commit("unSelectAll") : commit("selectAll")
		}
	}
}
