export default{
	
	state: {
		tabs: [{
			title: '首页',
			path: '/home',
			icon: 'fa fa-home'
		}],
		activePath: '/home',
		name:'小亮',
		point:12000
	},
	getters: {},
	// 只能处理同步操作
	mutations: {
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
	// 异步处理
	actions:{}
	
	
}
