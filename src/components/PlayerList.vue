<template>
  <div>
    <v-card v-if="team == 0" color="blue lighten-2" dark>
      <v-card-title primary class="title">{{ player.id }}</v-card-title>
      <div class="meta">
        <span>KDA : {{player.kda}}</span>
        <span>Gold : {{player.gold}}</span>
      </div>
      <div class="dmg">
        <span>Damage : {{player.dmg}}</span>
        <span>Damage Taken : {{player.dmgTaken}}</span>
      </div>
      <div class="item">
        <span>item1 item2</span>
      </div>
    </v-card>

    <v-card v-else color="purple lighten-1" dark>
      <v-card-title primary class="title">{{ player.id }}</v-card-title>
      <div class="meta">
        <span>KDA : {{player.kda}}</span>
        <span>Gold : {{player.gold}}</span>
      </div>
      <div class="dmg">
        <span>Damage : {{player.dmg}}</span>
        <span>Damage Taken : {{player.dmgTaken}}</span>
      </div>
      <div class="item">
        <span>item1 item2</span>
      </div>
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
  span{
    margin: 20px;
    color: black;
  }
</style>