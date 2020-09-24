<template>
  <nav-bar>
    <div slot="left">
      <img src="~@/assets/img/navbar/left_arrows.svg" alt="">
    </div>
    <div slot="center" class="detail-items">
      <div class="detail-item">商品</div>
      <div class="detail-item">评价</div>
      <div class="detail-item">详情</div>
    </div>
    <div slot="right" @click="handoverClick">
      <img src="~@/assets/img/navbar/share.png" alt="">
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  export default {
    name: 'DetailNvaBar',
    components: {
      NavBar
    },
    props: {
      isToggle: Boolean
    },
    data() {
      return {
        isHandover: this.isToggle
      }
    },
    methods: {
      handoverClick() {
        this.isHandover = !this.isHandover
        this.$emit('toggleClick', this.isHandover)
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: -1px;
    z-index: 2;
  }
  .detail-items {
    display: flex;
    justify-content: center;
  }
  .detail-item {
    padding: 0 5px;
    font-size: 14px;
  }
</style>
