import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Main from './components/Main'
import MatchList from './components/MatchList';

import  OnlineControl from "./components/OnlineControl";
import NotFound from "./components/NotFound";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: ''},
    { 
      path: '/consult*', component: Main ,
      children: [
        {
          path: ':summonerName',
          children:[{name: 'summonerGame', path: ':gameId',component: MatchList}]
        }
      ]
    },
    { path: '/onlineControl', component: OnlineControl },
    { path: '*', component: NotFound }
  ]
})
/*
<p>{{$route.params.user}}</p>
<router-link to="/user/foo">/user/foo</router-link>
*/