<template>
  <div class="detail content-container">
    <detail-nav-bar/>
    <detail-swiper :carousel="detailed_img"/>
    <detail-content 
      :new_price="new_price" 
      :old_price="old_price" 
      :name="name" 
      :detailed_info_title="detailed_info_title" 
      :detailed_info_items="detailed_info_items"/>
    <detail-property :property="property"/>
    <recommend-line/>
    <detail-option/>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <div>13</div>
    <detail-tab-bar @addCart="addToCart"/>
    <back-top/>
    <detail-choose :spec="spec" :name="name"/>
    <detail-share/>
  </div>
</template>

<script>
  import BackTop from '@/components/common/backTop/BackTop'
  import DetailNavBar from './childpos/DetailNavBar'
  import DetailTabBar from './childpos/DetailTabBar'
  import DetailShare from './childpos/DetailShare'
  import DetailSwiper from './childpos/DetailSwiper'
  import DetailContent from './childpos/DetailContent'
  import DetailProperty from './childpos/DetailProperty'
  import RecommendLine from '@/views/home/childpos/homeconent/recommend/childpos/RecommendLine'
  import DetailChoose from './childpos/DetailChoose'
  import DetailOption from './childpos/DetailOption'

  import { getDetaildata } from '@/network/detail'

  export default {
    name: 'Detail',
    components: {
      BackTop,
      DetailNavBar,
      DetailTabBar,
      DetailShare,
      DetailSwiper,
      DetailContent,
      DetailProperty,
      RecommendLine,
      DetailChoose,
      DetailOption
    },
    data() {
      return {
        genre: null,
        id: null,
        name: null,
        old_price: null,
        new_price: null,
        simple_info: null,
        detailed_info_title: null,
        detailed_info_items: null,
        simple_img: null,
        detailed_img: null,
        property: null,
        spec: null,
        recommend: null
      }
    },
    methods: {
      addToCart() {
        const product = {}
        product.image = this.simple_img;
        product.name = this.name;
        product.price = this.new_price;
        product.genre = this.genre;
        product.id = this.id;

        this.$store.commit('addCart', product);
      }
    },
    created() {
      this.genre = this.$route.query.type;
      this.id = this.$route.query.id;

      getDetaildata(this.genre, this.id).then(res => {
        this.name = res.data.name
        this.old_price = res.data.old_price
        this.new_price = res.data.new_price
        this.simple_info = res.data.simple_info
        this.detailed_info_title = JSON.parse(res.data.detailed_info).title
        this.detailed_info_items = JSON.parse(res.data.detailed_info).items
        this.simple_img = res.data.simple_img
        this.detailed_img = JSON.parse(res.data.detailed_img).swiper
        this.property = JSON.parse(res.data.property).property
        this.spec = JSON.parse(res.data.spec)
        this.recommend = res.data.recommend
      }).catch(error => {
        console.log(error);
      })
    }
  }
</script>

<style scoped>
  .content-container {
    overflow: scroll;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .detail {
    z-index: 1;
  }
</style>
