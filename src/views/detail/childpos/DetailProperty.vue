<template>
  <div class="property">
    <div class="property-item" v-for="(item, index) in property" :key="index">
      <img :src="item.img" alt="">
      <div class="property-name">{{item.name}}</div>
      <div class="property-value">{{item.value}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailProperty',
    props: {
      property: Array
    }
  }
</script>

<style scoped>
  .property {
    display: flex;
    text-align: center;
    color: #000;
    border-top: 1px solid rgba(0,0,0,.05);
    overflow-x: auto;
    overflow-y: hidden;
  }
  .property::-webkit-scrollbar{
    display: none
  }
  .property-item {
    width: 30%;
    padding: 16px;
  }
  .property-item img {
    display: block;
    width: 15px;
    height: 15px;
    margin: 0 auto 5px;
  }
  .property-name {
    font-size: 14px;
    padding: 5px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .property-value {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
  }
</style>
