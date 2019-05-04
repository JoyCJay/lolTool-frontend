<template>
  <div class="hello">
    <v-container fluid grid-list-md>
      <v-layout align-space-around justify-center row fill-height wrap>
        <v-flex d-flex xs12 sm12 md12 id="summoner">
          <Summoner #summoner @toogle="getMatchList" @summoner="getSummoner"/>
        </v-flex>

        <v-flex d-flex xs12 sm12 md2 v-if="visible">
            <v-card color="orange" dark height="350px">
              <v-card-title primary class="title">Match List</v-card-title>
                <MatchList v-on:switchGame="switchCurrentGame" :matchList="matchList" :summoner="summoner"/>
            </v-card>
        </v-flex>

        <GameDetail :blueList="blueList" :redList="redList" v-if="visible" :summoner="summoner"></GameDetail>
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

// var summoner =  api.getSummoner("JoyCJay");
// var matchList = api.getMatchList(654321); accountID
// var redList = api.getRedList(123456); //gameid
// var blueList = api.getBlueList(123456); //gameid


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
      summoner: {},
      visible:false,
      currentGameId:0,
      matchList:[],
      redList:[],
      blueList:[]
    }
  },
  methods: {
    getSummoner: function(summoner) {
      this.summoner = summoner;
    },
    getMatchList: function (matchList) {
      this.matchList = matchList;
      this.visible = !this.visible;
    },
    switchCurrentGame: function(redList, blueList){
      this.redList = redList;
      this.blueList = blueList;
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
