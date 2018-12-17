import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/font-awesome.min.css";

Vue.use(ElementUI);

Vue.config.productionTip = false

// vue数据过滤函数
Vue.filter('timeFrmate', timestamp => {
	let time = new Date(timestamp * 1000);
	let y = time.getFullYear();
	let M = time.getMonth();
	let d = time.getDate();
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();

	h = h < 10 ? ('0' + h) : h;
	m = m < 10 ? ('0' + m) : m;
	s = s < 10 ? ('0' + s) : s;
	return y + "-" + (M+1) + '-' + d + ' ' + h + ":" + m + ":" + s;
});
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

//http://element-cn.eleme.io/#/zh-CN/component/quickstart