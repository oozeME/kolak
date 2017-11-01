<template>
	<div class="all">
		<div class="left">
			<div class="header">
				<img src="/static/img/header.jpg" alt="" />
				<p>脸袋Plus</p>
				<span>吧唧吧唧吧唧吧唧吧唧</span>
			</div>
			<ul class="header_menu">
	  			<router-link :to="item.path" tag="li" v-for="item in menuList">
	  				{{item.tit}}
	  			</router-link>
	  		</ul>
	  		<div class="bot">
				<h3>WELCOME MY BOLG ❤</h3>
				<div class="search">
					<el-input></el-input>
					 <el-button type="primary">查询</el-button>
				</div>
				<el-collapse v-model="activeName" accordion>
				  <el-collapse-item name="index" v-for="(item,index) in headData" :title="item.onedata.cnname" :name='index'>
				    <div v-for="(i,index) in item.twodata" class="point" @click="changePage(i.id)">
				    	<a href="javascript:;">{{i.cnname}}</a>
				    </div>
				  </el-collapse-item>
				  	
				</el-collapse>
			</div>
		</div>
		<div class="right">
			<!--<router-view></router-view>-->
			<right-page :item="num"></right-page>
		</div>
	</div>
</template>
<script>
	import action_type from "../../store/action_type";
	import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
	import rightPage from "./page_blog_content"
	export default{
		data(){
			return {
				activeName: '1',
				change:null,
				num:0
				
			}
		}, 
		mounted(){
//			console.log(this.headData)
		},
		methods:{
			...mapActions({
				changeList: action_type.HEADCHANGEDATA.actions,
//				changePage:CHANGEDATA.actions
			}),
			changePage(key){
                this.changeList(key)
                this.headData.forEach(function(i) {
                    i.twodata.forEach(function(j) {
                        if (j.id == key) {
                            var arr = [{
                                cnname: i.onedata.cnname,
                                oneId: i.onedata.id,
                                twoId: null
                            }, {
                                cnname: j.cnname,
                                oneId: j.parent_id,
                                twoId: j.id
                            }]
                            
                        }
                    }.bind(this))
                }, this);
			}
		},
		computed:{
			...mapState({
				menuList:(state)=>state.menuList,
				states:(state)=>state.states,
				articleAll:(state)=>state.articleAll,
				headData:(state)=>state.headData
			})
		},
		components:{
			rightPage
		}
		
	}
</script>

<style scoped>
	*{
		color: #fff;
	}
	 .el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 200px;
	    margin: 0;
	  }
	  
	  .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }
	.all{
		height:100%;
	}
	ul{
		margin-bottom:20px;
		
	}
	p{
		color: red;
	}
	.left{
		width:25%;
		float: left;
	}
	.header{
		text-align: center;
	}
	.header img{
		width:30%;
		padding:5px;
		border:1px solid #ccc;
		border-radius: 5px;
		margin-top:30px;
	}
	.right{
		background: #FFFFFF;
		width:75%;
		height: 100%;
		float: right;
		
	}
	.header_menu {
		display: flex;
		justify-content: space-around;
		
	}
	.header_menu li{
		font-size: 14px;
		line-height: 40px;
		cursor: pointer;
	}
	.header_menu li:hover{
		color: red;
	}
	.header p{
		color: #FFFFFF;
		
	}
	.header span{
		font-size: 12px;
		color: #666;
	}
	.point a{
		cursor: pointer;
		color: #111;
	}
	.el-collapse-item__content a{
		cursor: pointer;
		color: #111;
	}
	.bot{
		width:100%;
		height:100%;
		padding:10px;
	}
	.bot h3{
		color: #FFFFFF;
		padding-top:10px;
		border-top:1px solid #333;
		margin-bottom: 10px;
	}
	.bot ul{
		margin-top:20px;
	}
	.bot li{
		font-size: 14px;
		line-height: 30px;
		cursor: pointer;
		color: #666;
	}
	.bot li:hover{
		color: #fff;
	}
	
	.bot li span{
		float: right;
		
	}
	
	.bot .el-collapse-item__header,.el-collapse-item{
		background: #111;
	}
	.bot .el-collapse-item__content{
		color: #666;
	}
	.el-input, .el-input__inner{
		width:70%;
	}
	.el-button--primary{
		border:none;
		background: #666;
	}
	
	.search{
		margin-bottom:30px;
	}
</style>