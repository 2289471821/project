<template>
  <div>
    <recommend-swiper :banners="swipers"></recommend-swiper>
    <recommend-multicell></recommend-multicell>

  </div>
</template>

<script>
  import RecommendSwiper from './childpos/RecommendSwiper'
  import RecommendMulticell from './childpos/RecommendMulticell'
  import { getSwiperdata } from '@/network/home'

  export default {
    name: 'Recommend',
    components: {
      RecommendSwiper,
      RecommendMulticell
    },
    data() {
      return {
        swipers: []
      }
    },
    created() {
      getSwiperdata().then(res => {
        this.swipers = res.data
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>

</style>