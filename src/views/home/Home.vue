<template>
  <div id="home">
    <header class="header-bar">
      <home-nav-bar />
      <home-nav-wrap />
    </header>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import HomeNavBar from './childpos/homenav/HomeNavBar'
  import HomeNavWrap from './childpos/homenav/HomeNavWrap'

  export default {
    name: 'Home',
    components: {
      HomeNavBar,
      HomeNavWrap,
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
</style>
