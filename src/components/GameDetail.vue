<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm4 md12>
        <v-card>
          <v-card-title primary class="title">Current Game Information</v-card-title>
          <div>
            <v-tabs v-model="active" color="cyan" dark slider-color="yellow">
              <v-tab v-for="(item, index) in chartList" :key=index ripple>
                {{ item }}
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <DamageCharts :match="match"></DamageCharts>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <GoldCharts :match="match"></GoldCharts>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <KDACharts :match="match"></KDACharts>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <Radar :match="match" :summoner="summoner"></Radar>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </div>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout d-flex align-space-around justify-center row fill-height wrap>
      <v-flex xs12 sm4 md6>
        <v-card color="blue lighten-1" dark>
          <v-card-title primary class="title">Blue Team</v-card-title>
          <PlayerList v-for="(bluePlayer,index) in match.bluePlayers"
                      :key="index"
                      :player="bluePlayer"
                      :team="0">
          </PlayerList>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4 md6>
        <v-card color="purple" dark>
          <v-card-title primary class="title">Red Team</v-card-title>
          <PlayerList v-for="(redPlayer,index) in match.redPlayers"
                      :key="index"
                      :player="redPlayer"
                      :team="1">
          </PlayerList>
        </v-card>
      </v-flex>
    </v-layout>
  </div>

</template>

<script>
import PlayerList from './PlayerList';
import DamageCharts from '../charts/DamageCharts';
import GoldCharts from '../charts/GoldCharts';
import KDACharts from '../charts/KDACharts';
import Radar from '../charts/Radar';

export default {
  name:"GameDetail",
  components:{
    PlayerList,
    DamageCharts,
    GoldCharts,
    KDACharts,
    Radar
  },
  props: {
    match: {},
    summoner: {}
  },
  data: function(){
    return {
      active: null,
      chartList: ['Damage', 'Gold', 'K/D/A', 'Radar'],
      // matchMeta:this.gameMeta
    }
  },
  methods: {
    chooseMatch(gameId) {
      this.$emit('switchGame',[gameId]);
    }
  }
}
</script>

<style>

</style>


