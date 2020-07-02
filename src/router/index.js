import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入useVant
import UseVant from '@/views/useVant/index'
// 导入login
import Login from '@/views/login/index'
// 导入home
import Home from '@/views/home/index'
// 导入index
import Index from '@/views/index/index'
// 导入my
import My from '@/views/my/my'

Vue.use(VueRouter)

const routes = [
  {
    path: '/usevant',
    component: UseVant
  },
  // 登录页
  {
    path: '/',
    component: Login
  },
  // 首页
  {
    path: '/home',
    redirect: '/index',
    component: Home,
    children: [
      {
        path: '/index',
        component: Index
      },
      {
        path: '/my',
        component: My
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
