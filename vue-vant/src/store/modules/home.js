import Vue from 'vue'

const home = {
  state: {
    newsList: (function () {
      // noinspection JSAnnotator
      var newList = [
        {
          title: '推荐',
          id: '001'
        },
        {title: '热门',
          id: '002'
        }]
      return newList
    })(),
    newsIndex: 0,
    newsPrevIndex: 0,
    newsLoading: false,
    end: false
  },
  actions: {
    addHomeTag ({commit}, news) {
      commit('ADDHOMETAG', news)
    },
    delHomeTag ({commit}, news) {
      commit('DELHOMETAG', news)
    },
    getHomeList ({commit, state}, params) {
      let obj = state.newsList.find(v => v.id === params.id)
      if (obj.list) return
      state.newsLoading = true
      // 请求网络收数据
      // noinspection JSAnnotator
      var newList = [
        {
          title: '推荐',
          id: '001'
        },
        {title: '热门',
          id: '002'
        }]
      commit('GETHOMELIST', newList)
    }
  },
  mutations: {
    ADDHOMETAG (state, news) {
      if (state.newsList.every(tag => tag.title !== news.title)) {
        state.newsList.push(news)
      }
    },
    DELHOMETAG (state, news) {
      let index = state.newsList.findIndex(tag => tag.title === news.title)
      state.newsList.splice(index, 1)
    },
    GETHOMELIST (state, list) {
      state.newsList[state.newsIndex].list = list
      Vue.prototype.$set(state.newsList, state.newsIndex, state.newsList[state.newsIndex])
    }
  }
}
export default home