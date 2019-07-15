import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import home from './modules/home'
import getters from './getters'

Vue.use(Vuex)

// 单项数据流
/* 数据流动 actions 可省略
dispatch
1.vue -> actions ->  mutations -> state
commit
2.vue->  mutations -> state
module 对state actions mutations进行拆分管理
*/
const store = new Vuex.Store({
  modules: {
    user,
    home
  },
  getters
})

export default store