<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .nav-bar {
    height: 44px;
    display: flex;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    background-color: #f2f2f2;
  }
  .left, .right {
    width: 15%;
    margin: auto 0;
  }
  .left img, .right img {
    width: 26px;
  }
  .center {
    flex: 1;
    margin: auto 0;
  }
</style>
