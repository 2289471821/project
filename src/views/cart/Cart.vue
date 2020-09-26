<template>
  <div class="content-container">
    <cart-nav-bar/>
    <cart-content/>

    <back-top/>
  </div>
</template>

<script>
  import CartNavBar from './childpos/CartNavBar'
  import CartContent from './childpos/CartContent'
  import BackTop from '@/components/common/backTop/BackTop'

  export default {
    name: 'Cart',
    components: {
      CartNavBar,
      CartContent,
      BackTop
    }
  }
</script>

<style scoped>
  .content-container {
    overflow: scroll;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
