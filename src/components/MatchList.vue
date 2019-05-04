<template>
<div>
    <v-list dark>
        <v-list-tile  v-for="match in matchList" :key="match.gameId" @click="chooseMatch(match.gameId)" style="text-align:center;" >
            <v-list-tile-avatar>
                <v-icon class="grey lighten-1 white--text">{{ 'games' }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
                <v-list-tile-title>{{match.gameId}}</v-list-tile-title>
                <v-list-tile-sub-title>2019.3.21</v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
    <!--
    <v-pagination  v-model="matchPage" :length="4" color="grey lighten-1"></v-pagination>
    -->
</div>
</template>

<script>
import { getRedList, getBlueList } from '../utils/api';

export default {
    name:"MatchList",
    props:['matchList','summoner'],
    data: function () {
        return {
            redList: [],
            blueList: [],
            matchPage:1
        };
    },
    methods: {
        chooseMatch(gameId) {
          getRedList(gameId).then(res => {
            this.redList = res;
          });
          getBlueList(gameId).then(res => {
            this.blueList = res;
          });
          this.$router.push(
              { path: `/consult/${this.summoner.name}/${gameId}` }
          );
          this.$emit('switchGame',this.redList, this.blueList);

        }
    }
}
</script>

<style>

</style>

