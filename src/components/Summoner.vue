<template>
  <div class="summoner">
      <v-card color="green lighten-2" dark height="280px">
        <v-card-title primary class="title">Summoner</v-card-title>
        <v-layout row wrap justify-space-around>

          <v-flex md3 align-self-center style="text-align:center">
            <textarea id="summonerId" v-model="summoner.name"  rows="1"></textarea>
            <div>
            <v-btn color="info" style="width:60%" @click="searchSummonerHandler">Search Summoner</v-btn>
            </div>
          </v-flex>

          <v-flex md9 style="text-align:center" v-if="summonerVisible">
            <v-layout row wrap>
              <v-flex md2>
                <v-avatar :size="156" color="grey lighten-4" >
                  <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                </v-avatar>
              </v-flex>
              <v-flex md3>
                <div class="attribute">
                  <span class="key">Platform: </span>
                  <span class="value"> EUW1</span>
                </div>
                <div class="attribute">
                  <span class="key">Name: </span>
                  <span class="value"> {{summoner.name}}</span>
                </div>
                <div class="attribute">
                  <span class="key">Level: </span>
                  <span class="value"> {{summoner.summonerLevel}}</span>
                </div>
              </v-flex>
              <v-flex md7>
                <div class="attribute">
                  <span class="key">RevisionDate: </span>
                  <span class="value"> {{summoner.revisionDate}}</span>
                </div>
                <div class="attribute">
                  <span class="key">Id: </span>
                  <span class="value">{{summoner.accountId}}</span>
                </div>

                <div>
                  <v-btn color="indigo" @click="viewDetails">View Details</v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>

        </v-layout>
      </v-card>

  </div>
</template>

<script>
import Vue from 'vue'
import { testUrl, cube } from '../utils/api';

export default {
  name: 'Summoner',
  props: ['summoner'],
  data: function() {
    return {
      // summoner: summoner,
      summonerVisible:false
    }
  },
  methods: {
    viewDetails(){
      testUrl().then(res => {
        this.$emit('toogle');
        return res;
      })
    },
    searchSummonerHandler(){
      this.summonerVisible=true;
      this.$router.push({path:'/consult/'+this.summoner.name});
    }
  },
  props: ["summoner"],
  mounted:function(){
    if (this.$route.params.gameId) {
      this.summonerVisible=true
    }
  }
};

</script>
<style>
#summonerId{
  text-align: center;
  font-size: 40px;
  background-color: white;
  width: 60%;
  color: gray;
}
.attribute{
  text-align:left;
}
.key{
  font-weight: bolder;
  font-size: 30px;
  color: black
}
.value{
  font-size: 30px;
}
</style>
