<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>单选</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		
		<div>
			<p v-text="city"></p>
    <el-radio-group v-model="city" @change="change">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
  </div>
		
		<el-row>
			<p v-text="radio"></p>
			<el-radio v-model="radio" label="1">备选项</el-radio>
			<el-radio v-model="radio" label="2">备选项</el-radio>
		
		</el-row>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				radio:'1',
				city:'上海'
			};
		},
		methods: {
			change(val){
				console.log(val);
			}
		}
	}
</script>

<style>

</style>