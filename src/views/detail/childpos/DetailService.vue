<template>
  <div class="service" @click="serviceClick">
    <div class="service-items">
      <div class="service-item"> 
        <img src="~@/assets/img/detail/service-policy.png" alt="">
        <span>小米自营</span>
      </div>
      <div class="service-item"> 
        <img src="~@/assets/img/detail/service-policy.png" alt="">
        <span>小米发货</span>
      </div>
      <div class="service-item"> 
        <img src="~@/assets/img/detail/service-policy.png" alt="">
        <span>7天无理由退货</span>
      </div>
      <div class="service-img">
        <img src="~@/assets/img/profile/right_arrows.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailService',
    methods: {
      serviceClick() {
        this.$store.commit('changeServiceshow')
      }
    }
  }
</script>

<style scoped>
  .service {
    padding: 9px 18px;
    background-color: #fcfcfc;
    text-align: left;
  }
  .service-items {
    display: flex;
    flex-wrap: wrap;
  }
  .service-item {
    display: flex;
    align-items: center;
    margin-right: 18px;
    font-size: 14px;
    color: rgba(0,0,0,.54);
  }
  .service-item img {
    width: auto;
    height: 14px;
    margin-right: 5px;
  }
  .service-img img {
    width: 15px;
    height: 15px;
  }
  .service-img {
    position: absolute;
    right: 10px;
  }
</style>
