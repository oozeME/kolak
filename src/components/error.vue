<template>
	<p>error</p>
</template>

<script>
	import {DEFAULEDATA} from "../store/action_type";
	import {mapActions} from "vuex"
	export default{
		name:"eror",
		data(){
			return{
				
			}
		},
		methods:{
			...mapActions({
				fn:DEFAULEDATA.actions
			})
		},
		computed:{
			
		},
		mounted(){
			this.fn(this)
		}
	}
</script>

<style scoped>
	p{
		color:#fff;
	}
</style>