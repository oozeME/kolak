<template>
	<p>loading</p>
</template>

<script>
	import {DEFAULEDATA} from "../store/action_type";
	import {mapActions} from "vuex"
	export default{
		name:"loading",
		data(){
			return{
				
			}
		},
		methods:{
			...mapActions({
				defaultData:DEFAULEDATA.actions
			})
		},
		mounted(){
			console.log(this.defaultData)
			this.defaultData(this)
		}
	}
</script>

<style scoped>
	p{
		color:#fff;
	}
</style>