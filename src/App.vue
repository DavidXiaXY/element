<template>

	<el-container id="app">
		<el-aside width="220px">
			<admin-aside></admin-aside>
		</el-aside>
		<el-container>
			<el-header>
				<admin-header></admin-header>
				<admin-tab></admin-tab>
			</el-header>
			<el-main>
				<router-view/>
			</el-main>
			<el-footer>©2018-2020  非凡学院</el-footer>
		</el-container>
	</el-container>

</template>
<script type="text/javascript">
	import AdminAside from "@/components/Aside"
	import AdminHeader from "@/components/Header"
	import AdminTab from "@/components/Tabs"
	export default {
		data() {
			return {};
		},
		methods: {},
		components: {
			AdminAside,
			AdminHeader,
			AdminTab
		}
	}
</script>
<style>
	html,
	body,
	#app {
		margin: 0;
		height: 100%;
		width: 100%;
		background-color: #f2f2f2;
	}
	.el-header{
		height:100px!important;
		background-color: #FFFFFF;
	}
	.el-header .el-row {
    margin-bottom: 0px;
}
	.el-aside{
		background-color: #20222A;
	}
	
	.el-footer{
		background-color: #FFFFFF;
		line-height: 60px;
	}
	
</style>