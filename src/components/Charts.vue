<template>
  <div>
    <div id="pieChart" :style="{width: '500px', height: '300px'}">

    </div>
    <div>
      {{ playerList }}
    </div>
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
      let pieChart = this.$echarts.init(document.getElementById('pieChart'))
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
    },
  }
}

</script>

<style>

</style>
