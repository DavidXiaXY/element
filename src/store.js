import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 100,
		arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
		msg: 'hello',
		tabs: [{
			title: '首页',
			path: '/home',
			icon: 'fa fa-home'
		}],
		activePath: '/home'
	},
	// 好比是store的计算属性
	getters: {
		// 奇数 
		odd(state) {
			return state.arr.filter(item => item % 2 != 0);
		},
		// 偶数
		even(state) {
			return state.arr.filter(item => item % 2 == 0);
		}
	},
	// 只能处理同步操作
	mutations: {
		add(state, n) {
			this.state.count += n;
			//						setTimeout(()=>{
			//							  this.state.count = 0;
			//							  console.log('123');
			//						},2000)
		},
		reduce(state, n) {
			this.state.count -= n;
		},
		switchTab(state, path) {
			state.activePath = path;
		},
		addTab(state, tab) {
			// 已经存在直接切换过去
			for(let i = 0; i < state.tabs.length; i++) {
				if(state.tabs[i].path == tab.path) {
					state.activePath = tab.path;
					return;
				}
			}
			// 没有存在，则增加一个tab
			state.tabs.push(tab);
			state.activePath = tab.path;
		},
		removeTab(state,path){
			// 把传入的这个path过滤掉
			state.tabs = state.tabs.filter(item=>item.path!=path);
			if(state.activePath==path){
				state.activePath = '/home';
			}
		}
	},
	// 异步操作，需要commit mutation里面的方法
	actions: {
		addAction(content) {
			console.log("start action");
			setTimeout(() => {
				content.commit('add', 10000);
				console.log("actioning");
			}, 2000);
			console.log("end action");
		}

	}
})