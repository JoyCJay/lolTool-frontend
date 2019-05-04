<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span style="margin-right:10px">LO10 - Projet</span>
        <span class="font-weight-light">LOL - Tool</span>
      </v-toolbar-title>
      <v-btn flat @click="toPath('home')">home</v-btn>
      <v-btn flat @click="toPath('consult')">consult</v-btn>
      <v-btn flat @click="toPath('onlineControl')">onlineControl</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/JoyCJay/lolTool-frontend" target="_blank">
        <span class="mr-2">github link</span>
      </v-btn>
    </v-toolbar>
    <router-view>
    </router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      //
    }
  },
  methods: {
    toPath: function (path) {
      this.$router.push({path: path})
    },
  }
}
</script>
