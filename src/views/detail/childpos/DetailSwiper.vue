<template>
  <swiper>
    <swiper-item v-for="(item, index) in carousel" :key="index">
      <img :src="item.img" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from '@/components/common/swiper/index'

  export default {
    name: 'DetailSwiper',
    props: {
      carousel: Array
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
