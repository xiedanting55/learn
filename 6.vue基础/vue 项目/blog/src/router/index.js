import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
 
//组件模块
import Main from '../components/main'
import HelloWorld from '../components/HelloWorld'
 
export default new Router({
  routes: [
    { path: '/', name: 'home', component: Main },
    { path: '/main', name: 'Main', component: Main },
    { path: '/helloworld', name: 'helloworld', component: HelloWorld },
  ]
})