<template>
  <div id="lastGamesChart" :style="{width: '100%', height: '300px', marginTop: '10px'}">

  </div>
</template>

<script>
  export default {
    name: "LastGamesCharts",
    props: {
      matchList: Array,
      summoner: Object,
    },
    data: function () {
      return {
        // matchList: [],
        damageList: [],
        goldList: [],
      }
    },
    mounted: function () {
      this.drawChart()
    },
    methods: {
      analyse(matchList) {
        matchList.forEach(match => {
          if(match.meta.team === "Blue") {
            match.bluePlayers.forEach(player => {
              if(player.accountId === this.summoner.accountId) {
                this.damageList.push(player.dmg);
                this.goldList.push(player.gold);
              }
            })
          } else {
            match.redPlayers.forEach(player => {
              if(player.accountId === this.summoner.accountId) {
                this.damageList.push(player.dmg);
                this.goldList.push(player.gold);
              }
            })
          }
        });
      },
      drawChart() {
        this.analyse(this.matchList);
        let chart = this.$echarts.init(document.getElementById('lastGamesChart'));
        let option = {
          title: {
            text: 'Your last 5 games',
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            right: 0,
            data: ['Damage', 'Gold']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Damage',
              type: 'line',
              stack: '总量',
              data: this.damageList
            },
            {
              name: 'Gold',
              type: 'line',
              stack: '总量',
              data: this.goldList
            },
          ]
        };
        chart.setOption(option)
      }
    }
  }
</script>

<style scoped>

</style>