<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>Number -计数器</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		
		  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				num1:0
			};
		},
		methods: {
			handleChange(val){
				console.log(val);
			}
		}
	}
</script>

<style>

</style>