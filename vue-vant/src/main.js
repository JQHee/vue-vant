/// css
import 'vant/lib/index.css'
import './assets/css/index.scss'


import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick'
import Vant from 'vant'


// 路由
import router from './router'
// vuex
import store from './store'
import components from './components'
import * as mixins from './mixins'
import * as filters from './filters'
import * as directives from './directives'

// 1、处理移动端click事件300毫秒延迟
FastClick.attach(document.body);
// 2、有赞的Vant框架
Vue.use(Vant)

// 全局组件
Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

// 引入全局指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

// 引入全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 引入全局mixins
Object.keys(mixins).forEach(key => {
  Vue.mixin(mixins[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
