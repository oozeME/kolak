// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import elementUI from 'element-ui'
//import vuex from 'vuex'
import VueBus from 'vue-bus'




Vue.config.productionTip = false
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueBus)
//Vue.use(vuex)
//const store=new vuex.Store({
//	state:{
//		state:null,
//		menuList:[{
//		id:1,
//	  	bg:"/static/img/menu1.jpg",
//	  	tit:"HOME",
//	  	con:"主页(this)",
//	  	path:"/index",
//	  	id:"home"
//	  },{
//		id:2,
//	  	bg:"/static/img/menu2.jpg",
//	  	tit:"WORKS",
//	  	con:"作品集(is)",
//	  	path:"/page_works",
//	  	id:"works"
//	  },{
//		id:3,
//	  	bg:"/static/img/menu3.jpg",
//	  	tit:"BLOG",
//	  	con:"博客(my)",
//	  	path:"/page_blog",
//	  	id:"blog"
//	  },{
//		id:4,
//	  	bg:"/static/img/menu4.jpg",
//	  	tit:"CONTACT",
//	  	con:"联系我(free)",
//	  	path:"/page_contact",
//	  	id:"contact"
//	  },{
//		id:5,
//	  	bg:"/static/img/menu5.jpg",
//	  	tit:"ABOUT",
//	  	con:"关于我(style)",
//	  	path:"/page_about",
//	  	id:"about"
//	  }]
//	},
//	mutations:{
//		changePage(state,i){
//			state=i;
//			console.log(state)
//		}
//	},
//})
Vue.use(vueAxios,axios)
Vue.use(elementUI)
/* eslint-disable no-new */


import store from "./store/store"
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
