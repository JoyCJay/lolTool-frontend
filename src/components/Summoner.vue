<template>
  <div class="summoner">
      <v-card color="green lighten-2" dark height="250px">
        <v-card-title primary class="title">Summoner</v-card-title>
        <v-layout row wrap justify-space-around>

          <v-flex md3 align-self-center style="text-align:center">
            <input type="text" id="summonerId" v-model="searchName"  rows="1" placeholder="Name">
            <div>
            <v-btn color="info" style="width:60%" @click="searchSummonerHandler">Search Summoner</v-btn>
            </div>
          </v-flex>

          <v-flex md9 style="text-align:center" v-if="summonerVisible">
            <v-layout row wrap>
              <v-flex md2>
                <v-avatar :size="156" color="grey lighten-4" >
                  <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                </v-avatar>
              </v-flex>
              <v-flex md4>
                <div class="attribute">
                  <span class="key">Platform: </span>
                  <span class="value"> EUW1</span>
                </div>
                <div class="attribute">
                  <span class="key">Summoner name: </span>
                  <span class="value"> {{summoner.name}}</span>
                </div>
                <div class="attribute">
                  <span class="key">Level: </span>
                  <span class="value"> {{summoner.summonerLevel}}</span>
                </div>
                <div class="attribute">
                  <span class="key">RevisionDate: </span>
                  <span class="value"> {{summoner.revisionDate}}</span>
                </div>
              </v-flex>
              <v-flex md5>
                <v-btn color="indigo" @click="viewDetails">View Details</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>

        </v-layout>
      </v-card>

  </div>
</template>

<script>

  import { getSummoner } from "../utils/api";

  export default {
  name: 'Summoner',
  data: function() {
    return {
      searchName: this.$route.params.summonerName,
      summonerVisible:false,
      summoner: {},
    }
  },
  methods: {
    viewDetails(){
      this.$emit('showMatchList')
    },
    searchSummonerHandler(){
      if (this.searchName !== undefined ) {
        this.$router.push({path:'/consult/'+this.searchName});
        getSummoner(this.searchName).then(res => {
          this.summoner = res;
          this.summoner.revisionDate = this.handleDate(this.summoner.revisionDate);
          this.$emit('getSummoner',this.summoner);
          this.summonerVisible=true;
        });
      }
    },
    handleDate(revisionDate){
      let date = new Date(revisionDate);
      const y = date.getFullYear();
      const m = date.getMonth() + 1;
      const d = date.getDate();
      return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + date.toTimeString().substr(0, 8);
    }
  },

  mounted:function(){
    if (this.$route.params.gameId) {
      this.summonerVisible=true
    }
  }
};

</script>
<style>
#summonerId{
  text-align: center;
  font-size: 40px;
  background-color: white;
  width: 60%;
  color: gray;
}
.attribute{
  text-align:left;
}
.key{
  font-weight: bolder;
  font-size: 20px;
  color: black
}
.value{
  font-size: 20px;
}
</style>
