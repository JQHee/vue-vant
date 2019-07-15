import { Cookie } from '@/common/util/'
const user = {
  state: {
    isLogin: false,
    user: {
      name: Cookie.get('username') || '',
      avatar: Cookie.get('avatar') || ''
    }
  },
  actions: {
    login ({commit}, params) {
      // 发起网络请求
      // commit('LOGIN', res.data)
    },
    esc ({commit}) {
      commit('ESC')
    }
  },
  mutations: {
    LOGIN (state, data) {
      state.user = {
        name: data.username,
        avatar: ''
      }
      Cookie.set({
        username: data.username,
        avatar: ''
      })
    },
    ESC (state) {
      state.user = {
        name: '',
        avatar: ''
      }
      Cookie.remove(['username', 'avatar'])
    }
  }
}
export default user