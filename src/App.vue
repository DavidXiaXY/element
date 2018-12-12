<template>
	<div id="app">

		<header></header>
		<aside>
			<admin-aside></admin-aside>
		</aside>
		<main>
			<router-view/>
		</main>
	</div>
</template>
<script type="text/javascript">
	import AdminAside from "@/components/Aside"
	
	export default {
		data() {
			return {};
		},
		methods: {},
		components:{
			AdminAside
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
	
	header {
		height: 50px;
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
		background-color: #fff;
		border-bottom: solid 1px #ccc;
	}
	
	aside {
		height: 100%;
		width: 220px;
		position: fixed;
		top: 0px;
		left: 0px;
		background-color: #20222A;
		color: #fff;
		
	}
	
	main {
		padding: 15px;
		box-sizing: border-box;
		position: fixed;
		top: 50px;
		left: 220px;
		right: 0px;
		bottom: 0px;
		overflow: hidden;
		overflow-y: auto;
	}
</style>