<template>
  <nav-bar>
    <div slot="left" @click="$router.go(-1)">
      <img src="~@/assets/img/navbar/left_arrows.svg" alt="">
    </div>
    <div slot="center">购物车</div>
    <div slot="right">
      <img src="~@/assets/img/navbar/search.png" alt="">
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'

  export default {
    name: 'CartNavBar',
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
</style>
