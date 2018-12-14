<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>请假批准</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<el-table :data="approval" style="width: 100%">
			<el-table-column type="index" width="50" label="序号"></el-table-column>
			<el-table-column prop="name" label="人名"></el-table-column>
			<el-table-column prop="reason" label="请假原因"></el-table-column>
			<el-table-column prop="starttime" label="开始时间"></el-table-column>
			<el-table-column prop="finishtime" label="结束时间"></el-table-column>
			<el-table-column prop="remark" label="备注"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="dialogVisible = true">确定</el-button>
					<el-button size="mini" type="danger">驳回</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-sizes="[10, 20, 30, 40]" :page-size="size" layout="total, sizes, prev, pager, next, jumper" :total="total">
		</el-pagination>

		<el-dialog title="批准原因" :visible.sync="dialogVisible" width="30%">
			<p id="approvalinput"><textarea></textarea></p>
			<span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">返  回</el-button>
		    <el-button type="primary" @click="dialogVisible = false">提  交</el-button>
		  </span>
		</el-dialog>

	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible: false,
				size: 10,
				total: 100,
				page: 1,
				approval: [{
					id: 1,
					name: '小明',
					reason: '病假',
					starttime: '8:00',
					finishtime: '17: 00',
					remark: '发高烧'
				}, {
					id: 1,
					name: '小明',
					reason: '病假',
					starttime: '8:00',
					finishtime: '17: 00',
					remark: '发高烧'
				}, {
					id: 1,
					name: '小明',
					reason: '病假',
					starttime: '8:00',
					finishtime: '17: 00',
					remark: '发高烧'
				}, {
					id: 1,
					name: '小明',
					reason: '病假',
					starttime: '8:00',
					finishtime: '17: 00',
					remark: '发高烧'
				}, {
					id: 1,
					name: '小明',
					reason: '病假',
					starttime: '8:00',
					finishtime: '17: 00',
					remark: '发高烧'
				}, {
					id: 1,
					name: '小明',
					reason: '病假',
					starttime: '8:00',
					finishtime: '17: 00',
					remark: '发高烧'
				}, {
					id: 1,
					name: '小明',
					reason: '病假',
					starttime: '8:00',
					finishtime: '17: 00',
					remark: '发高烧'
				}, {
					id: 1,
					name: '小明',
					reason: '病假',
					starttime: '8:00',
					finishtime: '17: 00',
					remark: '发高烧'
				}, {
					id: 1,
					name: '小明',
					reason: '病假',
					starttime: '8:00',
					finishtime: '17: 00',
					remark: '发高烧'
				}, {
					id: 1,
					name: '小明',
					reason: '病假',
					starttime: '8:00',
					finishtime: '17: 00',
					remark: '发高烧'
				}]
			};
		},
		methods: {
			handleSizeChange(s) {
				this.approval = this.getApprovalList(s);
			},
			handleCurrentChange(p) {
				console.log(p);
				this.approval = this.getApprovalList(this.size);
			},
			getApprovalList(n) {
				let arr = [];
				let names = ['小明', '小红', '小花', '小李', '小张'];
				let reasons= ['事假', '病假', '休假', '出差', '外出'];
				let remarks= ['发高烧', '公事派遣', '身体不适', '照顾老人', '照顾小孩'];
				for(let i = 0; i < n; i++) {
					let index = Math.floor(Math.random() * names.length);
					let index1 = Math.floor(Math.random() * reasons.length);
					let index2 = Math.floor(Math.random() * remarks.length);
					let s = {
						id: 1,
						name: names[index],
						reason: reasons[index1],
						starttime: Math.ceil(Math.random() * 24) + ":" +Math.ceil(Math.random() * 60),
						finishtime: Math.ceil(Math.random() * 24) + ":" +Math.ceil(Math.random() * 60),
						remark: remarks[index2]
					};
					arr.push(s);
				}
				return arr;
			}
		}
	}
</script>

<style>
	.el-pagination {
		margin-top: 20px;
		text-align: center;
	}
	#approvalinput{
		text-align:center; 
	}
	#approvalinput textarea{
		width: 300px;
		height: 50px;
		font-size: 18px;
        border-radius: 20px;
        padding: 10px;
        border: 2px solid lightgrey;
	}
</style>