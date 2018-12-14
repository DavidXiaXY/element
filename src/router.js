import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Layout from './views/Layout.vue'
import Container from './views/Container.vue'
import Icon from './views/Icon.vue'
import Button from './views/Button.vue'
import Radio from './views/Radio.vue'
import CheckBox from './views/CheckBox.vue'
import Input from './views/Input.vue'
import Number from './views/Number.vue'
import Select from './views/Select.vue'
import Cascader from './views/Cascader.vue'
import Score from './views/Score.vue'
import Approval from './views/Approval.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/layout',
		name: 'layout',
		component: Layout
	}, {
		path: '/container',
		name: 'container',
		component: Container
	}, {
		path: '/icon',
		name: 'icon',
		component: Icon
	}, {
		path: '/button',
		name: 'button',
		component: Button
	}, {
		path: '/radio',
		name: 'radio',
		component: Radio
	}, {
		path: '/checkbox',
		name: 'checkbox',
		component: CheckBox
	}, {
		path: '/input',
		name: 'input',
		component: Input
	}, {
		path: '/number',
		name: 'number',
		component: Number
	}, {
		path: '/select',
		name: 'select',
		component: Select
	},{
		path: '/cascader',
		name: 'cascader',
		component: Cascader
	},{
		path:'/score',
		name:'score',
		component:Score
	},{
		path:'/approval',
		name:'approval',
		component:Approval
	}]
})