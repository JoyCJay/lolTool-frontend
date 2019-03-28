<template>
  <div class="hello">

    <v-container fluid grid-list-md>
      <v-layout align-space-around justify-center row fill-height wrap>
        <v-flex d-flex xs12 sm12 md12 id="summoner">
          <summoner v-on:toogle="switchVisibility" :summoner="summoner"/>
        </v-flex>

        <v-flex d-flex xs12 sm12 md12 v-if="visible">
          <v-flex d-flex xs12 sm3 md2>
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

          <v-flex d-flex xs12 sm4 md5 child-flex>
            <v-card color="blue lighten-1" dark>
              <v-card-title primary class="title">Blue Team</v-card-title>
              <PlayerList v-for="bluePlayer in blueList"
                                     :key="bluePlayer.index"
                                     :player="bluePlayer"
                                     :team="0">
              </PlayerList>
            </v-card>
          </v-flex>

          <v-flex d-flex xs12 sm4 md5>
            <v-card color="purple" dark>
              <v-card-title primary class="title">Red Team</v-card-title>
              <PlayerList v-for="redPlayer in redList"
                                     :key="redPlayer.index"
                                     :player="redPlayer"
                                     :team="1">
              </PlayerList>
            </v-card>
          </v-flex>
        </v-flex>

        <v-flex d-flex xs12 sm12 md12 id="Charts" v-if="visible">
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
  data: function () {
    return {
      matchPage:1,
      redList:[
        {
          index:0,
          id: "red1",
          kda:"1-2-3",
          gold:"8888",
          dmg:"123456",
          dmgTaken:"654321"
        },
        {
          index:1,
          id: "red2",
          kda:"1-2-3",
          gold:"8888",
          dmg:"123456",
          dmgTaken:"654321"
        },
        {
          index:2,
          id: "red3",
          kda:"1-2-3",
          gold:"8888",
          dmg:"123456",
          dmgTaken:"654321"
        },
        {
          index:3,
          id: "red4",
          kda:"1-2-3",
          gold:"8888",
          dmg:"123456",
          dmgTaken:"654321"
        }
      ],
      blueList:[
        {
          index:0,
          id: "blue1",
          kda:"1-2-3",
          gold:"8888",
          dmg:"123456",
          dmgTaken:"654321"
        },
        {
          index:1,
          id: "blue2",
          kda:"1-2-3",
          gold:"8888",
          dmg:"123456",
          dmgTaken:"654321"
        },
        {
          index:2,
          id: "blue3",
          kda:"1-2-3",
          gold:"8888",
          dmg:"123456",
          dmgTaken:"654321"
        },
        {
          index:3,
          id: "blue4",
          kda:"1-2-3",
          gold:"8888",
          dmg:"123456",
          dmgTaken:"654321"
        },
        {
          index:4,
          id: "blue5",
          kda:"1-2-3",
          gold:"8888",
          dmg:"123456",
          dmgTaken:"654321"
        },
      ],
      summoner: {
        "profileIconId": 3632,
        "name": "JoyCJay",
        "puuid": "6bmemBIp6TveV98cOOKV-Djjjj_0kbyPdk1kBpMrd31spm1RIFowLqP1UJR6ZkIuZWKhxxVS26wdGA",
        "summonerLevel": 105,
        "accountId": "k3FVou_50RmEUDSN42cCs4iVXuggR-kQvhH7a_X8JAgoxVI",
        "id": "oiL2jn33fB3KojNWe1JNqxvgkxIGOkChqH_Zyb5XF4MdJyXo",
        "revisionDate": 1553733674000
      },
      visible:false
    }
  },
  methods: {
    switchVisibility: function () {
      this.visible=!this.visible;
    }
  }
}

</script>

<style>

</style>
