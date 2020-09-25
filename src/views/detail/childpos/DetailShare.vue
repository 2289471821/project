<template>
  <div>
    <div :class="{uimask: $store.state.isShareshow}"></div>
    <div class="detail-share" :class="{myshow: !$store.state.isShareshow}">
      <div class="share-title">分享</div>
      <div class="share-link">
        <img src="~@/assets/img/detail/weibo.png" alt="">
      </div>
      <div class="share-close" @click="close">取消</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShare',
    methods: {
      close() {
        this.$store.commit('changeShareshow');
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
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -5px 5px rgba(100, 100, 100, .1);
    z-index: 110;
  }
  .share-title,.share-close {
    height: 25%;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    color: rgba(0,0,0,.87);
  }
  .share-link {
    height: 50%;
    text-align: center;
  }
  .share-link img {
    width: 50px;
    margin-top: 25px;
  }
  .uimask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.8);
    z-index: 100;
  }
  .myshow {
    display: none;
  }
</style>
