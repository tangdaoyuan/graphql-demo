import Vue from 'vue'
import { PiniaVuePlugin, createPinia } from 'pinia'
import VueApollo from 'vue-apollo'
import apolloClient from './apollo'

import App from './App.vue'
import router from './router'

import './assets/main.css'

Vue.use(PiniaVuePlugin)
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  router,
  apolloProvider,
  pinia: createPinia(),
  render: h => h(App),
}).$mount('#app')
