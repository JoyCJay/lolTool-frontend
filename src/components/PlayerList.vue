<template>
  <div>
    <v-card v-if="team == 0" color="blue lighten-2" dark>
      <v-card-title primary class="title">{{ player.id }}</v-card-title>
      <div class="role">
        <img :src="getChampionImgSrc(player.champion)" class="championIcon">
        <span>{{player.champion}}</span>
        <span>role : {{player.lane}}</span>
      </div>
      <div class="meta">
        <span>KDA : {{player.kda}}</span>
        <span>Gold : {{player.gold}}</span>
      </div>
      <div class="dmg">
        <span>Damage : {{player.dmg}}</span>
        <span>Damage Taken : {{player.dmgTaken}}</span>
      </div>
      <div class="item">
        <span>Items</span>
        <img class="itemIcon" v-for="(itemId,index) in player.items" :key="index" :src="getItemImgSrc(itemId)"/>
      </div>
    </v-card>

    <v-card v-else color="purple lighten-1" dark>
      <v-card-title primary class="title">{{ player.id }}</v-card-title>
      <div class="role">
        <span>role : {{player.lane}}</span>
        <span>Champion : {{player.champion}}</span>
      </div>
      <div class="meta">
        <span>KDA : {{player.kda}}</span>
        <span>Gold : {{player.gold}}</span>
      </div>
      <div class="dmg">
        <span>Damage : {{player.dmg}}</span>
        <span>Damage Taken : {{player.dmgTaken}}</span>
      </div>
      <div class="item">
        <span>Items</span>
        <img class="itemIcon" v-for="(itemId,index) in player.items" :key="index" :src="getItemImgSrc(itemId)"/>
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
    },
    methods:{
      getChampionImgSrc: function (championName) {
        return "http://ossweb-img.qq.com/images/lol/img/champion/"+championName+".png" ;
      },
      getItemImgSrc: function(itemId){
        if (itemId == 0) {
          return require("../assets/null.png");
        }
        return "http://ossweb-img.qq.com/images/lol/img/item/"+itemId+".png";
      }
    }
  }
</script>

<style scoped>
  span{
    margin: 20px;
    color: black;
  }
  .championIcon{
    height: 60px;
    width: 60px;
  }
  .itemIcon{
    height: 40px;
    width: 40px;
  }
</style>