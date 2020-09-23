<template>
  <div class="recommend-banners">
    <a href=""><slot></slot></a>
  </div>
</template>

<script>
  export default {
    name: 'RecommendBanner'
  }
</script>

<style scoped>
  .recommend-banners img {
    width: 100%;
  }
  .recommend-banners a {
    display: flex;
  }
</style>
