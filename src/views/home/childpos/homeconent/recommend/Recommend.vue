<template>
  <div>
    <recommend-swiper :banners="swipers"></recommend-swiper>
    <recommend-multicell/>
    <recommend-line/>
    <recommend-adver/>
    <recommend-line/>
    <recommend-phone :phonedata="phones"></recommend-phone>
    <recommend-line/>
    <recommend-tv :tvdata="tv"></recommend-tv>
    <recommend-line/>
    <recommend-banner>
      <img src="~@/assets/img/recommend/banners/banner1.webp" alt="">
    </recommend-banner>
    <recommend-line/>
    <recommend-notebook :notebookdata="notebooks"></recommend-notebook>
    <recommend-line/>
    <recommend-banner>
      <img src="~@/assets/img/recommend/banners/banner2.webp" alt="">
    </recommend-banner>
    <recommend-line/>
    <recommend-device :devicedata="device"></recommend-device>
    <recommend-line/>
    <recommend-banner>
      <img src="~@/assets/img/recommend/banners/banner3.jpg" alt="">
    </recommend-banner>
    <recommend-line/>
    <recommend-smart :smartdata="smart"></recommend-smart>
    <recommend-line/>
    <recommend-other :otherdata="other"></recommend-other>
    <recommend-line/>
    <recommend-banner>
      <img src="~@/assets/img/recommend/banners/banner4.webp" alt="">
    </recommend-banner>
    <recommend-banner>
      <img src="~@/assets/img/recommend/banners/mi_footer.png" alt="">
    </recommend-banner>
  </div>
</template>

<script>
  import RecommendSwiper from './childpos/RecommendSwiper'
  import RecommendMulticell from './childpos/RecommendMulticell'
  import RecommendLine from './childpos/RecommendLine'
  import RecommendAdver from './childpos/RecommendAdver'
  import RecommendPhone from './childpos/RecommendPhone'
  import RecommendTv from './childpos/RecommendTv'
  import RecommendBanner from './childpos/RecommendBanner'
  import RecommendNotebook from './childpos/RecommendNotebook'
  import RecommendDevice from './childpos/RecommendDevice'
  import RecommendSmart from './childpos/RecommendSmart'
  import RecommendOther from './childpos/RecommendOther'
  import { getSwiperdata, getPhonedata, getTvdata, getNotebookdata, getDevicedata, getSmartdata, getOtherdata } from '@/network/home'

  export default {
    name: 'Recommend',
    components: {
      RecommendSwiper,
      RecommendMulticell,
      RecommendLine,
      RecommendAdver,
      RecommendPhone,
      RecommendTv,
      RecommendBanner,
      RecommendNotebook,
      RecommendDevice,
      RecommendSmart,
      RecommendOther
    },
    data() {
      return {
        swipers: [],
        phones: [],
        tv: [],
        notebooks: [],
        device: [],
        smart: [],
        other: []
      }
    },
    created() {
      getSwiperdata().then(res => {
        this.swipers = res.data
      }).catch(err => {
        console.log(err);
      })
      getPhonedata().then(res => {
        this.phones = res.data
      }).catch(err => {
        console.log(err);
      })
      getTvdata().then(res => {
        this.tv = res.data
      }).catch(err => {
        console.log(err);
      })
      getNotebookdata().then(res => {
        this.notebooks = res.data
      }).catch(err => {
        console.log(err);
      })
      getDevicedata().then(res => {
        this.device = res.data
      }).catch(err => {
        console.log(err);
      })
      getSmartdata().then(res => {
        this.smart = res.data
      }).catch(err => {
        console.log(err);
      })
      getOtherdata().then(res => {
        this.other = res.data
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>
</style>