// 导入vue
import Vue from 'vue'
// 导入App
import App from './App.vue'
// 导入路由
import router from './router'
// 导入vuex
import store from './store'
// 导入vant
import Vant from 'vant'
// 导入vant样式
import 'vant/lib/index.css'

// 使用vant
Vue.use(Vant)

Vue.config.productionTip = false

// 创建Vue实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
