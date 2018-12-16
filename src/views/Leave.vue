<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>请假申请</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>

		<p>请假人：</p>
		<el-input v-model="input" placeholder="请输入内容"></el-input>

		<p>部门：</p>
		<el-select v-model="value" placeholder="请选择">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>

		<p>请假原因：</p>
		<el-select v-model="value6" placeholder="请选择">
			<el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
				<span style="float: left">{{ item.label }}</span>
				<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
			</el-option>
		</el-select>

		<p>请假时间：</p>
		<el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
		</el-time-select>
		<el-time-select placeholder="结束时间" v-model="endTime" style="margin-left: 30px;" :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
		</el-time-select>
		<p>描述：</p>
		<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
		</el-input>
		<p>紧急电话：</p>
		<el-input placeholder="请输入内容" v-model="input10" clearable>
		</el-input>

		<el-row style="text-align: center;margin-top: 30px;">
			<el-button type="success" style="margin-right: 100px;" @click="dialogVisible = true">提 交</el-button>
			<el-button type="primary" @click="openFullScreen2">重 置</el-button>
		</el-row>

		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<span>提交成功</span>
			<span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
		</el-dialog>

	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '财务'
				}, {
					value: '选项2',
					label: '人力资源'
				}, {
					value: '选项3',
					label: '运营中心'
				}, {
					value: '选项4',
					label: '销售部'
				}, {
					value: '选项5',
					label: '市场部'
				}],
				value: '',
				cities: [{
					value: 'leave',
					label: '事假'
				}, {
					value: 'sick leave',
					label: '病假'
				}, {
					value: 'business trip',
					label: '出差'
				}, {
					value: 'go out',
					label: '外出'
				}],
				value6: '',
				startTime: '',
				endTime: '',
				textarea: '',
				input10: '',
				dialogVisible: false,
			}
		},
		methods: {
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			}
		},
		openFullScreen2() {
			const loading = this.$loading({
				lock: true,
				text: 'Loading',
				spinner: 'el-icon-loading',
				background: 'rgba(0, 0, 0, 0.7)'
			});
			setTimeout(() => {
				loading.close();
			}, 2000);
		}
	}
</script>

<style>
	.box-card p {}
</style>