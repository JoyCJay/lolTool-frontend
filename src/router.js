import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Main from './components/Main'
import MatchList from './components/MatchList';
import Welcome from "./components/Welcome";

import  OnlineControl from "./components/OnlineControl";
import NotFound from "./components/NotFound";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '', name:'Welcome', component:Welcome
    },
    { 
      path: '/consult', name: 'consult', component: Main ,
      children: [
        {
          path: ':summonerName',
          name: 'summonerName',
          children:[{name: 'summonerGame', path: ':gameId',component: MatchList}]
        }
      ]
    },
    { path: '/onlineControl', name: 'onlineControl', component: OnlineControl },
    { path: '*', component: NotFound }
  ]
})
/*
<p>{{$route.params.user}}</p>
<router-link to="/user/foo">/user/foo</router-link>
*/