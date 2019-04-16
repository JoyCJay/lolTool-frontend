<template>
  <div class="hello">
    <v-container fluid grid-list-md>
      <v-layout align-space-around justify-center row fill-height wrap>
        <v-flex d-flex xs12 sm12 md12 id="summoner">
          <summoner #summoner v-on:toogle="switchVisibility" :summoner="summoner"/>
        </v-flex>

        <v-flex d-flex xs12 sm12 md2 v-if="visible">
            <v-card color="orange" dark height="350px">
              <v-card-title primary class="title">Match List</v-card-title>
                <MatchList v-on:swithcGame="switchCurrentGame" :matchList="matchList" :summoner="summoner"/>
            </v-card>
        </v-flex>

        <GameDetail v-if="visible&&match" :gameMeta="match.Meta" :blueList="match.bluePlayers" :redList="match.redPlayers" :summoner="summoner"></GameDetail>
      </v-layout>

      <v-layout align-space-around justify-center row fill-height wrap>
        <v-flex d-flex xs12 sm12 md12 id="Charts" v-if="visible">
          <Charts/>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
import * as api from '../utils/api';
import Charts from './Charts.vue';
import Summoner from './Summoner.vue';
import MatchList from'./MatchList.vue';
import GameDetail from './GameDetail.vue' 

var summoner =  api.getSummoner("JoyCJay"); // summonerName
// var matchList = api.getMatchList(654321); //accountID
var matchList;
var match;

export default {
  name: 'Main',
  components: {
    Charts,
    Summoner,
    MatchList,
    GameDetail
  },
  data: function () {
    return {
      summoner: summoner,
      visible:false,
      currentGameId:0,
      matchList:matchList,
      match:match
    }
  },
  methods: {
    switchVisibility: function () {
      this.visible=!this.visible;
      this.matchList = api.getMatchList(this.summoner.accountId);
    },
    switchCurrentGame: function(data){
      let gameId = data[0];
      this.match = api.getMatch(gameId);
    }
  },
  created:function(){
    if (this.$route.params.gameId) {
      this.visible=true
    }
  }
}

</script>

<style>

</style>
