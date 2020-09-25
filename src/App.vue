<template>
  <div id="app">
    <keep-alive include="detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/maintabbar/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import url(assets/css/base.css);
</style>
