<template>
  <div class="summoner">
      <v-card color="green lighten-2" dark height="280px">
        <v-card-title primary class="title">Summoner</v-card-title>
        <v-layout row wrap justify-space-around>

          <v-flex md3 align-self-center style="text-align:center">
            <textarea name="token" id="token" v-model="token"  rows="2"></textarea>
            <div>
            <v-btn color="info" style="width:60%" @click="handleClick">Go</v-btn>
            </div>
          </v-flex>

          <v-flex md9 style="text-align:center">
            <v-layout row wrap>
              <v-flex md2>
                <v-avatar :size="156" color="grey lighten-4" >
                  <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                </v-avatar>
              </v-flex>
              <v-flex md4>
                <v-card-text>Summoner ID: {{id}}</v-card-text>
                "summonerLevel": 104
                "platformId": "EUW1",
              </v-flex>
              <v-flex md4>
                "revisionDate": 1553333357000,
                "accountId": "k3FVou_50RmEUDSN42cCs4iVXuggR-kQvhH7a_X8JAgoxVI",
              </v-flex>
            </v-layout>
          </v-flex>

        </v-layout>
      </v-card>

  </div>
</template>

<script>

import testUrl from '../utils/api'

export default {
  name: 'Summoner',
  data() {
    return {
      token: "RGAPI-9ef74657-f290-492d-a49a-4d4bb92b3355",
      id:"JoyCJay"
    }
  },
  methods: {
    handleClick(){
      testUrl()
          .then(res => {
            return res;
          })
    }
  }
}

</script>
<style>
.left{
  text-align: center
}
#token{
  background-color: white;
  width: 60%;
  color: gray;
}

</style>
