<template>
  <div>
    <!-- <swiper v-for="item in swipers" :key="item.id">
      <swiper-item></swiper-item>
    </swiper> -->
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from '@/components/common/swiper/index'
  import { getSwiperdata } from '@/network/home'

  export default {
    name: 'Recommend',
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        swipers: []
      }
    },
    created() {
      getSwiperdata().then(res => {
        console.log(res.data);
        this.swipers = res.data
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>

</style>