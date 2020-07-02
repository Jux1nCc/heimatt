import axios from 'axios'
import store from '@/store/index'

const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

// 拦截器
instance.interceptors.request.use(function (config) {
  // 判断当前是否带有token
  var token = store.state.userInfo.token
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
export default instance
