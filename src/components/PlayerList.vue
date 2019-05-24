<template>
  <div>
    <v-card v-if="team == 0" color="blue lighten-2" dark>
      <v-card-title primary class="title">{{ player.id }}</v-card-title>
      <div class="role">
        <img :src="getChampionImgSrc(player.champion)" class="championIcon">
        <img class="itemIcon" v-for="(itemId,index) in notNullItems" :key="index" :src="getItemImgSrc(itemId)"/>
        <!--
        <img class="itemIcon" v-for="(itemId,index) in player.items" :key="index" :src="getItemImgSrc(itemId)"/>
        -->
      </div>
      <div class="meta">
        <span class="name">{{player.summonerName}}</span>
        <span>role : {{player.lane}}</span>
      </div>
      <div class="performance">
        <span>KDA : {{player.kda}}</span>
        <span>Gold : {{player.gold}}</span>
      </div>
      <div class="dmg">
        <span>Damage : {{player.dmg}}</span>
        <span>Damage Taken : {{player.dmgTaken}}</span>
      </div>
    </v-card>

    <v-card v-else color="purple lighten-1" dark>
      <v-card-title primary class="title">{{ player.id }}</v-card-title>
      <div class="role">
        <img :src="getChampionImgSrc(player.champion)" class="championIcon">
        <img class="itemIcon" v-for="(itemId,index) in notNullItems" :key="index" :src="getItemImgSrc(itemId)"/>
      </div>
      <div class="meta">
        <span class="name">{{player.summonerName}}</span>
        <span>role : {{player.lane}}</span>
      </div>
      <div class="performance">
        <span>KDA : {{player.kda}}</span>
        <span>Gold : {{player.gold}}</span>
      </div>
      <div class="dmg">
        <span>Damage : {{player.dmg}}</span>
        <span>Damage Taken : {{player.dmgTaken}}</span>
      </div>
    </v-card>
  </div>
</template>

<script>
  import { getChampionImage } from "../utils/api";
  import * as utils from '../utils/utils'
  import raw from "../assets/raw_champion.json";

  function idToName(championId) {
    const rawChampions = utils.clone(raw.data);
    for (const championName in rawChampions) {
      if (rawChampions.hasOwnProperty(championName)) {
        const element = rawChampions[championName];
        if (championId == element["key"]) {
          return championName;
        }
      }
    }
    return "404";
  }

  export default {
    name: "PlayerList",
    props: ['player','team'],
    data: function () {
      return {
        //
      }
    },
    computed: {
      notNullItems: function () {
        return this.player.items.filter(function (itemId) {
          return itemId>0;
        })
      }
    },
    methods:{
      getChampionImgSrc: function (championId) {
        let championName = idToName(championId);
        if (championName == "404") {
          return require("../assets/null.png");
        }
        return "http://ossweb-img.qq.com/images/lol/img/champion/"+championName+".png";
      },
      getItemImgSrc: function(itemId){
        if (itemId === 0) {
          return require("../assets/null.png");
        }
        return "http://ossweb-img.qq.com/images/lol/img/item/"+itemId+".png";
      }
    },
    mounted(){
      //
    }
  }
</script>

<style scoped>
  span{
    margin: 20px;
    color: black;
    font-size: 16px;
  }
  span.name{
    font-weight: bolder;
  }
  .championIcon{
    height: 5vw;
    width: 5vw;
    margin-left: 5%;
    margin-right: 5%;
  }
  .itemIcon{
    height: 3vw;
    width: 3vw;
  }
</style>