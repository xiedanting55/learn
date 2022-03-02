import App from './App'
import store from "./store"

Vue.prototype.$store = store

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

import $H from '@/common/utils/request'; // 引入request库
Vue.prototype.$H = $H

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif


// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app
  }
}
// #endif