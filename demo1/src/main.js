import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false
// Vue.config.silent = true



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
