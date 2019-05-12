<template>
  <div class="hello">
    <v-container fluid grid-list-md>
      <v-layout align-space-around justify-center row fill-height wrap>
        <v-flex d-flex xs12 sm12 md12 id="summoner">
          <summoner #summoner v-on:searchSummoner="searchSummoner" v-on:toogle="showGames" :summoner="summoner"/>
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


//deepcopy，不考虑循环引用的情况
function cloneObj(from) {
    return Object.keys(from)
        .reduce((obj, key) => (obj[key] = clone(from[key]), obj), {});
}
function cloneArr(from) {
    return from.map((n) => clone(n));
}
// 复制输入值
function clone(from) {
    if (from instanceof Array) {
        return cloneArr(from);
    } else if (from instanceof Object) {
        return cloneObj(from);
    } else {
        return (from);
    }
}


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
      summoner: Object,
      visible:false,
      currentGameId: 0,
      matchListIndex: 1,
      matchList:Object,
      match:Object
    }
  },
  methods: {
    showGames: function () {
      if (this.$route.params.summonerName) {
        this.visible=!this.visible;
        api.getAPI("http://localhost:9090/consult/getMatches?accountId=" + this.summoner.accountId+"&index="+this.matchListIndex).then( (response)=>{
          this.matchList = response.data;
        })
      }
    },
    switchCurrentGame: function(data){
      let chosenGameId = data[0];
      const matchListData = clone(this.matchList); //解绑observer
        // console.log(matchListData);
        for (const game of matchListData) {
        if (game.meta.gameId == chosenGameId) {
          this.match = game;
        }
      }
    },
    searchSummoner: function (data) {
      api.getAPI("/consult/getSummoner?summonerName="+data[0]).then( (response)=>{
          this.summoner = response.data;
      })
    }
  },
  // lifecycle hook`
  created:function(){
    if (this.$route.params.gameId) {
      this.visible=true
    }
  }
}

</script>

<style>

</style>
