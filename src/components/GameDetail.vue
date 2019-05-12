<template>
    <v-flex xs12 sm4 md10>
        <v-layout row wrap>
            <v-flex xs12 sm4 md12>
            <v-card color="brown" dark>
                <v-card-title primary class="title">Current Game Information</v-card-title>
                <v-card-text> Current GameID: {{$route.params.gameId}}</v-card-text>
                <v-card-text> Meta: {{gameMeta}}</v-card-text>
            </v-card>
            </v-flex>
        </v-layout>

        <v-layout d-flex align-space-around justify-center row fill-height wrap>
        <v-flex xs12 sm4 md6>
              <v-card color="blue lighten-1" dark>
                <v-card-title primary class="title">Blue Team</v-card-title>
                <PlayerList v-for="(bluePlayer,index) in blueList"
                                      :key="index"
                                      :player="bluePlayer"
                                      :team="0">
                </PlayerList>
              </v-card>
            </v-flex>

            <v-flex xs12 sm4 md6>
              <v-card color="purple" dark>
                <v-card-title primary class="title">Red Team</v-card-title>
                <PlayerList v-for="(redPlayer,index) in redList"
                                      :key="index"
                                      :player="redPlayer"
                                      :team="1">
                </PlayerList>
              </v-card>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
import PlayerList from './PlayerList';
export default {
    name:"GameDetail",
    components:{PlayerList},
    props: {
      blueList: Array,
      redList:Array,
      summoner:Object,
      gameMeta:Object
    },
    data: function(){
        return {
            // matchMeta:this.gameMeta
        }
    }
}
</script>

<style>

</style>


