<template>
  <div class="main">
    <v-container fluid grid-list-md>
      <Summoner #summoner v-on:getSummoner="getSummoner" v-on:showMatchList="showMatchList"/>
      <v-layout align-space-around justify-center row fill-height wrap>
        <v-flex d-flex xs3 sm3 md3 v-if="visible">
          <v-card color="orange" dark height="880px">
            <v-card-title primary class="title">Match List</v-card-title>
            <MatchList v-on:switchGame="switchCurrentGame" :matchList="matchList" :summoner="summoner"/>
            <v-pagination
                    v-model="matchListIndex"
                    :length="5"
                    :total-visible="5"
            ></v-pagination>
            <LastGamesCharts :matchList="matchList" :summoner="summoner"></LastGamesCharts>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm12 md1></v-flex>
        <v-flex d-flex xs8 sm8 md8>
          <v-progress-circular
                  class="progress-circular"
                  indeterminate
                  color="primary"
                  v-if="circularVisible"
          ></v-progress-circular>
          <GameDetail v-if="visible" :match="match" :summoner="summoner"></GameDetail>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import * as api from '../utils/api';
import * as utils from '../utils/utils'
import Summoner from './Summoner.vue';
import MatchList from'./MatchList.vue';
import GameDetail from './GameDetail.vue';
import LastGamesCharts from "../charts/LastGamesCharts"


export default {
  name: 'Main',
  components: {
    Summoner,
    MatchList,
    GameDetail,
    LastGamesCharts
  },
  data: function () {
    return {
      summoner: {},
      visible: false,
      currentGameId: 0,
      matchListIndex: 1,
      matchList:Object,
      match:{},
      circularVisible: false,
    }
  },
  watch: {
    matchListIndex: function(){
      this.showMatchList()
    }
  },
  methods: {
    showMatchList: function () {
      if (this.$route.params.summonerName) {
        api.getMatchList(this.summoner.accountId, this.matchListIndex).then(res => {
          this.matchList = res;
          this.matchList.forEach(match => {
            match.meta.result = this.winOrLose(match, this.summoner.name);
            match.meta.kda = this.showKDA(match, this.summoner.name);
          });
          this.visible = true
          this.circularVisible = false
        });
        this.circularVisible = true
      }
    },
    winOrLose: function(match, summonerName) {
      const winTeam = match.meta.winTeam;
      let team;
      match.bluePlayers.forEach(player => {
        if(player.summonerName === summonerName) team = "Blue"
      });
      match.redPlayers.forEach(player => {
        if(player.summonerName === summonerName) team = "Red"
      });
      match.meta.team = team;
      if(team === winTeam) return '<span style="color: lawngreen">Win</span>';
      else return '<span style="color: #ff1705;">Lose</span>';
    },
    showKDA: function(match, summonerName) {
      let kda;
      match.bluePlayers.forEach(player => {
        if(player.summonerName === summonerName) kda = `<span>K/D/A: ${player.kda}</span>`;
      });
      match.redPlayers.forEach(player => {
        if(player.summonerName === summonerName) kda = `<span>K/D/A: ${player.kda}</span>`;
      });
      return kda;
    },
    switchCurrentGame: function(gameId){
      let chosenGameId = gameId[0];
      const matchListData = utils.clone(this.matchList); //解绑observer
        for (const game of matchListData) {
        if (game.meta.gameId === chosenGameId) {
          game.meta.result = this.winOrLose(game, this.summoner.name);
          this.match = game;
          this.visible = true;
        }
      }
    },
    getSummoner: function (summoner) {
      this.summoner = summoner;
    }
  },
  // lifecycle hook`
  created: function(){
    if (this.$route.params.gameId) {
      this.visible=true
    }
  }
}

</script>

<style>
.progress-circular{
  margin: 5rem;
}
</style>
