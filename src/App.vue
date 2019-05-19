<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span style="margin-right:10px">LO10 - Projet</span>
        <span class="font-weight-light">LOL - Loupe</span>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat @click="to('consult')">consult</v-btn>
        <v-btn flat @click="to('onlineControl')">onlineControl</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/JoyCJay/lolTool-frontend" target="_blank">
        <span class="mr-2">github link</span>
      </v-btn>
    </v-toolbar>


      <router-view/>

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
    to(route){
      this.$router.push({ name: route });
    }
  }
}
</script>
