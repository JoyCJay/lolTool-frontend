import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Main from './components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Main },
    { path: '/main', name: 'Main', component: Main },
    // { path: '/header',  name: 'Header', component: Header},
    // { path: '/admin',  name: 'Admin', component: Admin}
  ]
})