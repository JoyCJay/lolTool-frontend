<template>
  <div>
    <v-card v-if="team == 0" color="blue lighten-2" dark>
      <v-card-title primary class="title">{{ player.id }}</v-card-title>
      <v-card-text>KDA : {{player.kda}}</v-card-text>
      <v-card-text>Gold : {{player.gold}}</v-card-text>
      <v-card-text>Damage : {{player.dmg}}</v-card-text>
      <v-card-text>Damage Taken : {{player.dmgTaken}}</v-card-text>
    </v-card>

    <v-card v-else color="purple lighten-1" dark>
      <v-card-title primary class="title" color="black">{{ player.id }}</v-card-title>
      <v-card-text>KDA : {{player.kda}}</v-card-text>
      <v-card-text>Gold : {{player.gold}}</v-card-text>
      <v-card-text>Damage : {{player.dmg}}</v-card-text>
      <v-card-text>Damage Taken : {{player.dmgTaken}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "PlayerList",
    props: ['player','team'],
    data: function () {
      return {
        //
      }
    }
  }
</script>

<style scoped>

</style>