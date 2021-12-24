import App from './App'
import store from "./store"

Vue.prototype.$store = store;

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

// 引入全局组件
import divider from '@/components/common/divider.vue';
import loading from '@/components/common/loading.vue';  //加载动画
import loadingPlus from "@/common/mixin/loading-plus.vue";
Vue.component('divider', divider)
Vue.component('loading', loading)
Vue.component('loading-plus',loadingPlus)
// 引入request库
import $H from '@/common/lib/request.js';
Vue.prototype.$H = $H

App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif