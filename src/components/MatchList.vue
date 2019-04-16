<template>
<div>
    <v-list dark>
        <v-list-tile  v-for="match in matchList" :key="match.Meta.gameId" @click="chooseMatch(match.Meta.gameId)" style="text-align:center;" >
            <v-list-tile-avatar>
                <v-icon class="grey lighten-1 white--text">{{ 'games' }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
                <v-list-tile-title>GameID: {{match.Meta.gameId}}</v-list-tile-title>
                <v-list-tile-sub-title>Date: {{match.Meta.date}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>WinTeams: {{match.Meta.win}}</v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>
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
            this.$router.push(
                { path: '/consult'+'/'+this.summoner.name+'/'+ gameId}
            );
            this.$emit('swithcGame',[gameId]);
        }
    }
}
</script>

<style>

</style>

