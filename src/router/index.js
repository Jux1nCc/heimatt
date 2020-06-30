import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入useVant
import UseVant from '@/views/useVant/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/usevant',
    component: UseVant
  }
]

const router = new VueRouter({
  routes
})

export default router
