import Vue from 'vue'
import App from './App'
import router from './router'
import VueMeta from 'vue-meta'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/style.less'
import '@/networks/init'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueMeta)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
