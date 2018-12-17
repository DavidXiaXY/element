<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>tab切换</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>

		<el-tabs v-model="activeName" @tab-click="handleClick" editable>
			<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
			<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
			<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
			<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
		</el-tabs>

	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'second'
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	}
</script>

<style>

</style>