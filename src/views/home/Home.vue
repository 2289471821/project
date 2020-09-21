<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <home-nav-wrap></home-nav-wrap>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeNavBar from './childpos/homenav/HomeNavBar'
  import HomeNavWrap from './childpos/homenav/HomeNavWrap'

  export default {
    name: 'Home',
    components: {
      HomeNavBar,
      HomeNavWrap
    }
  }
</script>

<style scoped>
  
</style>
