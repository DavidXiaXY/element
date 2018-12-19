export default{
	state:{
		name:'小明',
		point:12000
	},
	mutations: {
		switchTab(state, path) {
			console.log(path);
		}
	}
	
}
