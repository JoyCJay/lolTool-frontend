<template>
  <div class="charts">
    <vn-pie :model="pages"  :height="400"  text-field="name"
      value-field="views"  :show-tooltip-percent="true" :show-legend="true">
    </vn-pie>
  </div>
</template>

<script>
import Vue from 'vue'
import VueNVD3 from 'vue-nvd3'
Vue.use(VueNVD3)

let data= [
        {
        "name": "index",
        "views": 451297,
        "stay": 37,
        "ratio": 0.83
        },
        {
        "name": "product",
        "views": 288995,
        "stay": 79,
        "ratio": 0.6
        },
        {
        "name": "search",
        "views": 873718,
        "stay": 25,
        "ratio": 0.85
        }
      ];

export default {
  name: 'Charts',
  props: {
    msg: String
  },
  data() {
    return {
      pages: data
    }
  }
}

</script>

<style>

</style>
