<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>CheckBox 多选框</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<p v-text="checkList"></p>
		<el-checkbox-group v-model="checkList">
			<el-checkbox label="a">多选A</el-checkbox>
			<el-checkbox label="b">多选B</el-checkbox>
			<el-checkbox label="c">多选C</el-checkbox>
			<el-checkbox label="d" disabled>多选D</el-checkbox>
			<el-checkbox label="e" disabled>多选E</el-checkbox>
		</el-checkbox-group>

		<label>
			<input type="checkbox" v-model="checkList" name="" id="" value="123" />多选F
		</label>

		<label for="user">用户名</label>
		<input type="text" name="user" id="user" value="" />
	</el-card>

</template>

<script>
	export default {
		data() {
			return {
				checkList: []
			};
		},
		methods: {}
	}
</script>

<style>

</style>