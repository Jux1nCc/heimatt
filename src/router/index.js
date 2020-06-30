import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入useVant
import UseVant from '@/views/useVant/index.vue'
// 导入login
import Login from '@/views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/usevant',
    component: UseVant
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
