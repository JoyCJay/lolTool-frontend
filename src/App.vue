<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span style="margin-right:10px">LO10 - Projet</span>
        <span class="font-weight-light">LOL - Tool</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/JoyCJay/lolTool-frontend" target="_blank">
        <span class="mr-2">github link</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <ul>
        <li><router-link to="/consult">consult</router-link></li>
        <li><router-link to="/onlineControl">onlineControl</router-link></li>
      </ul>
      <router-view/>
    </v-content>
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
  }
}
</script>
