<template>

	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>layout-布局-类似与bootstrap的栅格系统</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<h1>隐藏类</h1>
		<div class="hidden-xs-only">hidden-xs-only - 当视口在 xs 尺寸时隐藏</div>
		<div class="hidden-sm-only">hidden-sm-only - 当视口在 sm 尺寸时隐藏</div>
		<div class="hidden-sm-and-down">hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏</div>
		<div class="hidden-sm-and-up ">hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏</div>
		<div class="hidden-md-only">hidden-md-only - 当视口在 md 尺寸时隐藏</div>
		<div class="hidden-md-and-down">hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏</div>
		<div class="hidden-md-and-up">hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏</div>
		<div class="hidden-lg-only">hidden-lg-only - 当视口在 lg 尺寸时隐藏</div>
		<div class="hidden-lg-and-down">hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏</div>
		<div class="hidden-lg-and-up">hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏</div>
		<div class="hidden-xl-only">hidden-xl-only - 当视口在 xl 尺寸时隐藏</div>

		<h1>基础布局-24格子</h1>

		<el-row :gutter="20" tag="ul">
			<el-col :span="6" :offset="6" tag="li">
				<div class="grid-content bg-purple" style="background-color: red;"></div>
			</el-col>
			<el-col :span="6" :offset="6" tag="li">
				<div class="grid-content bg-purple" style="background-color: blue;"></div>
			</el-col>
		</el-row>

		<el-row :gutter="20">
			<el-col :span="6" :offset="6">
				<div class="grid-content bg-purple" style="background-color: red;"></div>
			</el-col>
			<el-col :span="6" :offset="6">
				<div class="grid-content bg-purple" style="background-color: blue;"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<div class="grid-content bg-purple-dark"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="8">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="4">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
		</el-row>
	</el-card>

</template>

<script>
	import 'element-ui/lib/theme-chalk/display.css';
	export default {}
</script>

<style>
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>