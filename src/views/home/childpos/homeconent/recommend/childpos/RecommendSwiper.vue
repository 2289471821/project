<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.id">
      <img :src="item.swiper" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from '@/components/common/swiper/index'

  export default {
    name: 'RecommendSwiper',
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
  }
</script>

<style scoped>

</style>
