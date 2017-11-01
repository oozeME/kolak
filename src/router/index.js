import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import loading from '@/components/loading'
import error from '@/components/error'
import page_works from '@/components/pages/page_works'
import page_about from '@/components/pages/page_about'
import page_blog from '@/components/pages/page_blog'
import page_contact from '@/components/pages/page_contact'
import page_blog_right from '@/components/pages/page_blog_content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loading',
      component: loading
    },
    {
      path: '/error',
      name: 'error',
      component: error
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
			path:"/page_blog",
			name:"page_blog",
			component:page_blog,
			children:[{
				path:"page_blog_right",
				name:"page_blog_right",
				component:page_blog_right
			}]
  	},
  	{
			path:"/page_works",
			name:"page_works",
			component:page_works
  	},{
			path:"/page_about",
			name:"page_about",
			component:page_about
 		},{
			path:"/page_contact",
			name:"page_contact",
			component:page_contact
  	}
    
  ]
})
