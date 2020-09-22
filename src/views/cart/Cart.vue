<template>
  <nav-bar>
    <div slot="left">
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
    name: 'Cart',
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>
