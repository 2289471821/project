<template>
  <div class="detail-share" :class="{myshow: handover}">
    <div class="share-title">分享</div>
    <div class="share-link">
      <img src="~@/assets/img/detail/weibo.png" alt="">
    </div>
    <div class="share-close" @click="close">取消</div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShare',
    props: {
      isHandover: Boolean
    },
    data() {
      return {
        handover: this.isHandover
      }
    },
    methods: {
      close() {
        this.handover = !this.handover
        this.$emit('handoverClick', this.handover)
      }
    }
  }
</script>

<style scoped>
  .detail-share {
    height: 200px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    box-shadow: 0 -5px 5px rgba(100, 100, 100, .1);
    z-index: 99;
  }
  .share-title,.share-close {
    height: 25%;
    font-size: 18px;
    text-align: center;
  }
  .share-link {
    height: 50%;
    text-align: center;
  }
  .myshow {
    display: none;
  }
</style>
