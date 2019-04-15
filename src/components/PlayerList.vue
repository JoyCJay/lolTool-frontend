<template>
  <div>
    <v-card v-if="team === 'blueTeam'" color="blue lighten-1" dark>
      <v-card-title primary class="title">Blue Team</v-card-title>
      <v-card-text>{{ team }}</v-card-text>
    </v-card>
    <v-card v-else-if="team === 'purpleTeam'" color="purple" dark>
      <v-card-title primary class="title">Purple Team</v-card-title>
      <v-card-text>{{ team }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "PlayerList",
    props: {
      team: {type: String, default: () => ''}
    }
  }
</script>

<style scoped>

</style>