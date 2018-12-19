<template>
	<div class="home">
		<!--<h1>home</h1>
		<h1>{{msg}}</h1>
		<h1>{{count}}</h1>
		<h1>{{arr}}</h1>
		<h1>奇数:{{odd}}</h1>
		<h1>偶数:{{even}}</h1>
		<button @click="add(5)">+</button> {{count}}<button @click="reduce(5)">-</button>
		<br />
		<button @click="addAction">dispatch</button>-->
		<h1>{{$store.state.tab.activePath}}</h1>
		<h1>{{$store.state.tab.name}} </h1>
		<h1>{{$store.state.user.name}} </h1>
	</div>
</template>

<script>
	import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

	export default {
		name: 'home',
		computed: {
			//  计算属性的形式
			//			count() {
			//				return this.$store.state.count;
			//			}
//			...mapState(['count', 'msg', 'arr']),
//			...mapGetters(['odd', 'even'])
		},
		methods: {
//			...mapMutations(['add', 'reduce']),
//			...mapActions(['addAction'])
		},
		components: {}
	}
</script>