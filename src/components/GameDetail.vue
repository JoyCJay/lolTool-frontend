<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm4 md12>
        <v-card color="">
          <v-card-title primary class="title">Current Game Information</v-card-title>
          <v-card-text> Current GameID: {{$route.params.gameId}}</v-card-text>
          <div>
            <v-tabs v-model="active" color="cyan" dark slider-color="yellow">
              <v-tab v-for="(item, index) in chartList" :key=index ripple>
                {{ item }}
              </v-tab>
              <v-tab-item v-for="index in chartList" :key=index>
                <v-card flat>
                  <v-layout d-flex align-space-around justify-center row fill-height wrap>
                    <v-flex xs12 sm4 md4>
                      <Charts :playerList="match.bluePlayers"></Charts>
                    </v-flex>
                    <v-flex xs12 sm4 md4>
                      <Charts :playerList="match.redPlayers"></Charts>
                    </v-flex>
                    <v-flex xs12 sm4 md4>
                    </v-flex>
                  </v-layout>
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
import Charts from './Charts.vue';

export default {
    name:"GameDetail",
    components:{
      PlayerList,
      Charts
    },
    props: {
      match: {}
    },
    data: function(){
        return {
          active: null,
          chartList: ['damage'],
            // matchMeta:this.gameMeta
        }
    }
}
</script>

<style>

</style>


