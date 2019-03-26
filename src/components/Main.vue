<template>
  <div class="hello">

    <v-container fluid grid-list-md>
      <v-layout align-space-around justify-center row fill-height wrap>
        <v-flex d-flex xs12 sm12 md12 id="summoner">
          <summoner/>
        </v-flex>

        <v-flex d-flex xs12 sm12 md12>
          <v-flex d-flex xs12 sm3 md3>
            <v-card color="orange" dark height="350px">
              <v-card-title primary class="title">Match List</v-card-title>
              <v-list dark>
                <v-list-tile  v-for="i in 5" :key="i" @click="1" style="text-align:center;">
                  <v-list-tile-avatar>
                    <v-icon class="grey lighten-1 white--text">{{ 'games' }}</v-icon>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>Match {{i + matchPage*5 -5}} - Win</v-list-tile-title>
                    <v-list-tile-sub-title>2019.3.21</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>

              <v-pagination  v-model="matchPage" :length="4" color="grey lighten-1"></v-pagination>
            </v-card>
          </v-flex>

          <v-flex d-flex xs12 sm4 md4 child-flex>
            <v-card color="blue lighten-1" dark height="500px">
              <PlayerList v-for="i in 5" :key="i" team="blueTeam"></PlayerList>
            </v-card>
            <!--<v-card color="blue lighten-1" dark height="500px">-->
              <!--<v-card-title primary class="title">Blue Team</v-card-title>-->
              <!--<v-card-text>ddd</v-card-text>-->
            <!--</v-card>-->
          </v-flex>

          <v-flex d-flex xs12 sm4 md4>
            <v-card color="purple" dark>
              <PlayerList v-for="i in 5" :key="i" team="purpleTeam"></PlayerList>
            </v-card>
            <!--<v-card color="purple" dark>-->
              <!--<v-card-title primary class="title">Red Team</v-card-title>-->
              <!--<v-card-text>eee</v-card-text>-->
            <!--</v-card>-->
          </v-flex>
        </v-flex>

        <v-flex d-flex xs12 sm12 md12 id="Charts">
          <Charts/>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Charts from './Charts.vue'
import Summoner from './Summoner.vue'
import PlayerList from './PlayerList'

export default {
  name: 'Main',
  components: {
    Charts,
    Summoner,
    PlayerList
  },
  props: {
    msg: String
  },
  data() {
    return {
      matchPage:1
    }
  }
}

</script>

<style>

</style>
