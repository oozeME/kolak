<template>
	<div class="box">
		<h3>最新详情</h3>
		<el-row class="rowall">
		  <el-col :span="24" style="border-radius: 4px;">
		    <el-row class="classrowone">
			  <el-col :span="6">标题</el-col>
			  <el-col :span="6">分类</el-col>
			  <el-col :span="6">作者</el-col>
			  <el-col :span="6">发布时间</el-col>
			</el-row>
			<el-row v-for="i in articleList" class="classrow">
	         	<el-col :span="6">{{i.article_name}}</el-col>
				<el-col :span="6">{{i.cnname_one}}</el-col>
				<el-col :span="6">{{i.editer}}</el-col>
				<el-col :span="6">{{i.time}}</el-col>
			</el-row>
		  </el-col>
		</el-row>
		<!--<div>{{articleList}}</div>-->
	</div>
</template>

<script>
//	import {CHANGEDATA} from "../../store/action_type";
	import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
	export default{
		props:["item"],
		data(){
			return {
				list:null,
//				fn:null,
//				message:"hello"
			}
		},
		mounted(){
			this.articleAll.forEach(function(i) {
                i.twodata.forEach(function(j) {
                    if (j.id == this.states) {
                        console.log(j)
                        var arr = [{
                            cnname: i.onedata.cnname,
                            oneId: i.onedata.id,
                            twoId: null
                        }, {
                            cnname: j.cnname,
                            oneId: j.parent_id,
                            twoId: j.id
                        }]
                        console.log(arr)
//                      this.headbreadList(arr)
                    }
                }.bind(this))
            }, this);
		},
		computed:{
			...mapState({
				menuList:(state)=>state.menuList,
				states:(state)=>state.states,
				articleAll:(state)=>state.articleAll,
				headData:(state)=>state.headData,
				articleList:(state)=>state.articleList
			})
		},
		created(){
//			console.log(this.articleAll)
		},
		beforeRouteEnter:(to,from,next)=>{
			next(vm=>{
				if(!vm.headData){
					vm.$router.push("/")
				}
			})
		}
		
	}
</script>

<style scoped>
	*{
		color: #111;
	}
	.box{
		width: 100%;
		height: 100%;
		padding:20px 40px;
		position: relative;
	}
	.box h3{
		padding-bottom:10px;
		border-bottom: 1px #ccc solid ;
	}
	h4{
		font-size: 18px;
		text-align: center;
		height: 40px;
		line-height: 40px;
		font-weight: 500;
	}
	p{
		letter-spacing: 1px;
		text-indent: 32px;
	}
	.footer{
		width:100%;
		height: 36px;
		position: absolute;
		bottom: 20px;
		left: 30px;
		padding:0 30px;
	}
	.footer span{
		display: inline-block;
		font-size: 14px;
		padding:12px 10px 0px 0;
	}
	.el-button-group{
		float: right;
		margin-right:30px;
	}
	.el-button--primary{
		background: #111;
		border: none;
	}
	.el-icon--right{
		color: #fff;
	}
	.el-table tr{
		color: #111;
	}
</style>