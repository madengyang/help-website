import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'
import Edit from '@/views/content/edit'
import Edition from '@/views/content/edition'

//hidden 不会再导航栏出现
//第一级没有meta一级菜单
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/edit',
      name: 'Content',
      component: Layout,
      children:[
        {
          path: 'index',
          name:'Edit',
          meta:{title:'编辑文档',icon:'ios-paper'},
          component:Edit

        }
      ]
    },
    {
      path: '/edition',
      name: 'Content',
      component: Layout,
      children:[
        {
          path: '/aaa',
          name:'Edition',
          meta:{title:'版本管理',icon:'ios-paper'},
          component:Edition

        }
      ]
    },
    {
      path: '/edita',
      name: 'Content',
      meta:{title:'编辑版本',icon:'ios-paper'},
      component: Layout,
      children:[
        {
          path: '/aaa',
          name:'bbbaa',
          meta:{title:'版本管理',icon:'ios-paper'},
          component:Edition

        },
        {
          path: '/bbb',
          name:'bb',
          meta:{title:'版本管理',icon:'ios-paper'},
          component:Edition

        }
      ]
    }
  ]
})
