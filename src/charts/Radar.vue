<template>
  <v-layout d-flex align-space-around justify-center row fill-height wrap>
    <div id="radar" :style="{width: '500px', height: '300px', marginTop: '10px'}">

    </div>
  </v-layout>
</template>

<script>
  export default {
    name: "Radar",
    props: {
      match: Object,
      summoner: Object
    },
    data: function () {
      return {
        summonerData: [],
        averageData: [],
        playerList: [],
      }
    },
    watch: {
      match: function(newVal){
        this.summonerData = [];
        this.averageData = [];
        const team = newVal.meta.team;
        this.playerList = team === 'Blue' ? newVal.bluePlayers : newVal.redPlayers;
        this.analyse(this.playerList);
        this.drawChart();
      }
    },
    methods: {
      analyse(playerList) {
        let dmgTaken = 0, kill = 0, death = 0, assist = 0;
        playerList.forEach(player => {
          if(player.accountId === this.summoner.accountId) {
            this.summonerData.push(player.dmgTaken);
            this.summonerData.push(...this.calculateKDA(player.kda));
          }
          dmgTaken += player.dmgTaken;
          kill += parseInt(this.calculateKDA(player.kda)[0]);
          death += parseInt(this.calculateKDA(player.kda)[1]);
          assist += parseInt(this.calculateKDA(player.kda)[2]);
        });

        this.averageData.push(dmgTaken/5);
        this.averageData.push(kill/5);
        this.averageData.push(death/5);
        this.averageData.push(assist/5);
      },
      drawChart() {
        let radar = this.$echarts.init(document.getElementById('radar'));
        let option = {
          title: {
            text: 'Radar'
          },
          tooltip: {},
          legend: {
            left: 130,
            data: ['Yours', 'Average']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              { name: 'Damage', max: 40000},
              { name: 'Kill', max: 18},
              { name: 'Death', max: 15},
              { name: 'Assist', max: 18},
            ]
          },
          series: [{
            name: 'Yours vs Average',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
              {
                value : this.summonerData,
                name : 'Yours'
              },
              {
                value : this.averageData,
                name : 'Average'
              }
            ]
          }]
        };
        radar.setOption(option);

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