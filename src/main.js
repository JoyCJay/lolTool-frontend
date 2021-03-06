import Vue from 'vue'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import App from './App.vue'
import router from './router'
import echarts from 'echarts';

Vue.use(Vuetify, {
  iconfont: 'md'
});

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
