<template>
    <v-layout d-flex align-space-around justify-center row fill-height wrap>
      <v-flex xs12 sm4 md4>
        <div id="kdaChart" :style="{width: '500px', height: '300px'}">

        </div>
      </v-flex>
      <v-flex xs12 sm4 md4>
        <div id="kdaChart2" :style="{width: '500px', height: '300px'}">

        </div>
      </v-flex>
      <v-flex xs12 sm4 md4>
      </v-flex>
    </v-layout>
</template>

<script>

  export default {
    name: 'Charts',
    props: {
      match: Object,
    },
    data: function () {
      return {
      }
    },
    watch: {
      match: function(newVal){
        this.drawChart(newVal)
      }
    },
    methods: {
      drawChart(match){
        let data_bluePlayers = [];
        let data_redPlayers = [];
        this.dataForChart(match.bluePlayers, data_bluePlayers);
        this.dataForChart(match.redPlayers, data_redPlayers);
        let pieChart = this.$echarts.init(document.getElementById('kdaChart'));
        let pieChart2 = this.$echarts.init(document.getElementById('kdaChart2'));
        let option = {
          title: { text: 'Blue Team' },
          tooltip: {},
          series: [{
            name: 'gold',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            data: data_bluePlayers
          }]
        };
        let option2 = {
          title: { text: 'Red Team' },
          tooltip: {},
          series: [{
            name: 'gold',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            data: data_redPlayers
          }]
        };
        pieChart.setOption(option);
        pieChart2.setOption(option2);
      },
      dataForChart(playerList, data_players){
        playerList.forEach(player => {
          data_players.push({
            value: player.gold,
            name: player.summonerName
          })
        });
      }
    }
  }

</script>

<style>

</style>
