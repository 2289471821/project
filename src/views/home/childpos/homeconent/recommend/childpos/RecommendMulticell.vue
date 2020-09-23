<template>
  <div class="multi-cell">
    <div class="items">
      <img src="~@/assets/img/recommend/multi/1.png" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/multi/2.webp" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/multi/3.webp" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/multi/4.webp" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/multi/5.webp" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/multi/6.webp" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/multi/7.png" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/multi/8.png" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/multi/9.webp" alt="">
    </div>
    <div class="items">
      <img src="~@/assets/img/recommend/multi/10.png" alt="">
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
