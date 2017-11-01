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
