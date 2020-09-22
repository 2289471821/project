<template>
  <div class="multi-cell">
    <div class="items">
      <img src="~@/assets/img/recommend/1.png" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/2.webp" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/3.webp" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/4.webp" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/5.webp" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/6.webp" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/7.png" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/8.png" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/9.webp" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/10.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecomendMulticell'
  }
</script>

<style scoped>
  .multi-cell {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
  }
  .items {
    flex: 1;
    height: 80px;
  }
  .items img {
    width: 75px;
    height: 80px;
  }
</style>
