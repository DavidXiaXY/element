<template>

	<el-tabs v-model="activePath" @tab-click="handleClick" @tab-remove="handleRemove">
		<el-tab-pane :name="tab.path" :key="tab.path" v-for="(tab,index) in tabs" :closable="index!=0">
			<span slot="label">
			 	<i :class="tab.icon"></i>&nbsp;<span v-text="tab.title"></span>
			</span>
		</el-tab-pane>
	</el-tabs>

</template>

<script>
	import {mapState,mapMutations} from "vuex";
	
	export default {
		data() {
			return {};
		},
		computed:{
			tabs(){
				return this.$store.state.tab.tabs;
			},
			activePath:{
				set(path){
					this.switchTab(path);
				},
				get(){
					return this.$store.state.tab.activePath;
				}
			}
		},
		methods: {
			...mapMutations(['switchTab','removeTab']),
			handleClick(tab) {
				this.$router.push(this.activePath);
			},
			handleRemove(path) {
				this.removeTab(path);
				this.$router.push(this.activePath);
			}
		}
	}
</script>

<style>

</style>