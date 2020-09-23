<template>
  <div id="home">
    <header class="header-bar">
      <home-nav-bar />
      <home-nav-wrap />
    </header>
    <div class="content-container">
      <router-view/>
      <back-top/>
    </div>
  </div>
</template>

<script>
  import HomeNavBar from './childpos/homenav/HomeNavBar'
  import HomeNavWrap from './childpos/homenav/HomeNavWrap'
  import BackTop from '@/components/common/backTop/BackTop'

  export default {
    name: 'Home',
    components: {
      HomeNavBar,
      HomeNavWrap,
      BackTop
    }
  }
</script>

<style scoped>
  .header-bar {
    position: fixed;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 99;
    -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
    background: #f2f2f2;
  }
  #home {
    padding: 71px 0 49px;
    height: 100vh;
    position: relative;
  }
  .content-container {
    overflow: scroll;
    position: absolute;
    top: 71px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
