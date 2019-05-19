<template>
  <div>
    <div id="KDAChart" :style="{width: '850px', height: '300px'}">

    </div>

    <div id="KDAChart2" :style="{width: '850px', height: '300px'}">

    </div>
  </div>


</template>

<script>
  export default {
    name: "KDACharts",
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
        let killList_blue = [];
        let killList_red = [];
        let deathList_blue = [];
        let deathList_red = [];
        let assistList_blue = [];
        let assistList_red = [];
        let name_bluePlayers = [];
        let name_redPlayers = [];
        let kdaChart = this.$echarts.init(document.getElementById('KDAChart'));
        let kdaChart2 = this.$echarts.init(document.getElementById('KDAChart2'));

        this.dataForChart(match.bluePlayers, killList_blue, deathList_blue, assistList_blue, name_bluePlayers);
        this.dataForChart(match.redPlayers, killList_red, deathList_red, assistList_red, name_redPlayers);

        let option = {
          title: { text: 'Blue Team' },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Kill', 'Death', 'Assist']
          },
          xAxis: {
            name: 'Summoner name',
            type: 'category',
            data: name_bluePlayers,
          },
          yAxis: {
            name: 'K/D/A',
            type: 'value'
          },
          series: [
            {
              name: 'Kill',
              type: 'bar',
              barMaxWidth: 20,
              barGap: 0,
              data: killList_blue
            },
            {
              name: 'Death',
              type: 'bar',
              barMaxWidth: 20,
              data: deathList_blue
            },
            {
              name: 'Assist',
              type: 'bar',
              barMaxWidth: 20,
              data: assistList_blue
            }
          ]
        };
        let option2 = {
          title: { text: 'Red Team' },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Kill', 'Death', 'Assist']
          },
          xAxis: {
            name: 'Summoner name',
            type: 'category',
            data: name_redPlayers,
          },
          yAxis: {
            name: 'K/D/A',
            type: 'value'
          },
          series: [
            {
              name: 'Kill',
              type: 'bar',
              barMaxWidth: 20,
              barGap: 0,
              data: killList_red
            },
            {
              name: 'Death',
              type: 'bar',
              barMaxWidth: 20,
              data: deathList_red
            },
            {
              name: 'Assist',
              type: 'bar',
              barMaxWidth: 20,
              data: assistList_red
            },
          ]
        };
        kdaChart.setOption(option);
        kdaChart2.setOption(option2);

      },
      dataForChart(playerList, killList, deathList, assistList, name_players){
        playerList.forEach(player => {
          killList.push(this.calculateKDA(player.kda)[0]);
          deathList.push(this.calculateKDA(player.kda)[1]);
          assistList.push(this.calculateKDA(player.kda)[2]);
          name_players.push(player.summonerName);
        });
      },
      calculateKDA(kda){
        let kill, death, assist;
        kda.replace(/(\d+)\-(\d+)\-(\d+)/, function(a, b, c, d){
          kill = b;
          death = c;
          assist = d;
        });
        return [kill, death, assist];
      }
    }
  }
</script>

<style scoped>

</style>