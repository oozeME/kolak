<template>
  <div class="container">
  	<div class="header">
  		<ul class="header_menu">
  			<router-link :to="item.path" tag="li" v-for="item in menuList">
  				{{item.tit}}
  			</router-link>
  		</ul>
  	</div>
  	<div class="main">
  		<el-row >
			  <el-col :span="12" v-for="item in menuList" plain>
			  	<router-link :to="item.path" tag="div">
  				<figure class="effect-lily">
						<img :src="item.bg" alt="" />
						<figcaption>
							<h2>HELLO {{item.tit}}</h2>
				  		<p>{{item.con}}</p>
						</figcaption>			
					</figure>
					</router-link>
			  </el-col>
			  
			</el-row>
  	</div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  mounted(){
  	
//	console.log(this.menuList)
  },
  computed:{
		...mapState({
			menuList:(state)=>state.menuList
		})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.container{
		width:100%;
		height:100%;
	}
.header{
	width:100%;
	height:100%;
	background: url(/static/img/bg.jpg);
	position: relative;
}
.header_menu{
	position: absolute;
	left: 20px;
	top:20px
}
li{
	height:30px;
	line-height: 50px;
	font-size: 20px;
	color: #f1f1f1;
	margin: 10px 0;
	cursor: pointer;
	width:110px;
}
img{
	width:100%;
}
li:hover{
	color: red;
}
.el-col-12{
	position: relative;
	margin-top:-5px;
	padding:0;
	cursor: pointer;
	overflow: hidden;
}
figure.effect-lily img {
	max-width: none;
	width: -webkit-calc(100% + 50px);
	width: calc(100% + 50px);
	opacity: 0.7;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: translate3d(-40px,0, 0);
	transform: translate3d(-40px,0,0);
}

figure.effect-lily figcaption {
	text-indent: 2em;
}

figure.effect-lily figcaption > div {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50%;
}

figure.effect-lily h2,
figure.effect-lily p {
	-webkit-transform: translate3d(0,90px,0);
	transform: translate3d(0,90px,0);
}

figure.effect-lily h2 {
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
	color: #111;
}

figure.effect-lily p {
	color: rgba(255,255,255,0.8);
	opacity: 0;
	-webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
	transition: opacity 0.2s, transform 0.35s;
	color: #111;
}

figure.effect-lily:hover img,
figure.effect-lily:hover p {
	opacity: 1;
}

figure.effect-lily:hover img{
	-webkit-transform: translate3d(0,0px,0);
	transform: translate3d(0,0px,0);
}
figure.effect-lily:hover h2,
figure.effect-lily:hover p {
	-webkit-transform: translate3d(0,-90px,0);
	transform: translate3d(0,-90px,0);
	color: #111;
}

figure.effect-lily:hover p {
	-webkit-transition-delay: 0.05s;
	transition-delay: 0.05s;
	-webkit-transition-duration: 0.35s;
	transition-duration: 0.35s;
}

</style>
