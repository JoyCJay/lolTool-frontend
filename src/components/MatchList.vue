<template>
<div>
    <v-list dark two-line>
      <template v-for="(match,index) in matchList">
        <v-list-tile :key="index" @click="chooseMatch(match.meta.gameId)" style="text-align:center;" >
            <v-list-tile-avatar>
                <v-icon class="grey lighten-1 white--text">{{ 'games' }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
                <v-list-tile-title v-html="match.meta.result"></v-list-tile-title>
                <v-list-tile-sub-title>Date: {{match.meta.date}}</v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="match.meta.kda"></v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-divider v-if="index + 1 < matchList.length" :key="`divider-${index}`"></v-divider>
      </template>

    </v-list>
    <!--
    <v-pagination  v-model="matchPage" :length="4" color="grey lighten-1"></v-pagination>
    -->
</div>
</template>

<script>

export default {
    name:"MatchList",
    props:['matchList','summoner'],
    data: function () {
        return {
            matchPage:1
        };
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

