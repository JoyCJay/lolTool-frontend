<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--
    -->
    <vn-pie :model="pages"  :height="400"  text-field="name"  
      value-field="views"  :show-tooltip-percent="true" :show-legend="true">
    </vn-pie>
  </div>
</template>

<script>
import Vue from 'vue'
import VueNVD3 from 'vue-nvd3'
Vue.use(VueNVD3)

var pages = [
  {
    "name": "首页",
    "views": 451297,
    "stay": 37,
    "ratio": 0.83
  },
  {
    "name": "产品详情",
    "views": 288995,
    "stay": 79,
    "ratio": 0.6
  },
  {
    "name": "搜索结果",
    "views": 873718,
    "stay": 25,
    "ratio": 0.85
  }
]

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
  ,data() {
    return {
      pages: [
        {
        "name": "首页",
        "views": 451297,
        "stay": 37,
        "ratio": 0.83
        },
        {
        "name": "产品详情",
        "views": 288995,
        "stay": 79,
        "ratio": 0.6
        },
        {
        "name": "搜索结果",
        "views": 873718,
        "stay": 25,
        "ratio": 0.85
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
