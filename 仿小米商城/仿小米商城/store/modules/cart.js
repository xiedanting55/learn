export default {
	state: {
		list: [{
				checked: false,
				id: 11,
				title: "商品标题111",
				cover: "/static/images/demo/list/1.jpg",
				// 选中商品属性
				attrs: [{
						title: "颜色",
						selected: 0,
						list: [{
								name: '火焰红',
							},
							{
								name: '炭黑',
							},
							{
								name: '冰川兰',
							}
						]
					},
					{
						title: "容量",
						selected: 0,
						list: [{
								name: '64GB',
							},
							{
								name: '128GB',
							},
						]
					},
					{
						title: "套餐",
						selected: 0,
						list: [{
								name: '标配',
							},
							{
								name: '套餐一',
							},
							{
								name: '套餐二',
							}
						]
					},
				],
				pprice: 336,
				num: 1,
				minnum: 1,
				maxnum: 10, // 该商品最大商品数，跟库存有关
			},
			{
				checked: false,
				id: 12,
				title: "商品标题111",
				cover: "/static/images/demo/list/1.jpg",
				// 选中商品属性
				attrs: [{
						title: "颜色",
						selected: 0,
						list: [{
								name: '火焰红',
							},
							{
								name: '炭黑',
							},
							{
								name: '冰川兰',
							}
						]
					},
					{
						title: "容量",
						selected: 0,
						list: [{
								name: '64GB',
							},
							{
								name: '128GB',
							},
						]
					},
					{
						title: "套餐",
						selected: 0,
						list: [{
								name: '标配',
							},
							{
								name: '套餐一',
							},
							{
								name: '套餐二',
							}
						]
					},
				],
				pprice: 336,
				num: 1,
				minnum: 1,
				maxnum: 10, // 该商品最大商品数，跟库存有关
			},
			{
				checked: false,
				id: 13,
				title: "商品标题111",
				cover: "/static/images/demo/list/1.jpg",
				// 选中商品属性
				attrs: [{
						title: "颜色",
						selected: 0,
						list: [{
								name: '火焰红',
							},
							{
								name: '炭黑',
							},
							{
								name: '冰川兰',
							}
						]
					},
					{
						title: "容量",
						selected: 0,
						list: [{
								name: '64GB',
							},
							{
								name: '128GB',
							},
						]
					},
					{
						title: "套餐",
						selected: 0,
						list: [{
								name: '标配',
							},
							{
								name: '套餐一',
							},
							{
								name: '套餐二',
							}
						]
					},
				],
				pprice: 336,
				num: 1,
				minnum: 1,
				maxnum: 10, // 该商品最大商品数，跟库存有关
			},
		],
		selectedAll: [], //选中列表(存放选中的id)
	},
	getters: {
		// 判断是否全选
		checkedAll: (state) => {
			return state.list.length === state.selectedAll.length;
		},
	},
	mutations: {
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
