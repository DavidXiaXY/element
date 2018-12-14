<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>Select 下拉选择</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<p v-text="value"></p>
		<el-select v-model="value" clearable placeholder="请选择">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
		<p v-text="value2"></p>
		<el-select v-model="value2" multiple  placeholder="请选择">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value:'',
				value2:[],
			};
		},
		methods: {}
	}
</script>

<style>

</style>