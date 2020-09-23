<template>
  <div>
    <div class="advertision">
      <div class="adver-left">
        <a href=""><img src="~@/assets/img/recommend/banners/left.webp" alt=""></a>
      </div>
      <div class="adver-right">
        <a href="" class="right-img"><img src="~@/assets/img/recommend/banners/right1.webp" alt=""></a>
        <a href=""><img src="~@/assets/img/recommend/banners/right2.webp" alt=""></a>
      </div>
    </div>
    <recommend-line></recommend-line>
    <div class="banners">
      <a href=""><img src="~@/assets/img/recommend/banners/1.webp" alt=""></a>
    </div>
  </div>
  
</template>

<script>
  import RecommendLine from './RecommendLine'

  export default {
    name: 'RecommendAdver',
    components: {
      RecommendLine
    }
  }
</script>

<style scoped>
  .advertision {
    display: flex;
  }
  .advertision a, .banners a {
    display: flex;
  }
  .advertision img {
    width: 100%;
  }
  .adver-left img {
    height: 100%;
  }
  .adver-left {
    flex: 1;
  }
  .adver-right {
    flex: 1;
  }
  .right-img {
    width: 100%;
    margin-bottom: 5px;
  }
  .banners img {
    width: 100%;
  }
</style>
