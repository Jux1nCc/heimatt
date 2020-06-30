import Vue from 'vue'
import Vuex from 'vuex'
import { localGet } from '../utils/myLocal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // userInfo: JSON.parse(window.localStorage.getItem('userInfo')) || {}
    userInfo: localGet('userInfo') || {}
  },
  mutations: {
    setUserInfo: function (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
