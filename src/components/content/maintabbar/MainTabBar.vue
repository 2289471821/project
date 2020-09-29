<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/planet">
      <img slot="item-icon" src="@/assets/img/tabbar/planet.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/planet_active.svg" alt="">
      <div slot="item-text">星球</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车<em class="bubble" v-show="$store.state.cartList.length">{{totalNumber}}</em></div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    },
    computed: {
      totalNumber() {
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count
        }, 0)
      }
    }
  }
</script>

<style scoped>
  .bubble {
    width: 18px;
    height: 18px;
    line-height: 18px;
    position: absolute;
    top: 5px;
    left: 70%;
    transform: translate3d(6px,-20%,0);
    background: linear-gradient(45deg,#ff7d00,#ff5934);
    color: #fff;
    border-radius: 20px;
    text-align: center;
    overflow: hidden;
    z-index: 120;
  }
</style>
