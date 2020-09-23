<template>
  <nav-bar>
    <div slot="left">
      <img src="@/assets/img/navbar/logo.png" alt="">
    </div>
    <div slot="center">
      <input type="text" placeholder="搜索商品名称">
    </div>
    <div slot="right">
      <img src="@/assets/img/navbar/profile.svg" alt="">
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'

  export default {
    name: 'HomeNavBar',
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  input {
    width: 100%;
    padding: 7px 0 7px 30px;
    border-radius: 5px;
    border: 0 solid #000;
    outline: none;
    background-image: url('~@/assets/img/navbar/search.png');
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 5px;
  }
  ::-webkit-input-placeholder {
    color:rgba(0, 0, 0, .3);
  }
</style>
