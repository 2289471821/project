<template>
  <div class="other-content">
    <ul>
      <li v-for="(items, index) in otherdata" :key="index" class="other-item">
        <img :src="items.info" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'RecommendOther',
    props: {
      otherdata: Array
    }
  }
</script>

<style scoped>
  .other-content {
    width: 100%;
  }
  .other-item img {
    width: 99%;
  }
  .other-content ul {
    display: flex;
    flex-wrap: wrap;
  }
  .other-item {
    width: 50%;
    display: flex;
    margin-bottom: 2px;
  }
</style>
