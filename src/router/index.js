import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import SearchList from '@/components/list/SearchList'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Index', component: Index},
		{path:'/SearchList', name:'SearchList', component:SearchList}
  ]
})
