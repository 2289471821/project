<template>
  <div class="multi-cell">
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
    name: 'RecomendMulticellTwo'
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
