<template>
<v-container grid-list-xs>    
  <v-carousel class="carousel" height="800">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
</v-container>
</template>

<script>
  export default {
    name:'Welcome',
    data () {
      return {
        items: [
          {
            src: 'https://i2.wp.com/www.connectesport.com/alpha/wp-content/uploads/2019/05/g2-esports.jpg?resize=1024%2C575&ssl=1'
          },
          {
            src: 'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0519%2Fr545286_1296x729_16%2D9.jpg'
          },
          {
            src: 'http://5b0988e595225.cdn.sohucs.com/images/20181012/e2713a4107b541c2bd331921144d3253.jpeg'
          },
          {
            src: 'http://s1.1zoom.me/b5050/559/310407-alexfas01_2560x1440.jpg'
          },
          {
            src: 'https://cdn.guidingtech.com/imager/media/assets/196287/Best-League-of-Legends-Wallpapers-5_4d470f76dc99e18ad75087b1b8410ea9.jpg?1526290844'
          },
          {
            src: 'http://cooldown.fr/wp-content/uploads/2013/11/League-of-legends.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
      
  .carousel{
    max-width : 75vw;
    margin :auto;
  }
</style>