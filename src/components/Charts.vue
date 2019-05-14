<template>
  <div>
    <v-layout d-flex align-space-around justify-center row fill-height wrap>
      <v-flex xs12 sm4 md4>
        <div id="pieChart" :style="{width: '500px', height: '300px'}">

        </div>
      </v-flex>
      <v-flex xs12 sm4 md4>
        <div id="pieChart2" :style="{width: '500px', height: '300px'}">

        </div>
      </v-flex>
      <v-flex xs12 sm4 md4>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>

export default {
  name: 'Charts',
  props: {
    playerList: Object
  },
  data: function () {
    return {
    }
  },
  watch: {
    playerList: function(newVal){
      this.drawDamageChart(newVal)
    }
  },
  methods: {
    drawDamageChart(playerList) {
      let data = [];
      playerList.forEach(player => {
        data.push({
          value: player.dmgTaken,
          name: player.summonerName
        })
      });
      let pieChart = this.$echarts.init(document.getElementById('pieChart'));
      let pieChart2 = this.$echarts.init(document.getElementById('pieChart2'));
      let option = {
        title: { text: 'damage' },
        tooltip: {},
        series: [{
          name: 'damage',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          data: data
        }]
      };
      pieChart.setOption(option);
      pieChart2.setOption(option);
    },
  }
}

</script>

<style>

</style>
