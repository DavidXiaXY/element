<template>
	<el-menu default-active="0" class="el-menu-vertical-demo" @open="open" @close="close" @select="select" background-color="#20222A" text-color="#fff" active-text-color="#ffd04b">
		<el-submenu :index="i+''" v-for="(item,i) in nav">
			<template slot="title">
				<i :class="item.icon"></i>
				<span v-text="item.title"></span>
			</template>
			<el-menu-item-group>
				<el-menu-item :index="sub.path" v-for="(sub,j) in nav[i].sub" v-text="sub.title"></el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>

</template>

<script>
	export default {
		data() {
			return {
				nav: [{
					title: 'basic',
					icon: 'el-icon-location',
					sub: [{
						title: 'layout 布局',
						path: '/layout'
					}, {
						title: 'Container 容器',
						path: '/container'
					}, {
						title: 'Icon 图标',
						path: '/icon'
					}, {
						title: 'Button 按钮',
						path: '/button'
					}]
				}, {
					title: 'form',
					icon: 'el-icon-location',
					sub: [{
						title: 'Radio 单选',
						path: '/radio'
					},{
						title: 'CheckBox 多选',
						path: '/checkbox'
					},{
						title: 'Input 输入框',
						path: '/input'
					},{
						title: 'Number 计数器',
						path: '/number'
					},{
						title: 'Select 选择器',
						path: '/select'
					},{
						title: 'Cascader 级联',
						path: '/cascader'
					},{
						title: 'Switch 开关',
						path: '/switch'
					},{
						title: 'Tabs 切换',
						path: '/tabs'
					}]
				}, {
					title: 'Data',
					icon: 'el-icon-location',
					sub: [{
						title: '待审核',
						path: '/score'
					},{
						title: '请假',
						path: '/leave'
					}]
				}, {
					title: 'Data',
					icon: 'el-icon-location',
					sub: []
				}]

			};
		},
		methods: {
			open(key, keyPath) {
				console.log(key, keyPath);
			},
			close(key, keyPath) {
				console.log(key, keyPath);
			},
			select(index, indexPath) {
				this.$router.push(index);
				console.log(index);
				console.log(indexPath);
			}
		}

	}
</script>

<style>

</style>