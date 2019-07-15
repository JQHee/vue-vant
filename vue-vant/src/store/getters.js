const getters = {
    /* USER */
    isLogin: state => state.user.isLogin,
    user: state => state.user.user,
  
    /* 首页 */
    newsList: state => state.home.newsList,
    newsLoading: state => state.home.newsLoading,
    homeNewsIndex: state => state.home.newsIndex,
    homeNewsPrevIndex: state => state.home.newsPrevIndex,
    homeEnd: state => state.home.end
  }
  export default getters