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
  }
  .items {
    flex: 1;
  }
  .items img {
    width: 100%;
    height: 100%;
  }
</style>
