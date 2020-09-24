<template>
  <div class="detail-tab-bar">
    <div class="detail-items">
      <div class="detail-item" @click="homeClick">
        <div><img src="~@/assets\img\detail\home.png" alt=""></div>
        <span>首页</span>
      </div>
      <div class="detail-item">
        <div><img src="~@/assets\img\detail\service.png" alt=""></div>
        <span>客服</span>
      </div>
      <div class="detail-item" @click="cartClick">
        <div><img src="~@/assets\img\detail\cart.png" alt=""></div>
        <span>购物车</span>
      </div>
    </div>
    <div class="detail-cart">
      <div>
        <span>加入购物车</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailTabBar',
    methods: {
      homeClick() {
        this.$router.push('/')
      },
      cartClick() {
        this.$router.push('/cart')
      }
    }
  }
</script>

<style scoped>
  .detail-tab-bar {
    height: 49px;
    width: 100%;
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: -1px;
    box-shadow: 0 -5px 5px rgba(100, 100, 100, .1);
  }
  .detail-items {
    width: 40%;
    display: flex;
    text-align: center;
  }
  .detail-item {
    flex: 1;
    font-size: 13px;
  }
  .detail-item img {
    width: 50%;
    vertical-align: middle;
    margin: 2px 0;
  }
  .detail-cart {
    width: 60%;
    display: flex;
    text-align: center;
  }
  .detail-cart div {
    width: 80%;
    height: 40px;
    margin: auto;
    line-height: 40px;
    border: 1px solid #ff6700;
    border-radius: 20px;
    background-color: #ff6700;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
  }
</style>
