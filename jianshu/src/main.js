import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import bootstrap from 'bootstrap-vue'
import axios from 'axios'

Vue.use(jquery)
Vue.prototype.$http = axios
Vue.use(bootstrap)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
